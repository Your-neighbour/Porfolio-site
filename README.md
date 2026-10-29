# aaronxli.ca

Personal portfolio for Aaron Li. React + Vite + Tailwind, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Editing content

All copy (bio, experience, projects, skills) lives in `src/data/content.ts`. Layout code in
`src/components/` reads from it, so most updates never touch a component.

- Images go in `public/img/` (WebP, ~1400–1900px on the long edge). Reference them as
  `img/<file>.webp`; `src/lib/asset.ts` resolves the path.
- A project with no photos gets a generated placeholder. Set `fallbackIcon` to `load`, `car` or `chip`.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploying

Only pushes to `main` deploy. Work on a branch and merge to `main` when it's ready to go live.
