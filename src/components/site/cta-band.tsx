import Link from "next/link"
import { ArrowRight, CalendarClock, Mail } from "lucide-react"

import { site } from "@/data/site"
import { url } from "@/lib/nav"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/section"
import { cn } from "@/lib/utils"

/** Bölüm 1 CTA kuralı: her sayfada "Projenizi Konuşalım" + "Ücretsiz Ön Analiz" */
export function CtaBand({
  title,
  text,
  className,
  variant = "light",
  emailSubject,
}: {
  title?: string
  text?: string
  className?: string
  variant?: "light" | "panel"
  emailSubject?: string
}) {
  const heading = title ?? "Projenizi Konuşalım"
  const body =
    text ??
    "Kapsamı, takvimi ve tahmini yatırım tutarını 20 dakikalık bir görüşmede netleştiriyoruz. Ardından tek fiyat, tek takvim yazılı olarak geliyor."

  return (
    <section
      className={cn(
        "section scroll-mt-24",
        variant === "panel" ? "bg-[#0F2A44] text-white" : "bg-white",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-8 rounded-xl border p-8 md:p-12 lg:grid-cols-[1.2fr_1fr]",
            variant === "panel"
              ? "border-white/15 bg-white/[0.04]"
              : "border-[#E2E8F0] bg-[#F8FAFC] shadow-card",
          )}
        >
          <div>
            <span
              className={cn(
                "kicker",
                variant === "panel" && "text-white/50",
              )}
            >
              Sonraki adım
            </span>
            <h2
              className={cn(
                "mt-3 text-[26px] leading-tight sm:text-3xl",
                variant === "panel" ? "text-white" : undefined,
              )}
            >
              {heading}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-xl text-[17px] leading-8",
                variant === "panel" ? "text-white/75" : "text-slate-600",
              )}
            >
              {body}
            </p>
            <ul
              className={cn(
                "mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm",
                variant === "panel" ? "text-white/70" : "text-slate-600",
              )}
            >
              <li className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4" /> 24 saat içinde dönüş
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {site.email}
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Button asChild size="xl" variant={variant === "panel" ? "accent" : "primary"} className="w-full justify-center lg:w-auto">
              <Link href={url("iletisim")}>
                Projenizi Konuşalım
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant={variant === "panel" ? "outline" : "outline"} className={cn("w-full justify-center lg:w-auto", variant === "panel" && "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white")}>
              <Link href="/iletisim/?konu=on-analiz">Ücretsiz Ön Analiz</Link>
            </Button>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={cn(
                  "font-medium underline-offset-4 hover:underline",
                  variant === "panel" ? "text-white/80" : "text-[#0F2A44]",
                )}
              >
                WhatsApp
              </a>
              <a
                href={`${`mailto:${site.email}`}${emailSubject ? `?subject=${encodeURIComponent(emailSubject)}` : ""}`}
                className={cn(
                  "font-medium underline-offset-4 hover:underline",
                  variant === "panel" ? "text-white/80" : "text-[#0F2A44]",
                )}
              >
                E-posta ile yazın
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
