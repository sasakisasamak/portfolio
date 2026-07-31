import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn>
      <div className={`max-w-2xl ${alignClass}`}>
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-emerald-400 uppercase">
          <span className="h-px w-6 bg-emerald-500/60" />
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
        )}
      </div>
    </FadeIn>
  );
}
