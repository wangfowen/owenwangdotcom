// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import stripDrafts from './integrations/strip-drafts.mjs';

export default defineConfig({
  site: 'https://www.owenwang.com',
  // Emit /blog/my-post.html (not /blog/my-post/index.html) so URLs match the old Jekyll site
  // exactly; Netlify serves /blog/my-post from my-post.html.
  build: { format: 'preserve' },
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/embed/') && !page.includes('/learningnight/'),
    }),
    stripDrafts(),
  ],
  // Pre-bundle Leaflet (used only by the travel map) so the dev server doesn't 504 on it.
  vite: { optimizeDeps: { include: ['leaflet'] } },
  markdown: {
    // Old posts mark every external link with kramdown's {:target="_blank"}; do it globally instead.
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
    shikiConfig: { theme: 'github-light' },
  },
});
