import type { Metadata } from 'next';
import { Syne, Manrope, Instrument_Serif } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument',
  display: 'swap',
});
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getLocalBusinessSchema, getWebSiteSchema } from '@/components/SchemaMarkup';
import { SITE_OPEN_GRAPH } from '@/lib/metadata';

export const metadata: Metadata = {
  metadataBase: new URL('https://londonclubstonight.com'),
  title: {
    default: 'London Clubs Tonight | Where to Go Out in London Tonight',
    template: '%s | London Clubs Tonight',
  },
  description: 'The definitive guide to London\'s best nightclubs. Find out what\'s open tonight, book VIP tables, and get on the guestlist at London\'s top clubs. Insider knowledge from promoters who know the scene.',
  keywords: ['London clubs tonight', 'clubs open tonight London', 'nightclubs London', 'best clubs in London', 'London nightlife', 'going out London tonight'],
  // No og:url here, for the same reason as the canonical below: each page sets
  // its own `openGraph`, url and image included.
  openGraph: SITE_OPEN_GRAPH,
  // Only the card type. A page that sets no twitter title, description or
  // image of its own gets them from its own Open Graph fields (Next fills them
  // in); set here, every such page would share the home page's card.
  twitter: {
    card: 'summary_large_image',
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
  // No canonical here: a layout's canonical is inherited by every page that
  // does not set its own, which pointed /clubs at the home page. Each page sets
  // `alternates.canonical` to its own URL (the home page in page.tsx).
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${instrumentSerif.variable}`}>
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
