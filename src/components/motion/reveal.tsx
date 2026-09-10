"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

/**
 * Minimal giriş animasyonu (Magic UI / Framer deseni).
 * - once: her blokte bir kez oynar
 * - prefers-reduced-motion: tamamen kapalı
 * - GPU dostu: yalnızca opacity + translate
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "li" | "section" | "article"
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as React.ElementType

  if (reduce) {
    return <Comp className={className}>{children}</Comp>
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  )
}

/** Grid/liste elemanları için hafif stagger */
export function RevealGroup({
  children,
  className,
  stagger = 0.06,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  as?: "div" | "ul"
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as React.ElementType

  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger } },
  }
  const child: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
    },
  }

  return (
    <Comp
      className={className}
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {React.Children.map(children, (c) =>
        reduce ? c : <motion.div variants={child}>{c}</motion.div>,
      )}
    </Comp>
  )
}
