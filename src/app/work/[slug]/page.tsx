import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { caseStudies, caseStudySlugs } from "@/lib/case-studies";
import { Chip } from "@/components/ui/Chip";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies[slug];
  if (!c) return {};
  return {
    title: c.title,
    description: c.oneLiner,
    openGraph: {
      title: c.title,
      description: c.oneLiner,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies[slug];
  if (!c) notFound();

  return (
    <article className="container-narrow py-32">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[--fg-muted] hover:text-[--fg] transition-colors"
      >
        <ArrowLeft size={12} />
        Back to work
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap gap-2">
          <Chip variant="accent">{c.role}</Chip>
          <Chip variant="muted">{c.dates}</Chip>
          {c.ndaSafe && (
            <Chip variant="outline">NDA — abstracted</Chip>
          )}
        </div>
        <h1 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-[--fg] leading-[1.1]">
          {c.title}
        </h1>
        <p className="mt-4 text-lg text-[--fg-muted] leading-relaxed">
          {c.oneLiner}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {c.stack.map((s) => (
            <Chip key={s} size="sm">
              {s}
            </Chip>
          ))}
        </div>

        {(c.links?.live || c.links?.repo) && (
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {c.links.live && (
              <a
                href={c.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[--border-strong] hover:border-[--accent] text-[--fg] hover:bg-white/[0.03] transition-colors"
              >
                Live site
                <ExternalLink size={13} />
              </a>
            )}
            {c.links.repo && (
              <a
                href={c.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[--border-strong] hover:border-[--accent] text-[--fg] hover:bg-white/[0.03] transition-colors"
              >
                Repository
                <GithubIcon size={13} />
              </a>
            )}
          </div>
        )}
      </header>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-5xl">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[--accent-hover] lg:text-right lg:pt-1">
          Context
        </h2>
        <div className="lg:col-span-2 space-y-4 text-[--fg-muted] leading-relaxed">
          {c.context.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[--accent-hover] lg:text-right lg:pt-1">
          What I shipped
        </h2>
        <ul className="lg:col-span-2 space-y-3">
          {c.contributions.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-[--fg-muted] leading-relaxed"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[--accent]/70"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[--accent-hover] lg:text-right lg:pt-1">
          Highlights
        </h2>
        <div className="lg:col-span-2 space-y-8">
          {c.highlights.map((h, i) => (
            <div key={i}>
              <h3 className="text-lg font-medium text-[--fg]">{h.heading}</h3>
              {h.body.map((p, j) => (
                <p
                  key={j}
                  className="mt-2 text-[--fg-muted] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[--accent-hover] lg:text-right lg:pt-1">
          Impact
        </h2>
        <ul className="lg:col-span-2 space-y-2.5">
          {c.impact.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-[--fg] leading-relaxed"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 pt-10 border-t border-[--border] flex items-center justify-between">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-[--fg-muted] hover:text-[--fg] transition-colors"
        >
          <ArrowLeft size={14} />
          More work
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-sm text-[--accent-hover] hover:text-[--accent] transition-colors"
        >
          Get in touch →
        </Link>
      </div>
    </article>
  );
}
