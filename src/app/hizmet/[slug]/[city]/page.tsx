import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin } from "lucide-react"

import { serviceBySlug, pilotServiceSlugs } from "@/data/services"
import { cities, findCity } from "@/data/cities"
import { site } from "@/data/site"
import { buildServiceContent, buildCityServiceContent } from "@/lib/content-factory"
import { serviceImage } from "@/data/images"
import { buildMetadata, pageTitle } from "@/lib/seo"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { url, servicePath } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { JsonLd } from "@/components/site/json-ld"
import { CtaBand } from "@/components/site/cta-band"
import { Button } from "@/components/ui/button"
import { ServiceHero } from "@/components/service/service-hero"
import { ServiceSection } from "@/components/service/service-section"
import { RelatedLinks } from "@/components/service/related-links"
import { LeadForm } from "@/components/forms/lead-form"

export const dynamicParams = false

/** Faz 1: pilot hizmet × il kombinasyonları (5 × 10 = 50 sayfa) */
export function generateStaticParams() {
  const out: { slug: string; city: string }[] = []
  for (const slug of pilotServiceSlugs) {
    for (const c of cities) out.push({ slug, city: c.slug })
  }
  return out
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; city: string }
}): Promise<Metadata> {
  const service = serviceBySlug[params.slug]
  const city = findCity(params.city)
  if (!service || !city) return {}
  const v = buildCityServiceContent(service, city.name, city.region)
  return buildMetadata({
    title: pageTitle(`${service.title} — ${city.name}`),
    description: v.description,
    path: url("hizmet", service.slug, city.slug),
    keywords: [
      `${service.primaryKeyword} ${city.name}`,
      `${service.primaryKeyword} ${city.districts[0]}`,
      ...service.secondaryKeywords.map((k) => `${k} ${city.name}`),
    ],
  })
}

export default async function ServiceCityPage({
  params,
}: {
  params: { slug: string; city: string }
}) {
  const service = serviceBySlug[params.slug]
  const city = findCity(params.city)
  if (!service || !city) notFound()

  const content = buildServiceContent(service)
  const image = service.image ?? serviceImage(service.slug)
  if (image && !content.image) content.image = image
  const variant = buildCityServiceContent(service, city.name, city.region)
  const s = content.sections

  const blocks = [
    { id: "nedir", label: "Tanım", block: { id: "nedir", h2: `${service.title} nedir?`, paragraphs: content.definition }, alt: false },
    {
      id: "sehir",
      label: `${city.name} için neden önemli`,
      alt: true,
      block: {
        id: "sehir",
        h2: `${city.name} firmaları için ${service.title.toLowerCase()}`,
        paragraphs: [
          variant.intro,
          `${city.note} Bu tablo, ${service.primaryKeyword} işinin ${city.name} ilinde neden diğer illerden farklı önceliklendiğini açıklıyor.`,
          `Ön analizde ${city.name} ve ${city.districts.slice(0, 3).join(", ")} için hedef sorguları, rakip sitelerin sayfa yapısını ve yerel rekabetin derinliğini birlikte çıkarıyoruz.`,
        ],
        bullets: [
          {
            title: `${city.region} bölgesinde rekabet`,
            text: `${city.name} için ${service.primaryKeyword} aramalarında ilk sayfaya giren firma sayısı sınırlı; doğru mimari ile 3-6 ayda görünürlük mümkün.`,
          },
          {
            title: "İlçe bazlı sayfa ailesi",
            text: `${city.districts.slice(0, 4).join(", ")} için ayrı bölüm/sayfa kurgusu ve yerel iç link ağı kurulur.`,
          },
          {
            title: "Yerel güven sinyalleri",
            text: "Adres, harita profili, ilçe referansları ve KVKK uyumlu formlar; talep kalitesini doğrudan etkiler.",
          },
        ],
      },
    },
    { id: "neden", label: "Neden gerekli", block: s.whyNeeded },
    { id: "kapsam", label: "Kapsam", block: { ...s.scope, image: content.image }, alt: false },
    { id: "surec", label: "Süreç", block: s.process, alt: true },
    { id: "faydalar", label: "Faydalar", block: s.benefits },
    { id: "sss", label: "SSS", block: s.faq, alt: true },
  ]

  const trail = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: url("hizmetler") },
    { name: service.title, path: servicePath(service.slug) },
    { name: city.name, path: url("hizmet", service.slug, city.slug) },
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
        <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="py-8">
            <BreadcrumbNav
              items={[
                { name: "Ana Sayfa", href: "/" },
                { name: "Hizmetler", href: url("hizmetler") },
                { name: service.title, href: servicePath(service.slug) },
                { name: city.name },
              ]}
            />
          </div>
        </Container>
      </section>

      <ServiceHero
        service={service}
        content={{ ...content, h1: `${service.title} — ${city.name}` }}
        locationLabel={`${city.name} · ${city.region}`}
        crumbCity={{ name: city.name, slug: city.slug }}
      />

      <Section className="!py-10">
        <SectionHeading
          kicker="Şehir + hizmet"
          title={`${city.name} için ${service.title.toLowerCase()} planı`}
          lead={variant.description}
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {cities
            .filter((c) => c.slug !== city.slug)
            .slice(0, 8)
            .map((c) => (
              <Link
                key={c.slug}
                href={url("hizmet", service.slug, c.slug)}
                className="rounded-full border border-[#E2E8F0] px-3 py-1 text-sm text-[#334155] transition-colors hover:border-[#0F2A44] hover:text-[#0F2A44]"
              >
                {c.name}
              </Link>
            ))}
          <Link
            href={servicePath(service.slug)}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F2A44] underline-offset-4 hover:underline"
          >
            Şehirsiz genel sayfa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {blocks.map((b) => (
        <ServiceSection
          key={b.id}
          block={b.block as never}
          defaultId={b.id}
          alt={!!b.alt}
          columns={b.id === "surec" ? 3 : 2}
          showImage={b.id === "kapsam"}
        />
      ))}

      <Section alt>
        <SectionHeading
          kicker="İç linkler"
          title={`${city.name} için birlikte planlanan hizmetler`}
          lead={`${city.name} işletmelerinde ${service.title.toLowerCase()} işi tek başına kalmıyor; aşağıdaki başlıklarla birlikte planlandığında toplam etki büyüyor.`}
        />
        <div className="mt-8">
          <RelatedLinks service={service} />
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-[#06B6D4]" />
          {city.name} merkezli görüşme talebi için: {site.email}
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeading
            kicker="Sonraki adım"
            title={`${city.name} için ${service.title.toLowerCase()} ön analizi`}
            lead="Şehrinize özel hedef sorgular, rakip sayfa yapısı ve kapsam için 20 dakikalık görüşme yeterli. Formu doldurun, 24 saat içinde yazılı dönelim."
          />
          <LeadForm
            defaultService={service.slug}
            title={`${service.title} · ${city.name} talebi`}
          />
        </div>
      </Section>

      <CtaBand variant="panel" emailSubject={`${city.name} — ${service.title} talebi`} />

      <JsonLd
        id="service-city-schema"
        data={{
          "@graph": [
            serviceSchema(service, city),
            faqSchema(s.faq.faq ?? []),
            breadcrumbSchema(trail),
          ],
        }}
      />
    </>
  )
}
