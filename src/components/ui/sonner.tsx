"use client"

import { Toaster as Sonner } from "sonner"
import { CheckCircle2, AlertCircle } from "lucide-react"

type ToasterProps = React.ComponentProps<typeof Sonner>

/** Sonner — beyaz/lacivert kurumsal toast teması */
const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    theme="light"
    position="bottom-right"
    closeButton
    toastOptions={{
      classNames: {
        toast:
          "group border border-[#E2E8F0] bg-white text-[#0F172A] shadow-card !rounded-xl font-sans",
        description: "text-slate-600",
        actionButton: "bg-[#0F2A44] text-white rounded-lg",
        cancelButton: "bg-[#F1F5F9] text-slate-600 rounded-lg",
        error: "border-[#FCA5A5] text-[#B91C1C]",
        success: "border-[#A7F3D0] text-[#047857]",
      },
    }}
    icons={{
      success: <CheckCircle2 className="h-4 w-4 text-[#10B981]" />,
      error: <AlertCircle className="h-4 w-4 text-[#B91C1C]" />,
    }}
    {...props}
  />
)

export { Toaster }
