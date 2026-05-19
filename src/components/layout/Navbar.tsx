"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-[--border] bg-[#0a0a0bcc] backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-narrow flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-[--fg] hover:text-[--accent] transition-colors"
        >
          <span className="text-[--accent]">~/</span>abdulrahman
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-[--fg-muted] hover:text-[--fg] hover:bg-white/[0.04] rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3.5 py-1.5 text-sm font-medium text-white bg-[--accent] hover:bg-[--accent-hover] rounded-md transition-colors"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md hover:bg-white/[0.04] text-[--fg]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[--border] bg-[#0a0a0bee] backdrop-blur-xl">
          <nav className="container-narrow flex flex-col py-3 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-[--fg-muted] hover:text-[--fg] hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-3 py-2 text-sm font-medium text-white bg-[--accent] hover:bg-[--accent-hover] rounded-md text-center"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
