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
    <div class="stack" style:--stack-space="var(--space-l)">
      <p class="eyebrow">{home.hero.eyebrow}</p>
      <h1 id="hero-title" class="hero__title">{home.hero.title}</h1>
      <p class="lede hero__lede">{home.hero.lede}</p>
      <div class="cluster" style:--gutter="var(--space-s)">
        <Button href={site.cta.href}>{site.cta.label}</Button>
        <Button href="/about#how-we-work" variant="ghost">How we work</Button>
      </div>
    </div>
  </div>
  <div class="hero__foot wrapper">
    <p class="hero__meta">{home.hero.strip}</p>
    <p class="hero__meta">Est. {site.founded}</p>
  </div>
</section>

<!-- WHAT WE DO -->
<section class="region" data-surface="light" aria-labelledby="what-title">
  <div class="wrapper">
    <div class="what-we-do">
      <h2 id="what-title">{home.whatWeDo.title}</h2>
      <p class="lede">{home.whatWeDo.text}</p>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="region blueprint" aria-labelledby="services-title">
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <SectionLabel label="Services" note="004" />
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
    <SectionLabel label="Situations" note="006" />
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
  <div class="wrapper stack" style:--stack-space="var(--space-l)">
    <div class="section-head">
      <SectionLabel label="Sectors" note="010" />
      <h2 id="sectors-title">{home.sectorsTitle}</h2>
    </div>
    <ul role="list" class="cluster pills" style:--gutter="var(--space-xs)">
      {#each sectors as sector}
        <li><a class="pill" href="/sectors/{sector.slug}">{sector.title}</a></li>
      {/each}
    </ul>
  </div>
</section>

<!-- FOUNDERS -->
<section class="region" data-surface="light" aria-labelledby="people-title">
  <div class="wrapper stack" style:--stack-space="var(--space-xl)">
    <div class="section-head section-head--split">
      <div class="stack" style:--stack-space="var(--space-xs)">
        <SectionLabel label="Founders" />
        <h2 id="people-title">{home.foundersTitle}</h2>
      </div>
      <Button href="/about" variant="ghost">About Ashbright</Button>
    </div>
    <div class="grid" style:--grid-min-item-size="20rem" style:--gutter="var(--space-l)">
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
    align-items: center;
  }

  .hero__title {
    font-size: var(--size-step-8);
    max-width: 14ch;
  }

  .hero__lede {
    max-width: 44ch;
  }

  .hero__foot {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--space-s);
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

  .what-we-do {
    display: grid;
    gap: var(--space-m);
    max-width: 60rem;
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

  .pill {
    display: inline-block;
    padding: 0.55em 1em;
    border: var(--stroke);
    border-radius: 999px;
    font-family: var(--font-display);
    font-size: var(--size-step-00);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--on-surface-heading);
    text-decoration: none;
    transition: border-color var(--transition-base), color var(--transition-base), background var(--transition-base);
  }

  .pill:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
</style>
