<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { sectors } from '$lib/content/sectors.js';
  import { site } from '$lib/content/site.js';

  const description =
    'Ashbright works across government, royal courts, sovereign wealth funds, energy, defence, financial services, fintech, investment promotion, citizenship by investment and high net worth individuals.';
</script>

<Seo
  title="Sectors"
  {description}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sectors Ashbright works in',
    itemListElement: sectors.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${site.url}/sectors/${s.slug}`
    }))
  }}
/>

<PageHeader
  title="Ashbright works across a broad variety of sectors."
  breadcrumb={[{ label: 'Sectors' }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="grid" style:--grid-min-item-size="17rem" style:--gutter="var(--space-m)">
      {#each sectors as s}
        <LinkCard href="/sectors/{s.slug}" title={s.title} text={s.short} level="h2" />
      {/each}
    </div>
  </div>
</section>

<CtaBand />
