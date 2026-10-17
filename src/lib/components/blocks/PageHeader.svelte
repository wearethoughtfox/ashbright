<script>
  import Breadcrumb from './Breadcrumb.svelte';
  import WaveField from './WaveField.svelte';

  export let title;
  export let eyebrow = undefined;
  export let lede = undefined;
  /** @type {{ label: string, href?: string }[]} */
  export let breadcrumb = [];
  /** @type {string|undefined} Background image, shown dimmed behind the header */
  export let image = undefined;
  export let imageAlt = '';
  /** @type {boolean} Draw the wave field behind the header */
  export let waves = true;
</script>

<header class="page-header" class:page-header--image={image}>
  {#if image}
    <div class="page-header__image">
      <img src={image} alt={imageAlt} loading="eager" fetchpriority="high" decoding="async" />
    </div>
  {:else if waves}
    <WaveField variant="quiet" opacity={0.8} dots={false} />
  {/if}
  <div class="wrapper page-header__inner">
    <div class="stack" style:--stack-space="var(--space-m)">
      {#if breadcrumb.length}
        <Breadcrumb items={breadcrumb} />
      {/if}
      <div class="stack" style:--stack-space="var(--space-s)">
        {#if eyebrow}
          <p class="eyebrow">{eyebrow}</p>
        {/if}
        <h1>{title}</h1>
      </div>
      {#if lede}
        <p class="lede">{lede}</p>
      {/if}
      <slot />
    </div>
  </div>
</header>

<style>
  .page-header {
    position: relative;
    isolation: isolate;
    padding-block: var(--space-2xl) var(--space-xl);
    border-block-end: var(--stroke);
    overflow: hidden;
  }

  .page-header--image {
    padding-block: var(--space-3xl) var(--space-2xl);
  }

  .page-header__inner {
    position: relative;
    z-index: 1;
  }

  .page-header__image {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .page-header__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.35) brightness(0.55) contrast(1.05);
  }

  .page-header__image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--color-ink) 85%, transparent) 0%,
      color-mix(in srgb, var(--color-ink) 55%, transparent) 60%,
      color-mix(in srgb, var(--color-ink) 30%, transparent) 100%
    );
  }
</style>
