<script>
  /** @type {'button'|'submit'|'reset'} */
  export let type = 'button';
  /** @type {'primary'|'secondary'|'ghost'} */
  export let variant = 'primary';
  /** @type {string|undefined} Renders as an <a> when provided */
  export let href = undefined;
  /** @type {boolean} Show a trailing arrow */
  export let arrow = variant === 'ghost';
</script>

{#if href}
  <a {href} class="button" data-variant={variant} {...$$restProps}>
    <slot />
    {#if arrow}<span class="button__arrow" aria-hidden="true">→</span>{/if}
  </a>
{:else}
  <button {type} class="button" data-variant={variant} {...$$restProps}>
    <slot />
    {#if arrow}<span class="button__arrow" aria-hidden="true">→</span>{/if}
  </button>
{/if}

<style>
  .button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 0.85em 1.6em;
    border-radius: var(--radius-s);
    border: 1px solid transparent;
    font-family: var(--font-display);
    font-weight: 500;
    font-size: var(--size-step-00);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    line-height: var(--leading-flat);
    text-decoration: none;
    cursor: pointer;
    transition:
      background-color var(--transition-base),
      color var(--transition-base),
      border-color var(--transition-base),
      transform var(--transition-movement);
  }

  .button:active {
    transform: scale(0.98);
  }

  .button[data-variant='primary'] {
    background: var(--accent);
    color: var(--accent-contrast);
    border-color: var(--accent);
  }

  .button[data-variant='primary']:hover {
    background: transparent;
    color: var(--on-surface-heading);
    border-color: var(--on-surface-heading);
  }

  .button[data-variant='secondary'] {
    background: transparent;
    color: var(--on-surface-heading);
    border-color: color-mix(in srgb, var(--on-surface-heading) 45%, transparent);
  }

  .button[data-variant='secondary']:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .button[data-variant='ghost'] {
    background: transparent;
    color: var(--on-surface-heading);
    border-color: transparent;
    padding-inline: 0;
  }

  .button[data-variant='ghost']:hover {
    color: var(--accent);
  }

  .button__arrow {
    transition: transform var(--transition-movement);
  }

  .button:hover .button__arrow {
    transform: translateX(0.25em);
  }

  @media (prefers-reduced-motion: reduce) {
    .button,
    .button__arrow {
      transition: none;
    }
  }
</style>
