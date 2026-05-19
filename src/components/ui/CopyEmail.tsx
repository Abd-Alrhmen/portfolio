"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fall through to the mailto on the surrounding <a>.
    }
  };

  return (
    <a
      href={`mailto:${siteConfig.email}`}
      onClick={(e) => {
        if (navigator.clipboard) {
          e.preventDefault();
          onCopy();
        }
      }}
      className="group inline-flex items-center gap-3 rounded-xl border border-[--border] bg-[--bg-elev] hover:border-[--accent]/40 hover:bg-[--bg-elev-2] px-5 py-4 transition-all"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[--border] bg-white/[0.03] text-[--accent-hover]">
        {copied ? <Check size={18} /> : <Mail size={18} />}
      </span>
      <span className="flex flex-col text-left">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[--fg-dim]">
          {copied ? "Copied to clipboard" : "Email me"}
        </span>
        <span className="text-base font-medium text-[--fg]">
          {siteConfig.email}
        </span>
      </span>
      <span className="ml-auto text-[--fg-dim] group-hover:text-[--fg]">
        <Copy size={14} />
      </span>
    </a>
  );
}
