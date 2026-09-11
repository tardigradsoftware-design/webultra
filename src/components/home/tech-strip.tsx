const stack = [
  { name: "Next.js 14", note: "App Router · SSR/SSG" },
  { name: "TypeScript", note: "tip güvenliği" },
  { name: "Tailwind CSS", note: "tasarım sistemi" },
  { name: "shadcn/ui", note: "Radix primitives" },
  { name: "Supabase", note: "Postgres · auth · storage" },
  { name: "Vercel", note: "edge deploy" },
  { name: "Cloudflare", note: "CDN · WAF · DNS" },
  { name: "Framer Motion", note: "minimal animasyon" },
]

/** Bölüm 7.8 — teknolojiler (gri, metin bazlı; logo görseli yok) */
export function TechStrip() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4">
      {stack.map((t) => (
        <li key={t.name} className="bg-white px-5 py-6 text-center transition-colors hover:bg-[#F8FAFC]">
          <p className="font-heading text-[15px] font-semibold text-[#475569]">{t.name}</p>
          <p className="mt-1 text-xs text-slate-400">{t.note}</p>
        </li>
      ))}
    </ul>
  )
}
