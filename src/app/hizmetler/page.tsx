import type { Metadata } from "next"

import { services } from "@/data/services"
import { serviceCategories } from "@/data/categories"
import { site } from "@/data/site"
import { buildMetadata } from "@/lib/seo"
import { url } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { ServicesGrid } from "@/components/home/services-grid"
import { CtaBand } from "@/components/site/cta-band"

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: `Hizmetler (${services.length} Başlık)`,
    description:
      `Tardigrad Software hizmet listesi: kurumsal web sitesi, e-ticaret, CRM, SaaS, teknik ve lokal SEO, API entegrasyonu, AI chatbot dahil ${services.length} başlık. Türkiye geneli, tek fiyat.`,
    path: url("hizmetler"),
    keywords: ["yazılım hizmetleri", "web tasarım hizmetleri", "kurumsal yazılım", "SEO hizmetleri"],
  })
}

export default function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-[#E2E8F0] bg-white">
        <Container className="py-10 md:py-14">
          <BreadcrumbNav items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler" }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <SectionHeading
              as="h1"
              kicker="Hizmetler"
              title={`${services.length} hizmetle dijital işlerinizi tek elden kurun`}
              lead="Aşağıdaki liste, Tardigrad Software'in uçtan uca üstlendiği tüm başlıklardır. Her hizmet kendi sayfasında kapsam, süreç, fayda ve sıkça sorulan sorularla anlatılır."
            />
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <p className="font-heading text-[17px] font-semibold text-[#0F2A44]">
                Hangi başlıktan başlayacağınızı bilmiyor musunuz?
              </p>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">
                Ücretsiz ön analizde süreç envanterinizi çıkarıyor, {services.length} başlık
                içinden sizin için öncelikli olan 3-5 tanesini sıralıyoruz.
              </p>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {serviceCategories.map((c) => {
              const n = services.filter((s) => s.category === c.id).length
              return (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#334155] transition-colors hover:border-[#0F2A44] hover:text-[#0F2A44]"
                  >
                    {c.title}
                    <span className="font-mono text-xs text-slate-400">{n}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <Section>
        <ServicesGrid />
      </Section>

      <CtaBand
        title="Hizmet kapsamınızı birlikte netleştirelim"
        text="İki-üç başlığı aynı anda konuşmak, sonraki altı ayın iş planını netleştirir. Formu doldurun, 24 saat içinde dönüş yapalım."
        emailSubject="Hizmetler sayfasından talep"
      />
    </>
  )
}
