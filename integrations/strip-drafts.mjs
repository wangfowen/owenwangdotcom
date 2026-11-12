// Removes files belonging only to draft posts from the production build, so nothing from a
// draft is reachable online:
//   - images under public/ (e.g. /blog/images/<draft>/...) referenced by drafts but by no published post
//   - optimized copies in /_astro/ of draft cover images (Astro emits these for every entry)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CONTENT = 'src/content';

function readPosts() {
  const posts = [];
  for (const section of fs.readdirSync(CONTENT)) {
    const dir = path.join(CONTENT, section);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!/\.mdx?$/.test(f)) continue;
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
      posts.push({
        draft: /^draft:\s*true\s*$/m.test(fm),
        src,
        cover: fm.match(/^image:\s*"?\.\/images\/([^"\n]+)"?/m)?.[1],
      });
    }
  }
  return posts;
}

// Root-relative asset paths a post points at (src="/…", href="/…", ](/…)).
const assetRefs = (text) =>
  new Set([...text.matchAll(/(?:src|href)="(\/[^"#?]+\.[a-z0-9]+)"|\]\((\/[^)\s]+\.[a-z0-9]+)\)/gi)].map((m) => m[1] ?? m[2]));

export default function stripDrafts() {
  return {
    name: 'strip-drafts',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const posts = readPosts();
        const published = new Set(posts.filter((p) => !p.draft).flatMap((p) => [...assetRefs(p.src)]));
        const publishedCovers = new Set(posts.filter((p) => !p.draft && p.cover).map((p) => p.cover));
        let removed = 0;

        for (const post of posts.filter((p) => p.draft)) {
          for (const ref of assetRefs(post.src)) {
            if (published.has(ref)) continue;
            const file = path.join(out, ref);
            if (fs.existsSync(file)) {
              fs.rmSync(file);
              removed++;
            }
          }
          if (post.cover && !publishedCovers.has(post.cover)) {
            const stem = post.cover.replace(/\.[^.]+$/, '');
            const astroDir = path.join(out, '_astro');
            for (const f of fs.existsSync(astroDir) ? fs.readdirSync(astroDir) : []) {
              if (f.startsWith(`${stem}.`)) {
                fs.rmSync(path.join(astroDir, f));
                removed++;
              }
            }
          }
        }

        // A folder a draft uses that no published post touches belongs to that draft: drop it
        // whole, including leftover files nothing references (e.g. /images/pathfinding/).
        const publishedDirs = new Set([...published].map((r) => path.posix.dirname(r)));
        for (const post of posts.filter((p) => p.draft)) {
          for (const ref of assetRefs(post.src)) {
            const d = path.posix.dirname(ref);
            const isShared = [...publishedDirs].some((p) => p === d || p.startsWith(`${d}/`));
            const full = path.join(out, d);
            if (d.split('/').length > 2 && !isShared && fs.existsSync(full)) {
              removed += fs.readdirSync(full).length;
              fs.rmSync(full, { recursive: true });
            }
          }
        }

        // Drop directories left empty (e.g. /blog/images/<draft-slug>/).
        const prune = (d) => {
          for (const e of fs.readdirSync(d, { withFileTypes: true })) if (e.isDirectory()) prune(path.join(d, e.name));
          if (d !== out && fs.readdirSync(d).length === 0) fs.rmdirSync(d);
        };
        prune(out);
        logger.info(`removed ${removed} draft-only file(s) from the build`);
      },
    },
  };
}
