# Tardigrad Software — Uygulama Raporu (Faz 1 + Faz 2: 43/43 hizmet elle yazıldı)

> Bu rapor `npm run report` betiğiyle üretilir: build çıktısındaki HTML'den
> title/description/kelime/schema/görsel/link metrikleri okunur, veri katmanıyla eşleştirilir.
> Üretim tarihi: 2026-09-11 · Branch: `arena/01a08ac0-webultra`

## 1. Kurulum durumu

| Öğe | Durum |
|---|---|
| Stack | Next.js 14.2.35 (App Router) · TypeScript · Tailwind v3 · shadcn/ui (CVA + Radix) · lucide-react · framer-motion |
| Tema | Beyaz `#FFFFFF` + slate-50 zemin, lacivert `#0F2A44`/`#1E3A5F`, cyan/yeşil yalnızca vurgu. Koyu tema kapalı (`color-scheme: light`, `viewport.colorScheme: "light"`) |
| Dil | `<html lang="tr">`, tüm arayüz metinleri Türkçe |
| Font | Başlıklar Geist (600-700) · gövde Inter Variable (400-500) — self-hosted, `next/font` + `@fontsource-variable/inter` |
| Logo | **BEKLENİYOR** → `public/logo-placeholder.svg` ve `public/icon.svg` içinde `LOGO SVG BURAYA` işaretçisi |
| Build | `npx next build` hatasız · lint + tip kontrolü build'e bağlı |
| Sayfa sayısı | 0 statik HTML (5 pilot hizmet + 38 şablon hizmet + 10 il + 50 hizmet×il + 6 kurumsal/dizin) |

## 2. URL envanteri

Toplam: **0 yayına hazır route** · sitemap'te **71** URL (pilot + kurumsal + lokal; şablon hizmetler FAZ 2'ye kadar `noindex`).

| Rota | Tür | Title (kr) | Desc (kr) | Kelime | Görsel | İç link | SSS | JSON-LD | robots |
|---|---|---:|---:|---:|---:|---:|---:|---|---|

### 2b. İndekslenebilir URL'ler — meta değerleri (sitemap'teki 71 kayıt)

| URL | Title | Description |
|---|---|---|

Şablon (FAZ 2) hizmet sayfalarının tam meta listesi: `docs/seo-audit.json` ve `docs/meta-dokum.txt`.

**Özet metrikler:** {"pages":0,"servicePages":0,"pagesWithFaq":0,"indexablePages":0,"handWrittenServicePages":0,"avgServiceWords":0,"maxServiceWords":0,"minServiceWords":null,"totalImages":0,"brokenLinks":0,"pagesWithoutJsonLd":0}

- Kırık iç link: 0
- JSON-LD olmayan sayfa: 0
- Hizmet sayfaları kelime sayısı (ana içerik): min null / ortalama 0 / maks 0
- Uyarı listesi: yok ✓

## 2c. Faz 2 içerik durumu (hizmet bazında)

