# Hizmet kapak görseli kuyruğu

> Bu dosya `node scripts/image-queue.mjs` ile üretilir (elle düzenlemeyin).

**Üretim hattı:** `generate_image` → `public/images/_src/<slug>-<konu>.png` (her görselde 2 aday, seçimi kullanıcı yapar)
→ `npm run imgs` (1280×720 WebP, beyaz letterbox → CLS 0) → `src/data/images.ts` içine `SERVICE_IMAGES` kaydı (alt metin + width/height)
→ `npx tsc --noEmit` + `npx next build` + `npm run report` → `npm run save` (commit + push) → `node scripts/image-queue.mjs`.

**Stil sabiti:** beyaz #FFFFFF zemin · lacivert #0F2A44 / #1E3A5F · cyan #06B6D4 ve yeşil #10B981 yalnız küçük vurgu ·
rounded-xl · ince slate-200 kenarlık · okunabilir metin yok (soyut gri çubuklar) · koyu zemin yok · 16:9 · flat vector UI illüstrasyon.

## Kapak takılan hizmetler (23/43)

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
- [x] `teknik-seo` — seo
- [x] `ai-chatbot` — it-ai

## Bekleyen (20/43) — bu sırayla işlenecek

1. `abonelik-tabanli-yazilim` — saas
2. `multi-tenant-uygulama` — saas
3. `dashboard-sistemi` — saas
4. `mvp-startup-urunu` — saas
5. `lokal-seo` — seo
6. `seo-uyumlu-sayfa-mimarisi` — seo
7. `schema-org-structured-data` — seo
8. `google-search-console-kurulumu` — seo
9. `seo-danismanligi` — seo
10. `dijital-otomasyon` — it-ai
11. `domain-dns-yonetimi` — it-ai
12. `hosting-yedekleme` — it-ai
13. `cloudflare-cdn` — it-ai
14. `vercel-deployment` — it-ai
15. `supabase-postgresql` — it-ai
16. `kurumsal-email` — it-ai
17. `api-entegrasyonu` — it-ai
18. `odeme-whatsapp-crm-entegrasyonu` — it-ai
19. `ai-icerik-araclar` — it-ai
20. `dijital-donusum` — it-ai

Not: `dijital-donusum` sayfası şu an `TRANSFORMATION_IMG`'i kullanıyor; ayrı kapak üretilince `SERVICE_IMAGES`'a bağlanacak.
Kategori görselleri (`hero`, `surec`, `dijital-donusum`) `public/images/hero|shared/` altında ve manifest'te duruyor.
