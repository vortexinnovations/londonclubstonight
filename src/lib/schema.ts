/**
 * Schema.org JSON-LD builders.
 *
 * Kept separate from the <SchemaMarkup> component so they stay plain data
 * (importable and testable without a JSX runtime).
 */
import { WHATSAPP_TABLE_NUMBER } from '@/lib/clubs';

const SITE = 'https://londonclubstonight.com';

/** Stable entity anchors so the Organization, WebSite, and LocalBusiness
 *  nodes resolve to one brand rather than three unrelated things. */
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

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#localbusiness`,
    parentOrganization: { '@id': ORGANIZATION_ID },
    name: 'London Clubs Tonight',
    alternateName: 'LondonClubsTonight',
    description: 'The definitive guide to London\'s best nightclubs. Table bookings, guestlist access, and insider knowledge for London\'s top clubs.',
    url: SITE,
    image: `${SITE}/gallery/images/TapeFriday041024PartyNextDoor-410.jpg`,
    telephone: `+${WHATSAPP_TABLE_NUMBER}`,
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    priceRange: '£££',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: `+${WHATSAPP_TABLE_NUMBER}`,
      availableLanguage: 'English',
    },
  };
}

export function getArticleSchema(title: string, description: string, url: string, datePublished: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${SITE}${url}`,
    datePublished: datePublished,
    dateModified: dateModified ?? new Date().toISOString().split('T')[0],
    author: TEAM_AUTHOR,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
    description: 'London nightclub promoters offering table bookings, guestlist access, and insider recommendations at the city\'s best clubs.',
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

export function getNightClubSchema(
  name: string,
  description: string,
  address: string,
  url: string,
  details: NightClubDetails = {}
) {
  const hours = details.hours ?? [];
  return {
    '@context': 'https://schema.org',
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
    url: `${SITE}${url}`,
    priceRange: '£££',
    ...(hours.length > 0
      ? {
          // A club that publishes no closing time has no `closes`: the text form
          // needs a range, so it is sent only for nights with one.
          ...(hours.some((h) => h.closes)
            ? {
                openingHours: hours
                  .filter((h) => h.closes)
                  .map((h) => `${h.days.map((d) => SCHEMA_DAY_CODES[d] ?? d).join(',')} ${h.opens}-${h.closes}`),
              }
            : {}),
          openingHoursSpecification: hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.days,
            opens: h.opens,
            ...(h.closes ? { closes: h.closes } : {}),
          })),
        }
      : {}),
  };
}
