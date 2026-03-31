import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Guestlists & Table Bookings — The Complete Guide to London Clubs',
  description: 'The complete guide to guestlists, table bookings, dress codes, group composition, and age requirements at London nightclubs. Honest advice from promoters.',
  keywords: ['London club guestlist', 'London club table booking', 'London club dress code', 'London club entry tips', 'London nightclub guide'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides/how-to-get-into-london-clubs',
  },
};

const faqs = [
  {
    question: 'What is a guestlist at a London club?',
    answer: 'A guestlist is a pre-approved list of names submitted to the door team before the night. Being on the guestlist means you are expected — you get priority consideration and usually free entry or a reduced queue. Contact a promoter to get your names added.',
  },
  {
    question: 'How do I get on a club guestlist in London?',
    answer: 'Contact a promoter — that is what we do. Message us on WhatsApp with the club you want, the date, and your group details (how many guys, how many girls). We submit your names to the venue. You arrive, give your name at the door, and you are on the list. There is no charge for guestlist.',
  },
  {
    question: 'Do I need to book a table to get into a London club?',
    answer: 'Not always. Guestlist works well at most venues and is completely free. A table booking is the premium option that guarantees entry everywhere and gives you a reserved space with bottle service. Tables start from £1,000 at most venues.',
  },
  {
    question: 'What is the dress code for London clubs?',
    answer: 'The minimum standard at Mayfair clubs is smart: no trainers (some venues allow clean designer trainers), no sportswear, no shorts, no casual t-shirts. For men, smart shoes, fitted trousers or dark jeans, and a collared shirt or smart top. For women, heels and a dress, jumpsuit, or stylish going-out outfit. At Ministry of Sound, the code is much more relaxed — clean, comfortable clubbing wear is fine.',
  },
  {
    question: 'Can a group of guys get into London clubs?',
    answer: 'Mixed groups have the best experience at Mayfair clubs. All-male groups are best served by booking a table, which guarantees entry regardless of group composition. Ministry of Sound is ticket-based so group composition does not apply there.',
  },
  {
    question: 'What time should I arrive at London clubs?',
    answer: 'Most clubs open between 10pm and 11pm. For guestlist entry, arriving between 11pm and midnight gives you the best experience — you beat the main rush. After 1am, some venues reach capacity. For table bookings, arrive whenever suits you.',
  },
  {
    question: 'How old do you have to be to get into London clubs?',
    answer: 'The legal minimum is 18, and all clubs will ID you if you look under 25. Most Mayfair clubs have a practical minimum of 21 for men and 19-20 for women, though this is not officially stated. Bring photo ID — passport or driving licence. Student IDs are not accepted.',
  },
  {
    question: 'Is it worth paying for a table at a London club?',
    answer: 'If guaranteed entry matters to you, yes. A table also gives you a dedicated space, table service, and a guaranteed good time without worrying about capacity or queues. For groups of 4-6 people, splitting a £1,000 minimum works out at around £170-250 per person for bottles of premium alcohol — comparable to buying drinks at the bar all night.',
  },
  {
    question: 'Can I get into clubs without spending money?',
    answer: 'Yes — through guestlist. Guestlist is free and available at most venues. You will still need to buy your own drinks once inside, but there is no entry fee or minimum spend.',
  },
];

