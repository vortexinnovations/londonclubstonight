import type { Metadata } from 'next';
import Link from 'next/link';
import { getLastMinuteTableClubs, getClubsOpenTonight, getCurrentDayName } from '@/lib/clubs';
import TonightClubCard from '@/components/TonightClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Last Minute Table Booking London — Book a VIP Table Tonight',
  description:
    'Need a VIP table tonight in London? Same-day table bookings at Mayfair, Soho, and Central London clubs. Live availability, pricing, and instant WhatsApp confirmation.',
  keywords: [
    'last minute table booking London',
    'book a table tonight London',
    'VIP table London tonight',
    'same day table booking London club',
    'London club table tonight',
    'last minute VIP table London',
    'bottle service London tonight',
    'book nightclub table London',
  ],
  openGraph: {
    title: 'Last Minute Table Booking London — Book a VIP Table Tonight',
    description:
      'Same-day VIP table bookings at London clubs. Live availability, pricing from £1,000, and instant WhatsApp confirmation.',
    url: 'https://londonclubstonight.com/last-minute-table-booking-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Minute Table Booking London',
    description:
      'Same-day VIP table bookings at London clubs. Live availability and instant WhatsApp confirmation.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/last-minute-table-booking-london',
  },
};

const faqs = [
  {
    question: 'Can I book a VIP table at a London club tonight?',
    answer:
      'Yes, same-day table bookings are possible at many London clubs. Venues like Cirque Le Soir, TABU, The London Reign, and Maddox regularly accommodate last-minute table requests, especially on Thursdays and Fridays. Saturday availability is tighter but not impossible — we often have access to promoter-held tables even when the venue shows fully booked on their own system. Message us on WhatsApp for a real-time availability check across all venues.',
  },
  {
    question: 'How much does a table cost at London clubs?',
    answer:
      'Table minimums at London clubs typically start from £1,000 and go up from there. This is a minimum spend on bottles and drinks, not an entry fee on top of your drinks. At venues like TABU and Cuckoo Club, £1,000 is the standard starting point. Tape London starts from £1,500. Premium positions and peak Saturdays can push minimums to £2,000 or above. For a group of five, £1,000 works out to £200 per person — competitive with buying individual drinks at the bar over a full night, with vastly better service and guaranteed entry.',
  },
  {
    question: 'What is included in a table booking?',
    answer:
      'A table booking includes a reserved private area for your group, guaranteed entry to the club (bypassing all queues and door assessment), a dedicated server for the evening, and your minimum spend worth of bottles, mixers, and drinks. Most venues also include security for your area, ice, garnishes, and standard mixers at no extra cost. The specific bottles available depend on the venue and your budget — we can advise on the best value options at each club when you book.',
  },
  {
    question: 'How does last-minute booking work via WhatsApp?',
    answer:
      'The process is straightforward: message us on WhatsApp with your preferred club (or ask us to recommend one), your date, group size, and any preferences. We check real-time availability directly with the venue reservations team and confirm your booking, usually within 15 to 30 minutes. You receive confirmation with all details — arrival time, dress code reminders, and your host contact at the venue. On the night, give your name at the door and you are taken straight to your table. No deposit is required for most bookings arranged through us.',
  },
  {
    question: 'What happens if my first-choice club is fully booked?',
    answer:
      'We always have alternatives. If your preferred venue is sold out, we will suggest comparable options based on what made you want that club in the first place — the music, the vibe, the location, or the price point. We work with every major club in London, so we can almost always find a table somewhere excellent on the same night. The advantage of booking through a promoter rather than directly is exactly this: we see availability across the entire market, not just one venue.',
  },
];

