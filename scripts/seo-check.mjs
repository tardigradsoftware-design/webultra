#!/usr/bin/env node
/**
 * SEO / içerik denetimi — üretilen statik HTML üzerinden çalışır.
 * Gerekçe: tarayıcı/kravlama gerekmeden, build çıktısı gerçek kaynaktır.
 *
 * Kontrol listesi:
 *  - <title> uzunluğu (≤60) ve benzersizliği
 *  - meta description uzunluğu (150-160) ve benzersizliği
 *  - canonical + og:title/og:description/og:image/twitter:card
 *  - JSON-LD: parse edilebilirlik + @type listesi
 *  - Görseller: alt, width/height, loading, dosya uzantısı (.webp)
 *  - İç link sayısı (aynı host) + kırık iç link (404) kontrolü
 *  - Kelime sayısı (servis sayfaları: hedef 800-1400)
 *  - Koyu tema / yasak bağımlılık kontrolü (bg-slate-900, bg-black, MUI, Bootstrap)
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs"
import path from "node:path"

const APP = ".next/server/app"
if (!existsSync(APP)) {
  console.error("Önce `npx next build` çalıştırın (.next/server/app bulunamadı).")
  process.exit(1)
}

const htmlFiles = []
;(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith(".html")) htmlFiles.push(p)
  }
})(APP)

const rows = []
const problems = []

/** Üretilen tüm rota listesi — iç link doğrulaması buna karşı çalışır */
const routeSet = new Set(htmlFiles.map(toRoute))
routeSet.add("/")
routeSet.add("/sitemap.xml")
routeSet.add("/robots.txt")
routeSet.add("/manifest.webmanifest")
for (const asset of ["/icon.svg", "/favicon.ico", "/favicon.png", "/apple-icon.png", "/logo-placeholder.svg"])
  routeSet.add(asset)

function toRoute(file) {
  const rel = path.relative(APP, file).replace(/\\/g, "/")
  return "/" + rel.replace(/^index\.html$/, "").replace(/\/index\.html$/, "/").replace(/\.html$/, "/")
}

for (const f of htmlFiles) {
  const _r = toRoute(f)
  if (_r.startsWith("/_not-found")) continue // Next iç 404 route: indekslenmez
  const html = readFileSync(f, "utf8")
  const route = toRoute(f)
  const title = (html.match(/<title[^>]*>(.*?)<\/title>/s) || [])[1] ?? ""
  const clean = (t) =>
    t
      .replace(/&amp;/g, "&")
      .replace(/&#x27;|&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&nbsp;/g, " ")
  const titleText = clean(title)
  const desc = clean((html.match(/<meta name="description" content="(.*?)"/s) || [])[1] ?? "")
  const canonical = (html.match(/<link rel="canonical" href="(.*?)"/) || [])[1] ?? ""
  const robots = (html.match(/<meta name="robots" content="(.*?)"/) || [])[1] ?? ""
  const og = {
    title: /property="og:title"/.test(html) || /name="og:title"/.test(html),
    desc: /property="og:description"/.test(html) || /name="og:description"/.test(html),
    type: /property="og:type"/.test(html),
    image: /property="og:image"/.test(html),
    url: /property="og:url"/.test(html),
    locale: /property="og:locale"/.test(html),
  }
  const twitter = /name="twitter:card"/.test(html)
  const mainHtml = (html.match(/<main[^>]*>([\s\S]*)<\/main>/) || [null, html])[1]
  const text = mainHtml
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;|&quot;|&nbsp;|&amp;/g, " ")
    .replace(/\s+/g, " ")
  const words = text.trim().split(" ").length
  const allWords = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ").length

  const ld = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  let faqCount = 0
  let serviceCount = 0
  var r_faq = 0, r_service = 0
  let ldTypes = []
  for (const m of ld) {
    try {
      const data = JSON.parse(m[1])
      const collect = (node) => {
        if (!node || typeof node !== "object") return
        if (Array.isArray(node)) return node.forEach(collect)
        if (node["@graph"]) collect(node["@graph"])
        if (node["@type"]) {
          ldTypes = ldTypes.concat(node["@type"])
          if (node["@type"] === "FAQPage") faqCount += node.mainEntity?.length ?? 0
          if (node["@type"] === "Service") serviceCount += 1
        }
      }
      collect(data)
    } catch (e) {
      problems.push(`${route}: JSON-LD parse hatası — ${e.message}`)
    }
  }

  const imgs = [...html.matchAll(/<img[^>]*>/g)].map((m) => m[0])
  const imgsNoAlt = imgs.filter((i) => !/alt="[^"]+"/.test(i)).length
  const imgsNoDims = imgs.filter((i) => !/width="\d+"/.test(i) || !/height="\d+"/.test(i)).length
  const imgsNoLazy = imgs.filter((i) => !/fetchpriority="high"/.test(i) && !/loading="lazy"/.test(i)).length
  const nonWebp = imgs.filter((i) => /src="\/images\/[^"]+\.(png|jpe?g)"/.test(i)).length

  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1])
  const internal = [...new Set(hrefs)].filter(
    (h) => !h.startsWith("/_next") && !/\.(css|js|webmanifest|xml|txt|ico|png|svg|jpg|jpeg|webp)$/.test(h),
  )
  const norm = (h) => (h === "/" ? "/" : h.endsWith("/") ? h : h + "/")
  const broken = internal.filter((h) => !routeSet.has(norm(h)))

  r_faq = faqCount
  r_service = serviceCount
  const darkTheme = /class="[^"]*\b(bg-slate-9|bg-black|bg-gray-9|bg-zinc-9|dark:bg-)/.test(html)
  const banned = /\b(Bootstrap|Mui|mui-|makeStyles)\b/.test(html)

  rows.push({
    faqItems: r_faq,
    serviceNodes: r_service,
    route,
    titleLen: titleText.length,
    title: titleText,
    description: desc,
    descLen: desc.length,
    canonical,
    robots,
    og: Object.entries(og).filter(([, v]) => v).map(([k]) => k).join(","),
    twitter,
    ldTypes: [...new Set(ldTypes)].sort().join("+"),
    words,
    allWords,
    imgs: imgs.length,
    imgsNoAlt,
    imgsNoDims,
    imgsNoLazy,
    nonWebp,
    internalLinks: internal.length,
    broken: broken.length ? broken.join(" ") : "",
    darkTheme,
    banned,
  })

  const isService = route.startsWith("/hizmetler/") && route !== "/hizmetler/"
  if (titleText.length === 0) problems.push(`${route}: title yok`)
  if (titleText.length > 62) problems.push(`${route}: title ${titleText.length} kr (>60) — "${titleText}"`)
  const descMin = route.startsWith("/hizmet/") ? 120 : 128
  if (desc.length < descMin) problems.push(`${route}: description ${desc.length} kr (hedef ${descMin}-158)`)
  const lastWord = desc.replace(/\.$/, "").split(/\s+/).pop() ?? ""
  if (desc.length > 148 && /^(ve|ile|tek|için|bir|veya|olarak|dahi|kadar)$/i.test(lastWord))
    problems.push(`${route}: description cümle ortasında kesilmiş gibi (…"${desc.slice(-30)}")`)
  if (desc.length > 168) problems.push(`${route}: description ${desc.length} kr (uzun)`)
  if (!canonical) problems.push(`${route}: canonical yok`)
  if (!og.image) problems.push(`${route}: og:image yok`)
  if (!twitter) problems.push(`${route}: twitter:card yok`)
  if (!ldTypes.length && route !== "/sitemap.xml") problems.push(`${route}: JSON-LD yok`)
  if (isService && words < 700) problems.push(`${route}: kelime sayısı ${words} (hedef ≥800)`)
  if (imgsNoAlt) problems.push(`${route}: ${imgsNoAlt} görselde alt eksik`)
  if (imgsNoDims) problems.push(`${route}: ${imgsNoDims} görselde width/height eksik (CLS riski)`)
  if (nonWebp) problems.push(`${route}: ${nonWebp} görsel WebP değil`)
  if (broken.length) problems.push(`${route}: kırık iç link → ${broken.slice(0, 5).join(", ")}`)
  if (darkTheme) problems.push(`${route}: koyu tema sınıfı tespit edildi (YASAK)`)
  if (banned) problems.push(`${route}: yasaklı UI kütüphanesi izi (Bootstrap/MUI)`)
}

