<script>
  export let person;
</script>

<article class="person-card">
  <a href="/{person.slug}" class="person-card__media frame" data-ratio="1/1" aria-hidden="true" tabindex="-1">
    <img src={person.image} alt="" loading="lazy" decoding="async" width="750" height="750" />
  </a>
  <div class="stack" style:--stack-space="var(--space-2xs, 0.35rem)">
    <p class="eyebrow">{person.role}</p>
    <h3><a href="/{person.slug}">{person.name}</a></h3>
    <p class="muted">{person.short}</p>
  </div>
</article>

<style>
  .person-card {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: var(--space-m);
    align-items: start;
  }

  .person-card__media {
    border-radius: var(--radius-m);
    overflow: hidden;
    border: var(--stroke);
  }

  .person-card__media img {
    filter: saturate(0.7);
    transition: filter var(--transition-base);
  }

  .person-card:hover .person-card__media img {
    filter: saturate(1);
  }

  .person-card h3 a {
    color: var(--on-surface-heading);
    text-decoration: none;
  }

  .person-card h3 a:hover {
    color: var(--accent);
  }

  @media (min-width: 40rem) {
    .person-card {
      grid-template-columns: 10rem 1fr;
    }
  }
</style>
