#!/usr/bin/env node
/**
 * docs/GORSEL-KUYRUSU.md — hizmet kapak görseli kuyruğunu veri katmanından üretir.
 * Kaynak: src/data/services.ts (slug + category) ve src/data/images.ts (SERVICE_IMAGES anahtarları).
 * Böylece her görsel partisinden sonra elle düzenleme gerekmez: `node scripts/image-queue.mjs`.
 */
import { readFile, writeFile } from "node:fs/promises"

const servicesSrc = await readFile("src/data/services.ts", "utf8")
const imagesSrc = await readFile("src/data/images.ts", "utf8")

const pairs = [...servicesSrc.matchAll(/slug:\s*"([a-z0-9-]+)",\s*\n\s*category:\s*"([a-z0-9-]+)"/g)].map(
  (m) => ({ slug: m[1], category: m[2] }),
)

const block = imagesSrc.slice(imagesSrc.indexOf("SERVICE_IMAGES"), imagesSrc.indexOf("export function serviceImage"))
const done = new Set([...block.matchAll(/^\s{2}"?([a-z0-9-]+)"?:\s*\{/gm)].map((m) => m[1]))

const withImage = pairs.filter((p) => done.has(p.slug))
const pending = pairs.filter((p) => !done.has(p.slug))

const lines = [
  "# Hizmet kapak görseli kuyruğu",
  "",
  "> Bu dosya `node scripts/image-queue.mjs` ile üretilir (elle düzenlemeyin).",
  "",
  "**Üretim hattı:** `generate_image` → `public/images/_src/<slug>-<konu>.png` (her görselde 2 aday, seçimi kullanıcı yapar)",
  "→ `npm run imgs` (1280×720 WebP, beyaz letterbox → CLS 0) → `src/data/images.ts` içine `SERVICE_IMAGES` kaydı (alt metin + width/height)",
  "→ `npx tsc --noEmit` + `npx next build` + `npm run report` → `npm run save` (commit + push) → `node scripts/image-queue.mjs`.",
  "",
  "**Stil sabiti:** beyaz #FFFFFF zemin · lacivert #0F2A44 / #1E3A5F · cyan #06B6D4 ve yeşil #10B981 yalnız küçük vurgu ·",
  "rounded-xl · ince slate-200 kenarlık · okunabilir metin yok (soyut gri çubuklar) · koyu zemin yok · 16:9 · flat vector UI illüstrasyon.",
  "",
  `## Kapak takılan hizmetler (${withImage.length}/${pairs.length})`,
  "",
  ...withImage.map((p) => `- [x] \`${p.slug}\` — ${p.category}`),
  "",
  `## Bekleyen (${pending.length}/${pairs.length}) — bu sırayla işlenecek`,
  "",
  ...pending.map((p, i) => `${i + 1}. \`${p.slug}\` — ${p.category}`),
  "",
  "Not: `dijital-donusum` sayfası şu an `TRANSFORMATION_IMG`'i kullanıyor; ayrı kapak üretilince `SERVICE_IMAGES`'a bağlanacak.",
  "Kategori görselleri (`hero`, `surec`, `dijital-donusum`) `public/images/hero|shared/` altında ve manifest'te duruyor.",
  "",
]

await writeFile("docs/GORSEL-KUYRUSU.md", lines.join("\n"))
console.log(
  `[kuyruk] ${withImage.length}/${pairs.length} kapak takıldı · ${pending.length} bekliyor → docs/GORSEL-KUYRUSU.md`,
)
