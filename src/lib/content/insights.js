/**
 * Insights. Published articles only. Empty until Tom approves something.
 * Drafts live in ./drafts/insights.js and are not built.
 * Body items: plain strings are paragraphs; strings starting with "## " are h2s.
 */
export const insights = [];

export function getInsight(slug) {
  return insights.find((i) => i.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
