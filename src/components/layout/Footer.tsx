import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-[--border] mt-20">
      <div className="container-narrow py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs font-mono text-[--fg-dim]">
          © {year} {siteConfig.name}.{" "}
          <span className="text-[--fg-muted]">
            Built with Next.js · Tailwind · Framer Motion.
          </span>
        </p>
        <div className="flex items-center gap-1">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-[--fg-muted] hover:text-[--fg] hover:bg-white/[0.04] rounded-md transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-[--fg-muted] hover:text-[--fg] hover:bg-white/[0.04] rounded-md transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-[--fg-muted] hover:text-[--fg] hover:bg-white/[0.04] rounded-md transition-colors"
          >
            <WhatsappIcon size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="p-2 text-[--fg-muted] hover:text-[--fg] hover:bg-white/[0.04] rounded-md transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
