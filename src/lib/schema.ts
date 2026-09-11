import { site } from "@/data/site"
import type { City, FaqItem, Service } from "@/types/content"
import { absoluteUrl, url } from "@/lib/utils"

/**
 * JSON-LD üreticileri. Bölüm 3.1:
 *  - Home: Organization + ProfessionalService + WebSite
 *  - Hizmet: Service + FAQPage + BreadcrumbList
 *  - Şehir: Service/AreaServed + LocalBusiness + Geo
 */

const address = {
  "@type": "PostalAddress",
  streetAddress: site.address.streetAddress,
  addressLocality: site.address.district,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    legalName: site.legalName,
    alternateName: ["Tardigrad Software", "Tardigrad Yazılım"],
    url: `${site.url}/`,
    logo: `${site.url}/logo-placeholder.svg`,
    image: `${site.url}/images/hero/hero-kurumsal-dijital-donusum-paneli.webp`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    priceRange: site.priceRange,
    foundingDate: site.founded,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: { "@type": "Country", name: "Türkiye", sameAs: "https://en.wikipedia.org/wiki/Turkey" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"],
      },
    ],
    sameAs: [site.linkedin, site.github],
    knowsAbout: site.keywords,
    slogan: "Dijital dönüşümde ölçülebilir sonuç",
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: "tr",
    publisher: { "@id": `${site.url}/#organization` },
  }
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path === "/" ? "/" : url(item.path)),
    })),
  }
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function serviceSchema(service: Service, city?: City) {
  const name = city ? `${service.title} — ${city.name}` : service.title
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(url("hizmetler", service.slug))}#service`,
    serviceType: service.primaryKeyword,
    name,
    description: service.shortDescription,
    url: absoluteUrl(url("hizmetler", service.slug)),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: city
      ? { "@type": "City", name: city.name, address: { "@type": "PostalAddress", addressCountry: "TR", addressRegion: city.name } }
      : { "@type": "Country", name: "Türkiye" },
    ...(city
      ? {
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: site.geo.latitude,
              longitude: site.geo.longitude,
            },
            geoRadius: "1000000",
          },
        }
      : {}),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(url("iletisim")),
      servicePhone: { "@type": "ContactPoint", telephone: site.phone, contactType: "sales" },
      servicePostalAddress: address,
    },
    audience: { "@type": "BusinessAudience", name: "KOBİ, girişim ve kurumsal firmalar" },
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(url("iletisim")),
      description: "Ücretsiz ön analiz ve kapsam/takvim teklifi",
    },
  }
}

export function citySchema(city: City, services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.name} — ${city.name}`,
    image: `${site.url}/images/hero/hero-kurumsal-dijital-donusum-paneli.webp`,
    url: absoluteUrl(url("sehir", city.slug)),
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    parentOrganization: { "@id": `${site.url}/#organization` },
    areaServed: [
      {
        "@type": "City",
        name: city.name,
        address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.region, addressCountry: "TR" },
      },
      ...city.districts.slice(0, 6).map((d) => ({
        "@type": "Place",
        name: `${d}, ${city.name}`,
      })),
    ],
    knowsAbout: services.slice(0, 12).map((s) => s.primaryKeyword),
    address: {
      "@type": "PostalAddress",
      addressLocality: city.districts[0],
      addressRegion: city.name,
      addressCountry: "TR",
    },
  }
}
