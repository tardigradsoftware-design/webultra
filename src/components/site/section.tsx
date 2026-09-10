import * as React from "react"

import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string
  children: React.ReactNode
  size?: "default" | "narrow" | "wide"
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-[88rem]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Section({
  id,
  alt,
  className,
  children,
  as: Tag = "section",
}: {
  id?: string
  alt?: boolean
  className?: string
  children: React.ReactNode
  as?: "section" | "div" | "footer" | "aside"
}) {
  return (
    <Tag id={id} className={cn("section scroll-mt-24", alt && "section-alt", className)}>
      <Container>{children}</Container>
    </Tag>
  )
}

export function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
  className,
  as: Tag = "h2",
  id,
}: {
  kicker?: string
  title: React.ReactNode
  lead?: React.ReactNode
  align?: "left" | "center"
  className?: string
  as?: "h1" | "h2" | "h3"
  id?: string
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <Tag id={id} className="text-[28px] leading-[1.2] sm:text-3xl md:text-[38px]">
        {title}
      </Tag>
      {lead ? <p className="text-[17px] leading-8 text-slate-600">{lead}</p> : null}
    </div>
  )
}
