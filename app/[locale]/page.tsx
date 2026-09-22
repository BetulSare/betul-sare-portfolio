import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { site } from "@/data/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const l = isLocale(params.locale) ? params.locale : "tr";
  return { title: `${site.fullName} — ${site.title[l]}`, description: site.intro[l] };
}

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  // Order: Hero → Experience → Projects → Certificates → Skills → Contact
  return (
    <>
      <Hero locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <Certificates locale={locale} />
      <Skills locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
