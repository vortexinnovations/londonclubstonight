interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'London Clubs Tonight',
    description: 'The definitive guide to London\'s best nightclubs. Table bookings, guestlist access, and insider knowledge for London\'s top clubs.',
    url: 'https://londonclubstonight.com',
    telephone: '+447880662708',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
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
  };
}

export function getArticleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `https://londonclubstonight.com${url}`,
    datePublished: datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'London Clubs Tonight',
      url: 'https://londonclubstonight.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'London Clubs Tonight',
      url: 'https://londonclubstonight.com',
    },
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
    name: 'London Clubs Tonight',
    url: 'https://londonclubstonight.com',
    description: 'London nightclub promoters offering table bookings, guestlist access, and insider recommendations at the city\'s best clubs.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: '+447880662708',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://mayfairtonight.com',
      'https://londonbottleservice.com',
      'https://londonbirthdayclub.com',
      'https://londonluxurynightlife.com',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'London Clubs Tonight',
    url: 'https://londonclubstonight.com',
    description: 'The definitive guide to London\'s best nightclubs. What\'s open tonight, table bookings, guestlist access, and insider tips.',
    publisher: {
      '@type': 'Organization',
      name: 'London Clubs Tonight',
    },
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
      item: `https://londonclubstonight.com${item.url}`,
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
      url: `https://londonclubstonight.com${item.url}`,
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
    url: `https://londonclubstonight.com${url}`,
    priceRange: '£££',
  };
}
