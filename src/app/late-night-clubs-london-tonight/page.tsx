import type { Metadata } from 'next';
import Link from 'next/link';
import { getOpenClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Late Night Clubs in London Tonight — Open Until 3am, 4am & Beyond',
  description:
    'Which London clubs stay open latest tonight? From 3am closers to 6am marathons at Ministry of Sound. Sorted by closing time with transport advice and insider tips.',
  keywords: [
    'late night clubs London',
    'clubs open late London tonight',
    'clubs open until 3am London',
    'clubs open until 4am London',
    'clubs open until 6am London',
    'late night London nightlife',
    'after hours clubs London',
    'London clubs closing time',
  ],
  openGraph: {
    title: 'Late Night Clubs in London Tonight — Open Until 3am, 4am & Beyond',
    description:
      'Which London clubs stay open latest tonight? Sorted by closing time with transport advice and insider tips.',
    url: 'https://londonclubstonight.com/late-night-clubs-london-tonight',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Late Night Clubs in London Tonight — Open Until 3am, 4am & Beyond',
    description:
      'Which London clubs stay open latest tonight? Sorted by closing time with transport advice.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/late-night-clubs-london-tonight',
  },
};

const faqs = [
  {
    question: 'What is the latest a club stays open in London?',
    answer:
      'Ministry of Sound regularly stays open until 6am, and sometimes later for special events. This makes it the latest-closing major club in London. Most Mayfair and Central London clubs close between 2:30am and 3:30am. If you want to dance past 3am, your options narrow significantly — Ministry of Sound is the standout choice.',
  },
  {
    question: 'Are there clubs open after 3am in London tonight?',
    answer:
      'Yes, but they are limited. Ministry of Sound in Elephant & Castle regularly runs until 6am on Fridays and Saturdays. Some clubs with 3:30am licences — like Tape London, TABU, Cirque Le Soir, and BEAT London — may keep the dancefloor moving close to that time. Beyond those, after-3am options become very specific to the night and event.',
  },
  {
    question: 'How do I get home from a late night club in London?',
    answer:
      'On Fridays and Saturdays, the Night Tube runs on key lines including the Victoria, Central, Jubilee, Northern, and Piccadilly lines. Night buses run across London seven days a week. Uber and Bolt are available but expect surge pricing between 2am and 4am. If you are at Ministry of Sound, the Northern line from Elephant & Castle runs through the night on weekends.',
  },
  {
    question: 'Is it worth arriving at a club after midnight?',
    answer:
      'Absolutely — in fact, most London clubs do not reach peak atmosphere until midnight or later. Arriving between 11:30pm and 12:30am is ideal for most venues. For clubs that stay open until 3am or later, arriving at 1am still gives you several good hours. The only risk with very late arrival is that some popular venues may restrict entry as capacity fills.',
  },
];

