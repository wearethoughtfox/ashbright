import { site } from '$lib/content/site.js';
import { services } from '$lib/content/services.js';
import { situations } from '$lib/content/situations.js';
import { sectors } from '$lib/content/sectors.js';
import { people } from '$lib/content/people.js';
import { insights } from '$lib/content/insights.js';

export const prerender = true;

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'monthly' },
    { loc: '/about', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    ...services.map((s) => ({ loc: `/services/${s.slug}`, priority: '0.8', changefreq: 'monthly' })),
    { loc: '/situations', priority: '0.8', changefreq: 'monthly' },
    ...situations.map((s) => ({ loc: `/situations/${s.slug}`, priority: '0.7', changefreq: 'monthly' })),
    { loc: '/sectors', priority: '0.8', changefreq: 'monthly' },
    ...sectors.map((s) => ({ loc: `/sectors/${s.slug}`, priority: '0.7', changefreq: 'monthly' })),
    ...people.map((p) => ({ loc: `/${p.slug}`, priority: '0.7', changefreq: 'yearly' })),
    ...(insights.length ? [{ loc: '/insights', priority: '0.7', changefreq: 'weekly' }] : []),
    ...insights.map((i) => ({ loc: `/insights/${i.slug}`, priority: '0.6', changefreq: 'yearly', lastmod: i.date })),
    { loc: '/contact', priority: '0.8', changefreq: 'yearly' }
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.url}${u.loc}</loc>
    <lastmod>${u.lastmod ?? today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=0, s-maxage=3600' }
  });
}