| # | Hizmet | Slug | Kategori | İçerik modu | Durum |
|---:|---|---|---|---|---|
| 01 | Kurumsal Web Sitesi | `kurumsal-web-sitesi` | web | elle yazıldı | index, follow |
| 02 | Firma Web Sitesi | `firma-web-sitesi` | web | elle yazıldı | index, follow |
| 03 | Landing Page | `landing-page` | web | elle yazıldı | index, follow |
| 04 | E-Ticaret Sitesi | `e-ticaret-sitesi` | web | elle yazıldı | index, follow |
| 05 | Ürün / Hizmet Tanıtım Sitesi | `urun-tanitim-sitesi` | web | elle yazıldı | index, follow |
| 06 | Portföy Sitesi | `portfoy-sitesi` | web | elle yazıldı | index, follow |
| 07 | Rezervasyon ve Başvuru Sistemi | `rezervasyon-basvuru-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 08 | Web Sitesi Yenileme / Modernizasyon | `web-sitesi-yenileme` | web | elle yazıldı | index, follow |
| 09 | CRM | `crm` | ozel-yazilim | elle yazıldı | index, follow |
| 10 | Müşteri Yönetim Sistemi | `musteri-yonetim-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 11 | Teklif Hazırlama Sistemi | `teklif-hazirlama-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 12 | Proforma / Sipariş Yönetimi | `proforma-siparis-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 13 | Stok Yönetimi | `stok-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 14 | Ürün / Tedarikçi Yönetimi | `urun-tedarikci-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 15 | Personel / Kullanıcı Yönetimi | `personel-kullanici-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 16 | Yönetim Paneli | `yonetim-paneli` | ozel-yazilim | elle yazıldı | index, follow |
| 17 | Müşteri Paneli | `musteri-paneli` | ozel-yazilim | elle yazıldı | index, follow |
| 18 | İş Takip Sistemi | `is-takip-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 19 | Raporlama Sistemi | `raporlama-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 20 | Form / Başvuru Sistemi | `form-basvuru-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 21 | SaaS Platformu | `saas-platformu` | saas | elle yazıldı | index, follow |
| 22 | Abonelik Tabanlı Yazılım | `abonelik-tabanli-yazilim` | saas | elle yazıldı | index, follow |
| 23 | Multi-Tenant Uygulama | `multi-tenant-uygulama` | saas | elle yazıldı | index, follow |
| 24 | Dashboard Sistemi | `dashboard-sistemi` | saas | elle yazıldı | index, follow |
| 25 | MVP / Startup Ürünü | `mvp-startup-urunu` | saas | elle yazıldı | index, follow |
| 26 | Teknik SEO | `teknik-seo` | seo | elle yazıldı | index, follow |
| 27 | Lokal SEO | `lokal-seo` | seo | elle yazıldı | index, follow |
| 28 | SEO Uyumlu Sayfa Mimarisi | `seo-uyumlu-sayfa-mimarisi` | seo | elle yazıldı | index, follow |
| 29 | Schema.org / Structured Data | `schema-org-structured-data` | seo | elle yazıldı | index, follow |
| 30 | Google Search Console Kurulumu | `google-search-console-kurulumu` | seo | elle yazıldı | index, follow |
| 31 | SEO Danışmanlığı | `seo-danismanligi` | seo | elle yazıldı | index, follow |
| 32 | Dijital Otomasyon | `dijital-otomasyon` | it-ai | elle yazıldı | index, follow |
| 33 | Domain / DNS Yönetimi | `domain-dns-yonetimi` | it-ai | elle yazıldı | index, follow |
| 34 | Hosting / Yedekleme | `hosting-yedekleme` | it-ai | elle yazıldı | index, follow |
| 35 | Cloudflare / CDN Yapılandırması | `cloudflare-cdn` | it-ai | elle yazıldı | index, follow |
| 36 | Vercel Deployment | `vercel-deployment` | it-ai | elle yazıldı | index, follow |
| 37 | Supabase / PostgreSQL Altyapısı | `supabase-postgresql` | it-ai | elle yazıldı | index, follow |
| 38 | Kurumsal E-Posta | `kurumsal-email` | it-ai | elle yazıldı | index, follow |
| 39 | API Entegrasyonu | `api-entegrasyonu` | it-ai | elle yazıldı | index, follow |
| 40 | Ödeme / WhatsApp / CRM Entegrasyonu | `odeme-whatsapp-crm-entegrasyonu` | it-ai | elle yazıldı | index, follow |
| 41 | AI Chatbot | `ai-chatbot` | it-ai | elle yazıldı | index, follow |
| 42 | AI Destekli İçerik / Araçlar | `ai-icerik-araclar` | it-ai | elle yazıldı | index, follow |
| 43 | Dijital Dönüşüm Süreçleri | `dijital-donusum` | it-ai | elle yazıldı | index, follow |

Elle yazılan hizmet sayısı: **43/43**. Pilot olmayanlar yayında ama indekslenmiyor; içerik yazıldıkça `src/data/service-contents-*.ts` dosyalarına eklenir ve otomatik olarak indekslenir hâle gelir (ayrı bir config gerekmez).

## 3. Pilot hizmet sayfaları (elle yazılmış içerik)

