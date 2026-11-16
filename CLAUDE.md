# Portfolio — project conventions

Personal portfolio for Ruth Wossen Bekele (software engineer, Luxembourg). Next.js App Router + TypeScript (strict) + Tailwind CSS v4, statically rendered, deployed on Vercel free tier.

## Commands
- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — production build (must pass before every commit)
- `npm run lint` — ESLint + `check:confidential` (must pass before every commit)
- `npm run check:confidential` — scans `src/` and `public/` for leaked confidential content
- `npm run start` — serve the production build

## Where content lives
- **All text and links live in `src/content/site.ts`**, typed by `src/content/types.ts`. Components never hard-code copy.
- To add a project, add one object to `projects` in `site.ts`.
- `openToWork` in `site.ts` toggles the "Open to SWE roles in Luxembourg" badge.
- CV download: `public/Ruth_Wossen_Bekele_CV.pdf` (must be the version **without** a phone number).

## Content rules
- Source of truth: the resume (`resume-source.pdf`, git-ignored, local only). Never invent facts, metrics, dates or links.
- Unknowns use string placeholders starting with `TODO` (e.g. `"TODO: confirm GitHub URL"`). Find them with `grep -rn "TODO" src/content`. TODO links are hidden in production builds.
- **No phone number anywhere.**
- **Amazon confidentiality:** resume-level detail or less. No internal project/system names, no internal capacity or volume numbers, no architecture diagrams or screenshots. Banned terms are listed in the git-ignored `.confidential-terms` file (keep a local copy; do not commit it). `check:confidential` enforces both.

## Code conventions
- Server components by default; `"use client"` only for the theme toggle and mobile nav.
- No dependencies beyond next/react/react-dom (+ scaffold dev deps) without explicit approval. No animation or theme libraries; CSS-only motion; fonts via `next/font`.
- Styling: Tailwind utilities backed by CSS-variable design tokens in `src/app/globals.css`. Use the token classes (`bg-bg`, `text-ink`, `text-muted`, `text-accent`, `border-rule`, …), never raw hex values in components.
- One accent colour (deep teal). Every colour pair must meet WCAG AA in both themes. Current ratios (text on bg / on surface):
  - Light: ink 16.1 / 14.9, muted 7.3 / 6.7, accent 7.0 / 6.5, accent-ink on accent 7.5
  - Dark: ink 14.8 / 13.4, muted 7.4 / 6.7, accent 8.3 / 7.5, accent-ink on accent 8.6
- Theme: inline script in `<head>` (`src/components/layout/themeScript.ts`) applies a stored `data-theme`; otherwise CSS follows `prefers-color-scheme`. Dark tokens are duplicated in `globals.css` for both cases; keep them in sync.
- Fonts: Fraunces (display, `font-display`) + Inter (body, `font-sans`) via `next/font/google` in `src/app/layout.tsx`.
- Cache Components is on: avoid `new Date()`/`Math.random()` in server components (breaks static prerendering).
- Accessibility: semantic landmarks, one `h1`, sections `aria-labelledby` their heading, visible focus states, skip link, keyboard-operable, `prefers-reduced-motion` respected.
- Commits: conventional messages (`feat:`, `fix:`, `chore:`, `docs:`), one per build stage/section.

@AGENTS.md
