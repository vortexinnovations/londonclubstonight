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
export const EDITOR_ID = `${SITE}/about-the-editor/#author-daniel`;

const BRAND_SAME_AS = [
  'https://mayfairtonight.com',
  'https://londonbottleservice.com',
  'https://londonbirthdayclub.com',
  'https://londonluxurynightlife.com',
];

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
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mayfair',
      addressLocality: 'London',
      postalCode: 'W1',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    priceRange: '£££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '22:00',
      closes: '03:30',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: `+${WHATSAPP_TABLE_NUMBER}`,
      availableLanguage: 'English',
    },
    sameAs: BRAND_SAME_AS,
  };
}

export function getArticleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${SITE}${url}`,
    datePublished: datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@id': ORGANIZATION_ID },
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
    employee: { '@id': EDITOR_ID },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: `+${WHATSAPP_TABLE_NUMBER}`,
      availableLanguage: 'English',
    },
    sameAs: BRAND_SAME_AS,
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

export function getNightClubSchema(name: string, description: string, address: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NightClub',
    name: name,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    url: `${SITE}${url}`,
    priceRange: '£££',
  };
}
