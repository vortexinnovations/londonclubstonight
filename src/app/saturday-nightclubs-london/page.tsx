import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSaturdayClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Saturday Night Clubs London — Where to Go This Saturday',
  description:
    'Saturday is London\'s biggest night. Every club open, table availability, booking deadlines, and how to make the most of the busiest night of the week.',
  keywords: [
    'Saturday nightclubs London',
    'Saturday night clubs London',
    'clubs open Saturday London',
    'best Saturday night London',
    'London clubs Saturday',
    'Saturday night out London',
    'where to go Saturday night London',
    'Saturday clubbing London',
  ],
  openGraph: {
    title: 'Saturday Nightclubs in London — The Biggest Night of the Week',
    description:
      'Every London nightclub open on Saturday night. Table prices, booking advice, and insider tips for the busiest night.',
    url: 'https://londonclubstonight.com/saturday-nightclubs-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saturday Nightclubs in London — The Biggest Night of the Week',
    description:
      'Every London nightclub open on Saturday night. Booking advice and insider tips for the busiest night.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/saturday-nightclubs-london',
  },
};

const faqs = [
  {
    question: 'What are the best clubs open on Saturday night in London?',
    answer:
      'Saturday is the biggest night in London and nearly every major club is open. Top choices include Tape London for exclusivity, Cirque Le Soir for entertainment, Ministry of Sound for electronic music, The London Reign for a show-and-club experience, TABU for hip-hop, and Maddox for house music. The best club for you depends on your music taste, group size, and budget.',
  },
  {
    question: 'Do I need to book a table for Saturday night in London?',
    answer:
      'Booking is strongly recommended for Saturday nights. Most Mayfair clubs fill their table sheet by Thursday or Friday, and guestlist spots are more competitive. At exclusive venues like Tape London, a table is essentially mandatory. Even at more accessible venues, having a booking removes the risk of being turned away at a busy door.',
  },
  {
    question: 'What time should I arrive at a London club on Saturday?',
    answer:
      'The optimal arrival window on Saturday is 11pm to midnight. This gets you in before peak capacity while avoiding an empty room. If you are on guestlist, arriving by 11:30pm is advisable — some venues cap guestlist entry after midnight. If you have a table, you have more flexibility, but arriving by midnight lets you enjoy the full peak period.',
  },
  {
    question: 'How much does a Saturday night out cost in London?',
    answer:
      'Saturday is the most expensive night. Tables start from £1,000 minimum spend at most venues, with some venues applying higher Saturday minimums. Guestlist entry (where available) may be free or carry a cover charge of £20-30. Drinks inside are premium priced — cocktails £16-25, bottles of spirits £300-500. Budget at least £100-150 per person without a table.',
  },
];

