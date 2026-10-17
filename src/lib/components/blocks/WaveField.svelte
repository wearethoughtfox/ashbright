<script>
  /**
   * Decorative wave field. Blends between pairs of bezier curves to produce
   * the thin, parallel "wire wave" lines from the brand's shape library,
   * plus an optional dot grid. Pure SVG, deterministic, SSR-safe.
   *
   * Props:
   *   variant  'hero' | 'band' | 'quiet'  — preset compositions
   *   opacity  overall opacity of the field
   */
  export let variant = 'hero';
  export let opacity = 1;
  export let dots = true;

  const W = 1600;
  const H = 900;

  // Each curve: [x0,y0, c1x,c1y, c2x,c2y, x1,y1, c3x,c3y, c4x,c4y, x2,y2]
  const presets = {
    hero: [
      {
        a: [-100, 520, 300, 380, 520, 720, 820, 560, 1120, 400, 1320, 300, 1750, 420],
        b: [-100, 780, 260, 920, 640, 520, 940, 700, 1240, 880, 1440, 620, 1750, 700],
        n: 34,
        stroke: 'var(--color-ash)',
        alpha: [0.05, 0.42]
      },
      {
        a: [760, -60, 900, 220, 1180, 120, 1750, 260, 1750, 260, 1750, 260, 1750, 260],
        b: [980, -60, 1020, 330, 1440, 260, 1750, 500, 1750, 500, 1750, 500, 1750, 500],
        n: 22,
        stroke: 'var(--color-white)',
        alpha: [0.03, 0.2]
      }
    ],
    band: [
      {
        a: [-100, 300, 300, 120, 600, 480, 900, 300, 1200, 120, 1400, 200, 1750, 140],
        b: [-100, 620, 300, 460, 600, 800, 900, 640, 1200, 480, 1400, 560, 1750, 500],
        n: 28,
        stroke: 'var(--color-slate)',
        alpha: [0.08, 0.5]
      }
    ],
    quiet: [
      {
        a: [-100, 700, 400, 560, 800, 820, 1200, 640, 1500, 520, 1650, 500, 1750, 520],
        b: [-100, 900, 400, 820, 800, 980, 1200, 860, 1500, 780, 1650, 760, 1750, 760],
        n: 18,
        stroke: 'var(--color-ash)',
        alpha: [0.04, 0.26]
      }
    ]
  };

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function pathFrom(p) {
    return `M${p[0]},${p[1]} C${p[2]},${p[3]} ${p[4]},${p[5]} ${p[6]},${p[7]} C${p[8]},${p[9]} ${p[10]},${p[11]} ${p[12]},${p[13]}`;
  }

  function blend(group) {
    const out = [];
    for (let i = 0; i < group.n; i++) {
      const t = group.n === 1 ? 0 : i / (group.n - 1);
      const pts = group.a.map((v, k) => lerp(v, group.b[k], t).toFixed(1));
      // Fade in/out toward the edges of the blend for a softer field
      const edge = 1 - Math.abs(t - 0.5) * 2;
      const alpha = lerp(group.alpha[0], group.alpha[1], Math.pow(edge, 0.7));
      out.push({ d: pathFrom(pts), alpha: alpha.toFixed(3) });
    }
    return out;
  }

  $: groups = (presets[variant] || presets.hero).map((g) => ({
    stroke: g.stroke,
    lines: blend(g)
  }));

  const dotId = `dots-${variant}`;
</script>

<div class="wave-field" style:--wave-opacity={opacity} aria-hidden="true">
  <svg viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" focusable="false">
    <defs>
      <pattern id={dotId} width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill="var(--color-ash)" />
      </pattern>
      <linearGradient id="fade-{variant}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="white" stop-opacity="1" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-mask-{variant}">
        <rect width={W} height={H} fill="url(#fade-{variant})" />
      </mask>
    </defs>

    {#if dots}
      <rect
        class="wave-field__dots"
        x={variant === 'hero' ? 1180 : 120}
        y={variant === 'hero' ? 120 : 80}
        width="330"
        height="176"
        fill="url(#{dotId})"
        opacity="0.55"
      />
    {/if}

    {#each groups as g, gi}
      <g class="wave-field__group" data-index={gi} fill="none" stroke={g.stroke} stroke-width="1" vector-effect="non-scaling-stroke">
        {#each g.lines as l}
          <path d={l.d} stroke-opacity={l.alpha} />
        {/each}
      </g>
    {/each}
  </svg>
</div>

<style>
  .wave-field {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: var(--wave-opacity, 1);
    z-index: 0;
  }

  .wave-field svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (prefers-reduced-motion: no-preference) {
    .wave-field__group {
      animation: drift 28s ease-in-out infinite alternate;
      transform-origin: center;
    }

    .wave-field__group[data-index='1'] {
      animation-duration: 36s;
      animation-direction: alternate-reverse;
    }

    .wave-field__dots {
      animation: dots-drift 40s ease-in-out infinite alternate;
    }

    @keyframes drift {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(-24px, 14px, 0);
      }
    }

    @keyframes dots-drift {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(12px, -10px, 0);
      }
    }
  }
</style>
