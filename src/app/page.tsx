import Link from "next/link"
import { ArrowRight, Gauge, LineChart, MapPin, Search, ShieldCheck } from "lucide-react"

import { site, trustStats } from "@/data/site"
import { services } from "@/data/services"
import { cities } from "@/data/cities"
import { siteFaq } from "@/data/faq"
import { processSteps } from "@/data/process"
import { url } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { Hero } from "@/components/home/hero"
import { CategoryBlocks } from "@/components/home/category-blocks"
import { ServicesGrid } from "@/components/home/services-grid"
import { TransformationBlock } from "@/components/home/transformation"
import { TechStrip } from "@/components/home/tech-strip"
import { ProcessTimeline } from "@/components/site/process-timeline"
import { FaqAccordion } from "@/components/site/faq-accordion"
import { CtaBand } from "@/components/site/cta-band"
import { LeadForm } from "@/components/forms/lead-form"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"

/**
 * Ana sayfa — Bölüm 7'deki 11 blok, sırasıyla.
 * 1 Hero · 2 Rakamlar · 3 Kategoriler · 4 43 hizmet · 5 Dönüşüm · 6 Süreç ·
 * 7 SEO & lokal · 8 Teknoloji · 9 SSS · 10 CTA+form · 11 Footer (layout)
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 2. Güven / rakamlar */}
      <Section alt className="!py-12 md:!py-14">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((s) => (
            <li
              key={s.label}
              className="rounded-xl border border-[#E2E8F0] bg-white px-6 py-6 shadow-card"
            >
              <p className="font-heading text-3xl font-bold tracking-tight text-[#0F2A44]">
                {s.value}
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-[#0F172A]">{s.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{s.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Hizmet kategorileri */}
      <Section>
        <SectionHeading
          kicker="Ne yapıyoruz"
          title="Beş ana başlıkta, uçtan uca teknoloji işleri"
          lead="Web, özel yazılım, SaaS, SEO ve IT/AI. Her başlık kendi ekibinde, aynı tasarım sistemi ve aynı yayın hattı üzerinde çalışır."
        />
        <div className="mt-10">
          <CategoryBlocks />
        </div>
      </Section>

      {/* 4. 43 hizmet grid */}
      <Section alt>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Hizmet listesi"
            title={`${services.length} hizmetin tamamı`}
            lead="Her hizmet kendi SEO sayfasıdır: tanım, neden gerekli, kapsam, süreç, fayda, SSS ve iç linkler."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href={url("hizmetler")}>
              Hizmet sayfasına git <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </Section>

      {/* 5. Dijital dönüşüm */}
      <Section>
        <SectionHeading
          kicker="Dijital dönüşüm"
          title="Excel, WhatsApp ve telefon trafiği → tek sistem"
          lead="Dönüşümü “yeni yazılım” olarak değil, işin akışını değiştirmek olarak planlıyoruz. Aşağıdaki üç örnek, en sık yaptığımız geçişler."
        />
        <div className="mt-10">
          <TransformationBlock />
        </div>
      </Section>

      {/* 6. Süreç */}
      <Section alt>
        <SectionHeading
          kicker="Nasıl çalışıyoruz"
          title="Dokuz adım, her adımda bir çıktı"
          lead="Analizden bakıma kadar tüm işler tek takvimde. Her adımın bir teslimi ve bir onayı var."
        />
        <div className="mt-10">
          <ProcessTimeline steps={processSteps} columns={3} />
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href={url("surec")}>
              Süreci detaylı inceleyin <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* 7. SEO & lokal SEO gücü */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              kicker="SEO & lokal SEO mimarisi"
              title="43 hizmet × 10 il = görünürlük matrisi"
              lead="Türkiye geneli bulunabilirlik, hizmet ve şehir sayfalarının kesişiminde üretilir. Her sayfa kendi anahtar kelimesi, schema kaydı ve iç link ağıyla gelir."
            />
            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: Search,
                  title: "Teknik SEO çekirdeği",
                  text: "Core Web Vitals hedefleri, sitemap/robots, canonical, yapısal veri ve tarama bütçesi yönetimi standart kurulumda gelir.",
                },
                {
                  icon: MapPin,
                  title: "Şehir ve ilçe sayfaları",
                  text: `${cities.length} il ile başladık; ${site.address.district} merkezli AreaServed + Geo şemalarıyla 81 ile aynı şablonla ölçeklenir.`,
                },
                {
                  icon: LineChart,
                  title: "İç link planı",
                  text: "Her hizmet sayfası 4-8 alakalı hizmet ve 2+ şehir sayfasına bağlanır; PageRank sitede dolaşır, küme otoritesi büyür.",
                },
              ].map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F6FA] text-[#0F2A44]">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-[17px] font-semibold text-[#0F172A]">{f.title}</p>
                    <p className="mt-1.5 text-[15px] leading-7 text-slate-600">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/hizmetler/teknik-seo/">Teknik SEO hizmeti</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/hizmetler/lokal-seo/">Lokal SEO hizmeti</Link>
              </Button>
            </div>
          </div>

          <Reveal>
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-7 shadow-card">
              <div className="flex items-center justify-between">
                <p className="font-heading text-lg font-semibold text-[#0F2A44]">
                  Yayındaki şehir sayfaları
                </p>
                <span className="font-mono text-xs text-slate-400">Faz 1</span>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={url("sehir", c.slug)}
                      className="group flex items-center justify-between text-[15px] text-[#334155] transition-colors hover:text-[#0F2A44]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] transition-transform group-hover:scale-125" />
                        {c.name}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">{c.region}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#E2E8F0] text-center">
                {[
                  { v: "81", l: "ile açık şablon" },
                  { v: "430", l: "hizmet × il sayfası" },
                  { v: "10", l: "ilçe hedefi/şehir" },
                ].map((x) => (
                  <div key={x.l} className="bg-white px-3 py-4">
                    <p className="font-heading text-lg font-bold text-[#0F2A44]">{x.v}</p>
                    <p className="text-[12px] leading-4 text-slate-500">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 8. Teknolojiler */}
      <Section alt className="!py-14 md:!py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Altyapı"
            title="Üretimde kullandığımız teknoloji katmanı"
            as="h2"
          />
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-[#10B981]" />
            Tema, hız ve güvenlik bu yığının üzerinde tanımlıdır
          </p>
        </div>
        <div className="mt-8">
          <TechStrip />
        </div>
      </Section>

      {/* 9. SSS */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.55fr] lg:gap-14">
          <div>
            <SectionHeading
              kicker="SSS"
              title="Sıkça sorulan sorular"
              lead="İşbirliği modeli, kapsam ve süreç hakkında en çok duyduğumuz sorular."
            />
            <p className="mt-6 flex items-start gap-2.5 text-sm leading-7 text-slate-600">
              <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]" />
              Cevabını bulamadığınız bir konu varsa{" "}
              <Link
                href={url("iletisim")}
                className="font-medium text-[#0F2A44] underline underline-offset-4"
              >
                iletişim formunu
              </Link>{" "}
              kullanın; 24 saat içinde yanıtlıyoruz.
            </p>
          </div>
          <FaqAccordion items={siteFaq} slugPrefix="genel-sss" />
        </div>
      </Section>

      {/* 10. CTA + form */}
      <Section alt id="teklif">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              kicker="Sonraki adım"
              title="Projenizi Konuşalım"
              lead={`Kapsamı, takvimi ve bütçe bandını 20 dakikalık bir görüşmede netleştiriyoruz. ${site.email} veya form üzerinden ulaşın; 24 saat içinde yazılı dönüş yapıyoruz.`}
            />
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Ücretsiz ön analiz", d: "15 maddelik kontrol listesi ile mevcut durum değerlendirmesi." },
                { t: "Tek fiyat, tek takvim", d: "Kapsam yazılı; sürpriz maliyet çıkmaz." },
                { t: "Türkiye geneli", d: "Uzaktan çalışma + periyodik yüz yüze toplantı." },
                { t: "KVKK uyumlu", d: "Verileriniz yalnızca teklif süreci için işlenir." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card">
                  <dt className="font-heading text-[15px] font-semibold text-[#0F172A]">{x.t}</dt>
                  <dd className="mt-1.5 text-sm leading-6 text-slate-600">{x.d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LeadForm />
        </div>
      </Section>

      <CtaBand variant="panel" />
    </>
  )
}
