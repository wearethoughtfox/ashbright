/**
 * Situations. Slugs are preserved from the Jekyll site so existing
 * URLs (/situations/crisis etc.) keep working.
 */
export const situations = [
  {
    slug: 'start',
    title: 'Where do I start?',
    short: 'Disruption and complexity demand high-level communications awareness from leaders.',
    summary:
      'The forces of disruption and complexity demand high-level communications awareness from leaders. Ashbright builds state-of-the-art communications functions, helping leaders gather intelligence and communicate effectively.',
    image: '/images/start.webp',
    imageAlt: 'Aerial view of a city at dusk',
    body: [
      'The forces of disruption and complexity in the business world demand high-level communications awareness from leaders. Polling shows that audiences want authenticity and immediacy, but trust in authority, leaders and brands is at an historic low. The separation between marketing, news, propaganda and disinformation is blurring as people have become the new media.',
      'Privacy and confidentiality are under threat. Activist journalism is seeing a renaissance, while trolls and bots encroach on the information space. Data and analytics have enabled unprecedented audience profiling and reach.',
      'Ashbright has decades of experience building state-of-the-art communications functions, helping leaders gather intelligence and communicate effectively in an increasingly complex world. We start with a clear picture of your environment, then build the function, the plan and the counsel around it.'
    ],
    relatedServices: ['audience-intelligence', 'strategy-and-planning']
  },
  {
    slug: 'smarter',
    title: 'Work smarter',
    short: 'Make critical meetings and public appearances more effective through intelligence, monitoring and training.',
    summary:
      'As a leader, your most precious resource is time. Ashbright makes your critical meetings and public appearances more effective through intelligence, monitoring, training and reporting.',
    image: '/images/smarter.webp',
    imageAlt: 'Conference audience in a darkened hall',
    body: [
      'As a leader in your organisation, your most precious resource is time. You need to make the most of every meeting and public appearance, and to assess your impact and reach with facts and figures rather than impressions.',
      'Ashbright has extensive experience supporting leaders as their in-house advisors: providing intelligence on prospective partners, preparing detailed briefings on industry trends and monitoring media coverage. We help target influential partners and speaking opportunities, provide media training and support leaders throughout their public engagements.',
      'After each engagement we report back with data illustrating impact and reach, so the next decision about where to spend your time is better informed than the last.'
    ],
    relatedServices: ['audience-intelligence', 'content-and-counsel']
  },
  {
    slug: 'transform',
    title: 'Transformation',
    short: 'Poor communication is one of the main causes of failure in change programmes.',
    summary:
      'Poor communication is one of the main causes of failure in change programmes. Ashbright works alongside CEOs and management consultants to ensure change programmes succeed.',
    image: '/images/transformation.webp',
    imageAlt: 'Modern office building under construction',
    body: [
      'Poor communication is one of the main causes of failure in change programmes. It is rarely the strategy that fails. It is almost always the way the strategy was explained, sequenced and defended to the people who had to live with it.',
      'Ashbright has decades of experience working alongside senior leaders and management consultants on restructuring programmes: defining the story, engaging stakeholders, overcoming resistance and meeting project deadlines.',
      'We build communications into the change plan from day one, not as an afterthought, so that the leaders driving the programme are ahead of the questions rather than answering them under pressure.'
    ],
    relatedServices: ['strategy-and-planning', 'crisis-and-reputation']
  },
  {
    slug: 'reputation',
    title: 'Reputation matters',
    short: 'As a high-profile individual, your reputation is a priceless asset under constant threat.',
    summary:
      'As a high-profile individual, your reputation is a priceless asset. Ashbright has decades of experience helping successful individuals and business leaders manage their reputation, online and offline.',
    image: '/images/reputation.webp',
    imageAlt: 'City skyline reflected in glass',
    body: [
      'As a high-profile individual, your reputation is a priceless asset. But with the proliferation of public platforms, it is constantly under threat from disgruntled employees, business rivals and inaccurate reporting.',
      'Ashbright has decades of experience helping high-profile individuals and corporate leaders manage their reputation in a disciplined way, ensuring they maintain control over their public profile, online and offline.',
      'The work combines monitoring, so you know what is being said and by whom, with a deliberate programme of the things you want to be known for. Reputation built over years deserves to be defended with the same rigour it took to build.'
    ],
    relatedServices: ['crisis-and-reputation', 'audience-intelligence']
  },
  {
    slug: 'marketing',
    title: 'Marketing communication',
    short: 'A great product or service can still fail to hit targets without an effective communications campaign.',
    summary:
      'A great product or service can still fail to hit targets without an effective communications campaign. Ashbright programmes comprise research and strategy, content development and deployment.',
    image: '/images/marketing.webp',
    imageAlt: 'Busy street crossing seen from above',
    body: [
      'A great product or service can still fail to meet targets without an effective communications campaign. Our work ensures that you attract the attention of your key markets and stakeholders in an increasingly competitive marketplace.',
      'Programmes combine stakeholder mapping and peer benchmarking with specialised content development and strategic media relations. That includes media outreach, corporate content, film scripts, social media content, speech writing and thought leadership positioning.',
      'Because the research comes first, the campaign spends its effort where the audience actually is, and reports back on what moved.'
    ],
    relatedServices: ['strategy-and-planning', 'content-and-counsel']
  },
  {
    slug: 'crisis',
    title: 'Crisis management',
    short: 'You will not be judged by the crises you face, but by how you manage them.',
    summary:
      'You will not be judged by the crises you face, but how you manage them. Ashbright has leadership experience in managing crises including restructuring, succession and fatalities.',
    image: '/images/crisis.webp',
    imageAlt: 'Storm clouds over a city',
    body: [
      'You will not be judged by the crises you face, but by how you manage them. In the social media age, there is no time to waste when a crisis hits.',
      'Whether a leadership succession, litigation, accident or personal crisis, you need to act fast and smart to manage expectations and, where possible, turn a crisis into an opportunity. Ashbright has leadership experience in managing crises including restructuring, succession and fatalities.',
      'We are in the room when it counts: shaping the first statement, preparing the spokesperson, sequencing who hears what and when, and monitoring how the story moves so the response stays ahead of it.'
    ],
    relatedServices: ['crisis-and-reputation', 'content-and-counsel']
  }
];

export function getSituation(slug) {
  return situations.find((s) => s.slug === slug);
}
