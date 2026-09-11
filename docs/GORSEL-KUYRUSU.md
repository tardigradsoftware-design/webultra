# Hizmet kapak görseli kuyruğu

> Bu dosya `node scripts/image-queue.mjs` ile üretilir (elle düzenlemeyin).

**Üretim hattı:** `generate_image` → `public/images/_src/<slug>-<konu>.png` (her görselde 2 aday, seçimi kullanıcı yapar)
→ `npm run imgs` (1280×720 WebP, beyaz letterbox → CLS 0) → `src/data/images.ts` içine `SERVICE_IMAGES` kaydı (alt metin + width/height)
→ `npx tsc --noEmit` + `npx next build` + `npm run report` → `npm run save` (commit + push) → `node scripts/image-queue.mjs`.

**Stil sabiti:** beyaz #FFFFFF zemin · lacivert #0F2A44 / #1E3A5F · cyan #06B6D4 ve yeşil #10B981 yalnız küçük vurgu ·
rounded-xl · ince slate-200 kenarlık · okunabilir metin yok (soyut gri çubuklar) · koyu zemin yok · 16:9 · flat vector UI illüstrasyon.

## Kapak takılan hizmetler (43/43)

- [x] `kurumsal-web-sitesi` — web
- [x] `firma-web-sitesi` — web
- [x] `landing-page` — web
- [x] `e-ticaret-sitesi` — web
- [x] `urun-tanitim-sitesi` — web
- [x] `portfoy-sitesi` — web
- [x] `rezervasyon-basvuru-sistemi` — ozel-yazilim
- [x] `web-sitesi-yenileme` — web
- [x] `crm` — ozel-yazilim
- [x] `musteri-yonetim-sistemi` — ozel-yazilim
- [x] `teklif-hazirlama-sistemi` — ozel-yazilim
- [x] `proforma-siparis-yonetimi` — ozel-yazilim
- [x] `stok-yonetimi` — ozel-yazilim
- [x] `urun-tedarikci-yonetimi` — ozel-yazilim
- [x] `personel-kullanici-yonetimi` — ozel-yazilim
- [x] `yonetim-paneli` — ozel-yazilim
- [x] `musteri-paneli` — ozel-yazilim
- [x] `is-takip-sistemi` — ozel-yazilim
- [x] `raporlama-sistemi` — ozel-yazilim
- [x] `form-basvuru-sistemi` — ozel-yazilim
- [x] `saas-platformu` — saas
- [x] `abonelik-tabanli-yazilim` — saas
- [x] `multi-tenant-uygulama` — saas
- [x] `dashboard-sistemi` — saas
- [x] `mvp-startup-urunu` — saas
- [x] `teknik-seo` — seo
- [x] `lokal-seo` — seo
- [x] `seo-uyumlu-sayfa-mimarisi` — seo
- [x] `schema-org-structured-data` — seo
- [x] `google-search-console-kurulumu` — seo
- [x] `seo-danismanligi` — seo
- [x] `dijital-otomasyon` — it-ai
- [x] `domain-dns-yonetimi` — it-ai
- [x] `hosting-yedekleme` — it-ai
- [x] `cloudflare-cdn` — it-ai
- [x] `vercel-deployment` — it-ai
- [x] `supabase-postgresql` — it-ai
- [x] `kurumsal-email` — it-ai
- [x] `api-entegrasyonu` — it-ai
- [x] `odeme-whatsapp-crm-entegrasyonu` — it-ai
- [x] `ai-chatbot` — it-ai
- [x] `ai-icerik-araclar` — it-ai
- [x] `dijital-donusum` — it-ai

## Bekleyen (0/43) — bu sırayla işlenecek


Not: `dijital-donusum` sayfası şu an `TRANSFORMATION_IMG`'i kullanıyor; ayrı kapak üretilince `SERVICE_IMAGES`'a bağlanacak.
Kategori görselleri (`hero`, `surec`, `dijital-donusum`) `public/images/hero|shared/` altında ve manifest'te duruyor.
