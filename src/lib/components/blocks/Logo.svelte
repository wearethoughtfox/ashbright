<script>
  /**
   * Ashbright mark: three nested diamond rings cut by a horizontal band,
   * filled with the brand gradient (ember → ash → slate).
   * Renders inline so it can scale with type and inherit colour if needed.
   */
  /** @type {boolean} Show the wordmark next to the mark */
  export let wordmark = true;
  /** @type {string} Height of the mark */
  export let size = '2.25rem';
  /** @type {'gradient'|'mono'} */
  export let tone = 'gradient';
  /** Unique id so multiple logos on a page don't clash gradient ids */
  const uid = Math.random().toString(36).slice(2, 8);
</script>

<span class="logo" style:--logo-size={size}>
  <svg
    class="logo__mark"
    viewBox="0 0 100 100"
    role="img"
    aria-hidden={wordmark ? 'true' : undefined}
    aria-label={wordmark ? undefined : 'Ashbright'}
    focusable="false"
  >
    <defs>
      <linearGradient id="g-{uid}" x1="30" y1="8" x2="72" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#E0876B" />
        <stop offset="0.5" stop-color="#B9CCE9" />
        <stop offset="1" stop-color="#6FB8D9" />
      </linearGradient>
      <mask id="m-{uid}">
        <rect width="100" height="100" fill="white" />
        <rect x="0" y="55" width="100" height="5" fill="black" />
      </mask>
    </defs>
    <g
      mask="url(#m-{uid})"
      fill="none"
      stroke={tone === 'gradient' ? `url(#g-${uid})` : 'currentColor'}
      stroke-width="6"
      stroke-linejoin="miter"
    >
      <path d="M50 5 L95 50 L50 95 L5 50 Z" />
      <path d="M50 22 L78 50 L50 78 L22 50 Z" />
    </g>
    <path
      d="M50 40 L60 50 L50 60 L40 50 Z"
      fill={tone === 'gradient' ? `url(#g-${uid})` : 'currentColor'}
      mask="url(#m-{uid})"
    />
  </svg>
  {#if wordmark}
    <span class="logo__word">Ashbright</span>
  {/if}
</span>

<style>
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 0.6em;
    font-size: var(--logo-size, 2.25rem);
    line-height: 1;
  }

  .logo__mark {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    display: block;
  }

  .logo__word {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 0.62em;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--on-surface-heading);
    /* Optical: kerning adds trailing space */
    margin-inline-end: -0.22em;
  }
</style>
