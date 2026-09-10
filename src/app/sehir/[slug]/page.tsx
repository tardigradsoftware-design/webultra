import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Building2, MapPin } from "lucide-react"

import { cities, findCity } from "@/data/cities"
import { services } from "@/data/services"
import { serviceCategories } from "@/data/categories"
import { pilotServiceSlugs } from "@/data/services"
import { site } from "@/data/site"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, citySchema } from "@/lib/schema"
import { url, servicePath } from "@/lib/nav"
import { getIcon } from "@/lib/icons"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { JsonLd } from "@/components/site/json-ld"
import { CtaBand } from "@/components/site/cta-band"
import { Button } from "@/components/ui/button"
import { MetricRow } from "@/components/service/service-section"

export const dynamicParams = false

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const city = findCity(params.slug)
  if (!city) return {}
  return buildMetadata({
    title: `${city.name} Yazılım, Web Sitesi ve SEO Hizmetleri`,
    description:
      `${city.name} ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. ` +
      `${city.economy.slice(0, 2).join(" ve ")} öne çıkıyor; Tardigrad Software ${city.name} firmalarına Türkiye geneli modelle çalışır.`,
    path: url("sehir", city.slug),
    keywords: [
      `${city.name} web tasarım`,
      `${city.name} yazılım firması`,
      `${city.name} e-ticaret`,
      `${city.name} SEO`,
    ],
  })
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = findCity(params.slug)
  if (!city) notFound()

  const trail = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Şehirler", path: url("sehir", cities[0].slug) },
    { name: city.name, path: url("sehir", city.slug) },
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
        <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0" />
        <Container className="relative py-10 md:py-14">
          <BreadcrumbNav
            items={[
              { name: "Ana Sayfa", href: "/" },
              { name: "Şehirler", href: url("sehir", cities[0].slug) },
              { name: city.name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <p className="kicker inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> {city.region} Bölgesi · {city.plate} plaka
              </p>
              <h1 className="mt-4 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0F2A44] sm:text-[38px]">
                {city.name}'da kurumsal yazılım, web sitesi ve SEO
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-slate-700">
                {city.name} için hizmetler; {services.length} başlığın tamamını{" "}
                {city.name} ve {city.districts.slice(0, 3).join(", ")} işletmelerinin gerçek
                ihtiyaçlarına göre önceliklendiriyoruz. {city.note}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={`${url("iletisim")}?sehir=${city.slug}`}>
                    {city.name} için teklif alın <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={url("hizmetler")}>Tüm hizmetler</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <p className="font-heading text-[17px] font-semibold text-[#0F2A44]">
                {city.name} iş dünyasının öncelikleri
              </p>
              <ul className="mt-4 space-y-2.5">
                {city.economy.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-[15px] leading-7 text-slate-700">
                    <Building2 className="mt-1 h-4 w-4 shrink-0 text-[#0F2A44]/70" />
                    {e}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                <p className="kicker">Öncelikli ilçeler</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {city.districts.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#475569]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <MetricRow
            className="mt-10"
            metrics={[
              { value: `${services.length}`, label: `${city.name} için açık hizmet` },
              { value: `${pilotServiceSlugs.length}`, label: "şehir+hizmet rehberi yayında" },
              { value: `${city.districts.length}`, label: "ilçe hedefi" },
              { value: "24s", label: "ilk dönüş süresi" },
            ]}
          />
        </Container>
      </section>

      <Section>
        <SectionHeading
          kicker="Şehir + hizmet sayfaları"
          title={`${city.name} için yayındaki detaylı rehberler`}
          lead={`Aşağıdaki hizmetler, yerel arama davranışı ve sektör yapısına göre şehir bazlı olarak yeniden yazıldı. Diğer başlıklar için hizmet sayfasından talebinizi iletebilirsiniz; kapsamı ${city.name} özelinde birlikte netleştiririz.`}
        />
        <div className="mt-8 space-y-8">
          {serviceCategories.map((c) => {
            const items = services.filter((s) => s.category === c.id)
            return (
              <div key={c.id}>
                <div className="mb-4 flex items-center justify-between border-b border-[#E2E8F0] pb-2.5">
                  <h2 className="font-heading text-lg font-semibold text-[#0F2A44]">
                    {c.title} — {city.name}
                  </h2>
                  <span className="font-mono text-xs text-slate-400">{items.length} hizmet</span>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => {
                    const Icon = getIcon(s.icon)
                    const cityVariant = pilotServiceSlugs.includes(s.slug)
                    return (
                      <li key={s.slug}>
                        <Link
                          href={
                            cityVariant ? url("hizmet", s.slug, city.slug) : servicePath(s.slug)
                          }
                          className="group flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-[#0F2A44]/40"
                        >
                          <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#0F2A44]" aria-hidden />
                          <span className="min-w-0">
                            <span className="block text-[15px] font-semibold text-[#0F172A]">
                              {s.title}
                            </span>
                            <span className="mt-1 block text-sm leading-6 text-slate-600">
                              {cityVariant ? `${city.name} odaklı rehber` : s.cardText}
                            </span>
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <SectionHeading
            kicker="Yerel arama"
            title={`${city.name} aramalarında bulunabilirlik`}
            lead={`${city.name} firmaları için görünürlük üç şeye bağlı: hizmet × ilçe sayfa ailesi, yerel yapısal veri ve hız. Bu sayfada ${city.districts.slice(0, 4).join(", ")} gibi ilçe sorgularını hedefleyen kurguyu kullanıyoruz.`}
          />
          <ul className="space-y-3">
            {[
              { t: "Hizmet × ilçe sayfaları", d: `${city.name} için ${services.length} hizmet başlığı, ilçe varyantlarıyla planlanır.` },
              { t: "Yerel şema", d: "LocalBusiness + Service + AreaServed ile adres, ilçe ve koordinat bilgisi verilir." },
              { t: "Harita ve profil", d: "Google Business Profile optimizasyonu, yorum ve kategori eşleşmesi." },
              { t: "Rakip boşlukları", d: `${city.name} için ayrı sayfa açan firma sayısı sınırlı; ilk giren avantajlı.` },
            ].map((x) => (
              <li key={x.t} className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card">
                <p className="font-heading text-[15px] font-semibold text-[#0F172A]">{x.t}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title={`${city.name} ofis/uzaktan çalışma: Projenizi konuşalım`}
        text={`${site.address.city} merkezliyiz; ${city.name} firmalarıyla görüşmeleri çevrim içi veya yerinde yürütüyoruz. Kapsam, takvim ve tahmini bütçe için 20 dakika yeter.`}
        emailSubject={`${city.name} — yeni proje talebi`}
      />

      <JsonLd
        id="city-schema"
        data={{
          "@graph": [
            citySchema(city, services),
            ...pilotServiceSlugs.slice(0, 3).map((slug) =>
              breadcrumbSchema([
                { name: "Ana Sayfa", path: "/" },
                { name: "Hizmetler", path: url("hizmetler") },
                { name: city.name, path: url("sehir", city.slug) },
              ]),
            ),
            breadcrumbSchema(trail),
          ],
        }}
      />
    </>
  )
}
