import type { Metadata } from "next"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { site } from "@/data/site"
import { buildMetadata } from "@/lib/seo"
import { url } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { LeadForm } from "@/components/forms/lead-form"
import { services } from "@/data/services"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "İletişim ve Teklif Formu",
    description:
      "Tardigrad Software iletişim: kurumsal web sitesi, özel yazılım, SaaS, SEO ve AI chatbot talepleriniz için form, e-posta ve WhatsApp. 24 saat içinde yazılı dönüş.",
    path: url("iletisim"),
    keywords: ["tardigrad software iletişim", "yazılım teklif", "web sitesi fiyat teklifi"],
  })
}

const channels = [
  { icon: Mail, title: "E-posta", value: site.email, href: `mailto:${site.email}`, note: "Teklif ve kapsam talepleri" },
  { icon: Phone, title: "Telefon", value: site.phoneDisplay, href: `tel:${site.phone}`, note: site.openingHours },
  { icon: MessageCircle, title: "WhatsApp", value: "Hızlı sorular", href: site.whatsapp, note: "Kapsam ve ön bilgilendirme" },
  { icon: MapPin, title: "Adres", value: `${site.address.district}/${site.address.city}`, href: null, note: site.address.streetAddress },
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#E2E8F0] bg-white">
        <Container className="py-10 md:py-14">
          <BreadcrumbNav items={[{ name: "Ana Sayfa", href: "/" }, { name: "İletişim" }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              <p className="kicker inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> {site.openingHours}
              </p>
              <h1 className="mt-4 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0F2A44] sm:text-[38px]">
                Projenizi Konuşalım
              </h1>
              <div className="prose-service mt-5 max-w-xl">
                <p>
                  Formu doldurun veya doğrudan yazın. Talebinizi {services.length} başlıktan birine
                  eşleyip, 24 saat içinde kapsam, takvim ve tahmini bütçe bandıyla dönüş yapıyoruz.
                  Ücretsiz ön analizde mevcut sitenizi/sürecinizi 15 maddelik kontrol listesiyle
                  değerlendiriyoruz.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {channels.map((c) => (
                  <li key={c.title} className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <c.icon className="h-4 w-4 text-[#0F2A44]" /> {c.title}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer nofollow" : undefined}
                        className="mt-2 block font-medium text-[#0F172A] hover:text-[#0F2A44]"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-2 font-medium text-[#0F172A]">{c.value}</p>
                    )}
                    <p className="mt-1 text-xs leading-5 text-slate-500">{c.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </Container>
      </section>

      <Section alt>
        <div className="grid gap-8 lg:grid-cols-3">
          <SectionHeading
            kicker="Görüşme öncesi"
            title="Üç soruyu yanıtlarsanız ilk toplantı verimli geçer"
            className="lg:col-span-1"
          />
          <ul className="space-y-3 lg:col-span-2">
            {[
              { q: "Hangi problemi çözüyoruz?", a: "Tek cümle ile: şu an nasıl yapılıyor, ne zaman tıkanıyor, bunun size maliyeti ne?" },
              { q: "Kim, ne sıklıkta kullanacak?", a: "Kullanıcı sayısı ve rolleri; panel/uygulama tasarımını belirleyen en kritik bilgi." },
              { q: "Başarı hangi sayıyla ölçülecek?", a: "Talep sayısı, form dönüşümü, kapatılan saat veya stok doğruluğu; hedefi sayıya bağlıyoruz." },
            ].map((x, i) => (
              <li key={x.q} className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card">
                <p className="font-heading text-[17px] font-semibold text-[#0F172A]">
                  <span className="mr-2 font-mono text-sm text-[#06B6D4]">{String(i + 1).padStart(2, "0")}</span>
                  {x.q}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-slate-600">{x.a}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Kişisel verileriniz yalnızca teklif/ön analiz sürecinde işlenir:{" "}
          <Link href={url("kvkk")} className="link-underline font-medium text-[#0F2A44]">
            KVKK Aydınlatma Metni
          </Link>
        </p>
      </Section>
    </>
  )
}
