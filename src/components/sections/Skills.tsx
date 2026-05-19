"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { skillCategories, learning, type SkillTier } from "@/lib/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const tierBadgeStyles: Record<SkillTier, string> = {
  production: "border-[--accent]/40 text-[--accent-hover] bg-[--accent]/10",
  regular: "border-[--border-strong] text-[--fg] bg-white/[0.04]",
  working: "border-[--border] text-[--fg-muted] bg-white/[0.02]",
};

const tierChipStyles: Record<SkillTier, string> = {
  production:
    "border-[--accent]/30 bg-[--accent]/10 text-[--fg] hover:border-[--accent]/60",
  regular:
    "border-[--border-strong] bg-white/[0.03] text-[--fg] hover:border-[--accent]/40",
  working:
    "border-[--border] bg-white/[0.015] text-[--fg-muted] hover:text-[--fg]",
};

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="container-narrow py-24 sm:py-32 border-t border-[--border]"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Honest stack, tiered by depth."
        description="No five-out-of-five-on-everything inflation. Production = daily use in shipped code. Regular = real work, less central. Working knowledge = touched on real projects, still building depth."
      />

      <div className="mt-12 space-y-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : i * 0.08,
            }}
            className="rounded-xl border border-[--border] bg-[--bg-elev] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded border",
                  tierBadgeStyles[cat.tier]
                )}
              >
                {cat.title}
              </span>
              <p className="text-sm text-[--fg-muted]">{cat.description}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className={cn(
                    "inline-flex items-center font-mono text-[11.5px] px-2.5 py-1 rounded-md border transition-colors",
                    tierChipStyles[cat.tier]
                  )}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-[--border-strong] p-6 sm:p-7">
        <div className="flex items-center gap-2 text-[--fg]">
          <GraduationCap size={16} className="text-[--accent-hover]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[--fg-muted]">
            Currently learning
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {learning.map((s) => (
            <span
              key={s}
              className="inline-flex items-center font-mono text-[11.5px] px-2.5 py-1 rounded-md border border-[--border] bg-white/[0.015] text-[--fg-muted]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
