import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#0F2A44] text-white",
        outline: "border-[#E2E8F0] bg-white text-[#334155]",
        soft: "border-[#C3D6E7] bg-[#F2F6FA] text-[#0F2A44]",
        accent: "border-transparent bg-[#ECFEFF] text-[#0E7490]",
        success: "border-transparent bg-[#ECFDF5] text-[#047857]",
        muted: "border-transparent bg-[#F1F5F9] text-[#475569]",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
