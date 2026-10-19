import { site } from '$lib/content/site.js';
import { services } from '$lib/content/services.js';
import { situations } from '$lib/content/situations.js';
import { sectors } from '$lib/content/sectors.js';
import { people } from '$lib/content/people.js';
import { insights } from '$lib/content/insights.js';

export const prerender = true;

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} was founded in ${site.founded} by Tom Ashby and Rupert Wright, based in London and Dubai and operating worldwide. We use data and intelligence to understand and engage people.

## Services
${services.map((s) => `- [${s.title}](${site.url}/services/${s.slug}): ${s.short}`).join('\n')}

## Situations
${situations.map((s) => `- [${s.title}](${site.url}/situations/${s.slug}): ${s.short}`).join('\n')}

## Sectors
${sectors.map((s) => `- [${s.title}](${site.url}/sectors/${s.slug}): ${s.short}`).join('\n')}

## People
${people.map((p) => `- [${p.name}, ${p.role}](${site.url}/${p.slug}): ${p.short}`).join('\n')}

${insights.length ? `## Insights\n${insights.map((i) => `- [${i.title}](${site.url}/insights/${i.slug}): ${i.summary}`).join('\n')}\n\n` : ''}## Contact
- Email: ${site.email}
- Telephone: ${site.telDisplay}
- [Contact page](${site.url}/contact)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
