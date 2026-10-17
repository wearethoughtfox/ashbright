/**
 * Insights. Short articles that expand the firm's positioning.
 * Body items: plain strings are paragraphs; strings starting with "## " are h2s.
 */
export const insights = [
  {
    slug: 'perception-problems-are-intelligence-failures',
    title: 'Most perception problems are intelligence failures',
    date: '2026-06-02',
    readingTime: '3 min',
    summary:
      'Leaders usually find out about a perception problem after it has already happened. That is not a communications failure. It is an intelligence failure, and it can be fixed.',
    body: [
      'Most leaders find out about perception problems after they have already happened. A journalist calls. A board member forwards a post. A partner goes quiet. By the time the problem is visible, it is already expensive to fix.',
      'The instinct is to treat this as a communications failure: the wrong statement, the slow response, the spokesperson who was not ready. Those things matter. But they are downstream of a more basic gap. Nobody was watching.',
      '## The system that was not there',
      'Perception does not change overnight. It drifts. A narrative forms in a trade publication, gets picked up by an analyst, hardens in a few conversations between people who matter, and only then surfaces where a leader can see it. Every stage of that process is observable. Very few organisations observe it.',
      'That is what we mean by intelligence-led communications. Before a message is designed, we map the audiences that matter, monitor the environment they operate in and surface what is building before it breaks. The output is not a dashboard. It is a briefing that says: here is what people believe about you, here is where it came from, and here is what it is likely to become.',
      '## What changes',
      'With an intelligence layer in place, communications stops being a reaction and becomes a choice. You decide which conversations to enter and when. You know which stakeholders need to hear from you before a decision is announced. You are rarely surprised, and when you are, you know within hours rather than weeks.',
      'The difference between leaders who are constantly managing perception problems and leaders who are not is rarely budget or luck. It is whether they have a system watching for them.'
    ]
  },
  {
    slug: 'reactive-versus-intelligence-led-communications',
    title: 'Reactive versus intelligence-led communications',
    date: '2026-04-14',
    readingTime: '3 min',
    summary:
      'Reactive communications is damage control after the fact. Intelligence-led communications shapes the story before it shapes you. The difference is not budget. It is whether you have a system.',
    body: [
      'There are two ways to run communications at the top of an organisation. The first waits for something to happen and then responds to it, as fast and as well as it can. The second decides what should happen, and works to bring it about. Most organisations believe they are doing the second. Most are doing the first.',
      '## Reactive by default',
      'Reactive communications is not a strategy anyone chooses. It is what you get when the communications function is measured on output, sits too far from the leadership team, and has no reliable view of what audiences actually think. In that environment every announcement is a launch, every question is a surprise and every crisis is the first one.',
      'It can look busy and competent. It is also always a step behind.',
      '## Intelligence-led by design',
      'Intelligence-led communications inverts the order. It starts with the people who matter: who they are, what they believe, which channels they trust and what pressure they are under. It monitors the environment continuously. And it builds the strategy, the messages and the counsel on that evidence rather than on instinct.',
      'The practical differences are concrete. Announcements are sequenced to the stakeholders who need to hear them first. Messages are tested against what audiences already believe. Risks are surfaced while there is still time to act. The leadership team is briefed before a meeting, not debriefed after it.',
      '## It is a system, not a spend',
      'Organisations sometimes assume that intelligence-led communications is a luxury for those with the largest budgets. In our experience the reverse is true. Reactive communications is expensive precisely because it is late. The intelligence layer is what lets a smaller, more senior team make better decisions, earlier.',
      'The question to ask is not how much you are spending on communications. It is whether anyone is watching.'
    ]
  },
  {
    slug: 'why-change-programmes-fail',
    title: 'The non-obvious reason change programmes fail',
    date: '2026-02-24',
    readingTime: '4 min',
    summary:
      'It is rarely the strategy. It is almost always the communication. Leaders who know this build communications into the change plan from day one, not as an afterthought.',
    body: [
      'Ask a management consultant why a transformation failed and you will hear about execution, sponsorship and the pace of decisions. All true. But underneath most of those explanations sits a simpler one. The people who had to make the change happen did not understand it, did not believe it, or heard about it too late to do anything but resist.',
      'Poor communication is one of the leading causes of failure in change programmes. Not bad strategy.',
      '## Why it is missed',
      'Communication is usually the last workstream to be planned and the first to be cut. It is treated as an announcement problem: draft the town hall, brief the managers, send the email. But a change programme is not an announcement. It is a months-long argument with an organisation, conducted in every meeting, every rumour and every silence.',
      'Leaders who have run successful transformations know this. They build communications into the plan on day one. They map the stakeholders whose consent the programme depends on. They understand what those people believe before they try to change it. They sequence what is said, to whom, and when, with the same discipline applied to the financial model.',
      '## What it looks like in practice',
      'On the programmes Ashbright has supported alongside chief executives and their consultants, the communications work has three parts. Intelligence: who matters, what they think, and where resistance will come from. Strategy: a narrative for the change that survives being questioned, and a plan for delivering it that matches the programme’s own timeline. Counsel: a senior advisor in the room when the difficult conversations happen, because they always do.',
      'None of this is complicated. It is simply rarely done, because it is rarely planned for. The organisations that do it tend to be the ones that finish what they started.'
    ]
  }
];

export function getInsight(slug) {
  return insights.find((i) => i.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