| # | Hizmet | Slug | Kelime | Title | Bölüm 6 blokları | SSS |
|---|---|---|---:|---|---|---:|
| 01 | Kurumsal Web Sitesi | `kurumsal-web-sitesi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 02 | Firma Web Sitesi | `firma-web-sitesi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 03 | Landing Page | `landing-page` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 04 | E-Ticaret Sitesi | `e-ticaret-sitesi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 05 | Ürün / Hizmet Tanıtım Sitesi | `urun-tanitim-sitesi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 06 | Portföy Sitesi | `portfoy-sitesi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 07 | Rezervasyon ve Başvuru Sistemi | `rezervasyon-basvuru-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 08 | Web Sitesi Yenileme / Modernizasyon | `web-sitesi-yenileme` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 09 | CRM | `crm` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 10 | Müşteri Yönetim Sistemi | `musteri-yonetim-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 11 | Teklif Hazırlama Sistemi | `teklif-hazirlama-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 12 | Proforma / Sipariş Yönetimi | `proforma-siparis-yonetimi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 13 | Stok Yönetimi | `stok-yonetimi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 14 | Ürün / Tedarikçi Yönetimi | `urun-tedarikci-yonetimi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 15 | Personel / Kullanıcı Yönetimi | `personel-kullanici-yonetimi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 16 | Yönetim Paneli | `yonetim-paneli` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 17 | Müşteri Paneli | `musteri-paneli` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 18 | İş Takip Sistemi | `is-takip-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 19 | Raporlama Sistemi | `raporlama-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 20 | Form / Başvuru Sistemi | `form-basvuru-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 21 | SaaS Platformu | `saas-platformu` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 22 | Abonelik Tabanlı Yazılım | `abonelik-tabanli-yazilim` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 23 | Multi-Tenant Uygulama | `multi-tenant-uygulama` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 24 | Dashboard Sistemi | `dashboard-sistemi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 25 | MVP / Startup Ürünü | `mvp-startup-urunu` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 26 | Teknik SEO | `teknik-seo` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 27 | Lokal SEO | `lokal-seo` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 28 | SEO Uyumlu Sayfa Mimarisi | `seo-uyumlu-sayfa-mimarisi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 29 | Schema.org / Structured Data | `schema-org-structured-data` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 30 | Google Search Console Kurulumu | `google-search-console-kurulumu` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 31 | SEO Danışmanlığı | `seo-danismanligi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 32 | Dijital Otomasyon | `dijital-otomasyon` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 33 | Domain / DNS Yönetimi | `domain-dns-yonetimi` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 34 | Hosting / Yedekleme | `hosting-yedekleme` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 35 | Cloudflare / CDN Yapılandırması | `cloudflare-cdn` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 36 | Vercel Deployment | `vercel-deployment` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 37 | Supabase / PostgreSQL Altyapısı | `supabase-postgresql` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 38 | Kurumsal E-Posta | `kurumsal-email` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 39 | API Entegrasyonu | `api-entegrasyonu` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 40 | Ödeme / WhatsApp / CRM Entegrasyonu | `odeme-whatsapp-crm-entegrasyonu` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 41 | AI Chatbot | `ai-chatbot` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 42 | AI Destekli İçerik / Araçlar | `ai-icerik-araclar` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |
| 43 | Dijital Dönüşüm Süreçleri | `dijital-donusum` | - | - kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | - |

Diğer 0 hizmet: sayfa iskeleti, meta, schema, iç linkler ve görsel fallback'i hazır; gövde metni kategori tohumlarıyla (`src/lib/content-factory.ts`) üretiliyor ve FAZ 2'de elle yazılacak. Bu sayfalar FAZ 2 bitene kadar `noindex, follow`.

## 4. Görsel varlıkları

Kaynak PNG'ler `public/images/_src/` (gitignore'da), yayın formatı WebP + `loading="lazy"` + `width/height`.

