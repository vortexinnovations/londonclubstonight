import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'London Nightclub Guides — Everything You Need to Know',
  description: 'Insider guides to London nightlife. Entry tips, late-night venues, music genres, dress codes, and honest advice from promoters who know the scene.',
  keywords: ['London nightclub guides', 'London club tips', 'London nightlife guide', 'how to get into London clubs'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides',
  },
};

const guides = [
  {
    title: 'Hardest Clubs to Get Into in London',
    description: 'Every club ranked by entry difficulty, with honest advice on what actually works at the door. From near-impossible walk-ins to easy advance tickets.',
    href: '/guides/hardest-clubs-to-get-into',
  },
  {
    title: 'Clubs Open Late in London',
    description: 'Every venue grouped by closing time. Whether you need somewhere open until 3am or 6am, this is your guide to keeping the night going.',
    href: '/guides/clubs-open-late',
  },
  {
    title: 'How to Get Into London\'s Exclusive Clubs',
    description: 'The complete guide to guestlists, table bookings, walk-ins, dress codes, group composition, and everything else that affects whether you get past the door.',
    href: '/guides/how-to-get-into-london-clubs',
  },
  {
    title: 'London Clubs by Music Genre',
    description: 'Find the right club for your music taste. Hip-hop, house, RnB, techno, open format — every venue categorised by what they actually play.',
    href: '/guides/london-clubs-by-music-genre',
  },
];

export default function GuidesPage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'London Nightclub Guides — Everything You Need to Know',
          'Insider guides to London nightlife. Entry tips, late-night venues, music genres, dress codes, and honest advice from promoters who know the scene.',
          '/guides',
          '2025-01-01'
        )}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <div className="mb-4">
            <Link href="/" className="text-[#999] hover:text-white text-sm transition-colors">
              &larr; Back to all clubs
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            London Nightclub Guides
          </h1>
          <p className="text-[#999] text-lg mb-12 max-w-2xl">
            Everything you need to know about London nightlife. Written by promoters who work the doors, book the tables, and know how the scene actually works.
          </p>

          <div className="grid gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 hover:border-[#C0C0C0]/30 transition-colors group"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#C0C0C0] transition-colors">
                  {guide.title}
                </h2>
                <p className="text-[#999] leading-relaxed">
                  {guide.description}
                </p>
                <span className="inline-block mt-4 text-[#C0C0C0] text-sm font-medium">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Need help planning your night?
            </h2>
            <p className="text-[#999] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. We handle guestlists and table bookings at every club listed on this site. Tell us what you want and we will sort it.
            </p>
            <WhatsAppCTA />
          </div>
        </div>
      </div>
    </>
  );
}
