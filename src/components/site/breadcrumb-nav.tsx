import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface Crumb {
  name: string
  href?: string
}

export function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <BreadcrumbItem key={`${c.name}-${i}`}>
              {last || !c.href ? (
                <BreadcrumbPage className="text-[#0F2A44]">{c.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={c.href}>{c.name}</Link>
                </BreadcrumbLink>
              )}
              {!last ? <BreadcrumbSeparator /> : null}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