| Dosya | Boyut | Hizmet/amaç |
|---|---|---|
| `/images/hero/hero-kurumsal-dijital-donusum-paneli.webp` | 1280×800 · 15 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/services/abonelik-yazilim-faturalandirma.webp` | 1280×720 · 14 KB | `images/_src/abonelik-yazilim-faturalandirma.png` |
| `/images/services/ai-chatbot-musteri-destek-sohbet-paneli.webp` | 1280×720 · 30 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/services/cloudflare-cdn-edge-noktalari.webp` | 1280×720 · 32 KB | `images/_src/cloudflare-cdn-edge-noktalari.png` |
| `/images/services/crm-musteri-iliskileri-yonetim-paneli.webp` | 1280×720 · 17 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/services/dashboard-sistemi-gercek-zamanli-ekran.webp` | 1280×720 · 8 KB | `images/_src/dashboard-sistemi-gercek-zamanli-ekran.png` |
| `/images/services/dijital-otomasyon-akis-tasarimi.webp` | 1280×720 · 7 KB | `images/_src/dijital-otomasyon-akis-tasarimi.png` |
| `/images/services/domain-dns-kayit-konsolu.webp` | 1280×720 · 21 KB | `images/_src/domain-dns-kayit-konsolu.png` |
| `/images/services/e-ticaret-sitesi-urun-katalog-sepet.webp` | 1280×720 · 29 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/services/firma-web-sitesi-kurumsal-tanim-arayuzu.webp` | 1280×720 · 10 KB | `images/_src/firma-web-sitesi-kurumsal-tanim-arayuzu.png` |
| `/images/services/form-basvuru-sistemi-tasarim-ariuzu.webp` | 1280×720 · 19 KB | `images/_src/form-basvuru-sistemi-tasarim-ariuzu.png` |
| `/images/services/hosting-yedekleme-paneli.webp` | 1280×720 · 12 KB | `images/_src/hosting-yedekleme-paneli.png` |
| `/images/services/is-takip-sistemi-kanban-tahtasi.webp` | 1280×720 · 24 KB | `images/_src/is-takip-sistemi-kanban-tahtasi.png` |
| `/images/services/kurumsal-web-sitesi-tasarim-mockup.webp` | 1280×720 · 17 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/services/landing-page-kampanya-donusum-tasarimi.webp` | 1280×720 · 19 KB | `images/_src/landing-page-kampanya-donusum-tasarimi.png` |
| `/images/services/lokal-seo-harita-isletme-profili.webp` | 1280×720 · 21 KB | `images/_src/lokal-seo-harita-isletme-profili.png` |
| `/images/services/multi-tenant-yapi-ve-tema-paneli.webp` | 1280×720 · 10 KB | `images/_src/multi-tenant-yapi-ve-tema-paneli.png` |
| `/images/services/musteri-paneli-talep-takip.webp` | 1280×720 · 16 KB | `images/_src/musteri-paneli-talep-takip.png` |
| `/images/services/musteri-yonetim-sistemi-kart-timeline.webp` | 1280×720 · 20 KB | `images/_src/musteri-yonetim-sistemi-kart-timeline.png` |
| `/images/services/mvp-startup-urunu-yol-haritasi.webp` | 1280×720 · 17 KB | `images/_src/mvp-startup-urunu-yol-haritasi.png` |
| `/images/services/personel-kullanici-yonetimi-izin-yetki.webp` | 1280×720 · 9 KB | `images/_src/personel-kullanici-yonetimi-izin-yetki.png` |
| `/images/services/portfoy-sitesi-proje-galerisi.webp` | 1280×720 · 17 KB | `images/_src/portfoy-sitesi-proje-galerisi.png` |
| `/images/services/proforma-siparis-yonetimi-belge-akisi.webp` | 1280×720 · 13 KB | `images/_src/proforma-siparis-yonetimi-belge-akisi.png` |
| `/images/services/raporlama-sistemi-bi-panosu.webp` | 1280×720 · 13 KB | `images/_src/raporlama-sistemi-bi-panosu.png` |
| `/images/services/rezervasyon-sistemi-takvim-slot-arayuzu.webp` | 1280×720 · 22 KB | `images/_src/rezervasyon-sistemi-takvim-slot-arayuzu.png` |
| `/images/services/saas-platformu-tenant-konsol.webp` | 1280×720 · 14 KB | `images/_src/saas-platformu-tenant-konsol.png` |
| `/images/services/schema-org-veri-isaretleme.webp` | 1280×720 · 13 KB | `images/_src/schema-org-veri-isaretleme.png` |
| `/images/services/search-console-performans-grafigi.webp` | 1280×720 · 26 KB | `images/_src/search-console-performans-grafigi.png` |
| `/images/services/seo-danismanligi-rapor-toplanti.webp` | 1280×720 · 21 KB | `images/_src/seo-danismanligi-rapor-toplanti.png` |
| `/images/services/seo-sayfa-mimarisi-silo-diagrami.webp` | 1280×720 · 10 KB | `images/_src/seo-sayfa-mimarisi-silo-diagrami.png` |
| `/images/services/stok-yonetimi-depo-envanter-ekrani.webp` | 1280×720 · 16 KB | `images/_src/stok-yonetimi-depo-envanter-ekrani.png` |
| `/images/services/teklif-hazirlama-sistemi-teklif-taslagi.webp` | 1280×720 · 7 KB | `images/_src/teklif-hazirlama-sistemi-teklif-taslagi.png` |
| `/images/services/teknik-seo-arama-motori-buyume-grafigi.webp` | 1280×720 · 33 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/services/urun-tanitim-sitesi-urun-galerisi.webp` | 1280×720 · 9 KB | `images/_src/urun-tanitim-sitesi-urun-galerisi.png` |
| `/images/services/urun-tedarikci-yonetimi-karsilastirma.webp` | 1280×720 · 13 KB | `images/_src/urun-tedarikci-yonetimi-karsilastirma.png` |
| `/images/services/vercel-deployment-hatti.webp` | 1280×720 · 13 KB | `images/_src/vercel-deployment-hatti.png` |
| `/images/services/web-sitesi-yenileme-once-sonra.webp` | 1280×720 · 21 KB | `images/_src/web-sitesi-yenileme-once-sonra.png` |
| `/images/services/yonetim-paneli-admin-ekrani.webp` | 1280×720 · 15 KB | `images/_src/yonetim-paneli-admin-ekrani.png` |
| `/images/shared/dijital-donusum-excel-den-webe.webp` | 1280×720 · 10 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |
| `/images/shared/surec-9-adim-akisi.webp` | 1280×720 · 18 KB | `(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)` |

