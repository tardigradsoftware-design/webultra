import { serviceCategories } from "@/data/categories"
import { services } from "@/data/services"
import { ServiceCard } from "@/components/site/service-card"
import { Reveal } from "@/components/motion/reveal"

/** Bölüm 7.4 — 43 hizmet, kategori gruplarıyla */
export function ServicesGrid({ limit }: { limit?: number }) {
  let shown = 0
  return (
    <div className="space-y-12">
      {serviceCategories.map((c) => {
        const items = services.filter((s) => s.category === c.id)
        const slice = limit ? items.slice(0, Math.max(0, limit - shown)) : items
        shown += slice.length
        if (!slice.length) return null
        return (
          <div key={c.id} id={c.id} className="scroll-mt-28">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[#E2E8F0] pb-3">
              <h3 className="font-heading text-lg font-semibold text-[#0F2A44]">{c.title}</h3>
              <span className="font-mono text-xs text-slate-500">
                {items.length} hizmet
              </span>
            </div>
            <Reveal as="div" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {slice.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </Reveal>
          </div>
        )
      })}
    </div>
  )
}
