"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Chip } from "@/components/ui/Chip";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="relative pt-32 sm:pt-40 pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg pointer-events-none"
      />
      <div className="container-narrow relative">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[--border] bg-white/[0.03] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-mono text-[--fg-muted]">
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.05)}
          className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[--fg] leading-[1.05]"
        >
          {siteConfig.name}.
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="mt-5 text-lg sm:text-xl text-[--fg] font-medium"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 max-w-2xl text-[--fg-muted] text-base sm:text-lg leading-relaxed"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[--accent] hover:bg-[--accent-hover] text-white font-medium text-sm transition-colors"
          >
            View Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[--border-strong] hover:border-[--accent] hover:bg-white/[0.03] text-[--fg] font-medium text-sm transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[--fg-dim] ml-2">
            <MapPin size={12} />
            {siteConfig.location}
          </span>
        </motion.div>

        <motion.div {...fadeUp(0.36)} className="mt-12 flex flex-wrap gap-2">
          {siteConfig.techStack.map((t) => (
            <Chip key={t} variant="outline">
              {t}
            </Chip>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
