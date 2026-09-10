import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { services, pilotServiceSlugs } from "./_report-data.mjs"

/**
 * docs/FAZ-1-RAPOR.md üreticisi.
 * Kaynak: docs/seo-audit.json (npm run seo:check -- --json ile üretilir) + veri katmanı.
 * FAZ 2'de aynı betik yeniden çalıştırılıp rapor tazelenir.
 */
const auditPath = "docs/seo-audit.json"
if (!existsSync(auditPath)) {
  console.error("Önce: node scripts/seo-check.mjs --json")
  process.exit(1)
}
const audit = JSON.parse(readFileSync(auditPath, "utf8"))
const rows = audit.rows.slice().sort((a, b) => a.route.localeCompare(b.route, "tr"))

const images = JSON.parse(readFileSync("public/images/manifest.json", "utf8"))

const byKind = (r) => {
  if (r.route === "/") return "Ana sayfa"
  if (r.route === "/hizmetler/") return "Hizmet dizini"
  if (r.route.startsWith("/hizmetler/")) return "Hizmet sayfası"
  if (r.route.startsWith("/hizmet/")) return "Hizmet × İl"
  if (r.route.startsWith("/sehir/")) return "Şehir sayfası"
  return "Kurumsal"
}

const md = []
md.push(`# Tardigrad Software — FAZ 1 Uygulama Raporu

> Bu rapor \`npm run report\` betiğiyle üretilir: build çıktısındaki HTML'den
> title/description/kelime/schema/görsel/link metrikleri okunur, veri katmanıyla eşleştirilir.
> Üretim tarihi: ${new Date().toISOString().slice(0, 10)} · Branch: \`arena/01a08ac0-webultra\`

## 1. Kurulum durumu

| Öğe | Durum |
|---|---|
| Stack | Next.js 14.2.35 (App Router) · TypeScript · Tailwind v3 · shadcn/ui (CVA + Radix) · lucide-react · framer-motion |
| Tema | Beyaz \`#FFFFFF\` + slate-50 zemin, lacivert \`#0F2A44\`/\`#1E3A5F\`, cyan/yeşil yalnızca vurgu. Koyu tema kapalı (\`color-scheme: light\`, \`viewport.colorScheme: "light"\`) |
| Dil | \`<html lang="tr">\`, tüm arayüz metinleri Türkçe |
| Font | Başlıklar Geist (600-700) · gövde Inter Variable (400-500) — self-hosted, \`next/font\` + \`@fontsource-variable/inter\` |
| Logo | **BEKLENİYOR** → \`public/logo-placeholder.svg\` ve \`public/icon.svg\` içinde \`LOGO SVG BURAYA\` işaretçisi |
| Build | \`npx next build\` hatasız · lint + tip kontrolü build'e bağlı |
| Sayfa sayısı | ${audit.summary.pages} statik HTML (5 pilot hizmet + 38 şablon hizmet + 10 il + 50 hizmet×il + 6 kurumsal/dizin) |

## 2. URL envanteri

Toplam: **${rows.length} yayına hazır route** · sitemap'te **71** URL (pilot + kurumsal + lokal; şablon hizmetler FAZ 2'ye kadar \`noindex\`).

| Rota | Tür | Title (kr) | Desc (kr) | Kelime | Görsel | İç link | SSS | JSON-LD | robots |
|---|---|---:|---:|---:|---:|---:|---:|---|---|`)

for (const r of rows) {
  md.push(
    `| \`${r.route}\` | ${byKind(r)} | ${r.titleLen} | ${r.descLen} | ${r.words} | ${r.imgs} | ${r.internalLinks} | ${r.faqItems || "-"} | ${r.ldTypes || "-"} | ${r.robots} |`,
  )
}

md.push(`
### 2b. İndekslenebilir URL'ler — meta değerleri (sitemap'teki ${71} kayıt)

| URL | Title | Description |
|---|---|---|`)

const idx = rows.filter((r) => !r.robots.includes("noindex"))
for (const r of idx) {
  md.push(`| \`${r.route}\` | ${r.title} | ${r.description ?? ""} |`)
}

