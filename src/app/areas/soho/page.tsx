import type { Metadata } from 'next';
import Link from 'next/link';
import { clubs, getClubsByArea } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Best Clubs in Soho 2026 — London\'s Most Vibrant Nightlife District',
  description:
    'Guide to Soho nightclubs and the clubs on Soho\'s borders. Cirque Le Soir, the Carnaby scene, and links to Mayfair\'s luxury club cluster just steps away.',
  keywords: [
    'clubs in Soho',
    'Soho nightclubs',
    'best clubs Soho London',
    'Soho nightlife',
    'Soho clubs London',
    'clubs near Soho',
    'Carnaby nightlife',
  ],
  openGraph: {
    title: 'Best Clubs in Soho 2026 — London\'s Most Vibrant Nightlife District',
    description:
      'Guide to Soho nightclubs and the clubs on Soho\'s borders including Cirque Le Soir and the Carnaby scene.',
    url: 'https://londonclubstonight.com/areas/soho',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Clubs in Soho 2026 — Vibrant London Nightlife',
    description:
      'Guide to Soho nightclubs and the clubs on Soho\'s borders.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/areas/soho',
  },
};

const sohoClubs = getClubsByArea('Soho');

export default function SohoPage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'Best Clubs in Soho 2026 — London\'s Most Vibrant Nightlife District',
          'Guide to Soho nightclubs and the clubs on Soho\'s borders including Cirque Le Soir and the Carnaby scene.',
          '/areas/soho',
          '2025-01-01'
        )}
      />

      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
            <div className="mb-4">
              <Link href="/areas" className="text-[#666] hover:text-[#999] text-sm transition-colors">
                Areas
              </Link>
              <span className="text-[#444] mx-2">/</span>
              <span className="text-[#999] text-sm">Soho</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Best Clubs in Soho
            </h1>
            <p className="text-[#999] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Soho is London&apos;s most vibrant entertainment district, renowned for
              its bars, restaurants, theatres, and late-night energy. While the majority
              of London&apos;s luxury nightclubs sit technically within Mayfair&apos;s
              boundaries, Soho&apos;s borders are fluid, and several major venues occupy
              the overlap between the two areas, particularly around Carnaby and Ganton Street.
            </p>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Looking for a Soho night out?
              </h2>
              <p className="text-[#999] max-w-2xl mx-auto text-center mb-8">
                We know the Soho and Mayfair scene inside out. Message us for table bookings,
                guestlist, or help picking the right venue for your group.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>

        {/* Soho Club Listings */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Clubs in &amp; Around Soho
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto text-center mb-12">
              The clubs that sit within Soho or on its immediate borders with Mayfair
              and the Carnaby area.
            </p>
            <div className="grid gap-6">
              {sohoClubs.map((club) => (
                <ClubCard key={club.slug} club={club} showArea={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Soho & Mayfair Overlap */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              The Soho &amp; Mayfair Overlap
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto text-center mb-12">
              How the two areas blend together for a seamless night out.
            </p>
            <div className="space-y-4 text-[#999] leading-relaxed">
              <p>
                The boundary between Soho and Mayfair runs roughly along Regent Street,
                but in practice the two areas blend into each other. Venues on streets
                like Ganton Street, Carnaby Street, and the surrounding blocks could
                legitimately claim either postcode. Cirque Le Soir, for example, sits
                on Ganton Street in what many consider Soho, yet its address falls within
                the W1F postcode that straddles both areas.
              </p>
              <p>
                This overlap works in your favour as a clubgoer. Starting your evening
                in Soho&apos;s bars and restaurants and walking a few minutes south or
                west puts you right in Mayfair&apos;s club cluster. The two areas
                complement each other perfectly for a full night out.
              </p>
              <p>
                For the main cluster of luxury clubs in the Mayfair area, including Tape,
                TABU, Funky Buddha, Maddox, Scotch of St James, and more, see our dedicated
                Mayfair guide.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/areas/mayfair"
                className="inline-block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl px-8 py-5 text-center transition-all duration-300"
              >
                <span className="text-white font-semibold">Mayfair Clubs Guide</span>
                <span className="text-[#C0C0C0] text-sm ml-2">&rarr;</span>
                <p className="text-[#666] text-sm mt-1">
                  The full guide to Mayfair&apos;s {getClubsByArea('Mayfair').length} clubs,
                  table bookings, and guestlist.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* The Soho Scene */}
        <section className="border-b border-[#222] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              The Broader Soho Scene
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto text-center mb-12">
              Beyond the clubs, Soho is the ideal starting point for any London night.
            </p>
            <div className="space-y-4 text-[#999] leading-relaxed">
              <p>
                Beyond the high-end clubs, Soho is packed with late-night bars, cocktail
                spots, and smaller music venues that make it the ideal starting point for
                any London night out. The area&apos;s energy is unmatched — narrow streets
                buzzing with people, neon signs, and the kind of atmosphere that only
                decades of nightlife heritage can create.
              </p>
              <p>
                Soho works brilliantly as a pre-club destination. Start with dinner or
                drinks in the area&apos;s restaurants and bars, then head south into Mayfair
                for the main event at one of the luxury clubs. The two areas are minutes
                apart on foot, making for a seamless evening.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              More London Club Guides
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto text-center mb-12">
              Explore more of London&apos;s nightlife scene.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/areas/mayfair"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Mayfair Clubs</h3>
                <p className="text-[#666] text-sm">The luxury nightlife epicentre with {getClubsByArea('Mayfair').length} clubs.</p>
              </Link>
              <Link
                href="/areas/central-london"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Central London Clubs</h3>
                <p className="text-[#666] text-sm">The complete West End nightlife guide.</p>
              </Link>
              <Link
                href="/best-clubs-in-london"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Best Clubs in London</h3>
                <p className="text-[#666] text-sm">Our ranked guide to the top clubs across the city.</p>
              </Link>
              <Link
                href="/guides/how-to-get-into-london-clubs"
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">Entry Guide</h3>
                <p className="text-[#666] text-sm">How to get into London&apos;s most exclusive clubs.</p>
              </Link>
            </div>

            {/* Final CTA */}
            <div className="mt-12 bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Planning a night around Soho?
              </h3>
              <p className="text-[#999] text-sm mb-5 max-w-md mx-auto">
                Message us on WhatsApp and we&apos;ll help you plan the perfect evening,
                from pre-drinks to the main event.
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
