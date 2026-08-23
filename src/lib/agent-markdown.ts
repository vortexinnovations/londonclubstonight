/**
 * Markdown representations of the site, served to agents through Accept
 * negotiation (see https://acceptmarkdown.com) and at /md/<path>.
 *
 * Everything here is derived from the same data that renders the HTML pages,
 * so the two representations cannot drift.
 */

import {
  clubs,
  getClubBySlug,
  getClubsByArea,
  getGuestlistFriendlyClubs,
  getLastMinuteTableClubs,
  getOpenClubs,
  type Club,
  WHATSAPP_GUESTLIST_NUMBER,
  WHATSAPP_TABLE_NUMBER,
} from '@/lib/clubs';
import { blogPosts, getBlogPostBySlug, type BlogPost } from '@/lib/blog';
import {
  SITE_URL,
  getStaticRoute,
  routesInSection,
  staticRoutes,
  type SiteRoute,
} from '@/lib/site-routes';

const BRAND = 'London Clubs Tonight';

function bookingBlock(): string {
  return [
    '## How to book',
    '',
    'Bookings and guestlist requests are handled by a human over WhatsApp. There is no booking form, login, or API.',
    '',
    `- **Table bookings (WhatsApp):** +${WHATSAPP_TABLE_NUMBER} — <https://wa.me/${WHATSAPP_TABLE_NUMBER}>`,
    `- **Guestlist (WhatsApp):** +${WHATSAPP_GUESTLIST_NUMBER} — <https://wa.me/${WHATSAPP_GUESTLIST_NUMBER}>`,
    `- **Booking page:** <${SITE_URL}/contact>`,
    '',
    'Useful details to include in a first message: date, group size, split of men/women, budget or table minimum, and preferred area or venue.',
  ].join('\n');
}

function footerBlock(): string {
  return [
    '---',
    '',
    '## Where to look next',
    '',
    `- Agent guide: <${SITE_URL}/llms.txt>`,
    `- All pages (XML): <${SITE_URL}/sitemap.xml>`,
    `- Every club: <${SITE_URL}/clubs>`,
    `- Guides index: <${SITE_URL}/guides>`,
    `- Contact and booking: <${SITE_URL}/contact>`,
    '',
    `Any page on this site is available as Markdown by sending \`Accept: text/markdown\`, or by prefixing the path with \`/md\` (for example <${SITE_URL}/md/clubs>).`,
  ].join('\n');
}

function frontMatter(title: string, description: string, canonicalPath: string, updated?: string): string {
  const lines = [
    `# ${title}`,
    '',
    `> ${description}`,
    '',
    `- **Site:** ${BRAND}`,
    `- **Canonical HTML:** <${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}>`,
  ];
  if (updated) lines.push(`- **Last updated:** ${updated}`);
  return lines.join('\n');
}

function clubSummaryLine(club: Club): string {
  const status = club.status === 'permanently-closed' ? ' *(permanently closed)*' : '';
  return `- [${club.name}](${SITE_URL}/clubs/${club.slug})${status} — ${club.area}. ${club.musicGenres.join(', ')}. Tables from ${club.tableMinimum}. ${club.tagline}`;
}