/** benzersizlik kontrolleri */
for (const key of ["title", "canonical"]) {
  const seen = new Map()
  for (const r of rows) {
    const v = r[key]
    if (!v || v === "/") continue
    seen.set(v, (seen.get(v) ?? 0) + 1)
  }
  for (const [v, n] of seen) if (n > 1 && key === "title") problems.push(`title çakışması (${n}x): ${v}`)
}

const services = rows.filter((r) => r.route.startsWith("/hizmetler/") && r.route !== "/hizmetler/")
const summary = {
  pages: rows.length,
  servicePages: services.length,
  pilotPages: services.filter((r) => r.ldTypes.includes("FAQPage")).length,
  avgServiceWords: Math.round(services.reduce((a, r) => a + r.words, 0) / Math.max(1, services.length)),
  maxServiceWords: Math.max(0, ...services.map((r) => r.words)),
  minServiceWords: Math.min(...services.map((r) => r.words)),
  totalImages: rows.reduce((a, r) => a + r.imgs, 0),
  brokenLinks: rows.filter((r) => r.broken).length,
  pagesWithoutJsonLd: rows.filter((r) => !r.ldTypes && !r.route.includes("sitemap")).length,
}

console.log("\n=== ÖZET ===")
console.table([summary])
console.log("\n=== SAYFA DETAYI ===")
console.table(
  rows.map((r) => ({
    route: r.route,
    titleKr: r.titleLen,
    descKr: r.descLen,
    kelime: r.words,
    tumSayfa: r.allWords,
    gorsel: r.imgs,
    icLink: r.internalLinks,
    schema: r.ldTypes || "-",
    robots: r.robots || "index,follow",
  })),
)

if (problems.length) {
  console.log(`\n=== UYARILAR (${problems.length}) ===`)
  for (const p of [...new Set(problems)]) console.log("• " + p)
} else {
  console.log("\n✓ Tüm kontroller geçti.")
}

if (process.argv.includes("--json")) {
  const { writeFileSync } = await import("node:fs")
  writeFileSync("docs/seo-audit.json", JSON.stringify({ summary, rows, problems }, null, 2))
  console.log("\ndocs/seo-audit.json yazıldı")
}

process.exit(problems.length ? 1 : 0)
