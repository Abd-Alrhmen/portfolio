"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/lib/projects";
import { Chip } from "@/components/ui/Chip";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      className="group relative flex flex-col h-full p-6 sm:p-7 rounded-xl border border-[--border] bg-[--bg-elev] hover:border-[--accent]/40 hover:bg-[--bg-elev-2] transition-all duration-300"
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-[--accent]/0 via-[--accent]/0 to-[--accent]/0 group-hover:from-[--accent]/10 group-hover:via-transparent group-hover:to-[--accent]/5 pointer-events-none transition-all" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Chip variant={project.status === "production" ? "accent" : "muted"}>
            {project.status === "production" ? "● Production" : "Personal"}
          </Chip>
          <Chip variant="default">{project.role}</Chip>
        </div>
        <span className="font-mono text-[10.5px] text-[--fg-dim] whitespace-nowrap">
          {project.dates}
        </span>
      </div>

      <h3 className="relative mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-[--fg]">
        {project.title}
      </h3>

      <p className="relative mt-2.5 text-sm text-[--fg-muted] leading-relaxed">
        {project.tagline}
      </p>

      {project.highlight && (
        <p className="relative mt-4 inline-flex items-start gap-2 text-xs font-mono text-[--accent-hover]">
          <Sparkles size={13} className="mt-0.5 shrink-0" />
          {project.highlight}
        </p>
      )}

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <Chip key={t} size="sm" variant="default">
            {t}
          </Chip>
        ))}
      </div>

      <div className="relative mt-6 pt-5 border-t border-[--border] flex items-center gap-4 text-xs">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 font-medium text-[--fg] hover:text-[--accent-hover] transition-colors"
        >
          Case study
          <ArrowUpRight size={13} />
        </Link>
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[--fg-muted] hover:text-[--fg] transition-colors"
          >
            Live
            <ExternalLink size={13} />
          </a>
        )}
        {project.links?.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[--fg-muted] hover:text-[--fg] transition-colors"
          >
            Repo
            <GithubIcon size={13} />
          </a>
        )}
        {project.ndaSafe && (
          <span className="ml-auto font-mono text-[10px] text-[--fg-dim]">
            NDA — abstracted
          </span>
        )}
      </div>
    </motion.article>
  );
}
