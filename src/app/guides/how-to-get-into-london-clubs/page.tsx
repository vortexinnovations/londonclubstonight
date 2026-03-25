import type { Metadata } from 'next';
import { clubs } from '@/lib/clubs';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'How to Get Into London\'s Exclusive Clubs — The Complete Guide',
  description: 'The complete guide to getting into London nightclubs. Guestlists, table bookings, walk-ins, dress codes, group composition, and age requirements explained honestly.',
  keywords: ['how to get into clubs London', 'London club entry tips', 'do you need a table London clubs', 'London club door policy', 'London club dress code'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides/how-to-get-into-london-clubs',
  },
};

const faqs = [
  {
    question: 'What is a guestlist at a London club?',
    answer: 'A guestlist is a pre-approved list of names submitted to the door team before the night. Being on the guestlist means you are expected — but at exclusive venues, it does not guarantee entry. You still need to meet the dress code and pass the door team\'s assessment. At less exclusive venues, guestlist is essentially free entry with reduced or no queue.',
  },
  {
    question: 'How do I get on a club guestlist in London?',
    answer: 'Contact a promoter — that is what we do. Message us on WhatsApp with the club you want, the date, and your group details (how many guys, how many girls). We submit your names to the venue. You arrive, give your name at the door, and you are on the list. There is no charge for guestlist.',
  },
  {
    question: 'Do I need to book a table to get into a London club?',
    answer: 'Not always, but it is the only way to guarantee entry at every venue. At moderate-difficulty clubs like Funky Buddha, Cuckoo, or Luna Club, guestlist works well. At the hardest clubs like Tape London and Cirque Le Soir, a table booking is practically essential. Tables start from £1,000 at most venues.',
  },
  {
    question: 'What is the dress code for London clubs?',
    answer: 'The minimum standard at Mayfair clubs is smart: no trainers (some venues allow clean designer trainers), no sportswear, no shorts, no casual t-shirts. For men, smart shoes, fitted trousers or dark jeans, and a collared shirt or smart top. For women, heels and a dress, jumpsuit, or stylish going-out outfit. At Ministry of Sound, the code is much more relaxed — clean, comfortable clubbing wear is fine.',
  },
  {
    question: 'Can a group of guys get into London clubs?',
    answer: 'It is the hardest group composition to get in with. All-male groups without a table booking will be turned away from most Mayfair clubs. If you have a table, group composition does not matter. On guestlist, mixed groups are strongly preferred. If your group is all male, your best options are booking a table or going to Ministry of Sound where entry is ticket-based.',
  },
  {
    question: 'What time should I arrive at London clubs?',
    answer: 'Most clubs open between 10pm and 11pm. For guestlist entry, arriving between 11pm and midnight gives you the best chance — you beat the main rush and the door team has capacity to work with. After 1am, some venues reach capacity and stop accepting new guests, even from the guestlist. For table bookings, arrive whenever suits you.',
  },
  {
    question: 'How old do you have to be to get into London clubs?',
    answer: 'The legal minimum is 18, and all clubs will ID you if you look under 25. Most Mayfair clubs have a practical minimum of 21 for men and 19-20 for women, though this is not officially stated. Bring photo ID — passport or driving licence. Student IDs are not accepted.',
  },
  {
    question: 'What happens if I am turned away at the door?',
    answer: 'Do not argue. The door team\'s decision is final and making a scene will guarantee you never get in. Walk away calmly and message us — we can often arrange entry at an alternative venue the same night. Getting turned away is not the end of your night, but losing your composure at the door is.',
  },
  {
    question: 'Is it worth paying for a table at a London club?',
    answer: 'If guaranteed entry matters to you, yes. A table also gives you a dedicated space, table service, and a guaranteed good time without worrying about capacity or queues. For groups of 4-6 people, splitting a £1,000 minimum works out at around £170-250 per person for bottles of premium alcohol — comparable to buying drinks at the bar all night.',
  },
  {
    question: 'Can I get into clubs without spending money?',
    answer: 'Yes — through guestlist. Guestlist is free and available at most venues. It does not guarantee entry at the most exclusive clubs, but at moderate-difficulty venues it works well. You will still need to buy your own drinks once inside, but there is no entry fee or minimum spend.',
  },
];

