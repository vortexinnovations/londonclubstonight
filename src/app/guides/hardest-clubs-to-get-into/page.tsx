import type { Metadata } from 'next';
import { clubs } from '@/lib/clubs';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Hardest Clubs to Get Into in London — The Honest Insider\'s Guide',
  description: 'Every London club ranked by entry difficulty. Honest insider advice on door policies, dress codes, ratios, and what actually works to get into London\'s most exclusive nightclubs.',
  keywords: ['hardest clubs to get into London', 'most exclusive clubs London', 'strictest door policy London', 'London club entry difficulty'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides/hardest-clubs-to-get-into',
  },
};

const faqs = [
  {
    question: 'What is the hardest club to get into in London?',
    answer: 'Tape London is widely considered the hardest club to get into in London. It operates as a members club with tables starting from £1,500 and walk-in entry is extremely rare. Without a table booking or member connection, your chances of getting in are very slim.',
  },
  {
    question: 'Can you walk into exclusive London clubs without a booking?',
    answer: 'It depends on the club. At venues like Tape London and Cirque Le Soir, walk-ins are extremely unlikely to succeed. At moderate-difficulty clubs like Funky Buddha, Luna Club, or Cuckoo Club, walk-ins are possible for well-dressed mixed groups, especially earlier in the evening. Ministry of Sound is the easiest — buy a ticket in advance and you are in.',
  },
  {
    question: 'Do you need a table to get into Mayfair clubs?',
    answer: 'A table booking is the most reliable way to guarantee entry at any Mayfair club. Guestlist is an alternative that works well at moderate-difficulty venues, but at the hardest clubs like Tape London, TABU, and Cirque Le Soir, a table booking is practically essential. Tables typically start from £1,000.',
  },
  {
    question: 'What affects whether you get into a London club?',
    answer: 'The main factors are: booking status (table or guestlist), group composition (mixed groups with a good ratio of women to men fare best), dress code compliance (smart and stylish at minimum), time of arrival (earlier is easier), and the door team\'s assessment of your group. Behaviour and sobriety also matter.',
  },
  {
    question: 'Is it easier to get into clubs on weeknights?',
    answer: 'Yes. Thursday nights and Wednesday nights (at clubs that open midweek) are significantly easier to enter than Fridays and Saturdays. Door policies are more relaxed, guestlists are more accessible, and walk-in chances improve. If entry difficulty worries you, midweek is the smart choice.',
  },
  {
    question: 'How much does a table cost at London clubs?',
    answer: 'Table minimums at most London clubs start from £1,000 per night. Tape London starts from £1,500. These minimums represent your spend on drinks and are not an entry fee — you receive bottles, mixers, and table service for the amount. On peak nights or for premium positions, minimums can be higher.',
  },
  {
    question: 'What should I wear to get into exclusive London clubs?',
    answer: 'For men: smart shoes (no trainers at strict venues), well-fitted trousers or dark jeans, a smart shirt or designer top, and a jacket if you want to be safe. For women: heels and a dress or stylish going-out outfit. Avoid sportswear, casual trainers, shorts, and anything that looks like you did not make an effort.',
  },
];

const difficultyOrder = [
  { level: 'Very Hard', clubs: ['tape-london'] },
  { level: 'Hard', clubs: ['cirque-le-soir', 'tabu-london', 'scotch-of-st-james'] },
  { level: 'Moderate', clubs: ['the-london-reign', 'libertine', 'luxx-club', 'maddox', 'cuckoo-club', 'dear-darling', 'beat-london', 'lio-london'] },
  { level: 'Easy', clubs: ['ministry-of-sound'] },
];

function getDifficultyColor(level: string) {
  switch (level) {
    case 'Very Hard': return 'text-red-400 border-red-400/30 bg-red-400/10';
    case 'Hard': return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
    case 'Moderate': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    case 'Easy': return 'text-green-400 border-green-400/30 bg-green-400/10';
    default: return 'text-[#999] border-[#333] bg-[#1a1a1a]';
  }
}

