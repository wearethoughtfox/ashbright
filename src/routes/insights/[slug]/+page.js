import { error } from '@sveltejs/kit';
import { insights, getInsight } from '$lib/content/insights.js';

export function entries() {
  return insights.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
  const insight = getInsight(params.slug);
  if (!insight) error(404, 'Article not found');
  return { insight };
}
