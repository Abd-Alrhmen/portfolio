import { ExternalLink } from "lucide-react";
import { heroProjects, archivedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";

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
          {archivedProjects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item p-4 rounded-lg border border-[--border] bg-white/[0.015] hover:border-[--accent]/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-[--fg]">
                  {p.name}
                </span>
                <ExternalLink
                  size={12}
                  className="text-[--fg-dim] group-hover/item:text-[--accent-hover] transition-colors shrink-0"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {p.stack.slice(0, 3).map((s) => (
                  <Chip key={s} size="sm" variant="muted">
                    {s}
                  </Chip>
                ))}
              </div>
            </a>
          ))}
        </div>
      </details>
    </section>
  );
}
