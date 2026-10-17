import { error } from '@sveltejs/kit';
import { situations, getSituation } from '$lib/content/situations.js';

export function entries() {
  return situations.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
  const situation = getSituation(params.slug);
  if (!situation) error(404, 'Situation not found');
  return { situation };
}
