<script>
  import { site } from '$lib/content/site.js';
  /** @type {{ label: string, href?: string }[]} Trail, home is added automatically */
  export let items = [];

  $: trail = [{ label: 'Home', href: '/' }, ...items];
  $: ld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href === '/' ? '/' : item.href}` } : {})
    }))
  }).replace(/</g, '\\u003c');
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${ld}<\/script>`}
</svelte:head>

<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol role="list" class="cluster">
    {#each trail as item, i}
      <li>
        {#if item.href && i < trail.length - 1}
          <a href={item.href}>{item.label}</a>
        {:else}
          <span aria-current="page">{item.label}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  .breadcrumb {
    font-family: var(--font-display);
    font-size: var(--size-step-00);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .breadcrumb ol {
    --gutter: var(--space-xs);
  }

  .breadcrumb li + li::before {
    content: '/';
    margin-inline-end: var(--space-xs);
    color: var(--on-surface-muted);
  }

  .breadcrumb a {
    color: var(--on-surface-muted);
    text-decoration: none;
  }

  .breadcrumb a:hover {
    color: var(--accent);
  }

  .breadcrumb [aria-current] {
    color: var(--accent);
  }
</style>
