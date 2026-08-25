# arna-portfolio

Arna Ghosh's personal site — React + Vite + Tailwind.

Structure follows [rajlaxmi.github.io](https://github.com/Rajlaxmi/rajlaxmi.github.io) (React +
Vite + Tailwind, hash-routed, scroll-reveal). The page layout — a real multi-page site rather than
one long scroll, each subpage just a big title over a flat list — and the visual design
(monochrome palette, Inter body type, an old-style serif for the name, the dictionary-entry home
page, footnote-style social links) match [daivikpatel.me](https://www.daivikpatel.me/), which is
itself a Next.js multi-page site (`/`, `/research`, `/writing`, `/experiences`, ...).

## Local development

```
npm install
npm run dev
```

## Structure

- `src/pages/` — one file per route: `Home` (`/`), `PublicationsPage` (`/publications`),
  `ResearchPage` (`/research`), `NotFound` (everything else). Each wraps its content in `Layout`.
- `src/components/Layout.tsx` — Header + page content + Footer; also resets scroll position and
  wires up scroll-reveal on every page mount.
- `src/components/Hero.tsx` — dictionary-entry intro on the home page (name, phonetic, numbered
  definitions, footnote social links).
- `src/components/PageHeading.tsx` — the big-title-plus-lead shell used by the Publications and
  Research pages.
- `src/content/` — publications, research directions, and social links as plain data; edit these
  to update the site's content, no markup to touch.

Routing uses `HashRouter` (`/#/research`, etc.) so GitHub Pages can serve it with zero server
config. The header's "contact" link isn't a route — it smooth-scrolls to the footer (`id="contact"`)
on whichever page you're on.

## Design system

Tokens live as CSS custom properties in `src/index.css`, exposed to Tailwind in
`tailwind.config.js` as `bg`, `surface`, `fg`, `muted`, `faint`, `rule`. Light and dark are the
same tokens with different values, switched by a `dark` class on `<html>` (see
`src/hooks/useTheme.ts`). No accent color — hover states move from gray to black/white only.

## Deployment

Not yet wired to GitHub Pages. To publish to `arnaghosh.github.io`, either point that repo's
Pages settings at a `gh-pages` branch built from here (`npm run deploy`, via the `gh-pages`
package already in devDependencies), or copy this project into the `arnaghosh.github.io` repo
directly and add a GitHub Actions workflow that runs `npm run build` and publishes `dist/`.
