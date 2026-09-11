# AJANLAR İÇİN PROJE EL KİTABI (AGENTS.md)

> Bu dosya, bu depoya sonradan gelen herhangi bir geliştirici/ajan için **tek başvuru kaynağıdır**.
> İnsan tarafı için: `README.md`. Detaylı envanter: `docs/FAZ-1-RAPOR.md` (489 URL).
> Plan/karar geçmişi: `docs/FAZ-1-PLAN.md`.

## 1. Proje nedir

Tardigrad Software (tardigradsoftware.com) kurumsal + yerel SEO sitesi. **Türkçe**, beyaz-lacivert kurumsal tema.

- **Faz 1 (bitti):** iskelet, ana sayfa, 5 pilot hizmet, 10 il sayfası, iletişim formu (Resend), OG üretimi, sitemap/robots.
- **Faz 2 (bitti):** 43/43 hizmet sayfasının **elle yazılmış** içeriği, `noindex` kaldırıldı, 43×10 = 430 hizmet×il varyantı, 43/43 kapak görseli.
- **Faz 3 (yapılacak):** `/blog/` + 10 yazı, logo SVG entegrasyonu, Resend alan adı doğrulaması (bkz. §10).

Canlı sayı: `npx next build` → **496 statik rota / 489 indekslenebilir URL**.

## 2. ZORUNLU KURALLAR (kullanıcı tarafından kesindir)

| Kural | Detay |
|---|---|
| Stack sabit | Next.js 14 App Router + TypeScript + Tailwind v3 + **shadcn/ui** (elle desen: CVA + `cn()` + Radix) + lucide-react + framer-motion |
| Yasak | Bootstrap, MUI, styled-components, `next/font/google` üzerinden Geist, Lenis, koyu tema |
| Tema | Zemin beyaz `#FFFFFF` + `slate-50`; primary lacivert `#0F2A44` / `#1E3A5F`; cyan `#06B6D4` ve yeşil `#10B981` **yalnız** CTA/ikon vurgusu; `rounded-xl`, `shadow-sm` |
| Dil | Her metin Türkçe, `lang="tr"`, `viewport.colorScheme = "light"` |
| Görsel | Her yeni görsel için **2 aday** üretilir ve **kullanıcı seçer**; tek yanıtta en fazla 3 `generate_image` çağrısı; kullanıcı açıkça istemedikçe çoklu seçenek sunulmaz |
| Onay | Yeni bir iş kalemine başlamadan önce **plan çıkar ve onay bekle** |
| Kayıt | **Her iş adımının sonunda `npm run save`** (commit + push + uzak doğrulama) — bkz. §9 |

## 3. Komutlar

```bash
npm install                 # node_modules sandbox/CI'da silinebiliyor
cp .env.example .env.local  # gizli anahtarlar repoda yok; NEXT_PUBLIC_SITE_URL boşsa kod içinde varsayılan var
npm run dev                 # 0.0.0.0:3000, distDir=.next-dev (build'i bozmaz)
npm run build               # node scripts/build-images.mjs && next build   (.next)
npm run verify              # typecheck + lint + build + seo:check + check:copy  ← Definition of Done
                            #   (preverify kancası node_modules yoksa otomatik `npm install` yapar)
npm run typecheck           # tsc --noEmit
npm run lint                # next lint
npm run seo:check           # build çıktısındaki HTML'den SEO/kopya denetimi (JSON: docs/seo-audit.json)
npm run report              # docs/FAZ-1-RAPOR.md üretir (489 URL satırı)
npm run imgs                # public/images/_src/*.png → 1280×720 WebP + manifest
npm run queue               # docs/GORSEL-KUYRUSU.md (hangi hizmetin kapağı var/yok)
npm run save -- "özet"      # commit + push + uzak SHA doğrulaması (kurtarma dâhil)
```

**CI:** `ops/ci.github-workflow.yml` GitHub Actions tanımı (npm ci → `npm run verify` → artifact).
Etkinleştirmek için `npm run ci:enable`. Arena'nın GitHub App'inde `workflows` izni olmadığı için
workflow dosyası push reddedilebilir; sorun çıkarsa dosyayı GitHub arayüzünden ekle.

## 4. Mimari harita

