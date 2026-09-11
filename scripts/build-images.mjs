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
import { readdir, mkdir, stat, writeFile, readFile } from "node:fs/promises"
import path from "node:path"

const SRC = "public/images/_src"
const OUT_ROOT = "public/images"

/** isim kalıbı → hedef klasör + boyut */
const rules = [
  { test: /^hero-/, dir: "hero", width: 1280, height: 800 },
  { test: /^(surec-|dijital-donusum-excel)/, dir: "shared", width: 1280, height: 720 },
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

  const manifestPath = path.join(OUT_ROOT, "manifest.json")
  const manifest = []
  /**
   * Kaynak PNG'ler (`_src`) gitignore'da tutulduğu için sandbox geri yüklemelerinde
   * silinebiliyor; üretilen WebP'ler ise repoda. Bu yüzden eski manifest'te kaydı
   * olup dosyası hâlâ diskte duran görseller korunur (yalnızca kaynak notu düşülür).
   */
  const previous = await readFile(manifestPath, "utf8")
    .then((t) => JSON.parse(t).images ?? [])
    .catch(() => [])
  const seen = new Set()

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
    seen.add(path.resolve(out))
    console.log(
      `[imgs] ${f} → ${out} (${meta.width}×${meta.height}, ${Math.round(size / 1024)} KB)`,
    )
  }

  for (const e of previous) {
    if (!e?.file) continue
    const disk = path.resolve("public", e.file.replace(/^\//, ""))
    if (seen.has(disk)) continue
    try {
      const { size } = await stat(disk)
      manifest.push({ ...e, source: e.source ?? "(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)", kb: Math.round(size / 1024) })
      seen.add(disk)
    } catch {
      /* dosya silinmiş → manifest'ten düşer */
    }
  }

  /** Kaynak PNG'si olmasa da diskte duran WebP'ler envantere girer (rapor tüm görselleri görebilsin). */
  for (const dir of ["hero", "shared", "services"]) {
    const abs = path.join(OUT_ROOT, dir)
    const list = await readdir(abs).catch(() => [])
    for (const f of list) {
      if (!/\.webp$/i.test(f)) continue
      const out = path.join(abs, f)
      if (seen.has(path.resolve(out))) continue
      const { size } = await stat(out)
      const meta = await sharp(out).metadata()
      manifest.push({
        file: `/${path.relative("public", out).split(path.sep).join("/")}`,
        width: meta.width,
        height: meta.height,
        kb: Math.round(size / 1024),
        source: "(kaynak PNG repoda değil — WebP doğrudan kullanılıyor)",
      })
      seen.add(path.resolve(out))
    }
  }

  manifest.sort((a, b) => a.file.localeCompare(b.file))
  await writeFile(
    manifestPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), images: manifest }, null, 2),
  )
  console.log(`[imgs] ${manifest.length} görsel hazır → ${OUT_ROOT}/manifest.json`)
}

main().catch((e) => {
  console.error("[imgs] hata:", e.message)
  process.exit(1)
})
