<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import PersonCard from '$lib/components/blocks/PersonCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { site, organizationSchema } from '$lib/content/site.js';
  import { people } from '$lib/content/people.js';
  import { services } from '$lib/content/services.js';
  import { home, positioning } from '$lib/content/home.js';

  // TOM
  const description =
    'Ashbright was founded in 2017 by Tom Ashby and Rupert Wright, based in London and Dubai and operating worldwide.';
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
  title={positioning.aboutHeading}
  breadcrumb={[{ label: 'About' }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="about-grid">
      <Prose>
        <h2>What it is</h2>
        <!-- TOM -->
        <p>Ashbright is a strategic communications firm that provides counsel to governments, companies and successful individuals. We use data and intelligence to understand and engage people. We design and execute state-of-the-art programmes to enable leaders to mobilise resources, shape perceptions and influence behaviour.</p>
        <p>Ashbright was founded in {site.founded} by <a href="/tom-ashby">Tom Ashby</a> and <a href="/rupert-wright">Rupert Wright</a>, based in London and Dubai and operating worldwide.</p>

        <!-- Heading NEW, text TOM -->
        <h2>Why it matters</h2>
        <p>The forces of disruption and complexity demand high-level communications awareness from leaders. Poor communication is one of the main causes of failure in change programmes. You will not be judged by the crises you face, but how you manage them.</p>

        <!-- Service names NEW, items TOM -->
        <h2 id="how-we-work">How we work</h2>
        <dl class="how-list">
          {#each services as s}
            <div>
              <dt><a href="/services/{s.slug}">{s.title}</a></dt>
              <dd>{s.deliverables.join(' · ')}</dd>
            </div>
          {/each}
        </dl>

        <!-- TOM, edited -->
        <h2>Who we work with</h2>
        <p>Governments and royal courts. Sovereign wealth and investment funds. Companies in energy, defence, financial services and fintech. Investment promotion and citizenship-by-investment programmes. High net worth individuals. See the full list of <a href="/sectors">sectors</a>.</p>
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
      <h2 id="founders-title">{home.foundersTitle}</h2>
    </div>
    <div class="grid" style:--grid-min-item-size="28rem" style:--grid-placement="auto-fit" style:--gutter="var(--space-xl)">
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
