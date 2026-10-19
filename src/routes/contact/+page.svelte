<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageHeader from '$lib/components/blocks/PageHeader.svelte';
  import Button from '$lib/components/blocks/Button.svelte';
  import { site, organizationSchema } from '$lib/content/site.js';

  const description =
    'Start a conversation with Ashbright. Strategic communications counsel in London and Dubai, operating worldwide. Email ta@ashbright.com or call +971 50 220 6916.';
</script>

<Seo
  title="Contact"
  {description}
  jsonLd={[
    organizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Ashbright',
      url: `${site.url}/contact`,
      about: { '@id': `${site.url}/#organization` }
    }
  ]}
/>

<PageHeader
  eyebrow="Contact"
  title="Get in touch."
  breadcrumb={[{ label: 'Contact' }]}
/>

<section class="region">
  <div class="wrapper">
    <div class="contact-grid">
      <div class="contact-card stack" style:--stack-space="var(--space-m)">
        <p class="eyebrow">Email</p>
        <p class="contact-card__value"><a href="mailto:{site.email}">{site.email}</a></p>
        <Button href="mailto:{site.email}?subject=Starting%20a%20conversation">Email Ashbright</Button>
      </div>
      <div class="contact-card stack" style:--stack-space="var(--space-m)">
        <p class="eyebrow">Telephone</p>
        <p class="contact-card__value"><a href="tel:{site.tel}">{site.telDisplay}</a></p>
      </div>
      <div class="contact-card stack" style:--stack-space="var(--space-m)">
        <p class="eyebrow">Offices</p>
        <p class="contact-card__value">London &amp; Dubai</p>
        <address>
          {site.address.name}<br />
          PO Box {site.address.poBox}<br />
          {site.address.region}, {site.address.country}
        </address>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: var(--space-m);
  }

  .contact-card {
    background: var(--surface-raised);
    border: var(--stroke);
    border-radius: var(--radius-m);
    padding: var(--space-l);
  }

  .contact-card__value {
    font-family: var(--font-display);
    font-size: var(--size-step-3);
    font-weight: 300;
    line-height: 1.15;
    color: var(--on-surface-heading);
    max-width: unset;
    overflow-wrap: anywhere;
  }

  .contact-card__value a {
    color: inherit;
    text-decoration: none;
  }

  .contact-card__value a:hover {
    color: var(--accent);
  }

  address {
    font-style: normal;
    color: var(--on-surface-muted);
  }
</style>
