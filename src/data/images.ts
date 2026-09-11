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

/** Hizmet kapağı olanlar (20 kayıt: 5 pilot + web kategorisi + özel yazılımın ilk onu). Olmayanlar CSS/SVG mockup fallback kullanır. */
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
  "firma-web-sitesi": {
    src: "/images/services/firma-web-sitesi-kurumsal-tanim-arayuzu.webp",
    alt: "Kurumsal tanıtım sitesi için masaüstü ve mobil arayüz mockup: lacivert üst bar, açılış bandı ve üç özellik kartı",
    width: 1280,
    height: 720,
  },
  "landing-page": {
    src: "/images/services/landing-page-kampanya-donusum-tasarimi.webp",
    alt: "Kampanya açılış sayfası tasarımı: form alanları, yeşil gönderim butonu, fayda ikonları ve dönüşüm grafiği",
    width: 1280,
    height: 720,
  },
  "urun-tanitim-sitesi": {
    src: "/images/services/urun-tanitim-sitesi-urun-galerisi.webp",
    alt: "Ürün tanıtım sitesi arayüzü: lacivert başlık ve alt bar, ürün galerisi kartları, özellik paneli ve mobil görünüm",
    width: 1280,
    height: 720,
  },
  "portfoy-sitesi": {
    src: "/images/services/portfoy-sitesi-proje-galerisi.webp",
    alt: "Portfolyu sitesi arayüzü: proje galerisi kartları, filtre sekmeleri ve vaka çalışması metrik grafiği",
    width: 1280,
    height: 720,
  },
  "rezervasyon-basvuru-sistemi": {
    src: "/images/services/rezervasyon-sistemi-takvim-slot-arayuzu.webp",
    alt: "Rezervasyon ve randevu sistemi arayüzü: takvimde dolu boş slotlar, saat seçimi ve onay kartı",
    width: 1280,
    height: 720,
  },
  "web-sitesi-yenileme": {
    src: "/images/services/web-sitesi-yenileme-once-sonra.webp",
    alt: "Eski ve yeni web sitesi düzeninin yan yana karşılaştırması, yenilenmiş tasarımda performans metrik kartları",
    width: 1280,
    height: 720,
  },
  "musteri-yonetim-sistemi": {
    src: "/images/services/musteri-yonetim-sistemi-kart-timeline.webp",
    alt: "Müşteri yönetim sistemi ekranı: özet kartları, müşteri listesi ve etkileşim zaman çizelgesi, mobil görünümle birlikte",
    width: 1280,
    height: 720,
  },
  "teklif-hazirlama-sistemi": {
    src: "/images/services/teklif-hazirlama-sistemi-teklif-taslagi.webp",
    alt: "Teklif hazırlama arayüzü: satır kalemleri, seçili kalem vurgusu, toplam tutar bandı ve onay rozeti",
    width: 1280,
    height: 720,
  },
  "proforma-siparis-yonetimi": {
    src: "/images/services/proforma-siparis-yonetimi-belge-akisi.webp",
    alt: "Teklif, proforma fatura ve sipariş belgelerinin akışı ile sipariş takip panosu",
    width: 1280,
    height: 720,
  },
  "stok-yonetimi": {
    src: "/images/services/stok-yonetimi-depo-envanter-ekrani.webp",
    alt: "Stok ve envanter yönetim ekranı: ürün satırları, stok hareket listesi ve kritik seviye uyarıları",
    width: 1280,
    height: 720,
  },
  "urun-tedarikci-yonetimi": {
    src: "/images/services/urun-tedarikci-yonetimi-karsilastirma.webp",
    alt: "Ürün ve tedarikçi yönetimi arayüzü: ürün kartları ve tedarikçi fiyat karşılaştırma tablosu",
    width: 1280,
    height: 720,
  },
  "personel-kullanici-yonetimi": {
    src: "/images/services/personel-kullanici-yonetimi-izin-yetki.webp",
    alt: "Personel ve yetki yönetimi paneli: çalışan kartları, rol bazlı yetki matrisi ve izin takvimi",
    width: 1280,
    height: 720,
  },
  "yonetim-paneli": {
    src: "/images/services/yonetim-paneli-admin-ekrani.webp",
    alt: "Özel yönetim paneli arayüzü: lacivert kenar menü, özet KPI kartları, kayıt tablosu ve ayar çekmecesi",
    width: 1280,
    height: 720,
  },
  "musteri-paneli": {
    src: "/images/services/musteri-paneli-talep-takip.webp",
    alt: "Müşteri paneli ekranı: talep durumu adımları, açık talep kartları, belge ve fatura bölümü, mobil talep formu",
    width: 1280,
    height: 720,
  },
  "is-takip-sistemi": {
    src: "/images/services/is-takip-sistemi-kanban-tahtasi.webp",
    alt: "İş takip sistemi arayüzü: sürükle bırak kartlarla kanban sütunları ve zaman çizelgesi şeridi",
    width: 1280,
    height: 720,
  },
}

export function serviceImage(slug: string): ServiceImage | undefined {
  return SERVICE_IMAGES[slug]
}
