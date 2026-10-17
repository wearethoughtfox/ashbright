<script>
  /**
   * "Technical" feature card, after aesthetic-cards.vercel.app, in Ashbright colours.
   * Two chamfered blocks (top: title + media panel; foot: description) with a
   * 6px seam. Media panel carries a dot grid, corner brackets and either
   * line-art (slot) or an image. Whole card is one link.
   */
  export let href;
  export let title;
  export let text = undefined;
  /** @type {string|undefined} Small mono index, e.g. "001" */
  export let index = undefined;
  /** @type {'paper'|'accent'|'ink'} */
  export let tone = 'paper';
  /** @type {string|undefined} Photo for the media panel (instead of art) */
  export let image = undefined;
  export let imageAlt = '';
  /** @type {'h2'|'h3'} */
  export let level = 'h3';
</script>

<article class="feature-card" data-tone={tone}>
  <div class="feature-card__top chamfer">
    <header class="feature-card__head">
      <svelte:element this={level} class="feature-card__title">
        <a {href}>{title}</a>
      </svelte:element>
      {#if index}
        <span class="feature-card__index">{index}</span>
      {/if}
    </header>

    <div class="feature-card__media-wrap">
      <div class="feature-card__media">
        {#if image}
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
        {/if}
        <div class="feature-card__dots dotgrid" aria-hidden="true"></div>
        <span class="bracket" data-corner="tl"></span>
        <span class="bracket" data-corner="tr"></span>
        <span class="bracket" data-corner="bl"></span>
        <span class="bracket" data-corner="br"></span>
        {#if !image}
          <div class="feature-card__art">
            <slot name="art" />
          </div>
        {/if}
      </div>
    </div>
  </div>

  {#if text}
    <div class="feature-card__foot chamfer">
      <p class="feature-card__text">{text}</p>
      <span class="feature-card__ticks" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
      </span>
    </div>
  {/if}
</article>

<style>
  .feature-card {
    --card-bg: var(--color-paper);
    --card-media-bg: color-mix(in srgb, var(--color-paper) 88%, var(--color-slate));
    --card-ink: var(--color-ink);
    --card-muted: color-mix(in srgb, var(--color-ink) 62%, transparent);
    --card-grid: color-mix(in srgb, var(--color-ink) 22%, transparent);
    --card-bracket: color-mix(in srgb, var(--color-ink) 55%, transparent);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 100%;
    color: var(--card-ink);
  }

  .feature-card[data-tone='accent'] {
    --card-bg: var(--color-ash);
    --card-media-bg: color-mix(in srgb, var(--color-ash) 80%, var(--color-slate));
    --card-grid: color-mix(in srgb, var(--color-ink) 28%, transparent);
    --card-bracket: color-mix(in srgb, var(--color-ink) 70%, transparent);
  }

  .feature-card[data-tone='ink'] {
    --card-bg: var(--color-ink-soft);
    --card-media-bg: var(--color-ink-glare);
    --card-ink: var(--color-mist);
    --card-muted: color-mix(in srgb, var(--color-mist) 65%, transparent);
    --card-grid: color-mix(in srgb, var(--color-ash) 28%, transparent);
    --card-bracket: color-mix(in srgb, var(--color-ash) 70%, transparent);
  }

  .feature-card__top,
  .feature-card__foot {
    background: var(--card-bg);
  }

  .feature-card__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-s);
    padding: 14px 14px 12px;
  }

  .feature-card__title {
    font-family: var(--font-display);
    font-size: var(--size-step-2);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.05;
    text-transform: none;
    max-width: unset;
    color: inherit;
  }

  .feature-card__title a {
    color: inherit;
    text-decoration: none;
  }

  /* Whole card clickable */
  .feature-card__title a::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .feature-card__index {
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1;
    padding-top: 4px;
    opacity: 0.55;
    letter-spacing: 0.04em;
  }

  .feature-card__media-wrap {
    padding: 0 14px 14px;
  }

  .feature-card__media {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--card-media-bg);
    color: var(--card-bracket);
  }

  .feature-card__media img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.35) contrast(1.05);
    mix-blend-mode: multiply;
    opacity: 0.85;
  }

  .feature-card[data-tone='ink'] .feature-card__media img {
    mix-blend-mode: luminosity;
    opacity: 0.7;
  }

  .feature-card__dots {
    position: absolute;
    inset: 0;
    color: var(--card-grid);
    pointer-events: none;
  }

  .feature-card__art {
    position: absolute;
    inset: 0;
    color: var(--card-ink);
  }

  .feature-card__foot {
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-s);
    padding: 14px;
  }

  .feature-card__text {
    font-family: var(--font-base);
    font-size: var(--size-step-00);
    line-height: 1.45;
    color: var(--card-muted);
    max-width: 30ch;
  }

  .feature-card__ticks {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-top: 4px;
    opacity: 0.45;
    flex-shrink: 0;
  }

  .feature-card__ticks i {
    display: block;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: currentColor;
  }

  .feature-card:has(a:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: no-preference) {
    .feature-card {
      transition: transform 240ms cubic-bezier(0.23, 1, 0.32, 1);
      will-change: transform;
    }

    @media (hover: hover) and (pointer: fine) {
      .feature-card:has(a:hover) {
        transform: translateY(-4px);
      }

      .feature-card:has(a:hover) .bracket {
        transform: scale(1.35);
      }
    }

    .feature-card:has(a:active) {
      transform: translateY(-4px) scale(0.985);
      transition-duration: 140ms;
    }
  }
</style>
