import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { clubs, getOpenClubs } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'London Clubs Tonight — Find the Best Clubs Open Tonight in London',
  description:
    'Find out which London clubs are open tonight. Expert recommendations for Mayfair, Soho, and beyond — VIP tables, guestlist spots, and insider tips from promoters who know every door.',
  keywords: [
    'London clubs tonight',
    'clubs open tonight London',
    'nightclubs London tonight',
    'going out London tonight',
    'best clubs in London tonight',
    'London nightlife tonight',
    'what clubs are open tonight London',
  ],
  openGraph: {
    title: 'London Clubs Tonight — Find the Best Clubs Open Tonight in London',
    description:
      'Expert-curated guide to London clubs open tonight. VIP tables, guestlist access, and genuine insider knowledge from promoters on the ground.',
    url: 'https://londonclubstonight.com',
    type: 'website',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London Clubs Tonight — Best Clubs Open Tonight',
    description:
      'Expert-curated guide to London clubs open tonight. VIP tables, guestlist access, and insider knowledge.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com',
  },
};

const tonightPicks = getOpenClubs().slice(0, 6);

const areas = [
  {
    name: 'Mayfair',
    slug: 'mayfair',
    description:
      'The epicentre of London nightlife. Exclusive members clubs, celebrity crowds, and tables that start at four figures. If you want the best, this is where you go.',
    clubCount: clubs.filter((c) => c.areas.includes('Mayfair')).length,
  },
  {
    name: 'Soho',
    slug: 'soho',
    description:
      'Gritty, eclectic, and never boring. From underground hip-hop to circus-themed spectacles, Soho delivers variety that nowhere else in London can match.',
    clubCount: clubs.filter((c) => c.areas.includes('Soho')).length,
  },
  {
    name: 'Central London',
    slug: 'central-london',
    description:
      'Piccadilly, St James\'s, and the West End. Showclubs, theatrical nightlife, and venues that blur the line between dinner and dance floor.',
    clubCount: clubs.filter((c) => c.areas.includes('Central London')).length,
  },
  {
    name: 'St James\'s & Piccadilly',
    slug: 'central-london',
    description:
      'Home to The London Reign and the broader West End nightlife scene. Showclubs, theatrical performances, and late-night elegance.',
    clubCount: 2,
  },
];

const guides = [
  {
    title: 'Best Clubs in London',
    href: '/best-clubs-in-london',
    description:
      'Our ranked guide to every club worth visiting. Honest reviews, entry tips, and what to actually expect when you arrive.',
  },
  {
    title: 'How to Get Into London Clubs',
    href: '/guides/how-to-get-into-london-clubs',
    description:
      'Guestlists, table bookings, dress codes, and the ratio rules nobody tells you about. The honest insider guide.',
  },
  {
    title: 'Most Exclusive London Clubs',
    href: '/guides/hardest-clubs-to-get-into',
    description:
      'Which clubs are the most exclusive, why, and what you can do to maximise your chances at the door.',
  },
  {
    title: 'Clubs Open Late',
    href: '/guides/clubs-open-late',
    description:
      'Which clubs stay open latest, broken down by closing time. For when the night is young and you need somewhere to go.',
  },
  {
    title: 'London Clubs by Music Genre',
    href: '/guides/london-clubs-by-music-genre',
    description:
      'Hip-hop, house, techno, RnB, or open format — which clubs play what, and which nights to target.',
  },
  {
    title: 'Book a Table or Guestlist',
    href: '/contact',
    description:
      'Direct WhatsApp booking with London\'s top promoters. Same-night bookings, instant responses, no booking fees.',
  },
];

