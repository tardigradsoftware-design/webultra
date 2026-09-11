import { readFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"

/**
 * Meta description'ların cümle ortasında kesilip kesilmediğini kontrol eder.
 * Sebep: 158 karakter kırpması, son kelimeyi yarıda bırakabilir → SERP'te saçma görünür.
 * Kullanım: node scripts/check-desc-endings.mjs
 */
const APP = ".next/server/app"
const files = []
;(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith(".html")) files.push(p)
  }
})(APP)

const TRUNC_TAIL = new Set([
  "ve", "ile", "için", "tek", "bir", "bu", "bu", "kadar", "dahi", "ile", "veya", "olan", "olarak",
  "her", "gibi", "kendi", "üzerinden", "arasında", "için", "ve", "ile",
])

const clean = (t) =>
  (t ?? "").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")

const bad = []
for (const f of files) {
  const route = "/" + path.relative(APP, f).replace(/\\/g, "/").replace(/index\.html$/, "").replace(/\.html$/, "") + "/"
  const h = readFileSync(f, "utf8")
  const desc = clean(h.match(/<meta name="description" content="([^"]*)"/)?.[1])
  if (!desc) continue
  const last = desc.replace(/\.$/, "").split(/\s+/).slice(-1)[0] ?? ""
  const bare = last.replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ]/g, "").toLowerCase()
  const shortTail = desc.length >= 150 && TRUNC_TAIL.has(bare)
  // cümde sonu fiil/bekeç yok: nokta ile bitiyor ama son kelime bağlaç
  if (shortTail) bad.push([route, desc.length, "…" + desc.slice(-42)])
}

console.log(`${files.length} sayfa tarandı · şüpheli kesim: ${bad.length}`)
for (const b of bad) console.log(`  ${b[0]} (${b[1]} kr) ${b[2]}`)
