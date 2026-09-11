import Link from "next/link"
import { ArrowRight, Compass } from "lucide-react"

import { services } from "@/data/services"
import { pilotServiceSlugs } from "@/data/services"
import { url, servicePath } from "@/lib/nav"
import { Container } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/site/service-card"

export default function NotFound() {
  const pilots = pilotServiceSlugs.map((s) => services.find((x) => x.slug === s)!).filter(Boolean)
  return (
    <section className="bg-white">
      <Container className="py-20 md:py-28">
        <p className="kicker inline-flex items-center gap-2">
          <Compass className="h-3.5 w-3.5" /> 404 · sayfa bulunamadı
        </p>
        <h1 className="mt-4 max-w-2xl text-[30px] font-semibold leading-tight tracking-tight text-[#0F2A44] sm:text-4xl">
          Aradığınız sayfa taşınmış veya henüz yayında olmayabilir
        </h1>
        <p className="mt-4 max-w-xl text-[17px] leading-8 text-slate-600">
          Aşağıdaki bağlantılardan devam edebilir, ya da hizmet listesinden başlığınızı
          bulabilirsiniz. Link vermediyseniz kısa mesaj atın, doğru sayfayı biz gönderelim.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={url("hizmetler")}>
              {services.length} hizmeti görüntüle <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={url("iletisim")}>İletişime geçin</Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pilots.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Eski bir bağlantıyı arıyorsanız:{" "}
          <Link href={url("hizmetler")} className="link-underline font-medium text-[#0F2A44]">
            /hizmetler/
          </Link>{" "}
          sayfasındaki {services.length} başlığın tamamı listeleniyor.
        </p>
      </Container>
    </section>
  )
}
