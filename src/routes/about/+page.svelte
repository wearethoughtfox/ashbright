<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import PersonCard from '$lib/components/blocks/PersonCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { site, organizationSchema } from '$lib/content/site.js';
  import { people } from '$lib/content/people.js';
  import { services } from '$lib/content/services.js';

  const description =
    'Ashbright is an intelligence-led communications firm founded in 2017 by Tom Ashby and Rupert Wright, based in London and Dubai and operating worldwide.';
</script>

<Seo
  title="About"
  {description}
  jsonLd={[
    organizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Ashbright',
      url: `${site.url}/about`,
      about: { '@id': `${site.url}/#organization` }
    }
  ]}
/>

<PageHeader
  eyebrow="About Ashbright"
  title="Strategic communications counsel for leaders who can’t afford to be caught off guard."
  breadcrumb={[{ label: 'About' }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="about-grid">
      <Prose>
        <h2>What it is</h2>
        <p>Ashbright is an intelligence-led communications firm. We work with CEOs, senior leaders, governments, and high-profile individuals to help them understand their environment, shape perception, and communicate with precision. The work spans research and strategy, content and messaging, reputation management, and crisis response, often all at once.</p>
        <p>The firm was founded in {site.founded} by <a href="/tom-ashby">Tom Ashby</a> and <a href="/rupert-wright">Rupert Wright</a>, is based in London and Dubai, and operates worldwide.</p>

        <h2>Why it exists</h2>
        <p>Disruption doesn’t warn you. Most leaders are managing reputation problems they never saw coming, because they had no system watching for them. Poor communications is one of the leading causes of failure in change programmes, leadership transitions, and high-stakes decisions, not bad strategy.</p>

        <h2>How it works</h2>
        <dl class="how-list">
          {#each services as s}
            <div>
              <dt><a href="/services/{s.slug}">{s.title}</a></dt>
              <dd>{s.short}</dd>
            </div>
          {/each}
        </dl>
        <p>Every engagement starts with intelligence. Strategy and content are built on it, and senior counsel stays with you until the outcome is secure. We use data and intelligence to understand and engage people, and design programmes that enable leaders to mobilise resources, shape perceptions and influence behaviour.</p>

        <h2>Who we work with</h2>
        <p>Governments and royal courts. Sovereign wealth and investment funds. Companies in energy, defence, financial services and fintech. Investment promotion and citizenship-by-investment programmes. High net worth individuals and their families. See the full list of <a href="/sectors">sectors</a>.</p>
      </Prose>

      <aside class="about-aside stack" style:--stack-space="var(--space-l)">
        <div class="fact">
          <p class="eyebrow">Founded</p>
          <p class="fact__value">{site.founded}</p>
        </div>
        <div class="fact">
          <p class="eyebrow">Offices</p>
          <p class="fact__value">London &amp; Dubai</p>
        </div>
        <div class="fact">
          <p class="eyebrow">Reach</p>
          <p class="fact__value">Worldwide</p>
        </div>
        <div class="fact">
          <p class="eyebrow">Clients</p>
          <p class="fact__value">Governments, companies and successful individuals</p>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="region" data-surface="light" aria-labelledby="founders-title">
  <div class="wrapper stack" style:--stack-space="var(--space-xl)">
    <div class="stack" style:--stack-space="var(--space-xs)">
      <p class="eyebrow">Founders</p>
      <h2 id="founders-title">Former journalists and heads of communications.</h2>
    </div>
    <div class="grid" style:--grid-min-item-size="20rem" style:--gutter="var(--space-l)">
      {#each people as person}
        <PersonCard {person} />
      {/each}
    </div>
  </div>
</section>

<CtaBand />

<style>
  .about-grid {
    display: grid;
    gap: var(--space-xl);
    grid-template-columns: minmax(0, 1fr);
  }

  @media (min-width: 60rem) {
    .about-grid {
      grid-template-columns: minmax(0, 1fr) 16rem;
      gap: var(--space-3xl);
    }
  }

  .about-aside {
    align-self: start;
    position: sticky;
    top: 6rem;
    border-inline-start: var(--stroke);
    padding-inline-start: var(--space-m);
  }

  .fact__value {
    font-family: var(--font-display);
    font-size: var(--size-step-3);
    font-weight: 300;
    line-height: 1.15;
    color: var(--on-surface-heading);
  }

  .how-list {
    display: grid;
    gap: var(--space-m);
  }

  .how-list dt {
    font-size: var(--size-step-1);
    text-transform: none;
    letter-spacing: 0.01em;
    color: var(--on-surface-heading);
  }

  .how-list dt a {
    color: inherit;
    text-decoration-color: var(--accent);
  }

  .how-list dd {
    margin-block-start: 0.25rem;
    color: var(--on-surface-muted);
  }
</style>
