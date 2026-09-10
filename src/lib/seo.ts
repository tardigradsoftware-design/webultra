import type { Metadata } from "next"
import { site } from "@/data/site"
import { absoluteUrl, clampText } from "@/lib/utils"

export const DEFAULT_OG_WIDTH = 1200
export const DEFAULT_OG_HEIGHT = 630

export interface BuildMetadataInput {
  title: string
  description: string
  /** "/hizmetler/crm/" gibi, leading+trailing slash'lı */
  path: string
  keywords?: string[]
  ogImageAlt?: string
  noindex?: boolean
}

/**
 * Her sayfada aynı şablonu uygular: benzersiz title, 150-160 kr description,
 * canonical, og:*, twitter:card.
 */
export function buildMetadata(input: BuildMetadataInput): Metadata {
  // Marka uzantısı kuralı: "{Sayfa Başlığı} | Tardigrad Software", 60 kr'ı aşarsa kısalt
  const withBrand = input.title.includes(" | ") ? input.title : `${input.title} | ${site.name}`
  const title = clampText(withBrand, 60)
  const description = clampText(input.description, 158)
  const canonical = input.path === "/" ? "/" : input.path
  const pageUrl = absoluteUrl(canonical)

  return {
    // Layout'taki title template'i ile çift marka uzantısı oluşmasın: absolute
    title: { absolute: title },
    description,
    keywords: input.keywords,
    alternates: {
      canonical,
      languages: { "tr-TR": pageUrl },
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: site.name,
      locale: site.ogLocale,
      title,
      description,
      images: [
        {
          url: ogImageUrl({ title, description }),
          width: DEFAULT_OG_WIDTH,
          height: DEFAULT_OG_HEIGHT,
          alt: input.ogImageAlt ?? `${title} — ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitter,
      title,
      description,
      images: [ogImageUrl({ title, description })],
    },
    robots: input.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  }
}

export function ogImageUrl(opts: { title: string; description?: string }): string {
  const params = new URLSearchParams({ t: opts.title })
  if (opts.description) params.set("d", opts.description.slice(0, 180))
  return `${site.url}/api/og/?${params.toString()}`
}

/** "A | B" kuralı: marka uzantısı 60 karakteri aşarsa kısa forma düşer */
export function pageTitle(title: string, suffix = site.name): string {
  const full = `${title} | ${suffix}`
  return full.length <= 60 ? full : clampText(title, 58)
}

/** JSON-LD'yi script etiketine güvenli şekilde gömer (< escape) */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
