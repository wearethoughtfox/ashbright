<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import LinkCard from '$lib/components/blocks/LinkCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { insights, formatDate } from '$lib/content/insights.js';

  // Hidden from the menu and sitemap until something is published.
  $: empty = insights.length === 0;
</script>

<Seo title="Insights" description="Insights from Ashbright." noindex={empty} />

<PageHeader eyebrow="Insights" title="Insights" breadcrumb={[{ label: 'Insights' }]} />

<section class="region">
  <div class="wrapper">
    {#if empty}
      <p class="lede">No articles have been published yet.</p>
    {:else}
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
    {/if}
  </div>
</section>

<CtaBand />
