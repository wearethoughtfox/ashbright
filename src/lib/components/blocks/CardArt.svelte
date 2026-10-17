<script>
  /**
   * Line-art motifs for FeatureCard media panels. All drawn in a 200×200 box
   * with currentColor strokes so they inherit the card's ink.
   *
   * kinds: rings | fan | signal | diamond | arcs | grid
   */
  export let kind = 'rings';
</script>

<svg class="card-art" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.35" aria-hidden="true" focusable="false">
  {#if kind === 'rings'}
    <!-- Concentric, offset rings: audience layers -->
    <g stroke-linecap="round">
      <circle cx="100" cy="110" r="70" />
      <circle cx="100" cy="128" r="52" />
      <circle cx="100" cy="144" r="36" />
      <circle cx="100" cy="158" r="22" />
    </g>
    <g stroke-linecap="round">
      <path d="M93 56h14" />
      <path d="M93 92h14M100 85v14" />
      <path d="M93 124h14" />
      <path d="M93 152h14M100 145v14" />
    </g>
  {:else if kind === 'fan'}
    <!-- Converging fan: many inputs, one objective -->
    <g stroke-width="0.8" opacity="0.9">
      {#each Array(9) as _, i}
        <line x1={28 + i * 18} y1="168" x2="100" y2="40" />
      {/each}
      {#each Array(9) as _, i}
        <line x1={172 - i * 18} y1="168" x2="100" y2="40" />
      {/each}
    </g>
    <path d="M100 40 L28 168 H172 Z" stroke-width="1.5" />
    <circle cx="100" cy="40" r="3" fill="currentColor" stroke="none" />
  {:else if kind === 'signal'}
    <!-- Message lines with a waveform: content and counsel -->
    <g stroke-linecap="round">
      <path d="M36 60h128" />
      <path d="M36 84h96" />
      <path d="M36 108h112" />
      <path d="M36 132h72" />
    </g>
    <path d="M36 164 C52 164 52 148 68 148 S84 176 100 176 S116 148 132 148 S148 168 164 164" stroke-width="1.5" />
  {:else if kind === 'diamond'}
    <!-- Nested diamonds with a cut: the Ashbright mark, defended -->
    <g stroke-linejoin="miter">
      <path d="M100 30 L170 100 L100 170 L30 100 Z" />
      <path d="M100 54 L146 100 L100 146 L54 100 Z" />
      <path d="M100 78 L122 100 L100 122 L78 100 Z" />
    </g>
    <path d="M18 108 H182" stroke-width="6" stroke="var(--card-media-bg, transparent)" />
    <circle cx="100" cy="100" r="82" stroke-dasharray="2 6" stroke-width="1" opacity="0.7" />
  {:else if kind === 'arcs'}
    <!-- Arcs: momentum, transformation -->
    <g stroke-linecap="round">
      <path d="M120 60 A46 46 0 0 1 120 152" />
      <path d="M102 76 A28 28 0 0 1 102 136" />
      <path d="M52 78 A40 40 0 0 0 52 134" />
      <path d="M72 96 A20 20 0 0 0 72 116" />
    </g>
  {:else if kind === 'grid'}
    <!-- Node grid with one highlighted: profiling a network -->
    <g>
      {#each [40, 70, 100, 130, 160] as x}
        {#each [40, 70, 100, 130, 160] as y}
          <circle cx={x} cy={y} r="2" fill="currentColor" stroke="none" opacity="0.6" />
        {/each}
      {/each}
    </g>
    <g stroke-width="0.9">
      <path d="M40 40 L100 100 L160 70 M100 100 L70 160 M100 100 L160 160" />
    </g>
    <circle cx="100" cy="100" r="8" />
    <circle cx="100" cy="100" r="16" stroke-dasharray="2 4" />
  {/if}
</svg>

<style>
  .card-art {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
