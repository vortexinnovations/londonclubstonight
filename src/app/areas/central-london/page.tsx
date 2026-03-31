import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { clubs, getClubsByArea } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Best Clubs in Central London 2026 — Mayfair, Soho, St James\'s & More',
  description:
    'Complete guide to central London nightclubs. Mayfair, Soho, St James\'s, and Piccadilly — every club worth knowing about in the West End with table bookings and guestlist.',
  keywords: [
    'clubs central London',
    'central London nightclubs',
    'best clubs West End',
    'West End clubs London',
    'nightclubs central London',
    'London W1 clubs',
    'Mayfair Soho nightlife',
  ],
  openGraph: {
    title: 'Best Clubs in Central London 2026 — Mayfair, Soho, St James\'s & More',
    description:
      'Complete guide to central London nightclubs across Mayfair, Soho, St James\'s, and Piccadilly.',
    url: 'https://londonclubstonight.com/areas/central-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Clubs in Central London 2026',
    description:
      'Complete guide to central London nightclubs across Mayfair, Soho, St James\'s, and Piccadilly.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/areas/central-london',
  },
};

const centralLondonClubs = getClubsByArea('Central London');

const mayfairClubs = centralLondonClubs.filter((c) => c.areas.includes('Mayfair'));
const sohoClubs = centralLondonClubs.filter((c) => c.areas.includes('Soho'));
const stJamesClubs = centralLondonClubs.filter(
  (c) => c.areas.includes('St James\'s') && !c.areas.includes('Mayfair') && !c.areas.includes('Soho')
);
const otherCentralClubs = centralLondonClubs.filter(
  (c) =>
    !c.areas.includes('Mayfair') &&
    !c.areas.includes('Soho') &&
    !c.areas.includes('St James\'s')
);

export default function CentralLondonPage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'Best Clubs in Central London 2026 — Mayfair, Soho, St James\'s & More',
          'Complete guide to central London nightclubs across Mayfair, Soho, St James\'s, and Piccadilly.',
          '/areas/central-london',
          '2025-01-01'
        )}
      />

      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_243e282bb43f4d2cb03320ddb0cf5549.jpg"
            alt="Central London nightlife with West End clubs and city lights"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/60 to-black/30" />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
            <div className="mb-4">
              <Link href="/areas" className="text-[#888] hover:text-[#BBB] text-sm transition-colors">
                Areas
              </Link>
              <span className="text-[#444] mx-2">/</span>
              <span className="text-[#BBB] text-sm">Central London</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Best Clubs in Central London
            </h1>
            <p className="text-[#BBB] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Central London is home to virtually every major nightclub worth visiting.
              From the exclusive members clubs of Mayfair to the energy of Soho and
              the theatrical venues around St James&apos;s and Piccadilly, the West End
              has it all. This is your complete guide to the {centralLondonClubs.length} clubs
              that define London&apos;s nightlife scene.
            </p>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Not sure which area suits you?
              </h2>
              <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-8">
                Tell us what kind of night you&apos;re after and we&apos;ll recommend the
                right club and area. Table bookings and guestlist for every central London venue.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>

        {/* Mayfair Section */}
        {mayfairClubs.length > 0 && (
          <section className="border-b border-[#222] py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                  Mayfair
                </h2>
                <Link
                  href="/areas/mayfair"
                  className="text-[#C0C0C0] text-sm hover:text-white transition-colors"
                >
                  Full Mayfair guide &rarr;
                </Link>
              </div>
              <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
                The epicentre of London&apos;s luxury nightlife. Mayfair&apos;s W1 postcode
                houses the highest concentration of exclusive clubs anywhere in the city, with
                celebrity crowds and table minimums that reflect the premium positioning.
              </p>
              <div className="grid gap-6">
                {mayfairClubs.map((club) => (
                  <ClubCard key={club.slug} club={club} showArea={false} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Soho Section */}
        {sohoClubs.length > 0 && (
          <section className="border-b border-[#222] py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                  Soho
                </h2>
                <Link
                  href="/areas/soho"
                  className="text-[#C0C0C0] text-sm hover:text-white transition-colors"
                >
                  Full Soho guide &rarr;
                </Link>
              </div>
              <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
                London&apos;s most vibrant entertainment district. Soho&apos;s borders overlap
                with Mayfair around Carnaby and Ganton Street, placing some of London&apos;s
                most iconic venues right on the boundary between the two areas.
              </p>
              <div className="grid gap-6">
                {sohoClubs.map((club) => (
                  <ClubCard key={club.slug} club={club} showArea={false} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* St James's Section */}
        {stJamesClubs.length > 0 && (
          <section className="border-b border-[#222] py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                St James&apos;s &amp; Piccadilly
              </h2>
              <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
                The stretch around Piccadilly and St James&apos;s offers a different flavour
                of nightlife. Grand showclubs and theatrical venues sit alongside more
                traditional clubs, drawing a crowd that skews slightly older and more
                internationally diverse.
              </p>
              <div className="grid gap-6">
                {stJamesClubs.map((club) => (
                  <ClubCard key={club.slug} club={club} showArea={false} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Central Clubs */}
        {otherCentralClubs.length > 0 && (
          <section className="border-b border-[#222] py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                More Central London Clubs
              </h2>
              <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
                Other notable clubs within the central London zone that don&apos;t fall
                neatly into the Mayfair or Soho categories but are still very much part
                of the West End scene.
              </p>
              <div className="grid gap-6">
                {otherCentralClubs.map((club) => (
                  <ClubCard key={club.slug} club={club} showArea={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Central London Clubs */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Central London at a Glance
            </h2>
            <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
              Key numbers for the central London nightlife scene.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 text-center">
                <p className="text-3xl font-bold text-white mb-1">{centralLondonClubs.length}</p>
                <p className="text-[#BBB] text-sm">Clubs in central London</p>
              </div>
              <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 text-center">
                <p className="text-3xl font-bold text-white mb-1">{mayfairClubs.length}</p>
                <p className="text-[#BBB] text-sm">Located in Mayfair alone</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              More London Club Guides
            </h2>
            <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
              Explore more of London&apos;s nightlife scene.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/areas/mayfair"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Mayfair Clubs</h3>
                <p className="text-[#888] text-sm">The luxury nightlife epicentre in detail.</p>
              </Link>
              <Link
                href="/areas/soho"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Soho Clubs</h3>
                <p className="text-[#888] text-sm">London&apos;s most vibrant entertainment district.</p>
              </Link>
              <Link
                href="/best-clubs-in-london"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Best Clubs in London</h3>
                <p className="text-[#888] text-sm">Our ranked guide to the top clubs across the city.</p>
              </Link>
              <Link
                href="/guides/how-to-get-into-london-clubs"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Entry Guide</h3>
                <p className="text-[#888] text-sm">How to get into London&apos;s most exclusive clubs.</p>
              </Link>
            </div>

            {/* Final CTA */}
            <div className="mt-12 bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Book your central London night out
              </h3>
              <p className="text-[#BBB] text-sm mb-5 max-w-md mx-auto">
                Message us on WhatsApp for table bookings, guestlist, or a personalised
                recommendation for any central London club.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
