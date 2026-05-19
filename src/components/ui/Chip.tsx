import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipVariant = "default" | "accent" | "muted" | "outline";
type ChipSize = "sm" | "md";

type ChipProps = {
  children: ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  className?: string;
};

const variantStyles: Record<ChipVariant, string> = {
  default: "border-[--border] bg-white/[0.03] text-[--fg-muted]",
  accent:
    "border-[--accent]/30 bg-[--accent]/10 text-[--accent-hover]",
  muted: "border-transparent bg-white/[0.03] text-[--fg-dim]",
  outline: "border-[--border-strong] bg-transparent text-[--fg]",
};

const sizeStyles: Record<ChipSize, string> = {
  sm: "text-[10.5px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export function Chip({
  children,
  variant = "default",
  size = "md",
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-mono leading-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
