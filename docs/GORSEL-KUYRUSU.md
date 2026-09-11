# Hizmet kapak görseli kuyruğu

Üretim hattı: `generate_image` → `public/images/_src/<slug>-<konu>.png` (her görselde 2 aday, seçimi kullanıcı yapar)
→ `npm run imgs` (1280×720 WebP, beyaz letterbox) → `src/data/images.ts` kaydı (alt metin + genişlik/yükseklik)
→ `npx next build` + `npm run report` + `npm run save`.

**Stil sabiti:** beyaz #FFFFFF zemin · lacivert #0F2A44 / #1E3A5F · cyan/yeşil yalnız küçük vurgu · rounded-xl · ince slate-200 kenarlık · okunabilir metin yok (soyut çubuklar) · koyu zemin yok · 16:9 · flat vector UI illüstrasyon.

## Tamamlanan (20/43)

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
- [x] `teknik-seo` — seo
- [x] `ai-chatbot` — it-ai

## Bekleyen (23/43) — bu sırayla işlenecek

1. `2. `3. `4. `raporlama-sistemi` — ozel-yazilim
5. `form-basvuru-sistemi` — ozel-yazilim
6. `saas-platformu` — saas
7. `abonelik-tabanli-yazilim` — saas
8. `multi-tenant-uygulama` — saas
9. `dashboard-sistemi` — saas
10. `mvp-startup-urunu` — saas
11. `lokal-seo` — seo
12. `seo-uyumlu-sayfa-mimarisi` — seo
13. `schema-org-structured-data` — seo
14. `google-search-console-kurulumu` — seo
15. `seo-danismanligi` — seo
16. `dijital-otomasyon` — it-ai
17. `domain-dns-yonetimi` — it-ai
18. `hosting-yedekleme` — it-ai
19. `cloudflare-cdn` — it-ai
20. `vercel-deployment` — it-ai
21. `supabase-postgresql` — it-ai
22. `kurumsal-email` — it-ai
23. `api-entegrasyonu` — it-ai
24. `odeme-whatsapp-crm-entegrasyonu` — it-ai
25. `ai-icerik-araclar` — it-ai
26. `dijital-donusum` — it-ai

Not: `dijital-donusum` sayfası halihazırda `TRANSFORMATION_IMG`'i kullanıyor; ayrı kapak üretilince `SERVICE_IMAGES`'a bağlanacak.
