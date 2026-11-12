// Usage: npm run new -- "Title of Post" [blog|food|travel] [YYYY-MM-DD]
// Creates src/content/<section>/<date>-<slug>.mdx as a draft.
import fs from 'node:fs';

const [title, section = 'blog', date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
if (!title) {
  console.error('Usage: npm run new -- "Title of Post" [blog|food|travel] [YYYY-MM-DD]');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/${section}/${date}-${slug}.mdx`;
if (fs.existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}

const frontmatter = {
  blog: `title: ${JSON.stringify(title)}\ntagline: ""`,
  food: `title: ${JSON.stringify(title)}\n# image: ./images/${slug}.jpg`,
  travel: `place: ""\nfood: ${JSON.stringify(title)}\ncountry: ""\ncity: ""\ncoords: [0, 0]\nimage: ./images/${slug}.jpg`,
}[section];

const body = `Write in Markdown. These components work without importing them:

<Figure src="/blog/images/example.png" caption="A caption" />

<Row>
  <Figure src="/blog/images/a.png" caption="Left" />
  <Figure src="/blog/images/b.png" caption="Right" />
</Row>

<Callout title="A tangent">Skippable aside.</Callout>

<YouTube id="dQw4w9WgXcQ" />
`;

fs.writeFileSync(file, `---\n${frontmatter}\ndate: ${date}\ndraft: true\n---\n\n${body}`);
console.log(`Created ${file} (draft: true — flip to false to publish)`);
