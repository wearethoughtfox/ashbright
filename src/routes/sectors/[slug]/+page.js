import { error } from '@sveltejs/kit';
import { sectors, getSector } from '$lib/content/sectors.js';

export function entries() {
  return sectors.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
  const sector = getSector(params.slug);
  if (!sector) error(404, 'Sector not found');
  return { sector };
}
