import * as React from "react"
import Link from "next/link"
import { ArrowRight, Check, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import type { IconBullet, Metric, SectionBlock } from "@/types/content"
import { getIcon } from "@/lib/icons"
import { Section, SectionHeading } from "@/components/site/section"
import { SiteImage } from "@/components/site/site-image"
import { FaqAccordion } from "@/components/site/faq-accordion"
import { ProcessTimeline } from "@/components/site/process-timeline"
import { Reveal, RevealGroup } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"

/**
 * Bölüm 6 şablonunun tek render katmanı.
 * Her hizmet sayfası aynı sırayla: tanım → neden → kapsam → süreç → fayda →
 * kimler için → neden biz → SSS → CTA → iç linkler.
 */
export function ServiceSection({
  block,
  defaultId,
  alt = false,
  columns,
  showImage = false,
}: {
  block: SectionBlock
  defaultId: string
  alt?: boolean
  columns?: 1 | 2 | 3
  showImage?: boolean
}) {
  const id = block.id ?? defaultId
  const hasBody = Boolean(
    block.paragraphs?.length ||
      block.bullets?.length ||
      block.checklist?.length ||
      block.steps?.length ||
      block.faq?.length ||
      block.metrics?.length,
  )
  if (!hasBody && !block.image) return null

  return (
    <Section id={id} alt={alt} className="scroll-mt-24">
      <div className="flex flex-col gap-10">
        {block.h2 ? (
          <SectionHeading
            kicker={block.id === "sss" ? "SSS" : undefined}
            title={block.h2 + (block.h2Suffix ? ` ${block.h2Suffix}` : "")}
            lead={block.paragraphs?.[0]}
            id={`${id}-baslik`}
          />
        ) : null}

        {block.paragraphs && block.paragraphs.length > 1 ? (
          <div className="prose-service max-w-3xl">
            {block.paragraphs.slice(block.paragraphs.length > 1 ? 1 : 1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : null}

        {block.metrics?.length ? <MetricRow metrics={block.metrics} /> : null}

        {block.bullets?.length ? (
          <RevealGroup as="div" className="grid gap-6 sm:grid-cols-2">
            {block.bullets.map((b) => (
              <BulletCard key={b.title} bullet={b} />
            ))}
          </RevealGroup>
        ) : null}

        {block.checklist?.length ? (
          <Reveal>
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {block.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#0F2A44] text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        {block.steps?.length ? <ProcessTimeline steps={block.steps} columns={columns ?? 3} /> : null}

        {block.faq?.length ? (
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <FaqAccordion items={block.faq} slugPrefix={id} />
            <aside className="h-fit rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <Sparkles className="h-5 w-5 text-[#06B6D4]" />
              <p className="mt-3 font-heading text-[17px] font-semibold text-[#0F172A]">
                Cevabını bulamadığınız bir soru mu var?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Kapsam, takvim veya bütçe ile ilgili teknik olmayan soruları da açıkça yanıtlıyoruz.
              </p>
              <Button asChild size="sm" className="mt-4">
                <Link href="/iletisim/?konu=on-analiz">
                  Ücretsiz Ön Analiz <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </aside>
          </div>
        ) : null}

        {showImage ? (
          <Reveal>
            <figure className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-card sm:p-4">
              <SiteImage
                image={block.image}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="rounded-lg"
              />
              {block.image ? (
                <figcaption className="px-3 pb-2 pt-3 text-xs text-slate-500">
                  {block.image.alt}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        ) : null}

        {block.miniCta ? (
          <p className="flex items-start gap-2 rounded-xl border border-[#C3D6E7] bg-[#F2F6FA] p-5 text-[15px] leading-7 text-[#0F2A44]">
            <ArrowRight className="mt-1 h-4 w-4 shrink-0" />
            {block.miniCta}
          </p>
        ) : null}
      </div>
    </Section>
  )
}

export function BulletCard({ bullet, className }: { bullet: IconBullet; className?: string }) {
  const Icon = getIcon(bullet.icon)
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card transition-colors hover:border-[#0F2A44]/35",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F2F6FA] text-[#0F2A44]">
          <Icon className="h-[18px] w-[18px]" aria-hidden />
        </span>
        {bullet.metric ? (
          <span className="font-mono text-sm font-semibold text-[#0F2A44]">{bullet.metric}</span>
        ) : null}
      </div>
      <p className="mt-4 font-heading text-[17px] font-semibold text-[#0F172A]">{bullet.title}</p>
      <p className="mt-2 text-[15px] leading-7 text-slate-600">{bullet.text}</p>
    </div>
  )
}

export function MetricRow({ metrics, className }: { metrics: Metric[]; className?: string }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4",
        className,
      )}
    >
      {metrics.map((m) => (
        <div key={m.label} className="bg-white px-5 py-6 text-center">
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span className="block font-heading text-2xl font-bold tracking-tight text-[#0F2A44] md:text-3xl">
              {m.value}
            </span>
            <span className="mt-1 block text-[13px] leading-5 text-slate-500">{m.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
