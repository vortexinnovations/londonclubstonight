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
