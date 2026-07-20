import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  getClubsOpenTonight,
  getGuestlistFriendlyClubs,
  getCurrentDayName,
} from '@/lib/clubs';
import TonightClubCard from '@/components/TonightClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Get on a Guestlist Tonight London — Free Same-Night Entry',
  description:
    'Free guestlist at London\'s best clubs tonight. Which venues still have spots, what ratio you need, and how to get your name on the door in minutes.',
  keywords: [
    'guestlist tonight London',
    'London club guestlist tonight',
    'get on guestlist tonight London',
    'same night guestlist London',
    'free guestlist London clubs',
    'London nightclub guestlist',
    'guestlist entry London',
    'club guestlist tonight',
  ],
  openGraph: {
    title: 'Get on a Guestlist Tonight in London — Same-Night Guestlist Access',
    description:
      'Which London clubs accept same-night guestlist requests? Live availability, ratio requirements, and how to get in tonight.',
    url: 'https://londonclubstonight.com/guestlist-tonight-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guestlist Tonight in London',
    description:
      'Same-night guestlist access at London clubs. Live availability and insider tips.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/guestlist-tonight-london',
  },
};

const faqs = [
  {
    question: 'Can I get on a guestlist tonight?',
    answer:
      'Yes, same-night guestlist is possible at many London clubs, particularly on Thursdays and Fridays. Venues like Cirque Le Soir, TABU, Cuckoo Club, The London Reign, and Maddox regularly accept same-day guestlist requests. The key factors are timing (submit your request as early as possible, ideally before 6pm), group composition (mixed groups strongly preferred), and the specific night (Saturdays are the hardest for last-minute guestlist). Message us on WhatsApp and we can submit your request directly.',
  },
  {
    question: 'Is guestlist free?',
    answer:
      'Guestlist at most London clubs means free entry for women and either free or reduced entry for men in mixed groups. All-male groups on guestlist often still pay full entry, if they are admitted at all. Guestlist does not cover drinks, table reservations, or any other costs — it is purely an entry mechanism. Some clubs offer guestlist as complimentary entry for everyone in the group, while others charge men a cover fee of £10 to £20. The specific terms vary by venue and by night.',
  },
  {
    question: 'What group ratio do I need?',
    answer:
      'The ideal guestlist ratio for London clubs is more women than men — a group of three women and two men is the golden ratio for most venues. Equal numbers (three and three) is generally fine at venues like TABU, Cuckoo Club, and The London Reign. All-female groups have the highest acceptance rate and the fastest entry at every venue. All-male groups face significant difficulty at Mayfair clubs regardless of guestlist status — for groups of men, a table booking is strongly recommended. These ratio rules are not written down anywhere official but they are consistently enforced.',
  },
  {
    question: 'How do I get on a guestlist last minute?',
    answer:
      'The fastest route to a same-night guestlist spot is through a promoter with direct venue relationships — that is exactly what we do. Message us on WhatsApp with your group details (number of women, number of men, preferred venue, and planned arrival time) and we will submit your request immediately. We can typically confirm within 30 minutes. Going directly through a club website or social media on the same night rarely works as those channels are not monitored in real time.',
  },
];

