import { skills } from "@/data/skills";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills({ locale }: { locale: Locale }) {
  const s = ui[locale].sections.skills;
  return (
    <section id="skills" className="container-x scroll-mt-20 py-16 sm:py-24">
      <SectionHeader index="04" label={s.label} title={s.title} />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g, i) => (
          <Reveal key={g.group.en} delay={(i % 4) * 0.05}>
            <div className="border-t border-line pt-5">
              <h3 className="label mb-4">{g.group[locale]}</h3>
              <div className="flex flex-wrap gap-2">{g.items.map((x) => <span key={x} className="pill !bg-white !text-ink shadow-sm">{x}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
