import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getClubBySlug } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Can You Get Into Tape London Tonight? — Insider Guide',
  description:
    'Honest insider advice on getting into Tape London tonight. Walk-in chances, table booking tips, dress code, and what to realistically expect at Mayfair\'s most exclusive club.',
  keywords: [
    'Tape London tonight',
    'get into Tape London',
    'Tape London walk in',
    'Tape London table booking',
    'Tape London dress code',
    'Tape London door policy',
    'Tape London guestlist',
    'Tape London entry',
  ],
  openGraph: {
    title: 'Can You Get Into Tape London Tonight? — Insider Guide',
    description:
      'Honest insider advice on getting into Tape London tonight. Walk-in chances, table booking tips, dress code, and realistic expectations.',
    url: 'https://londonclubstonight.com/can-you-get-into-tape-london-tonight',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can You Get Into Tape London Tonight? — Insider Guide',
    description:
      'Honest insider advice on getting into Tape London tonight. Walk-in chances, table booking tips, and realistic expectations.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/can-you-get-into-tape-london-tonight',
  },
};

const faqs = [
  {
    question: 'Can I get into Tape London tonight?',
    answer:
      'It depends on the night and whether you have a booking. Tape is a members club, so walk-in entry is extremely difficult — especially on Fridays and Saturdays. Your best chance is to book a table through a promoter. Thursday nights tend to be slightly more accessible, and having a mixed group with a strong ratio of women helps. Without a booking, your chances are realistically very low.',
  },
  {
    question: 'Do I need a table at Tape?',
    answer:
      'Practically, yes. Tape operates as a members club and the door team is among the most selective in London. A table reservation is the only reliable way to guarantee entry. Tables start from £1,500 minimum spend. Guestlist is not a realistic option here — the club fills primarily through table bookings and member invitations.',
  },
  {
    question: "What's the dress code at Tape London?",
    answer:
      'Tape has one of the strictest dress codes in London. Smart and designer is the standard — think tailored trousers, smart shoes, and well-fitted shirts for men. No trainers, no sportswear, no exceptions. Women should dress to impress. The crowd is made up of celebrities and high-net-worth individuals, so the standard is genuinely high. If you would not wear it to a fashion event, reconsider.',
  },
  {
    question: 'How much is a table at Tape?',
    answer:
      'Tables at Tape London start from £1,500 minimum spend. On busy nights like Saturdays, you may find higher minimums depending on table position and the event. The minimum covers bottles and mixers. Expect to spend more if your group is larger or if you want premium champagne. Message us on WhatsApp for exact pricing and current availability.',
  },
];

