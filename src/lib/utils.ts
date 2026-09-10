import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Türkçe karakterleri ASCII'ye indirgeyen URL slug üretici */
const trMap: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  İ: "i",
  i: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
  â: "a",
  î: "i",
  û: "u",
}

export function toSlug(input: string): string {
  return input
    .split("")
    .map((c) => (c in trMap ? trMap[c] : c))
    .join("")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

/** URL'yi leading/trailing slash kurallına göre birleştirir (trailingSlash: true) */
export function url(...parts: (string | undefined | null)[]): string {
  const cleaned = parts
    .filter(Boolean)
    .map((p) => String(p).replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
  if (!cleaned.length) return "/"
  return `/${cleaned.join("/")}/`
}

export function absoluteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://tardigradsoftware.com").replace(
    /\/+$/,
    "",
  )
  if (/^https?:\/\//.test(path)) return path
  return `${base}${path === "/" ? "/" : path}`
}

/** Kelime sayısı (içerik bütçesi kontrolü) */
export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

/** Meta description / title için güvenli kırpma (kelime sınırında) */
export function clampText(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const at = Math.max(cut.lastIndexOf(" "), cut.lastIndexOf(","), cut.lastIndexOf("."))
  const base = at > max * 0.6 ? cut.slice(0, at) : cut
  return `${base.replace(/[,;:\-\s]+$/, "")}.`
}

/** Deterministik 32-bit hash — kategori şablonlarından çeşitli varyasyon üretmek için */
export function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length]
}

export function shuffleSeeded<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  let s = seed || 1
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    const j = s % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** İlk harfi büyüt (Türkçe güvenli) */
export function capitalize(text: string): string {
  if (!text) return text
  return text.charAt(0).toLocaleUpperCase("tr-TR") + text.slice(1)
}

export function formatPhoneE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "")
  if (!digits) return null
  if (digits.startsWith("90") && digits.length === 12) return `+${digits}`
  if (digits.startsWith("0") && digits.length === 11) return `+9${digits}`
  if (digits.length === 10) return `+90${digits}`
  return null
}
