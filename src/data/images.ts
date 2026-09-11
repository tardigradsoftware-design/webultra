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

/** Hizmet kapağı olanlar (23 kayıt: 5 pilot + web + özel yazılımın tamamına yakını + ilk SaaS). Olmayanlar CSS/SVG mockup fallback kullanır. */
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
  "raporlama-sistemi": {
    src: "/images/services/raporlama-sistemi-bi-panosu.webp",
    alt: "Raporlama ve iş zekâsı panosu: KPI kartları, çizgi ve halka grafikler, özet tablo ve rapor oluşturucu paneli",
    width: 1280,
    height: 720,
  },
  "form-basvuru-sistemi": {
    src: "/images/services/form-basvuru-sistemi-tasarim-ariuzu.webp",
    alt: "Online form ve başvuru sistemi arayüzü: alan paleti, form tuvali, mobil önizleme ve onay kartı",
    width: 1280,
    height: 720,
  },
  "saas-platformu": {
    src: "/images/services/saas-platformu-tenant-konsol.webp",
    alt: "Multi tenant SaaS yönetim konsolu: plan kartları, kullanım çubukları, tenant listesi ve API anahtarı paneli",
    width: 1280,
    height: 720,
  },
  "abonelik-tabanli-yazilim": {
    src: "/images/services/abonelik-yazilim-faturalandirma.webp",
    alt: "Abonelik ve faturalandırma ekranı: plan kartları, dönem anahtarı, fatura geçmişi ve ödeme yöntemi kartı",
    width: 1280,
    height: 720,
  },
  "multi-tenant-uygulama": {
    src: "/images/services/multi-tenant-yapi-ve-tema-paneli.webp",
    alt: "Multi tenant uygulama paneli: tenant listesi, tema/renk ayarları ve ortak çekirdek mimari şeması",
    width: 1280,
    height: 720,
  },
  "dashboard-sistemi": {
    src: "/images/services/dashboard-sistemi-gercek-zamanli-ekran.webp",
    alt: "Gerçek zamanlı yönetim ekranı: KPI kutuları, alan grafiği, gösterge halkaları ve uyarı listesi bileşenleri",
    width: 1280,
    height: 720,
  },
  "mvp-startup-urunu": {
    src: "/images/services/mvp-startup-urunu-yol-haritasi.webp",
    alt: "Startup MVP çıktısı: dizüstü ekranında ürün arayüzü, üç sütunlu yol haritası panosu ve doğrulama kontrol listesi",
    width: 1280,
    height: 720,
  },
  "lokal-seo": {
    src: "/images/services/lokal-seo-harita-isletme-profili.webp",
    alt: "Lokal SEO paneli: harita üzerinde işletme konumları, profil kartı, dizin kayıtları ve mobil sonuç listesi",
    width: 1280,
    height: 720,
  },
  "seo-uyumlu-sayfa-mimarisi": {
    src: "/images/services/seo-sayfa-mimarisi-silo-diagrami.webp",
    alt: "SEO uyumlu sayfa mimarisi diyagramı: ana sayfa, kategori ve detay sayfaları ile çapraz iç linkler",
    width: 1280,
    height: 720,
  },
  "schema-org-structured-data": {
    src: "/images/services/schema-org-veri-isaretleme.webp",
    alt: "Yapılandırılmış veri görselleştirmesi: zengin sonuç kartı, işaretleme paneli ve doğrulama rozeti",
    width: 1280,
    height: 720,
  },
  "google-search-console-kurulumu": {
    src: "/images/services/search-console-performans-grafigi.webp",
    alt: "Arama konsolu performans ekranı: tıklama ve gösterim eğrileri, metrik kutuları ve sorgu tablosu",
    width: 1280,
    height: 720,
  },
  "seo-danismanligi": {
    src: "/images/services/seo-danismanligi-rapor-toplanti.webp",
    alt: "SEO danışmanlık paketi: strateji raporu, denetim çıktısı ve kelime araştırma paneli",
    width: 1280,
    height: 720,
  },
  "dijital-otomasyon": {
    src: "/images/services/dijital-otomasyon-akis-tasarimi.webp",
    alt: "İş akışı otomasyon kurucusu: tetikleyici ve aksiyon blokları, etkin düğüm vurgusu ve çalıştırma geçmişi",
    width: 1280,
    height: 720,
  },
  "domain-dns-yonetimi": {
    src: "/images/services/domain-dns-kayit-konsolu.webp",
    alt: "Domain ve DNS kayıt konsolu: domain kartları, kayıt tablosu ve yeni kayıt çekmecesi",
    width: 1280,
    height: 720,
  },
  "hosting-yedekleme": {
    src: "/images/services/hosting-yedekleme-paneli.webp",
    alt: "Hosting ve yedekleme paneli: sunucu dolabı, kaynak ölçerleri ve anlık görüntü zaman çizelgesi",
    width: 1280,
    height: 720,
  },
  "cloudflare-cdn": {
    src: "/images/services/cloudflare-cdn-edge-noktalari.webp",
    alt: "CDN ve kenar nokta ağı şeması: dünya üzerindeki sunucu noktaları, önbellek isabet oranı ve gecikme çubukları",
    width: 1280,
    height: 720,
  },
  "vercel-deployment": {
    src: "/images/services/vercel-deployment-hatti.webp",
    alt: "Sürekli dağıtım hattı: commit, build ve deploy aşamaları ile önizleme ortamı şeridi",
    width: 1280,
    height: 720,
  },
}

export function serviceImage(slug: string): ServiceImage | undefined {
  return SERVICE_IMAGES[slug]
}
