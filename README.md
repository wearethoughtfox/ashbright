# Ashbright website

Static SvelteKit site for [ashbright.com](https://www.ashbright.com), rebuilt from the 2017 Jekyll site on the `sveltekit-cube-starter` (CUBE CSS + Every Layout + fluid tokens).

## Run

```
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in ./build
npm run preview
```

## Where things live

| What | Where |
|---|---|
| Site facts (name, email, phone, address, nav, CTA) | `src/lib/content/site.js` |
| Services (4) | `src/lib/content/services.js` |
| Situations (6, slugs preserved from Jekyll) | `src/lib/content/situations.js` |
| Sectors (10) | `src/lib/content/sectors.js` |
| Founders (Tom Ashby, Rupert Wright) | `src/lib/content/people.js` |
| Insights articles | `src/lib/content/insights.js` |
| Home page copy | `src/lib/content/home.js` |
| Palette and fonts | `src/lib/design-tokens/*.json` then `npm run tokens` |
| Logo mark | `src/lib/components/blocks/Logo.svelte`, `static/favicon.svg`, `static/logo-mark.svg` |
| Wave-line backgrounds | `src/lib/components/blocks/WaveField.svelte` |
| Meta, Open Graph, JSON-LD | `src/lib/components/blocks/Seo.svelte` |
| Sitemap, robots, llms.txt | `src/routes/sitemap.xml`, `robots.txt`, `llms.txt` |

Adding a service, situation, sector or article is a matter of adding an object to the relevant content file. Pages, sitemap entries, footer links and llms.txt are generated from those arrays.

## URLs preserved from the old site

- `/situations/crisis`, `/situations/marketing`, `/situations/reputation`, `/situations/smarter`, `/situations/start`, `/situations/transform`
- `/tom-ashby`, `/rupert-wright`
- `/brightx` → brightx.media (via `static/_redirects`, Netlify format)

## Deploy

`@sveltejs/adapter-static` writes a fully prerendered site to `build/`, with `404.html` as the fallback. Publish `build/` on Netlify (or any static host). `static/_redirects` is copied to the output root for Netlify.

## Design

- Palette: Ink `#0E1217` (base), Ash `#B9CCE9` (accent, carried over from 2017), Slate `#5D6675`, Mist/Paper for light sections, Ember `#E0876B` for the logo gradient only.
- Type: Oswald (variable, light weight for display) and PT Serif (body), both carried over and self-hosted from `static/fonts/`.
- Sections switch palette with `data-surface="light"` or `data-surface="ash"`; components read `--surface`, `--on-surface`, `--accent` and so on, so they work on any surface.
