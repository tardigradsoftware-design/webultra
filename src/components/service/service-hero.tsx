import Link from "next/link"
import { ArrowRight, CircleCheck } from "lucide-react"

import type { Service } from "@/types/content"
import type { ServiceContent } from "@/types/content"
import { url, serviceCityHref } from "@/lib/nav"
import { cities } from "@/data/cities"
import { getIcon } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { SiteImage } from "@/components/site/site-image"
import { servicePath } from "@/lib/nav"

/** Hizmet sayfası hero'su: breadcrumb + H1 + tanım + CTA + görsel (beyaz zemin) */
export function ServiceHero({
  service,
  content,
  locationLabel,
  crumbCity,
}: {
  service: Service
  content: ServiceContent
  locationLabel?: string
  crumbCity?: { name: string; slug: string }
}) {
  const Icon = getIcon(service.icon)
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0" />
      <Container className="relative py-10 md:py-14">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetler", href: url("hizmetler") },
            ...(crumbCity ? [{ name: crumbCity.name, href: url("sehir", crumbCity.slug) }] : []),
            { name: service.title },
          ]}
        />

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="soft" className="gap-1.5">
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {service.primaryKeyword}
              </Badge>
              {locationLabel ? <Badge variant="muted">{locationLabel}</Badge> : null}
              <Badge variant="outline" className="font-mono">
                Hizmet {service.no}/{String(43).padStart(2, "0")}
              </Badge>
            </div>

            <h1 className="mt-5 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0F2A44] sm:text-[38px] lg:text-[44px]">
              {content.h1}
            </h1>

            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-slate-700">
              {content.definition[0]}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={`${url("iletisim")}?hizmet=${service.slug}`}>
                  Projenizi Konuşalım <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#lead-form">Ücretsiz Ön Analiz</a>
              </Button>
            </div>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {[
                "Tek fiyat, tek takvim",
                "Haftalık demo ile ilerleme",
                "Kod, veri ve dokümantasyon sizde",
                "Yayın sonrası ölçüm ve bakım",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-slate-700">
                  <CircleCheck className="h-4 w-4 shrink-0 text-[#10B981]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-4">
            <SiteImage
              image={content.image}
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="border border-[#E2E8F0] shadow-card"
              fallbackLabel={`${service.title} paneli`}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-6">
          <span className="kicker mr-1">Bu hizmeti seçen firmaların şehirleri:</span>
          {(service.cityPriority ?? cities.slice(0, 4).map((c) => c.slug)).map((cs) => {
            const city = cities.find((c) => c.slug === cs)
            if (!city) return null
            return (
              <Link
                key={cs}
                href={serviceCityHref(service.slug, cs)}
                className="rounded-full border border-[#E2E8F0] px-3 py-1 text-sm font-medium text-[#334155] transition-colors hover:border-[#0F2A44] hover:text-[#0F2A44]"
              >
                {city.name}
              </Link>
            )
          })}
          <Link
            href={url("hizmetler")}
            className="ml-auto text-sm font-semibold text-[#0F2A44] underline-offset-4 hover:underline"
          >
            {service.related.slice(0, 1).length ? "Tüm hizmetler →" : "Tüm hizmetler →"}
          </Link>
        </div>
      </Container>
    </section>
  )
}

export function ServiceIntro({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Container className="relative">
      <div className="prose-service mt-8 max-w-3xl border-t border-[#F1F5F9] pt-8">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>Ortalama yanıt süresi: 24 saat</span>
          <span>Ön analiz ücretsiz</span>
          <span>Türkiye geneli + uzaktan çalışma</span>
        </div>
      </div>
    </Container>
  )
}
