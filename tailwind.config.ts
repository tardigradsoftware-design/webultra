import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"], // KULLANILMIYOR — marka kuralı: koyu tema yasak, yalnızca açık tema.
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        // Gövde: Inter (self-hosted, @fontsource-variable) — uzun SEO metinlerinde okunabilirlik
        sans: ["Inter Variable", "Inter", "system-ui", "-apple-system", "sans-serif"],
        // Başlıklar: Geist (self-hosted, geist/font) — kurumsal, teknik, ferah
        heading: ["var(--font-geist-sans)", "Geist", "InterVariable", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        navy: {
          DEFAULT: "#0F2A44",
          50: "#F2F6FA",
          100: "#E4EDF5",
          200: "#C3D6E7",
          300: "#94B4D0",
          400: "#5B85AB",
          500: "#33608A",
          600: "#1E3A5F",
          700: "#0F2A44",
          800: "#0B2034",
          900: "#071626",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 42 68 / 0.04), 0 1px 3px 0 rgb(15 42 68 / 0.06)",
        "card-hover": "0 8px 24px -8px rgb(15 42 68 / 0.14), 0 2px 6px -2px rgb(15 42 68 / 0.08)",
        soft: "0 2px 8px -2px rgb(15 42 68 / 0.08)",
      },
      maxWidth: {
        prose: "68ch",
      },
      spacing: {
        section: "5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out both",
      },
      typography: {
        DEFAULT: {
          css: { "--tw-prose-body": "#334155", "--tw-prose-headings": "#0F172A" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
