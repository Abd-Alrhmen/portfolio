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
  /** Two-letter mark shown in the hero treatment when no cover image. */
  mark: string;
  /** Accent gradient stops used in the hero treatment. */
  gradient: [string, string];
  /** Short display string for the primary URL (e.g. `smicolon.com`). */
  urlLabel?: string;
};

export const heroProjects: Project[] = [
  {
    slug: "guardix-mobile",
    title: "Guardix Mobile App",
    tagline:
      "Enterprise React Native app for security operations — shipped end-to-end with the team.",
    role: "Frontend · React Native",
    status: "production",
    dates: "Dec 2025 – Feb 2026",
    stack: ["React Native", "TypeScript", "Figma", "REST APIs"],
    highlight: "30+ production screens · AI Assistant features · iOS + Android",
    ndaSafe: true,
    mark: "GM",
    gradient: ["#6366f1", "#a855f7"],
  },
  {
    slug: "smicolon-com",
    title: "Smicolon Marketing Site",
    tagline:
      "Multilingual Next.js marketing site with a live Strapi → Payload CMS migration on Cloudflare Workers.",
    role: "Frontend + CMS",
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
    highlight: "EN + DE · ISR · Strapi → Payload migration",
    links: { live: "https://smicolon.com" },
    urlLabel: "smicolon.com",
    mark: "SM",
    gradient: ["#6366f1", "#06b6d4"],
  },
  {
    slug: "brandbuddy",
    title: "Brandbuddy",
    tagline:
      "AI marketing platform — content planning, AI image generation, and brand intelligence.",
    role: "Frontend + Supabase",
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
    mark: "BB",
    gradient: ["#6366f1", "#ec4899"],
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
    mark: "GW",
    gradient: ["#6366f1", "#14b8a6"],
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
    urlLabel: "github.com/Abd-Alrhmen/NFT-Application",
    mark: "NF",
    gradient: ["#6366f1", "#f59e0b"],
  },
];

export type ArchivedProject = {
  name: string;
  stack: string[];
  live?: string;
  repo?: string;
  image?: string;
};

export const archivedProjects: ArchivedProject[] = [
  {
    name: "McDonald's Web App",
    stack: ["React", "Tailwind", "Context API", "React Helmet"],
    live: "https://mcdonalds-three.vercel.app/",
    repo: "https://github.com/Abd-Alrhmen/mcdonalds-",
    image: "/work/archive/mcdonalds.png",
  },
  {
    name: "TechNest Store",
    stack: ["React", "TypeScript", "JavaScript"],
    live: "https://abd-alrhmen.github.io/TechNest-Store/",
    repo: "https://github.com/Abd-Alrhmen/TechNest-Store",
    image: "/work/archive/technest.png",
  },
  {
    name: "QuickPosts",
    stack: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/Abd-Alrhmen/quickposts",
  },
  {
    name: "SRM System",
    stack: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/Abd-Alrhmen/SRM-System",
  },
  {
    name: "To-Do App",
    stack: ["React", "TypeScript"],
    live: "https://abd-alrhmen.github.io/To-Do-App-React/",
    repo: "https://github.com/Abd-Alrhmen/To-Do-App-React",
    image: "/work/archive/todo.png",
  },
  {
    name: "Image Slider",
    stack: ["React", "TypeScript"],
    live: "https://abd-alrhmen.github.io/Image-Slider-APP/",
    repo: "https://github.com/Abd-Alrhmen/Image-Slider-APP",
    image: "/work/archive/image-slider.png",
  },
  {
    name: "Bookmarks Manager",
    stack: ["JavaScript"],
    live: "https://abd-alrhmen.github.io/Bookmarks-Manager-Application/",
    repo: "https://github.com/Abd-Alrhmen/Bookmarks-Manager-Application",
    image: "/work/archive/bookmarks.png",
  },
  {
    name: "Currency Converter",
    stack: ["JavaScript", "REST API"],
    live: "https://abd-alrhmen.github.io/Currency-Converter-With-API/",
    repo: "https://github.com/Abd-Alrhmen/Currency-Converter-With-API",
    image: "/work/archive/currency.png",
  },
  {
    name: "Password Generator",
    stack: ["JavaScript", "CSS"],
    live: "https://abd-alrhmen.github.io/App-password-Generator/",
    repo: "https://github.com/Abd-Alrhmen/App-password-Generator",
    image: "/work/archive/password.png",
  },
  {
    name: "Events Manager",
    stack: ["JavaScript"],
    live: "https://abd-alrhmen.github.io/Events-Manager/",
    repo: "https://github.com/Abd-Alrhmen/Events-Manager",
    image: "/work/archive/events.png",
  },
  {
    name: "Alarab News",
    stack: ["JavaScript"],
    repo: "https://github.com/Abd-Alrhmen/Alarab-News",
  },
  {
    name: "Tic-Tac-Toe",
    stack: ["JavaScript"],
    live: "https://abd-alrhmen.github.io/Tic-Tac-Toe-Game/",
    repo: "https://github.com/Abd-Alrhmen/Tic-Tac-Toe-Game",
    image: "/work/archive/tictactoe.png",
  },
];
