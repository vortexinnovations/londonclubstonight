import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  getClubBySlug,
  getClubsByArea,
  musicLabel,
  tablesFromLabel,
  closesLabel,
  type Club,
} from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, {
  getArticleSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '@/components/SchemaMarkup';

const TITLE = 'Clubs in Soho London: Best Soho Nightclubs 2026';
const DESCRIPTION =
  'The clubs in Soho, London: Cirque Le Soir and The Box, which nights they open, the music, closing times and the clubs a short walk away. Updated October 2026.';
const UPDATED = 'October 2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'clubs in Soho',
    'clubs in Soho London',
    'Soho clubs',
    'Soho nightclubs',
    'best clubs in Soho',
    'Soho London nightlife',
    'Soho nightlife',
    'nightclubs in Soho London',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://londonclubstonight.com/areas/soho',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/areas/soho',
  },
};

const sohoClubs = getClubsByArea('Soho');

/** Open clubs a short walk from Soho, with where they sit relative to it. */
const NEARBY: { slug: string; where: string }[] = [
  { slug: 'tape-london', where: 'Hanover Square, Mayfair, just west of Regent Street' },
  { slug: 'cuckoo-club', where: 'Swallow Street, Mayfair, just off Regent Street near Piccadilly Circus' },
  { slug: 'selene-london', where: '4 Winsley Street, Fitzrovia, just north of Oxford Circus' },
  { slug: 'beat-london', where: '48 Margaret Street, Fitzrovia, north of Oxford Circus' },
];
const nearbyClubs = NEARBY.map((n) => ({ ...n, club: getClubBySlug(n.slug) })).filter(
  (n): n is { slug: string; where: string; club: Club } => !!n.club && n.club.status === 'open'
);

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const opensOn = (club: Club, day: string) => club.openingNights.toLowerCase().includes(day.toLowerCase());

/** Display name without the trailing "London": Cirque Le Soir, The Box, Selene. */
const label = (c: Club) => c.name.replace(/ London$/, '');

function names(list: Club[], joiner = 'and'): string {
  const n = list.map(label);
  if (n.length <= 1) return n.join('');
  return `${n.slice(0, -1).join(', ')} ${joiner} ${n[n.length - 1]}`;
}

const NUMBER_WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six'];
const sohoCount = NUMBER_WORDS[sohoClubs.length] ?? String(sohoClubs.length);
const sohoClosing = [...new Set(sohoClubs.map((c) => c.closingTime))];
const sohoSunday = sohoClubs.filter((c) => opensOn(c, 'Sunday'));
const nearbySunday = nearbyClubs.filter((n) => opensOn(n.club, 'Sunday')).map((n) => n.club);

const faqs = [
  {
    question: 'What clubs are in Soho, London?',
    answer: `As of ${UPDATED} there are ${sohoCount} nightclubs in Soho itself: ${sohoClubs
      .map((c) => `${label(c)} (${c.address})`)
      .join(' and ')}. Several more are a short walk away: ${nearbyClubs
      .map((n) => `${n.club.shortName} (${n.where})`)
      .join('; ')}.`,
  },
  {
    question: 'Which nights are Soho clubs open?',
    answer: `${sohoClubs
      .map((c) => `${label(c)} opens ${c.openingNights}`)
      .join('; ')}. Wednesday, Friday and Saturday are the nights when both are open. Neither runs a regular Monday, Tuesday or Sunday night.`,
  },
  {
    question: 'What music do clubs in Soho play?',
    answer: `Mostly hip-hop and RnB. ${sohoClubs
      .map((c) => `${label(c)}: ${musicLabel(c)}`)
      .join('. ')}. At both venues the performers are as much a part of the night as the music. For house and deep house close by, Selene, just north of Oxford Circus, is the better fit.`,
  },
  {
    question: 'How late do clubs in Soho stay open?',
    answer: `${
      sohoClosing.length === 1 && sohoClubs.length > 1
        ? `Both ${names(sohoClubs)} close at ${sohoClosing[0]}`
        : sohoClubs.map((c) => `${label(c)} closes at ${c.closingTime}`).join(' and ')
    }. Nothing in Soho runs to 6am; for an all-night session, Ministry of Sound in Elephant and Castle closes at 6am on Fridays and Saturdays.`,
  },
  {
    question: 'Are any clubs in Soho open on a Sunday?',
    answer:
      sohoSunday.length > 0
        ? `Yes: ${names(sohoSunday)} opens on Sundays.`
        : `Not regularly. Neither ${names(sohoClubs, 'nor')} opens on a Sunday. ${
            nearbySunday.length > 0
              ? `${names(nearbySunday)}, a short walk north of Oxford Circus, is the nearest club that does.`
              : ''
          }`,
  },
  {
    question: 'Do I need to book a table at a Soho club?',
    answer: `${sohoClubs
      .map((c) => `${label(c)}: ${c.guestlistNote} ${tablesFromLabel(c)}.`)
      .join(' ')} Message us on WhatsApp and we will tell you what is realistic for your group and your night.`,
  },
  {
    question: 'What is the dress code at clubs in Soho?',
    answer:
      'Smart, with no casual wear. Cirque Le Soir asks guests to stand out: heels and dresses for women, smart tailored looks for men. The Box rewards individuality, so dress to express yourself rather than to conform, but smart is still expected.',
  },
];

