// Resolves a file in /public against Vite's base URL so the site works
// whether it is served from the domain root or a sub-path.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\/+/, '');
  return encodeURI(`${base}${clean}`);
}
