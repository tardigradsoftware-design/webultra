import Image from "next/image"

import { cn } from "@/lib/utils"
import type { ServiceImage } from "@/types/content"

/**
 * Görsel katmanı (Bölüm 4.2):
 * - width/height her zaman verilir → CLS = 0
 * - hero dışındaki tüm görseller lazy
 * - görsel yoksa beyaz/lacivert CSS mockup fallback → asla boş kutu görünmez
 */
export function SiteImage({
  image,
  className,
  imgClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fallbackLabel,
}: {
  image?: ServiceImage
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  fallbackLabel?: string
}) {
  if (!image) {
    return (
      <div
        className={cn(
          "flex aspect-[16/9] w-full items-end justify-between gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-card",
          className,
        )}
        role="img"
        aria-label={fallbackLabel ?? "Hizmet arayüzü mockup görseli"}
      >
        <div className="flex h-full w-full flex-col gap-3">
          <div className="flex items-center gap-1.5 border-b border-[#F1F5F9] pb-3">
            <span className="h-2 w-2 rounded-full bg-[#0F2A44]" />
            <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
            <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
            <span className="ml-2 h-2 w-24 rounded-full bg-[#E2E8F0]" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-3">
            <div className="space-y-2 rounded-lg bg-[#F8FAFC] p-3">
              <span className="css-mockup-bar w-3/4" />
              <span className="css-mockup-bar w-1/2" />
              <span className="css-mockup-bar w-2/3" />
            </div>
            <div className="col-span-2 space-y-2 rounded-lg border border-[#F1F5F9] p-3">
              <span className="css-mockup-bar w-2/5 bg-[#0F2A44]/80" />
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-8 rounded-md bg-[#F1F5F9]" />
                ))}
              </div>
              <span className="css-mockup-bar w-4/5" />
              <span className="css-mockup-bar w-3/5" />
            </div>
          </div>
          <span className="inline-flex h-7 w-28 items-center justify-center rounded-lg bg-[#06B6D4] text-[10px] font-semibold text-white">
            {fallbackLabel ?? "Panel önizleme"}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={cn(
          "h-auto w-full bg-white object-contain",
          imgClassName,
        )}
      />
    </div>
  )
}
