<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import Button from '$lib/components/blocks/Button.svelte';
  import WaveField from '$lib/components/blocks/WaveField.svelte';
  import FeatureCard from '$lib/components/blocks/FeatureCard.svelte';
  import CardArt from '$lib/components/blocks/CardArt.svelte';
  import SectionLabel from '$lib/components/blocks/SectionLabel.svelte';
  import PersonCard from '$lib/components/blocks/PersonCard.svelte';
  import CtaBand from '$lib/components/blocks/CtaBand.svelte';
  import { site, organizationSchema } from '$lib/content/site.js';
  import { home } from '$lib/content/home.js';
  import { services } from '$lib/content/services.js';
  import { situations } from '$lib/content/situations.js';
  import { sectors } from '$lib/content/sectors.js';
  import { people } from '$lib/content/people.js';

  /** Section label counts, e.g. 4 → "004" */
  const count = (items) => String(items.length).padStart(3, '0');

  const serviceArt = {
    'audience-intelligence': 'rings',
    'strategy-and-planning': 'fan',
    'content-and-counsel': 'signal',
    'crisis-and-reputation': 'diamond'
  };

  const jsonLd = [
    organizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { '@id': `${site.url}/#organization` }
    }
  ];
</script>

<Seo description={site.description} {jsonLd} />

<!-- HERO -->
<section class="hero" aria-labelledby="hero-title">
  <WaveField variant="hero" />
  <div class="wrapper hero__inner">
    <div class="hero__body">
      <div class="stack" style:--stack-space="var(--space-l)">
        <p class="eyebrow">{home.hero.eyebrow}</p>
        <h1 id="hero-title" class="hero__title">{home.hero.title}</h1>
        <p class="lede hero__lede">{home.hero.lede}</p>
        <div>
          <Button href="/about#how-we-work">How we work</Button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE DO -->
<section class="region" data-surface="light" aria-labelledby="what-title">
  <div class="wrapper">
    <div class="what-we-do">
      <div class="what-we-do__text">
        <h2 id="what-title">{home.whatWeDo.title}</h2>
        <p class="lede">{home.whatWeDo.text}</p>
      </div>
      <div class="what-we-do__action">
        <Button href={site.cta.href}>{site.cta.label}</Button>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="region blueprint" aria-labelledby="services-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <SectionLabel label="Services" note={count(services)} />
    <div class="section-head section-head--split">
      <h2 id="services-title">{home.servicesTitle}</h2>
      <Button href="/services" variant="ghost">All services</Button>
    </div>
    <div class="grid" style:--grid-min-item-size="15rem" style:--gutter="10px">
      {#each services as s, i}
        <FeatureCard
          href="/services/{s.slug}"
          index={String(i + 1).padStart(3, '0')}
          title={s.title}
          text={s.short}
          tone={i === 0 ? 'accent' : 'paper'}
        >
          <CardArt slot="art" kind={serviceArt[s.slug]} />
        </FeatureCard>
      {/each}
    </div>
  </div>
</section>

<!-- SITUATIONS -->
<section class="region" data-surface="light" aria-labelledby="situations-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <SectionLabel label="Situations" note={count(situations)} />
    <div class="section-head section-head--split">
      <h2 id="situations-title">{home.situationsTitle}</h2>
      <Button href="/situations" variant="ghost">All situations</Button>
    </div>
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
        />
      {/each}
    </div>
  </div>
</section>

<!-- SECTORS -->
<section class="region" aria-labelledby="sectors-title">
  <div class="wrapper stack" style:--stack-space="var(--space-xl)">
    <div class="stack" style:--stack-space="var(--space-l)">
      <SectionLabel label="Sectors" note={count(sectors)} />
      <h2 id="sectors-title">{home.sectorsTitle}</h2>
    </div>
    <!-- A grid of names, as on the 2017 site (two rows of five on desktop) -->
    <ul role="list" class="sector-list">
      {#each sectors as sector}
        <li><a href="/sectors/{sector.slug}">{sector.title}</a></li>
      {/each}
    </ul>
  </div>
</section>

<!-- FOUNDERS -->
<section class="region" data-surface="light" aria-labelledby="people-title">
  <div class="wrapper stack" style:--stack-space="var(--space-xl)">
    <!-- Same structure as Services: full-width label, then heading and link -->
    <div class="stack" style:--stack-space="var(--space-l)">
      <SectionLabel label="Founders" note={count(people)} />
      <div class="section-head section-head--split">
        <h2 id="people-title">{home.foundersTitle}</h2>
        <Button href="/about" variant="ghost">About Ashbright</Button>
      </div>
    </div>
    <div class="grid" style:--grid-min-item-size="28rem" style:--grid-placement="auto-fit" style:--gutter="var(--space-xl)">
      {#each people as person}
        <PersonCard {person} />
      {/each}
    </div>
  </div>
</section>

<CtaBand title={home.closing.title} ctaLabel={home.closing.button} />

<style>
  .hero {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    min-height: min(88svh, 60rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: var(--space-3xl) var(--space-xl);
    border-block-end: var(--stroke);
  }

  .hero__inner {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .hero__body {
    flex: 1;
    display: flex;
    align-items: center;
  }

  /* Below the nav breakpoint, line the hero up with the sections below.
     Wider screens keep the centred hero column. */
  @media (max-width: 55.99rem) {
    .hero__inner {
      width: 100%;
    }
  }

  .hero__title {
    font-size: var(--size-step-8);
    max-width: 14ch;
  }

  .hero__lede {
    max-width: 44ch;
  }

  .hero__foot {
    margin-block-start: var(--space-xl);
  }

  .hero__meta {
    font-family: var(--font-display);
    font-size: var(--size-step-00);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--on-surface-muted);
    max-width: unset;
  }

  /* Text left, call to action right; the button drops below on narrow screens */
  .what-we-do {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-l);
  }

  .what-we-do__text {
    display: grid;
    gap: var(--space-m);
    flex: 1 1 32rem;
    max-width: 60rem;
  }

  .what-we-do__action {
    flex: 0 0 auto;
  }

  .what-we-do h2 {
    font-size: var(--size-step-6);
    max-width: 18ch;
  }

  .section-head {
    display: grid;
    gap: var(--space-xs);
  }

  .section-head--split {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: end;
    gap: var(--space-m);
  }

  /* The global [role='list'][class] reset zeroes list margins, which cancelled
     the stack spacing under the heading; this selector outranks it. */
  .stack > .sector-list {
    margin-block-start: var(--space-xl);
  }

  .sector-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 12rem), 1fr));
    column-gap: var(--space-l);
  }

  .sector-list li {
    border-block-start: var(--stroke);
    max-width: unset;
  }

  .sector-list a {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-s);
    padding-block: var(--space-s) var(--space-m);
    font-family: var(--font-display);
    font-size: var(--size-step-1);
    font-weight: 300;
    letter-spacing: 0.02em;
    line-height: var(--leading-fine);
    color: var(--on-surface-heading);
    text-decoration: none;
  }

  .sector-list a::after {
    content: '→';
    color: var(--accent);
    opacity: 0;
  }

  .sector-list a:hover,
  .sector-list a:focus-visible {
    color: var(--accent);
  }

  .sector-list a:hover::after,
  .sector-list a:focus-visible::after {
    opacity: 1;
  }

  @media (prefers-reduced-motion: no-preference) {
    .sector-list a,
    .sector-list a::after {
      transition: color var(--transition-base), opacity var(--transition-base), transform var(--transition-movement);
    }

    .sector-list a:hover::after {
      transform: translateX(0.2em);
    }
  }
</style>
