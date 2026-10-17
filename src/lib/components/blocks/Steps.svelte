<script>
  /** @type {{ title: string, text: string }[]} */
  export let steps = [];
</script>

<ol role="list" class="steps">
  {#each steps as step, i}
    <li class="steps__item">
      <span class="steps__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
      <div class="stack" style:--stack-space="var(--space-2xs, 0.35rem)">
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </li>
  {/each}
</ol>

<style>
  .steps {
    display: grid;
    gap: 0;
    border-block-start: var(--stroke);
  }

  .steps__item {
    display: grid;
    grid-template-columns: 4.5rem 1fr;
    gap: var(--space-m);
    padding-block: var(--space-m);
    border-block-end: var(--stroke);
    max-width: unset;
  }

  .steps__num {
    font-family: var(--font-display);
    font-weight: 200;
    font-size: var(--size-step-5);
    line-height: 1;
    color: var(--accent);
  }

  .steps__item p {
    color: var(--on-surface-muted);
  }

  @media (min-width: 48rem) {
    .steps {
      grid-template-columns: repeat(3, 1fr);
      border-block-start: none;
    }

    .steps__item {
      grid-template-columns: 1fr;
      border-block-end: none;
      border-block-start: var(--stroke);
      padding-inline-end: var(--space-l);
    }
  }
</style>
