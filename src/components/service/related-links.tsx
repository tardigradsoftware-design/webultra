import Link from "next/link"
import { ArrowUpRight, Building2, MapPin } from "lucide-react"

import type { Service } from "@/types/content"
import { serviceBySlug } from "@/data/services"
import { cities } from "@/data/cities"
import { servicePath, url, serviceCityHref } from "@/lib/nav"
import { getIcon } from "@/lib/icons"
import { Reveal } from "@/components/motion/reveal"

/**
 * Bölüm 3.2/8.1: her sayfada 4-8 alakalı hizmet + şehir iç linkleri.
 * Linkler gerçek sayfaya gider (breaking link yok).
 */
export function RelatedLinks({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => serviceBySlug[slug])
    .filter(Boolean)
    .slice(0, 8)

  const citySlugs = [
    ...(service.cityPriority ?? []),
    ...cities.map((c) => c.slug),
  ]
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 6)

  return (
    <Reveal as="div" className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <ul className="grid gap-4 sm:grid-cols-2">
        {related.map((r) => {
          const Icon = getIcon(r.icon)
          return (
            <li key={r.slug}>
              <Link
                href={servicePath(r.slug)}
                className="group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-[#0F2A44]/40"
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-[#0F2A44]" aria-hidden />
                  <span className="font-heading text-[15px] font-semibold text-[#0F172A]">
                    {r.title}
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400 transition-colors group-hover:text-[#0F2A44]" />
                </span>
                <span className="mt-2 text-sm leading-6 text-slate-600">{r.cardText}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
        <p className="flex items-center gap-2 font-heading text-[15px] font-semibold text-[#0F2A44]">
          <MapPin className="h-4 w-4" />
          {service.title} — şehir sayfaları
        </p>
        <ul className="mt-4 space-y-2">
          {citySlugs.map((cs) => {
            const city = cities.find((c) => c.slug === cs)
            if (!city) return null
            return (
              <li key={cs}>
                <Link
                  href={serviceCityHref(service.slug, cs)}
                  className="flex items-center justify-between text-sm text-[#334155] transition-colors hover:text-[#0F2A44]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5 text-slate-400" />
                    {city.name}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{city.plate}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link
          href={url("sehir", cities[0].slug)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F2A44] underline-offset-4 hover:underline"
        >
          Tüm şehir sayfaları
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Reveal>
  )
}
