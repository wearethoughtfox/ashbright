<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import FeatureCard from '$lib/components/blocks/FeatureCard.svelte';
  import CardArt from '$lib/components/blocks/CardArt.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { services } from '$lib/content/services.js';
  import { site } from '$lib/content/site.js';
  import { home } from '$lib/content/home.js';

  const serviceArt = {
    'audience-intelligence': 'rings',
    'strategy-and-planning': 'fan',
    'content-and-counsel': 'signal',
    'crisis-and-reputation': 'diamond'
  };

  const description =
    'Ashbright’s four areas of service: audience intelligence, strategy and planning, content and counsel, crisis and reputation. Strategic communications counsel to governments, companies and successful individuals.';
</script>

<Seo
  title="Services"
  {description}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ashbright services',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${site.url}/services/${s.slug}`
    }))
  }}
/>

<PageHeader
  eyebrow="Services"
  title={home.servicesTitle}
  lede={home.whatWeDo.text}
  breadcrumb={[{ label: 'Services' }]}
/>

<section class="region blueprint">
  <div class="wrapper">
    <div class="grid" style:--grid-min-item-size="15rem" style:--gutter="10px">
      {#each services as s, i}
        <FeatureCard
          href="/services/{s.slug}"
          index={String(i + 1).padStart(3, '0')}
          title={s.title}
          text={s.short}
          tone={i === 0 ? 'accent' : 'paper'}
          level="h2"
        >
          <CardArt slot="art" kind={serviceArt[s.slug]} />
        </FeatureCard>
      {/each}
    </div>
  </div>
</section>

<CtaBand />
