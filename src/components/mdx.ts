// Components available in every .mdx post without importing them.
// Add a component here to make it usable as <Name /> in any post.
import Figure from './Figure.astro';
import Row from './Row.astro';
import Callout from './Callout.astro';
import YouTube from './YouTube.astro';

export const mdxComponents = { Figure, Row, Callout, YouTube };
