import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { getIcon } from "@/lib/icons"
import { servicePath } from "@/lib/nav"
import { cn } from "@/lib/utils"
import type { Service } from "@/types/content"

/** Ana sayfa / dizin kartı: beyaz kart, hover'da lacivert kenarlık */
export function ServiceCard({
  service,
  showNo = true,
  className,
}: {
  service: Service
  showNo?: boolean
  className?: string
}) {
  const Icon = getIcon(service.icon)
  return (
    <Link
      href={servicePath(service.slug)}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F2A44]/45 hover:shadow-card-hover focus-visible:border-[#0F2A44]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F2F6FA] text-[#0F2A44] transition-colors group-hover:bg-[#0F2A44] group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        {showNo ? (
          <span className="font-mono text-[11px] text-slate-400">{service.no}</span>
        ) : null}
      </div>
      <p className="mt-5 font-heading text-[17px] font-semibold leading-snug text-[#0F172A]">
        {service.title}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{service.cardText}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#0F2A44] opacity-70 transition-opacity group-hover:opacity-100">
        Detaylı incele
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
