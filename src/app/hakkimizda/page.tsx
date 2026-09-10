import type { Metadata } from "next"
import Link from "next/link"

import { site, trustStats } from "@/data/site"
import { services } from "@/data/services"
import { TRANSFORMATION_IMG } from "@/data/images"
import { buildMetadata } from "@/lib/seo"
import { url } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { MetricRow } from "@/components/service/service-section"
import { SiteImage } from "@/components/site/site-image"
import { CtaBand } from "@/components/site/cta-band"

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Hakkımızda",
    description:
      "Tardigrad Software; kurumsal web, özel yazılım, SaaS, SEO ve IT/AI işlerini tek ekiple yürüten Türkiye merkezli teknoloji firması. 43 hizmet, 9 adımlı süreç, ölçülebilir teslim.",
    path: url("hakkimizda"),
    keywords: ["tardigrad software", "yazılım firması istanbul", "dijital dönüşüm ajansı"],
  })
}

const values = [
  {
    title: "Önce iş, sonra teknoloji",
    text: "Her projeye “hangi sorunu, ne kadar sürede çözüyoruz?” sorusuyla başlıyoruz. Teknoloji seçimi bu cevaba göre yapılıyor; tersi değil.",
  },
  {
    title: "Yazılı kapsam, yazılı takvim",
    text: "Sözlü mutabakatla iş yapmıyoruz. Kapsam, dışındakiler ve takvim tek belgede; değişiklik olursa etki analizi ekleniyor.",
  },
  {
    title: "Teslimde mülkiyet sizde",
    text: "Kod deposu, veritabanı, DNS kayıtları, ortam değişkenleri ve dokümantasyon sizin adınıza. Bağımlılık üreten model kurmuyoruz.",
  },
  {
    title: "Ölçmediğimiz işi bitmiş saymıyoruz",
    text: "Hız, indekslenme, dönüşüm ve kullanım metrikleri yayın öncesi hedefe, sonrası rapora bağlanır.",
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <section className="border-b border-[#E2E8F0] bg-white">
        <Container className="py-10 md:py-14">
          <BreadcrumbNav items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hakkımızda" }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <p className="kicker">{site.address.district}/{site.address.city} · {site.founded}'den beri</p>
              <h1 className="mt-4 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0F2A44] sm:text-[38px]">
                Yazılım, tasarım ve görünürlüğü tek ekipte toplayan bir dönüşüm firmasıyız
              </h1>
              <div className="prose-service mt-6 max-w-2xl">
                <p>
                  {site.name}, KOBİ'lerin, girişimlerin ve kurumsal firmaların dijital işlerini tek
                  elden yürütmek için kuruldu. Amacımız basitti: web sitesi, özel yazılım, SaaS ve
                  SEO işlerini ayrı satıcılara bölüştürmenin yarattığı kayıp bölgeyi ortadan
                  kaldırmak. Bugün {services.length} başlığın tamamını aynı ekip, aynı tasarım
                  sistemi ve aynı yayın hattı üzerinde üretiyoruz.
                </p>
                <p>
                  Çalışma biçimimiz üç katmana dayanır: iş katmanı (süreç, rol, veri), arayüz
                  katmanı (kullanıcının gerçekten kullandığı ekranlar) ve teknik katman (hız,
                  güvenlik, SEO, dağıtım). Bu üçünü ayrı kişilere verdiğinizde kaybolan işler,
                  bizim masamızda kaybolmaz; tek bir plan içinde yürür.
                </p>
                <p>
                  Merkezimiz {site.address.city}/{site.address.district}. Türkiye geneli ve yurt
                  dışındaki firmalarla uzaktan çalışıyor, periyodik olarak yerinde toplantı
                  yapıyoruz. Müşterilerimizin önemli bir kısmı hâlâ kendi ekibiyle yürüttüğü
                  projelerde, gerektiğinde devreye giren bir bakım ortağı olarak yanımızda duruyor.
                </p>
              </div>
            </div>
            <SiteImage
              image={TRANSFORMATION_IMG}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="border border-[#E2E8F0] bg-white p-3 shadow-card"
              fallbackLabel="Excel'den web paneline dönüşüm şeması"
            />
          </div>
          <MetricRow
            className="mt-10"
            metrics={trustStats.map((t) => ({ value: t.value, label: t.label }))}
          />
        </Container>
      </section>

      <Section>
        <SectionHeading kicker="Çalışma ilkelerimiz" title="Dört ilke, istisnasız uygulanır" />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card">
              <p className="font-heading text-[17px] font-semibold text-[#0F172A]">{v.title}</p>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            kicker="Kiminle çalışıyoruz"
            title="Üretimden danışmanlığa, e-ticaretten girişime"
            lead="Aynı mimariyi farklı ölçeklerde kuruyoruz: beş kişilik aile şirketinden, 300 kişilik saha ekibine sahip üreticiye kadar."
          />
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card">
            <p className="text-[15px] leading-7 text-slate-700">
              En sık çalıştığımız profiller:{" "}
              <Link href="/hizmetler/kurumsal-web-sitesi/" className="link-underline font-medium text-[#0F2A44]">
                kurumsal web sitesi
              </Link>{" "}
              yenileyen firmalar,{" "}
              <Link href="/hizmetler/crm/" className="link-underline font-medium text-[#0F2A44]">
                CRM
              </Link>{" "}
              ile saha süreçlerini toparlayan üreticiler,{" "}
              <Link href="/hizmetler/e-ticaret-sitesi/" className="link-underline font-medium text-[#0F2A44]">
                e-ticaret
              </Link>{" "}
              kanalını kendi altyapısına taşıyan markalar,{" "}
              <Link href="/hizmetler/teknik-seo/" className="link-underline font-medium text-[#0F2A44]">
                teknik SEO
              </Link>{" "}
              ile organik kanal kuran B2B şirketleri ve{" "}
              <Link href="/hizmetler/ai-chatbot/" className="link-underline font-medium text-[#0F2A44]">
                AI chatbot
              </Link>{" "}
              ile destek yükünü azaltmak isteyen ekipler.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand emailSubject="Hakkımızda sayfasından talep" />
    </>
  )
}
