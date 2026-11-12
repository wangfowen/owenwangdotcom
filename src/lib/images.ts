import type { ImageMetadata } from 'astro';

/** Candidate srcset widths, never larger than the original (so small photos aren't upscaled). */
export const responsiveWidths = (img: ImageMetadata, candidates: number[]) => [
  ...new Set([...candidates.filter((w) => w < img.width), img.width]),
];
