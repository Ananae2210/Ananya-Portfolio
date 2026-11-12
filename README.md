# Ananya Asthana — Portfolio

Personal UI/UX and visual design portfolio, built with [Astro](https://astro.build) and deployed on Vercel.

Design source: the "Ananya Asthana — Portfolio" Figma file ("Teal Signal" design system; Anton / Inter / IBM Plex Mono).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

- `src/styles/global.css` — design tokens (colours, type scale, spacing) and shared components
- `src/data/site.ts` — name, email, links, resume URL
- `src/data/projects.ts` — the four case studies shown on Home and Work
- `src/pages/` — one file per page
- `public/images/` — screens exported from Figma

Type rule: every font size is even; desktop minimum 12px, mobile minimum 8px.
