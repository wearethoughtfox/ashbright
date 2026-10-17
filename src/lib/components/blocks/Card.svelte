<script>
  /** @type {string|undefined} Link destination — wraps the card */
  export let href = undefined;
  /** @type {string|undefined} Image source */
  export let image = undefined;
  /** @type {string} Image alt text */
  export let imageAlt = '';
  /** @type {string} Frame ratio for the image */
  export let ratio = '16/9';
</script>

<article class="card">
  {#if image}
    <div class="card__media frame" data-ratio={ratio}>
      <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
    </div>
  {/if}
  <div class="card__body stack" style:--stack-space="var(--space-xs)">
    {#if href}
      <a {href} class="card__link">
        <slot name="heading"><slot /></slot>
      </a>
    {:else}
      <slot name="heading"><slot /></slot>
    {/if}
    <slot name="body" />
    <slot name="footer" />
  </div>
</article>

<style>
  .card {
    background: var(--surface-raised);
    border: var(--stroke);
    border-radius: var(--radius-m);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card__media {
    flex-shrink: 0;
  }

  .card__body {
    padding: var(--space-m);
    flex: 1;
  }

  .card__link {
    color: var(--on-surface-heading);
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 400;
    font-size: var(--size-step-2);
    line-height: var(--leading-fine);
  }

  .card__link::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  .card__link:hover {
    color: var(--accent);
  }

  @media (prefers-reduced-motion: no-preference) {
    .card {
      transition: transform var(--transition-movement), border-color var(--transition-base);
    }

    .card:has(.card__link:hover) {
      transform: translateY(-2px);
      border-color: var(--accent);
    }
  }
</style>
