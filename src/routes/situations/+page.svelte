<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import FeatureCard from '$lib/components/blocks/FeatureCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { situations } from '$lib/content/situations.js';
  import { site } from '$lib/content/site.js';

  const description =
    'Where are you now? Crisis, transformation, reputation, marketing, working smarter or starting from scratch. How Ashbright helps leaders in each situation.';
</script>

<Seo
  title="Situations"
  {description}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Situations Ashbright advises on',
    itemListElement: situations.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${site.url}/situations/${s.slug}`
    }))
  }}
/>

<PageHeader
  eyebrow="Situations"
  title="Where are you now?"
  lede="Leaders rarely call because they want communications. They call because something is happening. These are the situations we are most often brought into."
  breadcrumb={[{ label: 'Situations' }]}
/>

<section class="region blueprint">
  <div class="wrapper">
    <div class="grid" data-layout="thirds" style:--gutter="10px">
      {#each situations as s, i}
        <FeatureCard
          href="/situations/{s.slug}"
          index={String(i + 1).padStart(3, '0')}
          title={s.title}
          text={s.short}
          tone="ink"
          image={s.image}
          imageAlt={s.imageAlt}
          level="h2"
        />
      {/each}
    </div>
  </div>
</section>

<CtaBand />
