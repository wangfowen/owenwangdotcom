import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, type Section } from './posts';
import { SECTIONS } from '../site';

/** RSS feed for a section, kept at the same URLs as the old Jekyll site. */
export async function sectionFeed(section: Section, context: APIContext) {
  const s = SECTIONS[section];
  const posts = await getPosts(section);
  return rss({
    title: s.title,
    description: s.description,
    site: new URL(`/${section}/`, context.site),
    items: posts.map((p) => {
      const d = p.data as Record<string, any>;
      return {
        title: d.title ?? `${d.food} · ${d.place}`,
        pubDate: p.data.date,
        link: `/${section}/${p.id}`,
        description: d.tagline,
        // Markdown posts have pre-rendered HTML; MDX posts fall back to their tagline.
        content: p.rendered?.html,
      };
    }),
  });
}
