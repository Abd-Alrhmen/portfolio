"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="container-narrow py-24 sm:py-32 border-t border-[--border]"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where the work happens."
        description="Production frontend at Smicolon, plus a year of self-directed practice before that."
      />

      <div className="mt-12 relative">
        <div
          aria-hidden
          className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[--accent]/40 via-[--border] to-transparent"
        />

        <ul className="space-y-10">
          {experience.map((job, i) => (
            <motion.li
              key={job.company + job.dates}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-12"
            >
              <span
                className="absolute left-[7px] top-2 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[--accent]/40 bg-[--bg]"
                aria-hidden
              >
                <Briefcase size={9} className="text-[--accent-hover]" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-[--fg]">
                  {job.role}
                </h3>
                <span className="text-[--fg-muted]">·</span>
                <span className="text-[--accent-hover] font-medium">
                  {job.company}
                </span>
                {job.current && (
                  <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-emerald-400/30 text-emerald-400">
                    Current
                  </span>
                )}
              </div>

              <p className="mt-1 font-mono text-xs text-[--fg-dim]">
                {job.dates}
                {job.location && (
                  <>
                    <span className="mx-2">·</span>
                    {job.location}
                  </>
                )}
              </p>

              <p className="mt-3 text-[--fg-muted] leading-relaxed">
                {job.summary}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm text-[--fg] leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[--accent]/60"
                    />
                    <span className="text-[--fg-muted]">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
