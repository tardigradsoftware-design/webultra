import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Mail, Phone } from "lucide-react"

import { site } from "@/data/site"
import { services, serviceBySlug, pilotServiceSlugs } from "@/data/services"
import { cities } from "@/data/cities"
import { serviceImage } from "@/data/images"
import { buildServiceContent } from "@/lib/content-factory"
import { buildMetadata, pageTitle } from "@/lib/seo"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { url, serviceCityHref } from "@/lib/nav"
import { Button } from "@/components/ui/button"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { JsonLd } from "@/components/site/json-ld"
import { CtaBand } from "@/components/site/cta-band"
import { ServiceHero } from "@/components/service/service-hero"
import { ServiceSection } from "@/components/service/service-section"
import { ServiceToc } from "@/components/service/service-toc"
import { RelatedLinks } from "@/components/service/related-links"
import { LeadForm } from "@/components/forms/lead-form"
import type { SectionBlock } from "@/types/content"

export const dynamicParams = true

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

async function load(slug: string) {
  const service = serviceBySlug[slug]
  if (!service) notFound()
  const content = buildServiceContent(service)
  const image = service.image ?? serviceImage(service.slug)
  if (image && !content.image) content.image = image
  return { service, content }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = serviceBySlug[params.slug]
  if (!service) return {}
  // FAZ 1 kuralı: pilot olmayan hizmet sayfaları şablon içerikle üretilir ve
  // içerik editoryal olarak tamamlanana (FAZ 2) kadar indekslenmez.
  const isPilot = pilotServiceSlugs.includes(service.slug)
  return buildMetadata({
    title: pageTitle(`${service.title}`),
    description: service.shortDescription,
    path: url("hizmetler", service.slug),
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    ogImageAlt: `${service.title} hizmeti — Tardigrad Software`,
    noindex: !isPilot,
  })
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { service, content } = await load(params.slug)
  const s = content.sections

  /** Bölüm 6 sırası — 11 blok */
  const blocks: { id: string; label: string; block: SectionBlock; alt?: boolean }[] = [
    {
      id: "nedir",
      label: `${service.title} nedir?`,
      block: { id: "nedir", h2: `${service.title} Nedir?`, paragraphs: content.definition },
    },
    { id: "neden", label: "Neden gerekli?", block: s.whyNeeded, alt: true },
    {
      id: "kapsam",
      label: "Paket kapsamı",
      block: { ...s.scope, image: content.image },
    },
    { id: "surec", label: "Nasıl çalışır?", block: s.process, alt: true },
    { id: "faydalar", label: "Faydalar", block: s.benefits },
    { id: "kimler", label: "Kimler için?", block: s.audience, alt: true },
    { id: "neden-biz", label: "Neden Tardigrad?", block: s.whyUs },
    { id: "sss", label: "SSS", block: s.faq, alt: true },
    { id: "ilgili", label: "İlgili hizmetler", block: s.internal },
  ]

  const trail = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: url("hizmetler") },
    { name: service.title, path: url("hizmetler", service.slug) },
  ]

  return (
    <>
      <ServiceHero
        service={service}
        content={content}
        locationLabel="Türkiye geneli"
      />

      <Section className="!py-10 md:!py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
          <div className="min-w-0">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { t: "Ön analiz", d: "Kapsam ve hedef metrik için ücretsiz", h: "/iletisim/?konu=on-analiz" },
                { t: "Teklif", d: "Tek fiyat + takvim, 24 saat içinde", h: "/iletisim/?hizmet=" + service.slug },
                { t: "Referans işler", d: "Aynı hizmette tamamlanan projeler", h: url("hakkimizda") },
              ].map((x) => (
                <Link
                  key={x.t}
                  href={x.h}
                  className="group rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card transition-colors hover:border-[#0F2A44]/40"
                >
                  <p className="font-heading text-[15px] font-semibold text-[#0F172A]">{x.t}</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{x.d}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0F2A44]">
                    Git <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="order-first lg:order-none">
            <ServiceToc
              items={blocks.map((b) => ({ id: b.id, label: b.label }))}
              className="lg:sticky lg:top-24"
            />
          </div>
        </div>
      </Section>

      {blocks.map((b, i) =>
        b.id === "ilgili" ? (
          <Section key={b.id} id={b.id} alt={false}>
            <SectionHeading kicker="İç linkler" title={b.block.h2 ?? "İlgili hizmetler"} lead={b.block.paragraphs?.[0]} />
            <div className="mt-8">
              <RelatedLinks service={service} />
            </div>
          </Section>
        ) : (
          <div key={b.id} className={i % 2 === 1 ? "" : ""}>
            <ServiceSection
              block={b.block}
              defaultId={b.id}
              alt={b.alt}
              columns={b.id === "surec" ? 3 : 2}
              showImage={b.id === "kapsam"}
            />
          </div>
        ),
      )}

      {/* 10. CTA + form */}
      <Section alt id="teklif-formu">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <SectionHeading kicker="Teklif" title={content.ctaTitle} lead={content.ctaText} />
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`${service.title} talebi`)}`}
                className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card transition-colors hover:border-[#0F2A44]/40"
              >
                <Mail className="h-5 w-5 text-[#0F2A44]" />
                <span>
                  <span className="block text-sm text-slate-500">E-posta</span>
                  <span className="font-medium text-[#0F172A]">{site.email}</span>
                </span>
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card transition-colors hover:border-[#0F2A44]/40"
              >
                <Phone className="h-5 w-5 text-[#0F2A44]" />
                <span>
                  <span className="block text-sm text-slate-500">Telefon · {site.openingHours}</span>
                  <span className="font-medium text-[#0F172A]">{site.phoneDisplay}</span>
                </span>
              </a>
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card">
                <p className="text-sm text-slate-500">Bu hizmeti birlikte planladıklarımız</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {service.related.slice(0, 4).map((slug) => {
                    const r = serviceBySlug[slug]
                    if (!r) return null
                    return (
                      <Link
                        key={slug}
                        href={url("hizmetler", slug)}
                        className="rounded-full border border-[#E2E8F0] px-3 py-1 text-sm text-[#334155] transition-colors hover:border-[#0F2A44] hover:text-[#0F2A44]"
                      >
                        {r.title}
                      </Link>
                    )
                  })}
                </div>
                <p className="mt-4 text-sm text-slate-500">Şehir sayfaları</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(service.cityPriority ?? cities.slice(0, 4).map((c) => c.slug)).map((cs) => (
                    <Link
                      key={cs}
                      href={serviceCityHref(service.slug, cs)}
                      className="rounded-full bg-[#F2F6FA] px-3 py-1 text-sm font-medium text-[#0F2A44]"
                    >
                      {cities.find((c) => c.slug === cs)?.name ?? cs}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="mt-6">
              <Link href={url("hizmetler")}>Tüm hizmetler</Link>
            </Button>
          </div>
          <LeadForm defaultService={service.slug} title={`${service.title} talebi`} />
        </div>
      </Section>

      <CtaBand variant="panel" emailSubject={`${service.title} hakkında`} />

      <JsonLd
        id="service-schema"
        data={{
          "@graph": [
            serviceSchema(service),
            faqSchema(s.faq.faq ?? []),
            breadcrumbSchema(trail),
          ],
        }}
      />
    </>
  )
}
