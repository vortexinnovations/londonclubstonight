import type { Metadata } from 'next';
import Link from 'next/link';
import { getFridayClubs, getSaturdayClubs } from '@/lib/clubs';
import TonightClubCard from '@/components/TonightClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Best Clubs This Weekend in London — Friday & Saturday Guide',
  description:
    'The best London clubs this weekend. Friday and Saturday night picks, table availability, guestlist options, and honest recommendations from promoters who work every weekend.',
  keywords: [
    'best clubs this weekend London',
    'London clubs this weekend',
    'clubs this weekend London',
    'Friday night clubs London',
    'Saturday night clubs London',
    'London nightlife this weekend',
    'best nightclubs this weekend London',
    'going out this weekend London',
  ],
  openGraph: {
    title: 'Best Clubs This Weekend in London — Friday & Saturday Guide',
    description:
      'Friday and Saturday night picks for London clubs. Table availability, guestlist options, and honest insider recommendations.',
    url: 'https://londonclubstonight.com/best-clubs-this-weekend-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Clubs This Weekend in London',
    description:
      'Friday and Saturday night club picks for London. Tables, guestlists, and insider tips.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/best-clubs-this-weekend-london',
  },
};

const faqs = [
  {
    question: 'What are the best clubs in London this weekend?',
    answer:
      'The best weekend clubs depend on what you are looking for. For the most exclusive VIP experience, Tape London on Friday or Saturday is unmatched. For entertainment and spectacle, Cirque Le Soir delivers every weekend. For a Mayfair hip-hop night, TABU on Saturday is the insider pick. For house music, Maddox on Friday is the strongest option. For a complete dinner-show-club experience, The London Reign offers something no other venue can. Message us and we will recommend the right fit for your group.',
  },
  {
    question: 'Should I go out on Friday or Saturday in London?',
    answer:
      'Both nights are excellent but have different characters. Friday tends to attract a slightly younger, more energetic crowd fresh from the working week. The door policies are marginally softer and table availability is better. Saturday is the premium night — bigger DJs, fuller rooms, stricter doors, and higher minimum spends. If budget matters, Friday gives you more options. If you want the peak London club experience regardless of cost, Saturday is the night.',
  },
  {
    question: 'How far in advance should I book for this weekend?',
    answer:
      'For tables: as early as possible. Saturday tables at venues like Tape London can book out a week or more in advance. Most other venues have availability until Wednesday or Thursday for that weekend. For guestlists: 24 to 48 hours ahead is ideal, though same-day requests are possible at many venues, especially on Fridays. The earlier you book, the better your table position and the higher your chance of guestlist acceptance.',
  },
  {
    question: 'What should I wear to London clubs this weekend?',
    answer:
      'Mayfair clubs enforce the strictest dress codes: smart shoes, tailored trousers, and a sharp top for men. No trainers at Tape, TABU, Cuckoo, or Maddox. Soho venues like Cirque Le Soir accept more creative outfits but still expect smart-glamorous. For women, heels and a going-out outfit are standard across all premium venues. If you are unsure, dress up rather than down — nobody gets turned away for being too well-dressed.',
  },
  {
    question: 'Can I get a table for this weekend last minute?',
    answer:
      'Friday tables are generally available until the day before, and sometimes same-day. Saturday tables are harder — popular venues book out early. However, we always have options. Some clubs hold tables for our promoter allocation, and we can often secure a booking even when the venue appears full on their own system. Message us on WhatsApp and we will tell you exactly what is available right now.',
  },
];

