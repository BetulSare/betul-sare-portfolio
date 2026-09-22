import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleSync from "@/components/LocaleSync";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  return (
    <>
      <LocaleSync locale={params.locale} />
      <Navbar locale={params.locale} />
      <main>{children}</main>
      <Footer locale={params.locale} />
    </>
  );
}
