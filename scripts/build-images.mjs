#!/usr/bin/env node
/**
 * public/images/_src/*.png  →  optimize edilmiş WebP
 * ---------------------------------------------------
 * - Beyaz zeminde letterbox (kırpma yok) → sabit width/height → CLS = 0
 * - Dosya adı korunur (SEO: kurumsal-web-sitesi-tasarim-mockup.webp)
 * - public/images/{hero|shared|services}/... klasörlerine dağıtır
 * - public/images/manifest.json üretir (denetim/rapor için)
 *
 * Kullanım: npm run imgs   (build öncesi otomatik çalışır)
 * Faz 2: kalan 38 hizmet görselini _src'e atıp tekrar çalıştırmanız yeterli.
 */
import { readdir, mkdir, stat, writeFile } from "node:fs/promises"
import path from "node:path"

const SRC = "public/images/_src"
const OUT_ROOT = "public/images"

/** isim kalıbı → hedef klasör + boyut */
const rules = [
  { test: /^hero-/, dir: "hero", width: 1280, height: 800 },
  { test: /^(surec|dijital-donusum)/, dir: "shared", width: 1280, height: 720 },
  { test: /.*/, dir: "services", width: 1280, height: 720 },
]

async function main() {
  let sharp
  try {
    sharp = (await import("sharp")).default
  } catch {
    console.warn("[imgs] sharp bulunamadı — görsel dönüşümü atlandı (npm i sharp).")
    return
  }

  let files = []
  try {
    files = await readdir(SRC)
  } catch {
    console.warn(`[imgs] ${SRC} klasörü yok — dönüşüm atlandı.`)
    return
  }

  const manifest = []
  for (const f of files) {
    if (!/\.(png|jpe?g)$/i.test(f)) continue
    const rule = rules.find((r) => r.test.test(f))
    const outDir = path.join(OUT_ROOT, rule.dir)
    await mkdir(outDir, { recursive: true })
    const base = path.basename(f).replace(/\.(png|jpe?g)$/i, "")
    const out = path.join(outDir, `${base}.webp`)
    const src = path.join(SRC, f)

    const img = sharp(src, { failOn: "none" })
    await img
      .resize({
        width: rule.width,
        height: rule.height,
        fit: "contain",
        background: "#ffffff",
      })
      .flatten({ background: "#ffffff" })
      .webp({ quality: 82, effort: 6, alphaQuality: 80 })
      .toFile(out)

    const meta = await sharp(out).metadata()
    const { size } = await stat(out)
    manifest.push({
      file: `/${path.relative("public", out).split(path.sep).join("/")}`,
      width: meta.width,
      height: meta.height,
      kb: Math.round(size / 1024),
      source: `images/_src/${f}`,
    })
    console.log(
      `[imgs] ${f} → ${out} (${meta.width}×${meta.height}, ${Math.round(size / 1024)} KB)`,
    )
  }

  manifest.sort((a, b) => a.file.localeCompare(b.file))
  await writeFile(
    path.join(OUT_ROOT, "manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), images: manifest }, null, 2),
  )
  console.log(`[imgs] ${manifest.length} görsel hazır → ${OUT_ROOT}/manifest.json`)
}

main().catch((e) => {
  console.error("[imgs] hata:", e.message)
  process.exit(1)
})
