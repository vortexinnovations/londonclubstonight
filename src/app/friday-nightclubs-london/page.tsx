import type { Metadata } from 'next';
import Link from 'next/link';
import { getFridayClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Friday Nightclubs in London — Where to Go This Friday',
  description:
    'The best London nightclubs open on Friday nights. Which clubs have their strongest nights on Fridays, booking tips, pricing, and insider advice for making the most of your Friday.',
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

      {/* What Makes Fridays Different */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Makes Friday Nights Different
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Friday night in London carries an energy that Saturday does not replicate. It is the release valve — five days of accumulated work pressure, social plans that have been building all week, and the knowledge that you have the entire weekend ahead of you. The atmosphere in London clubs on Friday reflects this collective exhale.
            </p>
            <p>
              The crowd on a Friday is different in subtle but important ways. People arrive with the momentum of after-work drinks, dinner plans that evolved into something bigger, and a spontaneity that Saturday&apos;s more planned outings lack. Friday clubbers are celebrating the end of something, while Saturday clubbers are executing something they arranged days ago.
            </p>
            <p>
              From a practical standpoint, Fridays offer genuine advantages. Table availability is better at most venues — not dramatically, but enough that a same-day booking request has a higher success rate than on Saturday. Door policies, while still enforced, tend to be a fraction more forgiving. Guestlist spots are slightly easier to secure. The overall pressure is one notch lower, which often makes for a more enjoyable experience.
            </p>
            <p>
              The music programming on Fridays often differs from Saturdays too. Some clubs use Friday as the night for their more experimental bookings — guest DJs who bring a different sound, themed nights that deviate from the regular format, or extended sets that take the music in unexpected directions. If you value musical variety, Friday can be the more interesting night.
            </p>
          </div>
        </div>
      </section>

      {/* Which Clubs Have Their Best Night on Friday */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Which Clubs Have Their Best Night on Friday
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Not every club peaks on Saturday. Several London venues are genuinely at their best on Friday, and knowing which ones can shape your decision.
            </p>
            <p>
              <strong className="text-white">Cirque Le Soir</strong> is arguably a stronger Friday than Saturday proposition. The production — fire-breathers, contortionists, the full circus experience — runs on both nights, but Friday&apos;s slightly smaller crowd means more intimate performer interactions and a room where the energy concentrates rather than disperses. The entertainment feels more personal on Fridays.
            </p>
            <p>
              <strong className="text-white">Ministry of Sound</strong> frequently books its most interesting DJ lineups for Fridays. While Saturday draws the largest crowd, Friday attracts a more dedicated, music-focused audience. The main room on a Friday night with the right headliner is a purist experience — the crowd is there specifically for the music, and the atmosphere reflects that intentionality.
            </p>
            <p>
              <strong className="text-white">BEAT London</strong> thrives on Friday energy. The music-first venue attracts a crowd that has been anticipating the weekend, and the powerful sound system rewards an audience that arrives ready to dance. The smaller scale means Friday nights build atmosphere quickly.
            </p>
            <p>
              <strong className="text-white">TABU</strong> on Fridays offers an excellent hip-hop experience in an intimate setting. The Japanese underground atmosphere pairs well with Friday&apos;s looser energy, and the venue&apos;s regulars tend to treat Friday as their primary night out.
            </p>
            <p>
              The Mayfair staples — Tape, Maddox, Cuckoo Club, Funky Buddha — deliver strong Friday nights without question, though many would argue their peak is Saturday. The choice between the two nights at these venues comes down to personal preference: slightly easier access and a more relaxed start on Friday, versus peak glamour and the biggest crowd on Saturday.
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
              <strong className="text-white">Same-day tables are realistic.</strong> Unlike Saturdays, where most venues fill their table sheet by Thursday, Friday tables remain available longer. Messaging us by early afternoon gives you an excellent chance of securing a table at your first-choice venue. Even evening enquiries have a reasonable success rate.
            </p>
            <p>
              <strong className="text-white">Guestlist works well on Fridays.</strong> Venues like TABU, Cuckoo Club, Dear Darling, and Cirque Le Soir are all accessible via guestlist on Fridays. Mixed groups fare best, but the overall standard is slightly more inclusive than Saturday. Get on our guestlist by messaging WhatsApp with your group details.
            </p>
            <p>
              <strong className="text-white">After-work transitions are common.</strong> Many successful Friday nights begin as after-work drinks that evolve organically. If your group is coming from drinks in Soho or dinner in Mayfair, let us know your timing and we can advise on which clubs will be at the right level of energy when you arrive.
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
