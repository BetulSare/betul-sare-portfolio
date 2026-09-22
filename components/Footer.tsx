import { site } from "@/data/site";
import { ui } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line/70">
      <div className="container-x flex flex-col items-center justify-between gap-2 py-8 text-sm text-ink-mute sm:flex-row">
        <span>© {new Date().getFullYear()} {site.fullName}</span>
        <span className="label text-center">{ui[locale].footer}</span>
      </div>
    </footer>
  );
}