export default function SohoPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(TITLE, DESCRIPTION, '/areas/soho', '2025-01-01', '2026-10-08'),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Areas', url: '/areas' },
            { name: 'Soho', url: '/areas/soho' },
          ]),
        ]}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_248f34e1849a4e7688a7b3eb2ef234d2.jpg"
            alt="Soho nightlife district with neon lights and vibrant streets"
            fill
            className="object-cover animate-slow-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
          <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
            <div className="mb-5 animate-fade-up">
              <Link href="/areas" className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
                Areas
              </Link>
              <span className="text-frost-500 mx-2">/</span>
              <span className="text-frost-300 text-sm">Soho</span>
            </div>
            <span className="eyebrow animate-fade-up anim-delay-1">Area guide, updated {UPDATED}</span>
            <h1 className="animate-fade-up anim-delay-2 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Clubs in <span className="serif-accent text-gradient">Soho</span>, London
            </h1>
            <p className="animate-fade-up anim-delay-3 text-frost-100/85 text-lg md:text-xl leading-relaxed max-w-2xl">
              There are two nightclubs in Soho itself: Cirque Le Soir on Ganton Street,
              just off Carnaby Street, and The Box on Walker&apos;s Court. Both play mainly
              hip-hop and RnB, both close at 3:30am, and between them there is a Soho club
              open every night from Wednesday to Saturday. The Mayfair clubs start just across
              Regent Street, and Selene and BEAT London are a short walk north of Oxford Circus.
            </p>
          </div>
        </section>

        {/* The clubs */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">The lineup</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              The Clubs in Soho
            </h2>
            <p className="text-frost-300 max-w-2xl mb-12">
              Opening nights, music, closing times and table minimums as of {UPDATED}. Nights
              can change for holidays and private hire, so message us to confirm a specific date.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {sohoClubs.map((club) => (
                <div key={club.slug} className="space-y-4">
                  <ClubCard club={club} showArea={true} />
                  <dl className="glass-card p-6 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
                    <dt className="text-frost-500">Address</dt>
                    <dd className="text-frost-200">{club.address}</dd>
                    <dt className="text-frost-500">Open</dt>
                    <dd className="text-frost-200">{club.openingNights}</dd>
                    <dt className="text-frost-500">Music</dt>
                    <dd className="text-frost-200">{musicLabel(club)}</dd>
                    <dt className="text-frost-500">Hours</dt>
                    <dd className="text-frost-200">{closesLabel(club)}</dd>
                    <dt className="text-frost-500">Tables</dt>
                    <dd className="text-frost-200">{tablesFromLabel(club)}</dd>
                    <dt className="text-frost-500">Door</dt>
                    <dd className="text-frost-200">{club.guestlistNote}</dd>
                  </dl>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-frost-300 leading-relaxed max-w-3xl">
              <p>
                <strong className="text-white">Cirque Le Soir</strong>{" "}is the circus-themed club:
                fire-breathers, contortionists and stilt-walkers work the room between the tables
                while the DJs play hip-hop and RnB. It suits birthdays and mixed groups, and
                guestlist is realistic if you message early in the day.
              </p>
              <p>
                <strong className="text-white">The Box</strong>{" "}is the theatrical one: tiered seating
                around a stage, adults-only cabaret shows, and hip-hop, RnB and house between the
                performances. The door is one of the most selective in London, so a table is the
                reliable way in.
              </p>
            </div>
          </div>
        </section>

        {/* Night by night */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Which night</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Soho Clubs Night by Night
            </h2>
            <p className="text-frost-300 max-w-2xl mb-10">
              Which Soho club is open on each night of the week, and the nearest alternatives a
              short walk away.
            </p>
            <div className="grid gap-4">
              {DAYS.map((day) => {
                const inSoho = sohoClubs.filter((c) => opensOn(c, day));
                const near = nearbyClubs.filter((n) => opensOn(n.club, day)).map((n) => n.club);
                return (
                  <div key={day} className="glass-card p-5 sm:p-6 grid sm:grid-cols-[8rem,1fr] gap-2">
                    <h3 className="font-display font-bold text-white">{day}</h3>
                    <div className="text-frost-300 text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="text-frost-500">In Soho: </span>
                        {inSoho.length > 0
                          ? inSoho.map((c, i) => (
                              <span key={c.slug}>
                                {i > 0 && ', '}
                                <Link href={`/clubs/${c.slug}`} className="text-neon-300 hover:text-white transition-colors">
                                  {c.shortName}
                                </Link>
                              </span>
                            ))
                          : 'no regular club night'}
                      </p>
                      {near.length > 0 && (
                        <p>
                          <span className="text-frost-500">A short walk away: </span>
                          {near.map((c, i) => (
                            <span key={c.slug}>
                              {i > 0 && ', '}
                              <Link href={`/clubs/${c.slug}`} className="text-neon-300 hover:text-white transition-colors">
                                {c.shortName}
                              </Link>
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="section-glow border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="glass-card p-8 md:p-10 text-center">
              <span className="eyebrow justify-center">Free concierge</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4 text-center">
                Looking for a Soho night out?
              </h2>
              <p className="text-frost-300 max-w-2xl mx-auto text-center mb-8">
                Message us for a table or guestlist at Cirque Le Soir or The Box, or help picking
                the right club nearby for your group and your night.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby clubs */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Just outside Soho</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Clubs a Short Walk from Soho
            </h2>
            <p className="text-frost-300 max-w-2xl mb-10">
              Soho ends at Regent Street to the west and Oxford Street to the north. These clubs
              sit just beyond those lines, so they work for a night that starts in Soho.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {nearbyClubs.map(({ club, where }) => (
                <Link
                  key={club.slug}
                  href={`/clubs/${club.slug}`}
                  className="glass-card glass-card-hover group block p-6"
                >
                  <h3 className="font-display font-bold tracking-tight text-white mb-1 group-hover:text-neon-200 transition-colors">
                    {club.name}
                  </h3>
                  <p className="text-frost-400 text-sm mb-3">{where}</p>
                  <p className="text-frost-300 text-sm leading-relaxed">
                    {club.openingNights}. {musicLabel(club)}. {closesLabel(club)}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Soho & Mayfair */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Soho or Mayfair</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Soho Clubs or Mayfair Clubs?
            </h2>
            <div className="space-y-4 text-frost-300 leading-relaxed max-w-3xl">
              <p>
                Regent Street is the line between the two. Cirque Le Soir sits on Ganton Street, a
                block east of Regent Street in the W1F Soho postcode, so it is a Soho club even
                though it is often listed with the Mayfair venues. The Box, on Walker&apos;s Court,
                is in the middle of Soho.
              </p>
              <p>
                The difference is the night itself. Soho&apos;s two clubs are built around a show,
                with performers in the room. The Mayfair clubs, such as Tape, Maddox and Dear
                Darling, are about the table, the crowd and the DJ. Many nights start with dinner
                or drinks in Soho and finish across Regent Street in Mayfair.
              </p>
            </div>
            <div className="mt-8 flex">
              <Link
                href="/areas/mayfair"
                className="glass-card glass-card-hover inline-block px-8 py-5"
              >
                <span className="text-white font-semibold">Mayfair Clubs Guide</span>
                <span className="text-neon-300 text-sm ml-2">&rarr;</span>
                <p className="text-frost-500 text-sm mt-1">
                  The full guide to Mayfair&apos;s {getClubsByArea('Mayfair').length} clubs,
                  table bookings, and guestlist.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/[0.06] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Questions</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-10">
              Clubs in Soho: Frequently Asked Questions
            </h2>
            <div className="space-y-5 max-w-3xl">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-card p-6">
                  <h3 className="font-display font-bold tracking-tight text-lg text-white mb-3">{faq.question}</h3>
                  <p className="text-frost-300 text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section-glow py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <span className="eyebrow">Keep exploring</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
              More London Club Guides
            </h2>
            <p className="text-frost-300 max-w-2xl mb-12">
              Explore more of London&apos;s nightlife scene.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/areas/mayfair"
                className="glass-card glass-card-hover group block p-7"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1 group-hover:text-neon-200 transition-colors">Mayfair Clubs</h3>
                <p className="text-frost-500 text-sm">The luxury nightlife epicentre with {getClubsByArea('Mayfair').length} clubs.</p>
              </Link>
              <Link
                href="/areas/central-london"
                className="glass-card glass-card-hover group block p-7"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1 group-hover:text-neon-200 transition-colors">Central London Clubs</h3>
                <p className="text-frost-500 text-sm">The complete West End nightlife guide.</p>
              </Link>
              <Link
                href="/late-night-clubs-london-tonight"
                className="glass-card glass-card-hover group block p-7"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1 group-hover:text-neon-200 transition-colors">Late-Night Clubs</h3>
                <p className="text-frost-500 text-sm">Where to go when you want to stay out latest.</p>
              </Link>
              <Link
                href="/best-clubs-in-london"
                className="glass-card glass-card-hover group block p-7"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1 group-hover:text-neon-200 transition-colors">Best Clubs in London</h3>
                <p className="text-frost-500 text-sm">Our ranked guide to the top clubs across the city.</p>
              </Link>
              <Link
                href="/guides/how-to-get-into-london-clubs"
                className="glass-card glass-card-hover group block p-7"
              >
                <h3 className="font-display font-bold tracking-tight text-white mb-1 group-hover:text-neon-200 transition-colors">Entry Guide</h3>
                <p className="text-frost-500 text-sm">How to get into London&apos;s most exclusive clubs.</p>
              </Link>
            </div>

            {/* Final CTA */}
            <div className="mt-12 glass-card p-8 md:p-10 text-center">
              <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2">
                Planning a night around Soho?
              </h3>
              <p className="text-frost-300 text-sm mb-5 max-w-md mx-auto">
                Message us on WhatsApp and we&apos;ll help you plan the evening, from dinner
                and drinks to the club.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
