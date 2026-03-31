import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'London Nightclub Guides — Everything You Need to Know',
  description: 'Insider guides to London nightlife. Late-night venues, music genres, dress codes, guestlists, table bookings, and honest advice from promoters who know the scene.',
  keywords: ['London nightclub guides', 'London club tips', 'London nightlife guide', 'London club guestlist'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides',
  },
};

const guides = [
  {
    title: 'London\'s Most Exclusive Clubs',
    description: 'A guide to London\'s most premium nightlife experiences. What makes each venue special, what to expect, and how to arrange your night.',
    href: '/guides/hardest-clubs-to-get-into',
  },
  {
    title: 'Clubs Open Late in London',
    description: 'Every venue grouped by closing time. Whether you need somewhere open until 3am or 6am, this is your guide to keeping the night going.',
    href: '/guides/clubs-open-late',
  },
  {
    title: 'Guestlists & Table Bookings — The Complete Guide',
    description: 'Everything you need to know about guestlists, table bookings, dress codes, group composition, and planning your night at London clubs.',
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
          'Insider guides to London nightlife. Late-night venues, music genres, dress codes, guestlists, table bookings, and honest advice from promoters who know the scene.',
          '/guides',
          '2025-01-01'
        )}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_22997fd2f5824b99815073940cd43fd2.jpg"
            alt="London nightclub guides hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/60 to-black/30" />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
            <div className="mb-4">
              <Link href="/" className="text-[#BBB] hover:text-white text-sm transition-colors">
                &larr; Back to all clubs
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              London Nightclub Guides
            </h1>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto">
              Everything you need to know about London nightlife. Written by promoters who work the scene, book the tables, and know how it all works.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
          <div className="grid gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-[#141414] border border-[#222] rounded-2xl p-7 hover:border-[#C0C0C0]/30 transition-colors group text-center"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#C0C0C0] transition-colors">
                  {guide.title}
                </h2>
                <p className="text-[#BBB] leading-relaxed max-w-xl mx-auto">
                  {guide.description}
                </p>
                <span className="inline-block mt-4 text-[#C0C0C0] text-sm font-medium">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-[#141414] border border-[#222] rounded-2xl p-7 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Need help planning your night?
            </h2>
            <p className="text-[#BBB] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. We handle guestlists and table bookings at every club listed on this site. Tell us what you want and we will sort it.
            </p>
            <WhatsAppCTA />
          </div>
        </div>
      </div>
    </>
  );
}
