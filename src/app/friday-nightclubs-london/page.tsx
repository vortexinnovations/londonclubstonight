import type { Metadata } from 'next';
import Link from 'next/link';
import { getFridayClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Friday Night Clubs London — Best Clubs Open This Friday',
  description:
    'The best London nightclubs open this Friday. Which venues peak on Fridays, booking tips, and how to guarantee your spot this week.',
  keywords: [
    'Friday nightclubs London',
    'Friday night clubs London',
    'clubs open Friday London',
    'best Friday night London',
    'London clubs Friday',
    'Friday night out London',
    'where to go Friday night London',
    'Friday clubbing London',
  ],
  openGraph: {
    title: 'Friday Nightclubs in London — Where to Go This Friday',
    description:
      'The best London nightclubs open on Friday nights. Which clubs have their strongest nights on Fridays and insider booking tips.',
    url: 'https://londonclubstonight.com/friday-nightclubs-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friday Nightclubs in London — Where to Go This Friday',
    description:
      'The best London nightclubs open on Friday nights. Insider advice for making the most of your Friday.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/friday-nightclubs-london',
  },
};

const faqs = [
  {
    question: 'What are the best clubs open on Friday night in London?',
    answer:
      'Friday nights feature most of London\'s top clubs including Tape London, Cirque Le Soir, Ministry of Sound, TABU, Cuckoo Club, Maddox, BEAT London, and more. Cirque Le Soir and Ministry of Sound are particularly strong on Fridays — Cirque delivers its full entertainment production, while Ministry hosts some of its best DJ lineups of the week.',
  },
  {
    question: 'Is Friday or Saturday better for clubbing in London?',
    answer:
      'Both are excellent but different. Fridays have a celebratory, end-of-week energy and slightly better table availability. Saturdays have the largest crowds and strongest lineups but book up faster and have stricter doors. If you prefer more spontaneity and a slightly more relaxed atmosphere, Friday is often the better choice. If you want the peak experience and are willing to plan ahead, Saturday delivers.',
  },
  {
    question: 'Do I need to book for Friday night clubs in London?',
    answer:
      'It depends on the venue. For Mayfair clubs like Tape, a table booking is essential. For venues like TABU, Cuckoo Club, or BEAT, guestlist is a viable option on Fridays — the door is typically a notch less selective than Saturday. Ministry of Sound operates on tickets which should be bought in advance for headline events.',
  },
  {
    question: 'What time should I arrive at a London club on Friday?',
    answer:
      'Most London clubs open between 10pm and 11pm on Fridays. The sweet spot for arrival is 11:30pm to midnight. Earlier than that and the room may feel empty. Later than 1am and some venues may restrict entry as capacity fills. If you are on guestlist, arriving by midnight is advisable to guarantee your spot.',
  },
];

