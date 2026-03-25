import type { Metadata } from 'next';
import { clubs } from '@/lib/clubs';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'London\'s Most Exclusive Clubs — The Insider\'s Guide',
  description: 'Discover London\'s most exclusive nightlife experiences. Insider guide to the city\'s most premium clubs, what makes each one special, and how to arrange your night.',
  keywords: ['most exclusive clubs London', 'best clubs London', 'premium London nightlife', 'London VIP clubs', 'exclusive London clubs'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides/hardest-clubs-to-get-into',
  },
};

const faqs = [
  {
    question: 'What is the most exclusive club in London?',
    answer: 'Tape London is widely considered the most exclusive club in London. It operates as a members club with tables starting from £1,500, attracting celebrities, music industry figures, and high-net-worth individuals. A table booking or member connection is the best way to experience it.',
  },
  {
    question: 'How do I get into London\'s exclusive clubs?',
    answer: 'The best way to experience London\'s exclusive clubs is through a table booking or guestlist. A table booking guarantees entry at every venue and gives you a reserved space with bottle service. Guestlist is a free alternative that works well at most venues. Contact a promoter to arrange either option.',
  },
  {
    question: 'Do you need a table to get into Mayfair clubs?',
    answer: 'A table booking is the most reliable way to guarantee entry at any Mayfair club. Guestlist is a great alternative that works well at most venues. Tables typically start from £1,000 and include bottle service for your group.',
  },
  {
    question: 'What affects whether you get into a London club?',
    answer: 'The main factors are: booking status (table or guestlist), group composition (mixed groups with a good ratio of women to men fare best), dress code compliance (smart and stylish at minimum), time of arrival (earlier is better), and the door team\'s assessment of your group. Behaviour and sobriety also matter.',
  },
  {
    question: 'How much does a table cost at London clubs?',
    answer: 'Table minimums at most London clubs start from £1,000 per night. Tape London starts from £1,500. These minimums represent your spend on drinks and are not an entry fee — you receive bottles, mixers, and table service for the amount. On peak nights or for premium positions, minimums can be higher.',
  },
  {
    question: 'What should I wear to London\'s exclusive clubs?',
    answer: 'For men: smart shoes (no trainers at strict venues), well-fitted trousers or dark jeans, a smart shirt or designer top, and a jacket if you want to be safe. For women: heels and a dress or stylish going-out outfit. Avoid sportswear, casual trainers, shorts, and anything that looks like you did not make an effort.',
  },
];

const exclusiveClubs = [
  'tape-london',
  'cirque-le-soir',
  'the-box-london',
  'tabu-london',
  'scotch-of-st-james',
  'the-london-reign',
  'funky-buddha',
  'maddox',
  'cuckoo-club',
  'dear-darling',
  'luna-club-london',
  'selene-london',
  'beat-london',
  'ministry-of-sound',
];

export default function ExclusiveClubsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'London\'s Most Exclusive Clubs — The Insider\'s Guide',
            'Discover London\'s most exclusive nightlife experiences with insider advice on what makes each venue special.',
            '/guides/hardest-clubs-to-get-into',
            '2025-01-01'
          ),
          getFAQSchema(faqs),
        ]}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="mb-4 flex gap-4 text-sm">
            <Link href="/" className="text-[#BBB] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#888]">/</span>
            <Link href="/guides" className="text-[#BBB] hover:text-white transition-colors">
              Guides
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            London&apos;s Most Exclusive Clubs
          </h1>
          <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">
            A guide to London&apos;s most premium nightlife experiences. What makes each venue special, what to expect, and how to arrange your night.
          </p>

          <div className="grid gap-6">
            {exclusiveClubs.map((slug) => {
              const club = clubs.find(c => c.slug === slug);
              if (!club) return null;
              return (
                <div key={club.slug} className="bg-[#141414] border border-[#222] rounded-2xl p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <Link href={`/clubs/${club.slug}`} className="text-xl font-bold text-white hover:text-[#C0C0C0] transition-colors">
                        {club.name}
                      </Link>
                      <p className="text-[#888] text-sm mt-1">{club.area} &middot; Closes {club.closingTime}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[#BBB] text-sm leading-relaxed">{club.description}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-[#C0C0C0] mb-2">Insider tip</h3>
                    <p className="text-[#BBB] text-sm leading-relaxed">{club.insiderTip}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-[#888]">
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

          {/* The Experience Section */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Making the Most of Your Night</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-8">Practical advice from promoters who know the scene.</p>
            <div className="space-y-4 text-[#BBB] leading-relaxed">
              <p>
                The best way to experience any of these clubs is with a table booking. Every venue will welcome you with a table reservation, giving you a reserved space, dedicated service, and bottles for your group. For most clubs, tables start from £1,000.
              </p>
              <p>
                Guestlist is an excellent free alternative. Contact us on WhatsApp and we will submit your names to any venue. Guestlist works well at most clubs and gives you priority consideration at the door.
              </p>
              <p>
                Group composition matters at Mayfair clubs. Mixed groups with a good ratio of women to men have the best experience. All-female groups are welcomed everywhere. If your group is all male, a table booking is the simplest route.
              </p>
              <p>
                Dress smart and stylish. Smart shoes, well-fitted clothing, and a considered outfit are the baseline. When in doubt, overdress rather than underdress.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mt-12 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Ready to experience London&apos;s best clubs?
            </h2>
            <p className="text-[#BBB] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. We handle table bookings and guestlists at every club on this page. Tell us where you want to go and we will make it happen.
            </p>
            <WhatsAppCTA />
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">Common questions about London&apos;s exclusive club scene.</p>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#141414] border border-[#222] rounded-2xl p-7">
                  <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                  <p className="text-[#BBB] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Links */}
          <div className="border-t border-[#222] pt-8 mt-12">
            <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                Guestlists &amp; Table Bookings Guide &rarr;
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
