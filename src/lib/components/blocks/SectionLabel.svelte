<script>
  /**
   * Technical section label: small diamond, tracked mono text, dotted leader.
   */
  export let label;
  /** @type {string|undefined} Optional right-aligned note, e.g. a count */
  export let note = undefined;
</script>

<p class="section-label">
  <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
    <path d="M5 .8 9.2 5 5 9.2.8 5Z" fill="none" stroke="currentColor" stroke-width="1" />
  </svg>
  <span class="section-label__text">{label}</span>
  <span class="section-label__leader leader" aria-hidden="true"></span>
  {#if note}
    <span class="section-label__note">{note}</span>
  {/if}
</p>

<style>
  .section-label {
    display: flex;
    align-items: center;
    gap: var(--space-s);
    font-family: var(--font-mono);
    font-size: var(--size-step-000);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--on-surface-muted);
    max-width: unset;
  }

  .section-label svg {
    flex-shrink: 0;
    color: var(--accent);
  }

  .section-label__text {
    flex-shrink: 0;
    color: var(--accent);
  }

  .section-label__leader {
    flex: 1;
    height: 6px;
    opacity: 0.55;
  }

  .section-label__note {
    flex-shrink: 0;
  }
</style>
