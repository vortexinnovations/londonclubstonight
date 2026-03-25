import type { Metadata } from 'next';
import Link from 'next/link';
import { getLastMinuteTableClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Best Clubs for Last Minute Tables in London — Same-Day Booking Guide',
  description:
    'Which London clubs actually accept same-day table bookings? Insider guide to the most accommodating venues for last-minute bottle service, with prices, tips, and honest advice.',
  keywords: [
    'last minute table booking London',
    'same day table London clubs',
    'last minute bottle service London',
    'book table tonight London',
    'same day VIP London',
    'last minute nightclub booking',
    'London club table tonight',
    'bottle service tonight London',
  ],
  openGraph: {
    title: 'Best Clubs for Last Minute Tables in London — Same-Day Booking Guide',
    description:
      'Which London clubs actually accept same-day table bookings? Insider guide with prices, tips, and honest advice from promoters.',
    url: 'https://londonclubstonight.com/best-clubs-for-last-minute-tables-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Clubs for Last Minute Tables in London — Same-Day Booking Guide',
    description:
      'Which London clubs accept same-day table bookings? Insider guide with prices and honest advice.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/best-clubs-for-last-minute-tables-london',
  },
};

const faqs = [
  {
    question: 'Can I book a table at a London club on the same day?',
    answer:
      'Yes, many London clubs accept same-day bookings — but not all. Venues like Cirque Le Soir, TABU, Dear Darling, and BEAT London are consistently flexible with last-minute reservations. The most exclusive clubs like Tape London are much harder to book on the day, especially on Saturdays. Message us on WhatsApp and we can check real-time availability across all venues.',
  },
  {
    question: 'Why are some clubs easier to book last minute than others?',
    answer:
      'It comes down to capacity, demand, and business model. Smaller, ultra-exclusive venues like Tape fill their limited tables days in advance. Larger venues or those with multiple table positions have more flexibility. Some clubs also prioritise promoter relationships, meaning a last-minute booking through us succeeds where a direct enquiry might not.',
  },
  {
    question: 'How much is a last-minute table in London?',
    answer:
      'Table minimums typically start from £1,000 at most London clubs. Some venues offer lower minimums on quieter nights like Wednesdays and Thursdays. Saturday nights may carry higher minimums. The price is a minimum spend on bottles and mixers — not an entry fee on top of your drinks.',
  },
  {
    question: 'What is the latest I can book a table for tonight?',
    answer:
      'There is no hard cut-off, but booking earlier in the day gives you the best selection. By 8pm on a Saturday, most premium tables will be allocated. That said, we have successfully arranged tables as late as 11pm — it depends on the venue and the night. The sooner you message us, the better your options.',
  },
];

