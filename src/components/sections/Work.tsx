import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { heroProjects, archivedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";

function repoPath(url?: string) {
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
            const path = repoPath(p.url);
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex flex-col overflow-hidden rounded-lg border border-[--border] bg-white/[0.015] hover:border-[--accent]/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="relative aspect-[16/9] bg-gradient-to-br from-[--accent]/10 via-transparent to-fuchsia-500/10 overflow-hidden border-b border-[--border]">
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
                  <span className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/50 backdrop-blur-sm text-white/80 group-hover/item:text-white opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <ExternalLink size={12} />
                  </span>
                </div>

                <div className="flex flex-col p-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-[--fg] truncate">
                      {p.name}
                    </span>
                  </div>
                  {path && (
                    <span className="mt-1 font-mono text-[10.5px] text-[--fg-dim] truncate">
                      {path}
                    </span>
                  )}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {p.stack.slice(0, 3).map((s) => (
                      <Chip key={s} size="sm" variant="muted">
                        {s}
                      </Chip>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </details>
    </section>
  );
}
