import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Native select, shadcn görünümü.
 * Sebep: form alanında native select → mobilde native picker, JS yok, CLS 0,
 * ve sunucu tarafında render edilen formlarda hydration maliyeti doğmaz.
 */
const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "h-11 w-full appearance-none rounded-lg border border-[#CBD5E1] bg-white pl-3.5 pr-10 text-[15px] text-[#0F172A] shadow-sm transition-colors focus-visible:border-[#0F2A44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
          "aria-[invalid=true]:border-[#B91C1C]",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
    </div>
  ),
)
Select.displayName = "Select"

export { Select }
