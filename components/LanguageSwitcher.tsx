"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || `/${locale}/`;
  const rest = pathname.replace(/^\/(tr|en)(?=\/|$)/, "");
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-full border border-line bg-white/70 p-0.5 text-xs font-semibold">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest || "/"}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          onClick={() => { try { localStorage.setItem("lang", l); } catch {} }}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${l === locale ? "bg-ink text-white" : "text-ink-soft hover:text-ink"}`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
