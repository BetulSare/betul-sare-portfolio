import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { ui } from "@/data/translations";
import { isLocale, locales } from "@/lib/i18n";
import Contact from "@/components/Contact";
import ProjectImage from "@/components/ProjectImage";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}
export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const p = getProject(params.slug);
  const l = isLocale(params.locale) ? params.locale : "tr";
  return { title: p ? `${p.title[l]} — Betül Sare` : "Project", description: p?.shortDescription[l] };
}

const spans = ["sm:col-span-2 sm:row-span-2", "", "", "sm:col-span-2", "", ""];

export default function ProjectPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const p = getProject(params.slug);
  if (!p) notFound();
  const t = ui[locale].detail;
  const i = projects.findIndex((x) => x.id === p.id);
  const next = projects[(i + 1) % projects.length];
  const n = p.gallery.length;
  const gridCls =
    p.galleryFit === "phones" ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
    : n <= 3 ? `grid auto-rows-[260px] grid-cols-1 gap-3 sm:auto-rows-[340px] ${n === 1 ? "" : n === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`
    : "grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4";

  return (
    <div className="pt-24 sm:pt-28">
      <div className="container-x">
        <Link href={`/${locale}/#projects`} className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"><ArrowLeft size={16} /> {t.back}</Link>
        <p className="label mt-8">{p.category[locale]}{p.year ? ` · ${p.year}` : ""}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">{p.title[locale]}</h1>
        {p.badge && <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-white px-3 py-1.5 text-sm font-semibold shadow-soft"><Award size={14} className="text-accent" />{p.badge[locale]}</span>}
        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line shadow-soft sm:mt-12">
          <ProjectImage slug={p.imageDir} alt={p.title[locale]} className="h-full w-full" />
        </div>
      </div>

      <div className="container-x mt-14 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <aside className="space-y-7 lg:sticky lg:top-28 lg:self-start">
          <div><p className="label mb-2">{t.role}</p><p className="font-medium">{p.role[locale]}</p></div>
          {p.year && <div><p className="label mb-2">{t.year}</p><p className="font-medium">{p.year}</p></div>}
          <div><p className="label mb-3">{t.technologies}</p><div className="flex flex-wrap gap-2">{p.technologies.map((x) => <span key={x} className="pill">{x}</span>)}</div></div>
        </aside>
        <div className="space-y-14">
          <Reveal><p className="label mb-3">{t.overview}</p><p className="text-lg leading-relaxed text-ink sm:text-xl">{p.description[locale]}</p></Reveal>
          {p.approach && (
            <Reveal>
              <p className="label mb-4">{t.approach}</p>
              <ul className="divide-y divide-line border-y border-line">
                {p.approach[locale].map((h) => <li key={h} className="flex gap-4 py-4 text-ink-soft"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{h}</li>)}
              </ul>
            </Reveal>
          )}
          <Reveal>
            <p className="label mb-4">{t.features}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {p.features[locale].map((h) => <li key={h} className="card p-4 text-sm leading-relaxed text-ink-soft">{h}</li>)}
            </ul>
          </Reveal>
          {(p.architecture || p.architectureImage) && (
            <Reveal>
              <p className="label mb-4">{t.architecture}</p>
              {p.architectureImage && (
                <div className="mb-4 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-white">
                  <ProjectImage slug={p.imageDir} file={p.architectureImage} alt={t.architectureImage} fit="contain" label={t.architectureImage} className="h-full w-full" />
                </div>
              )}
              {p.architecture && (
                <div className="flex flex-col gap-3">
                  {p.architecture.map((l, k) => (
                    <div key={l.label.en}>
                      <div className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6">
                        <span className="label w-32 shrink-0 !text-accent">{l.label[locale]}</span>
                        <div className="flex flex-wrap gap-2">{l.items.map((it) => <span key={it} className="pill !bg-bg">{it}</span>)}</div>
                      </div>
                      {k < p.architecture!.length - 1 && <div className="ml-8 h-4 w-px bg-gradient-to-b from-accent/50 to-transparent" />}
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          )}
          {p.results && (
            <Reveal>
              <p className="label mb-4">{t.results}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {p.results.map((r) => <div key={r.label.en} className="card p-6"><div className="text-3xl font-semibold tracking-tight">{r.value}</div><div className="mt-2 text-sm text-ink-soft">{r.label[locale]}</div></div>)}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {n > 0 && (
        <div className="container-x mt-20">
          <p className="label mb-5">{t.gallery}</p>
          <div className={gridCls}>
            {p.gallery.map((gi, k) => (
              <div key={gi.file} className={`overflow-hidden rounded-2xl border border-line ${p.galleryFit === "contain" ? "bg-sky-50/70" : ""} ${p.galleryFit === "phones" ? "aspect-[9/19]" : ""} ${n > 3 && p.galleryFit !== "phones" ? spans[k % spans.length] : ""}`}>
                <ProjectImage slug={p.imageDir} file={gi.file} label={gi.caption?.[locale]} alt={`${p.title[locale]} — ${k + 1}`} fit={p.galleryFit === "contain" ? "contain" : "cover"} className="h-full w-full transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container-x mt-20">
        <Link href={`/${locale}/projects/${next.slug}/`} className="group card flex items-center justify-between p-6 transition hover:shadow-lift sm:p-8">
          <div><p className="label">{t.next}</p><p className="mt-2 text-lg font-semibold sm:text-2xl">{next.title[locale]}</p></div>
          <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <Contact locale={locale} />
    </div>
  );
}
