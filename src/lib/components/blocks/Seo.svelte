<script>
  // The head tags come from the toolkit. This keeps the site's own policy:
  // no trailing slash, "Title, Site" for sharing, and noindex everywhere
  // except Netlify production builds.
  import Head from '@thoughtfox/toolkit/seo/Head.svelte';
  import { site } from '$lib/content/site.js';

  /**
   * Search engines may only index Netlify production builds. Branch deploys,
   * deploy previews and local builds get noindex. INDEXABLE=true forces it on.
   */
  // eslint-disable-next-line no-undef
  const indexable = __INDEXABLE__;

  const titles = {
    document: (title) => (title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`),
    social: (title) => (title ? `${title}, ${site.name}` : `${site.name}, ${site.tagline}`)
  };

  /** title, description, image, type, jsonLd, noindex: see buildHead() in the toolkit */
  let props = $props();
</script>

<Head {site} {titles} {indexable} trailingSlash="never" {...props} />
