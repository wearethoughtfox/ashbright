<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { site } from '$lib/content/site.js';
  import { situations } from '$lib/content/situations.js';
  import { getService } from '$lib/content/services.js';

  export let data;
  $: situation = data.situation;
  $: services = situation.relatedServices.map(getService).filter(Boolean);
  $: others = situations.filter((s) => s.slug !== situation.slug);
</script>

<Seo
  title={situation.title}
  description={situation.summary}
  image={situation.image}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: situation.title,
    description: situation.summary,
    url: `${site.url}/situations/${situation.slug}`,
    primaryImageOfPage: `${site.url}${situation.image}`,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#organization` }
  }}
/>

<PageHeader
  eyebrow="Situation"
  title={situation.title}
  image={situation.image}
  imageAlt={situation.imageAlt}
  breadcrumb={[{ label: 'Situations', href: '/situations' }, { label: situation.title }]}
/>

<section class="region">
  <div class="wrapper">
    <Prose>
      {#each situation.body as p}
        <p>{p}</p>
      {/each}
    </Prose>
  </div>
</section>

{#if services.length}
  <section class="region" data-surface="light" aria-labelledby="svc-title">
    <div class="wrapper stack" style:--stack-space="var(--space-l)">
      <div class="stack" style:--stack-space="var(--space-xs)">
        <p class="eyebrow">Services</p>
        <h2 id="svc-title">Related services</h2>
      </div>
      <div class="grid" style:--grid-min-item-size="18rem" style:--gutter="var(--space-m)">
        {#each services as s}
          <LinkCard href="/services/{s.slug}" title={s.title} text={s.short} />
        {/each}
      </div>
    </div>
  </section>
{/if}

<section class="region" aria-labelledby="other-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <div class="stack" style:--stack-space="var(--space-xs)">
      <p class="eyebrow">Situations</p>
      <h2 id="other-title">Other situations</h2>
    </div>
    <div class="grid" style:--grid-min-item-size="14rem" style:--gutter="var(--space-s)">
      {#each others as s}
        <LinkCard href="/situations/{s.slug}" title={s.title} />
      {/each}
    </div>
  </div>
</section>

<CtaBand />
