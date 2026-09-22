import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";
import type { Project } from "@/data/projects";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

export default function FeaturedProject({ project: p, index, locale }: { project: Project; index: number; locale: Locale }) {
  const t = ui[locale];
  const first = index === 0;
  return (
    <Reveal>
      <Link href={`/${locale}/projects/${p.slug}/`} className={`group card block overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${first ? "ring-1 ring-accent/20" : ""}`}>
        <div className={`grid ${first ? "lg:grid-cols-[1.25fr_1fr]" : "lg:grid-cols-2"}`}>
          <div className={`relative overflow-hidden ${index % 2 && !first ? "lg:order-2" : ""}`}>
            <div className={`${first ? "aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[400px]" : "aspect-[16/10]"} overflow-hidden`}>
              <ProjectImage slug={p.imageDir} alt={p.title[locale]} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
            {p.badge && (
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-soft backdrop-blur">
                <Award size={14} className="text-accent" /> {p.badge[locale]}
              </span>
            )}
          </div>
          <div className="flex flex-col p-6 sm:p-9">
            <div className="label flex items-center justify-between gap-3"><span>{p.category[locale]}</span>{p.year && <span className="shrink-0">{p.year}</span>}</div>
            <h3 className={`mt-4 font-semibold tracking-tight ${first ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{p.title[locale]}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{p.shortDescription[locale]}</p>
            <div className="mt-5 flex flex-wrap gap-2">{p.technologies.slice(0, 6).map((x) => <span key={x} className="pill">{x}</span>)}</div>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-medium text-accent">
              {t.cta.viewDetails} <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
