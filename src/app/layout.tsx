import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getLocalBusinessSchema, getWebSiteSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: {
    default: 'London Clubs Tonight — Where to Go Out in London Tonight',
    template: '%s | London Clubs Tonight',
  },
  description: 'The definitive guide to London\'s best nightclubs. Find out what\'s open tonight, book VIP tables, and get on the guestlist at London\'s top clubs. Insider knowledge from promoters who know the scene.',
  keywords: ['London clubs tonight', 'clubs open tonight London', 'nightclubs London', 'best clubs in London', 'London nightlife', 'going out London tonight'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://londonclubstonight.com',
    siteName: 'London Clubs Tonight',
    title: 'London Clubs Tonight — Where to Go Out in London Tonight',
    description: 'The definitive guide to London\'s best nightclubs. Find out what\'s open tonight, book VIP tables, and get on the guestlist.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London Clubs Tonight',
    description: 'The definitive guide to London\'s best nightclubs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://londonclubstonight.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SchemaMarkup schema={getLocalBusinessSchema()} />
        <SchemaMarkup schema={getWebSiteSchema()} />
        <Header />
        <main className="pt-20 pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA variant="sticky" />
      </body>
    </html>
  );
}
