import type { Metadata } from "next"

import { processSteps, deliveryPrinciples } from "@/data/process"
import { PROCESS_IMG } from "@/data/images"
import { buildMetadata } from "@/lib/seo"
import { url } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"
import { ProcessTimeline } from "@/components/site/process-timeline"
import { SiteImage } from "@/components/site/site-image"
import { CtaBand } from "@/components/site/cta-band"
import { Reveal } from "@/components/motion/reveal"

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Nasıl Çalışıyoruz? 9 Adımlı Süreç",
    description:
      "Tardigrad Software'in 9 adımlı teslim süreci: analiz, strateji, UI/UX, geliştirme, SEO kurulumu, test, canlıya çıkış, ölçüm ve bakım. Her adımda yazılı çıktı ve haftalık demo.",
    path: url("surec"),
    keywords: ["yazılım geliştirme süreci", "proje süreci", "web projesi aşamaları"],
  })
}

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-[#E2E8F0] bg-white">
        <Container className="py-10 md:py-14">
          <BreadcrumbNav items={[{ name: "Ana Sayfa", href: "/" }, { name: "Süreç" }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <SectionHeading
              as="h1"
              kicker="Süreç"
              title="Dokuz adım; her birinin bir çıktısı, bir onayı var"
              lead="Proje takvimini “ne zaman biter” sorusundan kurtarmak için dokuz adımlı bir akış kullanıyoruz. Her adım kapandığında elinizde tartışmasız bir çıktı olur: onaylı kapsam, canlı demo, yayın notu, ölçüm raporu."
            />
            <Reveal>
              <SiteImage
                image={PROCESS_IMG}
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="border border-[#E2E8F0] bg-white p-3 shadow-card"
                fallbackLabel="9 adımlı süreç akış görseli"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <Section>
        <ProcessTimeline steps={processSteps} columns={3} />
      </Section>

      <Section alt>
        <SectionHeading
          kicker="Sözleşmeye giren prensipler"
          title="Bu süreci ayakta tutan dört kural"
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryPrinciples.map((p) => (
            <li key={p.title} className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card">
              <p className="font-heading text-[17px] font-semibold text-[#0F172A]">{p.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Süreci kendi projeniz için konuşalım"
        text="Kapsamınızı anlatın; hangi adımda neyin üretileceğini ve takvimi birlikte netleştirelim."
        emailSubject="Süreç hakkında bilgi almak istiyorum"
      />
    </>
  )
}
