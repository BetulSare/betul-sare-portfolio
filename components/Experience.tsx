import { experience } from "@/data/experience";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience({ locale }: { locale: Locale }) {
  const s = ui[locale].sections.experience;
  return (
    <section id="experience" className="scroll-mt-20 border-y border-line/70 bg-white/60 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeader index="01" label={s.label} title={s.title} />
        <div className="border-b border-line">
          {experience.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <article className="grid gap-5 border-t border-line py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-10">
                <header>
                  <p className="label flex items-center gap-2">
                    {e.current && <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />}
                    {e.period[locale]}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{e.company[locale]}</h3>
                  <p className="mt-1 text-ink-soft">{e.role[locale]}</p>
                </header>
                <div>
                  <ul className="space-y-3 text-ink-soft">
                    {e.points[locale].map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{p}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">{e.tech.map((x) => <span key={x} className="pill">{x}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
