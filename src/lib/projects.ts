export type ProjectStatus = "production" | "personal";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  status: ProjectStatus;
  dates: string;
  stack: string[];
  highlight?: string;
  links?: {
    live?: string;
    repo?: string;
  };
  cover?: string;
  ndaSafe?: boolean;
};

export const heroProjects: Project[] = [
  {
    slug: "guardix-mobile",
    title: "Guardix Mobile App",
    tagline:
      "Enterprise mobile platform for security operations — shipped as project lead.",
    role: "Project Lead · Frontend",
    status: "production",
    dates: "Dec 2025 – Feb 2026",
    stack: ["React Native", "TypeScript", "Figma", "REST APIs"],
    highlight: "30+ production screens · AI Assistant features · iOS + Android",
    ndaSafe: true,
  },
  {
    slug: "smicolon-com",
    title: "Smicolon Marketing Site",
    tagline:
      "Multilingual Next.js marketing site with a live Strapi → Payload CMS migration on Cloudflare Workers.",
    role: "Full-stack Contributor",
    status: "production",
    dates: "Oct 2025 – Present",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Strapi",
      "Payload CMS",
      "Cloudflare Workers",
      "Neon Postgres",
    ],
    highlight: "EN + DE · ISR · CMS migration owner",
    links: { live: "https://smicolon.com" },
  },
  {
    slug: "brandbuddy",
    title: "Brandbuddy",
    tagline:
      "AI-powered marketing platform — content planning, AI image generation, and brand intelligence.",
    role: "Full-stack Contributor",
    status: "production",
    dates: "Mar 2026 – Present",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "React Query",
      "Tailwind",
    ],
    highlight: "AI Assistant · AI image gen · OAuth · Multilingual (DA)",
    ndaSafe: true,
  },
  {
    slug: "guardix-web",
    title: "Guardix Web Platform",
    tagline:
      "Full UI/UX revamp of the Guardix web product, built as a polished, responsive React app.",
    role: "Frontend Contributor",
    status: "production",
    dates: "Jul 2025 – Feb 2026",
    stack: ["React", "TypeScript", "Tailwind"],
    highlight: "Web App Design Revamp",
    ndaSafe: true,
  },
  {
    slug: "nft-app",
    title: "NFT Marketplace App",
    tagline:
      "Personal mobile NFT marketplace built end-to-end in Expo + TypeScript.",
    role: "Solo · Personal",
    status: "personal",
    dates: "2025",
    stack: ["Expo", "React Native", "TypeScript"],
    links: { repo: "https://github.com/Abd-Alrhmen/NFT-Application" },
  },
];

export type ArchivedProject = {
  name: string;
  stack: string[];
  url?: string;
};

export const archivedProjects: ArchivedProject[] = [
  {
    name: "McDonald's Web App",
    stack: ["React", "Tailwind", "Context API", "React Helmet"],
    url: "https://github.com/Abd-Alrhmen/mcdonalds-",
  },
  {
    name: "TechNest Store",
    stack: ["React", "TypeScript", "JavaScript"],
    url: "https://github.com/Abd-Alrhmen/TechNest-Store",
  },
  {
    name: "QuickPosts",
    stack: ["React", "TypeScript", "Vite"],
    url: "https://github.com/Abd-Alrhmen/quickposts",
  },
  {
    name: "SRM System",
    stack: ["React", "TypeScript", "Vite"],
    url: "https://github.com/Abd-Alrhmen/SRM-System",
  },
  {
    name: "To-Do App",
    stack: ["React", "TypeScript"],
    url: "https://github.com/Abd-Alrhmen/To-Do-App-React",
  },
  {
    name: "Image Slider",
    stack: ["React", "TypeScript"],
    url: "https://github.com/Abd-Alrhmen/Image-Slider-APP",
  },
  {
    name: "Bookmarks Manager",
    stack: ["JavaScript"],
    url: "https://github.com/Abd-Alrhmen/Bookmarks-Manager-Application",
  },
  {
    name: "Currency Converter",
    stack: ["JavaScript", "REST API"],
    url: "https://github.com/Abd-Alrhmen/Currency-Converter-With-API",
  },
  {
    name: "Password Generator",
    stack: ["JavaScript", "CSS"],
    url: "https://github.com/Abd-Alrhmen/App-password-Generator",
  },
  {
    name: "Events Manager",
    stack: ["JavaScript"],
    url: "https://github.com/Abd-Alrhmen/Events-Manager",
  },
  {
    name: "Alarab News",
    stack: ["JavaScript"],
    url: "https://github.com/Abd-Alrhmen/Alarab-News",
  },
  {
    name: "Tic-Tac-Toe",
    stack: ["JavaScript"],
    url: "https://github.com/Abd-Alrhmen/Tic-Tac-Toe-Game",
  },
];
