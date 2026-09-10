import Link from "next/link"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { site } from "@/data/site"
import { services } from "@/data/services"
import { serviceCategories } from "@/data/categories"
import { cities } from "@/data/cities"
import { url } from "@/lib/nav"
import { servicePath } from "@/lib/nav"
import { Logo } from "@/components/site/logo"
import { Container } from "@/components/site/section"
import { corporateNav } from "@/data/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#0B2034] bg-[#0F2A44] text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" href={url()} className="[&_span]:!text-white" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">{site.description}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <span>
                  {site.address.district}/{site.address.city} · {site.address.streetAddress}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-white/50" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-white/50" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="flex items-center gap-2.5 text-white/80 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-white/50" />
                  WhatsApp ile yazın
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <p className="font-heading text-sm font-semibold text-white">Hizmetler</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {serviceCategories.map((c) => {
                const items = services.filter((s) => s.category === c.id)
                return (
                  <div key={c.id}>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                      {c.title}
                    </p>
                    <ul className="space-y-1.5">
                      {items.slice(0, 9).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={servicePath(s.slug)}
                            className="text-sm text-white/75 transition-colors hover:text-white"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <Link
              href={url("hizmetler")}
              className="mt-5 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              {services.length} hizmetin tamamı →
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="font-heading text-sm font-semibold text-white">Lokal SEO sayfaları</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={url("sehir", c.slug)}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-heading mt-8 text-sm font-semibold text-white">Kurumsal</p>
            <ul className="mt-4 space-y-2">
              {corporateNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. Tüm hakları saklıdır. Türkiye geneli hizmet · {site.email}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href={url("kvkk")} className="hover:text-white">
              KVKK & Aydınlatma Metni
            </Link>
            <Link href={url("iletisim")} className="hover:text-white">
              Projenizi Konuşalım
            </Link>
            <span className="font-mono">v0.1 · Faz 1</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