export default function SaturdayNightclubsLondonPage() {
  const saturdayClubs = getSaturdayClubs();

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Saturday Nightclubs in London — The Biggest Night of the Week',
            'Every London nightclub open on Saturday night with booking advice, pricing, and insider tips.',
            '/saturday-nightclubs-london',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Saturday Night Clubs', url: '/saturday-nightclubs-london' },
          ]),
          getItemListSchema(
            'Saturday Night Clubs in London',
            saturdayClubs.map((club) => ({ name: club.name, url: '/clubs/' + club.slug }))
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/gallery/images/fe4414_26d48086ecb64d8e9e654bb6de0a081f.jpg"
          alt="Saturday night clubs in London at peak atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/80 to-black/60" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
          <p className="text-white/80 text-sm uppercase tracking-widest mb-6">
            Saturday Night London
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Saturday Nightclubs in London
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            The biggest night of the week in the biggest city in Europe. Every major club is open, every venue is at peak capacity, and the energy across London is unmistakable. Here is how to navigate it.
          </p>
          <WhatsAppCTA variant="tonight" heading="Going Out This Saturday?" />
        </div>
      </section>

      {/* The Saturday Crowd */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Saturday Crowd: Who Goes Out and Why
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Saturday night in London draws a crowd that has been planning for days. This is the night of birthdays, hen parties, anniversary celebrations, and groups of friends who locked in a date two weeks ago and spent the intervening time coordinating outfits, booking restaurants, and building anticipation. The result is a crowd that arrives with purpose and investment that no other night matches.
            </p>
            <p>
              The celebratory element defines Saturday. On any given Saturday in Mayfair, a significant portion of the room is marking something — a promotion, a visitor from abroad, a milestone. This changes the energy. People are generous with champagne, more open to conversation with strangers, and more willing to commit to the full experience. Bottle presentations with sparklers, tables ordering rounds for neighbouring groups, spontaneous toasts — these are Saturday phenomena.
            </p>
            <p>
              The international contingent is strongest on Saturdays. Visitors from Paris, Dubai, Milan, and New York who have one night to experience London nightlife overwhelmingly choose Saturday. This gives the Mayfair clubs in particular a cosmopolitan atmosphere that Friday, with its London-centric after-work crowd, does not replicate. You are as likely to hear French or Arabic at a Saturday table as you are English.
            </p>
            <p>
              Saturday also draws the most glamorous crowd. People dress for Saturday in a way they do not for any other night. The preparation shows — the outfits are more considered, the grooming is sharper, the overall standard is visibly higher. Door teams respond to this by enforcing dress codes at their strictest. Saturday is when the unwritten rules become non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Booking on Saturdays */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Advance Booking Is Critical on Saturdays
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Saturday is the one night where improvisation fails. The competition for tables, guestlist spots, and even walk-in entry is at its peak. Every group in London has the same idea, and the venues have finite capacity. The groups that secure the best tables, the best positions, and the smoothest entry are the ones who committed earliest.
            </p>
            <p>
              The booking timeline for Saturday is unforgiving. At exclusive venues like Tape London, the best table positions sell out a week or more in advance. By Wednesday, you are choosing from what remains rather than what you want. By Friday, you are relying on cancellations and promoter allocations. By Saturday afternoon, the options have narrowed to whatever did not sell — and at the most popular venues, that may be nothing at all.
            </p>
            <p>
              Guestlist on Saturdays operates under tighter constraints than any other night. Venues allocate fewer guestlist spots, door teams apply stricter criteria when deciding who enters from the list, and the window for guestlist entry closes earlier. At some venues, guestlist is functionally over by midnight on a Saturday — after that, only table guests and members enter. If you are relying on guestlist for Saturday, treat it as a confirmed reservation rather than a casual arrangement: arrive early, dress impeccably, and have a backup plan.
            </p>
            <p>
              For Ministry of Sound, the Saturday dynamic is ticket-based. Headline events sell out online, sometimes days in advance. The door price, if tickets remain, will be higher than the advance price. Buying early is not just cheaper — it is the only way to guarantee you get in.
            </p>
            <p>
              The advantage of booking through a promoter on Saturday is significant. We hold allocations at multiple venues, which means we can often secure a table when the venue&apos;s own booking system shows full. We also know which venues have last-minute cancellations and can move quickly. For Saturday table pricing and bottle service packages, visit{' '}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white underline underline-offset-4"
              >
                londonbottleservice.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Saturday Clubs */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            All Saturday Night Clubs
          </h2>
          <p className="text-[#BBB] text-center mb-12 max-w-2xl mx-auto">
            {saturdayClubs.length} venues open on Saturday night. Message us for tables, guestlist, or advice on which venue suits your group.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {saturdayClubs.map((club) => (
              <TonightClubCard key={club.slug} club={club} showGuestlistStatus showTableCTA />
            ))}
          </div>
        </div>
      </section>

      {/* Best Arrival Times */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Saturday Night Arrival Strategy
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Timing your arrival on Saturday is more important than any other night. Get it wrong and you either sit in a half-empty room for an hour or face a door that has stopped admitting people. Get it right and you walk into a club at its energetic peak.
            </p>
            <p>
              <strong className="text-white">10pm to 11pm:</strong> Only relevant if you have a dinner-and-club booking at The London Reign or a cocktail reservation at Dear Darling. Pure nightclub arrivals at this time will find an empty room and awkward silence. The only exception is Ministry of Sound, which builds atmosphere earlier due to its scale.
            </p>
            <p>
              <strong className="text-white">11pm to 11:30pm:</strong> The early-mover window. The room is filling, the music is building, and you have time to settle in before the peak. If you are on guestlist, this is the ideal arrival time — early enough to guarantee entry, late enough that the atmosphere has started.
            </p>
            <p>
              <strong className="text-white">11:30pm to 12:30am:</strong> The sweet spot. Most clubs reach their optimal atmosphere during this window. The dancefloor is active, the DJ is hitting stride, and the energy is climbing. This is when Saturday night feels like Saturday night. Table guests should aim for this window to get the most from their booking.
            </p>
            <p>
              <strong className="text-white">12:30am to 1:30am:</strong> Still workable but risks are higher. Popular venues may have reached capacity and stopped admitting from guestlist. Tables that were available earlier may have been released to walk-ins. If you are arriving this late without a confirmed booking, check with us first to confirm the venue is still accepting entry.
            </p>
            <p>
              <strong className="text-white">After 1:30am:</strong> For Mayfair clubs closing at 3am-3:30am, arriving after 1:30am gives you less than two hours. You are paying full price for a partial experience. At Ministry of Sound, however, 1:30am is perfectly reasonable — the night runs until 6am and the best hours are often 2am to 4am.
            </p>
          </div>
        </div>
      </section>

      {/* Saturday Energy and Competition */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Saturday Experience: Intensity, Spectacle, and Competition
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              A Saturday night in a London club operates at a different intensity from every other night. The rooms are at capacity. The dancefloors are dense. The queues at the bar move faster because the staff have doubled. The DJ plays with more authority because the crowd is larger, more responsive, and more committed to every track. Saturday is when London nightlife runs at full power, and everything — the highs and the logistics — reflects that scale.
            </p>
            <p>
              The competition between tables is part of the Saturday theatre. Groups order champagne not just because they want it but because the presentation — sparklers, LED bottles, the waiter carrying it high above the crowd — is a declaration. At Tape, TABU, and Maddox on a Saturday, the bottle presentations cascade through the night like a chain reaction: one table orders, the neighbouring table responds, and the energy ratchets upward with each round.
            </p>
            <p>
              Saturday is also when you are most likely to share the room with recognisable faces. Celebrities, athletes, and music industry figures overwhelmingly choose Saturday for their nights out. At Tape London, the small capacity means these encounters feel personal rather than distant. At Cirque Le Soir, the performers interact with everyone regardless of profile, creating a levelling effect that makes Saturday nights feel genuinely communal despite the VIP framework.
            </p>
            <p>
              The trade-off for Saturday&apos;s intensity is density. If you are someone who values space, ease of movement, and a quieter conversation, Saturday at a Mayfair club may feel overwhelming. The dancefloor will be shoulder to shoulder. The journey from your table to the bar will take longer than you expect. This is not a drawback for Saturday regulars — the density is the atmosphere. But it is worth knowing in advance so you arrive with the right expectations.
            </p>
            <p>
              For dedicated Mayfair Saturday coverage and venue-by-venue guides, visit{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white underline underline-offset-4"
              >
                mayfairtonight.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA variant="tonight" heading="Book Your Saturday Night" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-[#BBB] text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            More Night-Out Guides
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog/best-saturday-night-clubs-in-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Saturday Night Clubs Blog
            </Link>
            <Link
              href="/best-clubs-this-weekend-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Clubs This Weekend
            </Link>
            <Link
              href="/friday-nightclubs-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Friday Nightclubs
            </Link>
            <Link
              href="/clubs-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Clubs Open Tonight
            </Link>
            <Link
              href="/guestlist-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Guestlist Tonight
            </Link>
            <Link
              href="/last-minute-table-booking-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Last Minute Tables
            </Link>
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              London Bottle Service Guide
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
