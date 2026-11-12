# owenwang.com

Astro site, deployed on Netlify (free tier) from `master`.

```
npm install
npm run dev        # http://localhost:4321 — drafts are visible here
npm run build      # production build into dist/
npm run preview    # serve dist/
```

## Writing a post

```
npm run new -- "Title of Post"            # blog (default)
npm run new -- "Dish Name" food
npm run new -- "Dish Name" travel
```

This creates `src/content/<section>/YYYY-MM-DD-slug.mdx` with `draft: true`. Remove `draft` (or set it
to `false`) to publish. The URL is `/<section>/<slug>`.

In `.mdx` posts these components work without importing:
`<Figure>`, `<Row>`, `<Callout>`, `<YouTube>` (see `src/components/`). To add your own, create an
`.astro` component and register it in `src/components/mdx.ts`. Put a post's images in
`src/content/<section>/images/` and import them for automatic resizing, or use paths under `public/`.