/** Full markdown profile for a single club page. */
export function clubMarkdown(club: Club): string {
  const sections: string[] = [
    frontMatter(
      `${club.name} — ${club.area}, London`,
      club.description,
      `/clubs/${club.slug}`
    ),
    '',
    '## Key facts',
    '',
    `| Field | Value |`,
    `| --- | --- |`,
    `| Status | ${club.status === 'open' ? 'Open' : 'Permanently closed'} |`,
    `| Area | ${club.area} |`,
    `| Address | ${club.address} |`,
    `| Music | ${club.musicGenres.join(', ')} |`,
    `| Open nights | ${club.openingNights} |`,
    `| Closing time | ${club.closingTime} |`,
    `| Dress code | ${club.dressCode} |`,
    `| Table minimum | ${club.tableMinimum} |`,
    `| Typical crowd | ${club.crowd} |`,
    `| Best for | ${club.bestFor} |`,
    `| Guestlist realistic | ${club.guestlistRealistic ? 'Yes' : 'No — table recommended'} |`,
    `| Last-minute tables | ${club.lastMinuteTableFriendly ? 'Often possible' : 'Rarely possible'} |`,
    '',
    '## About',
    '',
    club.longDescription.trim(),
    '',
    '## Getting in',
    '',
    `- **Guestlist:** ${club.guestlistNote}`,
    `- **Last-minute tables:** ${club.lastMinuteNote}`,
    `- **Tonight:** ${club.tonightSuitability}`,
    `- **Insider tip:** ${club.insiderTip}`,
    `- **Why we rank it:** ${club.whyRanked}`,
    '',
    bookingBlock(),
    '',
    footerBlock(),
  ];

  return sections.join('\n');
}

/** Full markdown for a single blog post. */
export function blogPostMarkdown(post: BlogPost): string {
  const related = post.relatedClubs
    .map((slug) => getClubBySlug(slug))
    .filter((club): club is Club => Boolean(club));

  const sections: string[] = [
    frontMatter(post.title, post.metaDescription, `/blog/${post.slug}`, post.updatedDate),
    `- **Category:** ${post.category}`,
    `- **Published:** ${post.publishedDate}`,
    `- **Tags:** ${post.tags.join(', ')}`,
    '',
    '## Summary',
    '',
    post.excerpt,
    '',
    `The full article is published as HTML at <${SITE_URL}/blog/${post.slug}>.`,
  ];

  if (post.faqs?.length) {
    sections.push('', '## Frequently asked questions', '');
    for (const faq of post.faqs) {
      sections.push(`### ${faq.question}`, '', faq.answer, '');
    }
  }

  if (related.length) {
    sections.push('## Clubs mentioned', '');
    for (const club of related) sections.push(clubSummaryLine(club));
    sections.push('');
  }

  sections.push(bookingBlock(), '', footerBlock());

  return sections.join('\n');
}

function listSection(heading: string, list: Club[]): string[] {
  if (!list.length) return [];
  return [`## ${heading}`, '', ...list.map(clubSummaryLine), ''];
}