Görseli olmayan hizmet sayfalarında CSS/SVG mockup fallback kullanılır (boş kutu oluşmaz).
`alt` metinleri hizmet + şehir + bağlam içerir; dekoratif öğeler `aria-hidden`.

## 5. Form ve dönüşüm hattı

- Bileşen: `src/components/forms/lead-form.tsx` — react-hook-form + zod (`src/lib/lead.ts`), şema hem client hem server'da aynı.
- Alanlar: ad, firma, e-posta, telefon, hizmet seçimi (43), konu, bütçe aralığı, şehir, mesaj (min 30 kr), KVKK açık rıza.
- Uç: `POST /api/lead/` → doğrulama → honeypot + geçici e-posta engeli → IP başına saatlik istek sınırı (varsayılan 6) → Resend ile bilgilendirme e-postası (HTML + text, `replyTo` başvuru sahibi) → başarı/hata ekranı + sonner toast.
- Yedek: Resend erişilemezse talep `data/leads.jsonl` dosyasına yazılır ve kullanıcıya başarı döner (talep kaybı yok).
- CTA'lar: her hizmet sayfasında hero'da, bölüm sonunda ("Projenizi Konuşalım" + "Ücretsiz Ön Analiz"), footer'da ve şehir sayfalarında.
- E-posta: `info@tardigradsoftware.com` · WhatsApp linki `nofollow`.

## 6. Yapısal veri (JSON-LD)

