import { z } from "zod"

import { services } from "@/data/services"

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]]

/**
 * Lead (teklif/ön analiz) formu doğrulaması — client ve server aynı şemayı kullanır.
 * react-hook-form + zod (Bölüm 1: Form kuralı)
 */
export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Adınızı en az 2 karakter olacak şekilde yazın.")
    .max(80, "Ad kısmı 80 karakteri geçemez."),
  email: z
    .string()
    .trim()
    .min(1, "E-posta adresi zorunlu.")
    .email("Geçerli bir e-posta adresi girin (ornek@firma.com)."),
  phone: z
    .string()
    .trim()
    .min(10, "Telefon numarası en az 10 haneli olmalı.")
    .max(20, "Telefon numarası çok uzun.")
    .regex(/^[0-9+()\-\s]+$/, "Telefon alanında yalnızca rakam ve +, (, ), -, boşluk kullanabilirsiniz."),
  company: z
    .string()
    .trim()
    .min(2, "Firma adı zorunlu.")
    .max(120, "Firma adı 120 karakteri geçemez."),
  serviceSlug: z.enum(serviceSlugs).or(z.literal("")).optional(),
  topic: z.enum(["proje", "on-analiz", "seo", "destek", "diger"]).default("proje"),
  budget: z.enum(["0-50", "50-150", "150-400", "400+", "bilmiyorum"]).optional(),
  city: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(30, "Kısaca projenizi anlatın: en az 30 karakter.")
    .max(3000, "Mesaj 3000 karakteri geçemez."),
  consent: z
    .boolean()
    .refine((v) => v === true, {
      message: "Devam etmek için KVKK açık rıza onayı gereklidir.",
    }),
  /** honeypot: botlar doldurur, insanlar görmez */
  website: z.string().max(0).optional(),
  /** formun bulunduğu sayfa (kaynak analizi için) */
  source: z.string().max(200).optional(),
})

export type LeadValues = z.infer<typeof leadSchema>

export const budgetOptions = [
  { value: "0-50", label: "0 – 50.000 ₺" },
  { value: "50-150", label: "50.000 – 150.000 ₺" },
  { value: "150-400", label: "150.000 – 400.000 ₺" },
  { value: "400+", label: "400.000 ₺ ve üzeri" },
  { value: "bilmiyorum", label: "Henüz netleşmedi" },
] as const

export const topicOptions = [
  { value: "proje", label: "Yeni proje / teklif" },
  { value: "on-analiz", label: "Ücretsiz ön analiz" },
  { value: "seo", label: "SEO & görünürlük" },
  { value: "destek", label: "Mevcut site bakımı / destek" },
  { value: "diger", label: "Diğer" },
] as const

/** Bot / spam e-posta alanlarını yumuşak biçimde engelle */
export const blockedEmailDomains = [
  "mailinator.com",
  "tempmail.com",
  "yopmail.com",
  "guerrillamail.com",
  "trashmail.com",
  "10minutemail.com",
]

export function emailDomainAllowed(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  if (!domain) return false
  return !blockedEmailDomains.includes(domain)
}
