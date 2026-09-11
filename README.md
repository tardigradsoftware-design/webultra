# Tardigrad Software — kurumsal & SEO sitesi (webultra)

Next.js 14 App Router + TypeScript + Tailwind v3 + shadcn/ui (CVA/Radix) üzerine kurulu,
**43 hizmet sayfalı**, lokal SEO (il bazlı) ve yapısal veri odaklı kurumsal site.
Tema: beyaz + lacivert (#0F2A44) — koyu tema kapalı. Dil: Türkçe (`lang="tr"`).

## Hızlı başlangıç

```bash
cp .env.example .env.local   # RESEND_API_KEY, NEXT_PUBLIC_SITE_URL, RESEND_TO/FROM
npm install
npm run imgs                 # public/images/_src/*.png → optimize edilmiş WebP + manifest
npm run dev                  # http://localhost:3000  (distDir: .next-dev)
```

Prod:

```bash
npm run build && npm run start
```

Denetim / rapor:

```bash
npm run typecheck
npm run lint
npm run seo:check            # build çıktısındaki HTML'de meta/schema/görsel/link denetimi
npm run report               # seo:check --json + docs/FAZ-1-RAPOR.md üretimi
```

## Rotalar

| Rota | Açıklama |
|---|---|
| `/` | Ana sayfa — 10 blok: hero, rakamlar, 5 kategori, 43 hizmet grid, dijital dönüşüm, süreç, SEO/lokal SEO, teknoloji, SSS, CTA+form |
| `/hizmetler/` | 43 hizmetin dizini (kategori gruplu) |
| `/hizmetler/{slug}/` | Hizmet sayfası — Bölüm 6 şablonu, Service + FAQPage + Breadcrumb JSON-LD |
| `/sehir/{il}/` | İl landing sayfası — yerel schema (LocalBusiness + areaServed), 10 il |
| `/hizmet/{slug}/{il}/` | Hizmet × il varyantı (FAZ 1: 5 pilot × 10 il = 50 sayfa) |
| `/hakkimizda/`, `/surec/`, `/iletisim/`, `/kvkk/` | Kurumsal sayfalar |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Teknik SEO çıktıları (Next native) |
| `/api/lead/` | Form endpoint: zod doğrulama → honeypot/oran kontrolü → Resend + `data/leads.jsonl` yedeği |
| `/api/og/` | 1200×630 dinamik OG kartı (Geist, beyaz/lacivert) |

FAZ 1'de yalnızca 5 pilot hizmet (`kurumsal-web-sitesi`, `e-ticaret-sitesi`, `crm`, `teknik-seo`,
`ai-chatbot`) indekslenir; diğer 38 hizmet sayfası şablon içerikle üretilir ve `noindex, follow`
durumundadır (FAZ 2'de editoryal içerik geldikçe açılır).

## Dizin

```
src/
  app/                # route'lar, layout, sitemap/robots/manifest, api
  components/
    ui/               # shadcn primitive'leri (13 adet, Tailwind v3 deseni)
    site/             # header, footer, logo, section, kartlar, SSS, JSON-LD…
    home/             # ana sayfa blokları
    service/          # hizmet sayfası bileşenleri (hero, bölümler, iç linkler, TOC)
    forms/            # lead-form (react-hook-form + zod + sonner)
    motion/           # framer-motion reveal (prefers-reduced-motion uyumlu)
  data/               # 43 hizmet, 10 il, kategoriler, süreç, görseller, SSS — TEK DOĞRU KAYNAK
  lib/                # seo, schema, content-factory, icons, lead, utils
  types/content.ts    # içerik tipleri
public/images/        # optimize WebP çıktıları (+ manifest.json)
scripts/              # build-images, seo-check, make-report
docs/                 # plan + FAZ 1 raporu
```

## Kararlar ve notlar

- **İkon/Logo**: logo SVG'leri teslim edilmedi. `public/logo-placeholder.svg`, `public/icon.svg`
  ve `src/components/site/logo.tsx` içinde `LOGO SVG BURAYA` işaretçisi durur; Organization
  şemasında `logo` alanı `/logo-placeholder.svg`'yu gösterir.
- **Font**: `next/font/google` bu Next sürümünde Geist içermiyor → `geist` npm paketi
  (self-hosted, variable) + `@fontsource-variable/inter`. Başlıklar Geist, gövde Inter.
- **Sitemap/robots**: `next-sitemap` yerine Next 14 native `app/sitemap.ts` + `app/robots.ts`
  kullanıldı — tek kaynak `src/data/*` olduğu için sürükleme/kayma riski yok, ek postbuild adımı yok.
- **Görseller**: 43/43 hizmet sayfasında 1 kapak görseli; dosya yoksa CSS/SVG mockup fallback.
  Yayın formatı WebP (1280×720, q82, beyaz letterbox → CLS 0); **kaynak PNG'ler `public/images/_src/`
  klasöründe repoda tutuluyor** (sandbox/CI geri yüklemeleri ignore edilen dosyaları silebildiği için).
- **Form**: gönderim hatası durumunda bile talep `data/leads.jsonl` dosyasına yazılır
  (kayıp yok). Resend'de `from` alanının doğrulanmış bir domaine bağlı olması gerekir.
- **Sunucu**: `next dev -H 0.0.0.0`; dev çıktı izole olsun diye `distDir=.next-dev`,
  build `.next` kullanır (böylece `next build` açık dev sunucusunu bozmaz).

## Ortam değişkenleri

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG/sitemap tabanı (prod: `https://tardigradsoftware.com`) |
| `RESEND_API_KEY` | Boşsa `RESEND_MOCK=auto` nedeniyle talepler yalnızca loglanır |
| `RESEND_FROM` / `RESEND_TO` / `RESEND_CC` | Bildirim adresleri (virgülle çoklu) |
| `LEAD_RATE_LIMIT_PER_IP_PER_HOUR` | IP başına saatlik talep sınırı (vars. 6) |
| `RESEND_MOCK` | `0` zorla gerçek, `1` zorla mock, `auto` key yoksa mock |

## Kayıt disiplini — her adımın sonunda GitHub'a

Bu ortamda sandbox, tur ortasında kendini eski anlık görüntüye alabiliyor ve **ignore edilen
dosyalarla birlikte `.git` dizinini de sıfırlayabiliyor** (3 kez yaşandı). Bu yüzden kural:
her iş adımı biter bitmez kaydet.

```bash
npm run save -- "özet mesaj"     # add -A → commit → push (tek komut)
```

`scripts/git-save.sh` şunları yapar:
1. Ignore edilmiş ama `src/`, `scripts/`, `docs/`, `public/images/_src/` altında duran kaynak
   dosyaları bulursa **uyarır** (sessizce kaybolmasınlar).
2. `git add -A` + commit (değişiklik yoksa commit atlanır).
3. `origin/arena/<session>` dalına push eder ve **uzak ucu okuyarak birebir aynı olduğunu doğrular**
   (`✓ kayıtlı: origin/... = <sha>`).
4. Push reddedilirse (uzak dallanmış / `.git` tazelenmiş): önce işi `backup/<zaman>-<sha>` dalına
   push edip **güvenceye alır**, sonra `fetch` + `git reset --soft origin/<dal>` ile uzak ucun
   üzerine delta commit'i atar, push eder ve başarılıysa yedek dalı siler. Uzakta olan ama bizde
   olmayan dosyalar varsa silme uyarısı basar.

Bilinçli olarak repoda **olmayanlar**: `.env.local` (gizli anahtarlar — şablon `.env.example`),
`node_modules/`, `.next/`, `.next-dev/`, `data/leads.jsonl` (çalışan zamanında gelen talepler).
`node_modules` silinirse `npm install`, `.env.local` silinirse `.env.example`'dan kopyala-doldur
yeterli.

## Ajan/geliştirici el kitabı

Bu depoya sonradan çalışmaya gelen biri (veya bir AI ajanı) için **tek kaynak: [`AGENTS.md`](AGENTS.md)** —
zorunlu tasarım kuralları, mimari harita, yeni hizmet/görsel ekleme reçeteleri, kabul kriterleri
(`npm run verify`), kayıt disiplini ve "denenmiş ve reddedilmiş" yaklaşımlar orada.

**CI:** doğrulama adımı hazır — `npm run ci:enable` `.github/workflows/ci.yml` dosyasını oluşturur
(tanım `ops/ci.github-workflow.yml` içinde; GitHub App'inde `workflows` izni yoksa dosyayı arayüzden ekle).

Kısa versiyon:

```bash
npm install && cp .env.example .env.local   # anahtarlar repoda yok
npm run dev                                 # http://localhost:3000
npm run verify                              # typecheck + lint + build + seo-check + kopya denetimi
npm run save -- "özet"                      # commit + push + uzak SHA doğrulaması
```

Durum: **Faz 1 + Faz 2 bitti** — 43/43 hizmetin içeriği elle yazıldı, 43/43 kapağı var,
489 indekslenebilir URL, build 496 rota. Sırada **Faz 3**: `/blog/` + 10 yazı, logo SVG entegrasyonu,
Resend alan adı doğrulaması. Detaylı envanter: `docs/FAZ-1-RAPOR.md`, plan/geçmiş: `docs/FAZ-1-PLAN.md`.
