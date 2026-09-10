"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { FaqItem } from "@/types/content"

/**
 * SSS akordeonu — Görünen metin, FAQPage JSON-LD ile birebir aynı kaynaktan gelir.
 */
export function FaqAccordion({ items, slugPrefix = "sss" }: { items: FaqItem[]; slugPrefix?: string }) {
  return (
    <div className="divide-border/60 rounded-xl border border-[#E2E8F0] bg-white px-6 shadow-card md:px-8">
      <Accordion type="single" collapsible defaultValue={`${slugPrefix}-0`}>
        {items.map((f, i) => (
          <AccordionItem key={f.q} value={`${slugPrefix}-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>
              <p className="max-w-3xl text-[15px] leading-7 text-slate-700 md:text-base">{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export function FaqMoreLink({ href, label }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F2A44] underline-offset-4 hover:underline"
    >
      {label ?? "Sorularınızı bize iletin"}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
