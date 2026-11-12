import type { CollectionEntry } from 'astro:content';
import { getImage } from 'astro:assets';
import { getPosts } from './posts';

export type Stop = CollectionEntry<'travel'> & { n: number };

/** Published travel posts in trip order (oldest first), numbered 1..N. */
export async function getStops(): Promise<Stop[]> {
  const posts = await getPosts('travel');
  return posts.reverse().map((p, i) => Object.assign(p, { n: i + 1 }));
}

/** Consecutive runs of stops in the same country: the "chapters" of the trip. */
export function legs(stops: Stop[]) {
  const out: { country: string; stops: Stop[] }[] = [];
  for (const s of stops) {
    const last = out.at(-1);
    if (last && last.country === s.data.country) last.stops.push(s);
    else out.push({ country: s.data.country, stops: [s] });
  }
  return out;
}

/** Serializable points for the client-side map. */
export async function mapPoints(stops: Stop[]) {
  return Promise.all(
    stops.map(async (s) => {
      const thumb = await getImage({ src: s.data.image, width: 240, format: 'webp' });
      return {
        id: s.id,
        n: s.n,
        food: s.data.food,
        place: s.data.place,
        city: s.data.city,
        country: s.data.country,
        lat: s.data.coords[0],
        lng: s.data.coords[1],
        thumb: thumb.src,
      };
    }),
  );
}

export type MapPoint = Awaited<ReturnType<typeof mapPoints>>[number];

/** "Place · City", without repeating the city when it's the same as the place. */
export const placeLine = (d: { place: string; city: string }) =>
  d.place.toLowerCase() === d.city.toLowerCase() ? d.place : `${d.place} · ${d.city}`;
