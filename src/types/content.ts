/**
 * Tardigrad Software — içerik tipleri
 * Amaç: 43 hizmet sayfasının tamamının AYNI şablonu, AYNI sırayla ve AYNI
 * SEO/şema kurallarıyla üretmesi. İçerik = veri, sunum = bileşen.
 */

export type CategoryId = "web" | "ozel-yazilim" | "saas" | "seo" | "it-ai"

export interface IconBullet {
  title: string
  text: string
  /** lucide-react ikon adı */
  icon?: string
  /** kısa sayısal vurgu (+%35, -%40, 24/7 …) */
  metric?: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ProcessStep {
  title: string
  text: string
}

export interface ServicePackage {
  name: string
  price: string
  duration: string
  features: string[]
  highlight?: boolean
}

export interface Metric {
  value: string
  label: string
}

/** Bir içerik bloğu — servis sayfasındaki bir <section>. */
export interface SectionBlock {
  id?: string
  /** Görünen başlık (H2) */
  h2?: string
  /** SEO için görünür H2 yerine geçecek başlık; yoksa h2 kullanılır */
  h2Suffix?: string
  paragraphs?: string[]
  bullets?: IconBullet[]
  checklist?: string[]
  packages?: ServicePackage[]
  steps?: ProcessStep[]
  metrics?: Metric[]
  faq?: FaqItem[]
  /** Blok içinde gösterilecek görsel */
  image?: ServiceImage
  /** Blok sonunda mini CTA */
  miniCta?: string
}

export interface ServiceImage {
  src: string
  alt: string
  width: number
  height: number
}

/** Servis sayfasının tam içeriği (Bölüm 6 sırası). */
export interface ServiceContent {
  h1: string
  /** Kısa tanım: 100-160 kelime */
  definition: string[]
  sections: {
    whyNeeded: SectionBlock
    scope: SectionBlock
    process: SectionBlock
    benefits: SectionBlock
    audience: SectionBlock
    whyUs: SectionBlock
    faq: SectionBlock
    internal: SectionBlock
  }
  ctaTitle: string
  ctaText: string
  /** Servis görseli (hero + kapsam) */
  image?: ServiceImage
}

export interface Service {
  /** 01-43 */
  no: string
  /** Görünen ad: "Kurumsal Web Sitesi" */
  title: string
  /** URL: /hizmetler/{slug}/ */
  slug: string
  category: CategoryId
  /** Birincil anahtar kelime */
  primaryKeyword: string
  secondaryKeywords: string[]
  /** Meta description (~150-158 karakter) */
  shortDescription: string
  /** Kart açıklaması (dizin/ana sayfa) */
  cardText: string
  /** lucide ikon adı */
  icon: string
  /** Faz 1 = pilot içerik elle yazıldı; "index" = şablon üretici doldurur */
  status: "pilot" | "index"
  /** Elle yazılmış içerik; yoksa content-factory üretir */
  content?: ServiceContent
  image?: ServiceImage
  /** İç link: 4-8 alakalı hizmet */
  related: string[]
  /** Şehir varyantı için öncelik sırası */
  cityPriority?: string[]
}

export interface City {
  name: string
  slug: string
  plate: number
  region: string
  /** Bölge/ilçe yaklaşımı — lokal SEO metinlerinde kullanılır */
  districts: string[]
  economy: string[]
  note: string
}
