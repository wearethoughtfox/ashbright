# Ashbright copy review — status

Follows the copy review doc (October 2026). Tags as in that doc:
**TOM** word for word from ashbright.com, **TOM, edited** Tom's words shortened or regrouped, **NEW** not on the original site.
The same tags appear as comments in `src/lib/content/*.js`.

## Checklist

| # | Item | Status |
|---|---|---|
| 1 | Unpublish the three Insights essays | Done. Essays kept in `src/lib/content/drafts/insights.js`, not built. `/insights` is an empty, noindexed page, off the menu, footer, sitemap and llms.txt. |
| 2 | Remove "litigation" from all crisis text | Done, then partly reversed in round 2: restored on the Crisis management situation page (Tom's original). Still removed from the Crisis and reputation service page and the Financial services sector page. |
| 3 | `noindex` on the preview build | Done. Every page is noindex unless Netlify builds with `CONTEXT=production`. |
| 4 | Remove "How it works" and "What changes" | Done. |
| 5 | "high-profile" → "successful individuals" in the hero strip and meta tags | Done. "High-profile" now appears only in Tom's own reputation sentences. |
| 6 | Check service, situation, sector and bio pages | Done, see below. |
| 7 | No placeholder testimonials | Confirmed. None on the site. |

## Positioning (Tom chooses)

`POSITIONING` in `src/lib/content/home.js` sets the About heading and the closing call to action; it is set to **A**. `HERO` sets the home headline on its own; it is set to **B** (Rob's preference, needs Tom).

| Option | Message |
|---|---|
| A. Original (TOM) | Strategic communication. Informing intelligent leadership. |
| B. Urgency (NEW) | The world got louder. Leaders can't afford to guess. |
| C. Provocation (NEW) | Most CEOs don't have a communications problem. They have an intelligence problem. Not built; it would need new hero copy. |

## Page checks (item 6)

- **Situations (6):** title, card text and full page text are TOM, word for word, generated from the original Markdown. Page ledes were removed because they repeated the first sentence.
- **Bios (2):** TOM, original paragraphs. The short intro under the name was removed on the bio pages because it repeated the first sentences; the cards on Home and About keep it. Two spelling fixes: "Saïd Business School" (was "Said") and "Andrew Neil" (was "Neill").
- **Services (4):** the grouping and names are NEW. Items are TOM, per the doc table. The intro line on every card and at the top of each service page is the item list, so it never repeats a Situation sentence (round 2). The "What it includes" box was removed because it now repeated the intro line. Page text is TOM, edited, every sentence lifted from the 2017 home page or situation pages:
  - Audience intelligence: "Where do I start?" and "Work smarter" pages.
  - Strategy and planning: home page, "Where do I start?", "Transformation".
  - Content and counsel: "Work smarter", "Marketing communication".
  - Crisis and reputation: "Crisis management", "Reputation matters".
- **Sectors (10):** the names are TOM. The page text has no original, so it stays **NEW, needs Tom**. The earlier drafts claimed past work that is not on the original site (for example engagements with investment promotion agencies and economic zones). Those claims are gone. Each page now has one general NEW paragraph, then facts from the bios (TOM, edited). Round 2: Centre of government now says it "speaks to many audiences at once". Citizenship by investment no longer mentions Rupert's work for St Kitts & Nevis and Dominica; **ask Tom** whether that work was on these programmes, and if so it can go back.

## NEW copy still on the site (needs Tom)

- Home: hero headline "The world got louder. Leaders can't afford to guess." (option B), "Where are you now?", "Former journalists, now senior communications advisers.", buttons "Start a conversation" and "How we work".
- About: heading "Why it matters"; "See the full list of sectors."
- The four service names, and section labels such as "Related services" and "What it includes".
- Sector pages: `short`, `summary` and the first paragraph of each body.
- Situation image alt text.
- Insights: "No articles have been published yet."
- 404 page text.

## For the email to Tom

- The home headline, "The world got louder. Leaders can't afford to guess.", is a draft for his approval. His original, "Strategic communication. Informing intelligent leadership.", is one setting away.
- The ten sector summaries are drafts for his approval.
- Question: was Rupert's work for St Kitts & Nevis and Dominica on their citizenship-by-investment programmes?
