"use client";
import { useEffect, useRef, useState } from "react";

/** Loads /projects/<slug>/<file>. If the file doesn't exist yet, shows a tasteful generated placeholder. */
export default function ProjectImage({ slug, file = "cover.jpg", alt, className = "", label, fit = "cover" }: { fit?: "cover" | "contain"; slug: string; file?: string; alt: string; className?: string; label?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // the image may have already errored before hydration attached onError
  useEffect(() => { const el = ref.current; if (el && el.complete && el.naturalWidth === 0) setFailed(true); }, []);
  if (failed) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 ${className}`} role="img" aria-label={alt}>
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(59,130,246,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.08) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <svg viewBox="0 0 200 120" className="relative h-2/5 w-auto text-accent/50" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 90 C 50 20, 100 110, 190 30" strokeDasharray="4 5" />
          <circle cx="10" cy="90" r="4" /><circle cx="100" cy="62" r="4" /><circle cx="190" cy="30" r="4" fill="currentColor" />
        </svg>
        <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-ink-mute">{label ?? `projects/${slug}/${file}`}</span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={`/projects/${slug}/${file}`} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`} />;
}
