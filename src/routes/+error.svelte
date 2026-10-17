<script>
  import { page } from '$app/stores';
  import Seo from '$lib/components/blocks/Seo.svelte';
  import Button from '$lib/components/blocks/Button.svelte';
  import WaveField from '$lib/components/blocks/WaveField.svelte';
</script>

<Seo title={$page.status === 404 ? 'Page not found' : 'Something went wrong'} noindex />

<section class="error region" style:--region-space="var(--space-4xl)">
  <WaveField variant="quiet" opacity={0.7} dots={false} />
  <div class="wrapper error__inner">
    <div class="stack" style:--stack-space="var(--space-m)">
      <p class="eyebrow">{$page.status}</p>
      <h1>{$page.status === 404 ? 'That page isn’t here.' : 'Something went wrong.'}</h1>
      <p class="lede">
        {#if $page.status === 404}
          The page may have moved when the site was rebuilt. Try the links below, or start from the home page.
        {:else}
          {$page.error?.message ?? 'Please try again.'}
        {/if}
      </p>
      <div class="cluster">
        <Button href="/">Home</Button>
        <Button href="/services" variant="secondary">Services</Button>
        <Button href="/contact" variant="secondary">Contact</Button>
      </div>
    </div>
  </div>
</section>

<style>
  .error {
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }

  .error__inner {
    position: relative;
    z-index: 1;
  }
</style>
