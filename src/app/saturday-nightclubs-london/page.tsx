import type { Metadata } from 'next';
import Link from 'next/link';
import { getSaturdayClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Saturday Nightclubs in London — The Biggest Night of the Week',
  description:
    'Every London nightclub open on Saturday night. The busiest night of the week demands planning — table prices, booking advice, best arrival times, and honest insider tips.',
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
        ]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-widest mb-6">
            Saturday Night London
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Saturday Nightclubs in London
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            The biggest night of the week in the biggest city in Europe. Every major club is open, every venue is at peak capacity, and the energy across London is unmistakable. Here is how to navigate it.
          </p>
          <WhatsAppCTA variant="tonight" heading="Going Out This Saturday?" />
        </div>
      </section>

      {/* Why Saturday Is King */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Saturday Is the Biggest Night
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Saturday night in London is not just another night out — it is the night. Every club opens. Every DJ brings their best. Every door team is at full strength. The collective energy of millions of people deciding this is the night they go out creates an atmosphere that the other six days of the week simply cannot match.
            </p>
            <p>
              The numbers tell the story. Saturday sees the highest attendance at every venue, the longest queues, the fastest table sell-outs, and the most competitive guestlists. This is both the appeal and the challenge. Saturday in London rewards planning — the people who have the best nights are the ones who prepared, booked, and made decisions before they left the house.
            </p>
            <p>
              The crowd on a Saturday is different from Friday. There is more intention. People have spent the day getting ready — choosing outfits, making dinner reservations, coordinating groups. The result is a crowd that is dressed up, committed, and expecting a premium experience. The clubs respond by delivering their strongest programming, their most attentive service, and their highest production values.
            </p>
            <p>
              For visitors to London, Saturday is often the only option. Business travellers with a free weekend night, tourists who have one shot at experiencing London nightlife, international groups who have been planning this night for weeks — all of them gravitate to Saturday. This makes the international mix particularly strong, especially in Mayfair where the crowd draws from across Europe, the Middle East, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Is Essential */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Booking Is Essential on Saturdays
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              We say this clearly: do not arrive at a London club on Saturday night without some form of arrangement. A table booking, a confirmed guestlist spot, or advance tickets — any of these give you a path through the door. Turning up unannounced on the busiest night of the week is a gamble that rarely pays off.
            </p>
            <p>
              Table bookings fill earliest on Saturdays. Premium venues like Tape London may have their Saturday tables fully allocated by Wednesday or Thursday. Even more accessible venues see strong midweek booking activity. If you know you want to go out this Saturday, enquiring by Wednesday gives you the widest choice. By Friday afternoon, you are working with whatever remains.
            </p>
            <p>
              Guestlist is available at many venues but operates differently on Saturday. Spots are more limited, door teams are more selective about who they admit from the guestlist, and arrival time matters more. If you are on guestlist for a Saturday, arriving before midnight is strongly advisable — after that point, some venues begin prioritising table guests only.
            </p>
            <p>
              For Ministry of Sound, the booking mechanism is different — it runs on tickets rather than table service. Saturday events frequently sell out, particularly when headline DJs are booked. Buy tickets online as early as possible. Door purchases are sometimes available but carry the risk of a sold-out notice.
            </p>
            <p>
              The table booking process through a promoter is straightforward. Message us on WhatsApp with your group size, your preferred venue, and any particular requirements. We confirm availability, agree the minimum spend, and your name goes on the table sheet. On the night, you arrive, give your name at the door, and your table is waiting. No queue, no uncertainty, no drama.
            </p>
            <p>
              For the most comprehensive guide to table bookings, pricing, and bottle service etiquette in London, visit{' '}
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

      {/* What to Expect */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What to Expect on a Saturday
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Saturday nights in London clubs are an experience of intensity. The rooms are fuller, the music is louder, the service is faster, and everything operates at a higher tempo. This is what makes it exciting — and what makes preparation important.
            </p>
            <p>
              The music programming on Saturdays typically features a venue&apos;s strongest DJ roster. Headliner DJs play Saturday, resident DJs bring their most crowd-pleasing sets, and the playlist leans into tracks that generate maximum dancefloor response. If there is a night to hear a particular club at its musical peak, it is usually Saturday.
            </p>
            <p>
              Table service on Saturdays is polished and efficient. The waitstaff are experienced, the bottle presentations are more theatrical, and the attention to detail reflects the premium nature of the night. If you are booking a table, Saturday is when you see the best service standards. It is also when you are most likely to see champagne showers, sparkler presentations, and the full VIP theatre that London clubs are known for.
            </p>
            <p>
              The one thing to manage on Saturdays is expectations around space. Popular clubs will be busy. The dancefloor will be crowded. Movement between areas may be slow. This is not a flaw — it is a feature of a Saturday at capacity. If you prefer more space and a less intense atmosphere, Friday may suit you better. Saturday is for people who want the full, uncompromising London club experience.
            </p>
            <p>
              For the full picture of London nightlife across all areas and styles, visit{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white underline underline-offset-4"
              >
                mayfairtonight.com
              </a>
              {' '}for dedicated Mayfair coverage.
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
