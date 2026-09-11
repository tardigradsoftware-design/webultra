import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2 text-[15px] text-[#0F172A] shadow-sm transition-colors placeholder:text-slate-400 focus-visible:border-[#0F2A44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        "aria-[invalid=true]:border-[#B91C1C] aria-[invalid=true]:ring-[#B91C1C]/15",
        className,
      )}
      {...props}
    />
  ),
)
Input.displayName = "Input"

export { Input }
