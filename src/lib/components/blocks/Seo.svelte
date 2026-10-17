<script>
  import { page } from '$app/stores';
  import { site } from '$lib/content/site.js';

  /** @type {string|undefined} Page title (site name appended automatically) */
  export let title = undefined;
  /** @type {string} */
  export let description = site.description;
  /** @type {string} Absolute or root-relative image path */
  export let image = site.ogImage;
  /** @type {'website'|'article'|'profile'} */
  export let type = 'website';
  /** @type {object|object[]|undefined} JSON-LD to embed */
  export let jsonLd = undefined;
  /** @type {boolean} */
  export let noindex = false;

  $: fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  $: path = $page.url.pathname.replace(/\/$/, '') || '';
  $: canonical = `${site.url}${path === '' ? '/' : path}`;
  $: ogImage = image.startsWith('http') ? image : `${site.url}${image}`;
  $: ld = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
        .map((o) => JSON.stringify(o).replace(/</g, '\\u003c'))
        .map((json) => `<script type="application/ld+json">${json}<\/script>`)
        .join('\n')
    : '';
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
  <meta property="og:site_name" content={site.name} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title ? `${title}, ${site.name}` : `${site.name}, Strategic Communications for Leaders`} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:locale" content="en_GB" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  {@html ld}
</svelte:head>
