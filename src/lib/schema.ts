/**
 * Schema.org JSON-LD builders.
 *
 * Kept separate from the <SchemaMarkup> component so they stay plain data
 * (importable and testable without a JSX runtime).
 *
 * The site is an online booking team with no premises of its own, so it is an
 * Organization (never a LocalBusiness, never with an address). FAQ answers
 * stay visible on the pages but are not marked up as FAQPage: Google stopped
 * showing FAQ rich results on 7 May 2026.
 */
import { WHATSAPP_TABLE_NUMBER } from '@/lib/clubs';

const SITE = 'https://londonclubstonight.com';

/** Stable entity anchors so the Organization and WebSite nodes resolve to one brand. */
export const ORGANIZATION_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

/**
 * Who wrote a page, as Article markup names it: the site's team, with its name
 * inline (an author given only as an @id has no name where the node is missing).
 */
export const TEAM_AUTHOR = {
  '@type': 'Organization',
  name: 'London Clubs Tonight',
  url: `${SITE}/about`,
} as const;

/**
 * Article markup for a guide or post. Both dates are the page's real ones (a
 * code page keeps them as constants next to the page; a post has its stored
 * dates): never the build or request time.
 */
export function getArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${SITE}${url}`,
    mainEntityOfPage: `${SITE}${url}`,
    ...(image ? { image: image.startsWith('/') ? `${SITE}${image}` : image } : {}),
    datePublished: datePublished,
    dateModified: dateModified,
    author: TEAM_AUTHOR,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'London Clubs Tonight',
    alternateName: 'LondonClubsTonight',
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    image: `${SITE}/opengraph-image`,
    description: 'A London nightlife booking team. We arrange VIP tables and guestlist places at London clubs, handle enquiries on WhatsApp, and publish guides to the clubs open tonight.',
    telephone: `+${WHATSAPP_TABLE_NUMBER}`,
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    knowsAbout: [
      'London nightlife',
      'London nightclubs',
      'VIP table bookings',
      'Nightclub guestlists',
      'Mayfair clubs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: `+${WHATSAPP_TABLE_NUMBER}`,
      availableLanguage: 'English',
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'London Clubs Tonight',
    alternateName: 'LondonClubsTonight',
    url: SITE,
    inLanguage: 'en-GB',
    description: 'The definitive guide to London\'s best nightclubs. What\'s open tonight, table bookings, guestlist access, and insider tips.',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.url}`,
    })),
  };
}

export function getItemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE}${item.url}`,
    })),
  };
}

export interface NightClubDetails {
  /** A former name the venue is still searched under. */
  alternateName?: string;
  /** Nights grouped by identical hours, 24-hour clock (a close before the open is the next morning). */
  hours?: { days: string[]; opens: string; closes?: string }[];
}

const SCHEMA_DAY_CODES: Record<string, string> = {
  Monday: 'Mo',
  Tuesday: 'Tu',
  Wednesday: 'We',
  Thursday: 'Th',
  Friday: 'Fr',
  Saturday: 'Sa',
  Sunday: 'Su',
};

/**
 * A club page: our page, about the club. The club is the page's subject, never
 * given our page as its url or @id (that would say our page is the club's own
 * website). Opening hours are marked up only for nights with a published
 * closing time; nights without one are left out, as we never state one.
 */
export function getClubPageSchema(
  name: string,
  description: string,
  address: string,
  url: string,
  details: NightClubDetails = {}
) {
  const hours = (details.hours ?? []).filter((h) => h.closes);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}${url}#webpage`,
    url: `${SITE}${url}`,
    isPartOf: { '@id': WEBSITE_ID },
    about: {
      '@type': 'NightClub',
      name: name,
      ...(details.alternateName ? { alternateName: details.alternateName } : {}),
      description: description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address,
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      priceRange: '£££',
      ...(hours.length > 0
        ? {
            openingHours: hours.map(
              (h) => `${h.days.map((d) => SCHEMA_DAY_CODES[d] ?? d).join(',')} ${h.opens}-${h.closes}`
            ),
            openingHoursSpecification: hours.map((h) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: h.days,
              opens: h.opens,
              closes: h.closes,
            })),
          }
        : {}),
    },
  };
}