export default function HowToGetInPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'How to Get Into London\'s Exclusive Clubs — The Complete Guide',
            'The complete guide to guestlists, table bookings, walk-ins, dress codes, and everything that affects entry at London clubs.',
            '/guides/how-to-get-into-london-clubs',
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
            How to Get Into London&apos;s Exclusive Clubs
          </h1>
          <p className="text-[#999] text-lg mb-12 max-w-2xl">
            The straightforward, no-nonsense guide to how entry actually works at London nightclubs. We are promoters — this is what we do every night.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 mb-12">
            <h2 className="text-sm font-semibold text-[#C0C0C0] mb-3">In this guide</h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <a href="#guestlist" className="text-[#999] hover:text-white transition-colors">1. Guestlist</a>
              <a href="#table-bookings" className="text-[#999] hover:text-white transition-colors">2. Table Bookings</a>
              <a href="#walk-ins" className="text-[#999] hover:text-white transition-colors">3. Walk-ins</a>
              <a href="#dress-code" className="text-[#999] hover:text-white transition-colors">4. Dress Code</a>
              <a href="#group-composition" className="text-[#999] hover:text-white transition-colors">5. Group Composition</a>
              <a href="#age-and-id" className="text-[#999] hover:text-white transition-colors">6. Age &amp; ID</a>
            </div>
          </div>

          {/* Section 1: Guestlist */}
          <section id="guestlist" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Guestlist</h2>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                A guestlist is a list of names submitted to the venue by a promoter before the night. When you arrive, you give your name at the door and they check you against the list. If you are on it, you get priority consideration for entry.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">What guestlist gets you</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your name is expected at the door — the team knows you are coming</li>
                  <li>Priority over walk-ins who are not on any list</li>
                  <li>Usually free entry or reduced queue</li>
                  <li>At moderate venues, guestlist is essentially guaranteed entry</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What guestlist does not get you</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Guaranteed entry at the most exclusive clubs (Tape, Cirque, TABU)</li>
                  <li>A pass on dress code — you still need to look the part</li>
                  <li>Entry if the venue is at capacity</li>
                  <li>Entry if the door team decides your group does not fit</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Who qualifies for guestlist</h3>
                <p>
                  Anyone can request guestlist through a promoter. There is no fee. Mixed groups with a good ratio of women to men have the best success rate. All-female groups are almost always approved. All-male groups will be asked to bring women or consider a table booking instead.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Table Bookings */}
          <section id="table-bookings" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Table Bookings</h2>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                A table booking is the only way to guarantee entry at every London club. When you book a table, you commit to a minimum spend on drinks for the evening. In return, you get a reserved table, dedicated service, and — most importantly — guaranteed entry for your group.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">Why tables guarantee entry</h3>
                <p>
                  Clubs make their money from table service. A table booking represents committed revenue, so venues will always prioritise table guests. No club will turn away a confirmed table booking (provided you meet basic dress code and are not visibly intoxicated).
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What you get</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Guaranteed entry for your entire group regardless of composition</li>
                  <li>A reserved table with seating in the club</li>
                  <li>Dedicated table service throughout the night</li>
                  <li>Bottles and mixers included in your minimum spend</li>
                  <li>Skip the queue entirely</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Typical costs</h3>
                <p>
                  Most London clubs have a minimum spend starting at £1,000. Tape London starts at £1,500. These minimums apply to drinks — you are not paying £1,000 to sit at a table, you are spending £1,000 on bottles of spirits, champagne, or whatever you choose. For a group of 5, that works out at £200 per person for premium drinks and guaranteed entry.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-[#141414] border border-[#222] rounded-xl p-6 text-center">
              <p className="text-[#999] text-sm mb-4">
                We handle table bookings at every club listed on this site. Message us with your preferred venue, date, and group size.
              </p>
              <WhatsAppCTA />
            </div>
          </section>

          {/* Section 3: Walk-ins */}
          <section id="walk-ins" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Walk-ins</h2>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                A walk-in means arriving at the club without being on a guestlist or having a table booking, and hoping the door team lets you in. It is the least reliable method and the one most people overestimate their chances with.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">Realistic expectations by venue type</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="text-white">Very Hard clubs (Tape London):</span> Walk-ins are essentially impossible. Do not plan your night around this.
                  </li>
                  <li>
                    <span className="text-white">Hard clubs (Cirque, TABU, Scotch):</span> Walk-ins happen but are rare. You need to look exceptional, have a well-balanced group, and arrive at the right time.
                  </li>
                  <li>
                    <span className="text-white">Moderate clubs (Funky Buddha, Luna Club, Cuckoo, etc.):</span> Walk-ins are genuinely possible for well-dressed mixed groups, especially before midnight on less busy nights.
                  </li>
                  <li>
                    <span className="text-white">Easy clubs (Ministry of Sound):</span> Buy a ticket online. Walk-up on the night is possible but expect a queue.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Tips if you must walk in</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Arrive between 11pm and midnight — earlier is better</li>
                  <li>Have a mixed group with more women than men</li>
                  <li>Dress above the minimum standard, not at it</li>
                  <li>Be polite, confident, and sober at the door</li>
                  <li>Do not argue if turned away — ask the door team what other nights might work better</li>
                  <li>Have a backup plan. Always have a backup plan.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Dress Code */}
          <section id="dress-code" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Dress Code</h2>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                Dress code is the most common reason people get turned away. Every club says &ldquo;smart&rdquo; — here is what that actually means in practice.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Men — what works</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Smart shoes (leather or suede, not trainers)</li>
                    <li>Well-fitted trousers or dark jeans (no ripped denim)</li>
                    <li>Collared shirt, smart polo, or designer knitwear</li>
                    <li>Blazer or jacket (optional but always helps)</li>
                    <li>A well-fitted, considered outfit that shows effort</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Women — what works</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Heels (flats rarely cause issues but heels are safer)</li>
                    <li>Dress, jumpsuit, or smart separates</li>
                    <li>Stylish going-out outfit that looks intentional</li>
                    <li>Statement accessories or bold styling choices</li>
                    <li>Confidence — dress like you belong</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What will get you turned away</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Trainers at strict venues (some allow clean designer pairs — ask us)</li>
                  <li>Sportswear, tracksuits, football shirts</li>
                  <li>Shorts (any kind, even smart ones)</li>
                  <li>Overly casual t-shirts, hoodies</li>
                  <li>Work boots, flip-flops, sandals for men</li>
                  <li>Anything that looks like you did not make an effort</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">The exception: Ministry of Sound</h3>
                <p>
                  Ministry of Sound operates a much more relaxed dress code. Clean trainers are fine, comfortable clubbing wear is accepted, and the focus is on the music rather than your outfit. You still cannot wear football shirts or look completely unkempt, but the bar is significantly lower than Mayfair.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Group Composition */}
          <section id="group-composition" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Group Composition</h2>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                This is the factor most people do not want to hear about, but it is the most important after booking status. The gender ratio of your group directly affects your chances of entry at every Mayfair club.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">The reality</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="text-white">All-female groups:</span> Highest chance of entry everywhere. Guestlist works at even the hardest clubs.
                  </li>
                  <li>
                    <span className="text-white">Mixed groups (more women than men):</span> Excellent chances. This is the ideal group composition for guestlist entry.
                  </li>
                  <li>
                    <span className="text-white">Mixed groups (equal or more men):</span> Possible at moderate venues. Difficult at hard venues without a table.
                  </li>
                  <li>
                    <span className="text-white">All-male groups:</span> Without a table booking, you will be turned away from most Mayfair clubs. This is not personal — it is the policy.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What to do if your group is all male</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Book a table — group composition does not matter with a booking</li>
                  <li>Go to Ministry of Sound — entry is ticket-based, not ratio-based</li>
                  <li>Try midweek nights where policies are more relaxed</li>
                  <li>Message us — we can sometimes arrange guestlist for smaller all-male groups at specific venues</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Age & ID */}
          <section id="age-and-id" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Age &amp; ID</h2>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                The legal minimum age for entry to any London nightclub is 18. However, the practical minimum at Mayfair clubs is often higher.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">What you need to know</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Bring photo ID — passport or UK driving licence</li>
                  <li>Student IDs and provisional licences are not always accepted at Mayfair venues</li>
                  <li>If you look under 25, you will be asked for ID at every venue</li>
                  <li>Many Mayfair clubs have an unofficial preference for guests aged 21+ (especially for men)</li>
                  <li>Ministry of Sound accepts anyone 18+ with valid photo ID</li>
                  <li>International visitors should bring their passport — it is the most universally accepted ID</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 mb-12 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Let us handle it for you
            </h2>
            <p className="text-[#999] mb-6 max-w-lg mx-auto">
              Guestlists and table bookings at every club on this site. Message us with where you want to go, when, and who is in your group. We will make it work.
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

          {/* Club Quick Reference */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-white mb-4">Club Entry Difficulty — Quick Reference</h2>
            <div className="space-y-2">
              {clubs.map((club) => (
                <div key={club.slug} className="flex items-center justify-between py-2 border-b border-[#222] last:border-0">
                  <Link href={`/clubs/${club.slug}`} className="text-[#999] hover:text-white text-sm transition-colors">
                    {club.name}
                  </Link>
                  <span className="text-[#666] text-xs">{club.entryDifficulty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Links */}
          <div className="border-t border-[#222] pt-8">
            <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                Hardest Clubs to Get Into &rarr;
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
