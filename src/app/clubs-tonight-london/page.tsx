import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getClubsOpenTonight,
  getCurrentDayName,
  getGuestlistFriendlyClubs,
  getLastMinuteTableClubs,
} from '@/lib/clubs';
import TonightClubCard from '@/components/TonightClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Clubs Open Tonight in London — What\'s Open & How to Get In',
  description:
    'Find out which London clubs are open tonight. Live updates on what\'s open, guestlist availability, last-minute table bookings, and insider tips from promoters on the ground.',
  keywords: [
    'clubs open tonight London',
    'London clubs tonight',
    'what clubs are open tonight in London',
    'nightclubs open tonight London',
    'going out tonight London',
    'London nightlife tonight',
    'clubs tonight near me',
    'best clubs tonight London',
  ],
  openGraph: {
    title: 'Clubs Open Tonight in London — What\'s Open & How to Get In',
    description:
      'Live guide to London clubs open tonight. Guestlist availability, last-minute tables, and insider tips from promoters who work the doors.',
    url: 'https://londonclubstonight.com/clubs-tonight-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clubs Open Tonight in London',
    description:
      'Live guide to London clubs open tonight. Guestlist availability, last-minute tables, and insider tips.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/clubs-tonight-london',
  },
};

const faqs = [
  {
    question: 'What clubs are open tonight in London?',
    answer:
      'The clubs open tonight depend on the day of the week. Most Mayfair clubs like Tape London, TABU, and Cirque Le Soir operate Thursday through Saturday. Soho venues often add Wednesday nights. Our page updates dynamically to show you exactly which clubs are open tonight based on the current day. Message us on WhatsApp for a real-time recommendation tailored to your group.',
  },
  {
    question: 'Can I get a table at a London club tonight?',
    answer:
      'Yes, same-night table bookings are possible at many London clubs, especially earlier in the week or on quieter nights. Venues like Cirque Le Soir, TABU, and The London Reign often have last-minute table availability. Saturdays at the most exclusive clubs like Tape London are harder to secure same-day. Message us on WhatsApp and we will check real-time availability across all venues.',
  },
  {
    question: 'What time do London clubs open?',
    answer:
      'Most London nightclubs open their doors between 10pm and 11pm, with the peak hours running from midnight to 2am. Mayfair clubs typically close between 3am and 3:30am. Ministry of Sound and a few late-night venues can run until 5am or beyond on certain nights. Arriving before midnight is strongly recommended for guestlist entry, and essential if you want to avoid the longest queues.',
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'It depends on the night and the venue. For Saturdays at top Mayfair clubs, advance booking is strongly recommended — both for tables and guestlist. Thursdays and Fridays tend to have more same-night availability. If you are relying on guestlist only, booking earlier in the day gives you the best chance. We can arrange same-night bookings via WhatsApp in most cases.',
  },
  {
    question: 'What should I wear tonight?',
    answer:
      'London clubs enforce dress codes seriously, particularly in Mayfair. For men: smart shoes (no trainers at most venues), tailored trousers or dark jeans, and a collared shirt or well-fitted top. Avoid sportswear, shorts, and open-toed shoes. For women: heels and a going-out outfit are standard. Some Soho venues like Cirque Le Soir are slightly more relaxed but still expect smart-glamorous. When in doubt, overdress — bouncers turn people away for being underdressed, never for being overdressed.',
  },
];

