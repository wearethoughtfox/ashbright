<script>
  import { page } from '$app/stores';
  import Logo from './Logo.svelte';
  import { site } from '$lib/content/site.js';

  let open = false;

  function isCurrent(href, pathname) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  }

  // Close the menu on navigation
  $: $page.url.pathname, (open = false);
</script>

<header class="site-head">
  <div class="wrapper">
    <div class="site-head__bar">
      <a href="/" class="site-head__logo" aria-label="Ashbright, home">
        <Logo size="2.1rem" />
      </a>

      <button
        class="site-head__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        on:click={() => (open = !open)}
      >
        <span class="site-head__toggle-label">{open ? 'Close' : 'Menu'}</span>
        <span class="site-head__burger" aria-hidden="true"></span>
      </button>

      <nav id="site-nav" class="site-nav" aria-label="Main" data-open={open}>
        <ul role="list" class="site-nav__list">
          {#each site.nav as link}
            <li>
              <a
                href={link.href}
                class="site-nav__link"
                aria-current={isCurrent(link.href, $page.url.pathname) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
</header>

<style>
  .site-head {
    position: sticky;
    top: 0;
    z-index: 50;
    background: color-mix(in srgb, var(--color-ink) 82%, transparent);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-block-end: var(--stroke);
  }

  .site-head__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-m);
    min-height: 4.5rem;
    flex-wrap: wrap;
  }

  .site-head__logo {
    text-decoration: none;
    display: inline-flex;
    padding-block: var(--space-xs);
  }

  .site-head__toggle {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    background: none;
    border: var(--stroke);
    border-radius: var(--radius-s);
    color: var(--on-surface-heading);
    font-family: var(--font-display);
    font-size: var(--size-step-00);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0.6em 0.9em;
    cursor: pointer;
  }

  .site-head__burger {
    width: 1.1rem;
    height: 2px;
    background: currentColor;
    box-shadow: 0 -5px 0 currentColor, 0 5px 0 currentColor;
    transition: box-shadow var(--transition-base), transform var(--transition-base);
  }

  .site-head__toggle[aria-expanded='true'] .site-head__burger {
    box-shadow: none;
    transform: rotate(45deg);
  }

  .site-nav {
    flex-basis: 100%;
  }

  .site-nav[data-open='false'] {
    display: none;
  }

  .site-nav__list {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-block: var(--space-s) var(--space-m);
  }

  .site-nav__link {
    display: block;
    padding-block: var(--space-xs);
    font-family: var(--font-display);
    font-size: var(--size-step-1);
    font-weight: 300;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--on-surface-heading);
    text-decoration: none;
    border-block-end: var(--stroke);
    transition: color var(--transition-base);
  }

  .site-nav__link:hover,
  .site-nav__link[aria-current='page'] {
    color: var(--accent);
  }

  @media (min-width: 56rem) {
    .site-head__toggle {
      display: none;
    }

    .site-nav,
    .site-nav[data-open='false'] {
      display: block;
      flex-basis: auto;
    }

    .site-nav__list {
      flex-direction: row;
      gap: var(--space-m-l);
      padding-block: 0;
    }

    .site-nav__link {
      font-size: var(--size-step-00);
      font-weight: 400;
      letter-spacing: 0.16em;
      padding-block: 0.4em;
      border-block-end: 1px solid transparent;
    }

    .site-nav__link:hover,
    .site-nav__link[aria-current='page'] {
      border-block-end-color: var(--accent);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .site-nav__link,
    .site-head__burger {
      transition: none;
    }
  }
</style>
