<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { insights, formatDate } from '$lib/content/insights.js';
  import { site } from '$lib/content/site.js';

  const description =
    'Short essays from Ashbright on intelligence-led communications: why leaders are surprised by perception problems, reactive versus intelligence-led communications, and why change programmes fail.';
</script>

<Seo
  title="Insights"
  {description}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ashbright Insights',
    url: `${site.url}/insights`,
    publisher: { '@id': `${site.url}/#organization` },
    blogPost: insights.map((i) => ({
      '@type': 'BlogPosting',
      headline: i.title,
      datePublished: i.date,
      url: `${site.url}/insights/${i.slug}`
    }))
  }}
/>

<PageHeader
  eyebrow="Insights"
  title="Notes on communicating at the top level."
  lede="Short pieces on how leaders get surprised, and how they stop being."
  breadcrumb={[{ label: 'Insights' }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="grid" style:--grid-min-item-size="18rem" style:--gutter="var(--space-m)">
      {#each insights as i}
        <LinkCard
          href="/insights/{i.slug}"
          eyebrow="{formatDate(i.date)} · {i.readingTime}"
          title={i.title}
          text={i.summary}
          level="h2"
        />
      {/each}
    </div>
  </div>
</section>

<CtaBand />
