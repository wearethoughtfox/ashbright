<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { site } from '$lib/content/site.js';
  import { sectors } from '$lib/content/sectors.js';
  import { services } from '$lib/content/services.js';

  export let data;
  $: sector = data.sector;
  $: others = sectors.filter((s) => s.slug !== sector.slug);
</script>

<Seo
  title="{sector.title} communications"
  description={sector.summary}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${sector.title} communications`,
    description: sector.summary,
    url: `${site.url}/sectors/${sector.slug}`,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#organization` }
  }}
/>

<PageHeader
  title={sector.title}
  lede={sector.short}
  breadcrumb={[{ label: 'Sectors', href: '/sectors' }, { label: sector.title }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="sector-grid">
      <Prose>
        {#each sector.body as p}
          <p>{p}</p>
        {/each}
      </Prose>
      <aside class="sector-aside">
        <h2 class="sector-aside__title">Services</h2>
        <ul role="list" class="sector-aside__list">
          {#each services as s}
            <li><a href="/services/{s.slug}">{s.title}</a></li>
          {/each}
        </ul>
      </aside>
    </div>
  </div>
</section>

<section class="region" data-surface="light" aria-labelledby="other-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <div class="stack" style:--stack-space="var(--space-xs)">
      <p class="eyebrow">Other sectors</p>
      <h2 id="other-title">Where else we work</h2>
    </div>
    <div class="grid" style:--grid-min-item-size="14rem" style:--gutter="var(--space-s)">
      {#each others as s}
        <LinkCard href="/sectors/{s.slug}" title={s.title} />
      {/each}
    </div>
  </div>
</section>

<CtaBand />

<style>
  .sector-grid {
    display: grid;
    gap: var(--space-xl);
    grid-template-columns: minmax(0, 1fr);
  }

  @media (min-width: 60rem) {
    .sector-grid {
      grid-template-columns: minmax(0, 1fr) 18rem;
      gap: var(--space-3xl);
    }
  }

  .sector-aside {
    align-self: start;
    position: sticky;
    top: 6rem;
    border-inline-start: var(--stroke);
    padding-inline-start: var(--space-m);
  }

  .sector-aside__title {
    font-size: var(--size-step-00);
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
    margin-block-end: var(--space-s);
  }

  .sector-aside__list li {
    padding-block: var(--space-xs);
    max-width: unset;
  }

  .sector-aside__list a {
    color: var(--on-surface-heading);
    text-decoration: none;
    font-family: var(--font-display);
    font-size: var(--size-step-1);
    font-weight: 300;
    letter-spacing: 0.02em;
  }

  .sector-aside__list a:hover {
    color: var(--accent);
  }
</style>
