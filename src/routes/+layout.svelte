<script>
  import '../app.css';
  import { afterNavigate } from '$app/navigation';
  import { focusHeading } from '@thoughtfox/toolkit/layout/focus-heading.js';
  import SkipLink from '@thoughtfox/toolkit/layout/components/SkipLink.svelte';
  import SiteHead from '$lib/components/blocks/SiteHead.svelte';
  import SiteFoot from '$lib/components/blocks/SiteFoot.svelte';

  // Top level, never inside onMount: a lifecycle function registered from
  // inside onMount is dropped silently, which is why this never worked.
  afterNavigate(focusHeading());
</script>

<SkipLink />
<SiteHead />

<main id="main-content" tabindex="-1">
  <slot />
</main>

<SiteFoot />

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  main:focus {
    outline: none;
  }
</style>
