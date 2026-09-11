import Link from "next/link"

import { site } from "@/data/site"
import { cn } from "@/lib/utils"

/**
 * Logo alanı.
 * SVG teslim edildiğinde `{/* LOGO SVG BURAYA *\/}` satırının bulunduğu bloğun
 * içeriğini değiştirin; boyut ve renk sınıfları zaten ayarlı.
 *  - header: beyaz zemin üstü lacivert (#0F2A44)
 *  - footer: lacivert zemin üstü beyaz
 */
export function Logo({
  variant = "dark",
  withWordmark = true,
  className,
  href = "/",
}: {
  variant?: "dark" | "light"
  withWordmark?: boolean
  className?: string
  href?: string | null
}) {
  const Content = (
    <>
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors",
          variant === "dark"
            ? "border-[#0F2A44]/15 bg-[#0F2A44] text-white"
            : "border-white/25 bg-white/10 text-white",
        )}
        aria-hidden
      >
        {/* LOGO SVG BURAYA */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M12 7v12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="12" cy="19.5" r="1.6" fill="currentColor" />
        </svg>
      </span>
      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-[15px] font-semibold tracking-tight",
              variant === "dark" ? "text-[#0F2A44]" : "text-white",
            )}
          >
            Tardigrad
          </span>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.18em]",
              variant === "dark" ? "text-slate-500" : "text-white/60",
            )}
          >
            Software
          </span>
        </span>
      ) : null}
    </>
  )

  const cls = cn("group inline-flex items-center gap-2.5", className)

  if (href === null) {
    return (
      <span className={cls} aria-label={site.name}>
        {Content}
      </span>
    )
  }

  return (
    <Link href={href} className={cls} aria-label={`${site.name} — ana sayfa`}>
      {Content}
    </Link>
  )
}
