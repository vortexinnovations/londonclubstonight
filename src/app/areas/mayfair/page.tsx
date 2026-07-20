import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { clubs, getClubsByArea } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Best Clubs in Mayfair 2026 — The Heart of London\'s Luxury Nightlife',
  description:
    'The definitive guide to Mayfair nightclubs. Tape, Cirque, TABU, Funky Buddha, Maddox, Scotch, and more — table bookings, guestlist, and insider tips for every Mayfair club.',
  keywords: [
    'clubs in Mayfair',
    'Mayfair clubs',
    'best Mayfair nightclubs',
    'Mayfair nightlife',
    'Mayfair clubs London',
    'clubs near Mayfair',
    'W1 nightclubs',
  ],
  openGraph: {
    title: 'Best Clubs in Mayfair 2026 — The Heart of London\'s Luxury Nightlife',
    description:
      'The definitive guide to Mayfair nightclubs. Table bookings, guestlist access, and insider tips for every club in W1.',
    url: 'https://londonclubstonight.com/areas/mayfair',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Clubs in Mayfair 2026 — Luxury Nightlife Guide',
    description:
      'The definitive guide to Mayfair nightclubs. Table bookings, guestlist access, and insider tips.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/areas/mayfair',
  },
};

const mayfairClubs = getClubsByArea('Mayfair');

export default function MayfairPage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'Best Clubs in Mayfair 2026 — The Heart of London\'s Luxury Nightlife',
          'The definitive guide to Mayfair nightclubs including Tape, Cirque, TABU, Funky Buddha, Maddox, Scotch, and more.',
          '/areas/mayfair',
          '2025-01-01'
        )}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_2425804d561d40a483a365a2030854b7.jpg"
            alt="Mayfair nightlife scene with luxury clubs and vibrant atmosphere"
            fill
            className="object-cover animate-slow-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
          <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
            <div className="mb-5 animate-fade-up text-sm">
              <Link href="/areas" className="text-frost-400 hover:text-neon-200 transition-colors">
                Areas
              </Link>
              <span className="text-frost-500 mx-2">/</span>
              <span className="text-frost-300">Mayfair</span>
            </div>
            <span className="eyebrow animate-fade-up anim-delay-1">Area guide</span>
            <h1 className="animate-fade-up anim-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Best Clubs in <span className="serif-accent text-gradient">Mayfair</span>
            </h1>
            <p className="animate-fade-up anim-delay-2 text-frost-100/85 text-lg md:text-xl leading-relaxed max-w-2xl">
              Mayfair is the undisputed centre of London&apos;s luxury nightlife. Within a few
              streets of each other, you&apos;ll find the highest concentration of exclusive
              members clubs, celebrity haunts, and high-end venues anywhere in the city. If
              you&apos;re serious about a night out in London, Mayfair is where you start.
            </p>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="glass-card p-8 md:p-10 text-center">
              <span className="eyebrow justify-center">Free concierge</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4 text-center">
                Need help choosing a Mayfair club?
              </h2>
              <p className="text-frost-300 max-w-2xl mx-auto text-center mb-8">
                We know every door in W1. Message us for table bookings, guestlist access,
                or personalised recommendations.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>

        {/* Club Listings */}
        <section className="section-glow border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">The lineup</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Mayfair <span className="serif-accent text-gradient">Clubs</span>
            </h2>
            <p className="text-frost-300 max-w-2xl mb-12">
              {mayfairClubs.length} clubs in Mayfair — from exclusive members clubs to
              high-energy party venues.
            </p>
            <div className="grid gap-6">
              {mayfairClubs.map((club) => (
                <ClubCard key={club.slug} club={club} showArea={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Mayfair */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">The area</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Why <span className="serif-accent text-gradient">Mayfair?</span>
            </h2>
            <p className="text-frost-300 max-w-2xl mb-12">
              What makes Mayfair the centre of London&apos;s nightlife.
            </p>
            <div className="space-y-4 text-frost-300 leading-relaxed">
              <p>
                The W1 postcode dominates London nightlife for a reason. Mayfair sits between
                Oxford Street and Piccadilly, bordered by Park Lane and Regent Street, placing
                it at the geographical and cultural heart of the West End. The area&apos;s
                combination of wealth, exclusivity, and proximity to luxury hotels makes it
                the natural home for London&apos;s most prestigious clubs.
              </p>
              <p>
                Almost every top-tier London club operates within a few minutes&apos; walk of
                each other in Mayfair. Tape London on Hanover Square, TABU hidden below street
                level, Funky Buddha on Winsley Street, Maddox on Maddox Street, Scotch of St James
                tucked away on Mason&apos;s Yard, and Cuckoo Club on Swallow Street. This
                density means that if your first choice doesn&apos;t work out, you&apos;re
                never far from an alternative.
              </p>
              <p>
                The crowd in Mayfair skews towards high-net-worth individuals, celebrities,
                and fashion-conscious Londoners who expect a certain standard. Dress codes are
                enforced and table bookings are the most reliable way to guarantee entry. This
                selectiveness is exactly what keeps the standard high.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Plan ahead</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Plan Your Mayfair <span className="serif-accent text-gradient">Night</span>
            </h2>
            <p className="text-frost-300 max-w-2xl mb-12">
              Essential resources for your Mayfair night out.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover block p-7 text-center"
              >
                <h3 className="font-display text-lg font-bold tracking-tight text-white mb-2">
                  Mayfair Tonight
                </h3>
                <p className="text-frost-300 text-sm">
                  For tonight&apos;s specific Mayfair events and guestlist, head to
                  mayfairtonight.com for up-to-the-minute listings.
                </p>
                <span className="text-neon-300 text-sm mt-3 inline-block">
                  Visit mayfairtonight.com &rarr;
                </span>
              </a>
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover block p-7 text-center"
              >
                <h3 className="font-display text-lg font-bold tracking-tight text-white mb-2">
                  Table &amp; Bottle Pricing
                </h3>
                <p className="text-frost-300 text-sm">
                  Compare table minimums and bottle prices across all Mayfair clubs on
                  londonbottleservice.com.
                </p>
                <span className="text-neon-300 text-sm mt-3 inline-block">
                  Visit londonbottleservice.com &rarr;
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Keep exploring</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              More London Club <span className="serif-accent text-gradient">Guides</span>
            </h2>
            <p className="text-frost-300 max-w-2xl mb-12">
              Explore more of London&apos;s nightlife scene.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/best-clubs-in-london"
                className="glass-card glass-card-hover block p-7 text-center"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1">Best Clubs in London</h3>
                <p className="text-frost-500 text-sm">Our ranked guide to the top clubs across the city.</p>
              </Link>
              <Link
                href="/guides/how-to-get-into-london-clubs"
                className="glass-card glass-card-hover block p-7 text-center"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1">Entry Guide</h3>
                <p className="text-frost-500 text-sm">How to get into London&apos;s most exclusive clubs.</p>
              </Link>
              <Link
                href="/areas/central-london"
                className="glass-card glass-card-hover block p-7 text-center"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1">Central London Clubs</h3>
                <p className="text-frost-500 text-sm">The wider West End scene including Soho and St James&apos;s.</p>
              </Link>
            </div>

            {/* Final CTA */}
            <div className="mt-12 glass-card p-8 md:p-10 text-center">
              <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2">
                Ready for a Mayfair night out?
              </h3>
              <p className="text-frost-300 text-sm mb-5 max-w-md mx-auto">
                Message us on WhatsApp and we&apos;ll sort your table, guestlist, or give
                you our honest recommendation.
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
