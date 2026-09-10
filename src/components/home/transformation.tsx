import { ArrowRight } from "lucide-react"

import { TRANSFORMATION_IMG } from "@/data/images"
import { Reveal } from "@/components/motion/reveal"
import { SiteImage } from "@/components/site/site-image"

const cases = [
  {
    before: "Excel",
    after: "Web paneli",
    text: "Teklif, sipariş ve stok verisi üç ayrı tablodaydı; artık tek panelde. Satış temsilcisi sahadan giriyor, yönetici anında görüyor.",
    metric: "-%50 manuel iş",
  },
  {
    before: "WhatsApp",
    after: "CRM kaydı",
    text: "Yazışmalar kişilerin telefonunda kalıyordu; artık her talep müşteri kartına bağlı, devir teslimde kaybolmuyor.",
    metric: "%100 kayıt",
  },
  {
    before: "Telefonla randevu",
    after: "Online rezervasyon",
    text: "Müsaitlik, onay ve hatırlatma otomatik; resepsiyonun telefon trafiği azaldı, no-show oranı düştü.",
    metric: "-%35 no-show",
  },
]

/** Bölüm 7.5 — dijital dönüşüm örnekleri */
export function TransformationBlock() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <div className="space-y-6">
        {cases.map((c) => (
          <Reveal key={c.before}>
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-[#F1F5F9] px-3 py-1.5 text-sm font-semibold text-slate-600 line-through decoration-slate-400">
                  {c.before}
                </span>
                <ArrowRight className="h-4 w-4 text-[#0F2A44]" />
                <span className="rounded-lg bg-[#0F2A44] px-3 py-1.5 text-sm font-semibold text-white">
                  {c.after}
                </span>
                <span className="ml-auto font-mono text-sm font-semibold text-[#047857]">
                  {c.metric}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <SiteImage
          image={TRANSFORMATION_IMG}
          sizes="(max-width: 1024px) 100vw, 560px"
          className="border border-[#E2E8F0] bg-white p-3 shadow-card"
        />
      </Reveal>
    </div>
  )
}
