export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  dates: string;
  stack: string[];
  links?: { live?: string; repo?: string };
  ndaSafe?: boolean;
  context: string[];
  contributions: string[];
  highlights: CaseStudySection[];
  impact: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "guardix-mobile": {
    slug: "guardix-mobile",
    title: "Guardix Mobile App",
    oneLiner:
      "Enterprise React Native app for security operations — shipped end-to-end with the team.",
    role: "Frontend · React Native",
    dates: "Dec 2025 – Feb 2026",
    stack: [
      "React Native",
      "TypeScript",
      "Figma",
      "REST APIs",
      "Component Architecture",
    ],
    ndaSafe: true,
    context: [
      "Guardix is a workforce-management product for security guard operations. The mobile app is the front-line tool guards use on shift.",
      "I owned the frontend implementation across the screen catalogue — translating Figma specs into production React Native screens, integrating with the backend, and keeping component consistency across the app.",
    ],
    contributions: [
      "Shipped 30+ production screens in three months, including AI Assistant and AI FAB Behavior, full Tickets History flow (pending / solving / closed), Inbox with chat details, Profile with tabbed sub-views (Overview / Activities / Documents / Notes), Reports, Payroll, Inventory, Documents, Reminders, Notifications, Settings, Info Center, Department, Skill Set, Expenses & Deductions, Feed, Feedback, Policies, and Availability.",
      "Owned API integration for the Activities screen, replacing mock data with the real backend contract.",
      "Built reusable shared components and enforced consistent styling so new screens compose from a stable base.",
      "Handled production bugs across screens (e.g. ThreadLine rendering edge-case on first reply) — diagnosed root causes rather than patching symptoms.",
      "Coordinated with design and backend through Linear and PR review, keeping the cycle tight on a fast-moving roadmap.",
    ],
    highlights: [
      {
        heading: "Figma → pixel-perfect",
        body: [
          "Every screen translated directly from the Guardix Figma file. Disciplined about matching spacing, color tokens, typography ramp, and component states (loading / empty / error) — not just the happy path.",
        ],
      },
      {
        heading: "AI features in production mobile",
        body: [
          "Implemented the AI Assistant chat-history screen and the AI FAB behavior surface. Mobile AI UX has its own constraints (thumb reach, latency budgets, streaming), and these shipped as part of the standard guard workflow rather than as a side feature.",
        ],
      },
      {
        heading: "Cross-platform discipline",
        body: [
          "iOS and Android, tested for visual parity on both. Touch targets, gesture surfaces, and safe-area handling reviewed per platform.",
        ],
      },
    ],
    impact: [
      "30+ production screens shipped in three months",
      "iOS and Android delivery",
      "Project completed on schedule (Feb 2026 target hit)",
    ],
  },

  "smicolon-com": {
    slug: "smicolon-com",
    title: "Smicolon Marketing Site",
    oneLiner:
      "Multilingual Next.js site with a live Strapi → Payload CMS migration on Cloudflare Workers.",
    role: "Frontend + CMS Contributor",
    dates: "Oct 2025 – Present",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Strapi",
      "Payload CMS",
      "Cloudflare Workers",
      "Neon Postgres",
      "Cloudflare R2",
      "AWS SES",
      "ISR",
    ],
    links: { live: "https://smicolon.com" },
    context: [
      "smicolon.com is the public marketing site for Smicolon — multilingual (EN / DE), content-heavy, with services pages, blog, careers, and value-project lead-capture.",
      "Two parallel workstreams: performance + UX improvements on the live site, and a full CMS platform migration from Strapi to Payload running on Cloudflare Workers.",
    ],
    contributions: [
      "Built the Careers page end-to-end with a dynamic Strapi-powered Jobs component (no more hardcoded listings).",
      "Helped enable i18n across all dynamic Pages sections — adding a locale no longer overwrites the English content.",
      "Worked on the site-wide performance pass: image AVIF/WebP via next/image, removed render-blocking scripts (ReCAPTCHA, observability), reduced client bundle, optimized Strapi data fetching with caching + dedup, enabled ISR.",
      "Contributed to the multi-phase Payload CMS migration: helped validate Payload + Neon Postgres + R2 on Cloudflare Workers (Phase 0), built the Lexical → JSX rich-text renderer with custom converters for uploads and links (Phase 1), and am working on Phase 2 — decoupling Strapi at runtime (email adapter, ValueProjects collection, afterChange notification hooks, form migration, Strapi client decommission, ESLint guardrails).",
      "Helped split staging vs prod R2 buckets and replaced silent env-var fallbacks with loud failures during infra hardening.",
    ],
    highlights: [
      {
        heading: "CMS migration as a real engineering project",
        body: [
          "Treated as proper infra work — phased rollout, runtime validation before code migration, type-safe converters between Lexical and React, hooks that run on content changes instead of webhook glue, and explicit verification that no Strapi runtime traffic remained after cutover.",
        ],
      },
      {
        heading: "Performance with discipline",
        body: [
          "Performance gains came from removing what shouldn't ship (render-blocking third-parties, oversized images, unnecessary client code) and adding what should (ISR, dedup, modern formats). Measurable, not anecdotal.",
        ],
      },
      {
        heading: "i18n that actually works",
        body: [
          "Localizing 'some fields' is easy. Localizing every dynamic section — banners, galleries, text blocks, services — without breaking the existing English content takes a schema design that respects locale separation. Shipped exactly that.",
        ],
      },
    ],
    impact: [
      "Live on smicolon.com (EN + DE)",
      "Performance work measurably reduced bundle size and improved server response",
      "Strapi → Payload migration on track to fully decommission Strapi at runtime",
    ],
  },

  brandbuddy: {
    slug: "brandbuddy",
    title: "Brandbuddy",
    oneLiner:
      "AI marketing platform — content planning, AI image generation, and brand intelligence.",
    role: "Frontend + Supabase Contributor",
    dates: "Mar 2026 – Present",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "Supabase Edge Functions",
      "Gemini API",
      "React Query",
      "Tailwind CSS",
      "i18n",
    ],
    ndaSafe: true,
    context: [
      "Brandbuddy is an AI-driven marketing tool for small brands — generates a content plan, drafts copy, produces brand-aligned imagery, and runs email flows.",
      "I work across the stack: AI feature wiring, auth flows, settings, internationalization, and bug fixes that span frontend and Supabase edge functions.",
    ],
    contributions: [
      "Built the AI Assistant drawer including the welcome screen with dynamic, context-aware suggestion cards (upcoming-holiday alerts, scheduling gaps, etc.).",
      "Shipped the AI-powered 1-year content plan feature end-to-end, including per-item actions in the plan review dialog: Reschedule (date/time picker with toast confirmation), Generate AI Image (Gemini image-generation edge function — gemini-3.1-flash-image-preview), and Regenerate Content.",
      "Implemented Google OAuth sign-in via Supabase Auth, fixed the email-verification flow for first-time signups, and polished the signup UX with a Google logo on auth buttons.",
      "Built the full Admin Settings module (Account, Security, Team, Social Accounts, Newsletter) wired with React Query for cache-correct mutations.",
      "Added a default 3-step welcome email flow that auto-creates on signup so new users immediately benefit from automation without manual setup.",
      "Improved the brand-color extraction pipeline to read external CSS stylesheets when inline CSS variables or theme-color aren't available, with a CTA-button color fallback. Unblocked extraction for monochrome-logo sites like smicolon.com itself.",
      "Fixed the language switcher (Danish default, EN/DA), unified header and footer switcher behavior, and prevented layout breakage on first interaction.",
      "Rebuilt the landing page and onboarding flow from the Figma design, making sure the pre-signup content-generation preview shows before the sign-up step.",
    ],
    highlights: [
      {
        heading: "AI features that ship to real users",
        body: [
          "The AI image generation isn't a demo button — it's wired through a Supabase edge function calling Gemini, returns to the plan-review dialog with optimistic UX, and handles the error paths. Same for content regeneration.",
        ],
      },
      {
        heading: "Brand intelligence pipeline",
        body: [
          "The brand-color extractor was returning empty colors for sites with monochrome logos. Investigated the failure mode, expanded the source set to include external CSS parsing, and added a CTA-button color fallback so the pipeline degrades gracefully instead of returning nothing.",
        ],
      },
      {
        heading: "Full-stack ownership",
        body: [
          "When the email-verification bug came in from a customer, the path forward needed Supabase config, server-side hooks, and frontend feedback all aligned. Resolved end-to-end rather than handing it off.",
        ],
      },
    ],
    impact: [
      "AI Assistant, AI plan generation, and AI image generation live in production",
      "Google OAuth + email auth flows hardened against real reported failures",
      "Multilingual (Danish-default) shipped",
    ],
  },

  "guardix-web": {
    slug: "guardix-web",
    title: "Guardix Web Platform",
    oneLiner:
      "Full UI/UX revamp of the Guardix web app — polished, responsive, production-ready.",
    role: "Frontend Contributor",
    dates: "Jul 2025 – Feb 2026",
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    ndaSafe: true,
    context: [
      "Guardix Web is the operator-facing companion to the Guardix Mobile App — used by managers and admins to schedule, monitor, and analyze shifts.",
      "The project was a full revamp: new Figma UI built from scratch using the existing live system as a reference, then implementation across all modules with mobile responsiveness.",
    ],
    contributions: [
      "Built reusable UI components for the revamped design system and shipped user-facing features across modules.",
      "Implemented mobile-responsive layouts so the operator dashboard works from desktop down to phone.",
      "Applied the same component-architecture and pixel-perfect discipline used on the mobile build, keeping visual consistency across the two products.",
    ],
    highlights: [
      {
        heading: "Cross-product consistency",
        body: [
          "Shared design language and component patterns with the mobile app — so a guard's experience in Mobile and an admin's experience in Web feel like one product, not two.",
        ],
      },
      {
        heading: "Polished revamp, not just functional",
        body: [
          "The brief was a 'polished, user-friendly experience across all modules' — and the bar was visual quality on par with modern SaaS dashboards, not lift-and-shift of the legacy UI.",
        ],
      },
    ],
    impact: [
      "Project completed Feb 2026",
      "Operator and admin tooling for Guardix in production",
    ],
  },

  "nft-app": {
    slug: "nft-app",
    title: "NFT Marketplace App",
    oneLiner:
      "Personal mobile NFT marketplace built end-to-end in Expo + TypeScript.",
    role: "Solo · Personal",
    dates: "2025",
    stack: ["Expo", "React Native", "TypeScript", "File-based routing"],
    links: { repo: "https://github.com/Abd-Alrhmen/NFT-Application" },
    context: [
      "A personal project to deepen mobile fundamentals outside the company codebase — built in Expo with the file-based router and TypeScript.",
      "Useful as an honest sandbox: smaller scope than work projects, but solo-owned end to end.",
    ],
    contributions: [
      "Set up the Expo project with TypeScript and file-based routing under /app.",
      "Built reusable UI components, constants, and typed data shapes for the marketplace surfaces.",
      "Practiced the discipline of clean component boundaries on a project where I am the only reviewer.",
    ],
    highlights: [
      {
        heading: "Why it's in the portfolio",
        body: [
          "Solo project where I owned the architecture from empty repo. Good complement to the team-built Guardix Mobile app — same toolchain, different operating mode.",
        ],
      },
    ],
    impact: ["Public repo for review", "Personal mobile-fundamentals practice"],
  },
};

export const caseStudySlugs = Object.keys(caseStudies);
