"use client";
import { motion } from "framer-motion";
import { Award, Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import SwarmVisual from "./SwarmVisual";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (d: number) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease } });

export default function Hero({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const contacts = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
    { icon: Github, label: "GitHub", href: site.github },
  ];
  return (
    <section id="about" className="relative overflow-hidden pb-14 pt-28 sm:pt-32 lg:pb-16">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -right-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-accent-sky/20 to-accent/10 blur-3xl" />
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <motion.p {...up(0)} className="label mb-4 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />{site.title[locale]}</motion.p>
          <motion.h1 {...up(0.08)} className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{site.fullName}</motion.h1>
          <motion.p {...up(0.16)} className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">{site.intro[locale]}</motion.p>
          <motion.div {...up(0.22)} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2"><GraduationCap size={15} className="text-accent" />{site.education[locale]}</span>
          </motion.div>
          <motion.div {...up(0.28)} className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-3 py-1.5 text-xs font-semibold">
            <Award size={14} className="text-accent" />{site.highlight[locale]}
          </motion.div>
          <motion.div {...up(0.34)} className="mt-7 flex flex-wrap gap-2.5">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target={c.icon === Mail ? undefined : "_blank"} rel="noreferrer" className="btn-ghost !px-4 !py-2"><c.icon size={15} />{c.label}</a>
            ))}
          </motion.div>
          <motion.div {...up(0.4)} className="mt-5 flex flex-wrap gap-3">
            <a href={site.cv} download className="btn-primary"><Download size={16} />{t.cta.cv}</a>
            <a href="#projects" className="btn-ghost">{t.cta.viewProjects}</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hidden lg:block"><SwarmVisual /></motion.div>
      </div>
    </section>
  );
}
