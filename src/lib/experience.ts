export type Experience = {
  company: string;
  role: string;
  dates: string;
  current?: boolean;
  location?: string;
  summary: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Smicolon",
    role: "Frontend Developer",
    dates: "Oct 2025 – Present",
    current: true,
    location: "Remote · Cairo",
    summary:
      "Ship production frontend across web and mobile products, lead infrastructure work, and integrate AI features end-to-end.",
    bullets: [
      "Shipped 30+ production screens on the Guardix Mobile App (React Native, TypeScript) over three months — including AI Assistant and AI FAB Behavior, Tickets History, Inbox, Profile tabs, Reports, Payroll, Inventory, Documents, Reminders and Notifications — plus the Activities screen API integration.",
      "Working on the Strapi → Payload CMS migration for smicolon.com on Cloudflare Workers + Neon Postgres + R2: helped validate the Workers runtime, built the Lexical → JSX rich-text renderer with custom converters, shipped the SES email adapter and afterChange notification hooks, and decoupled forms from the Strapi client.",
      "Performance work on smicolon.com: image optimization to AVIF/WebP via next/image, removed render-blocking scripts, reduced client bundle, added ISR caching, deduped Strapi data fetching.",
      "Built features on Brandbuddy across the stack: AI Assistant with context-aware suggestions, AI content plan + per-item actions (Reschedule, Regenerate, Generate AI Image via Gemini), Google OAuth via Supabase, Admin Settings module with React Query, default 3-step welcome email flow, and a brand-color extraction pipeline that reads external CSS.",
      "Built the Careers page on smicolon.com with a Strapi-powered Jobs component, and helped enable i18n across all dynamic sections (EN + DE).",
      "Day-to-day delivery using AI coding tools (Claude Code, Codex) inside PR-reviewed Git workflows, Figma → pixel-perfect implementation, and Linear-managed sprints.",
    ],
  },
  {
    company: "Independent Practice",
    role: "Self-Training Frontend Developer",
    dates: "May 2024 – Sep 2025",
    location: "Cairo",
    summary:
      "Self-taught engineer preparing for professional frontend work — shipped responsive React apps and learned production fundamentals.",
    bullets: [
      "Improved Lighthouse performance scores by 30%+ on practice projects through code-splitting, lazy loading, and asset optimization.",
      "Enhanced accessibility using semantic HTML and ARIA roles, aligning with WCAG guidelines.",
      "Built responsive web applications across React, TypeScript, Tailwind CSS, and Bootstrap, learning clean component architecture and end-to-end delivery workflows.",
    ],
  },
];

export const education = {
  degree: "B.Sc. Agricultural Engineering",
  school: "Kafr El-Sheikh University",
  year: "2023",
};
