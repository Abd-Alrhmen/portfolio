import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { heroProjects, archivedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { GithubIcon } from "@/components/ui/BrandIcons";

function urlHost(url?: string) {
  if (!url) return undefined;
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function Work() {
  return (
    <section id="work" className="container-narrow py-24 sm:py-32">
      <SectionHeading
        eyebrow="Selected Work"
        title="Production builds and personal craft."
        description="A curated sample of shipped work. Client products are described with NDA in mind — scope, role, and technical highlights only."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {heroProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <details className="mt-12 group rounded-xl border border-[--border] bg-[--bg-elev] open:bg-[--bg-elev-2] transition-colors">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 select-none">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium text-[--fg]">
              Other work & practice projects
            </span>
            <span className="font-mono text-xs text-[--fg-dim]">
              {archivedProjects.length} more
            </span>
          </div>
          <span className="font-mono text-xs text-[--fg-muted] group-open:hidden">
            expand ↓
          </span>
          <span className="font-mono text-xs text-[--fg-muted] hidden group-open:inline">
            collapse ↑
          </span>
        </summary>
        <div className="px-5 pb-6 pt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {archivedProjects.map((p) => {
            const primary = p.live ?? p.repo;
            const liveHost = urlHost(p.live);

            return (
              <div
                key={p.name}
                className="group/item flex flex-col overflow-hidden rounded-lg border border-[--border] bg-white/[0.015] hover:border-[--accent]/30 hover:bg-white/[0.04] transition-all"
              >
                <a
                  href={primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/9] block bg-gradient-to-br from-[--accent]/10 via-transparent to-fuchsia-500/10 overflow-hidden border-b border-[--border]"
                  aria-label={`Open ${p.name}${p.live ? " live demo" : " repository"}`}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover opacity-80 group-hover/item:opacity-100 group-hover/item:scale-[1.02] transition-all duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-2xl font-semibold text-white/30">
                        {p.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                    </div>
                  )}
                  {p.live && (
                    <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-md bg-emerald-500/15 backdrop-blur-sm border border-emerald-400/30 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-300">
                      ● Live
                    </span>
                  )}
                  <span className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/50 backdrop-blur-sm text-white/80 group-hover/item:text-white opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <ExternalLink size={12} />
                  </span>
                </a>

                <div className="flex flex-col flex-1 p-3.5">
                  <a
                    href={primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[--fg] hover:text-[--accent-hover] transition-colors truncate"
                  >
                    {p.name}
                  </a>
                  {liveHost && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 font-mono text-[10.5px] text-[--fg-dim] hover:text-[--accent-hover] transition-colors truncate"
                    >
                      {liveHost}
                    </a>
                  )}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {p.stack.slice(0, 3).map((s) => (
                      <Chip key={s} size="sm" variant="muted">
                        {s}
                      </Chip>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-[11px]">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[--accent-hover] hover:text-[--accent] transition-colors"
                      >
                        View project
                        <ExternalLink size={11} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[--fg-muted] hover:text-[--fg] transition-colors"
                        aria-label={`${p.name} source code`}
                      >
                        Code
                        <GithubIcon size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </details>
    </section>
  );
}
