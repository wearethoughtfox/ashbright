<script>
  /**
   * Compact linked panel used for services, situations, sectors and insights.
   * Whole card is clickable via the heading link's pseudo-element.
   */
  export let href;
  export let title;
  export let text = undefined;
  /** @type {string|undefined} Small label above the title (number, category, date) */
  export let eyebrow = undefined;
  /** @type {string|undefined} Optional image */
  export let image = undefined;
  export let imageAlt = '';
  /** @type {'h2'|'h3'} */
  export let level = 'h3';
</script>

<article class="link-card chamfer" class:link-card--media={image}>
  <span class="bracket" data-corner="tl"></span>
  <span class="bracket" data-corner="tr"></span>
  <span class="bracket" data-corner="bl"></span>
  <span class="bracket" data-corner="br"></span>
  {#if image}
    <div class="link-card__media frame" data-ratio="16/9">
      <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
    </div>
  {/if}
  <div class="link-card__body">
    {#if eyebrow}
      <p class="link-card__eyebrow">{eyebrow}</p>
    {/if}
    <svelte:element this={level} class="link-card__title">
      <a {href}>{title}</a>
    </svelte:element>
    {#if text}
      <p class="link-card__text">{text}</p>
    {/if}
    <span class="link-card__arrow" aria-hidden="true">→</span>
  </div>
</article>

<style>
  .link-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--surface-raised);
    overflow: hidden;
    height: 100%;
    color: var(--on-surface);
  }

  .link-card > .bracket {
    color: color-mix(in srgb, var(--accent) 55%, transparent);
    margin: 6px;
  }

  .link-card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-m);
    flex: 1;
  }

  .link-card__eyebrow {
    font-family: var(--font-display);
    font-size: var(--size-step-00);
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    max-width: unset;
  }

  .link-card__title {
    font-family: var(--font-display);
    font-size: var(--size-step-2);
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0.01em;
    line-height: var(--leading-fine);
    max-width: unset;
  }

  .link-card__title a {
    color: var(--on-surface-heading);
    text-decoration: none;
  }

  .link-card__title a::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  .link-card__text {
    color: var(--on-surface-muted);
    font-size: var(--size-step-0);
    max-width: unset;
  }

  .link-card__arrow {
    margin-block-start: auto;
    padding-block-start: var(--space-s);
    color: var(--accent);
    font-family: var(--font-display);
    font-size: var(--size-step-1);
    line-height: 1;
  }

  .link-card__media img {
    filter: saturate(0.6) contrast(1.05);
  }

  @media (prefers-reduced-motion: no-preference) {
    .link-card {
      transition: transform var(--transition-movement), border-color var(--transition-base);
    }

    .link-card__arrow {
      transition: transform var(--transition-movement);
    }

    .link-card:has(a:hover) {
      transform: translateY(-3px);
    }

    .link-card:has(a:hover) > .bracket {
      transform: scale(1.35);
      color: var(--accent);
    }

    .link-card:has(a:hover) .link-card__arrow {
      transform: translateX(0.25em);
    }
  }

  .link-card:has(a:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }
</style>
