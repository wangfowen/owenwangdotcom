import { getCollection, type CollectionEntry } from 'astro:content';

export type Section = 'blog' | 'food' | 'travel';

/** Published posts, newest first. Drafts are included only in `astro dev`. */
export async function getPosts<S extends Section>(section: S): Promise<CollectionEntry<S>[]> {
  const posts = (await getCollection(section, (p) => import.meta.env.DEV || !p.data.draft)) as CollectionEntry<S>[];
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Older/newer neighbours within a newest-first list. */
export function neighbours<T extends { id: string }>(posts: T[], id: string) {
  const i = posts.findIndex((p) => p.id === id);
  return { older: posts[i + 1], newer: i > 0 ? posts[i - 1] : undefined };
}

export const formatDate = (d: Date, opts: Intl.DateTimeFormatOptions = { dateStyle: 'long' }) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });

/** Short title used for travel posts, which have a dish + place rather than a title. */
export const travelTitle = (p: CollectionEntry<'travel'>) => `${p.data.food} · ${p.data.place}`;
