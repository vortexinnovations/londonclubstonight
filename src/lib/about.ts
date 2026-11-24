/**
 * Who runs the site and how its pages are written, shared by the about page
 * (app/about/page.tsx) and its Markdown version (lib/agent-markdown.ts), so
 * readers and agents are told the same thing.
 */

export const ABOUT_PATH = '/about';

/** The byline link on every article: the "How we write" section of the about page. */
export const HOW_WE_WRITE_HREF = '/about#how-we-write';

export const TEAM_NAME = 'the London Clubs Tonight team';

export const WHO_RUNS_US = [
  'London Clubs Tonight is run by a London nightlife booking team. We arrange VIP tables and guestlist places at London clubs, and we handle enquiries on WhatsApp. The site is about tonight: which London clubs are open, and how to get a table or a guestlist place for the same night.',
  'How we make money: we earn a commission when a table or guestlist place we arrange goes ahead. That makes us a booking service, not an independent review site, so read our recommendations with that in mind.',
];

export const HOW_WE_WRITE = [
  'We write and update our guides with the help of AI tools. They are based on what venues announce, published listings and news reports, and the prices and door policies our booking desk works with.',
  'Automated checks look for closed venues, broken links and house-style problems before a page goes live. From 25 November 2026, a member of our team reads and approves every new article before it is published.',
  'We credit pages to the London Clubs Tonight team rather than to individual writers.',
  'Prices, opening nights and door policies change often. Message us before you go and we will confirm the details for your night.',
];

export const CORRECTIONS = 'If something on a page is wrong or out of date, tell us on WhatsApp and we will correct it.';
