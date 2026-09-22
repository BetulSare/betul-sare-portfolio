import Link from "next/link";
import { featuredProjects, otherProjects } from "@/data/projects";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import FeaturedProject from "./FeaturedProject";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <section id="projects" className="container-x scroll-mt-20 py-16 sm:py-24">
      <SectionHeader index="02" label={t.sections.projects.label} title={t.sections.projects.title}>{t.sections.projects.intro}</SectionHeader>
      <div className="space-y-6 sm:space-y-8">
        {featuredProjects.map((p, i) => <FeaturedProject key={p.id} project={p} index={i} locale={locale} />)}
      </div>
      <Reveal className="mb-6 mt-16"><p className="label">{t.sections.more}</p></Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.06} className="h-full">
            <Link href={`/${locale}/projects/${p.slug}/`} className="group card flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
              <div className="aspect-[16/10] overflow-hidden border-b border-line">
                <ProjectImage slug={p.imageDir} alt={p.title[locale]} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold leading-snug">{p.title[locale]}</h4>
                  {p.year && <span className="label shrink-0">{p.year}</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.shortDescription[locale]}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.technologies.slice(0, 4).map((x) => <span key={x} className="pill !text-[11px]">{x}</span>)}</div>
                <span className="mt-auto pt-4 text-sm font-medium text-accent">{t.cta.viewDetails} →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
