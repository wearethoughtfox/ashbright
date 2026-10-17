<script>
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element this={as} class="prose flow" {...$$restProps}>
  <slot />
</svelte:element>

<style>
  .prose {
    --measure: 62ch;
    --flow-space: var(--space-m);
    font-size: var(--size-step-1);
  }

  .prose :global(h2) {
    --flow-space: var(--space-xl);
    font-size: var(--size-step-3);
    text-transform: none;
    letter-spacing: 0.01em;
    font-weight: 400;
  }

  .prose :global(h2 + *) {
    --flow-space: var(--space-s);
  }

  .prose :global(h3) {
    --flow-space: var(--space-l);
    font-size: var(--size-step-2);
  }

  .prose :global(a) {
    color: var(--on-surface-heading);
    text-decoration-color: var(--accent);
    text-underline-offset: 0.2em;
  }

  .prose :global(a:hover) {
    text-decoration-color: currentColor;
  }

  .prose :global(blockquote) {
    border-inline-start: 2px solid var(--accent);
    padding-inline-start: var(--space-m);
    font-size: var(--size-step-2);
    font-style: italic;
  }

  .prose :global(img) {
    border-radius: var(--radius-m);
  }

  .prose :global(hr) {
    border: none;
    border-block-start: var(--stroke);
    margin-block: var(--space-l);
  }
</style>
