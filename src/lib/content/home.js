/**
 * Home and positioning copy.
 *
 * POSITIONING is Tom's decision. 'A' uses his 2017 wording throughout;
 * 'B' uses the positioning package. It sets the About heading and the
 * closing call to action. HERO sets the home headline on its own.
 */
export const POSITIONING = 'A';
export const HERO = 'B'; // Rob prefers B for the hero (2026-10-19). NEW: needs Tom.

const options = {
  A: {
    // TOM
    headline: 'Strategic communication. Informing intelligent leadership.',
    aboutHeading: 'Strategic communication. Informing intelligent leadership.',
    closing: 'Informing intelligent leadership.'
  },
  B: {
    // NEW (positioning package)
    headline: 'The world got louder. Leaders can’t afford to guess.',
    aboutHeading: 'Strategic communications counsel for leaders who can’t afford to be caught off guard.',
    closing: 'Intelligence is the advantage. Most leaders don’t have it.'
  }
};

export const positioning = options[POSITIONING];

export const home = {
  hero: {
    eyebrow: 'Strategic communications counsel · London & Dubai', // TOM, edited
    title: options[HERO].headline,
    lede: 'Ashbright is a strategic communications firm that provides counsel to governments, companies and successful individuals.' // TOM
  },
  whatWeDo: {
    title: 'What we do', // TOM
    text: 'We use data and intelligence to understand and engage people. We design and execute state-of-the-art programmes to enable leaders to mobilise resources, shape perceptions and influence behaviour.' // TOM
  },
  servicesTitle: 'Four areas of service.', // TOM, edited
  situationsTitle: 'Where are you now?', // NEW
  sectorsTitle: 'Ashbright works across a broad variety of sectors.', // TOM
  foundersTitle: 'Former journalists, now senior communications advisers.', // NEW
  closing: {
    title: positioning.closing,
    button: 'Get in touch' // TOM
  }
};
