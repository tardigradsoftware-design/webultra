import { readFileSync } from "node:fs"

/** Key sayfaların gerçek meta değerlerini build çıktısından dökümle verir. */
const wanted = [
  "/",
  "/hizmetler/",
  "/hizmetler/kurumsal-web-sitesi/",
  "/hizmetler/e-ticaret-sitesi/",
  "/hizmetler/crm/",
  "/hizmetler/teknik-seo/",
  "/hizmetler/ai-chatbot/",
  "/surec/",
  "/hakkimizda/",
  "/iletisim/",
  "/kvkk/",
  "/sehir/istanbul/",
  "/sehir/ankara/",
  "/sehir/izmir/",
  "/sehir/bursa/",
  "/sehir/antalya/",
  "/sehir/kocaeli/",
  "/sehir/gaziantep/",
  "/sehir/konya/",
  "/sehir/adana/",
  "/sehir/kayseri/",
  "/hizmet/kurumsal-web-sitesi/istanbul/",
  "/hizmet/crm/antalya/",
]

const clean = (t) => t.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&")

for (const r of wanted) {
  const file = r === "/" ? ".next/server/app/index.html" : `.next/server/app${r.replace(/\/$/, "")}.html`
  let h
  try {
    h = readFileSync(file, "utf8")
  } catch {
    console.log(`## ${r}\n   (build çıktısı bulunamadı: ${file})\n`)
    continue
  }
  const title = clean(h.match(/<title>([^<]*)<\/title>/)?.[1] ?? "")
  const desc = clean(h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "")
  const canon = h.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? ""
  const robots = h.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "index, follow"
  const h1 = clean(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, "") ?? "")
  console.log(`## ${r}`)
  console.log(`   title (${title.length} kr): ${title}`)
  console.log(`   desc  (${desc.length} kr): ${desc}`)
  console.log(`   h1  : ${h1}`)
  console.log(`   canonical: ${canon} | robots: ${robots}\n`)
}
