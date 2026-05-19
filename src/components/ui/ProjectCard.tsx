"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [from, to] = project.gradient;

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
      className="group relative flex flex-col h-full rounded-xl border border-[--border] bg-[--bg-elev] hover:border-[--accent]/40 hover:bg-[--bg-elev-2] overflow-hidden transition-all duration-300"
    >
      {/* Visual header */}
      <div
        className="relative h-44 sm:h-52 overflow-hidden"
        style={
          project.cover
            ? undefined
            : {
                backgroundImage: `radial-gradient(ellipse 80% 100% at 20% 0%, ${from}33, transparent 60%), radial-gradient(ellipse 90% 100% at 100% 100%, ${to}33, transparent 65%), linear-gradient(135deg, ${from}1a, ${to}0d)`,
              }
        }
      >
        {project.cover ? (
          <>
            <Image
              src={project.cover}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            />
          </>
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 90%)",
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-x-6 bottom-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${from}66, ${to}66, transparent)`,
          }}
        />
        <div className="absolute top-4 left-5 right-5 flex items-start justify-between">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/40 backdrop-blur-sm font-mono text-[13px] font-semibold tracking-tight text-white"
            aria-hidden
          >
            {project.mark}
          </span>
          <span className="font-mono text-[10.5px] text-white/80 whitespace-nowrap pt-2.5">
            {project.dates}
          </span>
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <Chip variant={project.status === "production" ? "accent" : "muted"}>
              {project.status === "production" ? "● Production" : "Personal"}
            </Chip>
            {project.ndaSafe && (
              <Chip variant="muted" size="sm">
                NDA
              </Chip>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--fg-dim]">
          {project.role}
        </p>
        <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[--fg]">
          {project.title}
        </h3>

        {project.urlLabel && (
          <a
            href={project.links?.live ?? project.links?.repo ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1 font-mono text-[11px] text-[--accent-hover] hover:text-[--accent] transition-colors w-fit"
          >
            {project.urlLabel}
            <ArrowUpRight size={11} />
          </a>
        )}

        <p className="mt-3 text-sm text-[--fg-muted] leading-relaxed">
          {project.tagline}
        </p>

        {project.highlight && (
          <p className="mt-4 inline-flex items-start gap-2 text-xs font-mono text-[--accent-hover]">
            <Sparkles size={13} className="mt-0.5 shrink-0" />
            {project.highlight}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <Chip key={t} size="sm" variant="default">
              {t}
            </Chip>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-4 text-xs border-t border-[--border]">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 pt-5 font-medium text-[--fg] hover:text-[--accent-hover] transition-colors"
          >
            Case study
            <ArrowUpRight size={13} />
          </Link>
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 pt-5 text-[--fg-muted] hover:text-[--fg] transition-colors"
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
              className="inline-flex items-center gap-1 pt-5 text-[--fg-muted] hover:text-[--fg] transition-colors"
            >
              Repo
              <GithubIcon size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