export default function HardestClubsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Hardest Clubs to Get Into in London — The Honest Insider\'s Guide',
            'Every London club ranked by entry difficulty with honest insider advice on door policies and what works.',
            '/guides/hardest-clubs-to-get-into',
            '2025-01-01'
          ),
          getFAQSchema(faqs),
        ]}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <div className="mb-4 flex gap-4 text-sm">
            <Link href="/" className="text-[#999] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#666]">/</span>
            <Link href="/guides" className="text-[#999] hover:text-white transition-colors">
              Guides
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hardest Clubs to Get Into in London
          </h1>
          <p className="text-[#999] text-lg mb-12 max-w-2xl">
            Every club ranked by how difficult it actually is to get through the door. No sugarcoating, no PR spin — just honest advice from people who work the scene.
          </p>

          {difficultyOrder.map((tier) => (
            <div key={tier.level} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${getDifficultyColor(tier.level)}`}>
                  {tier.level}
                </span>
                <div className="h-px flex-1 bg-[#222]" />
              </div>

              <div className="grid gap-4">
                {tier.clubs.map((slug) => {
                  const club = clubs.find(c => c.slug === slug);
                  if (!club) return null;
                  return (
                    <div key={club.slug} className="bg-[#141414] border border-[#222] rounded-xl p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <Link href={`/clubs/${club.slug}`} className="text-xl font-bold text-white hover:text-[#C0C0C0] transition-colors">
                            {club.name}
                          </Link>
                          <p className="text-[#666] text-sm mt-1">{club.area} &middot; Closes {club.closingTime}</p>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border whitespace-nowrap ${getDifficultyColor(club.entryDifficulty)}`}>
                          {club.entryDifficulty}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-[#C0C0C0] mb-2">Why it is hard</h3>
                        <p className="text-[#999] text-sm leading-relaxed">{club.doorPolicy}</p>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-[#C0C0C0] mb-2">How to improve your chances</h3>
                        <p className="text-[#999] text-sm leading-relaxed">{club.insiderTip}</p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs text-[#666]">
                        <span>Tables from {club.tableMinimum}</span>
                        <span>&middot;</span>
                        <span>{club.openingNights}</span>
                        <span>&middot;</span>
                        <span>{club.musicGenres.join(', ')}</span>
                      </div>

                      <div className="mt-4">
                        <Link href={`/clubs/${club.slug}`} className="text-[#C0C0C0] text-sm hover:text-white transition-colors">
                          Full club profile &rarr;
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* The Honest Truth Section */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The Honest Truth</h2>
            <div className="space-y-4 text-[#999] leading-relaxed">
              <p>
                If you want guaranteed entry to any London club, book a table. That is the reality. Every venue on this list will let you in with a table booking regardless of your group composition, provided you meet the dress code and are not visibly intoxicated.
              </p>
              <p>
                Guestlist helps, but it is not guaranteed entry. At the harder venues, being on the guestlist gets you considered by the door team — it does not get you waved through. Your appearance, group makeup, and the door team&apos;s discretion still apply.
              </p>
              <p>
                Walk-ins are a gamble at the best venues. At Tape London, they are essentially impossible. At Cirque Le Soir and TABU, they happen but rarely. At the moderate venues, you have a genuine shot if you arrive early, look good, and have a mixed group. At Ministry of Sound, just buy a ticket online.
              </p>
              <p>
                The single biggest factor after booking status is group composition. A group of four women will get into almost any club without a booking. A group of four men will struggle at every venue except Ministry of Sound. Mixed groups with more women than men are the sweet spot.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 mb-12 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Want guaranteed entry?
            </h2>
            <p className="text-[#999] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. We handle table bookings and guestlists at every club on this page. Tell us where you want to go and we will make it happen.
            </p>
            <WhatsAppCTA />
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#141414] border border-[#222] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                  <p className="text-[#999] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Links */}
          <div className="border-t border-[#222] pt-8">
            <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                How to Get Into London&apos;s Exclusive Clubs &rarr;
              </Link>
              <Link href="/guides/clubs-open-late" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                Clubs Open Late in London &rarr;
              </Link>
              <Link href="/guides/london-clubs-by-music-genre" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                London Clubs by Music Genre &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