export default function FridayNightclubsLondonPage() {
  const fridayClubs = getFridayClubs();

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Friday Nightclubs in London — Where to Go This Friday',
            'The best London nightclubs open on Friday nights with booking tips, pricing, and insider advice.',
            '/friday-nightclubs-london',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Friday Night Clubs', url: '/friday-nightclubs-london' },
          ]),
          getItemListSchema(
            'Friday Night Clubs in London',
            fridayClubs.map((club) => ({ name: club.name, url: '/clubs/' + club.slug }))
          ),
        ]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-widest mb-6">
            Friday Night London
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Friday Nightclubs in London
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            The working week is over. London wakes up. Here is every club worth your Friday night, with honest advice on which venues deliver their best night at the end of the week.
          </p>
          <WhatsAppCTA variant="tonight" heading="Going Out This Friday?" />
        </div>
      </section>

      {/* The Friday Feeling */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Friday Feeling: Office to Dancefloor
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Friday night in London starts before anyone sets foot in a club. It starts at 5pm in the pubs around Bank and Canary Wharf, at 6pm in the wine bars along Heddon Street, at 8pm over dinner in Soho when someone at the table says the words that change the evening: &quot;Shall we go somewhere after this?&quot;
            </p>
            <p>
              That trajectory — the unplanned escalation from after-work drinks to a full night out — defines Friday in a way that no other night of the week can claim. Saturday is premeditated. Thursday is a conscious midweek choice. But Friday catches people in transition. They arrive at clubs still carrying the adrenaline of closing a deal, finishing a project, surviving a week. The result is a crowd that is genuinely elated, slightly unpredictable, and hungry for release.
            </p>
            <p>
              This shapes the atmosphere in tangible ways. The dancefloor on a Friday fills faster than you would expect — people do not ease in, they commit. Conversations are louder and more animated. Groups that formed over dinner arrive together with shared energy rather than the fragmented arrivals of a Saturday where everyone is coming from different parts of the city. There is a cohesion to a Friday crowd that clubs thrive on.
            </p>
            <p>
              The after-work pipeline also means Friday crowds skew slightly older and more professional than Saturday. You will find more City workers, more media types, more people who dress well for work and can transition straight to a club without going home to change. This is not a hard rule, but it gives Friday a slightly more polished, grown-up character at many venues.
            </p>
          </div>
        </div>
      </section>

      {/* Friday DJ Programming and Events */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Friday Night Programming: Where the Music Stands Out
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Clubs approach Friday differently from Saturday in their programming decisions. Saturday is the guaranteed seller, so venues play it safe with proven formats and crowd-pleasing resident DJs. Friday is where creative directors take risks. Guest DJs who bring an unfamiliar sound, genre-crossing nights that blend hip-hop with afrobeats or house with garage, themed events that would be too niche for Saturday — all of these land on Fridays.
            </p>
            <p>
              <strong className="text-white">Cirque Le Soir</strong> runs its full circus production on Fridays, and the slightly more intimate crowd means the performers work closer to the audience. Fire acts happen at arm&apos;s length. The acrobats interact directly with tables. The show becomes immersive rather than observed, and that shift in proximity changes the entire experience.
            </p>
            <p>
              <strong className="text-white">Ministry of Sound</strong> uses Fridays for its most adventurous bookings. While Saturday draws the headline names, Friday&apos;s lineup often features rising DJs, label showcases, and genre-specific events that attract a crowd who came specifically for the music. The main room on a well-booked Friday has a purity of purpose that Saturday&apos;s broader crowd dilutes.
            </p>
            <p>
              <strong className="text-white">BEAT London</strong> was built for nights like Friday. The bass-heavy sound system and compact room reach critical energy faster with a Friday crowd that arrives already warmed up from the evening. The venue&apos;s music-first philosophy pairs naturally with an audience that chose to be there rather than defaulting to the obvious Saturday option.
            </p>
            <p>
              <strong className="text-white">TABU</strong> treats Friday as the night for its core hip-hop community. The intimate underground setting fills with regulars who consider Friday their home night — people who know the DJs, know the bartenders, and set the tone for anyone joining them. Friday at TABU feels like being let into a secret that Saturday visitors do not get to see.
            </p>
          </div>
        </div>
      </section>

      {/* Friday Clubs */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            All Friday Night Clubs
          </h2>
          <p className="text-[#BBB] text-center mb-12 max-w-2xl mx-auto">
            {fridayClubs.length} venues open their doors on Friday nights. Message us for guestlist, tables, or advice.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {fridayClubs.map((club) => (
              <TonightClubCard key={club.slug} club={club} showGuestlistStatus showTableCTA />
            ))}
          </div>
        </div>
      </section>

      {/* Friday Booking Tips */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Friday Night Booking Tips
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-white">Same-day tables are realistic.</strong> Unlike Saturdays, where most venues fill their table sheet by Thursday, Friday tables remain available longer. Messaging us by early afternoon gives you an excellent chance of securing a table at your first-choice venue. Even evening enquiries have a reasonable success rate. For a full guide to Friday table pricing and bottle packages, see{' '}
              <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a>.
            </p>
            <p>
              <strong className="text-white">Guestlist works well on Fridays.</strong> Venues like TABU, Cuckoo Club, Dear Darling, and Cirque Le Soir are all accessible via guestlist on Fridays. Mixed groups fare best, but the overall standard is slightly more inclusive than Saturday. Get on our guestlist by messaging WhatsApp with your group details.
            </p>
            <p>
              <strong className="text-white">After-work transitions are common.</strong> Many successful Friday nights begin as after-work drinks that evolve organically. If your group is coming from drinks in Soho or dinner in Mayfair, let us know your timing and we can advise on which clubs will be at the right level of energy when you arrive. For Friday events across the Mayfair clubs specifically, check{' '}
              <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair Tonight</a>.
            </p>
            <p>
              <strong className="text-white">Dress code still applies.</strong> The Friday dress code is the same as Saturday at every venue. Do not assume that a more relaxed atmosphere means a relaxed door. If you are coming straight from work, a smart office look is fine for most venues — you may need to lose the backpack and adjust your outfit, but the smart-work-to-club transition works on Fridays.
            </p>
            <p>
              <strong className="text-white">Arrival timing is flexible.</strong> Friday crowds build slightly later than Saturday at many venues. Arriving at midnight is perfectly timed for most clubs. If you arrive earlier, expect a room that is still warming up — which can be pleasant if you want to settle in before the peak.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA variant="tonight" heading="Book Your Friday Night" />
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
              href="/blog/best-friday-night-clubs-in-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Friday Night Clubs Blog
            </Link>
            <Link
              href="/best-clubs-this-weekend-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Clubs This Weekend
            </Link>
            <Link
              href="/saturday-nightclubs-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Saturday Nightclubs
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
          </div>
        </div>
      </section>
    </>
  );
}
