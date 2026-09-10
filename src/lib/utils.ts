import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Türkçe karakterleri ASCII'ye indirgeyen URL slug üretici */
const trMap: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  İ: "i",
  i: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
  â: "a",
  î: "i",
  û: "u",
}

export function toSlug(input: string): string {
  return input
    .split("")
    .map((c) => (c in trMap ? trMap[c] : c))
    .join("")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

/** URL'yi leading/trailing slash kurallına göre birleştirir (trailingSlash: true) */
export function url(...parts: (string | undefined | null)[]): string {
  const cleaned = parts
    .filter(Boolean)
    .map((p) => String(p).replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
  if (!cleaned.length) return "/"
  return `/${cleaned.join("/")}/`
}

export function absoluteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://tardigradsoftware.com").replace(
    /\/+$/,
    "",
  )
  if (/^https?:\/\//.test(path)) return path
  return `${base}${path === "/" ? "/" : path}`
}

/** Kelime sayısı (içerik bütçesi kontrolü) */
export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

/** Meta description / title için güvenli kırpma (kelime sınırında) */
export function clampText(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const at = Math.max(cut.lastIndexOf(" "), cut.lastIndexOf(","), cut.lastIndexOf("."))
  const base = at > max * 0.6 ? cut.slice(0, at) : cut
  return `${base.replace(/[,;:\-\s]+$/, "")}.`
}

/** Deterministik 32-bit hash — kategori şablonlarından çeşitli varyasyon üretmek için */
export function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length]
}

export function shuffleSeeded<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  let s = seed || 1
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    const j = s % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** İlk harfi büyüt (Türkçe güvenli) */
export function capitalize(text: string): string {
  if (!text) return text
  return text.charAt(0).toLocaleUpperCase("tr-TR") + text.slice(1)
}

export function formatPhoneE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "")
  if (!digits) return null
  if (digits.startsWith("90") && digits.length === 12) return `+${digits}`
  if (digits.startsWith("0") && digits.length === 11) return `+9${digits}`
  if (digits.length === 10) return `+90${digits}`
  return null
}

/**
 * Metni en fazla `max` karaktere sığdırır; cümle ortasında kesmez.
 * İki aday kesim noktasından (son cümle sınırı / son tam kelime) uzun olanı seçer,
 * böylece SERP için ayrılan alan boş kalmaz.
 */
export function fitText(text: string, max = 158): string {
  const t = text.trim().replace(/\s+/g, " ")
  const period = (v: string) => `${v.replace(/[,;:.\-\s]+$/, "").trim()}.`
  if (t.length <= max) return period(t)

  const window = t.slice(0, max - 1)
  const lastSpace = window.lastIndexOf(" ")
  const wordCut = lastSpace > max * 0.55 ? window.slice(0, lastSpace) : ""

  const sentenceEnd = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
  )
  const sentenceCut = sentenceEnd > max * 0.55 ? window.slice(0, sentenceEnd + 1).trim() : ""

  const best = [sentenceCut, wordCut].filter(Boolean).sort((a, b) => b.length - a.length)[0]
  if (!best) return period(window.trim())
  // bağlaçla bitmesin: "… ve." → "…"
  return period(best.replace(/(\s+)(ve|ile|i\u00e7in|veya|ile|ancak|yani|de|da)\s*$/i, ""))
}

/**
 * Başlık kırpma: marka uzantısını önce düşürür, kelime sınırında keser.
 * Başlıklar nokta ile bitmez — clampText yerine bu kullanılır.
 */
export function fitTitle(text: string, max = 60, brand = "Tardigrad Software"): string {
  const t = text.trim().replace(/\s+/g, " ")
  if (t.length <= max) return t
  const noBrand = t.replace(new RegExp(`\\s*\\|\\s*${brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"), "")
  if (noBrand.length <= max) return noBrand.trim()
  const w = noBrand.slice(0, max - 1)
  const sp = w.lastIndexOf(" ")
  const cut = sp > max * 0.6 ? w.slice(0, sp) : w
  return cut.replace(/[,;:\-|]+$/, "").trim()
}

/** Türkçe liste birleştirme: "a, b ve c" */
export function joinList(items: string[], connector = " ve "): string {
  const list = items.filter(Boolean)
  if (list.length <= 1) return list[0] ?? ""
  return `${list.slice(0, -1).join(", ")}${connector}${list[list.length - 1]}`
}
