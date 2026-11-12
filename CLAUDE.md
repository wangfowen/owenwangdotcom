# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website (owenwang.com): an Astro 7 static site deployed on Netlify (build config in `netlify.toml`, Node 22). Migrated from Jekyll in Nov 2026; URLs were kept identical, so don't change slugs or `build.format: 'preserve'`.

## Commands

```
npm run dev       # dev server; drafts render here only
npm run build     # static build to dist/
npm run preview   # serve dist/
npm run new -- "Title" [blog|food|travel]   # scaffold a draft .mdx post
```

No tests or linter. `astro check` needs `@astrojs/check`, which isn't installed.

## Architecture

- **Content collections** (`src/content.config.ts`): `blog`, `food`, `travel`, one file per post named `YYYY-MM-DD-slug.md(x)`. The collection id (the URL slug) is the filename minus its date prefix. `draft: true` hides a post from production builds (`integrations/strip-drafts.mjs` also deletes the draft's images from `dist/`, so keep a draft's images in their own folder, e.g. `public/blog/images/<slug>/`), and `featured: true` puts it in "Best of". Older posts are `.md` with raw HTML; new ones should be `.mdx`.
- **MDX components** are injected globally through `src/components/mdx.ts` (`Figure`, `Row`, `Callout`, `YouTube`), so posts don't import them.
- **Travel** posts need `place`, `food`, `country`, `city`, `coords: [lat, lng]` and a local `image`. `src/lib/travel.ts` numbers stops in date order and groups consecutive same-country stops into "chapters". `TravelMap.astro` is a client-side Leaflet map on OpenStreetMap tiles. Each post body uses `## Place: …` / `## Food: …` headings, which the travel layout styles as labels.
- **Images**: cover and colocated images live in `src/content/<section>/images/` and are optimized by `astro:assets`. Everything under `public/` is served unchanged at its old path (`/images/`, `/blog/images/`, `/js/`, `/css/`, `/scheem/`, `/learningnight/`, `/kitchen_resume/`, …).
- **Image sizing matches the original site**: the text column is 650px. In posts, `<img height="400">` attributes set the display height, as they did in Jekyll (the global `img { height: auto }` deliberately skips images with only a `height` attribute). On screens under 40rem those images scale to fit. Legacy `.row` images keep their own sizes and are spread evenly. Food photos are capped at 400px tall. `responsiveWidths()` in `src/lib/images.ts` stops `<Image>` from upscaling small originals.
- **Legacy interactive posts** (`20-13-hindsight`, `20-14-hindsight`, `grovember-2`, `lean-traveling`) load jQuery/D3 scripts and CSS from `public/js` and `public/css` inside the markdown. `grovember.js` measures `.post`, which is why the post body has that class. The checklists in `lean-traveling` are iframed from `src/pages/embed/`.
- **Feeds** keep their old URLs: `/feed.xml` (blog), `/food.xml`, `/travel.xml`, generated in `src/lib/feed.ts`.
- **Resume** (`/resume/`) is rendered from `src/data/resume.yaml`. Entries marked `hidden: true` were commented out on the old page and are kept for reference. The page has a print stylesheet; "Save as PDF" calls `window.print()`.
- **Look**: the palette keeps the original site's colors (blue `--page` background, off-white `.sheet` for content, `#367CA9` links), defined as tokens at the top of `src/styles/global.css`. There's no dark mode. The home page is `bare` (no sheet or header). The nav deliberately links only Writing and Travel; `/food/`, `/resume/` and `/cheff/` exist but aren't linked from the site.
- Markdown runs on the unified/remark pipeline (`@astrojs/markdown-remark`) so `rehype-external-links` can make external links open in a new tab.
