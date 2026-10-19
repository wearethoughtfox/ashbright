<script>
  import Button from './Button.svelte';
  import WaveField from './WaveField.svelte';
  import { site } from '$lib/content/site.js';
  import { home } from '$lib/content/home.js';

  export let title = home.closing.title;
  export let text = undefined;
  export let ctaLabel = home.closing.button;
  export let ctaHref = site.cta.href;
  /** Centre the content in the home page's hero column on wide screens */
  export let heroColumn = false;
</script>

<section class="cta-band" data-surface="ash" aria-labelledby="cta-band-title">
  <WaveField variant="band" opacity={0.5} dots={false} />
  <div class="wrapper cta-band__inner">
    <div class="cta-band__grid" class:cta-band__grid--hero={heroColumn}>
      <div class="stack" style:--stack-space="var(--space-s)">
        <h2 id="cta-band-title">{title}</h2>
        {#if text}
          <p class="lede">{text}</p>
        {/if}
      </div>
      <div class="cta-band__action">
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-band {
    position: relative;
    isolation: isolate;
    padding-block: var(--space-2xl);
    overflow: hidden;
  }

  .cta-band__inner {
    position: relative;
    z-index: 1;
  }

  /* Headline, then the button underneath: the same pattern as the hero */
  .cta-band__grid {
    display: grid;
    justify-items: start;
    gap: var(--space-l);
  }

  @media (min-width: 56rem) {
    .cta-band__grid--hero {
      width: min(100%, var(--hero-column));
      margin-inline: auto;
    }
  }

  .cta-band h2 {
    max-width: 20ch;
  }

  .cta-band .lede {
    color: var(--on-surface);
  }
</style>
