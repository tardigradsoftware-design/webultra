#!/usr/bin/env node
/**
 * SERVICE_IMAGES kaydını veri dosyasına ekler (her görsel partisinden sonra elle düzenlemeyi kaldırır).
 * Kullanım:
 *   node scripts/wire-image.mjs "slug" "dosya-adi.webp" "alt metin açıklaması"
 * Zaten kayıtlıysa alt metnini günceller ve "güncellendi" yazar.
 */
import { readFile, writeFile } from "node:fs/promises"

const [slug, file, alt] = process.argv.slice(2)
if (!slug || !file || !alt) {
  console.error('kullanım: node scripts/wire-image.mjs "<slug>" "<dosya.webp>" "<alt metin>"')
  process.exit(1)
}

const p = "src/data/images.ts"
let s = await readFile(p, "utf8")
const entry = [
  `  "${slug}": {`,
  `    src: "/images/services/${file}",`,
  `    alt: ${JSON.stringify(alt)},`,
  `    width: 1280,`,
  `    height: 720,`,
  `  },`,
].join("\n")

const keyRe = new RegExp(`^  "?${slug}"?: \\{[\\s\\S]*?^  \\},`, "m")
if (keyRe.test(s)) {
  s = s.replace(keyRe, entry)
  console.log(`[wire] ${slug} kaydı güncellendi`)
} else {
  const i = s.indexOf("export const SERVICE_IMAGES")
  const end = s.indexOf("\n}", i)
  if (i < 0 || end < 0) {
    console.error("[wire] SERVICE_IMAGES bloğu bulunamadı")
    process.exit(1)
  }
  s = s.slice(0, end + 1) + entry + "\n" + s.slice(end + 1)
  console.log(`[wire] ${slug} kaydı eklendi`)
}
await writeFile(p, s)