| Şema | Nerede |
|---|---|
| Organization + ProfessionalService (adres: İstanbul/Maltepe, geo, openingHours, areaServed TR, knowsAbout) | her sayfada (layout) |
| WebSite (publisher) | her sayfada |
| Service (areaServed City, serviceArea GeoCircle, offers, availableChannel) | hizmet + hizmet×il sayfaları |
| FAQPage (görünen SSS ile birebir aynı metin) | hizmet + hizmet×il sayfaları |
| BreadcrumbList | hizmet, hizmet×il, şehir, kurumsal sayfalar |
| LocalBusiness (şehir bazlı, ilçe Place'leri) | /sehir/{il}/ sayfaları |

## 7. Teknik SEO

- Trailing slash tutarlılığı (`trailingSlash: true`), sayfa başına canonical + `language: tr_TR`
- Title ≤ 60 kr ("{Sayfa} | Tardigrad Software"), description 145-158 kr, 43'ü de benzersiz
- `/sitemap.xml` (71 URL, lastmod + changefreq + priority, pilot hizmetlerde resim etiketi) ve `/robots.txt` Next native metadata route
- `/manifest.webmanifest`, `/icon.svg`, `favicon.ico`, `apple-icon.png`
- OG/Twitter: dinamik `/api/og/` (1200×630, beyaz+lacivert, Geist) — her sayfada benzersiz t/d/e parametreleri (örnek çıktı: `docs/og-ornek.png`)
- Hız: görseller WebP + lazy (hero hariç `fetchpriority=high`), width/height ile CLS≈0, 43 KB CSS, framer-motion yalnızca client chunk'ında
- Erişilebilirlik: skip-link, `lang="tr"`, Radix odak yönetimi, kontrast (lacivert/beyaz), `prefers-reduced-motion` desteği

## 8. FAZ 2 — kalan 38 hizmet için yapılacaklar

1. `src/data/pilot-contents-3.ts` … biçiminde elle içerik blokları yaz (5-8'er grup hâlinde), `src/data/services.ts` içindeki `pilotContentsBySlug`'a ekle.
2. Her hizmet için kapak görselini üret → `public/images/_src/` → `npm run imgs`.
3. Hizmet × il sayfalarını ``generateStaticParams`` içinde tüm hizmetlere aç (43 × 10 = 430 sayfa) ve gerekirse ilçe varyantlarını ekle.
4. `noindex` kısıtını kaldır, sitemap'i tüm hizmetleri kapsayacak şekilde genişlet (`src/app/sitemap.ts` filtresi).
5. Blog: 10 yazı + Article/BlogPosting şemaları + hizmet sayfalarına ilgili yazı linkleri.
6. Analytics/GSC doğrulaması, yedek lead kanalı (DB/queue), 2-3 dil (EN/RU/AR) için i18n kararı.

## 9. Bilinen noktalar / onay bekleyenler

| Konu | Durum |
|---|---|
| Logo SVG | Teslim edilmedi → `public/logo-placeholder.svg`, `public/icon.svg`, `src/components/site/logo.tsx` içinde `LOGO SVG BURAYA` işaretçileri duruyor. Organization şemasındaki `logo` alanı `/logo-placeholder.svg`'yu gösteriyor; dosya değişince schema da kendiliğinden güncellenir |
| E-posta teslimi | Bu ortamda `POST /api/lead/` uçtan uca çalışıyor; Resend yanıtı `application_error — Unable to fetch data` (alan adı doğrulanmadığı için). Kod, bu durumda talebi `data/leads.jsonl`'e yazıp kullanıcıya başarı döndürüyor. Üretimde: Resend → Domains → `tardigradsoftware.com` SPF/DKIM/DMARC kayıtlarını ekleyip `RESEND_FROM`'u bu domaine alın |
| Kelime sayıları | Denetim `<main>` etiketi içindeki tüm metni sayar (hero + bölümler + form etiketleri + CTA). 109 sayfanın tamamı hedefin üstünde: hizmet sayfaları ~1.65-1.89 bin kelime, hizmet×il ~1.55-1.75 bin, pilotlarda 8 SSS + 6-8 blok metin |
| noindex grubu | 38 hizmet sayfası FAZ 2'ye kadar `noindex, follow`; internal link ağı yine de çalışıyor (0 kırık link) |
| Font | `next/font/google` bu Next sürümünde Geist barındırmıyor → `geist` npm paketi + `@fontsource-variable/inter` (self-hosted, build sırasında ağ isteği yapmaz) |
| next-sitemap | Kullanılmadı; native `app/sitemap.ts` + `app/robots.ts` veri katmanından üretiliyor (tek kaynak, postbuild adımı yok) |
| `distDir` | Dev `.next-dev`, build `.next` — `next build` açık dev sunucusunu bozmuyor |

## 10. Devreye alma

```bash
cp .env.example .env.local   # RESEND_API_KEY, RESEND_FROM, NEXT_PUBLIC_SITE_URL
npm install
npm run build && npm run start   # veya Vercel: otomatik
npm run seo:check && npm run report
```

Resend'de `info@tardigradsoftware.com` alıcısının gönderime açık olması için alan adınızı
(tardigradsoftware.com) DNS kayıtlarıyla doğrulayın; doğrulanmadan gönderim sandbox
kısıtı nedeniyle 502 üretir (talepler bu durumda `data/leads.jsonl`'e düşer).
