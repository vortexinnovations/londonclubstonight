import type { Metadata } from 'next';
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
      <section className="relative bg-[#0A0A0A] border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28 md:py-36 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            London Clubs Tonight
          </h1>
          <p className="text-lg md:text-xl text-[#BBB] max-w-2xl mx-auto mb-4 leading-relaxed">
            Not sure where to go tonight? We know every door, every DJ, and every
            table worth booking across Mayfair, Soho, and beyond. This is the
            insider guide that actually tells you what to expect.
          </p>
          <p className="text-[#888] text-sm mb-10 max-w-xl mx-auto">
            Updated daily by promoters on the ground. Real recommendations, not
            paid placements.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="hero" />
          </div>
        </div>
      </section>

      {/* Tonight's Best Options */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tonight&apos;s Best Options
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              These are the clubs we&apos;d actually send our friends to tonight.
              Every recommendation is based on what&apos;s genuinely good — the
              music, the crowd, and whether the night is worth the entry price.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tonightPicks.map((club, i) => (
              <ClubCard key={club.slug} club={club} featured={i < 2} showArea />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/clubs"
              className="inline-block bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#333] text-[#C0C0C0] px-10 py-4 rounded-xl text-base font-medium transition-all"
            >
              View All Clubs →
            </Link>
          </div>
        </div>
      </section>

      {/* Going Out Tonight? */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Going Out Tonight?
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              Quick links to tonight&apos;s options, guestlist, and last-minute bookings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/clubs-tonight-london"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">Clubs Open Tonight</h3>
              <p className="text-[#888] text-sm">See what&apos;s open right now</p>
            </Link>
            <Link
              href="/mayfair-clubs-tonight"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">Mayfair Tonight</h3>
              <p className="text-[#888] text-sm">Tonight&apos;s Mayfair options</p>
            </Link>
            <Link
              href="/best-clubs-this-weekend-london"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">This Weekend</h3>
              <p className="text-[#888] text-sm">Friday &amp; Saturday picks</p>
            </Link>
            <Link
              href="/guestlist-tonight-london"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">Guestlist Tonight</h3>
              <p className="text-[#888] text-sm">Free same-night entry</p>
            </Link>
            <Link
              href="/last-minute-table-booking-london"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">Last Minute Tables</h3>
              <p className="text-[#888] text-sm">Book a VIP table now</p>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="bg-[#141414] border-y border-[#222] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Where to Go?
          </h2>
          <p className="text-[#BBB] text-sm mb-8 max-w-lg mx-auto">
            Message us on WhatsApp and we&apos;ll recommend the right club for
            your group, sort your table or guestlist, and make sure you get in.
            No fees, no catches.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Quick Guides Section */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Guides
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              Everything you need to know before going out in London tonight.
              Written by people who actually work in the clubs, not travel
              bloggers who visited once.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300 group"
              >
                <h3 className="font-bold text-white text-base mb-2 text-center group-hover:text-[#C0C0C0] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-[#BBB] text-sm leading-relaxed">
                  {guide.description}
                </p>
                <span className="inline-block mt-4 text-xs text-[#C0C0C0]">
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Area Breakdown */}
      <section className="bg-[#0A0A0A] border-t border-[#222] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clubs by Area
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              London&apos;s nightlife is spread across distinct pockets, each
              with its own character. Where you go matters as much as which club
              you pick.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug + area.name}
                href={`/areas/${area.slug}`}
                className="block bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300 group"
              >
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#C0C0C0] transition-colors">
                  {area.name}
                </h3>
                <span className="inline-block text-xs text-[#888] bg-white/5 px-2.5 py-1 rounded-full mb-3">
                  {area.clubCount} {area.clubCount === 1 ? 'club' : 'clubs'}
                </span>
                <p className="text-[#BBB] text-sm leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-block mt-4 text-xs text-[#C0C0C0]">
                  Explore {area.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Network Cross-Links */}
      <section className="bg-[#141414] border-t border-[#222] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Network
            </h2>
            <p className="text-[#BBB] text-sm max-w-xl mx-auto">
              Specialist guides from our London nightlife network
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-all duration-300 group"
              >
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-[#C0C0C0] transition-colors">
                  {site.name}
                </h3>
                <p className="text-[#888] text-xs">{site.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom SEO Content */}
      <section className="bg-[#0A0A0A] border-t border-[#222] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Going Out in London Tonight
          </h2>
          <div className="space-y-4 text-[#BBB] text-sm leading-relaxed">
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
