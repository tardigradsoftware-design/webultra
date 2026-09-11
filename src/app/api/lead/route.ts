import { NextResponse } from "next/server"
import { Resend } from "resend"

import { leadSchema, emailDomainAllowed } from "@/lib/lead"
import { getService } from "@/data/services"
import { site } from "@/data/site"
import { appendLead } from "@/lib/lead-store"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** Basit, bellek içi hız sınırı (tek instance; çoklu instance'ta Upstash/Redis'e taşınır) */
const hits = new Map<string, { n: number; t: number }>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = Number(process.env.LEAD_RATE_LIMIT_PER_IP_PER_HOUR ?? 6)

function rateLimited(ip: string) {
  const now = Date.now()
  const rec = hits.get(ip)
  if (!rec || now - rec.t > WINDOW_MS) {
    hits.set(ip, { n: 1, t: now })
    return false
  }
  rec.n += 1
  if (rec.n > MAX_PER_WINDOW) return true
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (now - v.t > WINDOW_MS) hits.delete(k)
  }
  return false
}

function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function emailHtml(values: Record<string, unknown>): string {
  const rows: [string, string][] = [
    ["Ad Soyad", esc(values.name)],
    ["Firma", esc(values.company)],
    ["E-posta", esc(values.email)],
    ["Telefon", esc(values.phone)],
    ["Şehir", esc(values.city || "—")],
    ["Hizmet", getService(String(values.serviceSlug || ""))?.title ?? "—"],
    ["Konu", esc(values.topic)],
    ["Bütçe", esc(values.budget || "belirtilmedi")],
    ["Geldiği sayfa", esc(values.source || "/")],
  ]
  return `<div style="font-family:-apple-system,Segoe UI,Inter,Roboto,sans-serif;background:#F8FAFC;padding:24px">
  <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #E2E8F0;border-radius:12px;overflow:hidden">
    <div style="background:#0F2A44;color:#fff;padding:18px 22px">
      <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">tardigradsoftware.com · yeni talep</div>
      <div style="font-size:19px;font-weight:600;margin-top:4px">${esc(values.name)} — ${
        getService(String(values.serviceSlug || ""))?.title ?? "Genel talep"
      }</div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;color:#334155">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:10px 22px;width:170px;color:#64748B;border-top:1px solid #F1F5F9">${k}</td><td style="padding:10px 22px;border-top:1px solid #F1F5F9;font-weight:500">${v}</td></tr>`,
        )
        .join("")}
    </table>
    <div style="padding:16px 22px 22px;border-top:1px solid #F1F5F9">
      <div style="font-size:12px;color:#64748B;margin-bottom:6px">Mesaj</div>
      <div style="font-size:14px;line-height:22px;color:#0F172A;white-space:pre-wrap">${esc(values.message)}</div>
    </div>
    <div style="background:#F8FAFC;padding:12px 22px;font-size:12px;color:#64748B">
      KVKK açık rıza verildi · ${new Date().toLocaleString("tr-TR")}
    </div>
  </div>
</div>`
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Geçersiz istek gövdesi." }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message ?? "Form verileri geçersiz.",
        issues: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
      },
      { status: 422 },
    )
  }

  const values = parsed.data
  if (values.website) {
    // honeypot doldu → bot'a başarı gibi görün
    return NextResponse.json({ ok: true, mocked: true })
  }
  if (!emailDomainAllowed(values.email)) {
    return NextResponse.json(
      {
        error:
          "Geçici e-posta adresleriyle başvuru kabul edilemiyor. Lütfen kurumsal adresinizi kullanın.",
      },
      { status: 422 },
    )
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local"
  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        error:
          "Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin veya info@tardigradsoftware.com adresine yazın.",
      },
      { status: 429 },
    )
  }

  const serviceTitle = getService(String(values.serviceSlug || ""))?.title
  const subject = `Yeni talep · ${serviceTitle ?? "Genel"} · ${values.company || values.name}`
  const source = values.source ?? "/"
  const key = process.env.RESEND_API_KEY
  const mockMode =
    process.env.RESEND_MOCK === "1" || (process.env.RESEND_MOCK === "auto" && !key)

  if (mockMode) {
    console.info("[lead:mock] RESEND_API_KEY yok / mock mod — talep yerel log'a yazıldı.")
    await appendLead({ channel: "mock", lead: values as unknown as Record<string, unknown> })
    return NextResponse.json({ ok: true, mocked: true })
  }

  try {
    const resend = new Resend(key!)
    const to = (process.env.RESEND_TO || site.email)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
    const cc = (process.env.RESEND_CC || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || `${site.name} <onboarding@resend.dev>`,
      to,
      ...(cc.length ? { cc } : {}),
      replyTo: values.email,
      subject,
      html: emailHtml(values as unknown as Record<string, unknown>),
      text: [
        `Yeni talep: ${subject}`,
        `Ad Soyad: ${values.name}`,
        `Firma: ${values.company}`,
        `E-posta: ${values.email}`,
        `Telefon: ${values.phone}`,
        `Hizmet: ${serviceTitle ?? "-"}`,
        `Bütçe: ${values.budget ?? "-"}`,
        "",
        values.message,
      ].join("\n"),
      headers: { "X-Tardigrad-Source": String(source) },
    })

    if (error) {
      // Bildirim kanalı çalışmasa da talebi kaybediyoruz → kullanıcıya başarı, bize fallback kayıt
      console.error("[lead] resend error:", error)
      await appendLead({
        channel: "fallback",
        error: String((error as { message?: string })?.message ?? error),
        lead: values as unknown as Record<string, unknown>,
      })
      return NextResponse.json({ ok: true, queued: true })
    }
    await appendLead({ channel: "resend", ok: true, lead: values as unknown as Record<string, unknown> })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[lead] unexpected:", e)
    await appendLead({
      channel: "fallback",
      error: e instanceof Error ? e.message : "unknown",
      lead: values as unknown as Record<string, unknown>,
    })
    return NextResponse.json({ ok: true, queued: true })
  }
}
