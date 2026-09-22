"use client";
import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

/** Keeps <html lang> in sync and remembers the visitor's language. */
export default function LocaleSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    try { localStorage.setItem("lang", locale); } catch {}
  }, [locale]);
  return null;
}