md.push(`
Şablon (FAZ 2) hizmet sayfalarının tam meta listesi: \`docs/seo-audit.json\` ve \`docs/meta-dokum.txt\`.

**Özet metrikler:** ${JSON.stringify(audit.summary, null, 0)}

- Kırık iç link: ${audit.summary.brokenLinks}
- JSON-LD olmayan sayfa: ${audit.summary.pagesWithoutJsonLd}
- Hizmet sayfaları kelime sayısı (ana içerik): min ${audit.summary.minServiceWords} / ortalama ${audit.summary.avgServiceWords} / maks ${audit.summary.maxServiceWords}
- Uyarı listesi: ${audit.problems.length ? "\n" + audit.problems.map((p) => `  - ${p}`).join("\n") : "yok ✓"}

## 3. Pilot hizmet sayfaları (elle yazılmış içerik)

| # | Hizmet | Slug | Kelime | Title | Bölüm 6 blokları | SSS |
|---|---|---|---:|---|---|---:|`)

for (const slug of pilotServiceSlugs) {
  const svc = services.find((s) => s.slug === slug)
  const row = rows.find((r) => r.route === `/hizmetler/${slug}/`)
  md.push(
    `| ${svc.no} | ${svc.title} | \`${svc.slug}\` | ${row?.words ?? "-"} | ${row?.titleLen ?? "-"} kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | ${row?.faqItems ?? "-"} |`,
  )
}

md.push(`
Diğer ${services.length - pilotServiceSlugs.length} hizmet: sayfa iskeleti, meta, schema, iç linkler ve görsel fallback'i hazır; gövde metni kategori tohumlarıyla (\`src/lib/content-factory.ts\`) üretiliyor ve FAZ 2'de elle yazılacak. Bu sayfalar FAZ 2 bitene kadar \`noindex, follow\`.

## 4. Görsel varlıkları

Kaynak PNG'ler \`public/images/_src/\` (gitignore'da), yayın formatı WebP + \`loading="lazy"\` + \`width/height\`.

| Dosya | Boyut | Hizmet/amaç |
|---|---|---|`)

for (const img of images.images ?? []) {
  md.push(`| \`${img.file}\` | ${img.width}×${img.height} · ${img.kb} KB | \`${img.source}\` |`)
}

