export const siteConfig = {
  name: "Abdulrahman Hassan",
  title: "Frontend Developer | React, Next.js & React Native",
  tagline:
    "Junior frontend developer at Smicolon — shipping production React, Next.js and React Native, contributing to a CMS migration on Cloudflare Workers, and building AI features end-to-end with modern tooling.",
  shortBio:
    "Junior frontend developer at Smicolon, based in Cairo. I ship production React, Next.js and React Native, work across the stack on real product features, and use AI coding tools every day.",
  location: "Cairo, Egypt",
  availability: "Open to frontend opportunities",
  email: "abdulrahman.frontend@gmail.com",
  workEmail: "abdulrahman.hassan@smicolon.com",
  phone: "+20 100 743 4698",
  resumeUrl: "/cv.pdf",
  social: {
    github: "https://github.com/Abd-Alrhmen",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ahmed-60b468262/",
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
