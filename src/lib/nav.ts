import { site } from "@/data/site"
import { services, pilotServiceSlugs } from "@/data/services"
import { serviceCategories } from "@/data/categories"
import { cities } from "@/data/cities"
import { url } from "@/lib/utils"

export { url }
import type { Service } from "@/types/content"

export const servicePath = (slug: string) => url("hizmetler", slug)
export const cityPath = (slug: string) => url("sehir", slug)
/** Bölüm 2 lokal SEO URL kalıbı: /hizmet/{slug}/{sehir}/ */
export const cityServicePath = (slug: string, city: string) => url("hizmet", slug, city)

/**
 * Şehir + hizmet linki. FAZ 1'de yalnızca pilot hizmetlerin şehir varyantı yayında;
 * diğerlerinde kırık link yerine şehir sayfasına gider (FAZ 2'de otomatik döner).
 */
export const serviceCityHref = (slug: string, city: string) =>
  pilotServiceSlugs.includes(slug) ? cityServicePath(slug, city) : url("sehir", city)

export const mainNav = [
  { title: "Hizmetler", href: url("hizmetler") },
  { title: "Süreç", href: url("surec") },
  { title: "Şehirler", href: url("sehir", cities[0]?.slug ?? "istanbul") },
  { title: "Hakkımızda", href: url("hakkimizda") },
  { title: "İletişim", href: url("iletisim") },
] as const

/** Header mega-menüsü: kategori → hizmetler */
export const megaMenu = serviceCategories.map((c) => ({
  id: c.id,
  title: c.title,
  kicker: c.kicker,
  description: c.description,
  items: services
    .filter((s: Service) => s.category === c.id)
    .map((s) => ({ title: s.title, href: servicePath(s.slug), text: s.cardText })),
}))

export const footerCityLinks = cities.map((c) => ({ title: c.name, href: cityPath(c.slug) }))

export const contactLinks = [
  { title: site.email, href: `mailto:${site.email}` },
  { title: site.phoneDisplay, href: `tel:${site.phone}` },
  { title: "WhatsApp", href: site.whatsapp },
] as const