```
src/data/site.ts              marka, adres, telefon, e-posta, sosyal — tek kaynak
src/data/services.ts          43 hizmet kaydı + pilotContentsBySlug merge + status/cityPriority
src/data/service-contents-*.ts elle yazılmış içerikler (slug → ServiceContent), 14 dosya
src/data/pilot-contents*.ts   Faz 1 pilotları (01, 04, 09, 26, 41)
src/data/cities.ts            10 il (slug, ilçe/bölge notları, lokalist ifadeler)
src/data/categories.ts        5 kategori
src/data/images.ts            HERO/PROCESS/TRANSFORMATION + SERVICE_IMAGES (slug → {src,alt,width,height})
src/lib/seo.ts                buildMetadata(): title ≤60 kr, description 150-160 kr, canonical, og, robots
src/lib/schema.ts             Organization/ProfessionalService, Service, FAQPage, BreadcrumbList, WebSite
src/lib/utils.ts              cn(), absoluteUrl() (NEXT_PUBLIC_SITE_URL fallback'li), fitText/fitTitle
src/lib/content-factory.ts    kategori tohumlu ŞABLON içerik — artık hiçbir yayında hizmet için kullanılmıyor
src/lib/icons.ts              iconRegistry (lucide adları) + getIcon() fallback LayoutDashboard
src/app/sitemap.ts, robots.ts  pilotServiceSlugs (= elle yazılmış hizmetler) kaynaklı, native Next
src/app/(site sayfaları)      /, /hizmetler, /hakkimizda, /surec, /iletisim, /kvkk, /sehir/[slug]
src/app/hizmetler/[slug]      hizmet sayfası (Bölüm 6 sırası, 10 bölüm)
src/app/hizmet/[slug]/[city]  hizmet×il varyantı; generateStaticParams yalnız pilot slugs × 10 il, dynamicParams=false
src/app/api/lead              form → Resend; hata/anahtarsız → data/leads.jsonl; IP saatlik limit
src/app/api/og                OG image üretimi (ImageResponse)
src/components/ui             shadcn/ui bileşenleri (elle desen)
src/components/site|service|forms  sayfa parçaları; site-image.tsx = görsel yoksa CSS/SVG mockup fallback
public/images/{hero,shared,services}/*.webp  +  public/images/_src/*.png (kaynaklar repoda)
scripts/*.mjs, scripts/git-save.sh           rapor/denetim/görsel/kayıt otomasyonu
docs/                                          plan, rapor, kuyruk, ham denetim çıktısı
```

## 5. Yeni hizmet ekleme reçetesi

1. `src/data/services.ts` → `services` dizisine kayıt: `slug, title, category, description, keywords, icon, related, cityPriority` ve `status:"index"`.
2. İçerik **hazırsa**: `src/data/service-contents-<grup>.ts` dosyasına `export const x: Record<string, ServiceContent>` olarak yaz (dosya başına 2-3 hizmet), sonra `services.ts`'te import et ve `pilotContentsBySlug`'a spread'le. Kayıt otomatik `status:"pilot"` olur → `noindex` kalkar, sitemap'e girer, şehir varyantları üretilir. **Ek config gerekmez.**
3. `src/lib/icons.ts` kullanılmayan ikon adı ekleniyorsa hem `import` hem `iconRegistry` satırı gerekli (mükerrer anahtar üretme).
4. `npx tsc --noEmit && npx next build && npm run seo:check && node scripts/check-desc-endings.mjs` → sonra `npm run save`.

## 6. İçerik yazım kuralları (kabul kriteri)

- Sayfa sırası: H1 → tanım → neden gerekli → kapsam → süreç → faydalar → kimler için → neden biz → SSS (6 soru; Q1 kapsam) → ilgili hizmetler → CTA.
- **1.500-1.900 kelime**, her bölüm 2-4 cümle, somut örnekler, taneli (`hazirlik` 3-4 madde, `ciktilar` 3-4 madde).
- Uzun içeriği **tek `write_file` çağrısına sığdırma** (araç hatası veriyor): dosya başına 2-3 hizmet, ~300-450 satır.
- Her toplu yazımdan sonra: `grep -P "[\x{4e00}-\x{9fff}]" src/data/*.ts` (CJK kaçakları üretildi) ve `npm run check:copy` (kesik cümle) zorunlu.
- Meta: title ≤60 kr, description 150-160 kr — `src/lib/seo.ts` otomatik kısaltıyor; elle yazıyorsan kurala uy.

## 7. Görsel hattı reçetesi

```bash
# 1) üret (kullanıcı 2 adaydan birini seçer; generate_image file_path = public/images/_src/<slug>-<konu>.png)
# 2) dönüştür + bağla + doğrula + kaydet:
npm run imgs
npm run wire:img "<slug>" "<dosya>.webp" "<Türkçe alt metin ~110-150 kr>"
npx tsc --noEmit && npx next build && npm run report && node scripts/image-queue.mjs
npm run save -- "..."
```

- Stil sabiti: beyaz zemin, lacivert UI, cyan/yeşil yalnız küçük vurgu, rounded-xl, ince slate-200 kenarlık, **okunabilir metin yok** (soyut gri çubuklar), koyu zemin yok, 16:9.
- `scripts/build-images.mjs` kuralı: `hero-` → `public/images/hero` (1280×800); `surec-`/`dijital-donusum-excel` → `shared` (1280×720); **geri kalan her şey** → `services` (1280×720). Yeni shared görsel eklerken dosya adını buna göre seç.
- Manifest, kaynak PNG silinmiş olsa bile diskteki WebP'leri korur (sandbox geri yüklemelerine dayanıklı).

