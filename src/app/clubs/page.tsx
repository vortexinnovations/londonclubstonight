import Link from 'next/link';
import { clubs } from '@/lib/clubs';
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
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[#666]">
          <Link href="/" className="hover:text-[#999] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#999]">Clubs</span>
        </nav>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 pt-8 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          London Nightclubs
        </h1>
        <p className="text-lg text-[#999] leading-relaxed max-w-2xl">
          The complete list of London&apos;s best nightclubs, ranked by our team.
          Every club includes insider tips on entry, dress code, table prices,
          and what to expect on the night.
        </p>
      </header>

      {/* Club Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-5">
          {clubs.map((club, index) => (
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
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-[#141414] border border-[#222] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Not Sure Which Club?
          </h2>
          <p className="text-[#999] mb-6 max-w-lg mx-auto">
            Message us on WhatsApp and we&apos;ll recommend the best club for
            your group, budget, and music taste.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-white mb-6">Explore More</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/guides/getting-into-london-clubs"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">Entry Guide</span>
            <p className="text-[#666] text-sm mt-1">
              How to get past the door at London&apos;s best clubs
            </p>
          </Link>
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Table &amp; Bottle Pricing
            </span>
            <p className="text-[#666] text-sm mt-1">
              Full menus at londonbottleservice.com
            </p>
          </a>
          <a
            href="https://mayfairtonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Tonight&apos;s Events
            </span>
            <p className="text-[#666] text-sm mt-1">
              What&apos;s on tonight at mayfairtonight.com
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
