import Link from 'next/link';
import Image from 'next/image';
import { getOpenClubs } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import type { Metadata } from 'next';
import { fitTitle } from '@/lib/metadata';

export const metadata: Metadata = {
  title: fitTitle('Clubs in London 2026: Nightclubs, Table Prices and Guestlist'),
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
    images: [{ url: '/gallery/images/TapeFriday041024PartyNextDoor-333.jpg', alt: 'A rapper performing to the crowd in a London club' }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/clubs',
  },
};

export default function ClubsPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-frost-400">
          <Link href="/" className="hover:text-neon-200 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-frost-300">Clubs</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/gallery/images/TapeFriday041024PartyNextDoor-333.jpg"
          alt="London nightclubs"
          fill
          className="object-cover animate-slow-zoom"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
        <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
        <div className="relative z-10 text-center px-4 py-16">
          <span className="eyebrow animate-fade-up justify-center">The full list</span>
          <h1 className="animate-fade-up anim-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-4 mb-4">
            London <span className="serif-accent text-gradient">Nightclubs</span>
          </h1>
          <p className="animate-fade-up anim-delay-2 text-lg text-frost-100/85 leading-relaxed max-w-2xl mx-auto">
            The complete list of London&apos;s best nightclubs, ranked by our team.
            Every club includes insider tips on entry, dress code, table prices,
            and what to expect on the night.
          </p>
        </div>
      </section>

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
      <section className="section-glow py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="glass-card p-10 md:p-14 text-center">
            <span className="eyebrow justify-center">Free advice</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4 text-center">
              Not Sure Which <span className="serif-accent text-gradient">Club?</span>
            </h2>
            <p className="text-frost-300 max-w-2xl mx-auto text-center mb-8">
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
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Beyond the list</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Explore <span className="serif-accent text-gradient">More</span>
            </h2>
            <p className="text-frost-300">
              Guides, pricing, and event listings to help you plan the perfect night.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              href="/guides/how-to-get-into-london-clubs"
              className="glass-card glass-card-hover block p-6"
            >
              <span className="text-neon-300 font-semibold">Entry Guide</span>
              <p className="text-frost-500 text-sm mt-2">
                How to get past the door at London&apos;s best clubs
              </p>
            </Link>
            <Link href="/last-minute-table-booking-london" className="glass-card glass-card-hover block p-6">
              <span className="text-neon-300 font-semibold">
                Last-Minute Tables </span>
              <p className="text-frost-500 text-sm mt-2">
                Which clubs can seat your group tonight
              </p>
            </Link>
            <Link href="/clubs-tonight-london" className="glass-card glass-card-hover block p-6">
              <span className="text-neon-300 font-semibold">
                Tonight&apos;s Clubs </span>
              <p className="text-frost-500 text-sm mt-2">
                Which London clubs are open tonight
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