export default function BestClubsForLastMinuteTablesLondonPage() {
  const lastMinuteClubs = getLastMinuteTableClubs();

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Best Clubs for Last Minute Tables in London — Same-Day Booking Guide',
            'Which London clubs actually accept same-day table bookings? Insider guide to the most accommodating venues for last-minute bottle service.',
            '/best-clubs-for-last-minute-tables-london',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-widest mb-6">
            Same-Day Booking Guide
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Best Clubs for Last Minute Tables in London
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Plans changed. The night came together faster than expected. You need a table tonight. Here is exactly where to look — and who will actually say yes.
          </p>
          <WhatsAppCTA variant="tonight" heading="Need a Table Tonight?" />
        </div>
      </section>

      {/* Editorial Intro */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Reality of Last-Minute Tables
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Not every London club treats a same-day booking request the same way. Some venues — particularly the ultra-exclusive Mayfair members clubs — allocate their limited tables days or even weeks in advance. Others actively welcome last-minute bookings because they understand that spontaneity is how most of the best nights begin.
            </p>
            <p>
              After years of arranging tables across London, we have a clear picture of which clubs flex and which clubs do not. The venues listed below are ones where a same-day enquiry has a genuine chance of success. Some are more accommodating than others, and the night of the week matters enormously — Saturdays are always the hardest, while Wednesdays and Thursdays offer the most flexibility.
            </p>
            <p>
              The single biggest factor in landing a last-minute table is not how much you are willing to spend. It is who you book through. Most clubs prioritise promoter relationships because promoters bring reliable, well-qualified guests. A direct enquiry through Instagram or a club website often gets a slower response — or no response at all — compared to a message through an established promoter channel.
            </p>
            <p>
              This is where we come in. We maintain active relationships with the table managers at every venue on this page. When you message us on WhatsApp, we are not forwarding your request into a void — we are contacting someone we know personally, who trusts our judgement about the guests we send.
            </p>
            <p>
              For a comprehensive breakdown of London bottle service — pricing, etiquette, and how the economics work — visit{' '}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white underline underline-offset-4"
              >
                londonbottleservice.com
              </a>
              , our dedicated guide to VIP table bookings across the capital.
            </p>
          </div>
        </div>
      </section>

      {/* Why Some Clubs Are Easier */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Some Clubs Are More Accommodating
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Venue capacity is the most obvious factor. A club with twelve tables and a waiting list does not have the same flexibility as a venue with thirty positions and a more fluid booking model. But capacity alone does not tell the full story.
            </p>
            <p>
              Business model matters. Some venues operate on a scarcity model — they want tables to be hard to get because exclusivity is their brand. Others are more commercially driven and would rather fill a table at short notice than leave it empty. Neither approach is right or wrong, but it directly affects your chances of booking today.
            </p>
            <p>
              The cocktail-bar-to-club venues like Dear Darling tend to be the most flexible. Their format naturally accommodates walk-ins and last-minute guests because the evening starts as a bar experience before transitioning into a club. You can often secure a table during the cocktail hours that carries over into the late-night session.
            </p>
            <p>
              Music-focused venues like BEAT London also tend to be more welcoming of spontaneous bookings. Their ethos is about the music and the dancefloor experience — they would rather have a full, energetic room than hold empty tables for bookings that never materialise.
            </p>
            <p>
              The entertainment-led clubs like Cirque Le Soir and The London Reign occupy interesting middle ground. They programme full productions for every night they open, so there is an incentive to fill the room. Same-day tables are genuinely available, especially on the midweek nights that both venues operate.
            </p>
          </div>
        </div>
      </section>

      {/* Club Cards */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Clubs That Accept Last-Minute Bookings
          </h2>
          <p className="text-[#BBB] text-center mb-12 max-w-2xl mx-auto">
            Each of these venues has a track record of accommodating same-day table requests. Check their notes for specifics.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {lastMinuteClubs.map((club) => (
              <div key={club.slug} className="bg-[#141414] border border-[#222] rounded-2xl p-6 md:p-7">
                <Link
                  href={`/clubs/${club.slug}`}
                  className="text-xl font-bold text-white hover:text-[#C0C0C0] transition-colors"
                >
                  {club.name}
                </Link>
                <p className="text-[#BBB] text-sm mt-3">{club.lastMinuteNote}</p>
                <div className="flex items-center justify-between mt-5 text-xs text-[#888]">
                  <span>{club.area}</span>
                  <span>Tables from {club.tableMinimum}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {club.musicGenres.map((genre) => (
                    <span
                      key={genre}
                      className="text-xs bg-white/5 text-[#aaa] px-3 py-1 rounded-full border border-white/[0.04]"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing Advice */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Timing Your Last-Minute Booking
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              The earlier in the day you enquire, the better your options. This sounds obvious, but the difference between messaging at 2pm versus 9pm is significant. By early evening, the most desirable table positions are usually allocated. By late evening, you are working with whatever remains.
            </p>
            <p>
              <strong className="text-white">Before 4pm:</strong> Best selection across all venues. You can usually secure your first-choice club and a good table position. This is also when promoters have the most leverage with venue managers.
            </p>
            <p>
              <strong className="text-white">4pm to 8pm:</strong> Good options still available but popular venues on Saturdays may already be limited. Second and third choices become relevant. Flexibility on venue helps significantly.
            </p>
            <p>
              <strong className="text-white">After 8pm:</strong> Workable but limited. Some venues will have released un-confirmed reservations, which creates late openings. This is where promoter relationships become critical — we know which tables have fallen through and can move quickly.
            </p>
            <p>
              <strong className="text-white">After 10pm:</strong> You are relying on cancellations and no-shows. Still possible — we have arranged tables at 11pm on Saturdays — but your choice of venue narrows considerably.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA variant="tonight" heading="Book a Last-Minute Table Now" />
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
            Related Guides
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/last-minute-table-booking-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Last Minute Table Booking Guide
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
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              London Bottle Service Guide
            </a>
            <Link
              href="/can-you-get-into-tape-london-tonight"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Can You Get Into Tape Tonight?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
