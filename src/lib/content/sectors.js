/**
 * Sectors. The list of ten names is TOM (2017 home page). Each has its own page.
 *
 * Copy provenance (Tom must approve):
 *   short, summary, and the first paragraph of each body: NEW. General framing
 *   only, with no claims about Ashbright's clients or past work.
 *   Later paragraphs: TOM, edited. Facts from the two bios or the 2017 site.
 *   The October 2026 drafts made claims about past engagements that are not on
 *   the original site; those have been removed.
 */
export const sectors = [
  {
    slug: 'centre-of-government',
    title: 'Centre of government',
    short: 'Communications counsel for leaders’ offices, ministries and national programmes.',
    summary:
      'Strategic communications counsel for governments. Ashbright’s founders have advised the governments of Abu Dhabi and Dubai, St Kitts & Nevis and Dominica.',
    body: [
      'The centre of government speaks to many audiences at once: citizens, investors, international partners, the media and the machinery of the state itself.',
      'Rupert Wright has advised the governments of Abu Dhabi and Dubai, St Kitts & Nevis and Dominica in the Caribbean. Tom Ashby has experience in a wide range of government and business sectors, and is an expert in building and leading communications functions, especially at times of crisis and change.'
    ]
  },
  {
    slug: 'citizenship-by-investment',
    title: 'Citizenship by investment',
    short: 'Positioning and reputation for programmes that depend on international trust.',
    summary:
      'Strategic communications for citizenship-by-investment programmes and the governments that run them.',
    body: [
      'Citizenship-by-investment programmes depend on international trust. Their audiences include applicants, agents, banks, partner governments and the international press.',
      // TOM. The link to Rupert's work for St Kitts & Nevis and Dominica was removed until Tom confirms it was on these programmes.
      'We use data and intelligence to understand and engage people.'
    ]
  },
  {
    slug: 'defence',
    title: 'Defence',
    short: 'Communications for organisations where precision and confidentiality matter.',
    summary: 'Strategic communications counsel for defence organisations and suppliers.',
    body: [
      'Defence communications work under constraints most sectors never meet: confidentiality, procurement rules and close political attention.',
      'Tom Ashby’s experience across government and business sectors includes defence.'
    ]
  },
  {
    slug: 'energy',
    title: 'Energy',
    short: 'Counsel for energy companies answering to shareholders, regulators and governments.',
    summary:
      'Strategic communications for energy companies. Tom Ashby led corporate communications at Abu Dhabi National Energy Company (TAQA).',
    body: [
      'Energy companies answer to shareholders, regulators, governments and the communities where they operate.',
      'From 2012 to 2014, Tom Ashby was Group Vice President, Corporate Communications at Abu Dhabi National Energy Company (TAQA). Rupert Wright has worked with Shell and General Electric, and has run media training courses for Shell.'
    ]
  },
  {
    slug: 'financial-services',
    title: 'Financial services',
    short: 'Communications for banks, investors and capital markets.',
    summary:
      'Strategic communications for financial services, from founders with experience in capital markets, financial services and financial journalism.',
    body: [
      'Financial institutions are judged on confidence, and confidence is built or lost in communication with regulators, markets, clients and the media.',
      'Tom Ashby’s experience includes private equity, capital markets and financial services, and he spent four years as Business Editor of The National in Abu Dhabi. Rupert Wright has worked with ADCB and Deutsche Bank, and began his career at Euromoney reporting from emerging markets.'
    ]
  },
  {
    slug: 'fintech',
    title: 'Fintech',
    short: 'Positioning fast-moving companies with the credibility of established institutions.',
    summary:
      'Strategic communications for fintech companies. Tom Ashby completed the Oxford Fintech Programme at the Saïd Business School.',
    body: [
      'Fintech companies need to look like the future to customers and like a safe pair of hands to regulators, partners and investors.',
      'Tom Ashby has been involved in several successful startups in investor relations, communications and technology. In 2018 he completed a Certificate in Big Data and Social Analytics at MIT and the Oxford Fintech Programme at the Saïd Business School.'
    ]
  },
  {
    slug: 'high-net-worth-individuals',
    title: 'High net worth individuals',
    short: 'Reputation counsel for successful individuals.',
    summary:
      'As a high-profile individual, your reputation is a priceless asset. Ashbright has decades of experience helping successful individuals and business leaders manage their reputation, online and offline.',
    body: [
      'As a high-profile individual, your reputation is a priceless asset. But with the proliferation of public platforms, your reputation is constantly under threat from disgruntled employees, business rivals and inaccurate reporting.',
      'Ashbright has decades of experience helping high profile individuals and corporate leaders to manage their reputation in a disciplined way, ensuring that they maintain control over their public profile, online and offline.'
    ]
  },
  {
    slug: 'investment-promotion',
    title: 'Investment promotion',
    short: 'Telling an investment story to the people who allocate capital.',
    summary: 'Strategic communications for investment promotion.',
    body: [
      'Attracting investment is a communications task. The audience is small, well advised and comparing you with everywhere else.',
      'We design and execute state-of-the-art programmes to enable leaders to mobilise resources, shape perceptions and influence behaviour.'
    ]
  },
  {
    slug: 'royal-courts',
    title: 'Royal courts',
    short: 'Counsel for royal courts and the institutions around them.',
    summary: 'Strategic communications counsel for royal courts.',
    body: [
      'Royal courts communicate under a particular mix of tradition, public interest and international attention.',
      'Tom Ashby’s experience across government and business sectors includes royal courts.'
    ]
  },
  {
    slug: 'sovereign-wealth-and-investment-funds',
    title: 'Sovereign wealth and investment funds',
    short: 'Communications for state-backed investors under international scrutiny.',
    summary:
      'Strategic communications for sovereign wealth and investment funds. Ashbright’s founders have worked with sovereign wealth funds including Mubadala.',
    body: [
      'Sovereign investors are watched by governments, regulators, counterparties and the media in every market they enter.',
      'Tom Ashby’s experience includes sovereign wealth funds and private equity. Rupert Wright has worked with Mubadala, a sovereign wealth fund.'
    ]
  }
];

export function getSector(slug) {
  return sectors.find((s) => s.slug === slug);
}
