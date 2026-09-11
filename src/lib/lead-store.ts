import { promises as fs } from "node:fs"
import path from "node:path"

/**
 * E-posta kanalı ulaşılamazsa talep kaybolmasın: satır-sonlu JSON olarak
 * `data/leads.jsonl` dosyasına yazılır (self-host'ta kalıcı; Vercel serverless'ta
 * ephemeral'dir → orada DB/queue'a bağlayın).
 */
export interface StoredLead {
  at: string
  channel: "resend" | "mock" | "fallback"
  ok?: boolean
  error?: string
  lead: Record<string, unknown>
}

const FILE = path.join(process.cwd(), "data", "leads.jsonl")

export async function appendLead(entry: Omit<StoredLead, "at">): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true })
    await fs.appendFile(FILE, JSON.stringify({ at: new Date().toISOString(), ...entry }) + "\n", "utf8")
    return true
  } catch (e) {
    console.error("[lead-store] yazılamadı:", (e as Error).message)
    return false
  }
}

export async function readLeads(limit = 50): Promise<StoredLead[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8")
    return raw
      .trim()
      .split("\n")
      .slice(-limit)
      .map((l) => JSON.parse(l) as StoredLead)
  } catch {
    return []
  }
}
