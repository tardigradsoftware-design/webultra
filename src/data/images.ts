import type { ServiceImage } from "@/types/content"

/**
 * Görsel kaydı (Bölüm 4.2).
 * Kaynak PNG'ler `scripts/build-images.mjs` ile BEYAZ zeminli WebP'ye çevrilir
 * ve sabit boyuta getirilir; böylece width/height değerleri her zaman doğrudur
 * (CLS = 0 hedefi).
 *
 * Dosya adı kalıbı (SEO): {hizmet}-{lokasyon/konu}.webp
 */
export const HERO_IMG: ServiceImage = {
  src: "/images/hero/hero-kurumsal-dijital-donusum-paneli.webp",
  alt: "Tardigrad Software kurumsal yazılım paneli mockup: beyaz kartlar, lacivert üst bar ve hız metrikleri",
  width: 1280,
  height: 800,
}

export const TRANSFORMATION_IMG: ServiceImage = {
  src: "/images/shared/dijital-donusum-excel-den-webe.webp",
  alt: "Excel tablosundan web uygulamasına dijital dönüşümü gösteren şema",
  width: 1280,
  height: 720,
}

export const PROCESS_IMG: ServiceImage = {
  src: "/images/shared/surec-9-adim-akisi.webp",
  alt: "Analiz, strateji, UI/UX, geliştirme, test, canlıya çıkış, SEO, bakım ve raporlama adımlarını gösteren süreç akışı",
  width: 1280,
  height: 720,
}

/** Hizmet kapağı olanlar (Faz 1: 5 pilot). Olmayanlar CSS mockup fallback kullanır. */
export const SERVICE_IMAGES: Record<string, ServiceImage> = {
  "kurumsal-web-sitesi": {
    src: "/images/services/kurumsal-web-sitesi-tasarim-mockup.webp",
    alt: "Kurumsal web sitesi için masaüstü ve mobil arayüz mockup seti, beyaz zemin üzerinde lacivert detaylar",
    width: 1280,
    height: 720,
  },
  "e-ticaret-sitesi": {
    src: "/images/services/e-ticaret-sitesi-urun-katalog-sepet.webp",
    alt: "E-ticaret sitesi ürün kataloğu, sepet ve ödeme adımlarını gösteren beyaz panel arayüzü",
    width: 1280,
    height: 720,
  },
  crm: {
    src: "/images/services/crm-musteri-iliskileri-yonetim-paneli.webp",
    alt: "CRM yönetim paneli: müşteri listesi, fırsat hattı ve kazanma oranı kartları",
    width: 1280,
    height: 720,
  },
  "teknik-seo": {
    src: "/images/services/teknik-seo-arama-motori-buyume-grafigi.webp",
    alt: "Teknik SEO sonrası organik trafik büyüme grafiği ve Core Web Vitals kartları",
    width: 1280,
    height: 720,
  },
  "ai-chatbot": {
    src: "/images/services/ai-chatbot-musteri-destek-sohbet-paneli.webp",
    alt: "Web sitesi ve WhatsApp üzerinde çalışan AI chatbot destek paneli arayüzü",
    width: 1280,
    height: 720,
  },
}

export function serviceImage(slug: string): ServiceImage | undefined {
  return SERVICE_IMAGES[slug]
}
