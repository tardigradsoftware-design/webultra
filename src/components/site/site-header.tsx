import Link from "next/link"
import { ChevronDown, Menu, Phone } from "lucide-react"

import { site } from "@/data/site"
import { services } from "@/data/services"
import { cities } from "@/data/cities"
import { serviceCategories } from "@/data/categories"
import { megaMenu, servicePath, url } from "@/lib/nav"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/site/logo"
import { MobileNav } from "@/components/site/mobile-nav"
import { Container } from "@/components/site/section"

const navLink =
  "inline-flex h-9 items-center gap-1 rounded-lg px-2.5 text-sm font-medium text-[#334155] transition-colors hover:bg-[#F1F5F9] hover:text-[#0F2A44]"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        <nav aria-label="Ana menü" className="hidden items-center gap-0.5 lg:flex">
          {megaMenu.length ? (
            <div className="group relative">
              <Link href={url("hizmetler")} className={navLink}>
                Hizmetler
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[min(52rem,90vw)] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-card-hover">
                  {megaMenu.map((group) => (
                    <div key={group.id}>
                      <p className="kicker mb-2">{group.title}</p>
                      <ul className="space-y-1">
                        {group.items.slice(0, 5).map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-md px-2 py-1.5 text-sm font-medium text-[#0F2A44] transition-colors hover:bg-[#F8FAFC]"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 flex items-center justify-between border-t border-[#F1F5F9] pt-4">
                    <p className="text-sm text-slate-600">
                      {services.length} hizmetin tamamı tek mimaride.
                    </p>
                    <Link
                      href={url("hizmetler")}
                      className="text-sm font-semibold text-[#0F2A44] underline-offset-4 hover:underline"
                    >
                      Tüm hizmetler →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <Link href={url("sehir", cities[0].slug)} className={navLink}>
            Lokal SEO
          </Link>
          <Link href={url("surec")} className={navLink}>
            Süreç
          </Link>
          <Link href={url("hakkimizda")} className={navLink}>
            Hakkımızda
          </Link>
          <Link href={url("iletisim")} className={navLink}>
            İletişim
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={`mailto:${site.email}`} className="gap-1.5">
              {site.email}
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href={url("iletisim")}>Ücretsiz Ön Analiz</Link>
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  )
}
