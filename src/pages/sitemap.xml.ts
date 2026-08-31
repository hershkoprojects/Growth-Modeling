import { getCollection } from 'astro:content';

const SITE = 'https://modelera.io';

// This file generates /sitemap.xml automatically on every build.
// It scans the blog collection, so new posts appear with zero manual work.
export async function GET() {
  const posts = await getCollection('blog', (p) => !p.data.draft);

  // Static pages (both languages)
  const staticPaths = [
    '/', '/about', '/blog', '/contact',
    '/he/', '/he/about', '/he/blog', '/he/contact',
  ];

  // Blog post URLs, derived from the content folder (en/... -> /blog/..., he/... -> /he/blog/...)
  const postPaths = posts.map((post) => {
    const slug = post.id.replace(/\.md$/, '');
    if (slug.startsWith('en/')) return `/blog/${slug.replace(/^en\//, '')}`;
    if (slug.startsWith('he/')) return `/he/blog/${slug.replace(/^he\//, '')}`;
    return null;
  }).filter(Boolean);

  const allPaths = [...staticPaths, ...postPaths];

  const urls = allPaths.map((path) => `  <url><loc>${SITE}${path}</loc></url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