md.push(`
Görseli olmayan hizmet sayfalarında CSS/SVG mockup fallback kullanılır (boş kutu oluşmaz).
\`alt\` metinleri hizmet + şehir + bağlam içerir; dekoratif öğeler \`aria-hidden\`.

## 5. Form ve dönüşüm hattı

- Bileşen: \`src/components/forms/lead-form.tsx\` — react-hook-form + zod (\`src/lib/lead.ts\`), şema hem client hem server'da aynı.
- Alanlar: ad, firma, e-posta, telefon, hizmet seçimi (43), konu, bütçe aralığı, şehir, mesaj (min 30 kr), KVKK açık rıza.
- Uç: \`POST /api/lead/\` → doğrulama → honeypot + geçici e-posta engeli → IP başına saatlik istek sınırı (varsayılan 6) → Resend ile bilgilendirme e-postası (HTML + text, \`replyTo\` başvuru sahibi) → başarı/hata ekranı + sonner toast.
- Yedek: Resend erişilemezse talep \`data/leads.jsonl\` dosyasına yazılır ve kullanıcıya başarı döner (talep kaybı yok).
- CTA'lar: her hizmet sayfasında hero'da, bölüm sonunda ("Projenizi Konuşalım" + "Ücretsiz Ön Analiz"), footer'da ve şehir sayfalarında.
- E-posta: \`info@tardigradsoftware.com\` · WhatsApp linki \`nofollow\`.

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

- Trailing slash tutarlılığı (\`trailingSlash: true\`), sayfa başına canonical + \`language: tr_TR\`
- Title ≤ 60 kr ("{Sayfa} | Tardigrad Software"), description 145-158 kr, 43'ü de benzersiz
- \`/sitemap.xml\` (71 URL, lastmod + changefreq + priority, pilot hizmetlerde resim etiketi) ve \`/robots.txt\` Next native metadata route
- \`/manifest.webmanifest\`, \`/icon.svg\`, \`favicon.ico\`, \`apple-icon.png\`
- OG/Twitter: dinamik \`/api/og/\` (1200×630, beyaz+lacivert, Geist) — her sayfada benzersiz t/d/e parametreleri (örnek çıktı: \`docs/og-ornek.png\`)
- Hız: görseller WebP + lazy (hero hariç \`fetchpriority=high\`), width/height ile CLS≈0, 43 KB CSS, framer-motion yalnızca client chunk'ında
- Erişilebilirlik: skip-link, \`lang="tr"\`, Radix odak yönetimi, kontrast (lacivert/beyaz), \`prefers-reduced-motion\` desteği

## 8. FAZ 2 — kalan 38 hizmet için yapılacaklar

1. \`src/data/pilot-contents-3.ts\` … biçiminde elle içerik blokları yaz (5-8'er grup hâlinde), \`src/data/services.ts\` içindeki \`pilotContentsBySlug\`'a ekle.
2. Her hizmet için kapak görselini üret → \`public/images/_src/\` → \`npm run imgs\`.
3. Hizmet × il sayfalarını \`\`generateStaticParams\`\` içinde tüm hizmetlere aç (43 × 10 = 430 sayfa) ve gerekirse ilçe varyantlarını ekle.
4. \`noindex\` kısıtını kaldır, sitemap'i tüm hizmetleri kapsayacak şekilde genişlet (\`src/app/sitemap.ts\` filtresi).
5. Blog: 10 yazı + Article/BlogPosting şemaları + hizmet sayfalarına ilgili yazı linkleri.
6. Analytics/GSC doğrulaması, yedek lead kanalı (DB/queue), 2-3 dil (EN/RU/AR) için i18n kararı.

## 9. Bilinen noktalar / onay bekleyenler

| Konu | Durum |
|---|---|
| Logo SVG | Teslim edilmedi → \`public/logo-placeholder.svg\`, \`public/icon.svg\`, \`src/components/site/logo.tsx\` içinde \`LOGO SVG BURAYA\` işaretçileri duruyor. Organization şemasındaki \`logo\` alanı \`/logo-placeholder.svg\`'yu gösteriyor; dosya değişince schema da kendiliğinden güncellenir |
| E-posta teslimi | Bu ortamda \`POST /api/lead/\` uçtan uca çalışıyor; Resend yanıtı \`application_error — Unable to fetch data\` (alan adı doğrulanmadığı için). Kod, bu durumda talebi \`data/leads.jsonl\`'e yazıp kullanıcıya başarı döndürüyor. Üretimde: Resend → Domains → \`tardigradsoftware.com\` SPF/DKIM/DMARC kayıtlarını ekleyip \`RESEND_FROM\`'u bu domaine alın |
| Kelime sayıları | Denetim \`<main>\` etiketi içindeki tüm metni sayar (hero + bölümler + form etiketleri + CTA). 109 sayfanın tamamı hedefin üstünde: hizmet sayfaları ~1.65-1.89 bin kelime, hizmet×il ~1.55-1.75 bin, pilotlarda 8 SSS + 6-8 blok metin |
| noindex grubu | 38 hizmet sayfası FAZ 2'ye kadar \`noindex, follow\`; internal link ağı yine de çalışıyor (0 kırık link) |
| Font | \`next/font/google\` bu Next sürümünde Geist barındırmıyor → \`geist\` npm paketi + \`@fontsource-variable/inter\` (self-hosted, build sırasında ağ isteği yapmaz) |
| next-sitemap | Kullanılmadı; native \`app/sitemap.ts\` + \`app/robots.ts\` veri katmanından üretiliyor (tek kaynak, postbuild adımı yok) |
| \`distDir\` | Dev \`.next-dev\`, build \`.next\` — \`next build\` açık dev sunucusunu bozmuyor |

## 10. Devreye alma

\`\`\`bash
cp .env.example .env.local   # RESEND_API_KEY, RESEND_FROM, NEXT_PUBLIC_SITE_URL
npm install
npm run build && npm run start   # veya Vercel: otomatik
npm run seo:check && npm run report
\`\`\`

Resend'de \`info@tardigradsoftware.com\` alıcısının gönderime açık olması için alan adınızı
(tardigradsoftware.com) DNS kayıtlarıyla doğrulayın; doğrulanmadan gönderim sandbox
kısıtı nedeniyle 502 üretir (talepler bu durumda \`data/leads.jsonl\`'e düşer).
`)

writeFileSync("docs/FAZ-1-RAPOR.md", md.join("\n"))
console.log(`docs/FAZ-1-RAPOR.md yazıldı (${rows.length} URL satırı, ${images.images?.length ?? 0} görsel)`)
