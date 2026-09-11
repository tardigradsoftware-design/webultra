import { readFileSync, readdirSync } from "node:fs"

/**
 * Rapor betigi icin hafif okuyucu: src/data/services.ts satir satir taranir ve
 * her hizmet kaydinin UST SEVIYE alanlari (4 bosluk girinti) okunur.
 * Amac: build/tsx olmadan raporu veri katmanindan beslemek (tek kaynak: TS dosyasi).
 */
const lines = readFileSync("src/data/services.ts", "utf8").split("\n")

const found = []
let cur = null

const strVal = (line) => {
  const m = line.match(/^ {4}"?(\w+)"?\s*:\s*"((?:[^"\\]|\\.)*)"\s*,?\s*$/)
  return m ? { key: m[1], value: m[2] } : null
}

let pending = null
for (const raw of lines) {
  const line = raw.replace(/\t/g, "  ")
  if (pending !== null) {
    const cont = line.match(/^\s*"((?:[^"\\]|\\.)*)"\s*,?\s*$/)
    if (cont && cur) {
      cur[pending] = cont[1]
      pending = null
      continue
    }
    pending = null
  }
  const pend = line.match(/^ {4}(\w+):\s*$/)
  if (pend && cur) {
    pending = pend[1]
    continue
  }

  if (/^ {2}\{\s*$/.test(line)) {
    cur = { faqCount: 0 }
    found.push(cur)
    continue
  }
  if (/^ {2},?\}/.test(line)) {
    cur = null
    continue
  }
  if (!cur) continue

  if (/^\s*\{\s*q:/.test(line)) cur.faqCount += 1

  const s = strVal(line)
  if (s) {
    cur[s.key] = s.value
    continue
  }

  const num = line.match(/^ {4}no:\s*(\d+)/)
  if (num) cur.no = num[1]

  const rel = line.match(/^ {4}related:\s*\[([^\]]*)\]/)
  if (rel) cur.related = rel[1].split(",").map((x) => x.trim().replace(/"/g, "")).filter(Boolean)

  const sec = line.match(/^ {4}secondaryKeywords:\s*\[([^\]]*)\]/)
  if (sec) cur.secondaryKeywords = sec[1].split(",").map((x) => x.trim().replace(/"/g, "")).filter(Boolean)
}

export const services = found.filter((s) => s.slug && s.title)

/**
 * Elle yazılmış içerik dosyalarındaki üst seviye slug anahtarları.
 * services.ts bu kayıtları çalışma zamanında "pilot" yapar; rapor da aynı
 * kaynaktan okusun diye burada dosyalardan taranır.
 */
const contentFiles = readdirSync("src/data")
  .filter((f) => /contents.*\.ts$/.test(f))
  .map((f) => `src/data/${f}`)

/** Elle yazılmış içerik dosyalarındaki üst seviye slug anahtarları. */
const handWritten = new Set()
for (const f of contentFiles) {
  let t
  try {
    t = readFileSync(f, "utf8")
  } catch {
    continue
  }
  for (const m of t.matchAll(/^ {2}"([a-z0-9-]+)":\s*\{/gm)) handWritten.add(m[1])
}

for (const s of services) if (handWritten.has(s.slug)) s.status = "pilot"

export const pilotServiceSlugs = services.filter((s) => s.status === "pilot").map((s) => s.slug)