export default function BestClubsThisWeekendPage() {
  const fridayClubs = getFridayClubs();
  const saturdayClubs = getSaturdayClubs();
  const now = new Date().toISOString();

  const articleSchema = getArticleSchema(
    'Best Clubs This Weekend in London — Friday & Saturday Guide',
    'The best London clubs this weekend with Friday and Saturday night picks, table availability, and insider tips.',
    '/best-clubs-this-weekend-london',
    '2025-01-15'
  );
  const faqSchema = getFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-12 md:pt-36 md:pb-16 text-center">
        <p className="text-[#C0C0C0] text-sm uppercase tracking-[0.2em] mb-6">
          Friday &amp; Saturday Night Guide
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Best Clubs This Weekend in London
        </h1>
        <p className="text-lg md:text-xl text-[#BBB] max-w-2xl mx-auto leading-relaxed mb-4">
          Your complete guide to this weekend&apos;s best clubs. Which venues are
          running their strongest nights, where the tables are still available,
          and what you need to know before you arrive.
        </p>
        <time
          dateTime={now}
          className="inline-block text-xs text-[#888] mb-10"
        >
          Updated {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' })}
        </time>
      </section>

      {/* WhatsApp CTA */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 pb-20 md:pb-28">
        <WhatsAppCTA variant="tonight" heading="Need a Table This Weekend?" />
      </section>

      {/* Friday Night */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Friday Night
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              {fridayClubs.length} clubs are open on Friday nights. The start of
              the weekend brings a buzzing, high-energy crowd that is ready to let
              loose after the working week.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fridayClubs.map((club) => (
              <TonightClubCard
                key={club.slug}
                club={club}
                showGuestlistStatus
                showTableCTA
              />
            ))}
          </div>
        </div>
      </section>

      {/* Saturday Night */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Saturday Night
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              {saturdayClubs.length} clubs are open on Saturday nights. The biggest
              night of the week — the best DJs, the fullest rooms, and the most
              electric atmosphere London nightlife has to offer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {saturdayClubs.map((club) => (
              <TonightClubCard
                key={club.slug}
                club={club}
                showGuestlistStatus
                showTableCTA
              />
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Planning Editorial */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            How to Plan Your Weekend Night Out
          </h2>
          <div className="space-y-5 text-[#BBB] text-sm leading-relaxed">
            <p>
              A great weekend night in London does not happen by accident. The
              people who have the best nights are the ones who commit to a
              plan early, sort their booking by Thursday at the latest, and
              arrive at the right time. The people who have mediocre nights
              are the ones who leave the decision until 10pm on Saturday
              evening, scramble for guestlist spots that are already full,
              and arrive at venues that peaked an hour ago.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              The Timing Blueprint
            </h3>
            <p>
              London clubs generally open between 10pm and 11pm, but the
              sweet spot for arrival depends on whether you have a table or
              are on guestlist. For table bookings, arriving between
              11:30pm and midnight is ideal — your table is ready, the
              room is filling up, and you settle in just as the energy
              begins to build. For guestlist, earlier is always better.
              Arriving at 10:30pm or 11pm gives you the shortest queue
              and the highest chance of getting through the door before
              the venue reaches capacity. By 12:30am, most guestlists
              are functionally closed at the busiest venues.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Pre-Drinks Strategy
            </h3>
            <p>
              Pre-drinks are part of London nightlife culture, but where
              and how you do them matters. A cocktail bar near your chosen
              club is the smartest play — you arrive looking polished and
              slightly warmed up, not dishevelled from a house party across
              town. For Mayfair clubs, bars around Shepherd Market or on
              Dover Street work well. For Soho venues, Carnaby Street and
              the surrounding streets have excellent cocktail options. Do
              not overdo it — the door teams can and will refuse entry to
              anyone who appears too intoxicated, regardless of their
              booking status.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              The Dress Code Weekend Reality
            </h3>
            <p>
              Dress codes are enforced more strictly on Saturdays than any
              other night. What passes on a Thursday — clean trainers at
              certain venues, a slightly more casual look — will get you
              turned away on a Saturday. The rule of thumb: if you would
              not wear it to a high-end restaurant, do not wear it to a
              Mayfair nightclub on a Saturday night. Soho venues offer
              slightly more creative latitude, but even Cirque Le Soir
              expects smart-glamorous at the weekend.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Booking Deadlines That Actually Matter
            </h3>
            <p>
              For Saturday tables at top-tier venues like Tape London, book
              by Wednesday at the absolute latest. Anything later and you are
              relying on cancellations. For Friday tables at most venues,
              Thursday booking is usually fine, with some availability
              extending to Friday afternoon. Guestlist requests should be
              submitted by Friday morning for Saturday and by Thursday
              for Friday. Same-day guestlist requests on Saturdays are
              a coin-flip at best.
            </p>
            <p>
              The safest approach: message us on WhatsApp right now. We
              know what is available at every venue because we have
              direct lines to the reservations teams. We can tell you
              in minutes whether your preferred venue has availability
              and what your options are if it does not. For detailed
              table pricing, minimums, and packages, check our partner
              site{' '}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white transition-colors"
              >
                London Bottle Service
              </a>.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Friday vs Saturday — The Honest Comparison
            </h3>
            <p>
              Friday nights in London have a particular energy that Saturdays
              do not — the release of the working week gives the crowd an
              urgency and enthusiasm that feels different from Saturday&apos;s
              more measured hedonism. The practical advantages of Friday are
              real: easier table availability, softer door policies, lower
              minimum spends at some venues, and less queue time. The
              trade-off is that Saturday generally attracts the better DJs,
              the fuller rooms, and the more committed nightlife crowd.
            </p>
            <p>
              Our recommendation: if you are celebrating something special
              or want the full London club experience, pick Saturday. If you
              want a fun, slightly less pressured night with better odds of
              getting exactly what you want, go Friday. Both nights deliver
              exceptional clubbing at London&apos;s best venues. For
              Mayfair-specific weekend planning, visit{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white transition-colors"
              >
                Mayfair Tonight
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Weekend Clubbing FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#141414] border border-[#222] rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {faq.question}
                </h3>
                <p className="text-[#BBB] text-sm leading-relaxed text-center">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Explore More
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold text-white mb-4">Tonight &amp; Urgent</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/clubs-tonight-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Clubs open tonight in London &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/mayfair-clubs-tonight" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Mayfair clubs tonight &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/guestlist-tonight-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Get on a guestlist tonight &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/last-minute-table-booking-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Last-minute table booking &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-4">Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/best-clubs-in-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Best clubs in London — ranked &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/guides/how-to-get-into-london-clubs" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    How to get into London clubs &rarr;
                  </Link>
                </li>
                <li>
                  <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    London Bottle Service — table pricing &rarr;
                  </a>
                </li>
                <li>
                  <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Mayfair Tonight — Mayfair weekend guide &rarr;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center">
          <p className="text-[#888] text-sm mb-5">
            Ready to lock in your weekend? One message sorts everything.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}