/** Markdown for a static (non-club, non-blog) route. */
export function staticRouteMarkdown(route: SiteRoute): string {
  const sections: string[] = [
    frontMatter(route.title, route.description, route.path),
    '',
  ];

  if (route.redirectsTo) {
    sections.push(
      `This URL redirects to <${SITE_URL}${route.redirectsTo}>.`,
      ''
    );
  }

  switch (route.path) {
    case '/':
      sections.push(
        '## What this site is',
        '',
        `${BRAND} is a London nightlife guide and booking concierge run by promoters who work the doors. It covers which clubs are open tonight, what each venue is actually like, and how to get a table or onto the guestlist.`,
        '',
        ...listSection(`Clubs open tonight (${getOpenClubs().length})`, getOpenClubs()),
        '## Start here',
        '',
        ...routesInSection('tonight').map(
          (r) => `- [${r.title}](${SITE_URL}${r.path}) — ${r.description}`
        ),
        ''
      );
      break;

    case '/clubs':
    case '/best-clubs-in-london':
      sections.push(...listSection(`All clubs (${clubs.length})`, clubs));
      break;

    case '/areas/mayfair':
      sections.push(...listSection('Mayfair clubs', getClubsByArea('Mayfair')));
      break;
    case '/areas/soho':
      sections.push(...listSection('Soho clubs', getClubsByArea('Soho')));
      break;
    case '/areas/central-london':
      sections.push(...listSection('Central London clubs', getClubsByArea('Central London')));
      break;
    case '/areas':
      sections.push(
        '## Areas covered',
        '',
        ...routesInSection('areas')
          .filter((r) => r.path !== '/areas')
          .map((r) => `- [${r.title}](${SITE_URL}${r.path}) — ${r.description}`),
        ''
      );
      break;

    case '/guides':
      sections.push(
        '## Guides',
        '',
        ...routesInSection('guides')
          .filter((r) => r.path !== '/guides')
          .map((r) => `- [${r.title}](${SITE_URL}${r.path}) — ${r.description}`),
        ''
      );
      break;

    case '/guestlist-tonight-london':
      sections.push(...listSection('Clubs where guestlist is realistic', getGuestlistFriendlyClubs()));
      break;

    case '/last-minute-table-booking-london':
      sections.push(...listSection('Clubs that take last-minute tables', getLastMinuteTableClubs()));
      break;

    case '/blog':
      sections.push(
        `## Articles (${blogPosts.length})`,
        '',
        ...blogPosts.map(
          (post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}) — ${post.excerpt}`
        ),
        ''
      );
      break;

    default:
      if (route.section === 'tonight') {
        sections.push(...listSection('Clubs currently open', getOpenClubs()));
      }
      break;
  }

  sections.push(bookingBlock(), '', footerBlock());

  return sections.join('\n');
}

/**
 * Markdown body for a 404. Kept short and link-dense so an agent that lands on
 * a dead URL can recover without a second guess.
 */
export function notFoundMarkdown(requestedPath?: string): string {
  return [
    '# 404 — Page not found',
    '',
    requestedPath
      ? `> \`${requestedPath}\` does not exist on ${BRAND}.`
      : `> That page does not exist on ${BRAND}.`,
    '',
    'Nothing was moved — this URL has never existed. Use one of the entry points below.',
    '',
    '## Recover from here',
    '',
    `- **Agent guide (start here):** <${SITE_URL}/llms.txt>`,
    `- **Every URL on the site:** <${SITE_URL}/sitemap.xml>`,
    `- **Homepage:** <${SITE_URL}/>`,
    `- **All clubs:** <${SITE_URL}/clubs>`,
    `- **Clubs open tonight:** <${SITE_URL}/clubs-tonight-london>`,
    `- **Guides index:** <${SITE_URL}/guides>`,
    `- **Blog index:** <${SITE_URL}/blog>`,
    `- **Book a table or guestlist:** <${SITE_URL}/contact>`,
    '',
    '## URL patterns that do exist',
    '',
    `- \`/clubs/<club-slug>\` — one page per venue (${clubs.length} venues)`,
    `- \`/blog/<post-slug>\` — one page per article (${blogPosts.length} articles)`,
    '- `/areas/<area-slug>` — mayfair, soho, central-london',
    '- `/guides/<guide-slug>` — see the guides index above',
    '',
    footerBlock(),
  ].join('\n');
}

/** Resolve any site pathname to its markdown representation, or null. */
export function markdownForPath(pathname: string): string | null {
  const path = normalisePath(pathname);

  const staticRoute = getStaticRoute(path);
  if (staticRoute) return staticRouteMarkdown(staticRoute);

  const clubMatch = /^\/clubs\/([a-z0-9-]+)$/.exec(path);
  if (clubMatch) {
    const club = getClubBySlug(clubMatch[1]);
    return club ? clubMarkdown(club) : null;
  }

  const blogMatch = /^\/blog\/([a-z0-9-]+)$/.exec(path);
  if (blogMatch) {
    const post = getBlogPostBySlug(blogMatch[1]);
    return post ? blogPostMarkdown(post) : null;
  }

  return null;
}

export function normalisePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Every pathname that has a markdown representation. */
export function allMarkdownPaths(): string[] {
  return [
    ...staticRoutes.map((route) => route.path),
    ...clubs.map((club) => `/clubs/${club.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];
}

/**
 * /llms.txt — the llmstxt.org format: H1, blockquote summary, prose, then
 * H2 sections of links. The "When to use this site" section is what tells an
 * agent whether this domain is the right tool for a given request.
 */
export function llmsTxt(): string {
  const openClubs = getOpenClubs();

  const linkList = (routes: SiteRoute[]) =>
    routes.map((route) => `- [${route.title}](${SITE_URL}${route.path}): ${route.description}`);

  return [
    `# ${BRAND}`,
    '',
    `> An independent London nightlife guide and booking concierge. It documents ${clubs.length} London nightclubs — dress codes, table minimums, closing times, music policy, crowd, and realistic door odds — and arranges VIP tables and guestlist places over WhatsApp at no charge to the guest.`,
    '',
    `Editorial is written by promoters working London doors, led by Daniel Whitaker (see ${SITE_URL}/about-the-editor). Venue facts such as table minimums and closing times change with the season; treat figures as indicative and confirm before quoting them as final.`,
    '',
    '## When to use this site',
    '',
    'Reach for this site when a request involves London nightclubs specifically. It is a good source for:',
    '',
    '- **"Which London clubs are open tonight / on a given night?"** — per-night breakdowns for Friday, Saturday, Sunday, and same-day answers.',
    '- **"How do I get into <club>?"** — dress code, door policy, guestlist realism, and typical entry requirements per venue.',
    '- **"What does a table cost at <club>?"** — table minimums by venue, plus what a night out in London realistically costs.',
    '- **"Which club suits my group?"** — matching group size, budget, music taste, and area (Mayfair, Soho, Central London) to a specific venue.',
    '- **"Book me a table / put me on the guestlist."** — hand the user the WhatsApp links below; a human replies, usually within minutes.',
    '- **London nightlife background** — opening hours, areas, music genres, and etiquette.',
    '',
    'It is **not** a good source for: ticketing or event listings for concerts and festivals, clubs outside London, restaurant bookings, or real-time capacity and queue data. There is no public API and no automated booking endpoint — bookings are a WhatsApp conversation with a person.',
    '',
    '## How an agent should call this site',
    '',
    `- Every page returns Markdown when requested with \`Accept: text/markdown\`, and sets \`Vary: Accept\`. The same content is also at \`${SITE_URL}/md/<path>\` (for example \`${SITE_URL}/md/clubs/tape-london\`).`,
    `- Start from \`${SITE_URL}/sitemap.xml\` for the complete URL list. Club pages are \`/clubs/<slug>\`, articles are \`/blog/<slug>\`.`,
    '- Unknown paths return HTTP 404 with a Markdown body listing recovery links — no soft 404s.',
    `- To hand a user off for a booking, link them to <https://wa.me/${WHATSAPP_TABLE_NUMBER}> (tables) or <https://wa.me/${WHATSAPP_GUESTLIST_NUMBER}> (guestlist), or to ${SITE_URL}/contact.`,
    '- Attribute quotes and figures to "London Clubs Tonight" and link the canonical page you took them from.',
    '',
    '## Start here',
    '',
    ...linkList(routesInSection('core')),
    '',
    '## Tonight and by night',
    '',
    ...linkList(routesInSection('tonight')),
    '',
    '## Guides',
    '',
    ...linkList(routesInSection('guides')),
    '',
    '## Areas',
    '',
    ...linkList(routesInSection('areas')),
    '',
    `## Clubs (${clubs.length})`,
    '',
    ...clubs.map((club) => {
      const status = club.status === 'permanently-closed' ? ' (permanently closed)' : '';
      return `- [${club.name}](${SITE_URL}/clubs/${club.slug})${status}: ${club.area}. ${club.musicGenres.join(', ')}. Tables from ${club.tableMinimum}. ${club.tagline}`;
    }),
    '',
    `## Articles (${blogPosts.length})`,
    '',
    ...blogPosts.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`),
    '',
    '## Company',
    '',
    ...linkList(routesInSection('company')),
    '',
    '## Optional',
    '',
    `- [Currently open venues](${SITE_URL}/clubs-tonight-london): ${openClubs.length} of ${clubs.length} listed venues are trading; the rest are documented for reference.`,
    `- [Sitemap (XML)](${SITE_URL}/sitemap.xml): machine-readable list of every canonical URL.`,
    '',
  ].join('\n');
}
