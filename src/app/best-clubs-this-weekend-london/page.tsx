import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getFridayClubs, getSaturdayClubs } from '@/lib/clubs';
import TonightClubCard from '@/components/TonightClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `Best Clubs This Weekend London — Friday & Saturday Picks [${new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}]`,
  description:
    'Planning this weekend? The best London clubs open Friday and Saturday with table availability, guestlist options, and honest insider picks.',
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

  const allWeekendClubs = [...fridayClubs, ...saturdayClubs.filter((sc) => !fridayClubs.some((fc) => fc.slug === sc.slug))];
  const articleSchema = getArticleSchema(
    'Best Clubs This Weekend in London — Friday & Saturday Guide',
    'The best London clubs this weekend with Friday and Saturday night picks, table availability, and insider tips.',
    '/best-clubs-this-weekend-london',
    '2025-01-15'
  );
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Best Clubs This Weekend', url: '/best-clubs-this-weekend-london' },
  ]);
  const itemListSchema = getItemListSchema(
    'Best Clubs This Weekend in London',
    allWeekendClubs.map((club) => ({ name: club.name, url: '/clubs/' + club.slug }))
  );

  return (
    <main className="min-h-screen text-white">
      <SchemaMarkup schema={[articleSchema, faqSchema, breadcrumbSchema, itemListSchema]} />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/gallery/images/fe4414_24f7263a295a420d9b4105549832f0dc.jpg"
          alt="Best London clubs this weekend with Friday and Saturday nightlife"
          fill
          className="object-cover animate-slow-zoom"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
        <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
          <p className="chip chip-accent uppercase tracking-[0.18em] animate-fade-up mb-6">
            <span className="live-dot scale-75" aria-hidden />
            Friday &amp; Saturday Night Guide
          </p>
          <h1 className="animate-fade-up anim-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Best Clubs This Weekend in{' '}
            <span className="serif-accent text-gradient">London</span>
          </h1>
          <p className="animate-fade-up anim-delay-2 text-lg md:text-xl text-frost-100/85 max-w-2xl mx-auto leading-relaxed mb-4">
            Your complete guide to this weekend&apos;s best clubs. Which venues are
            running their strongest nights, where the tables are still available,
            and what you need to know before you arrive.
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
        <WhatsAppCTA variant="tonight" heading="Need a Table This Weekend?" />
      </section>

      {/* Friday Night */}
      <section className="section-glow py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="mb-12 md:mb-16 max-w-xl">
            <span className="eyebrow">The warm-up</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Friday <span className="serif-accent text-gradient">Night</span>
            </h2>
            <p className="text-frost-300 text-base">
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
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="mb-12 md:mb-16 max-w-xl">
            <span className="eyebrow">The main event</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Saturday <span className="serif-accent text-gradient">Night</span>
            </h2>
            <p className="text-frost-300 text-base">
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

      {/* Friday vs Saturday — Decision Guide */}
      <section className="bg-night-900/60 border-y border-white/[0.05] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <span className="eyebrow">Decision guide</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-8">
            Friday vs Saturday — Which Night Suits <span className="serif-accent text-gradient">You?</span>
          </h2>
          <div className="space-y-5 text-frost-300 text-sm leading-relaxed">
            <p>
              If you can only go out one night this weekend, the choice between
              Friday and Saturday is not about quality — both deliver
              world-class clubbing. It is about what kind of night you want.
              The two nights attract different crowds, carry different energy,
              and reward different approaches. This guide exists to help you
              pick the right one.
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight text-white pt-4">
              The Character of Each Night
            </h3>
            <p>
              Friday is the exhale. People arrive carrying the momentum of
              the working week — after-work drinks that spiralled into dinner
              plans, dinner plans that spiralled into a club booking. The
              crowd is spontaneous, slightly looser, and riding the high of
              having two free days ahead. Saturday is the set piece. Groups
              have coordinated outfits, booked restaurants, arranged pre-drinks.
              The crowd is more deliberate, more glamorous, and more invested
              in the night going exactly as planned.
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight text-white pt-4">
              Side-by-Side: Friday vs Saturday
            </h3>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="glass-card p-5">
                <h4 className="font-display text-white font-bold tracking-tight text-sm mb-3">Friday</h4>
                <ul className="space-y-2 text-xs text-frost-300">
                  <li>End-of-week release energy</li>
                  <li>Same-day tables often available</li>
                  <li>Guestlist more accessible</li>
                  <li>Door policies one notch softer</li>
                  <li>Lower minimums at some venues</li>
                  <li>More experimental DJ bookings</li>
                  <li>After-work crowd adds spontaneity</li>
                </ul>
              </div>
              <div className="glass-card p-5">
                <h4 className="font-display text-white font-bold tracking-tight text-sm mb-3">Saturday</h4>
                <ul className="space-y-2 text-xs text-frost-300">
                  <li>Peak atmosphere and fullest rooms</li>
                  <li>Tables book out by midweek</li>
                  <li>Guestlist competitive and limited</li>
                  <li>Strictest door enforcement</li>
                  <li>Higher minimums, premium pricing</li>
                  <li>Headline DJs and strongest lineups</li>
                  <li>International and celebratory crowd</li>
                </ul>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-white pt-4">
              Budget Comparison
            </h3>
            <p>
              Friday is the more wallet-friendly night across the board. Table
              minimums at several venues sit lower on Fridays — where a
              Saturday table might start at £1,500, the same position on
              Friday could be £1,000. Guestlist entry is free or low-cost at
              more venues on Fridays. Drink prices are identical, but
              Saturday&apos;s higher demand for premium bottles means your
              overall spend tends to climb. If cost matters to your group,
              Friday stretches your budget further without sacrificing the
              quality of venue. For full table pricing across both nights,
              see{' '}
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
              How to Choose Your Night
            </h3>
            <p>
              <strong className="text-white">Pick Friday if:</strong> you
              want more flexibility, your group is deciding last minute, you
              prefer a looser atmosphere, or your budget is a factor. Friday
              rewards spontaneity and gives you more room to manoeuvre.
            </p>
            <p>
              <strong className="text-white">Pick Saturday if:</strong> you
              are celebrating a birthday or special occasion, you want the
              absolute peak London club experience, you have already planned
              your group and outfit, and you are happy to book in advance.
              Saturday is the night London puts on its best show.
            </p>
            <p>
              <strong className="text-white">Do both if:</strong> your
              weekend allows it. A Friday warm-up at a music-led venue like
              BEAT or Cirque Le Soir followed by a Saturday main event at
              Tape or TABU is the ideal London weekend. Different venues,
              different energy, same city at its best.
            </p>
            <p>
              For Mayfair-specific weekend planning across both nights,
              visit{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-300 hover:text-white transition-colors"
              >
                Mayfair Tonight
              </a>. Message us on WhatsApp and we will tell you exactly
              what is available this weekend and help you pick the right
              night for your group.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-glow py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <span className="eyebrow">Good to know</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-12">
            Weekend Clubbing <span className="serif-accent text-gradient">FAQ</span>
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
          <span className="eyebrow">Keep exploring</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-4 mb-10">
            Explore <span className="serif-accent text-gradient">More</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl">
            <div>
              <h3 className="font-display font-bold tracking-tight text-white mb-4">Tonight &amp; Urgent</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/clubs-tonight-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Clubs open tonight in London &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/mayfair-clubs-tonight" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Mayfair clubs tonight &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/guestlist-tonight-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Get on a guestlist tonight &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/last-minute-table-booking-london" className="text-frost-300 hover:text-white transition-colors text-sm">
                    Last-minute table booking &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold tracking-tight text-white mb-4">Guides</h3>
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
          <p className="text-frost-500 text-sm mb-5">
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