export default function GuestlistTonightLondonPage() {
  const dayName = getCurrentDayName();
  const tonightClubs = getClubsOpenTonight();
  const allGuestlistClubs = getGuestlistFriendlyClubs();
  const tonightGuestlistClubs = allGuestlistClubs.filter((c) =>
    tonightClubs.some((tc) => tc.slug === c.slug)
  );
  const nonGuestlistTonight = tonightClubs.filter(
    (c) => !c.guestlistRealistic
  );
  const now = new Date().toISOString();

  const articleSchema = getArticleSchema(
    'Get on a Guestlist Tonight in London — Same-Night Guestlist Access',
    'How to get on a London club guestlist tonight. Live availability and insider tips for same-night entry.',
    '/guestlist-tonight-london',
    '2025-01-15'
  );
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guestlist Tonight', url: '/guestlist-tonight-london' },
  ]);
  const itemListSchema = getItemListSchema(
    'Guestlist Available Tonight in London',
    tonightGuestlistClubs.map((club) => ({ name: club.name, url: '/clubs/' + club.slug }))
  );

  return (
    <main className="min-h-screen text-white">
      <SchemaMarkup schema={[articleSchema, faqSchema, breadcrumbSchema, itemListSchema]} />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/gallery/images/fe4414_250ad5247e7546dcbe9f0c7b4e2fcbaf.jpg"
          alt="London club guestlist tonight with queue and nightlife scene"
          fill
          className="object-cover animate-slow-zoom"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
        <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
          <span className="chip chip-accent animate-fade-up mb-6">
            <span className="live-dot scale-75" aria-hidden />
            Same-Night Access — {dayName}
          </span>
          <h1 className="animate-fade-up anim-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Guestlist Tonight in <span className="serif-accent text-gradient">London</span>
          </h1>
          <p className="animate-fade-up anim-delay-2 text-lg md:text-xl text-frost-100/85 max-w-2xl mx-auto leading-relaxed mb-4">
            Which clubs are still accepting guestlist requests for tonight,
            what the ratio requirements actually are, and how to maximise
            your chances of getting through the door without a table booking.
          </p>
          <time
            dateTime={now}
            className="animate-fade-up anim-delay-3 inline-block text-xs text-frost-300 mb-10"
          >
            Updated {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' })}
          </time>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 pb-20 md:pb-28">
        <WhatsAppCTA variant="tonight" heading="Get on a Guestlist Tonight" />
      </section>

      {/* Guestlist Available Tonight */}
      <section className="section-glow py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="max-w-xl mb-12 md:mb-16">
            <span className="eyebrow">Tonight</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Guestlist Open <span className="serif-accent text-gradient">Tonight</span>
            </h2>
            <p className="text-frost-300 text-base">
              {tonightGuestlistClubs.length > 0
                ? `${tonightGuestlistClubs.length} clubs are accepting guestlist requests for tonight. These venues have confirmed they are open to same-night guestlist submissions.`
                : `No guestlist-friendly clubs are open tonight. Most London clubs run their guestlist-friendly nights on Thursdays, Fridays, and Saturdays.`}
            </p>
          </div>
          {tonightGuestlistClubs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {tonightGuestlistClubs.map((club) => (
                <TonightClubCard
                  key={club.slug}
                  club={club}
                  showGuestlistStatus
                />
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 md:p-10 text-center">
              <p className="text-frost-300 mb-4">
                No clubs with guestlist availability are open tonight. Check
                back on Thursday, Friday, or Saturday for the widest selection.
              </p>
              <Link href="/best-clubs-this-weekend-london" className="text-sm text-neon-300 hover:text-white transition-colors">
                Plan for this weekend instead &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Table Recommended Tonight */}
      {nonGuestlistTonight.length > 0 && (
        <section className="py-20 md:py-28 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="max-w-xl mb-12 md:mb-16">
              <span className="eyebrow">Guaranteed entry</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
                Table Recommended <span className="serif-accent text-gradient">Tonight</span>
              </h2>
              <p className="text-frost-300 text-base">
                These clubs are open tonight but guestlist entry is unreliable
                or unavailable. A table booking is the recommended route for
                guaranteed entry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {nonGuestlistTonight.map((club) => (
                <TonightClubCard
                  key={club.slug}
                  club={club}
                  showGuestlistStatus
                  showTableCTA
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/last-minute-table-booking-london"
                className="text-sm text-neon-300 hover:text-white transition-colors"
              >
                Full guide to last-minute tables &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <span className="eyebrow">The guide</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-8">
            How Same-Night Guestlist Actually <span className="serif-accent text-gradient">Works</span>
          </h2>
          <div className="space-y-5 text-frost-300 text-sm leading-relaxed">
            <p>
              Guestlist in London is widely misunderstood. Most people assume
              that getting on a guestlist means they are guaranteed entry and
              will walk straight past the queue. The reality is more nuanced.
              A guestlist spot means your name is on a list at the door, which
              tells the security team that a promoter has vouched for your
              group. It gets you to the front of the line faster and typically
              grants free or discounted entry. But it does not override the
              door team&apos;s assessment of your group, your outfit, or the
              venue&apos;s current capacity.
            </p>
            <p>
              On a quiet Thursday at a mid-tier venue, a guestlist spot is
              practically a guarantee of entry. On a packed Saturday at a
              top Mayfair club, it is one factor among many. The clubs that
              truly rely on guestlist as a primary entry route — Cirque Le
              Soir, TABU, Cuckoo Club, and Maddox — honour it consistently
              because they understand that their promoters are bringing
              the right crowd. Clubs that treat guestlist as an afterthought
              tend to be the ones where you arrive with a confirmed spot
              and still wait thirty minutes.
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight text-white pt-4">
              The Ratio Rules Nobody Publishes
            </h3>
            <p>
              Every London club has ratio preferences for guestlist entry,
              and none of them advertise them honestly. Here is what actually
              works based on years of submitting guestlist requests: the ideal
              group is three to five women with one to two men. A group of
              four women and two men will get into every club in London on
              guestlist, every night, with minimal hassle. An equal-ratio
              group — say, three women and three men — works at most venues
              but may face a wait on Saturdays at the most exclusive spots.
            </p>
            <p>
              Groups with more men than women are where things get difficult.
              A group of two women and four men will struggle at most Mayfair
              venues on guestlist, regardless of how well-dressed or
              well-connected they are. And an all-male group on guestlist
              faces near-universal rejection at premium clubs. We are not
              saying this to discourage anyone — we are saying it because
              knowing the rules in advance lets you plan accordingly. If
              your group is male-heavy, a table booking eliminates the
              ratio problem entirely.
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight text-white pt-4">
              Guestlist vs Tables — When Each Makes Sense
            </h3>
            <p>
              Guestlist is the right choice when you have a well-composed
              mixed group, you are flexible on venue, and you do not mind
              the possibility of a queue. It costs nothing (or very little),
              and on the right night at the right venue, the experience is
              essentially identical to walking in off the street except you
              skip the general queue. For groups of friends who want a good
              night without committing to a minimum spend, guestlist is the
              smart play.
            </p>
            <p>
              A table booking is the right choice when guaranteed entry
              matters — birthdays, special occasions, male-heavy groups,
              or any night where being turned away would ruin your plans.
              The minimum spend starts from &#163;1,000 at most venues,
              which covers your bottles and drinks for the evening. For a
              group of five, &#163;200 per person gets you guaranteed entry,
              a private area, bottle service, and the peace of mind that your
              night is sorted. For pricing details visit{' '}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-300 hover:text-white transition-colors"
              >
                London Bottle Service
              </a>.
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight text-white pt-4">
              How to Submit a Same-Night Guestlist Request
            </h3>
            <p>
              The fastest and most reliable way to get on a guestlist tonight
              is through a promoter — and that is our entire business. Message
              us on WhatsApp with four pieces of information: how many women
              in your group, how many men, which venue you prefer (or ask us
              to recommend one), and what time you plan to arrive. We submit
              your request directly to the venue&apos;s reservations team
              and typically have confirmation within thirty minutes.
            </p>
            <p>
              Going through a club&apos;s website or Instagram DM for
              same-night guestlist is unreliable because those channels are
              not always monitored in real time. A dedicated promoter with
              direct venue relationships is the difference between a
              confirmed spot and a hopeful message that goes unanswered until
              tomorrow morning. For Mayfair-specific guestlist and events,{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-300 hover:text-white transition-colors"
              >
                Mayfair Tonight
              </a>{' '}
              has detailed venue-by-venue breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <span className="eyebrow">Questions</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-12">
            Guestlist <span className="serif-accent text-gradient">FAQ</span>
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card p-6 md:p-8">
                <h3 className="font-display text-lg font-bold tracking-tight text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-frost-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <span className="eyebrow">Keep going</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-10">
            Explore <span className="serif-accent text-gradient">More</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl">
            <div>
              <h3 className="font-display font-semibold tracking-tight text-white mb-4">Tonight</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/clubs-tonight-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    All clubs open tonight &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/mayfair-clubs-tonight" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Mayfair clubs tonight &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/last-minute-table-booking-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Last-minute table booking &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/best-clubs-this-weekend-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Best clubs this weekend &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold tracking-tight text-white mb-4">Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/best-clubs-in-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Best clubs in London — ranked &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/guides/how-to-get-into-london-clubs" className="text-frost-300 hover:text-white transition-colors text-sm">
                    How to get into London clubs &rarr;
                  </Link>
                </li>
                <li>
                  <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-frost-300 hover:text-white transition-colors text-sm">
                    London Bottle Service — table pricing &rarr;
                  </a>
                </li>
                <li>
                  <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-frost-300 hover:text-white transition-colors text-sm">
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
          <p className="text-frost-500 text-sm mb-5">
            Need a guestlist spot sorted in minutes? We are one message away.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}
