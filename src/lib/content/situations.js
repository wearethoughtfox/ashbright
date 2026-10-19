/**
 * Situations. Slugs are preserved from the Jekyll site so existing
 * URLs (/situations/crisis etc.) keep working.
 *
 * Copy provenance:
 *   title, short, body: TOM, word for word from ashbright/_situations/*.md
 *   short is the original `description` (both sentences), used on cards and as the meta description.
 *   ("litigation" was removed and then restored on 2026-10-19; Tom's original stands.)
 *   imageAlt: NEW.
 */
export const situations = [
  {
    slug: "start",
    title: "Where do I start?",
    short: "The forces of disruption and complexity demand high-level communications awareness from leaders. Ashbright builds state-of-the-art communications functions, helping leaders to gather intelligence and communicate effectively in an increasingly complex world.",
    image: "/images/start.webp",
    imageAlt: "Aerial view of a city at dusk",
    body: [
      "The forces of disruption and complexity in the business world demand high-level communications awareness from leaders. Latest polling data shows that audiences want authenticity and immediacy, but trust in authority, leaders and brands is at an historic low. The separation between marketing, news, propaganda and disinformation are blurring as people have become the new media. Privacy and confidentiality are under threat. Activist journalism is seeing a renaissance, while trolls and bots are encroaching on the information space. Data and analytics have enabled unprecedented audience profiling and reach.",
      "Ashbright has decades of experience in building state-of-the-art communications functions, helping leaders to gather intelligence and communicate effectively in an increasingly complex world."
    ],
    relatedServices: ["audience-intelligence", "strategy-and-planning"]
  },
  {
    slug: "smarter",
    title: "Work smarter",
    short: "As a leader in your organisation, your most precious resource is time. Ashbright can make your critical meetings and public appearances more effective through intelligence, monitoring, training and reporting.",
    image: "/images/smarter.webp",
    imageAlt: "Conference audience in a darkened hall",
    body: [
      "As a leader in your organisation, your most precious resource is time. You need to make the most out of your meetings and public appearances, and be able to assess your impact and reach with facts and figures. Ashbright has extensive experience supporting leaders as their in-house advisors, providing intelligence on prospective partners, preparing detailed briefings on industry trends and monitoring media coverage. We help to target influential partners and speaking opportunities, provide media training and support leaders throughout their public engagements, including detailed post-event reports including data illustrating impact and reach."
    ],
    relatedServices: ["audience-intelligence", "content-and-counsel"]
  },
  {
    slug: "transform",
    title: "Transformation",
    short: "Poor communication is one of the main causes of failure in change programmes. Ashbright works alongside CEOs and management consultants to ensure change programmes succeed.",
    image: "/images/transformation.webp",
    imageAlt: "Modern office building under construction",
    body: [
      "Poor communication is one of the main causes of failure in change programmes. Ashbright has decades of experience working alongside senior leaders and management consultants on restructuring programmes to define strategy, engage stakeholders, overcome resistance and meet project deadlines."
    ],
    relatedServices: ["strategy-and-planning", "crisis-and-reputation"]
  },
  {
    slug: "reputation",
    title: "Reputation matters",
    short: "As a high-profile individual, your reputation is a priceless asset. Ashbright has decades of experience helping successful individuals and business leaders manage their reputation, online and offline.",
    image: "/images/reputation.webp",
    imageAlt: "City skyline reflected in glass",
    body: [
      "As a high-profile individual, your reputation is a priceless asset. But with the proliferation of public platforms, your reputation is constantly under threat from disgruntled employees, business rivals and inaccurate reporting. Ashbright has decades of experience helping high profile individuals and corporate leaders to manage their reputation in a disciplined way, ensuring that they maintain control over their public profile, online and offline."
    ],
    relatedServices: ["crisis-and-reputation", "audience-intelligence"]
  },
  {
    slug: "marketing",
    title: "Marketing communication",
    short: "A great product or service can still fail to hit targets without an effective communications campaign. Our programmes comprise research and strategy, content development and deployment to ensure that your products and services get the attention they deserve.",
    image: "/images/marketing.webp",
    imageAlt: "Busy street crossing seen from above",
    body: [
      "A great product or service can still fail to meet targets without an effective communications campaign. Our work will ensure that you attract the attention of your key markets and stakeholders in an increasingly competitive marketplace through specialised content development and strategic media relations. Our work encompasses stakeholder mapping, peer benchmarking, media outreach, corporate content drafting, film scripts, social media content, speech writing and thought leadership positioning."
    ],
    relatedServices: ["strategy-and-planning", "content-and-counsel"]
  },
  {
    slug: "crisis",
    title: "Crisis management",
    short: "You will not be judged by the crises you face, but how you manage them. Ashbright has leadership experience in managing crises including restructuring, succession and fatalities.",
    image: "/images/crisis.webp",
    imageAlt: "Storm clouds over a city",
    body: [
      "You will not be judged by the crises you face, but how you manage them. In the social media age, there is no time to waste when crisis hits. Whether a leadership succession, litigation, accident or personal crisis, you need to act fast and smart to manage expectations and turn a crisis into an opportunity."
    ],
    relatedServices: ["crisis-and-reputation", "content-and-counsel"]
  }
];

export function getSituation(slug) {
  return situations.find((s) => s.slug === slug);
}
