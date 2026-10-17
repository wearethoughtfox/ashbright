import { people } from '$lib/content/people.js';

/** Only the founders' slugs match the root-level /[person] route */
export function match(param) {
  return people.some((p) => p.slug === param);
}
