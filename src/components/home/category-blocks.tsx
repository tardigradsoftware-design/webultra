import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { serviceCategories } from "@/data/categories"
import { services } from "@/data/services"
import { getIcon } from "@/lib/icons"
import { url } from "@/lib/nav"
import { RevealGroup } from "@/components/motion/reveal"

/** Bölüm 7.3 — 5 kategori bloğu: lacivert ikonlu beyaz kartlar */
export function CategoryBlocks() {
  return (
    <RevealGroup as="div" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {serviceCategories.map((c, i) => {
        const Icon = getIcon(c.icon)
        const count = services.filter((s) => s.category === c.id).length
        return (
          <Link
            key={c.id}
            href={`${url("hizmetler")}#${c.id}`}
            className={
              "group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F2A44]/45 hover:shadow-card-hover" +
              (i === 0 ? " lg:col-span-1" : "")
            }
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F2A44] text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                {c.kicker}
              </span>
            </div>
            <p className="mt-5 font-heading text-xl font-semibold text-[#0F172A]">{c.title}</p>
            <p className="mt-2.5 flex-1 text-[15px] leading-7 text-slate-600">{c.description}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F2A44]">
              {count} hizmet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        )
      })}

      <Link
        href={url("dijital-donusum") === "/dijital-donusum/" ? "/hizmetler/dijital-donusum/" : url("hizmetler/dijital-donusum")}
        className="group flex h-full flex-col justify-between rounded-xl border border-[#0F2A44]/25 bg-[#0F2A44] p-7 text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F2A44]"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            Uçtan uca
          </span>
          <p className="mt-5 font-heading text-xl font-semibold">Dijital dönüşüm programı</p>
          <p className="mt-2.5 text-[15px] leading-7 text-white/75">
            Süreç envanteri, önceliklendirme ve Excel'den panele geçiş takvimi; 43 hizmetin
            hangisinin ne zaman geleceğini birlikte karar veriyoruz.
          </p>
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
          Programı inceleyin
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </RevealGroup>
  )
}
