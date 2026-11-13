import { llmsTxt } from '@thoughtfox/toolkit/seo';
import { site } from '$lib/content/site.js';
import { services } from '$lib/content/services.js';
import { situations } from '$lib/content/situations.js';
import { sectors } from '$lib/content/sectors.js';
import { people } from '$lib/content/people.js';
import { insights } from '$lib/content/insights.js';

export const prerender = true;

export function GET() {
  const body = llmsTxt({
    siteUrl: site.url,
    name: site.name,
    summary: site.description,
    intro: `${site.name} was founded in ${site.founded} by Tom Ashby and Rupert Wright, based in London and Dubai and operating worldwide. We use data and intelligence to understand and engage people.`,
    sections: [
      { title: 'Services', items: services.map((s) => ({ title: s.title, path: `/services/${s.slug}`, description: s.short })) },
      { title: 'Situations', items: situations.map((s) => ({ title: s.title, path: `/situations/${s.slug}`, description: s.short })) },
      { title: 'Sectors', items: sectors.map((s) => ({ title: s.title, path: `/sectors/${s.slug}`, description: s.short })) },
      { title: 'People', items: people.map((p) => ({ title: `${p.name}, ${p.role}`, path: `/${p.slug}`, description: p.short })) },
      { title: 'Insights', items: insights.map((i) => ({ title: i.title, path: `/insights/${i.slug}`, description: i.summary })) },
      {
        title: 'Contact',
        items: [
          { text: `Email: ${site.email}` },
          { text: `Telephone: ${site.telDisplay}` },
          { title: 'Contact page', path: '/contact' }
        ]
      }
    ]
  });
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