## 8. Denetimler (Definition of Done)

`npm run verify` tek başına yeterli; beklenen yeşil durum:

- `tsc --noEmit` 0 hata · `next lint` 0 uyarı · `next build` 496 rota hatasız
- `seo-check`: pages 489 · servicePages 43 · pagesWithFaq 43 · indexablePages 489 · handWrittenServicePages 43 · kelime min ≥1.500 · brokenLinks 0 · pagesWithoutJsonLd 0 · **imageRefs 46 / eksikGorselDosyasi 0** (JSON-LD içindeki görsel yolları dâhil diskte aranır)
- `check-desc-endings`: 0 şüpheli kesim
- HTML'de `noindex` yalnız `_not-found`'da; sitemap'te 489 `<loc>`
- `robots` meta kontrolü için doğru komut: `grep 'name="robots" content="[^"]*noindex'` (yalın `grep -l noindex` **yanlış pozitif** verir — metinlerde "noindex" kelimesi geçebiliyor)

## 9. Kayıt disiplini ve bu ortamın tehlikesi

Sandbox, tur **ortasında** kendini eski anlık görüntüye alabiliyor (4 kez yaşandı): `.git` tazeleniyor, commit nesneleri siliyor, `node_modules`/`.env.local`/ignore edilen dosyalar yok oluyor.

- Bu yüzden **küçük commit'ler + her adımda `npm run save`**. Script push reddedilirse önce `backup/<zaman>-<sha>` dalına yazar, sonra `fetch` + `reset --soft origin/<dal>` ile deltasını uzak ucun üstüne commit'ler.
- Kurtarma elle gerekirse: `git add -A && git commit -m "snapshot" && git branch -f rescue` → `git fetch origin "+refs/heads/<dal>:refs/remotes/origin/<dal>"` → `git reset --soft origin/<dal>` → commit → push. Clone tek dal (`+refs/heads/main`) olarak geldiği için önce `git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'`.
- Uzağa itmeden "kaydettim" deme: `git ls-remote origin <dal>` SHA'sı lokal HEAD ile eşleşmeli (script bunu yazıyor).
- `.env.local` **asla commit edilmez**; silinirse `.env.example`'dan yeniden oluşturulur.

## 10. Yapılacaklar (Faz 3)

1. `/blog/` liste rotası + 10 yazı; `Article`/`BlogPosting` JSON-LD; hizmet sayfalarına iç link; `src/data/*` desene uygun yeni dosya; sitemap'e eklenmesi; her yazının kapağı için 2 aday.
2. Logo SVG'leri teslim edilince: `public/icon.svg`, `public/logo-placeholder.svg`, `src/components/site/logo.tsx` içindeki `LOGO SVG BURAYA` işaretçilerini kaldır, OG ve `Organization.logo`'yu güncelle.
3. Resend: `tardigradsoftware.com` için SPF/DKIM/DMARC doğrulanınca `RESEND_FROM` gerçek adrese alınsın; `data/leads.jsonl` yedeği dursun.
4. `portfoy-sitesi` kapağı: mint zeminli + bozuk küçük yazılı aday seçilmiş; beyaz temalı yeniden üretim öneriliyor.

## 11. Denenmiş ve reddedilmiş yaklaşımlar (boşuna tekrar deneme)

- `npx shadcn init` → repo Tailwind v4 şablonuna geçiyor; v3 desenini elle kur (bkz. `src/components/ui`).
- `Sitemap`, `QuoteOpen`, `Fork`, `MessageSquareQuestion` → lucide-react 0.454'te **yok** (build kırılır). `h-4.5` gibi üretilmeyen sınıflar kullanma.
- shadcn renklerinde `<alpha-value>` kullanmazsa `bg-primary/10` çalışmıyor.
- Yeni hizmet eklenince dev sunucusu eski `.next-dev` + `dynamicParams=false` önbelleğiyle 404/308 verebilir → `rm -rf .next-dev` + yeniden başlat (build çıktısı `.next` doğruydu).
- Eski log dosyalarını okumak sahte teşhis üretir → daima `find src/app -type f` ile rotayı doğrula.
- Çok uzun nesne literalini tek `write_file` ile yazmak araç hatası veriyor → böl (§6).
- Python/regex ile `iconRegistry`ye toplu ekleme mükerrer anahtar üretti (TS1117) → bloğu benzersiz ada göre yeniden üret ya da `npm run wire:img` deseni gibi edit-file kullan.
