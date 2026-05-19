export type SkillTier = "production" | "regular" | "working";

export type SkillCategory = {
  title: string;
  tier: SkillTier;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Production",
    tier: "production",
    description: "Daily stack — used in shipped, customer-facing code.",
    skills: [
      "React",
      "Next.js (App Router · ISR · next/image)",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React Query",
      "React Router",
      "Context API",
      "Figma → pixel-perfect",
      "Git / GitHub / PR reviews",
      "Performance optimization",
      "Accessibility (WCAG · ARIA)",
      "Claude Code (AI-assisted dev)",
    ],
  },
  {
    title: "Regular Use",
    tier: "regular",
    description: "Real production work — less central but well-practiced.",
    skills: [
      "Strapi CMS",
      "Payload CMS",
      "Lexical rich-text renderer",
      "Supabase (Auth · Edge Functions · Storage)",
      "Google OAuth",
      "REST API integration",
      "i18n (EN / DE / DA)",
      "Gemini API",
      "Codex",
      "Lovable",
      "Expo",
    ],
  },
  {
    title: "Working Knowledge",
    tier: "working",
    description: "Touched on real work, building deeper expertise.",
    skills: [
      "Cloudflare Workers",
      "Cloudflare R2",
      "Neon Postgres",
      "AWS SES",
      "DNS / Domain config",
      "Bootstrap",
    ],
  },
];

export const learning = [
  "SOLID Principles",
  "Design Patterns",
  "Data Structures & Algorithms",
  "Advanced Figma",
];
