<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import Breadcrumb from '$lib/components/blocks/Breadcrumb.svelte';
  import Prose from '$lib/components/blocks/Prose.svelte';
  import PersonCard from '$lib/components/blocks/PersonCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import WaveField from '$lib/components/blocks/WaveField.svelte';
  import { site } from '$lib/content/site.js';
  import { people } from '$lib/content/people.js';

  export let data;
  $: person = data.person;
  $: others = people.filter((p) => p.slug !== person.slug);
</script>

<Seo
  title="{person.name}, {person.role}"
  description={person.summary}
  image={person.image}
  type="profile"
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    description: person.summary,
    image: `${site.url}${person.image}`,
    url: `${site.url}/${person.slug}`,
    worksFor: { '@id': `${site.url}/#organization` }
  }}
/>

<header class="bio-header">
  <WaveField variant="quiet" opacity={0.8} dots={false} />
  <div class="wrapper bio-header__inner">
    <div class="stack" style:--stack-space="var(--space-m)">
      <Breadcrumb items={[{ label: 'About', href: '/about' }, { label: person.name }]} />
      <div class="bio-header__grid">
        <div class="bio-header__media frame" data-ratio="1/1">
          <img src={person.image} alt={person.name} width="750" height="750" loading="eager" fetchpriority="high" />
        </div>
        <div class="stack" style:--stack-space="var(--space-s)">
          <p class="eyebrow">{person.role}</p>
          <h1>{person.name}</h1>
        </div>
      </div>
    </div>
  </div>
</header>

<section class="region">
  <div class="wrapper">
    <div class="bio-grid">
      <Prose>
        {#each person.body as p}
          <p>{p}</p>
        {/each}
      </Prose>
      <aside class="bio-aside">
        <dl class="stack" style:--stack-space="var(--space-m)">
          {#each person.facts as f}
            <div>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          {/each}
        </dl>
      </aside>
    </div>
  </div>
</section>

<section class="region" data-surface="light" aria-labelledby="also-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <h2 id="also-title" class="visually-hidden">Also at Ashbright</h2>
    <div class="grid" style:--grid-min-item-size="20rem" style:--gutter="var(--space-l)">
      {#each others as p}
        <PersonCard person={p} />
      {/each}
    </div>
  </div>
</section>

<CtaBand />

<style>
  .bio-header {
    position: relative;
    isolation: isolate;
    padding-block: var(--space-2xl) var(--space-xl);
    border-block-end: var(--stroke);
    overflow: hidden;
  }

  .bio-header__inner {
    position: relative;
    z-index: 1;
  }

  .bio-header__grid {
    display: grid;
    gap: var(--space-l);
    align-items: center;
    grid-template-columns: minmax(0, 1fr);
  }

  @media (min-width: 48rem) {
    .bio-header__grid {
      grid-template-columns: 16rem minmax(0, 1fr);
    }
  }

  .bio-header__media {
    max-width: 16rem;
    border-radius: var(--radius-m);
    overflow: hidden;
    border: var(--stroke);
  }

  .bio-header__media img {
    filter: saturate(0.8);
  }

  .bio-grid {
    display: grid;
    gap: var(--space-xl);
    grid-template-columns: minmax(0, 1fr);
  }

  @media (min-width: 60rem) {
    .bio-grid {
      grid-template-columns: minmax(0, 1fr) 18rem;
      gap: var(--space-3xl);
    }
  }

  .bio-aside {
    align-self: start;
    position: sticky;
    top: 6rem;
    border-inline-start: var(--stroke);
    padding-inline-start: var(--space-m);
  }

  .bio-aside dd {
    color: var(--on-surface-muted);
  }
</style>
