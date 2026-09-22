"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const ids = ["about", "experience", "projects", "certificates", "skills", "contact"] as const;

export default function Navbar({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = ids.map((id) => ({ id, label: t.nav[id], href: `/${locale}/#${id}` }));
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line/70 bg-white/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}/`} className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-sky" />
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((n) => <Link key={n.id} href={n.href} className="text-sm text-ink-soft transition-colors hover:text-ink">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={t.language} />
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden rounded-full p-2 text-ink-soft transition hover:bg-white hover:text-ink xl:block"><Github size={18} /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden rounded-full p-2 text-ink-soft transition hover:bg-white hover:text-ink xl:block"><Linkedin size={18} /></a>
          <a href={site.cv} download className="btn-primary hidden !px-4 !py-2 lg:inline-flex"><Download size={14} /> {t.cta.cv}</a>
          <button className="rounded-full p-2 lg:hidden" aria-label={t.menu} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 pb-4 lg:hidden">
          {links.map((n) => <Link key={n.id} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-ink-soft hover:bg-white">{n.label}</Link>)}
          <div className="flex flex-wrap gap-2 px-2 pt-2">
            <a href={site.cv} download className="btn-primary !px-4 !py-2"><Download size={14} /> {t.cta.cv}</a>
            <a href={site.github} className="pill">GitHub</a><a href={site.linkedin} className="pill">LinkedIn</a>
          </div>
        </nav>
      )}
    </header>
  );
}
