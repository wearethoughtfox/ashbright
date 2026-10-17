<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import Breadcrumb from '$lib/components/blocks/Breadcrumb.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import WaveField from '$lib/components/blocks/WaveField.svelte';
  import { site } from '$lib/content/site.js';
  import { insights, formatDate } from '$lib/content/insights.js';

  export let data;
  $: insight = data.insight;
  $: others = insights.filter((i) => i.slug !== insight.slug);
</script>

<Seo
  title={insight.title}
  description={insight.summary}
  type="article"
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.summary,
    datePublished: insight.date,
    dateModified: insight.date,
    url: `${site.url}/insights/${insight.slug}`,
    mainEntityOfPage: `${site.url}/insights/${insight.slug}`,
    image: `${site.url}${site.ogImage}`,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: { '@id': `${site.url}/#organization` }
  }}
/>

<article>
  <header class="article-header">
    <WaveField variant="quiet" opacity={0.8} dots={false} />
    <div class="wrapper article-header__inner">
      <div class="stack" style:--stack-space="var(--space-m)">
        <Breadcrumb items={[{ label: 'Insights', href: '/insights' }, { label: insight.title }]} />
        <p class="eyebrow">
          <time datetime={insight.date}>{formatDate(insight.date)}</time> · {insight.readingTime} read
        </p>
        <h1 class="article-title">{insight.title}</h1>
        <p class="lede">{insight.summary}</p>
      </div>
    </div>
  </header>

  <div class="region">
    <div class="wrapper">
      <Prose>
        {#each insight.body as block}
          {#if block.startsWith('## ')}
            <h2>{block.slice(3)}</h2>
          {:else}
            <p>{block}</p>
          {/if}
        {/each}
      </Prose>
    </div>
  </div>
</article>

<section class="region" data-surface="light" aria-labelledby="more-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <div class="stack" style:--stack-space="var(--space-xs)">
      <p class="eyebrow">More insights</p>
      <h2 id="more-title">Keep reading</h2>
    </div>
    <div class="grid" style:--grid-min-item-size="18rem" style:--gutter="var(--space-m)">
      {#each others as i}
        <LinkCard href="/insights/{i.slug}" eyebrow={formatDate(i.date)} title={i.title} text={i.summary} />
      {/each}
    </div>
  </div>
</section>

<CtaBand />

<style>
  .article-header {
    position: relative;
    isolation: isolate;
    padding-block: var(--space-2xl) var(--space-xl);
    border-block-end: var(--stroke);
    overflow: hidden;
  }

  .article-header__inner {
    position: relative;
    z-index: 1;
  }

  .article-title {
    text-transform: none;
    letter-spacing: 0;
    font-size: var(--size-step-6);
    max-width: 22ch;
  }
</style>
