import Link from 'next/link';
import { getOpenClubs } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Nightclubs in London 2025 | Complete London Nightclub List',
  description:
    'The definitive list of the best nightclubs in London. Insider reviews, entry tips, table booking info, and guestlist access for every top London club.',
  keywords: [
    'nightclubs in London',
    'London nightclub list',
    'best clubs in London',
    'London clubs',
    'top nightclubs London',
    'London nightlife',
  ],
  openGraph: {
    title: 'Best Nightclubs in London | Complete London Nightclub List',
    description:
      'The definitive list of the best nightclubs in London. Insider reviews, entry tips, table booking info, and guestlist access for every top London club.',
    url: 'https://londonclubstonight.com/clubs',
    type: 'website',
  },
};

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[#888]">
          <Link href="/" className="hover:text-[#BBB] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#BBB]">Clubs</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="py-20 md:py-28 text-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            London Nightclubs
          </h1>
          <p className="text-lg text-[#BBB] leading-relaxed max-w-2xl mx-auto">
            The complete list of London&apos;s best nightclubs, ranked by our team.
            Every club includes insider tips on entry, dress code, table prices,
            and what to expect on the night.
          </p>
        </div>
      </header>

      {/* Club Grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getOpenClubs().map((club, index) => (
            <ClubCard
              key={club.slug}
              club={club}
              featured={index < 2}
              showArea
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Not Sure Which Club?
            </h2>
            <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-8">
              Message us on WhatsApp and we&apos;ll recommend the best club for
              your group, budget, and music taste.
            </p>
            <div className="flex justify-center">
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Explore More
          </h2>
          <p className="text-[#BBB] max-w-2xl mx-auto text-center mb-12">
            Guides, pricing, and event listings to help you plan the perfect night.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              href="/guides/getting-into-london-clubs"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-6 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold">Entry Guide</span>
              <p className="text-[#888] text-sm mt-2">
                How to get past the door at London&apos;s best clubs
              </p>
            </Link>
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-6 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold">
                Table &amp; Bottle Pricing
              </span>
              <p className="text-[#888] text-sm mt-2">
                Full menus at londonbottleservice.com
              </p>
            </a>
            <a
              href="https://mayfairtonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-6 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold">
                Tonight&apos;s Events
              </span>
              <p className="text-[#888] text-sm mt-2">
                What&apos;s on tonight at mayfairtonight.com
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
