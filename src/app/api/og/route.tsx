import { NextResponse } from "next/server"
import { ImageResponse } from "next/og"
import { readFileSync } from "node:fs"
import path from "node:path"

import { site } from "@/data/site"

export const runtime = "nodejs"

const WIDTH = 1200
const HEIGHT = 630

function font(name: string) {
  return readFileSync(
    path.join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans", name),
  )
}

/**
 * OG / sosyal kart: BEYAZ zemin + lacivert başlık (Bölüm 1 tema kuralı).
 * Font: Geist (Tardigrad marka fontu), Türkçe glifler dahil.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get("t") || site.name).slice(0, 110)
  const desc = (searchParams.get("d") || site.description).slice(0, 190)
  const eyebrow = (searchParams.get("e") || "TARDIGRAD SOFTWARE").slice(0, 40)

  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            background: "#ffffff",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(15,42,68,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,42,68,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                background: "#0F2A44",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: 26,
              }}
            >
              T
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 13, color: "#64748B", letterSpacing: 3 }}>{eyebrow}</div>
              <div style={{ fontSize: 26, color: "#0F2A44" }}>tardigradsoftware.com</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26, position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ fontSize: 62, lineHeight: 1.1, color: "#0F172A" }}>{title}</div>
              <div style={{ width: 120, height: 5, background: "#06B6D4", borderRadius: 3 }} />
              <div style={{ fontSize: 26, lineHeight: 1.45, color: "#475569", maxWidth: 940 }}>
                {desc}
              </div>
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              {["LCP < 2.5s hedefi", "9 adımlı süreç", "81 il açık şablon"].map((chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    fontSize: 20,
                    color: "#0F2A44",
                    background: "#F2F6FA",
                    border: "1px solid #C3D6E7",
                    borderRadius: 10,
                    padding: "10px 18px",
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div style={{ fontSize: 21, color: "#334155" }}>
              Kurumsal Web · Özel Yazılım · SaaS · SEO · IT & AI — 43 hizmet, Türkiye geneli
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 21,
                color: "#ffffff",
                background: "#0F2A44",
                borderRadius: 12,
                padding: "14px 24px",
              }}
            >
              Projenizi Konuşalım
            </div>
          </div>
        </div>
      ),
      {
        width: WIDTH,
        height: HEIGHT,
        fonts: [
          { name: "Geist", data: font("Geist-Regular.ttf"), weight: 400 },
          { name: "Geist", data: font("Geist-Medium.ttf"), weight: 500 },
          { name: "Geist", data: font("Geist-SemiBold.ttf"), weight: 600 },
          { name: "Geist", data: font("Geist-Bold.ttf"), weight: 700 },
        ],
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate",
          "Content-Type": "image/png",
        },
      },
    )
  } catch (e) {
    return new NextResponse("OG üretilemedi", { status: 500 })
  }
}
