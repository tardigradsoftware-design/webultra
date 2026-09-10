"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { site } from "@/data/site"
import { serviceCategories } from "@/data/categories"
import { services } from "@/data/services"
import { cities } from "@/data/cities"
import { servicePath, url } from "@/lib/nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetBody, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menüyü aç">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full p-0 sm:max-w-md">
        <SheetHeader className="flex-row items-center justify-between">
          <Logo withWordmark={false} />
          <span className="font-heading text-sm font-semibold text-[#0F2A44]">Menü</span>
        </SheetHeader>
        <SheetBody className="space-y-7">
          <nav aria-label="Hizmetler" className="space-y-3">
            {serviceCategories.map((c) => (
              <div key={c.id}>
                <p className="kicker mb-1.5">{c.title}</p>
                <ul className="space-y-0.5">
                  {services
                    .filter((s) => s.category === c.id)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={servicePath(s.slug)}
                          onClick={close}
                          className="block rounded-md px-1 py-1.5 text-[15px] font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {[
              { t: "Tüm hizmetler", h: url("hizmetler") },
              { t: "Süreç", h: url("surec") },
              { t: "Hakkımızda", h: url("hakkimizda") },
              { t: "İletişim", h: url("iletisim") },
              { t: "KVKK", h: url("kvkk") },
            ].map((l) => (
              <Link
                key={l.h}
                href={l.h}
                onClick={close}
                className="rounded-md px-1 py-1.5 text-[15px] font-medium text-[#334155] hover:bg-[#F8FAFC]"
              >
                {l.t}
              </Link>
            ))}
          </div>

          <div>
            <p className="kicker mb-1.5">Şehir sayfaları</p>
            <div className="flex flex-wrap gap-1.5">
              {cities.slice(0, 8).map((c) => (
                <Link
                  key={c.slug}
                  href={url("sehir", c.slug)}
                  onClick={close}
                  className="rounded-full border border-[#E2E8F0] px-2.5 py-1 text-xs font-medium text-[#475569] hover:border-[#0F2A44] hover:text-[#0F2A44]"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t border-[#F1F5F9] pt-5">
            <Button asChild className="w-full" size="lg" onClick={close}>
              <Link href={url("iletisim")}>Projenizi Konuşalım</Link>
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="block text-center text-sm text-slate-600 hover:text-[#0F2A44]"
            >
              {site.email}
            </a>
          </div>
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}
