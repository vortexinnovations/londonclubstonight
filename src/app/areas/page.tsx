import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { clubs, getClubsByArea } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'London Clubs by Area — Find the Best Nightlife Near You',
  description:
    'Explore London nightclubs by area. Mayfair, Soho, central London, and beyond — find the best clubs near you with table bookings and guestlist access.',
  keywords: [
    'London clubs by area',
    'London nightlife areas',
    'Mayfair clubs',
    'Soho clubs',
    'central London clubs',
    'clubs near me London',
    'London nightlife map',
  ],
  openGraph: {
    title: 'London Clubs by Area — Find the Best Nightlife Near You',
    description:
      'Explore London nightclubs by area. Mayfair, Soho, central London, and beyond.',
    url: 'https://londonclubstonight.com/areas',
    type: 'website',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London Clubs by Area',
    description:
      'Explore London nightclubs by area. Mayfair, Soho, central London, and beyond.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/areas',
  },
};

const areas = [
  {
    name: 'Mayfair',
    slug: 'mayfair',
    description:
      'The epicentre of London\'s luxury nightlife. Exclusive members clubs, celebrity crowds, strict door policies, and table minimums that start at four figures. If you want the best, Mayfair is where you go.',
    clubCount: getClubsByArea('Mayfair').length,
  },
  {
    name: 'Central London',
    slug: 'central-london',
    description:
      'The complete West End nightlife scene spanning Mayfair, Soho, St James\'s, and Piccadilly. Nearly every major London club falls within this zone, giving you the widest range of options in one walkable area.',
    clubCount: getClubsByArea('Central London').length,
  },
  {
    name: 'Soho',
    slug: 'soho',
    description:
      'London\'s most vibrant entertainment district. Famous for its bars, restaurants, and late-night energy, Soho\'s borders blur with Mayfair to create the perfect pre-club to main-event progression.',
    clubCount: getClubsByArea('Soho').length,
  },
];

export default function AreasPage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'London Clubs by Area — Find the Best Nightlife Near You',
          'Explore London nightclubs by area including Mayfair, Soho, and central London.',
          '/areas',
          '2025-01-01'
        )}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_23e37ad1543140e68e62e62587f7120c.jpg"
            alt="London nightlife areas overview with city lights"
            fill
            className="object-cover animate-slow-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
          <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
            <span className="eyebrow animate-fade-up">Area guide</span>
            <h1 className="animate-fade-up anim-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              London Clubs by <span className="serif-accent text-gradient">Area</span>
            </h1>
            <p className="animate-fade-up anim-delay-2 text-frost-100/85 text-lg md:text-xl leading-relaxed max-w-2xl">
              London&apos;s nightlife is concentrated in a handful of key areas, each
              with its own character and crowd. Whether you&apos;re looking for Mayfair&apos;s
              exclusivity, Soho&apos;s energy, or the broader West End scene, find the
              right area for your night out.
            </p>
          </div>
        </section>

        {/* Area Cards */}
        <section className="section-glow border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="grid gap-6">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="glass-card glass-card-hover group block p-7 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white">
                      {area.name}
                    </h2>
                    <span className="chip shrink-0">
                      {area.clubCount} {area.clubCount === 1 ? 'club' : 'clubs'}
                    </span>
                  </div>
                  <p className="text-frost-300 text-sm leading-relaxed mb-4 max-w-2xl">
                    {area.description}
                  </p>
                  <span className="text-neon-300 text-sm inline-flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                    Explore {area.name} clubs &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="relative overflow-hidden border-b border-white/[0.06] py-20 md:py-28">
          <div className="glow-orb w-[520px] h-[360px] bg-glow-500/15 -bottom-40 right-1/4" aria-hidden />
          <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
            <div className="glass-card p-8 md:p-10 text-center">
              <span className="eyebrow justify-center">Free concierge</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4 text-center">
                Not sure which <span className="serif-accent text-gradient">area?</span>
              </h2>
              <p className="text-frost-300 max-w-2xl mx-auto text-center mb-8">
                Tell us what kind of night you&apos;re after — the vibe, the music, your
                group size — and we&apos;ll recommend the right area and club.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="mb-12 max-w-xl">
              <span className="eyebrow">Keep exploring</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
                More <span className="serif-accent text-gradient">Guides</span>
              </h2>
              <p className="text-frost-300 max-w-2xl">
                Explore our other guides to London&apos;s nightlife scene.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/best-clubs-in-london"
                className="glass-card glass-card-hover block p-7"
              >
                <h3 className="font-display tracking-tight text-white font-semibold mb-1">Best Clubs in London</h3>
                <p className="text-frost-500 text-sm">Our ranked guide to the top clubs across the city.</p>
              </Link>
              <Link
                href="/guides/how-to-get-into-london-clubs"
                className="glass-card glass-card-hover block p-7"
              >
                <h3 className="font-display tracking-tight text-white font-semibold mb-1">Entry Guide</h3>
                <p className="text-frost-500 text-sm">How to get into London&apos;s most exclusive clubs.</p>
              </Link>
              <Link
                href="/"
                className="glass-card glass-card-hover block p-7"
              >
                <h3 className="font-display tracking-tight text-white font-semibold mb-1">Tonight&apos;s Picks</h3>
                <p className="text-frost-500 text-sm">See which clubs are open tonight.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
