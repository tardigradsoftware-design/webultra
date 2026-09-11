import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * shadcn/ui Button (Radix Slot + CVA) — kurumsal varyantlar:
 * primary = lacivert dolu, outline = beyaz/lacivert kenar, ghost/link = metin.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-[0.5px]",
  {
    variants: {
      variant: {
        primary: "bg-[#0F2A44] text-white shadow-sm hover:bg-[#1E3A5F]",
        default: "bg-[#0F2A44] text-white shadow-sm hover:bg-[#1E3A5F]",
        outline:
          "border border-[#CBD5E1] bg-white text-[#0F2A44] shadow-sm hover:border-[#0F2A44] hover:bg-[#F8FAFC]",
        secondary: "bg-[#F1F5F9] text-[#0F2A44] hover:bg-[#E2E8F0]",
        ghost: "text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F2A44]",
        link: "text-[#0F2A44] underline-offset-4 hover:underline",
        accent: "bg-[#06B6D4] text-white shadow-sm hover:brightness-95",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3.5 text-[13px]",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
