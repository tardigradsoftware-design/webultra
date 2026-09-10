"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ArrowRight, CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react"

import { leadSchema, topicOptions, budgetOptions, type LeadValues } from "@/lib/lead"
import { services } from "@/data/services"
import { servicePath } from "@/lib/nav"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

type Status = "idle" | "submitting" | "success" | "error"

const fieldCls = "mt-1.5"
const errCls = "mt-1.5 text-[13px] font-medium text-[#B91C1C]"

export function LeadForm({
  defaultService,
  defaultTopic,
  compact = false,
  title = "Teklif ve ön analiz formu",
  description = "Formu doldurun, 24 saat içinde kapsam, takvim ve tahmini bütçeyi yazılı olarak dönelim.",
}: {
  defaultService?: string
  defaultTopic?: string
  compact?: boolean
  title?: string
  description?: string
}) {
  const [status, setStatus] = React.useState<Status>("idle")
  const [serverError, setServerError] = React.useState<string | null>(null)
  const [result, setResult] = React.useState<{ name: string; service?: string } | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      serviceSlug: defaultService ?? "",
      topic: (defaultTopic as LeadValues["topic"]) ?? "proje",
      consent: true,
      website: "",
    },
    mode: "onBlur",
  })

  // URL'den ön doldurma: /iletisim/?hizmet=crm&konu=on-analiz (window'dan okuyoruz → Suspense gerekmez)
  React.useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const hs = p.get("hizmet")
    const topic = p.get("konu")
    if (hs && services.some((s) => s.slug === hs)) setValue("serviceSlug", hs)
    if (topic && topicOptions.some((t) => t.value === topic))
      setValue("topic", topic as LeadValues["topic"])
  }, [setValue])

  const consent = watch("consent")
  const selectedService = services.find((s) => s.slug === watch("serviceSlug"))

  const onSubmit = async (values: LeadValues) => {
    setStatus("submitting")
    setServerError(null)
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source: typeof window !== "undefined" ? window.location.pathname : undefined,
          userAgent: typeof window !== "undefined" ? navigator.userAgent : undefined,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || "İstek gönderilemedi. Lütfen tekrar deneyin.")
      setResult({ name: values.name, service: selectedService?.title })
      setStatus("success")
      reset({ name: "", email: "", phone: "", company: "", message: "", consent: true, website: "" })
      toast.success("Talebiniz alındı", {
        description: data?.queued
          ? "Kaydedildi; bildirim kanalı geçici olarak devre dışı. Ekibimiz yine de 24 saat içinde döner."
          : "24 saat içinde e-posta ile dönüş yapacağız.",
      })
    } catch (e) {
      setStatus("error")
      const msg = e instanceof Error ? e.message : "Beklenmeyen bir hata oluştu."
      setServerError(msg)
      toast.error("Gönderim başarısız", { description: msg })
    }
  }

  if (status === "success") {
    return (
      <Card id="lead-form" className="border-[#A7F3D0] bg-white">
        <CardContent className="p-8 text-center md:p-12">
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-[#047857]">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-xl font-semibold">Talebiniz bize ulaştı{result?.name ? `, ${result.name}` : ""}.</h3>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-slate-600">
            {result?.service ? `${result.service} kapsamında` : "Yeni talebiniz için"} değerlendirmeyi
            başlattık. 24 saat içinde e-posta ile dönüş yapıyor; uygun saat için takvim bağlantısı
            gönderiyoruz.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
              Yeni talep oluştur
            </Button>
            {selectedService ? (
              <Button asChild variant="link" size="sm">
                <a href={servicePath(selectedService.slug)}>Hizmet detayını inceleyin</a>
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card id="lead-form" className={cn("bg-white", compact && "shadow-none")}>
      <CardContent className="p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0F172A]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
          <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />

          <div className="sm:col-span-1">
            <Label htmlFor="lead-name">Ad Soyad *</Label>
            <Input id="lead-name" autoComplete="name" placeholder="Ayşe Yılmaz" className={fieldCls} aria-invalid={!!errors.name} {...register("name")} />
            {errors.name ? <p className={errCls}>{errors.name.message}</p> : null}
          </div>

          <div className="sm:col-span-1">
            <Label htmlFor="lead-company">Firma *</Label>
            <Input id="lead-company" autoComplete="organization" placeholder="Firma / marka adı" className={fieldCls} aria-invalid={!!errors.company} {...register("company")} />
            {errors.company ? <p className={errCls}>{errors.company.message}</p> : null}
          </div>

          <div>
            <Label htmlFor="lead-email">Kurumsal e-posta *</Label>
            <Input id="lead-email" type="email" autoComplete="email" placeholder="ad@firma.com" className={fieldCls} aria-invalid={!!errors.email} {...register("email")} />
            {errors.email ? <p className={errCls}>{errors.email.message}</p> : null}
          </div>

          <div>
            <Label htmlFor="lead-phone">Telefon *</Label>
            <Input id="lead-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+90 5xx xxx xx xx" className={fieldCls} aria-invalid={!!errors.phone} {...register("phone")} />
            {errors.phone ? <p className={errCls}>{errors.phone.message}</p> : null}
          </div>

          <div>
            <Label htmlFor="lead-service">İlgilendiğiniz hizmet</Label>
            <Select id="lead-service" className={fieldCls} {...register("serviceSlug")}>
              <option value="">— Seçiniz —</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="lead-budget">Bütçe aralığı</Label>
            <Select id="lead-budget" className={fieldCls} {...register("budget")}>
              <option value="">— Belirtmek istemiyorum —</option>
              {budgetOptions.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="lead-topic">Konu</Label>
            <Select id="lead-topic" className={fieldCls} {...register("topic")}>
              {topicOptions.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="lead-message">Projenizi kısaca anlatın *</Label>
            <Textarea
              id="lead-message"
              rows={5}
              placeholder="Hangi sorunu çözüyoruz, hangi sistemler devrede, hedef tarihiniz ne?"
              className={fieldCls}
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message ? <p className={errCls}>{errors.message.message}</p> : null}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="lead-consent" className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
              <Checkbox
                id="lead-consent"
                className="mt-0.5"
                checked={!!consent}
                onCheckedChange={(v) => setValue("consent", v === true, { shouldValidate: true })}
              />
              <span className="text-[13px] leading-6 text-slate-600">
                KVKK kapsamında; ad, e-posta, telefon ve firma bilgilerimin teklif/ön analiz süreci
                için işlenmesini{" "}
                <a href="/kvkk/" className="font-medium text-[#0F2A44] underline underline-offset-2">
                  açık rıza
                </a>{" "}
                ile kabul ediyorum. *
              </span>
            </label>
            {errors.consent ? <p className={errCls}>{errors.consent.message}</p> : null}
          </div>

          {serverError ? (
            <p className="sm:col-span-2 rounded-lg border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
              {serverError}
            </p>
          ) : null}

          <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" size="lg" disabled={isSubmitting || status === "submitting"}>
              {isSubmitting || status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Gönderiliyor…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Talebi gönder
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
            <p className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#10B981]" />
              Verileriniz yalnızca {site.email} üzerinden işlenir; üçüncü taraflarla paylaşılmaz.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
