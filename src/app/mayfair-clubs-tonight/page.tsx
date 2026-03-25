import type { Metadata } from 'next';
import Link from 'next/link';
import { getClubsOpenTonight, getCurrentDayName } from '@/lib/clubs';
import TonightClubCard from '@/components/TonightClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Mayfair Clubs Tonight — What\'s Open in Mayfair Right Now',
  description:
    'Which Mayfair clubs are open tonight? Live updates on guestlist availability, table bookings, and door policies from promoters who work Mayfair every night.',
  keywords: [
    'Mayfair clubs tonight',
    'clubs open in Mayfair tonight',
    'Mayfair nightclubs tonight',
    'going out in Mayfair tonight',
    'Mayfair nightlife tonight',
    'best Mayfair clubs tonight',
    'Mayfair club guestlist tonight',
    'VIP tables Mayfair tonight',
  ],
  openGraph: {
    title: 'Mayfair Clubs Tonight — What\'s Open in Mayfair Right Now',
    description:
      'Live guide to Mayfair clubs open tonight. Real-time guestlist and table availability from promoters on the ground.',
    url: 'https://londonclubstonight.com/mayfair-clubs-tonight',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayfair Clubs Tonight',
    description:
      'Live guide to Mayfair clubs open tonight. Guestlist and table availability from promoters on the ground.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/mayfair-clubs-tonight',
  },
};

const faqs = [
  {
    question: 'What Mayfair clubs are open tonight?',
    answer:
      'Mayfair clubs operate primarily on Thursday, Friday, and Saturday nights. Key venues include Tape London, TABU, Maddox, and Cuckoo Club. The exact clubs open tonight depend on the day of the week — our page updates dynamically to show you what is running right now. Message us on WhatsApp for a real-time recommendation based on your group size and preferences.',
  },
  {
    question: 'Can I get on a guestlist in Mayfair tonight?',
    answer:
      'Same-night guestlist in Mayfair is possible but depends on the venue and the night. TABU, Cuckoo Club, and Maddox are generally receptive to same-day guestlist requests for mixed groups. Tape London is much harder — table booking is the most reliable route there. The key factor is group composition: mixed groups with a good gender ratio have the best chance. Submit your guestlist request as early in the day as possible for the best odds.',
  },
  {
    question: 'What\'s the dress code for Mayfair clubs?',
    answer:
      'Mayfair has the strictest dress code of any London nightlife area. For men: smart shoes are non-negotiable, along with tailored trousers and a collared shirt or sharp top. No trainers, no sportswear, no casual denim. For women: heels and a cocktail-style outfit are standard. TABU is slightly more relaxed on footwear if the overall look is fashionable, but most Mayfair venues operate a strict smart-dress policy. The door teams have full discretion and will turn away anyone they consider underdressed.',
  },
  {
    question: 'How much is a table in Mayfair tonight?',
    answer:
      'Table minimums in Mayfair start from around £1,000 at venues like TABU, Cuckoo Club, and Maddox. Tape London starts from £1,500 and can go significantly higher for premium positions on peak nights. These minimums cover your spend on bottles and drinks — you are not paying £1,000 on top of your drinks, it is the minimum amount you commit to spending. For a group of five, that works out to £200 per person, which is competitive when you factor in guaranteed entry and bottle service. For full pricing breakdowns visit londonbottleservice.com.',
  },
];

