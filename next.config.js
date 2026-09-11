/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev sunucusu (`.next-dev`) ile prod build (`.next`) ayrı klasörlerde tutulur;
  // böylece `next build`, açık dev server'ın output'unu ezmez (audit script'i .next okur).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
  poweredByHeader: false,
  // SEO kuralı: tüm URL'ler trailing slash ile tutarlı (/hizmetler/crm/)
  trailingSlash: true,
  // Preview / sandbox host'ları (https://3000-xxxx.e2b.app) dev modda reddedilmesin.
  allowedDevOrigins: ["*.e2b.app", "*.dev.e2b.app"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/webp"],
    localPatterns: [{ pathname: "/images/**", search: "" }],
    remotePatterns: [],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ]
  },
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
}

module.exports = nextConfig
