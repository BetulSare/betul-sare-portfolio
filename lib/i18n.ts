export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

/** Bilingual string / list helpers */
export type L = { tr: string; en: string };
export type LL = { tr: string[]; en: string[] };

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const pick = (l: L, locale: Locale) => l[locale];
export const pickList = (l: LL, locale: Locale) => l[locale];
export const href = (locale: Locale, path = "") => `/${locale}${path.startsWith("#") ? "/" + path : path}`;
