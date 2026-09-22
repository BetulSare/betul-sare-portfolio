"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** "/" → remembered language, else browser language (EN if English), else Turkish. */
export default function Root() {
  const router = useRouter();
  useEffect(() => {
    let l = "tr";
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "tr" || saved === "en") l = saved;
      else if (navigator.language?.toLowerCase().startsWith("en")) l = "en";
    } catch {}
    router.replace(`/${l}/`);
  }, [router]);
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 text-sm text-ink-soft">
      <a href="/tr/" className="pill">Türkçe</a><a href="/en/" className="pill">English</a>
    </main>
  );
}
