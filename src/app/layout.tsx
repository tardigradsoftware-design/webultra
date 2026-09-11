import type { Metadata, Viewport } from "next"

import "@fontsource-variable/inter"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"

import { site } from "@/data/site"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { JsonLd } from "@/components/site/json-ld"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Toaster } from "@/components/ui/sonner"

const titleTemplate = "%s | Tardigrad Software"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tardigrad Software | Kurumsal Web, Özel Yazılım ve SEO",
    template: titleTemplate,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: `${site.url}/`,
    siteName: site.name,
    locale: site.ogLocale,
    title: "Tardigrad Software | Kurumsal Web, Özel Yazılım ve SEO",
    description: site.description,
    images: [
      {
        url: "/api/og/?t=T%C3%BCrkiye%20geneli%2043%20hizmetle%20dijital%20d%C3%B6n%C3%BC%C5%9F%C3%BCm",
        width: 1200,
        height: 630,
        alt: "Tardigrad Software kurumsal yazılım ve dijital dönüşüm hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: "Tardigrad Software | Kurumsal Web, Özel Yazılım ve SEO",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light", // KOYU TEMA YASAK (marka kuralı)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={{ scrollPaddingTop: "6rem" }}
    >
      <head>
        {/* Logo alanı teslim edildiğinde: public/logo-placeholder.svg yerine gerçek logo konur. */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-screen bg-white font-sans text-[#334155]">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#0F2A44] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="icerik">{children}</main>
        <SiteFooter />
        <Toaster />
        <JsonLd data={{ "@graph": [organizationSchema(), websiteSchema()] }} id="org-schema" />
      </body>
    </html>
  )
}
