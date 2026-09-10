import { readFileSync, writeFileSync } from "node:fs"

/**
 * src/data/services.ts — meta description normalizleyici.
 * 1) Yapısal hasarı onarır (virgül tekrarı, kuyrukta yarım kalmış ek cümleler)
 * 2) 158 karakteri aşanları kelime sınırında kırpar (SERP kesme noktası)
 * Kısa metinler olduğu gibi bırakılır; 138-158 aralığı SERP için yeterlidir.
 */
const MAX = 158

const clamp = (t, max) => {
  if (t.length <= max) return t
  const c = t.slice(0, max - 1)
  const at = Math.max(c.lastIndexOf(" "), c.lastIndexOf(","), c.lastIndexOf("."))
  const base = at > max * 0.6 ? c.slice(0, at) : c
  return base.replace(/[,;:\-\s]+$/, "") + "."
}

const repair = (t) =>
  t
    .replace(/\s+/g, " ")
    .trim()
    // otomatik eklenen kuyruk fragmentleri
    .replace(/\s+Tek fiyat\.$/, ".")
    .replace(/\s+Ücretsiz ön analiz\.$/, ".")
    .replace(/,\s*\./g, ".")
    .replace(/\.\s*\.$/, ".")
    .replace(/([a-zçğıöşü]) Türkiye geneli\.$/, "$1. Türkiye geneli çalışıyoruz.")
    .trim()

const p = "src/data/services.ts"
let s = readFileSync(p, "utf8")
let changed = 0
const report = []

s = s
  .replace(/",,\s*\n/g, '",\n')
  .replace(/shortDescription:\s*\n\s*"([^"]+)"/g, (_m, txt) => {
    let t = repair(txt)
    if (t.length > MAX) t = clamp(t, MAX)
    if (t !== txt) changed++
    report.push(`${String(t.length).padStart(3)}  ${t.slice(0, 46)}…`)
    return `shortDescription:\n      "${t}",`
  })

writeFileSync(p, s)
console.log(`onarım: ${changed} satır`)
console.log(report.join("\n"))
const bad = report.filter((r) => Number(r.trim().split(/\s+/)[0]) < 130)
console.log(bad.length ? `\nUYARI — 130 kr altı:\n${bad.join("\n")}` : "\n✓ Tüm description'lar 130+ karakter.")
