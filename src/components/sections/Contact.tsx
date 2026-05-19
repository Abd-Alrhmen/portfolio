import { Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmail } from "@/components/ui/CopyEmail";

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Open chat",
    href: siteConfig.social.whatsapp,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/abdulrahman-ahmed-hassan",
    href: siteConfig.social.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "@Abd-Alrhmen",
    href: siteConfig.social.github,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="container-narrow py-24 sm:py-32 border-t border-[--border]"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="The fastest way to reach me is email. I read everything and reply within a day or two."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <CopyEmail />
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group rounded-xl border border-[--border] bg-[--bg-elev] hover:border-[--accent]/40 hover:bg-[--bg-elev-2] p-4 transition-all"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[--border] bg-white/[0.02] text-[--accent-hover]">
                  <Icon size={14} />
                </span>
                <p className="mt-3 text-[10px] font-mono uppercase tracking-wider text-[--fg-dim]">
                  {c.label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[--fg] truncate">
                  {c.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
