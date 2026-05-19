import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[--accent-hover]">
        <span className="text-[--accent]">// </span>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[--fg]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[--fg-muted] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
