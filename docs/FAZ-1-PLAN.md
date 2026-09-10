# TARDIGRAD SOFTWARE — FAZ 1 PLANI (ONAYLANDI ✅)

> Site mimarisi, tasarım sistemi, SEO altyapısı + ana sayfa + header/footer + **5 pilot hizmet sayfası** + **10 şehir sayfası**.

## ONAYLANAN KARARLAR (kullanıcı tercihi)
| Konu | Karar |
|---|---|
| 1. Tipografi | **Geist** başlık (600–700) + **Inter** gövde (400–500), `next/font` ile self-host, `display: swap` |
| 2. Görsel | **8 görsel Faz 1'de** üretilir (hero, Excel→Web, 9-adım süreç, 5 pilot kapak), her biri için 2 aday → seçim → WebP |
| 3. Form | **Resend ile gerçek gönderim** (sağlanan `RESEND_API_KEY` yalnızca `.env.local`'de; git'e girmez) + hata/limit yönetimi, mock yalnızca anahtar yokken |
| 4. Lokal SEO | **10 il sayfası Faz 1'e alındı** → Faz 1 = 21 sayfa |

> Not (güvenlik): paylaşılan Resend API anahtarı repoya yazılmadı, `.env.local` + `.gitignore` ile korunuyor. Bu sohbet kanalı üzerinden paylaşıldığı için **faz sonunda yeni bir key ile değiştirmen (rotate) önerilir**.


---

## 0. ORTAM KONTROLÜ (yapıldı)

| Öğe | Durum |
|---|---|
| Node / npm | v22.22.3 / 10.9.8 ✅ |
| Repo | `/home/user/webultra` — boş (yalnızca README + `.git`) → scaffold sıfırdan kurulacak |
| CPU / RAM | 2 çekirdek / 3.8 GB → build'ler hafif tutulacak, `output: "standalone"` **kullanılmayacak**, sharp tek seferlik çalıştırılacak |
| npm registry erişimi | ✅ (200) → `next/font` ile Geist/Inter build sırasında indirilebilir |
| Görsel dönüşüm | `convert` (ImageMagick) var, `sharp` eklenecek → PNG → **WebP** + `width/height` |

**Sürüm kararı (kuralın "Next.js 14" maddesi nedeniyle):** `next@14.2.35`, `react@18.3.1`, `tailwindcss@3.4.x`, `framer-motion@11.x`, `lucide-react@0.454.x`. shadcn/ui'ın bugünkü `apps/v4` demosu Tailwind v4'e geçtiği için, **shadcn/ui'ın Tailwind v3 / CSS-variable (v2 registry) deseni** uygulanacak — yani `components/ui/*` elle, birebir shadcn konvansiyonuyla yazılacak (CVA + `cn()` + Radix + `tailwindcss-animate`). Bu, "Bootstrap/MUI yasak, ana dil shadcn" kuralının tam karşılığı.

---

## 1. FAZ 1 KAPSAMI

### 1.1 Yapılacak
1. **İskelet:** Next.js 14 App Router + TS + Tailwind + shadcn/ui (9 primitive) + Geist/Inter + `next-sitemap` + `metadata` bazlı SEO.
2. **Header** (sticky, beyaz, `backdrop-blur`, `border-b`, mega-ish hizmet menüsü, mobil Sheet) + **Footer** (lacivert `#0F2A44`, beyaz metin, 3 sütun: hizmetler / şehirler / kurumsal + KVKK) — her ikisinde `<!-- LOGO SVG BURAYA -->` placeholder'ı.
3. **Ana sayfa:** Bölüm 7'deki 11 blok, eksiksiz.
4. **5 pilot hizmet sayfası** (Bölüm 6 şablonu, 11 bölüm sırasıyla, 900–1400 kelime, 4–8 iç link):
   `kurumsal-web-sitesi`, `e-ticaret-sitesi`, `crm`, `teknik-seo`, `ai-chatbot`
