/**
 * Services. Four practice areas, each with its own page for search visibility.
 * The old site listed capabilities under three headings (research and strategy,
 * content development, engagement). Those capabilities are redistributed here.
 */
export const services = [
  {
    slug: 'audience-intelligence',
    title: 'Audience intelligence',
    short: 'Know who matters, what they believe and where they listen, before a word is written.',
    summary:
      'Audience profiling, stakeholder mapping, media monitoring and trends analysis. Ashbright builds the intelligence layer that every message should stand on.',
    intro: [
      'Most communications programmes start with the message. Ours start with the people who will hear it. Before anything is written, we profile and map the audiences that matter to you: what they believe, which channels they trust, who influences them and where the pressure points are.',
      'That intelligence layer is what turns communications from instinct into a discipline. It tells you which battles are worth fighting, which stakeholders need attention now, and what is already being said about you in rooms you are not in.',
      'The work draws on data and analytics, structured monitoring and decades of experience reading how news, markets and governments respond to leaders. It is delivered as briefings you can act on, not dashboards you have to interpret.'
    ],
    deliverables: [
      'Audience profiling and targeting',
      'Stakeholder and influencer mapping',
      'Peer group and competitor analysis',
      'Trends analysis',
      'Channels analysis',
      'Media monitoring and data analytics',
      'Management reporting'
    ],
    relatedSituations: ['start', 'smarter'],
    relatedServices: ['strategy-and-planning', 'crisis-and-reputation']
  },
  {
    slug: 'strategy-and-planning',
    title: 'Strategy and planning',
    short: 'Communications programmes built around specific objectives, not activity for its own sake.',
    summary:
      'Communications strategy, campaign planning and issues management for leaders who need to mobilise resources, manage change or influence behaviour.',
    intro: [
      'A communications strategy should answer one question: what do you need people to think, feel or do, and by when? We build programmes around that answer. Mobilising investors. Winning support for a restructuring. Shifting how a market or a ministry sees you.',
      'Every plan is grounded in the intelligence work that precedes it, so choices about message, messenger, channel and timing are made on evidence. We also design the communications function itself when a leader needs one built or rebuilt: structure, people, processes and reporting.',
      'We work alongside chief executives, boards, government offices and the management consultants already in the room. The plan is a shared instrument, and we stay involved until it is delivered.'
    ],
    deliverables: [
      'Communications strategy',
      'Campaign planning',
      'Issues management',
      'Communications function design and build',
      'Stakeholder engagement planning',
      'Investor and partner mobilisation',
      'Measurement frameworks'
    ],
    relatedSituations: ['start', 'transform', 'marketing'],
    relatedServices: ['audience-intelligence', 'content-and-counsel']
  },
  {
    slug: 'content-and-counsel',
    title: 'Content and counsel',
    short: 'Speeches, messaging and thought leadership, with a senior advisor beside you when it counts.',
    summary:
      'Speechwriting, messaging, thought leadership, media training and leadership support from former journalists and senior communications advisors.',
    intro: [
      'The people who write and advise at Ashbright spent their earlier careers as editors, correspondents and heads of communications. They know what a good story sounds like, what a weak argument looks like from the other side of the table, and how a single phrase can travel.',
      'We write speeches, opinion pieces, messaging frameworks, corporate content, film scripts and social content. We prepare leaders for interviews, panels and difficult conversations. And we stay close, in the room before a critical meeting and on the platform at a public appearance.',
      'Content is only ever the last step. Everything we produce is built on the audience intelligence and strategy work that came before it, so it lands with the people it was written for.'
    ],
    deliverables: [
      'Messaging and narrative development',
      'Speechwriting',
      'Thought leadership and opinion',
      'Media training and media relations',
      'Leadership support and event preparation',
      'Corporate content, film scripts and social content',
      'Relationship building'
    ],
    relatedSituations: ['smarter', 'marketing'],
    relatedServices: ['strategy-and-planning', 'crisis-and-reputation']
  },
  {
    slug: 'crisis-and-reputation',
    title: 'Crisis and reputation',
    short: 'Leadership-level experience of restructuring, succession, litigation and fatalities.',
    summary:
      'Crisis management and reputation counsel for leaders, companies and governments. Fast, disciplined and experienced at the top level.',
    intro: [
      'You will not be judged by the crises you face, but by how you manage them. In the social media age there is no time to waste when a crisis hits, and no room for a first-time response. Ashbright has led communications through restructurings, leadership successions, litigation, accidents and fatalities.',
      'Reputation work is the slower discipline that stops many crises from starting. For high-profile individuals and corporate leaders, a reputation is a priceless asset under constant pressure from rivals, former employees and inaccurate reporting. We help you manage it in a disciplined way, online and offline.',
      'Both are intelligence-led. Monitoring tells you what is building before it breaks. Audience mapping tells you who needs to hear from you first. When it counts, we are in the room.'
    ],
    deliverables: [
      'Crisis planning and response',
      'Reputation strategy for leaders and organisations',
      'Litigation and regulatory communications',
      'Succession and restructuring communications',
      'Issues monitoring and early warning',
      'Spokesperson preparation',
      'Post-crisis review and rebuilding'
    ],
    relatedSituations: ['crisis', 'reputation'],
    relatedServices: ['audience-intelligence', 'content-and-counsel']
  }
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
