/**
 * Services. Four practice areas, each with its own page.
 *
 * Copy provenance:
 *   The four-service grouping and the titles: NEW (the 2017 site had three
 *   categories: research and strategy, content development, engagement).
 *   deliverables: TOM. Every item from the 2017 lists, each used once, as set in
 *   the copy review doc.
 *   short: the item list joined with " · " (set below). Used as the intro line
 *   and card text everywhere, so it never repeats a Situation sentence.
 *   intro: TOM, edited. Sentences lifted from the 2017 home page and
 *   situation pages, regrouped under each service. No new facts.
 *   summary: TOM, edited. Meta description.
 */
const serviceData = [
  {
    slug: 'audience-intelligence',
    title: 'Audience intelligence',
    summary:
      'Ashbright uses data and intelligence to understand and engage people: peer group analysis, audience profiling and targeting, trends and channels analysis, and data analytics.',
    intro: [
      'We use data and intelligence to understand and engage people.',
      'Ashbright has extensive experience supporting leaders as their in-house advisors, providing intelligence on prospective partners, preparing detailed briefings on industry trends and monitoring media coverage.'
    ],
    deliverables: [
      'Peer group analysis',
      'Audience profiling and targeting',
      'Trends analysis',
      'Channels analysis',
      'Data analytics'
    ],
    relatedSituations: ['start', 'smarter'],
    relatedServices: ['strategy-and-planning', 'crisis-and-reputation']
  },
  {
    slug: 'strategy-and-planning',
    title: 'Strategy and planning',
    summary:
      'Ashbright designs and executes state-of-the-art programmes to enable leaders to mobilise resources, shape perceptions and influence behaviour: communications strategy, campaign planning and management reporting.',
    intro: [
      'We design and execute state-of-the-art programmes to enable leaders to mobilise resources, shape perceptions and influence behaviour.',
      'Ashbright has decades of experience working alongside senior leaders and management consultants on restructuring programmes to define strategy, engage stakeholders, overcome resistance and meet project deadlines.'
    ],
    deliverables: [
      'Communications strategy',
      'Campaign planning',
      'Management reporting',
      'Feedback development'
    ],
    relatedSituations: ['start', 'transform', 'marketing'],
    relatedServices: ['audience-intelligence', 'content-and-counsel']
  },
  {
    slug: 'content-and-counsel',
    title: 'Content and counsel',
    summary:
      'Messaging, thought leadership, speechwriting, media training and relations, leadership support and relationship building from Ashbright.',
    intro: [
      'Our work encompasses stakeholder mapping, peer benchmarking, media outreach, corporate content drafting, film scripts, social media content, speech writing and thought leadership positioning.',
      'We help to target influential partners and speaking opportunities, provide media training and support leaders throughout their public engagements, including detailed post-event reports including data illustrating impact and reach.'
    ],
    deliverables: [
      'Messaging',
      'Thought leadership',
      'Speechwriting',
      'Media training and relations',
      'Leadership support',
      'Relationship building'
    ],
    relatedSituations: ['smarter', 'marketing'],
    relatedServices: ['strategy-and-planning', 'crisis-and-reputation']
  },
  {
    slug: 'crisis-and-reputation',
    title: 'Crisis and reputation',
    summary:
      'You will not be judged by the crises you face, but how you manage them. Ashbright has leadership experience in managing crises including restructuring, succession and fatalities.',
    intro: [
      'You will not be judged by the crises you face, but how you manage them. In the social media age, there is no time to waste when crisis hits. Whether a leadership succession, accident or personal crisis, you need to act fast and smart to manage expectations and turn a crisis into an opportunity.',
      'As a high-profile individual, your reputation is a priceless asset. But with the proliferation of public platforms, your reputation is constantly under threat from disgruntled employees, business rivals and inaccurate reporting. Ashbright has decades of experience helping high profile individuals and corporate leaders to manage their reputation in a disciplined way, ensuring that they maintain control over their public profile, online and offline.'
    ],
    deliverables: ['Issues management', 'Crisis management'],
    relatedSituations: ['crisis', 'reputation'],
    relatedServices: ['audience-intelligence', 'content-and-counsel']
  }
];

export const services = serviceData.map((s) => ({ ...s, short: s.deliverables.join(' · ') }));

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
