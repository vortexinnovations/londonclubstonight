/**
 * Single source of truth for the site's static routes.
 *
 * Consumed by the XML sitemap, /llms.txt, and the markdown representations
 * served through Accept negotiation, so all three stay in sync.
 *
 * Order matters: the sitemap emits these in array order (with club and blog
 * pages spliced in after /clubs and /blog respectively).
 */

export const SITE_URL = 'https://londonclubstonight.com';

export type RouteSection =
  | 'core'
  | 'tonight'
  | 'guides'
  | 'areas'
  | 'blog'
  | 'company';

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: 'daily' | 'weekly' | 'monthly';
  section: RouteSection;
  /** Redirects to another route; excluded from llms.txt to avoid dead ends. */
  redirectsTo?: string;
}

export const staticRoutes: SiteRoute[] = [
  {
    path: '/',
    title: 'London Clubs Tonight',
    description:
      'Find out which London clubs are open tonight. Expert recommendations for Mayfair, Soho, and beyond — VIP tables, guestlist spots, and insider tips from promoters who know every door.',
    priority: 1,
    changeFrequency: 'daily',
    section: 'core',
  },
  {
    path: '/best-clubs-in-london',
    title: 'Best Clubs in London — The Definitive Ranked Guide',
    description:
      'The best nightclubs in London, ranked by promoters who actually work the doors. From Tape London to Ministry of Sound — honest reviews, table prices, and how to get in.',
    priority: 0.95,
    changeFrequency: 'weekly',
    section: 'core',
  },
  {
    path: '/clubs',
    title: 'Complete London Nightclub List',
    description:
      'The definitive list of the best nightclubs in London. Insider reviews, entry tips, table booking info, and guestlist access for every top London club.',
    priority: 0.7,
    changeFrequency: 'weekly',
    section: 'core',
  },
  {
    path: '/guides/hardest-clubs-to-get-into',
    title: "London's Most Exclusive Clubs",
    description:
      "Insider guide to the city's most premium clubs, what makes each one special, and how to arrange your night.",
    priority: 0.8,
    changeFrequency: 'monthly',
    section: 'guides',
  },
  {
    path: '/guides/clubs-open-late',
    title: 'Clubs Open Late in London',
    description:
      'Every London club grouped by closing time. Find venues open until 3am, 3:30am, and 6am.',
    priority: 0.8,
    changeFrequency: 'monthly',
    section: 'guides',
  },
  {
    path: '/guides/how-to-get-into-london-clubs',
    title: 'Guestlists & Table Bookings — The Complete Guide',
    description:
      'The complete guide to guestlists, table bookings, dress codes, group composition, and age requirements at London nightclubs. Honest advice from promoters.',
    priority: 0.85,
    changeFrequency: 'monthly',
    section: 'guides',
  },
  {
    path: '/guides/london-clubs-by-music-genre',
    title: 'London Clubs by Music Genre',
    description:
      'Find the right London club for your music taste. Hip-hop, house, RnB, techno, and open format — every venue categorised by what they actually play.',
    priority: 0.8,
    changeFrequency: 'monthly',
    section: 'guides',
  },
  {
    path: '/guides',
    title: 'London Nightclub Guides',
    description:
      'Insider guides to London nightlife. Late-night venues, music genres, dress codes, guestlists, table bookings, and honest advice from promoters who know the scene.',
    priority: 0.6,
    changeFrequency: 'monthly',
    section: 'guides',
  },
  {
    path: '/areas/mayfair',
    title: 'Best Clubs in Mayfair',
    description:
      "The definitive guide to Mayfair nightclubs. Tape, Cirque, TABU, Funky Buddha, Maddox, Scotch, and more — table bookings, guestlist, and insider tips for every Mayfair club.",
    priority: 0.8,
    changeFrequency: 'monthly',
    section: 'areas',
  },
  {
    path: '/areas/central-london',
    title: 'Best Clubs in Central London',
    description:
      "Complete guide to central London nightclubs. Mayfair, Soho, St James's, and Piccadilly — every club worth knowing about in the West End with table bookings and guestlist.",
    priority: 0.75,
    changeFrequency: 'monthly',
    section: 'areas',
  },
  {
    path: '/areas/soho',
    title: 'Best Clubs in Soho',
    description:
      "Guide to Soho nightclubs and the clubs on Soho's borders. Cirque Le Soir, the Carnaby scene, and links to Mayfair's luxury club cluster just steps away.",
    priority: 0.75,
    changeFrequency: 'monthly',
    section: 'areas',
  },
  {
    path: '/areas',
    title: 'London Clubs by Area',
    description:
      'Explore London nightclubs by area. Mayfair, Soho, central London, and beyond — find the best clubs near you with table bookings and guestlist access.',
    priority: 0.6,
    changeFrequency: 'monthly',
    section: 'areas',
  },
  {
    path: '/contact',
    title: 'Book a Table or Join Guestlist',
    description:
      "Book a VIP table or get on the guestlist at London's best nightclubs. Direct WhatsApp booking with London's top club promoters. Instant response, no forms.",
    priority: 0.7,
    changeFrequency: 'monthly',
    section: 'company',
  },
  {
    path: '/about-the-editor',
    title: 'About the Editor — Daniel Whitaker',
    description:
      'Meet Daniel Whitaker, Nightlife Scout and editor of London Clubs Tonight. He tracks 50+ venues weekly, covering what is open, what is good, and what you can get into tonight.',
    priority: 0.5,
    changeFrequency: 'monthly',
    section: 'company',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description:
      'How London Clubs Tonight handles your data: what we collect, what we do not collect, how WhatsApp booking enquiries are used, and how to request deletion.',
    priority: 0.3,
    changeFrequency: 'monthly',
    section: 'company',
  },
  {
    path: '/blog',
    title: 'London Nightlife Blog',
    description:
      'The London nightlife blog for people who actually go out. Insider guides to London clubs, honest reviews, dress code tips, and everything you need to know before a night out in London.',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'blog',
  },
  {
    path: '/clubs-tonight-london',
    title: "Clubs Open Tonight in London",
    description:
      "Which London clubs are open right now? Guestlist availability, same-night table bookings, and what's happening tonight.",
    priority: 0.9,
    changeFrequency: 'daily',
    section: 'tonight',
  },
  {
    path: '/mayfair-clubs-tonight',
    title: 'Mayfair Clubs Open Tonight',
    description:
      "What's open in Mayfair tonight? Guestlist spots, same-night VIP tables, and insider tips.",
    priority: 0.9,
    changeFrequency: 'daily',
    section: 'tonight',
  },
  {
    path: '/best-clubs-this-weekend-london',
    title: 'Best Clubs This Weekend in London',
    description:
      'The best London clubs open Friday and Saturday with table availability, guestlist options, and honest insider picks.',
    priority: 0.9,
    changeFrequency: 'daily',
    section: 'tonight',
  },
  {
    path: '/guestlist-tonight-london',
    title: 'Get on a Guestlist Tonight in London',
    description:
      "Free guestlist at London's best clubs tonight. Which venues still have spots, what ratio you need, and how to get your name on the door in minutes.",
    priority: 0.9,
    changeFrequency: 'daily',
    section: 'tonight',
  },
  {
    path: '/last-minute-table-booking-london',
    title: 'Last Minute Table Booking in London',
    description:
      "Need a VIP table tonight? Same-day availability at London's top clubs. Message us on WhatsApp — we confirm in minutes. No deposit, no fees.",
    priority: 0.9,
    changeFrequency: 'daily',
    section: 'tonight',
  },
  {
    path: '/can-you-get-into-tape-london-tonight',
    title: 'Can You Get Into Tape London Tonight?',
    description:
      "Honest insider advice on getting into Tape London tonight. Walk-in chances, table booking tips, dress code, and what to realistically expect at Mayfair's most exclusive club.",
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
  },
  {
    path: '/best-clubs-for-last-minute-tables-london',
    title: 'Best Clubs for Last-Minute Tables in London',
    description:
      'Which London clubs can still seat you tonight. Redirects to the last-minute table booking guide.',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
    redirectsTo: '/last-minute-table-booking-london',
  },
  {
    path: '/where-to-go-out-tonight-in-mayfair',
    title: 'Where to Go Out Tonight in Mayfair',
    description:
      "Tonight's Mayfair options. Redirects to the Mayfair clubs tonight guide.",
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
    redirectsTo: '/mayfair-clubs-tonight',
  },
  {
    path: '/late-night-clubs-london-tonight',
    title: 'Late Night Clubs in London Tonight',
    description:
      'Which clubs stay open latest tonight? Sorted by closing time with last-entry times, transport home, and what to expect after midnight.',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
  },
  {
    path: '/clubs-open-sunday-night-london',
    title: 'Clubs Open Sunday Night in London',
    description:
      'Which London clubs are open on Sunday nights? An honest guide — most clubs are closed, but here are your real options and how to plan a better weekend instead.',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
  },
  {
    path: '/friday-nightclubs-london',
    title: 'Friday Night Clubs in London',
    description:
      'The best London nightclubs open this Friday. Which venues peak on Fridays, booking tips, and how to guarantee your spot this week.',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
  },
  {
    path: '/saturday-nightclubs-london',
    title: 'Saturday Night Clubs in London',
    description:
      "Saturday is London's biggest night. Every club open, table availability, booking deadlines, and how to make the most of the busiest night of the week.",
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'tonight',
  },
];

/** Look up a static route by pathname (no trailing slash, leading slash required). */
export function getStaticRoute(path: string): SiteRoute | undefined {
  return staticRoutes.find((route) => route.path === path);
}

export function routesInSection(section: RouteSection): SiteRoute[] {
  return staticRoutes.filter((route) => route.section === section && !route.redirectsTo);
}