const networkSites = [
  {
    name: 'Mayfair Tonight',
    url: 'https://mayfairtonight.com',
    description: 'Deep-dive into Mayfair\'s club scene',
  },
  {
    name: 'London Bottle Service',
    url: 'https://londonbottleservice.com',
    description: 'VIP table booking specialists',
  },
  {
    name: 'London Birthday Club',
    url: 'https://londonbirthdayclub.com',
    description: 'Birthday party planning and packages',
  },
  {
    name: 'London Luxury Nightlife',
    url: 'https://londonluxurynightlife.com',
    description: 'Premium nightlife experiences',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92svh] -mt-20 flex items-center justify-center overflow-hidden">
        <Image
          src="/gallery/images/TapeFriday041024PartyNextDoor-410.jpg"
          alt="London nightclub VIP atmosphere"
          fill
          className="object-cover animate-slow-zoom"
          priority
          sizes="100vw"
        />
        {/* Layered atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,6,11,0.55)_100%)]" />
        <div className="glow-orb w-[560px] h-[560px] bg-neon-500/30 -top-40 -left-40" aria-hidden />
        <div className="glow-orb w-[480px] h-[480px] bg-glow-500/25 bottom-0 -right-32" aria-hidden style={{ animationDelay: '-7s' }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-32 pb-20">
          <span className="chip chip-accent animate-fade-up mb-8">
            <span className="live-dot scale-75" aria-hidden />
            LIVE&nbsp;&middot;&nbsp;MAYFAIR&nbsp;&middot;&nbsp;SOHO&nbsp;&middot;&nbsp;WEST&nbsp;END
          </span>
          <h1 className="animate-fade-up anim-delay-1 font-display text-[14vw] sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold text-white tracking-tight leading-[0.95] mb-8">
            London Clubs
            <span className="block font-serif italic font-normal text-gradient leading-[1.1] pb-2">
              Tonight
            </span>
          </h1>
          <p className="animate-fade-up anim-delay-2 text-lg md:text-xl text-frost-100/85 max-w-2xl mx-auto mb-3 leading-relaxed">
            Not sure where to go tonight? We know every door, every DJ, and every
            table worth booking across Mayfair, Soho, and beyond. This is the
            insider guide that actually tells you what to expect.
          </p>
          <p className="animate-fade-up anim-delay-3 text-frost-300 text-sm mb-10 max-w-xl mx-auto">
            Updated daily by promoters on the ground. Real recommendations, not
            paid placements.
          </p>
          <div className="animate-fade-up anim-delay-4 flex justify-center">
            <WhatsAppCTA variant="hero" />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in anim-delay-5" aria-hidden>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-gradient-to-b from-neon-400 to-glow-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Club name marquee */}
      <div className="border-y border-white/[0.05] bg-night-900/60 py-5 marquee" aria-hidden>
        {[0, 1].map((n) => (
          <div key={n} className="marquee-track">
            {clubs.filter((c) => c.status === 'open').map((club) => (
              <span key={club.slug} className="flex items-center shrink-0">
                <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-frost-300/80 px-8">
                  {club.name}
                </span>
                <span className="text-glow-400/60 text-xs">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Tonight's Best Options */}
      <section className="section-glow py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-xl">
              <span className="eyebrow">Curated nightly</span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
                Tonight&apos;s Best <span className="serif-accent text-gradient">Options</span>
              </h2>
              <p className="text-frost-300 text-base">
                These are the clubs we&apos;d actually send our friends to tonight.
                Every recommendation is based on what&apos;s genuinely good — the
                music, the crowd, and whether the night is worth the entry price.
              </p>
            </div>
            <Link
              href="/clubs"
              className="btn-ghost px-6 py-3 text-sm self-start md:self-auto shrink-0"
            >
              View All Clubs →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tonightPicks.map((club, i) => (
              <ClubCard key={club.slug} club={club} featured={i < 2} showArea />
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — editorial pull quote */}
      <div className="relative h-[360px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/gallery/images/fe4414_22246854daae4814bd1b4a551b4fd3b6.jpg"
          alt="London nightclub atmosphere"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-transparent to-night-950" />
        <p className="relative z-10 font-serif italic text-3xl md:text-5xl text-white/90 text-center px-6 max-w-3xl leading-snug">
          &ldquo;The best night of your life<br className="hidden sm:block" /> starts with the right door.&rdquo;
        </p>
      </div>

      {/* Going Out Tonight? */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12 md:mb-16 max-w-xl">
            <span className="eyebrow">Fast lanes</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Going Out <span className="serif-accent text-gradient">Tonight?</span>
            </h2>
            <p className="text-frost-300 text-base">
              Quick links to tonight&apos;s options, guestlist, and last-minute bookings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: '/clubs-tonight-london', title: 'Clubs Open Tonight', desc: "See what's open right now", live: true },
              { href: '/mayfair-clubs-tonight', title: 'Mayfair Tonight', desc: "Tonight's Mayfair options", live: true },
              { href: '/best-clubs-this-weekend-london', title: 'This Weekend', desc: 'Friday & Saturday picks' },
              { href: '/guestlist-tonight-london', title: 'Guestlist Tonight', desc: 'Free same-night entry', live: true },
              { href: '/last-minute-table-booking-london', title: 'Last Minute Tables', desc: 'Book a VIP table now' },
              { href: '/contact', title: 'Talk to a Promoter', desc: 'WhatsApp us — replies in minutes' },
            ].map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                className="glass-card glass-card-hover group flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <h3 className="font-display text-white font-bold mb-1 flex items-center gap-2.5">
                    {item.live && <span className="live-dot scale-90" aria-hidden />}
                    {item.title}
                  </h3>
                  <p className="text-frost-400 text-sm">{item.desc}</p>
                </div>
                <span className="text-neon-300 text-xl transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="relative overflow-hidden border-y border-white/[0.05] py-16 md:py-24">
        <div className="glow-orb w-[600px] h-[400px] bg-neon-500/20 -top-48 left-1/4" aria-hidden />
        <div className="glow-orb w-[500px] h-[350px] bg-glow-500/15 -bottom-40 right-1/4" aria-hidden style={{ animationDelay: '-6s' }} />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <span className="eyebrow justify-center">Free concierge</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Not Sure <span className="serif-accent text-gradient">Where to Go?</span>
          </h2>
          <p className="text-frost-300 text-base mb-9 max-w-lg mx-auto">
            Message us on WhatsApp and we&apos;ll recommend the right club for
            your group, sort your table or guestlist, and make sure you get in.
            No fees, no catches.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="hero" />
          </div>
        </div>
      </section>

      {/* Quick Guides Section */}
      <section className="section-glow py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12 md:mb-16 max-w-xl">
            <span className="eyebrow">Know before you go</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Quick <span className="serif-accent text-gradient">Guides</span>
            </h2>
            <p className="text-frost-300 text-base">
              Everything you need to know before going out in London tonight.
              Written by people who actually work in the clubs, not travel
              bloggers who visited once.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide, i) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="glass-card glass-card-hover group relative block p-7 overflow-hidden"
              >
                <span className="font-display text-5xl font-extrabold text-white/[0.05] absolute top-4 right-5 select-none transition-colors duration-500 group-hover:text-neon-500/15" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-bold text-white text-lg mb-2.5 pr-10 group-hover:text-neon-200 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-frost-300 text-sm leading-relaxed">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-neon-300 group-hover:text-white transition-colors">
                  Read guide
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Area Breakdown */}
      <section className="border-t border-white/[0.05] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12 md:mb-16 max-w-xl">
            <span className="eyebrow">The map</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Clubs by <span className="serif-accent text-gradient">Area</span>
            </h2>
            <p className="text-frost-300 text-base">
              London&apos;s nightlife is spread across distinct pockets, each
              with its own character. Where you go matters as much as which club
              you pick.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {areas.map((area) => (
              <Link
                key={area.slug + area.name}
                href={`/areas/${area.slug}`}
                className="glass-card glass-card-hover group block p-7"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-white text-xl group-hover:text-neon-200 transition-colors">
                    {area.name}
                  </h3>
                  <span className="chip chip-accent">
                    {area.clubCount} {area.clubCount === 1 ? 'club' : 'clubs'}
                  </span>
                </div>
                <p className="text-frost-300 text-sm leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-neon-300 group-hover:text-white transition-colors">
                  Explore {area.name}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — editorial pull quote */}
      <div className="relative h-[360px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/gallery/images/fe4414_2291dbc51f7c454086afe6888d025fdb.jpg"
          alt="VIP bottle service London nightclub"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-transparent to-night-950" />
        <p className="relative z-10 font-serif italic text-3xl md:text-5xl text-white/90 text-center px-6 max-w-3xl leading-snug">
          &ldquo;Tables from &pound;1,000.<br className="hidden sm:block" /> Memories, considerably more.&rdquo;
        </p>
      </div>

      {/* Network Cross-Links */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center">Specialist guides</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-3">
              Our Network
            </h2>
            <p className="text-frost-300 text-sm max-w-xl mx-auto">
              Specialist guides from our London nightlife network
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {networkSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover group block p-6 text-center"
              >
                <h3 className="font-display font-bold text-white text-sm mb-2 group-hover:text-neon-200 transition-colors">
                  {site.name}
                </h3>
                <p className="text-frost-500 text-xs">{site.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom SEO Content */}
      <section className="border-t border-white/[0.05] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <span className="eyebrow">The scene</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-8">
            Going Out in London Tonight
          </h2>
          <div className="space-y-4 text-frost-300 text-[0.95rem] leading-relaxed">
            <p>
              London&apos;s club scene moves fast. What&apos;s packed on a
              Saturday might be dead on a Thursday, and the club everyone was
              talking about six months ago may have already lost its edge. That
              reality is exactly why this guide exists — we track
              what&apos;s actually good right now, not what used to be.
            </p>
            <p>
              Most nightclubs in London tonight will run from around 10pm to 3am
              or 4am, with peak hours between midnight and 2am. Mayfair clubs
              tend to be the most exclusive and expensive, with table minimums
              starting from around &#163;1,000. Soho offers more variety in
              terms of music and price points. South London — particularly
              around Ministry of Sound — caters to the serious club
              crowd who care more about the DJ than the dress code.
            </p>
            <p>
              Whether you&apos;re looking for clubs open tonight in London for a
              birthday, a spontaneous night out, or a properly planned VIP
              experience, the key is knowing which venue matches your group.
              That&apos;s what we do. Message us on WhatsApp and we&apos;ll
              point you in the right direction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
