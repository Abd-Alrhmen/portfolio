# Abdulrahman Hassan — Portfolio

Personal portfolio of **Abdulrahman Ahmed Hassan**, Frontend Engineer at [Smicolon](https://smicolon.com).

Built in Next.js 16 (App Router), TypeScript, Tailwind v4, and Framer Motion. Dark-first design, content driven by typed data sources, fully responsive, accessible, and statically generated.

## Stack

- **Framework:** Next.js 16 (App Router, RSC, ISR)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, CSS variables, custom design tokens
- **Motion:** Framer Motion (reduced-motion safe)
- **Icons:** Lucide
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel-ready (any Node host works)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build  # production build
npm start      # serve the production build
npm run lint   # ESLint
```

## Structure

```
src/
  app/
    layout.tsx          # root metadata, fonts, navbar/footer
    page.tsx            # single-page sections
    work/[slug]/        # case-study pages (statically generated)
    opengraph-image.tsx # dynamic OG card
    icon.tsx            # dynamic favicon
    sitemap.ts          # generated sitemap.xml
    robots.ts           # generated robots.txt
    not-found.tsx       # styled 404
  components/
    layout/             # Navbar, Footer
    sections/           # Hero, Work, Experience, Skills, About, Contact
    ui/                 # ProjectCard, Chip, SectionHeading, CopyEmail
  lib/
    site-config.ts      # identity, social, status
    projects.ts         # hero + archived projects (typed)
    case-studies.ts     # per-project case-study content (typed)
    experience.ts       # work history (typed)
    skills.ts           # 3-tier skills model (typed)
    cn.ts               # className helper (clsx + tailwind-merge)
public/
  cv.pdf                # resume PDF
legacy/                 # the previous vanilla HTML/CSS/JS portfolio, preserved
```

## Editing content

All content lives as typed exports in `src/lib/`. To update a project description, skill, experience entry, or contact detail, edit the relevant `.ts` file — no component changes required.

- `src/lib/site-config.ts` — name, title, tagline, social links, resume URL
- `src/lib/projects.ts` — hero project cards + the collapsed "Other Work" grid
- `src/lib/case-studies.ts` — long-form case studies for each `/work/[slug]` page
- `src/lib/experience.ts` — work history shown in the Experience timeline
- `src/lib/skills.ts` — Production / Regular / Working-Knowledge skill tiers + currently-learning list

## Design system

Defined as CSS variables in `src/app/globals.css`:

| Token            | Value                | Usage                  |
| ---------------- | -------------------- | ---------------------- |
| `--bg`           | `#0a0a0b`            | Page background        |
| `--bg-elev`      | `#111114`            | Cards, sections        |
| `--bg-elev-2`    | `#15151a`            | Hover states           |
| `--fg`           | `#e6e6e9`            | Primary text           |
| `--fg-muted`     | `#9aa0a6`            | Body copy              |
| `--fg-dim`       | `#6b7280`            | Tertiary text          |
| `--accent`       | `#6366f1`            | Brand / CTA            |
| `--accent-hover` | `#818cf8`            | Hover states           |
| `--border`       | `rgba(255,255,255,0.08)` | Subtle borders     |

Typography is Geist Sans (body) + Geist Mono (labels, code-feel chips), loaded via `next/font/google`.

## Accessibility

- Skip-to-content link
- Semantic landmarks (`<main>`, `<header>`, `<footer>`, `<section>`)
- Visible focus rings on dark theme
- Reduced-motion respected on every Framer Motion animation
- Color contrast tuned for WCAG AA on body, AAA on hero headline

## Legacy site

The original vanilla HTML/CSS/JS portfolio is preserved under `legacy/` for reference. It is not served by the Next.js app.

## License

Personal portfolio — content (copy, CV, project descriptions) © Abdulrahman Hassan. The code patterns can be reused freely.
