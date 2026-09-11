import { processSteps } from "@/data/process"

/** Lacivert dikey çizgi + beyaz numaralı daireler (Bölüm 7 / 6) */
export function ProcessTimeline({
  steps = processSteps,
  columns = 3,
}: {
  steps?: { title: string; text: string }[]
  columns?: 1 | 2 | 3
}) {
  return (
    <ol
      className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : columns === 2 ? "lg:grid-cols-2" : ""
      }`}
    >
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-14">
          <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white font-mono text-sm font-semibold text-[#0F2A44] shadow-sm">
            {i + 1}
          </span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute left-5 top-11 h-[calc(100%+1rem)] w-px bg-[#0F2A44]/12"
            />
          ) : null}
          <p className="font-heading text-[17px] font-semibold text-[#0F172A]">{s.title}</p>
          <p className="mt-1.5 text-[15px] leading-7 text-slate-600">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}
