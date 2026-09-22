import Reveal from "./Reveal";
export default function SectionHeader({ index, label, title, children }: { index: string; label: string; title: string; children?: React.ReactNode }) {
  return (
    <Reveal className="mb-10 max-w-2xl sm:mb-14">
      <p className="label mb-3">{index} / {label}</p>
      <h2 className="h2">{title}</h2>
      {children && <p className="mt-4 text-lg text-ink-soft">{children}</p>}
    </Reveal>
  );
}
