import Link from "next/link"
import { ArrowRight, CircleCheck, Grid3x3, MapPin } from "lucide-react"

import { site } from "@/data/site"
import { services } from "@/data/services"
import { HERO_IMG } from "@/data/images"
import { url } from "@/lib/nav"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/site/section"
import { SiteImage } from "@/components/site/site-image"

/**
 * Ana sayfa hero'su (Bölüm 7 / Bölüm 1):
 * beyaz zemin + lacivert başlık + solda metin, sağda mockup, grid deseni opacity 0.03.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="soft" className="gap-1.5">
                <Grid3x3 className="h-3.5 w-3.5" />
                {services.length} hizmet · tek mimari
              </Badge>
              <Badge variant="muted" className="gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Türkiye geneli
              </Badge>
            </div>

            <h1 className="mt-6 text-[34px] font-semibold leading-[1.1] tracking-tight text-[#0F2A44] sm:text-5xl lg:text-[56px]">
              Türkiye geneli {services.length} hizmetle{" "}
              <span className="relative whitespace-nowrap">
                dijital dönüşüm
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#06B6D4]/70"
                />
              </span>
            </h1>

            <p className="mt-6 text-[17px] leading-8 text-slate-700 md:text-lg">
              {site.name}; kurumsal web sitesi, özel yazılım, SaaS, SEO ve IT/AI katmanlarını tek
              ekipte birleştirir. Tasarım, kod ve görünürlük ayrı satıcılara bölünmediği için
              projeler <strong className="font-semibold text-[#0F172A]">daha hızlı</strong> biter
              ve <strong className="font-semibold text-[#0F172A]">sonradan baştan yapılmaz</strong>.
            </p>

            <ul className="mt-7 flex flex-col gap-2.5 text-[15px] text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-7">
              {[
                "Tek fiyat, tek takvim",
                "Haftalık canlı demo",
                "Kod ve veri sizin",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 shrink-0 text-[#10B981]" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl">
                <Link href={url("iletisim")}>
                  Projenizi Konuşalım
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/iletisim/?konu=on-analiz">Ücretsiz Ön Analiz</Link>
              </Button>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Direkt konuşmak isteyenler için:{" "}
              <a href={`mailto:${site.email}`} className="link-underline font-medium text-[#0F2A44]">
                {site.email}
              </a>{" "}
              ·{" "}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="link-underline font-medium text-[#0F2A44]"
              >
                WhatsApp
              </a>
            </p>
          </div>

          <div className="relative">
            <SiteImage
              image={HERO_IMG}
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-card-hover sm:p-3"
              imgClassName="rounded-lg"
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { v: "9", l: "adımlı süreç" },
                { v: "10", l: "il sayfası (Faz 1)" },
                { v: "24s", l: "ilk dönüş süresi" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-center shadow-card"
                >
                  <p className="font-heading text-xl font-bold text-[#0F2A44]">{s.v}</p>
                  <p className="text-[12px] leading-4 text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
