import { ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Certificates({ locale }: { locale: Locale }) {
  const s = ui[locale].sections.certificates;
  return (
    <section id="certificates" className="scroll-mt-20 border-y border-line/70 bg-white/60 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeader index="03" label={s.label} title={s.title} />
        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 0.06} className="h-full">
              <div className="card h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="label">{c.institution}</p>
                  <span className="label shrink-0">{c.date[locale]}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{c.program[locale]}</h3>
                {c.items && (
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                    {c.items.map((it) => <li key={it.en} className="flex gap-2.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{it[locale]}</li>)}
                  </ul>
                )}
                {c.certificateUrl && (
                  <a href={c.certificateUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    <ExternalLink size={14} /> {locale === "tr" ? "Sertifikayı Gör" : "View Certificate"}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