export default function CanYouGetIntoTapeLondonTonightPage() {
  const tape = getClubBySlug('tape-london');

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Can You Get Into Tape London Tonight? — Insider Guide',
            'Honest insider advice on getting into Tape London tonight. Walk-in chances, table booking tips, dress code, and realistic expectations.',
            '/can-you-get-into-tape-london-tonight',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Can You Get Into Tape Tonight', url: '/can-you-get-into-tape-london-tonight' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/gallery/images/Tape-4-2.jpg"
          alt="Tape London nightclub interior with exclusive VIP atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/80 to-black/60" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
          <p className="text-white/80 text-sm uppercase tracking-widest mb-6">
            Insider Guide
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Can You Get Into Tape London Tonight?
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            An honest assessment from promoters who work with Tape every week. No false promises, just straight answers about your chances tonight.
          </p>
          <WhatsAppCTA clubName="Tape London" variant="tonight" heading="Need a Table at Tape Tonight?" />
        </div>
      </section>

      {/* The Honest Answer */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Honest Answer
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Let us be direct: if you are searching for this question at 9pm on a Friday or Saturday night, your chances of walking into Tape London without a booking are slim. Not impossible, but slim enough that you should have a backup plan.
            </p>
            <p>
              Tape is a members club. That distinction matters. Unlike venues that operate as regular nightclubs with a selective door, Tape fills its room primarily through table bookings and member invitations. The door team is not looking for people to fill a queue — they are managing a guest list of people who have already committed to being there. Walk-ups are assessed individually, and the bar is high.
            </p>
            <p>
              That said, context matters enormously. The night of the week, the size and composition of your group, how you are dressed, and — critically — whether you have any connection to a promoter or member all influence whether the door opens for you. Thursday nights are the most accessible. Friday and Saturday are the most competitive. Wednesday does not exist at Tape.
            </p>
            <p>
              We work with Tape regularly and can give you a realistic picture. If you want to go tonight, the fastest path is to message us. We can check availability, advise on your best approach, and in many cases arrange a table or entry on your behalf. That is not a sales pitch — it is simply how Tape works.
            </p>
          </div>
        </div>
      </section>

      {/* Table Booking vs Walk-In */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Table Booking vs Walk-In: What Actually Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Book a Table</h3>
              <ul className="space-y-3 text-[#BBB] text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                  Guaranteed entry regardless of the night
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                  Tables start from {tape?.tableMinimum || '£1,500'} minimum spend
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                  Skip the door assessment entirely
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                  The only reliable method on Fridays and Saturdays
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                  Same-day tables are sometimes available — especially Thursdays
                </li>
              </ul>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Walk-In Attempt</h3>
              <ul className="space-y-3 text-[#BBB] text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Very low success rate — Tape is not a walk-in venue
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Door team assesses appearance, group composition, and demeanour
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  All-male groups have essentially zero chance without a booking
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Thursday nights offer the best walk-in odds
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Arriving before midnight marginally improves your chances
                </li>
              </ul>
            </div>
          </div>
          <div className="text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
            <p>
              The maths is straightforward. Tape has a small capacity by design — it is an intimate room, not a warehouse. On a typical Friday or Saturday, the majority of that capacity is allocated to table bookings before the doors even open. The remaining space is filled by members and their personal guests. What remains for walk-ins is minimal.
            </p>
            <p>
              This is not the door team being difficult for the sake of it. The intimacy is what makes Tape special. The small room, the concentrated energy, the genuine likelihood of standing next to a recognisable face — all of that depends on controlled capacity. If Tape let everyone in, it would lose the quality that makes it worth going to in the first place.
            </p>
            <p>
              Our recommendation is always the same: book a table. If the minimum spend works for your group, it removes all uncertainty. For a full breakdown of table pricing, bottle packages, and what your minimum spend includes, see{' '}
              <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a>. If you are a group of four or more, splitting a {tape?.tableMinimum || '£1,500'} minimum works out to less than you would spend on a night out anyway — except you are guaranteed entry to one of the most exclusive rooms in London.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Tape Special */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Makes Tape Worth the Effort
          </h2>
          <div className="text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
            <p>
              There are dozens of clubs in London. Most of them will let you in without the drama. So why does Tape command this level of demand? Because the experience, when you are inside, is genuinely different.
            </p>
            <p>
              The sound system was originally designed for music production. The bass response, the clarity at high volumes, and the way the room handles the acoustics are a tier above what you hear in other clubs. Tape plays predominantly hip-hop, RnB, and trap, and the system does those genres extraordinary justice. You hear details in tracks that are lost in other venues.
            </p>
            <p>
              The celebrity presence is real. This is not a club that posts old photos of famous visitors from three years ago. On any given Thursday, Friday, or Saturday, you have a genuine chance of sharing the room with recognisable names from music, sport, film, and fashion. The small capacity means these encounters feel organic rather than staged.
            </p>
            <p>
              The intimacy creates an atmosphere that larger clubs cannot replicate. When Tape is at its best — a packed Thursday night, the right DJ behind the decks, a crowd that is there because they want to be — the energy in that room is unlike anything else in London. It is a room where things happen. Spontaneous performances, unexpected guests, moments that become stories.
            </p>
            <p>
              Located on Hanover Square in Mayfair, the venue itself reflects its neighbourhood — understated luxury without unnecessary flashiness. The interior is dark and moody with plush seating and warm lighting that creates pockets of privacy even when the room is full. For a wider look at what is happening across the Mayfair scene tonight, check{' '}
              <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair Tonight</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Dress Code — What You Actually Need to Know
          </h2>
          <div className="text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
            <p>
              {tape?.dressCode || 'Smart and stylish. Think designer — no trainers, no sportswear, no exceptions.'}
            </p>
            <p>
              That is the official line, but here is what it means in practice. The standard at Tape is set by the crowd already inside — celebrities, models, music executives. You do not need to be wearing designer labels head to toe, but you need to look like you could be. Tailored trousers, smart shoes, a well-fitted shirt or blazer for men. Heels and a dress or smart separates for women.
            </p>
            <p>
              What will get you turned away: trainers of any kind, even expensive ones. Sportswear or athleisure. Ripped jeans. Casual t-shirts. Shorts. Anything that suggests you dressed for comfort rather than occasion. The door team makes these calls quickly, and there is no negotiating.
            </p>
            <p>
              A genuine insider tip: dark colours work better than bright ones at Tape. The venue is dark and moody, and the regular crowd tends to dress accordingly. All-black is a safe choice. Smart boots or Oxford shoes for men are reliable. If you are unsure whether an item works, leave it at home.
            </p>
          </div>
        </div>
      </section>

      {/* Tonight Suitability */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Is Tonight a Good Night for Tape?
          </h2>
          <div className="text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
            <p>
              Tape opens Thursday, Friday, and Saturday. Each night has a distinct character, and understanding the difference helps you decide whether tonight is the right night for your group.
            </p>
            <p>
              <strong className="text-white">Thursdays</strong> are often considered the insider favourite. The crowd tends to include more music industry figures and genuine regulars. The atmosphere is slightly more relaxed than the weekend — not in quality, but in intensity. Table availability is better, and last-minute bookings are more achievable. If you are trying to experience Tape for the first time, Thursday gives you the best chance of entry and the most authentic representation of what the club is about.
            </p>
            <p>
              <strong className="text-white">Fridays</strong> bring higher energy and a slightly younger demographic. Tables book out earlier in the week, and the door becomes more selective. The music programming is strong, and the DJs tend to play more aggressively — heavier bass, faster transitions, bigger reactions. Friday at Tape is a commitment to a big night.
            </p>
            <p>
              <strong className="text-white">Saturdays</strong> are the most competitive night. Table minimums may be higher, availability is limited, and the crowd is at its most glamorous. Saturday is when you are most likely to encounter genuine celebrities and when the energy peaks. It is also the hardest night to get in without a booking — plan accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA clubName="Tape London" variant="tonight" heading="Ready to Book Tape Tonight?" />
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
            Explore More
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/clubs/tape-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Tape London Full Guide
            </Link>
            <Link
              href="/clubs-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              All Clubs Open Tonight
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
            <Link
              href="/best-clubs-for-last-minute-tables-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Clubs for Last Minute Tables
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
