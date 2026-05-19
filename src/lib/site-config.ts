export const siteConfig = {
  name: "Abdulrahman Hassan",
  title: "Frontend Engineer | React, Next.js & React Native",
  tagline:
    "Building production web and mobile products at Smicolon — shipping React Native apps as project lead, migrating CMS infrastructure to Cloudflare Workers, and integrating AI features end-to-end.",
  shortBio:
    "Frontend Engineer at Smicolon, based in Cairo. I ship production React, Next.js and React Native apps, lead infrastructure migrations, and work daily with AI coding tools.",
  location: "Cairo, Egypt",
  availability: "Open to senior frontend opportunities",
  email: "abdulrahman.frontend@gmail.com",
  workEmail: "abdulrahman.hassan@smicolon.com",
  phone: "+20 100 743 4698",
  resumeUrl: "/cv.pdf",
  social: {
    github: "https://github.com/Abd-Alrhmen",
    linkedin: "https://www.linkedin.com/in/abdulrahman-ahmed-hassan/",
    whatsapp: "https://wa.me/201007434698",
  },
  url: "https://abd-alrhmen.github.io/portfolio",
  techStack: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Strapi / Payload",
    "Supabase",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