export default function ClubsTonightLondonPage() {
  const dayName = getCurrentDayName();
  const tonightClubs = getClubsOpenTonight();
  const guestlistClubs = tonightClubs.filter((c) => c.guestlistRealistic);
  const lastMinuteClubs = getLastMinuteTableClubs().filter((c) =>
    tonightClubs.some((tc) => tc.slug === c.slug)
  );
  const now = new Date().toISOString();

  const articleSchema = getArticleSchema(
    'Clubs Open Tonight in London — What\'s Open & How to Get In',
    'Live guide to London clubs open tonight with guestlist availability, last-minute tables, and insider tips.',
    '/clubs-tonight-london',
    '2025-01-15'
  );
  const faqSchema = getFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-12 md:pt-36 md:pb-16 text-center">
        <p className="text-[#C0C0C0] text-sm uppercase tracking-[0.2em] mb-6">
          It&apos;s {dayName} Night in London
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Clubs Open Tonight in London
        </h1>
        <p className="text-lg md:text-xl text-[#BBB] max-w-2xl mx-auto leading-relaxed mb-4">
          Every club open tonight, which ones have guestlist spots left,
          and where you can still get a table. Updated in real time by
          promoters who work these doors every night.
        </p>
        <time
          dateTime={now}
          className="inline-block text-xs text-[#888] mb-10"
        >
          Updated {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' })}
        </time>
      </section>

      {/* WhatsApp CTA - Above the fold */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 pb-20 md:pb-28">
        <WhatsAppCTA variant="tonight" heading="Need a Table or Guestlist Tonight?" />
      </section>

      {/* Tonight's Open Clubs */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tonight&apos;s Open Clubs
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              {tonightClubs.length > 0
                ? `${tonightClubs.length} clubs are open tonight. Here is every venue running a night this ${dayName}, with real-time availability from our team.`
                : `Most London clubs are closed tonight. Check back on Thursday, Friday, or Saturday for the biggest selection of open venues.`}
            </p>
          </div>
          {tonightClubs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {tonightClubs.map((club) => (
                <TonightClubCard
                  key={club.slug}
                  club={club}
                  showGuestlistStatus
                  showTableCTA
                />
              ))}
            </div>
          ) : (
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 text-center">
              <p className="text-[#BBB] mb-4">
                No clubs are scheduled to open tonight. London&apos;s club scene
                runs primarily Thursday through Saturday, with select venues
                opening on Wednesdays and Sundays.
              </p>
              <p className="text-[#888] text-sm">
                Planning ahead? Check our{' '}
                <Link href="/best-clubs-this-weekend-london" className="text-[#C0C0C0] hover:text-white transition-colors">
                  weekend guide
                </Link>{' '}
                for what&apos;s coming up.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Guestlist Available Tonight */}
      {guestlistClubs.length > 0 && (
        <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Guestlist Available Tonight
              </h2>
              <p className="text-[#BBB] text-base max-w-xl mx-auto">
                These clubs are accepting guestlist requests for tonight. Guestlist
                does not guarantee entry — it gets you to the front of the queue
                and usually means free or reduced entry for girls and mixed groups.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {guestlistClubs.map((club) => (
                <TonightClubCard
                  key={club.slug}
                  club={club}
                  showGuestlistStatus
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/guestlist-tonight-london"
                className="text-sm text-[#C0C0C0] hover:text-white transition-colors"
              >
                Full guestlist guide for tonight &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Last Minute Tables */}
      {lastMinuteClubs.length > 0 && (
        <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Last Minute Tables Tonight
              </h2>
              <p className="text-[#BBB] text-base max-w-xl mx-auto">
                These venues are known for accommodating same-day table bookings.
                Availability changes by the hour on busy nights — message us on
                WhatsApp for a live check.
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
            <div className="text-center mt-10">
              <Link
                href="/last-minute-table-booking-london"
                className="text-sm text-[#C0C0C0] hover:text-white transition-colors"
              >
                Full last-minute table guide &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            What You Actually Need to Know About Going Out Tonight
          </h2>
          <div className="space-y-5 text-[#BBB] text-sm leading-relaxed">
            <p>
              London&apos;s club scene does not operate on a simple open-or-closed
              basis. Every night has a different character, and the clubs that are
              technically open on a given evening are not all running their best
              nights. A Thursday at Tape London has a completely different energy
              from a Saturday at the same venue. The crowd shifts, the DJs change,
              and the atmosphere follows. Knowing which night is the right night
              at each venue is the difference between a good evening and a wasted
              one.
            </p>
            <p>
              The majority of London&apos;s premium nightclubs are concentrated
              in Mayfair, with a cluster of excellent options in Soho and a few
              standout venues in Fitzrovia and St James&apos;s. Mayfair clubs
              tend to be the most exclusive — stricter door policies, higher table
              minimums, and a crowd that skews older and wealthier. If you are
              looking for a night where the music matters more than the postcode,
              Soho and Fitzrovia deliver that with venues like Cirque Le Soir and
              BEAT London.
            </p>
            <p>
              Timing matters more than most people realise. Guestlist requests
              submitted after 8pm are significantly less likely to be honoured,
              especially on Saturdays. Table enquiries have better success rates
              the earlier you send them, even for same-night bookings. If you
              know you want to go out tonight, message us before dinner rather
              than after your third pre-drink. We can still pull strings later
              in the evening, but your options narrow with every hour.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              The Dress Code Reality
            </h3>
            <p>
              Every London club enforces a dress code, but the strictness varies
              by venue and by night. Mayfair clubs like Tape London and TABU
              expect smart shoes, tailored trousers, and a collared shirt at
              minimum for men. Trainers are almost universally rejected unless
              they are genuinely high-end designer. Women have more flexibility,
              but heels and a going-out outfit are the standard expectation.
              Cirque Le Soir is slightly more creative in its approach — they
              encourage individual style — but even there, turning up in casual
              clothes will get you turned away.
            </p>
            <p>
              The single most common reason people fail to get into London clubs
              is not their outfit — it is their group composition. All-male
              groups face the hardest entry in virtually every Mayfair venue.
              A group of six men with no women will struggle even with a
              guestlist booking. Mixed groups and predominantly female groups
              sail through. This is not a rule we invented — it is the reality
              of how London nightlife operates, and ignoring it leads to
              disappointed nights standing outside.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Guestlist vs Table — The Honest Breakdown
            </h3>
            <p>
              A guestlist booking gets your name at the door and typically
              grants free entry for women and reduced entry for men in mixed
              groups. It does not guarantee admission — you still face the
              door team&apos;s assessment of your group, your outfit, and
              the venue&apos;s capacity. On a quiet Thursday, a guestlist
              spot is as good as a golden ticket. On a packed Saturday at
              Tape London, it means very little.
            </p>
            <p>
              A table booking is the only way to guarantee entry at London&apos;s
              top clubs. You are committing to a minimum spend — typically
              &#163;1,000 to &#163;2,000 for most venues — and in return you
              get a reserved area, bottle service, a dedicated server, and the
              certainty that you will not be turned away at the door. For groups
              of four or more, the per-person cost often works out comparable to
              buying drinks individually at the bar, with vastly better service
              and atmosphere. For detailed table pricing and packages, check{' '}
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
              Why Tonight Specifically
            </h3>
            <p>
              The best nights in London are not always the weekends. Thursday
              nights at certain Mayfair clubs are genuinely more fun than
              Saturdays — the crowd is more relaxed, the door policy slightly
              softer, and the tables easier to get. Friday nights offer the
              energy of the weekend without Saturday&apos;s intensity. If you
              are reading this because you want to go out tonight — whatever
              night it is — you are already thinking about it the right way.
              The best nights happen when you stop overthinking and commit to
              a venue that matches your group.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
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

      {/* Internal Links & Cross-Links */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Explore More
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold text-white mb-4">Tonight &amp; This Weekend</h3>
              <ul className="space-y-2">
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
                <li>
                  <Link href="/best-clubs-this-weekend-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Best clubs this weekend &rarr;
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
                  <Link href="/areas/mayfair" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Mayfair club guide &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Network Cross-Links */}
          <div className="mt-16 pt-10 border-t border-[#1A1A1A]">
            <h3 className="font-semibold text-white mb-6 text-center">
              From Our Network
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors block text-center"
              >
                <p className="font-semibold text-white text-sm mb-1">Mayfair Tonight</p>
                <p className="text-[#888] text-xs">Mayfair clubs, events &amp; bookings</p>
              </a>
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors block text-center"
              >
                <p className="font-semibold text-white text-sm mb-1">London Bottle Service</p>
                <p className="text-[#888] text-xs">VIP table pricing &amp; packages</p>
              </a>
              <a
                href="https://londonbirthdayclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors block text-center"
              >
                <p className="font-semibold text-white text-sm mb-1">London Birthday Club</p>
                <p className="text-[#888] text-xs">Birthday party planning</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center">
          <p className="text-[#888] text-sm mb-5">
            Still deciding? One message is all it takes.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}
