# arna-portfolio

Arna Ghosh's personal site — React + Vite + Tailwind.

Structure follows [rajlaxmi.github.io](https://github.com/Rajlaxmi/rajlaxmi.github.io) (sticky-rail
sections, scroll-reveal, hash-routed single page). The visual design — monochrome palette, Inter
body type, an old-style serif for the name, the dictionary-entry hero, footnote-style social
links — matches [daivikpatel.me](https://www.daivikpatel.me/).

## Local development

```
npm install
npm run dev
```

## Structure

- `src/components/Hero.tsx` — dictionary-entry intro (name, phonetic, numbered definitions,
  footnote social links).
- `src/components/Section.tsx` — the sticky numbered-rail layout reused by About, Publications,
  and Research.
- `src/content/` — publications, research directions, and social links as plain data; edit these
  to update the site's content, no markup to touch.

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
