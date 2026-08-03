# niteshsaini.com

Next.js 14 (App Router) + Tailwind CSS portfolio, built for SEO and static
generation, deploy target: Vercel.

## Design concept

- **Palette**: cool off-white background, near-black ink text, graphite
  secondary, and a single precision-blue signal color (`#2454FF`) — read as
  an annotation-tool overlay color, not a generic accent.
- **Signature element**: corner-bracket frames on cards and stat chips,
  echoing bounding-box annotation UIs (YOLO / SAM). Appears on hover/focus
  only, so it reads as instrumentation rather than decoration.
- **Type**: Inter for headings/body, JetBrains Mono for nav labels, eyebrows,
  metrics, and tags — signals "this person handles precision data."

## Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Structure

```
app/
  page.tsx              home
  work/page.tsx          work index
  work/[slug]/page.tsx    per-project case study (data-driven for now)
  publications/page.tsx
  about/page.tsx
  resume/page.tsx
  sitemap.ts              auto-generated sitemap.xml
  robots.ts               auto-generated robots.txt
content/
  data.ts                 single source of truth: projects, publications, nav
components/
  SiteHeader.tsx, SiteFooter.tsx, ProjectCard.tsx, StatChip.tsx
```

## To do before launch

1. Fill in real metrics/summaries for **nCount**, **VanSaathi/CommFor**, and
   **RatiFi** in `content/data.ts` (currently placeholders marked `TBD`).
2. Once each project's case study content is mapped out, either expand the
   `summary` field or migrate `work/[slug]/page.tsx` to read full MDX files
   from `content/work/*.mdx` (the `@next/mdx` dependency is already wired up
   in `next.config.mjs` for this).
3. Drop a resume PDF at `public/resume.pdf`.
4. Add a real `public/og-image.png` (1200×630) for social previews.
5. Update `mailto:`, GitHub, and LinkedIn links in `components/SiteFooter.tsx`.
6. Point `niteshsaini.com` DNS at Vercel and deploy (`vercel --prod` or via
   the Vercel dashboard's GitHub integration — SSL is automatic).

## SEO notes

- Every route uses the App Router `generateMetadata`/`metadata` export for
  unique titles + descriptions (see `/work/[slug]`).
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically — no extra package needed.
- All routes are statically generated (`generateStaticParams` in
  `work/[slug]`), so pages ship as pre-rendered HTML.
- Swap `next/image` in once real project screenshots are added, to get
  automatic responsive images and avoid layout shift.
