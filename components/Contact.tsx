import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Contact({ locale }: { locale: Locale }) {
  const s = ui[locale].sections.contact;
  const rows = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Linkedin, label: "LinkedIn", value: site.linkedinLabel, href: site.linkedin },
    { icon: Github, label: "GitHub", value: site.githubLabel, href: site.github },
  ];
  return (
    <section id="contact" className="container-x scroll-mt-20 py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-14">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-accent-sky/20 blur-3xl" />
          <p className="label relative !text-white/50">05 / {s.label}</p>
          <h2 className="relative mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">{s.title}</h2>
          <p className="relative mt-5 max-w-xl text-lg text-white/70">{s.text}</p>
          <div className="relative mt-10 divide-y divide-white/10 border-y border-white/10">
            {rows.map((r) => (
              <a key={r.label} href={r.href} target={r.label === "Email" ? undefined : "_blank"} rel="noreferrer" className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent-sky">
                <span className="flex min-w-0 items-center gap-4"><r.icon size={20} strokeWidth={1.5} className="shrink-0 opacity-60" /><span className="truncate text-base sm:text-xl">{r.value}</span></span>
                <ArrowUpRight size={20} className="shrink-0 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
