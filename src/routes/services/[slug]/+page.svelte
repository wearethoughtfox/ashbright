<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { site } from '$lib/content/site.js';
  import { getService } from '$lib/content/services.js';
  import { getSituation } from '$lib/content/situations.js';

  export let data;
  $: service = data.service;
  $: related = service.relatedServices.map(getService).filter(Boolean);
  $: situations = service.relatedSituations.map(getSituation).filter(Boolean);
</script>

<Seo
  title={service.title}
  description={service.summary}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: ['London', 'Dubai', 'Worldwide'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d }
      }))
    }
  }}
/>

<PageHeader
  eyebrow="Service"
  title={service.title}
  lede={service.short}
  breadcrumb={[{ label: 'Services', href: '/services' }, { label: service.title }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="service-grid">
      <Prose>
        {#each service.intro as p}
          <p>{p}</p>
        {/each}
      </Prose>
      <aside class="service-aside">
        <h2 class="service-aside__title">What it includes</h2>
        <ul role="list" class="service-aside__list">
          {#each service.deliverables as d}
            <li>{d}</li>
          {/each}
        </ul>
      </aside>
    </div>
  </div>
</section>

{#if situations.length}
  <section class="region" data-surface="light" aria-labelledby="sit-title">
    <div class="wrapper stack" style:--stack-space="var(--space-l)">
      <div class="stack" style:--stack-space="var(--space-xs)">
        <p class="eyebrow">Situations</p>
        <h2 id="sit-title">When leaders call on this.</h2>
      </div>
      <div class="grid" style:--grid-min-item-size="18rem" style:--gutter="var(--space-m)">
        {#each situations as s}
          <LinkCard href="/situations/{s.slug}" title={s.title} text={s.short} />
        {/each}
      </div>
    </div>
  </section>
{/if}

{#if related.length}
  <section class="region" aria-labelledby="rel-title">
    <div class="wrapper stack" style:--stack-space="var(--space-l)">
      <div class="stack" style:--stack-space="var(--space-xs)">
        <p class="eyebrow">Related services</p>
        <h2 id="rel-title">Works alongside</h2>
      </div>
      <div class="grid" style:--grid-min-item-size="18rem" style:--gutter="var(--space-m)">
        {#each related as s}
          <LinkCard href="/services/{s.slug}" title={s.title} text={s.short} />
        {/each}
      </div>
    </div>
  </section>
{/if}

<CtaBand />

<style>
  .service-grid {
    display: grid;
    gap: var(--space-xl);
    grid-template-columns: minmax(0, 1fr);
  }

  @media (min-width: 60rem) {
    .service-grid {
      grid-template-columns: minmax(0, 1fr) 20rem;
      gap: var(--space-3xl);
    }
  }

  .service-aside {
    align-self: start;
    position: sticky;
    top: 6rem;
    background: var(--surface-raised);
    border: var(--stroke);
    border-radius: var(--radius-m);
    padding: var(--space-m);
  }

  .service-aside__title {
    font-size: var(--size-step-00);
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
    margin-block-end: var(--space-s);
  }

  .service-aside__list li {
    padding-block: var(--space-xs);
    border-block-start: var(--stroke);
    font-size: var(--size-step-0);
    max-width: unset;
  }
</style>