function parseClosingTime(closingTime: string): number {
  const match = closingTime.match(/(\d+):?(\d*)\s*(am|pm)?/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  if (hours <= 12 && hours >= 1) {
    // Clubs closing 1am-6am: add 24 to sort after midnight
    hours = hours + 24;
  }
  return hours * 60 + minutes;
}

export default function LateNightClubsLondonTonightPage() {
  const openClubs = getOpenClubs();
  const sortedByClosing = [...openClubs].sort(
    (a, b) => parseClosingTime(b.closingTime) - parseClosingTime(a.closingTime)
  );

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Late Night Clubs in London Tonight — Open Until 3am, 4am & Beyond',
            'Which London clubs stay open latest tonight? Sorted by closing time with transport advice and insider tips.',
            '/late-night-clubs-london-tonight',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-widest mb-6">
            Late Night London
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Late Night Clubs in London Tonight
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Sorted by closing time, latest first. Know exactly which clubs keep the lights on longest and what to expect when the hour gets late.
          </p>
          <WhatsAppCTA variant="tonight" heading="Looking for a Late Night Out?" />
        </div>
      </section>

      {/* Editorial */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How Late Can You Stay Out in London?
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              London is not Berlin. The city does not have a culture of all-night clubbing in the way that some European capitals do, and licensing laws mean that most clubs operate within defined closing times. That said, London offers a genuine range — from venues that wind down at 2:30am to clubs that are still running at sunrise.
            </p>
            <p>
              The landscape divides into three tiers. The earliest closers — venues like Dear Darling at 2:30am — are cocktail-bar-to-club concepts where the late-night element is secondary to the earlier evening experience. The mid-range — most Mayfair clubs closing between 3:00am and 3:30am — represents the core of London nightlife. And then there is Ministry of Sound, which operates in a different league entirely with its 6am closing time and occasional events that run even later.
            </p>
            <p>
              Your choice of late-night venue depends on what you prioritise. If you want the most prestigious VIP experience, the Mayfair clubs deliver that until 3:30am. If you want to dance until dawn, Ministry of Sound is the answer — and the only serious answer in London that operates at that scale and quality every weekend.
            </p>
            <p>
              The hours after 2am bring a change in atmosphere at every venue. The crowd thins slightly, the energy shifts from anticipation to commitment, and the people who remain are there because they genuinely want to be. Some of the best moments in a night out happen in those later hours — the DJ takes more risks, the dancefloor becomes more communal, and the social barriers that exist earlier in the evening dissolve.
            </p>
            <p>
              One practical consideration: closing times on club listings are the time the venue must stop serving and begin clearing. The music typically stops 15 to 30 minutes before the listed closing time. If a club says 3:30am, expect the lights to come on around 3:00am to 3:15am. Plan accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs sorted by closing time */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            London Clubs by Closing Time
          </h2>
          <p className="text-[#BBB] text-center mb-12 max-w-2xl mx-auto">
            Sorted from latest to earliest. Check opening nights against today before heading out.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {sortedByClosing.map((club) => (
              <div key={club.slug} className="bg-[#141414] border border-[#222] rounded-2xl p-6 md:p-7 text-center">
                <div className="text-xs text-[#C0C0C0] uppercase tracking-wider mb-3">
                  Closes at {club.closingTime}
                </div>
                <Link
                  href={`/clubs/${club.slug}`}
                  className="text-xl font-bold text-white hover:text-[#C0C0C0] transition-colors"
                >
                  {club.name}
                </Link>
                <p className="text-[#BBB] text-sm mt-3">{club.tonightSuitability}</p>
                <div className="flex items-center justify-center gap-3 mt-5 text-xs text-[#888]">
                  <span>{club.area}</span>
                  <span className="text-[#333]">&middot;</span>
                  <span>{club.openingNights}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After 2am */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What to Expect After 2am
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              The character of a night changes after 2am. In the Mayfair clubs, the final hour before closing is often the most intense. DJs play their biggest tracks, the dancefloor fills completely, and there is a collective energy that comes from everyone knowing the night is approaching its end. These are frequently the moments people remember most.
            </p>
            <p>
              At Ministry of Sound, 2am is when the night is just getting started for many people. The crowd turns over partially — early arrivals leave, dedicated dancers settle in for the long haul — and the atmosphere becomes more focused. The DJs typically save their best material for the 2am to 4am window, building to a crescendo that hits around 3am before the music evolves into something deeper for the final hours.
            </p>
            <p>
              Security and door policies tighten after 2am at most venues. Clubs that might admit walk-ins earlier in the night will close their doors to new arrivals as they approach capacity limits. If you are planning a late arrival, confirm with us that the venue will still be accepting entry at the time you want to arrive.
            </p>
            <p>
              Drink service typically continues until 30 minutes before closing. At venues with table service, your waiter will check in with final orders. At Ministry of Sound, the bars in different rooms may close at different times — the main room bar usually operates until closest to the advertised close.
            </p>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Getting Home: Late Night Transport
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Transport planning is essential for late nights. London has improved significantly in recent years, but your options depend on the night of the week and where you are coming from.
            </p>
            <p>
              <strong className="text-white">Night Tube (Fridays & Saturdays):</strong> The Victoria, Central, Jubilee, Northern, and Piccadilly lines run through the night on Friday and Saturday evenings. This covers most of central London effectively. Green Park, Bond Street, and Oxford Circus stations serve the Mayfair clubs. Elephant & Castle station sits directly next to Ministry of Sound.
            </p>
            <p>
              <strong className="text-white">Night Buses:</strong> Run seven nights a week across London. Most major routes have buses every 15 to 30 minutes through the night. This is the most reliable public transport option on weeknights when the Tube stops running.
            </p>
            <p>
              <strong className="text-white">Uber and Bolt:</strong> Available throughout the night but expect surge pricing between 2am and 4am. A journey that costs £15 at 11pm might cost £40 at 3am. Pre-booking a taxi is worth considering if your budget is fixed. The area around Mayfair and Soho is well-served, but finding your driver in the crowds can take time.
            </p>
            <p>
              <strong className="text-white">Black Cabs:</strong> Plentiful in Central London at closing time. They do not surge-price. Hailing a black cab on the street after a club can be faster and cheaper than waiting for an app-booked car on a busy night.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA variant="tonight" heading="Plan Your Late Night Out" />
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
              href="/clubs-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Clubs Open Tonight
            </Link>
            <Link
              href="/guides/clubs-open-late"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Clubs Open Late Guide
            </Link>
            <Link
              href="/last-minute-table-booking-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Last Minute Tables
            </Link>
            <Link
              href="/guestlist-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Guestlist Tonight
            </Link>
            <Link
              href="/best-clubs-for-last-minute-tables-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Last Minute Table Clubs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