export default function LastMinuteTableBookingPage() {
  const dayName = getCurrentDayName();
  const lastMinuteClubs = getLastMinuteTableClubs();
  const tonightClubs = getClubsOpenTonight();
  const lastMinuteTonight = lastMinuteClubs.filter((c) =>
    tonightClubs.some((tc) => tc.slug === c.slug)
  );
  const now = new Date().toISOString();

  const articleSchema = getArticleSchema(
    'Last Minute Table Booking London — Book a VIP Table Tonight',
    'Same-day VIP table bookings at London clubs. Live availability, pricing, and instant confirmation.',
    '/last-minute-table-booking-london',
    '2025-01-15'
  );
  const faqSchema = getFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-12 md:pt-36 md:pb-16 text-center">
        <p className="text-[#C0C0C0] text-sm uppercase tracking-[0.2em] mb-6">
          Same-Day VIP Tables
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Last Minute Table Booking London
        </h1>
        <p className="text-lg md:text-xl text-[#BBB] max-w-2xl mx-auto leading-relaxed mb-4">
          Need a VIP table tonight? We check live availability across every
          major London club and confirm your booking via WhatsApp in minutes.
          No deposits, no booking fees, no hassle.
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
        <WhatsAppCTA variant="tonight" heading="Book a Table Tonight" />
      </section>

      {/* Table Minimums Quick Reference */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Table Minimums — Quick Reference
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              Minimum spends at London&apos;s top clubs. These are starting
              prices — premium positions and peak nights may be higher. All
              minimums are spend on bottles and drinks, not an additional fee.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lastMinuteClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-[#141414] border border-[#222] rounded-2xl p-6 text-center"
              >
                <Link
                  href={`/clubs/${club.slug}`}
                  className="text-lg font-bold text-white hover:text-[#C0C0C0] transition-colors"
                >
                  {club.name}
                </Link>
                <p className="text-2xl font-bold text-[#C0C0C0] mt-2">
                  {club.tableMinimum}
                </p>
                <p className="text-xs text-[#888] mt-1">{club.area}</p>
                <p className="text-xs text-[#BBB] mt-3">{club.lastMinuteNote}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-[#888] text-sm">
              For detailed pricing breakdowns, bottle menus, and package options, visit{' '}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white transition-colors"
              >
                London Bottle Service
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Available Tonight */}
      {lastMinuteTonight.length > 0 && (
        <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tables Available Tonight
              </h2>
              <p className="text-[#BBB] text-base max-w-xl mx-auto">
                These clubs are open tonight and known for accommodating
                same-day table bookings. Availability is live — message
                us on WhatsApp for an instant check.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {lastMinuteTonight.map((club) => (
                <TonightClubCard
                  key={club.slug}
                  club={club}
                  showTableCTA
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Last Minute Friendly Clubs */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Last-Minute-Friendly Venues
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              Every London club we work with that regularly accommodates
              same-day table bookings. Whether it is for tonight, tomorrow,
              or this weekend — these are the venues where last-minute
              tables are most likely to be available.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {lastMinuteClubs.map((club) => (
              <TonightClubCard
                key={club.slug}
                club={club}
                showTableCTA
              />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            How Last-Minute Table Booking Works
          </h2>
          <div className="space-y-5 text-[#BBB] text-sm leading-relaxed">
            <p>
              The image most people have of VIP table booking involves weeks
              of planning, large deposits, and inflexible cancellation policies.
              That is not how it works when you book through a promoter. The
              entire process — from your initial WhatsApp message to a
              confirmed reservation — typically takes less than thirty
              minutes. We have booked tables for clients who messaged us at
              7pm and were sat in their booth by 11pm the same night. That
              is the advantage of having direct relationships with every
              major venue&apos;s reservations team.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              The Step-by-Step Process
            </h3>
            <p>
              Step one: message us on WhatsApp. Tell us which club you
              want (or ask us to recommend one based on your group and
              preferences), your date, your group size, and your approximate
              budget. Step two: we check real-time availability with the
              venue. If your first choice is available, we lock it in. If
              not, we present alternatives. Step three: you receive a
              confirmation message with your table details, arrival time,
              dress code reminders, and the name and number of your host
              at the venue. Step four: turn up, give your name at the
              door, and get taken directly to your table.
            </p>
            <p>
              No deposit is required for most bookings arranged through us.
              The venue bills your minimum spend on the night in the form
              of bottles and drinks. You pay at the table, not in advance.
              This means there is zero financial risk to enquiring — if
              the availability or pricing does not work for you, there is
              no obligation.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              What Your Money Actually Gets You
            </h3>
            <p>
              A &#163;1,000 minimum spend at a London club is not a
              &#163;1,000 fee — it is &#163;1,000 worth of drinks. A
              standard bottle of Grey Goose vodka at a Mayfair club costs
              around &#163;400 to &#163;500. So a &#163;1,000 minimum
              typically gets you two bottles of premium spirit with
              mixers, or one premium bottle plus a bottle of champagne.
              For a group of five, that is roughly &#163;200 per person
              — less than many people spend buying rounds at the bar
              over a full night out, but with guaranteed entry, a private
              area, a dedicated server, and the VIP experience.
            </p>
            <p>
              Beyond the drinks, a table booking gets you something
              money cannot easily buy at a busy London club: certainty.
              No queue, no door assessment, no risk of being turned away.
              Your name is at the door, your table is waiting, and your
              host is expecting you. For birthdays, celebrations, or
              any night where the stakes are high, that peace of mind
              is worth the commitment.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Which Nights Have the Best Last-Minute Availability
            </h3>
            <p>
              Thursday nights offer the widest same-day table availability
              across all venues. Only the most in-demand clubs sell out
              their Thursday tables in advance. Friday is the second-best
              option — most venues have some availability until the
              afternoon of the same day. Saturday is where last-minute
              bookings become genuinely challenging. The top clubs — Tape
              London in particular — can sell out their Saturday tables
              a week or more in advance. However, mid-tier venues often
              have Saturday availability until Friday evening, and even
              popular clubs sometimes have cancellation tables that open
              up on the day.
            </p>
            <p>
              Our promoter network gives us access to tables that are not
              visible on a venue&apos;s public booking system. Clubs hold
              a portion of their inventory for promoter allocations, and
              we can often secure a table at a venue that shows fully
              booked on their website. This is the single biggest
              advantage of booking through us rather than directly.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Why Book Through Us Instead of Directly
            </h3>
            <p>
              Three reasons. First, we see availability across every
              club simultaneously, so if your first choice is unavailable,
              we immediately offer comparable alternatives. Going directly
              to a club and being told they are full leaves you starting
              from scratch. Second, we often have access to promoter-held
              tables that are not available through the venue&apos;s own
              booking channels. Third, our service is free — we are
              paid by the clubs for bringing them quality guests, so
              you pay exactly the same minimum spend as you would booking
              directly. There is genuinely no downside. For the most
              comprehensive table pricing guide, visit our partner site{' '}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white transition-colors"
              >
                London Bottle Service
              </a>
              , and for Mayfair-specific recommendations, see{' '}
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
            Last Minute Table Booking FAQ
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
              <h3 className="font-semibold text-white mb-4">Tonight</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/clubs-tonight-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    All clubs open tonight &rarr;
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
                  <Link href="/best-clubs-this-weekend-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Best clubs this weekend &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-4">Guides &amp; Pricing</h3>
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
                    London Bottle Service — full pricing guide &rarr;
                  </a>
                </li>
                <li>
                  <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Mayfair Tonight &rarr;
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
            Ready to book? One WhatsApp message and your table is sorted.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}
