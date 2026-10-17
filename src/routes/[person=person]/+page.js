import { error } from '@sveltejs/kit';
import { people, getPerson } from '$lib/content/people.js';

export function entries() {
  return people.map(({ slug }) => ({ person: slug }));
}

export function load({ params }) {
  const person = getPerson(params.person);
  if (!person) error(404, 'Person not found');
  return { person };
}
