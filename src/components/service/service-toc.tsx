import { cn } from "@/lib/utils"

export interface TocItem {
  id: string
  label: string
}

/** Hizmet sayfası içindekiler — kullanıcı + Google için sayfa haritası */
export function ServiceToc({
  items,
  className,
  title = "Bu sayfada",
}: {
  items: TocItem[]
  className?: string
  title?: string
}) {
  if (items.length < 3) return null
  return (
    <nav
      aria-label="Sayfa içi gezinme"
      className={cn("rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card", className)}
    >
      <p className="kicker">{title}</p>
      <ol className="mt-3 space-y-1.5">
        {items.map((it, i) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="group flex items-baseline gap-2.5 text-sm leading-6 text-[#334155] transition-colors hover:text-[#0F2A44]"
            >
              <span className="font-mono text-[11px] text-slate-400 group-hover:text-[#06B6D4]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
