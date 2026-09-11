/**
 * Marka / site konfigürasyonu — header, footer, şema, OG, form ve sitemap
 * buradan beslenir. Tek kaynak.
 */

export const site = {
  name: "Tardigrad Software",
  legalName: "Tardigrad Software",
  domain: "https://tardigradsoftware.com",
  /** canonical'larda trailing slash tutarlılığı için */
  url: "https://tardigradsoftware.com",
  tagline: "Yazılım ve dijital dönüşüm",
  description:
    "Kurumsal web sitesi, özel yazılım, SaaS, e-ticaret ve SEO hizmetlerini tek elden yürüten Türkiye geneli teknoloji firması. 43 hizmet, 9 adımlı süreç.",
  email: "info@tardigradsoftware.com",
  phoneDisplay: "+90 (216) 000 00 00",
  phone: "+902160000000",
  whatsapp: "https://wa.me/902160000000",
  lang: "tr",
  ogLocale: "tr_TR",
  twitter: "@tardigradsoft",
  github: "https://github.com/tardigradsoftware",
  linkedin: "https://www.linkedin.com/company/tardigradsoftware",
  founded: "2021",
  address: {
    streetAddress: "Bayraktepe Mah. Fabrika Yolu Sok. No: 4/4",
    district: "Maltepe",
    city: "İstanbul",
    region: "İstanbul",
    postalCode: "34820",
    country: "TR",
    countryName: "Türkiye",
  },
  geo: { latitude: 40.9337, longitude: 29.1418 },
  openingHours: "Mo-Fr 09:00-18:30",
  priceRange: "₺₺",
  /** Bölüm 1: CTA'lar */
  ctas: {
    primary: { label: "Projenizi Konuşalım", href: "/iletisim/" },
    secondary: { label: "Ücretsiz Ön Analiz", href: "/iletisim/?konu=on-analiz" },
  },
  keywords: [
    "kurumsal web sitesi",
    "özel yazılım geliştirme",
    "e-ticaret kurulumu",
    "SaaS geliştirme",
    "teknik SEO",
    "dijital dönüşüm",
    "CRM yazılımı",
    "Türkiye",
  ],
} as const

export const ctaLinks = {
  talk: "/iletisim/",
  preanalysis: "/iletisim/?konu=on-analiz",
  whatsapp: site.whatsapp,
  mail: `mailto:${site.email}`,
} as const

/** Footer / header için kurumsal linkler */
export const corporateNav = [
  { title: "Hakkımızda", href: "/hakkimizda/" },
  { title: "Süreç", href: "/surec/" },
  { title: "Hizmetler", href: "/hizmetler/" },
  { title: "İletişim", href: "/iletisim/" },
  { title: "KVKK & Aydınlatma Metni", href: "/kvkk/" },
] as const

export const trustStats = [
  { value: "43", label: "Uçtan uca hizmet", note: "Web, yazılım, SaaS, SEO, IT & AI" },
  { value: "9", label: "Adımlı delivery süreci", note: "Analiz → canlı → bakım" },
  { value: "81", label: "İl için lokal SEO mimarisi", note: "Faz 1: 10 il yayında" },
  { value: "<2.5s", label: "LCP hedefi", note: "Core Web Vitals uyumlu" },
] as const
