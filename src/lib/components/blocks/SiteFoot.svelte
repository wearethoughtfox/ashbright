<script>
  import Logo from './Logo.svelte';
  import { site } from '$lib/content/site.js';
  import { services } from '$lib/content/services.js';

  const year = new Date().getFullYear();
</script>

<footer class="site-foot">
  <div class="wrapper">
    <div class="site-foot__grid">
      <div class="stack" style:--stack-space="var(--space-m)">
        <a href="/" class="site-foot__logo" aria-label="Ashbright, home">
          <Logo size="2.4rem" />
        </a>
        <p class="site-foot__tagline">Intelligence-led communications counsel for leaders who can’t afford to be caught off guard.</p>
        <p class="site-foot__locations">{site.locations.join(' & ')} · Operating worldwide</p>
      </div>

      <nav aria-label="Footer" class="site-foot__nav">
        <h2 class="site-foot__heading">Explore</h2>
        <ul role="list" class="stack" style:--stack-space="var(--space-2xs, 0.35rem)">
          {#each site.nav as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
          <li><a href="/tom-ashby">Tom Ashby</a></li>
          <li><a href="/rupert-wright">Rupert Wright</a></li>
        </ul>
      </nav>

      <nav aria-label="Services" class="site-foot__nav">
        <h2 class="site-foot__heading">Services</h2>
        <ul role="list" class="stack" style:--stack-space="var(--space-2xs, 0.35rem)">
          {#each services as s}
            <li><a href="/services/{s.slug}">{s.title}</a></li>
          {/each}
        </ul>
      </nav>

      <div class="site-foot__contact">
        <h2 class="site-foot__heading">Contact</h2>
        <address class="stack" style:--stack-space="var(--space-2xs, 0.35rem)">
          <p><a href="mailto:{site.email}">{site.email}</a></p>
          <p><a href="tel:{site.tel}">{site.telDisplay}</a></p>
          <p class="muted">{site.address.name}<br />PO Box {site.address.poBox}, {site.address.region}, {site.address.country}</p>
        </address>
      </div>
    </div>

    <div class="site-foot__legal">
      <p>&copy; {year} {site.legalName}. All rights reserved.</p>
      <p>Founded {site.founded} by Tom Ashby and Rupert Wright.</p>
    </div>
  </div>
</footer>

<style>
  .site-foot {
    padding-block: var(--space-2xl) var(--space-l);
    border-block-start: var(--stroke);
    margin-block-start: auto;
    background: var(--color-ink);
  }

  .site-foot__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: var(--space-xl) var(--space-l);
  }

  .site-foot__grid > :first-child {
    grid-column: 1 / -1;
  }

  @media (min-width: 64rem) {
    .site-foot__grid {
      grid-template-columns: 2fr 1fr 1fr 1.4fr;
    }

    .site-foot__grid > :first-child {
      grid-column: auto;
    }
  }

  .site-foot__logo {
    text-decoration: none;
    display: inline-flex;
  }

  .site-foot__tagline {
    color: var(--on-surface-muted);
    max-width: 34ch;
  }

  .site-foot__locations {
    font-family: var(--font-display);
    font-size: var(--size-step-00);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .site-foot__heading {
    font-size: var(--size-step-00);
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--on-surface-muted);
    margin-block-end: var(--space-s);
  }

  .site-foot__nav a,
  .site-foot__contact a {
    color: var(--on-surface-heading);
    text-decoration: none;
    font-size: var(--size-step-0);
  }

  .site-foot__nav a:hover,
  .site-foot__contact a:hover {
    color: var(--accent);
  }

  address {
    font-style: normal;
  }

  .site-foot__legal {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--space-s);
    margin-block-start: var(--space-xl);
    padding-block-start: var(--space-m);
    border-block-start: var(--stroke);
    font-size: var(--size-step-00);
    color: var(--on-surface-muted);
  }

  .site-foot__legal p {
    max-width: unset;
  }
</style>