5. **`/hizmetler/` dizin sayfası:** 43 hizmetin tamamı kart olarak listelenir (5 kategori grubu), henüz içeriği olmayan 38 hizmet → `Hazırlanıyor` rozeti + aynı CTA formuna yönlendirme (404 yok, linkler şimdiden sağlam).
6. **Kurumsal sayfalar:** `/hakkimizda/`, `/surec/` (9 adım), `/iletisim/` (çalışan form), `/kvkk/` (aydınlatma metni).
7. **İletişim formu:** `react-hook-form` + `zod` (ad, e-posta, telefon, şirket, hizmet seçimi, mesaj + KVKK açık rıza checkbox'u) → `POST /api/lead` → Resend varsa mail, yoksa güvenli mock + toast (`sonner`) + başarı ekranı + hata yönetimi.
8. **Görseller (8 adet, beyaz kurumsal):** 1 hero mockup + 43'lük grid için üretilebilir altyapı, pilot 5 hizmet kapağı, 1 "Excel→Web" dönüşüm, 1 süreç akışı → WebP, `public/images/`, SEO dosya adı, `alt`, `width/height`, `loading="lazy"` (hero hariç `priority`).
9. **Şema & SEO dosyaları:** `Organization`/`ProfessionalService` (home), `Service + FAQPage + BreadcrumbList` (her hizmet), `robots.txt`, `sitemap.xml` + `sitemap-images.xml`, canonical, OG (`/api/og` dinamik), `manifest`, `lang="tr"`.
10. **Rapor:** Faz 1 sonunda `docs/FAZ-1-RAPOR.md` — tüm URL listesi, title/meta, kelime sayısı, iç link sayısı, şema ve görsel yerleri.

### 1.2 Faz 1'de YAPILMAYACAK (Faz 2'ye planlanan)
- Kalan **38 hizmet** sayfasının tam içeriği + 38 kapak görseli (yalnızca dizin kartları + link hazır).
- `/sehir/{sehir}/` ve `/hizmet/{slug}/{sehir}/` **lokal SEO sayfa ağacı** (10 il → 81 il). *Faz 1'de sadece veri modeli (`src/data/cities.ts`) ve footer/header linkleri kurulur; `generateStaticParams` altyapısı hazır bırakılır.*
- **Blog** (10 yazı) — MDX altyapısı (Taxonomy deseni) Faz 2.
- Dark mode: **hiçbir zaman** (kural: kapalı, `color-scheme: light` sabit).

---

## 2. DİZİN YAPISI (Faz 1 sonunda)

```
webultra/
├─ next.config.mjs            # allowedDevOrigins: ["*.e2b.app"], images avif off, experimental optimizePackage
├─ tailwind.config.ts         # shadcn v3 deseni + marka tokenları
├─ postcss.config.mjs  tsconfig.json  .eslintrc.json
├─ next-sitemap.config.js     # generateRobotsTxt, sitemapIndex, alternatif ref (tr), sitemap-images
├─ package.json               # scripts: dev -H 0.0.0.0, build, postbuild(next-sitemap), start -H 0.0.0.0, imgs
├─ content/                   # (Faz 2) MDX blog
├─ scripts/
│  └─ build-images.mjs        # PNG → WebP (sharp), boyut + en-boy raporu
├─ public/
│  ├─ images/services/  images/hero/  images/process/   # *.webp
│  ├─ favicon.ico  apple-icon.png  logo-placeholder.svg
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx           # <html lang="tr">, font değişkenleri, metadataBase, Organization JSON-LD, viewport
│  │  ├─ page.tsx             # ana sayfa (11 blok)
│  │  ├─ globals.css          # shadcn CSS değişkenleri (sadece açık tema)
│  │  ├─ robots.ts  sitemap.ts (next-sitemap fallback'i)  manifest.ts
│  │  ├─ api/og/route.tsx     # ImageResponse ile OG kartı (beyaz+lacivert)
│  │  ├─ api/lead/route.ts    # zod doğrulama + Resend/mock + rate-limit(kısıtlı)
│  │  ├─ hizmetler/page.tsx  hizmetler/[slug]/page.tsx  (+ generateMetadata, generateStaticParams)
│  │  ├─ hakkimizda/page.tsx  surec/page.tsx  iletisim/page.tsx  kvkk/page.tsx
│  ├─ components/
│  │  ├─ ui/                  # button, card, badge, input, textarea, label, select, checkbox, sheet, accordion, separator, breadcrumb, sonner
│  │  ├─ site/                # header, footer, mobile-nav, logo-placeholder, cta-band, section-heading, stats, service-grid, category-blocks, transformation-showcase, process-timeline, tech-strip, faq-accordion, breadcrumb-nav
│  │  ├─ service/             # service-hero, service-section (11 blok), service-toc, service-internal-links, service-jsonld
│  │  ├─ forms/               # lead-form.tsx (RHF+zod), lead-success.tsx
│  │  └─ motion/              # fade-in-up, reveal (framer-motion "use client", `whileInView`, prefers-reduced-motion)
│  ├─ data/
│  │  ├─ site.ts   # marka, adres (İstanbul/Maltepe), tel/e-posta, sosyal, renk sabitleri
│  │  ├─ services.ts   # 43 hizmet: title/meta/H1/kw/slug + içerik blokları (pilot 5 dolu)
│  │  ├─ cities.ts     # 10 il → 81 il için hazır sözlük
│  │  ├─ faq.ts  nav.ts  tech.ts
│  ├─ lib/
│  │  ├─ utils.ts (cn)  seo.ts (buildMetadata)  schema.ts (Organization/Service/FAQPage/BreadcrumbList)
│  │  ├─ content-factory.ts  # 43 hizmet için blokları üreten şablon + elle yazılmış override'lar (pilot 5)
│  │  └─ slugify.ts    # Türkçe: ı→i, ğ→g, ş→s, ç→c, ö→o, ü→u, â→a
│  └─ types/content.ts
└─ docs/FAZ-1-PLAN.md  docs/FAZ-1-RAPOR.md
```

**Kritik mimari karar:** 43 sayfanın tamamı tek bir `/hizmetler/[slug]` route'u + veri-odaklı `src/data/services.ts` ile üretilir (`generateStaticParams`). Bu sayede:
- İçerik güncellemesi = tek dosya, SEO kalıplarının (title/desc/canonical/schema) 43 sayfada **birebir tutarlılığı**,
- Faz 2'de 38 hizmet = "veriyi doldur" işi (kod değişikliği yok), 81 il ölçeklemesi de aynı desen.
- Pilot 5 hizmet için içerik **elle ve tam** yazılır (kelime sayısı ve benzersizlik garantisi).

---

## 3. TASARIM SİSTEMİ (Bölüm 1'in birebir karşılığı)

### 3.1 Tokenlar (Tailwind + CSS değişkeni, sadece açık tema)

| Token | Değer | Kullanım |
|---|---|---|
| `background` | `#FFFFFF` | sayfa zemini (koyu tema yok) |
| `surface` | `#F8FAFC` (slate-50) | alternatif section / kart içi |
| `primary` | `#0F2A44` (lacivert) | header/footer zemin, buton, H1–H3 |
| `primary-hover` | `#1E3A5F` | hover/focus |
| `secondary-text` | `#475569` / `#64748B` | ikincil metin, eyebrow |
| `accent` | `#06B6D4` (cyan) | **sadece** ikon vurgusu, link altı, CTA mikro-vurgu |
| `success` | `#10B981` (yeşil) | **sadece** onay/başarı + metrik vurgu |
| `foreground` | `#0F172A` başlık, `#334155` paragraf | body |
| `border` | `#E2E8F0` (hover: `#CBD5E1`) | hairline |
| `ring` | `#0F2A44` | `focus-visible` erişilebilirlik |

Şema (renk) sınırlaması **CSS/JS'te zorunlu**: `bg-primary`, `text-primary`… dışında renk yazmak yasak; cyan/yeşil yalnızca `accent` utility'siyle, toplam 2 öğeyi geçmeyecek.

### 3.2 Ritim & bileşen dili
- `rounded-xl` (kartlar), `rounded-lg` (input/badge), `rounded-full` (CTA yok; sadece pill rozet).
- `shadow-sm` → hover `shadow-md` + `border-primary/40`; **kartlarda asla koyu gölce, asla gradient metin yok.**
- Bölüm dolgusu: `py-20 md:py-28` (kural "bol boşluk"), iç boşluk `p-6 md:p-8`, grid `gap-6`.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Tipografi: H1 `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`; H2 `text-3xl md:text-4xl`; gövde `text-base md:text-lg leading-7`.
- Font: `Geist` (başlık + gövde, `next/font`) + `Geist Mono` (rakam/kod etiketleri, eyebrow). → *alternatif: gövde Inter* (aşağıdaki onay sorusu #1).
- Hero grid deseni: inline SVG line pattern, **`opacity: 0.03`**, lacivert; `pointer-events-none`, `aria-hidden`.
- Animasyon: Framer Motion `whileInView` + `viewport={{ once:true, margin:"-80px" }}`, `prefers-reduced-motion`'da otomatik kapalı; Lenis **Faz 1'de yok** (girişimiş smooth-scroll, mobilde scroll-jank riski → Faz 2'de opsiyonel).
- Sonner toast: form gönderimi/başarı/hata geri bildirimi.

### 3.3 Logo placeholder
```tsx
{/* components/site/logo-placeholder.tsx */}
<span className="flex items-center gap-2">
  {/* LOGO SVG BURAYA */}
  <span className="text-[15px] font-semibold tracking-tight text-primary">Tardigrad<span className="text-primary/60">Software</span></span>
</span>
```
- Header: beyaz zemin üstü lacivert; Footer: lacivert zemin üstü beyaz (`text-white`); `public/logo-placeholder.svg` favicon ile aynı alan; `Organization.logo` şemasında `https://tardigradsoftware.com/logo.svg`.

---

## 4. SEO / SCHEMA PLANI (Bölüm 3'ün uygulaması)

| Öğe | Uygulama |
|---|---|
| title | pilot: `{Hizmet} | Tardigrad Software` (≤ 60 kr). Uzun varyant `{Hizmet} Hizmeti | Tardigrad Software` — kelime sayacı ile 60'ı aşarsa otomatik kısa forma düşer |
| description | 150–158 kr, anahtar kelime + "Türkiye geneli" + fayda, her sayfada benzersız (veri dosyasından) |
| canonical | `metadataMetadata.alternates.canonical = /hizmetler/{slug}/` + `metadataBase: https://tardigradsoftware.com` (trailing slash tutarlı) |
| OG/Twitter | `og:title/description/image/url/type=website`, `locale=tr_TR`, `twitter:card=summary_large_image` + `og:image` → `/api/og` (beyaz kart, lacivert başlık, logo placeholder, hizmet adı) |
| Breadcrumb | görünür `Breadcrumb` bileşeni (`Ana Sayfa > Hizmetler > {Hizmet}`) + `BreadcrumbList` JSON-LD |
| Şema | home: `ProfessionalService` (+`Organization`, `address` İstanbul/Maltepe, `areaServed: TR`, `sameAs`, `logo`) · hizmet: `Service` (`serviceType`, `provider`, `areaServed`, `offers`) + `FAQPage` (5–8 SSS, accordion ile **birebir aynı metin**) + `BreadcrumbList` |
| robots/sitemap | `next-sitemap` postbuild: `sitemap.xml` + `sitemap-robots.txt` (+ `sitemap-1.xml` parçaları) ; 43 hizmet + kurumsal + dizin sayfaları `changefreq/.priority`; Faz 2'de `sitemap-images.xml` |
| Görsel SEO | dosya adı `kurumsal-web-sitesi-istanbul.webp` kalıbı, `alt` zorunlu, `width/height` sabit, `loading="lazy"` (hero `priority`) |
| Core Web Vitals | hedef: LCP < 2.5s (hero görseli `priority` + `fetchpriority=high`, 0 font-shift: `next/font` `display:swap` + `size-adjust`), CLS < 0.1 (görsellere sabit `width/height`, shimmer yok), INP < 200ms (istemci JS'i sadece header/form/accordion/motion; sayfalar RSC) |
| Dil/URL | `lang="tr"`, ASCII slug'lar (`turkce-normalize`), her URL sonunda `/` |

**Doğrulama adımım (Faz 1 sonunda):** `next build` çıktısındaki sayfa listesi, üretilen `sitemap.xml` satır sayısı, JSON-LD'lerin `node -e "JSON.parse"` ile sözdizim kontrolü ve `next export`-benzeri statik çıktı üzerinden 404 taraması (iç link kırık kontrolü).

---

## 5. GÖRSEL ÜRETİM PLANI (8 görsel, beyaz kurumsal)

| # | Görsel | Dosya | Boyut | Yerleşim |
|---|---|---|---|---|
| 1 | Hero: beyaz zemin, lacivert başlıklı dashboard mockup, cyan buton, çok hafif grid | `hero/kurumsal-dijital-donusum-dashboard.webp` | 1280×960 | Ana sayfa hero sağ |
| 2 | Excel→Web dönüşüm (iki beyaz kart arası ok) | `dijital-donusum-excel-den-webe.webp` | 1280×720 | Ana sayfa blok 5 + /hakkimizda |
| 3 | 9 adımlı süreç akışı (beyaz kart, lacivert çizgi) | `surec-9-adim-akisi.webp` | 1280×720 | /surec + hizmet "Nasıl Çalışıyoruz" |
| 4–8 | Pilot 5 hizmet kapağı (CRM: müşteri tablosu paneli; E-ticaret: ürün+sepet; Kurumsal site: sayfa iskeleti; Teknik SEO: Search Console grafiği; AI Chatbot: sohbet paneli) | `services/{slug}-{kilavuz-kw}.webp` | 1280×720 | Hizmet hero'su + "Ne Alırsınız" mockup |

Üretim: `generate_image` (her biri için 2 aday → sen seçersin), sonra `sharp` ile WebP (quality 82), `public/images/…`, boyut raporu. Kural: **beyaz zemin** (JS'de `#FFFFFF`), aşırı kalabalık değil, lacivert kontrast, ikon/illüstrasyon flat-mockup.

---

## 6. ANALİZ EDECEĞİM KAYNAKLAR (kural: 2–3 tane)

Bu görev (beyaz+lacivert kurumsal landing + 43 SEO sayfası) için listeden seçimim:

1. **shadcn/ui (+ Radix)** → `components/ui/*` konvansiyonu: CVA varyantları, `cn()`, CSS değişken teması, `Breadcrumb`/`Accordion`/`Sheet`/`Select` API'ları. *(kısmen incelendi: repo artık Tailwind v4 demo — biz v2 desenini kullanacağız)*
2. **Cruip Open React Template** → kurumsal landing blok sırası/rythm (hero + stats + feature grid + CTA + footer), beyaz zeminde gölge/kenarlık kullanımı, `Container`/`Section` kalıbı.
3. **Taxonomy** → Next 14 App Router'da çok-sekelli içerik sitesi + `generateMetadata` + içerik-veri ayrımı + `sitemap/robots` yerleşimi (blog için Faz 2 altyapısı burada hazır dursun diye).
4. (yardımcı, "repo" sayılmaz) `next-sitemap` + `react-hook-form`/`zod`/`Resend` resmi kalıpları — form ve sitemap dosyalarını bunlara göre yazacağım.

Magic UI/Framer: yalnızca 2 animasyon deseni (reveal + hover lift), ekstra bileşen bağımlılığı yok.

---

## 7. FAZ 1 TESLİM LİSTESİ (URL'ler)

```
/                                  (11 blok, 1000+ kelime, Organization şeması)
/hizmetler/                        (43 kart, 5 kategori grubu)
/hizmetler/kurumsal-web-sitesi/    ★ pilot
/hizmetler/e-ticaret-sitesi/       ★ pilot
/hizmetler/crm/                    ★ pilot
/hizmetler/teknik-seo/             ★ pilot
/hizmetler/ai-chatbot/             ★ pilot
/hakkimizda/  /surec/  /iletisim/  /kvkk/
/robots.txt  /sitemap.xml  /sitemap-1.xml  /manifest.webmanifest  /api/og?title=…  /api/lead (POST)
```
Faz 1 sayfa sayısı: **11** · Görsel: **8** · shadcn primitive: **13** · Pilot içerik kelime toplamı: **~5.500–6.000**

---

## 8. KABUL KRİTERLERİ

1. `npm run build` hatasız; `npm run dev` → **`0.0.0.0:3000`**, preview host (`*.e2b.app`) `allowedDevOrigins`'ta; prod `next start -H 0.0.0.0`.
2. Koyu tema **hiçbir yerde** yok; tüm sayfalar `#FFFFFF`/`#F8FAFC` zemin. Bootstrap/MUI/styled-components bağımlılığı yok (`package.json` kanıtı).
3. Her pilot hizmet sayfası: 11 bölüm sırasıyla + 800–1400 kelime + ≥4 hizmet iç linki + ≥2 şehir iç linki + 5–8 SSS + `Service`/`FAQPage`/`BreadcrumbList` JSON-LD geçerli.
4. `title` ≤60, `description` 150–160, canonical+OG+Twitter eksiksiz; `sitemap.xml` 11 URL + `robots.txt` `Sitemap:` satırı içeriyor; iç linklerde 404 yok.
5. Hero'da LCP: `priority` görsel + metin-first sırası; tüm `<img>`/`next/image`'da `alt`+`width`+`height`; CLS ≈ 0.
6. Form: boş/yanlış e-posta/KVKK işaretsiz → alan bazlı hata; doğruda → başarı ekranı + toast; `/api/lead` zod + mail yoksa mock (crash yok).
7. `<!-- LOGO SVG BURAYA -->` placeholder'ı header/footer/favicon/svg'de **korunmuş**; `grep` ile raporlanır.
8. `docs/FAZ-1-RAPOR.md`: URL tablosu (title/meta/kelime/iç link/şema/görsel yolları).

---

## 9. UYGULAMA SIRASI (onaydan sonra)

1. Scaffold + config (`next`, `tailwind`, `next-sitemap`, `next.config.mjs` dev-origin) — 1 adım
2. `lib/` + `data/` (site, 43 hizmet verisi, pilot 5 içerik, 10 il) — içerik yoğun
3. `components/ui/*` (shadcn) + tema tokenları
4. Header/Footer/Breadcrumb/CTA/motion → ana sayfa 11 blok
5. Hizmet şablonu (`[slug]`) + `generateMetadata` + JSON-LD
6. Kurumsal sayfalar + form + API route
7. Görselleri üret → WebP → yerleştir
8. `build` + SEO/doğrulama + `docs/FAZ-1-RAPOR.md` + preview'i aç

**Rapor edeceğim riskler:** (a) 2 CPU'da `build` ~2–4 dk; (b) 8 görsel üretimi seçim beklediği için süreyi uzatır — istersen önce kod, görseller sonra; (c) Resend anahtarı olmadan mail gönderimi mock'a düşer (kodsuz, env ile açılır).

---

## 10. ONAYIN İÇİN 4 KARAR

1. **Font:** `Geist` (başlık+gövde, kurumsal, liste #5) — yoksa gövde `Inter`, başlık `Geist`? → önerim: **Geist**.
2. **Faz 1'de pilot 5 hizmet için kapak görseli üretelim mi?** (toplam 8) → önerim: **evet** (görsel kompozisyonunu erken kilitlemek için).
3. **Form:** Resend anahtarı yok → **mock + log** (önerim) / yoksa `mailto:` fallback / env'i sen mi vereceksin?
4. **Lokal SEO:** Faz 1'de `10 il` linkli ama sayfalar kapalı (önerim) → yoksa 10 il sayfasını da Faz 1'e alayım mı?

> **Onay verirsen** ("OK, Faz 1") doğrudan 9. maddedeki sırayla kurmaya başlıyorum.

---

# 11. ONAYLANAN KARARLAR (uygulamaya esas)

| # | Konu | Karar |
|---|---|---|
| 1 | Font | Başlıklar **Geist 600-700**, gövde **Inter Variable 400-500** — `geist` npm + `@fontsource-variable/inter` (self-hosted). `next/font/google` bu Next sürümünde Geist barındırmıyor. |
| 2 | Görsel | **8 görsel Faz 1'de üretildi**, her biri için 2 aday → seçim alındı. Beyaz zemin + lacivert UI, WebP 1280px (q82), PNG kaynakları `public/images/_src/` (gitignore). |
| 3 | Form | **Gerçek Resend** gönderimi (`RESEND_API_KEY` env'de). Gönderim kanalı hata verirse talep `data/leads.jsonl`'e yazılır ve kullanıcıya başarı döner. |
| 4 | Lokal SEO | **10 il sayfası Faz 1'e alındı** → ek olarak 5 pilot hizmet × 10 il = 50 şehir varyantı. Faz 1 toplamı: 109 statik sayfa / 71 indekslenebilir URL. |

## Uygulama notları (build sonrası)

- **sitemap/robots:** `next-sitemap` yerine Next 14 native `src/app/sitemap.ts` + `src/app/robots.ts`. Tek kaynak `src/data/*` olduğu için drift ve postbuild adımı yok; dev ve prod aynı davranır.
- **Medya sorgusu/izin:** `next dev` çıktı izole olması için `distDir=.next-dev`, `next build` `.next` kullanır → preview açıkken build alınabilir. `allowedDevOrigins: ["*.e2b.app"]` ile sandbox host'u reddedilmez.
- **38 hizmet sayfası:** iskelet + meta + schema + iç linkler + görsel fallback'i yayında, gövde metni `src/lib/content-factory.ts` ile kategori tohumlarından üretiliyor; **Faz 2'ye kadar `noindex, follow`** ve sitemap'te değil.
- **Logo:** SVG'ler gelmedi → `public/logo-placeholder.svg`, `public/icon.svg`, `src/components/site/logo.tsx` içinde `LOGO SVG BURAYA` işaretçileri duruyor; Organization şeması `/logo-placeholder.svg`'yu gösteriyor.
- **Doğrulama:** `npx tsc --noEmit` ✓ · `npx next lint` ✓ (0 uyarı) · `npx next build` ✓ 116 sayfa · `node scripts/seo-check.mjs` ✓ (0 uyarı: title ≤60, description 128-158, JSON-LD parse, kırık iç link 0, WebP/alt/width-height, koyu tema yok) · `node scripts/check-desc-endings.mjs` ✓.
- **Bekleyen:** Resend alan adı (`tardigradsoftware.com`) doğrulanmadığı için bu ortamda e-posta `application_error` dönüyor → yedek log devrede. Üretim öncesi SPF/DKIM/DMARC eklenip `RESEND_FROM` bu domaine alınmalı.
- Detaylı envanter: **`docs/FAZ-1-RAPOR.md`** (tüm URL'ler + meta'lar + görsel yerleri), ham veri: `docs/seo-audit.json`, `docs/meta-dokum.txt`.
