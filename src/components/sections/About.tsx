import { MapPin, Building2, Languages, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { education } from "@/lib/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facts = [
  {
    icon: MapPin,
    label: "Based in",
    value: siteConfig.location,
  },
  {
    icon: Building2,
    label: "Working at",
    value: "Smicolon · since Oct 2025",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: `${education.degree}, ${education.school} (${education.year})`,
  },
  {
    icon: Languages,
    label: "Languages",
    value: "Arabic (native), English (B1)",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="container-narrow py-24 sm:py-32 border-t border-[--border]"
    >
      <SectionHeading
        eyebrow="About"
        title="Self-taught engineer, shipping production software."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-3 space-y-5 text-[--fg-muted] leading-relaxed">
          <p>
            I started as a self-taught developer with a non-traditional path —
            a B.Sc. in Agricultural Engineering followed by a year of focused
            practice on React, TypeScript, and accessibility fundamentals.
            That period was about building enough reps to enter real
            production work.
          </p>
          <p>
            Today I&apos;m a frontend engineer at{" "}
            <a
              href="https://smicolon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--fg] underline decoration-[--accent]/40 underline-offset-2 hover:decoration-[--accent]"
            >
              Smicolon
            </a>
            , a software studio shipping client products across web and
            mobile. I lead frontend on the Guardix Mobile App, own a CMS
            migration to Cloudflare Workers for our marketing site, and ship
            full-stack AI features on Brandbuddy. I work in React, Next.js,
            and React Native every day.
          </p>
          <p>
            I use AI coding tools — Claude Code in particular — as part of
            real delivery, not as a novelty. That changes what a single
            engineer can ship in a sprint, and it&apos;s where I think the
            craft is going.
          </p>
          <p>
            Long-term, I want to build my own technology company. For now
            I&apos;m focused on shipping high-quality production work and
            growing as an engineer.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border border-[--border] bg-[--bg-elev] p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[--fg-muted]">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4">
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[--border] bg-white/[0.02] text-[--accent-hover]">
                      <Icon size={13} />
                    </span>
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-wider text-[--fg-dim]">
                        {f.label}
                      </dt>
                      <dd className="text-sm text-[--fg] mt-0.5">
                        {f.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