export default function HowToGetInPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Guestlists & Table Bookings — The Complete Guide to London Clubs',
            'The complete guide to guestlists, table bookings, dress codes, and everything you need to plan your night at London clubs.',
            '/guides/how-to-get-into-london-clubs',
            '2025-01-01'
          ),
          getFAQSchema(faqs),
        ]}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_22e8141bc1f24230af229704c5102b96.jpg"
            alt="London club guestlists and table bookings guide hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/80 to-black/60" />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
            <div className="mb-4 flex gap-4 text-sm">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/60">/</span>
              <Link href="/guides" className="text-white/80 hover:text-white transition-colors">
                Guides
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Guestlists &amp; Table Bookings
            </h1>
            <p className="text-center text-white/80 max-w-2xl mx-auto">
              The practical guide to planning your night at London clubs. We are promoters — this is what we do every night.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
          {/* Table of Contents */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mb-12">
            <h2 className="text-sm font-semibold text-[#C0C0C0] mb-3">In this guide</h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <a href="#guestlist" className="text-[#BBB] hover:text-white transition-colors">1. Guestlist</a>
              <a href="#table-bookings" className="text-[#BBB] hover:text-white transition-colors">2. Table Bookings</a>
              <a href="#dress-code" className="text-[#BBB] hover:text-white transition-colors">3. Dress Code</a>
              <a href="#group-composition" className="text-[#BBB] hover:text-white transition-colors">4. Group Composition</a>
              <a href="#age-and-id" className="text-[#BBB] hover:text-white transition-colors">5. Age &amp; ID</a>
            </div>
          </div>

          {/* Section 1: Guestlist */}
          <section id="guestlist" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">1. Guestlist</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">The free way to arrange your night at any London club.</p>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 space-y-4 text-[#BBB] text-sm leading-relaxed">
              <p>
                A guestlist is a list of names submitted to the venue by a promoter before the night. When you arrive, you give your name at the door and they check you against the list. If you are on it, you get priority consideration for entry.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">What guestlist gets you</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your name is expected at the door — the team knows you are coming</li>
                  <li>Priority over guests who are not on any list</li>
                  <li>Usually free entry or reduced queue</li>
                  <li>At most venues, guestlist is a straightforward way to arrange your night</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What guestlist does not get you</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>A reserved table or seating area</li>
                  <li>A pass on dress code — you still need to look the part</li>
                  <li>Entry if the venue is at capacity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Who qualifies for guestlist</h3>
                <p>
                  Anyone can request guestlist through a promoter. There is no fee. Mixed groups with a good ratio of women to men have the best success rate. All-female groups are almost always approved. All-male groups may be advised to consider a table booking for the best experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Table Bookings */}
          <section id="table-bookings" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">2. Table Bookings</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">The premium option for a guaranteed, hassle-free night.</p>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 space-y-4 text-[#BBB] text-sm leading-relaxed">
              <p>
                A table booking is the premium way to enjoy any London club. When you book a table, you commit to a minimum spend on drinks for the evening. In return, you get a reserved table, dedicated service, and guaranteed entry for your group.
              </p>
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

            <div className="mt-6 bg-[#141414] border border-[#222] rounded-2xl p-7 text-center">
              <p className="text-[#BBB] text-sm mb-4">
                We handle table bookings at every club listed on this site. Message us with your preferred venue, date, and group size.
              </p>
              <WhatsAppCTA />
            </div>
          </section>

          {/* Section 3: Dress Code */}
          <section id="dress-code" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">3. Dress Code</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">What to wear for a night out at London&apos;s clubs.</p>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 space-y-4 text-[#BBB] text-sm leading-relaxed">
              <p>
                Every club says &ldquo;smart&rdquo; — here is what that actually means in practice.
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
                <h3 className="text-white font-semibold mb-2">What to avoid</h3>
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

          {/* Section 4: Group Composition */}
          <section id="group-composition" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">4. Group Composition</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">How your group makeup affects your night.</p>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 space-y-4 text-[#BBB] text-sm leading-relaxed">
              <p>
                The gender ratio of your group is a factor at Mayfair clubs. Here is how it works in practice.
              </p>
              <div>
                <h3 className="text-white font-semibold mb-2">What works best</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="text-white">All-female groups:</span> Welcomed everywhere. Guestlist works at every club.
                  </li>
                  <li>
                    <span className="text-white">Mixed groups (more women than men):</span> Excellent experience. This is the ideal group composition for guestlist.
                  </li>
                  <li>
                    <span className="text-white">Mixed groups (equal or more men):</span> Works well at most venues, especially with guestlist or a table.
                  </li>
                  <li>
                    <span className="text-white">All-male groups:</span> A table booking is the best route for all-male groups at Mayfair clubs. Ministry of Sound is ticket-based so group composition does not apply.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Options for all-male groups</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Book a table — group composition does not matter with a booking</li>
                  <li>Go to Ministry of Sound — entry is ticket-based</li>
                  <li>Try midweek nights where policies are more relaxed</li>
                  <li>Message us — we can advise on the best venues for your group</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Age & ID */}
          <section id="age-and-id" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">5. Age &amp; ID</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">What you need to know about age requirements.</p>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 space-y-4 text-[#BBB] text-sm leading-relaxed">
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
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mb-12 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Let us handle it for you
            </h2>
            <p className="text-[#BBB] mb-6 max-w-lg mx-auto">
              Guestlists and table bookings at every club on this site. Message us with where you want to go, when, and who is in your group. We will sort it.
            </p>
            <WhatsAppCTA />
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-center text-[#BBB] max-w-2xl mx-auto mb-12">Common questions about guestlists, table bookings, and planning your night.</p>
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
          <div className="border-t border-[#222] pt-8">
            <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                London&apos;s Most Exclusive Clubs &rarr;
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