export default function MayfairClubsTonightPage() {
  const dayName = getCurrentDayName();
  const allTonightClubs = getClubsOpenTonight();
  const mayfairClubs = allTonightClubs.filter((c) =>
    c.areas.includes('Mayfair')
  );
  const guestlistClubs = mayfairClubs.filter((c) => c.guestlistRealistic);
  const now = new Date().toISOString();

  const articleSchema = getArticleSchema(
    'Mayfair Clubs Tonight — What\'s Open in Mayfair Right Now',
    'Live guide to Mayfair clubs open tonight with guestlist availability, table bookings, and insider tips.',
    '/mayfair-clubs-tonight',
    '2025-01-15'
  );
  const faqSchema = getFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-12 md:pt-36 md:pb-16 text-center">
        <p className="text-[#C0C0C0] text-sm uppercase tracking-[0.2em] mb-6">
          {dayName} Night in Mayfair
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Mayfair Clubs Tonight
        </h1>
        <p className="text-lg md:text-xl text-[#BBB] max-w-2xl mx-auto leading-relaxed mb-4">
          The definitive guide to what is open in Mayfair right now.
          Which clubs are running, which guestlists are still accepting
          names, and where you can still get a table tonight.
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
        <WhatsAppCTA variant="tonight" heading="Need a Mayfair Table Tonight?" />
      </section>

      {/* Mayfair Clubs Open Tonight */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open in Mayfair Tonight
            </h2>
            <p className="text-[#BBB] text-base max-w-xl mx-auto">
              {mayfairClubs.length > 0
                ? `${mayfairClubs.length} Mayfair ${mayfairClubs.length === 1 ? 'club is' : 'clubs are'} open tonight. Every venue listed below is confirmed running this ${dayName}.`
                : `No Mayfair clubs are open tonight. Most Mayfair venues operate Thursday through Saturday.`}
            </p>
          </div>
          {mayfairClubs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {mayfairClubs.map((club) => (
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
                Mayfair&apos;s club scene is dormant tonight. The area runs
                its biggest nights on Thursdays, Fridays, and Saturdays.
              </p>
              <p className="text-[#888] text-sm">
                Looking for what&apos;s open elsewhere?{' '}
                <Link href="/clubs-tonight-london" className="text-[#C0C0C0] hover:text-white transition-colors">
                  See all London clubs open tonight
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Guestlist Tonight in Mayfair */}
      {guestlistClubs.length > 0 && (
        <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Guestlist Open in Mayfair Tonight
              </h2>
              <p className="text-[#BBB] text-base max-w-xl mx-auto">
                These Mayfair venues are currently accepting guestlist requests
                for tonight. The earlier you apply, the better your chances.
                Mixed groups with a balanced ratio are strongly preferred.
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
          </div>
        </section>
      )}

      {/* Mayfair Tonight Editorial */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            The Insider&apos;s Guide to Mayfair Tonight
          </h2>
          <div className="space-y-5 text-[#BBB] text-sm leading-relaxed">
            <p>
              Mayfair is the epicentre of London&apos;s high-end nightlife, and
              it has been for decades. The concentration of premium clubs within
              a few streets — Tape London on Hanover Square, TABU tucked
              underground, Maddox on its namesake street, Cuckoo Club on
              Swallow Street — creates a density of options that no other London
              neighbourhood can match. But choosing the wrong one on the wrong
              night can mean an expensive, underwhelming evening.
            </p>
            <p>
              The character of each Mayfair club shifts dramatically by night.
              Thursday is when the industry crowd comes out — promoters, models,
              music industry people. The vibe is more relaxed, the door slightly
              softer, and tables easier to secure. Friday attracts the after-work
              crowd transitioning into a full night out, with a younger energy
              that builds as the night progresses. Saturday is the main event —
              the biggest crowds, the strictest doors, the highest minimum
              spends, and the most electric atmosphere.
            </p>
            <p>
              If you are heading to Mayfair tonight without a booking, your
              experience depends almost entirely on three factors: your group
              composition, your outfit, and the time you arrive. Mixed groups
              with more women than men will find most doors open to them. An
              all-male group of five, regardless of how well-dressed they are,
              will face rejection at the majority of venues without a table
              reservation. This is not speculation — it is the consistent
              reality we observe every single night.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Which Mayfair Club Is Right for You Tonight
            </h3>
            <p>
              If you want hip-hop in an intimate underground setting, TABU is
              the call. The Japanese-inspired interiors and focused music
              programming create an atmosphere that feels nothing like the rest
              of Mayfair. If you want the most exclusive room in the area, Tape
              London is the answer — but bring your wallet and ideally a
              reservation. For house music fans, Maddox is the only serious
              option in Mayfair, with a restaurant-to-club flow that works
              seamlessly. Cuckoo Club splits the difference with house on one
              floor and hip-hop on another, making it the safest bet for groups
              who cannot agree on music.
            </p>
            <p>
              For the full Mayfair experience — the scene, the venues, the
              events calendar — visit{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white transition-colors"
              >
                Mayfair Tonight
              </a>
              , our dedicated guide to Mayfair nightlife. And if you are
              considering a table, detailed pricing for every Mayfair venue is
              available at{' '}
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
              Getting There and Getting Home
            </h3>
            <p>
              Mayfair is served by Green Park, Bond Street, and Oxford Circus
              tube stations, all within a few minutes walk of the main club
              cluster. The last Tube leaves around midnight, so plan your
              return journey. Black cabs are plentiful in Mayfair at closing
              time, but Uber surge pricing after 2am can be significant. If
              you are booking a table, many venues can arrange car service as
              part of the package — ask us when you book and we will sort it.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              The Table Question
            </h3>
            <p>
              In Mayfair more than anywhere else in London, a table changes
              the entire experience. Without one, you are subject to the
              door team&apos;s discretion, competing for bar service, and
              standing all night. With one, you have guaranteed entry, a
              private area, bottle service, and a dedicated host looking
              after your group. The minimum spends start from &#163;1,000
              at most venues, which for a group of five works out to
              &#163;200 each — genuinely competitive when you consider
              that buying rounds at a Mayfair bar can easily cost &#163;100
              per person over a full evening.
            </p>
            <p>
              If tonight is a special occasion — a birthday, a celebration,
              or simply a night where you want everything taken care of —
              a table in Mayfair is the move. Message us on WhatsApp and
              we will handle everything from reservation to arrival.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Mayfair Tonight — FAQ
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
                    All clubs open tonight in London &rarr;
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
              <h3 className="font-semibold text-white mb-4">Mayfair Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/areas/mayfair" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Complete Mayfair club guide &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/best-clubs-in-london" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Best clubs in London — ranked &rarr;
                  </Link>
                </li>
                <li>
                  <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    Mayfair Tonight — full Mayfair guide &rarr;
                  </a>
                </li>
                <li>
                  <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#BBB] hover:text-white transition-colors text-sm">
                    London Bottle Service — table pricing &rarr;
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
            Not sure which Mayfair club suits your group tonight?
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}
