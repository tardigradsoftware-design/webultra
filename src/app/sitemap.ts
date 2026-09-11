import type { MetadataRoute } from "next"

import { services, pilotServiceSlugs } from "@/data/services"
import { cities } from "@/data/cities"
import { site } from "@/data/site"
import { url } from "@/lib/nav"

/**
 * sitemap.xml — Next.js App Router metadata route (build'de statik üretilir).
 * notFound/blog Faz 2'de eklenecek; pilot olmayan hizmet sayfaları henüz indexlenmez.
 */
export const dynamic = "force-static"

const base = site.url

function entry(path: string, lastmod: Date, priority: number, changefreq: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return { url: `${base}${path}`, lastModified: lastmod, changeFrequency: changefreq, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date()
  const staticPages: MetadataRoute.Sitemap = [
    entry("/", lastmod, 1.0, "weekly"),
    entry(url("hizmetler"), lastmod, 0.9, "weekly"),
    entry(url("surec"), lastmod, 0.6, "monthly"),
    entry(url("hakkimizda"), lastmod, 0.6, "monthly"),
    entry(url("iletisim"), lastmod, 0.8, "monthly"),
    entry(url("kvkk"), lastmod, 0.2, "yearly"),
  ]

  const servicePages: MetadataRoute.Sitemap = services
    .filter((s) => pilotServiceSlugs.includes(s.slug))
    .map((s) => ({
      ...entry(url("hizmetler", s.slug), lastmod, 0.9, "monthly"),
      images: s.image
        ? [{ url: `${base}${s.image.src}`, title: s.title, altText: s.image.alt }]
        : undefined,
    }))

  const cityPages: MetadataRoute.Sitemap = cities.map((c) =>
    entry(url("sehir", c.slug), lastmod, 0.7, "monthly"),
  )

  const serviceCityPages: MetadataRoute.Sitemap = pilotServiceSlugs.flatMap((slug) =>
    cities.map((c) => entry(url("hizmet", slug, c.slug), lastmod, 0.6, "monthly")),
  )

  return [...staticPages, ...servicePages, ...cityPages, ...serviceCityPages]
}
