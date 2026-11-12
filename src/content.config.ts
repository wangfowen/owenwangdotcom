import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files are named YYYY-MM-DD-slug.md(x); the URL uses just the slug (matches the old Jekyll permalinks).
const loader = (dir: string) =>
  glob({
    base: `./src/content/${dir}`,
    pattern: '*.{md,mdx}',
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
  });

const common = {
  date: z.coerce.date(),
  /** Drafts render in `npm run dev` but are left out of the production build. */
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
};

const blog = defineCollection({
  loader: loader('blog'),
  schema: z.object({
    ...common,
    title: z.string(),
    tagline: z.string().optional(),
  }),
});

const food = defineCollection({
  loader: loader('food'),
  schema: ({ image }) =>
    z.object({
      ...common,
      title: z.string(),
      image: image().optional(),
    }),
});

const travel = defineCollection({
  loader: loader('travel'),
  schema: ({ image }) =>
    z.object({
      ...common,
      place: z.string(),
      food: z.string(),
      country: z.string(),
      /** Human-readable location shown on cards and the map. */
      city: z.string(),
      /** [lat, lng] for the map pin. */
      coords: z.tuple([z.number(), z.number()]),
      image: image(),
    }),
});

export const collections = { blog, food, travel };
