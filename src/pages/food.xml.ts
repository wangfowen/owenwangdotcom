import type { APIContext } from 'astro';
import { sectionFeed } from '../lib/feed';

export const GET = (context: APIContext) => sectionFeed('food', context);
