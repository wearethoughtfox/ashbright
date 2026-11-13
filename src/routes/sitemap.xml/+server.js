import { sitemapXml } from '@thoughtfox/toolkit/seo';
import { site } from '$lib/content/site.js';
import { services } from '$lib/content/services.js';
import { situations } from '$lib/content/situations.js';
import { sectors } from '$lib/content/sectors.js';
import { people } from '$lib/content/people.js';
import { insights } from '$lib/content/insights.js';

export const prerender = true;

// lastmod only where the page has a real date (an insight); the rest say nothing.
export function GET() {
  const entries = [
    { path: '/', priority: 1, changefreq: 'monthly' },
    { path: '/about', priority: 0.9, changefreq: 'monthly' },
    { path: '/services', priority: 0.9, changefreq: 'monthly' },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changefreq: 'monthly' })),
    { path: '/situations', priority: 0.8, changefreq: 'monthly' },
    ...situations.map((s) => ({ path: `/situations/${s.slug}`, priority: 0.7, changefreq: 'monthly' })),
    { path: '/sectors', priority: 0.8, changefreq: 'monthly' },
    ...sectors.map((s) => ({ path: `/sectors/${s.slug}`, priority: 0.7, changefreq: 'monthly' })),
    ...people.map((p) => ({ path: `/${p.slug}`, priority: 0.7, changefreq: 'yearly' })),
    ...(insights.length ? [{ path: '/insights', priority: 0.7, changefreq: 'weekly' }] : []),
    ...insights.map((i) => ({ path: `/insights/${i.slug}`, priority: 0.6, changefreq: 'yearly', lastmod: i.date })),
    { path: '/contact', priority: 0.8, changefreq: 'yearly' }
  ];

  return new Response(sitemapXml({ siteUrl: site.url, entries, trailingSlash: 'never' }), {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=0, s-maxage=3600' }
  });
}
