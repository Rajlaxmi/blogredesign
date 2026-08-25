/**
 * Resolves a public/ asset path against the deployed base URL.
 *
 * Vite's `base` config (see vite.config.ts) rewrites asset URLs it processes
 * through the module graph, but a raw string like `/arna.jpg` in JSX is
 * never touched — it stays an absolute root path, which breaks once the
 * site is served from a subpath (e.g. raila.io/blogredesign/). Route this
 * through here instead of hardcoding a leading slash.
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
