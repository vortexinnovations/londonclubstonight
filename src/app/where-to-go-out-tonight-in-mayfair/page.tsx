import type { Metadata } from 'next';
import Link from 'next/link';
import { getClubsByArea } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Where to Go Out Tonight in Mayfair — Tonight's Best Options",
  description:
    "Insider guide to going out in Mayfair tonight. Which clubs are open, what to expect, how to get in, and where the best nights are happening right now in London's most exclusive postcode.",
  keywords: [
    'Mayfair tonight',
    'going out in Mayfair tonight',
    'Mayfair clubs tonight',
    'where to go out Mayfair',
    'Mayfair nightlife tonight',
    'best Mayfair club tonight',
    'Mayfair nightclubs open tonight',
    'nights out in Mayfair',
  ],
  openGraph: {
    title: "Where to Go Out Tonight in Mayfair — Tonight's Best Options",
    description:
      "Insider guide to going out in Mayfair tonight. Which clubs are open and where the best nights are happening in London's most exclusive postcode.",
    url: 'https://londonclubstonight.com/where-to-go-out-tonight-in-mayfair',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Where to Go Out Tonight in Mayfair — Tonight's Best Options",
    description:
      'Insider guide to going out in Mayfair tonight. Which clubs are open and where the best nights are happening.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/where-to-go-out-tonight-in-mayfair',
  },
};

const faqs = [
  {
    question: 'What clubs are open in Mayfair tonight?',
    answer:
      'Mayfair clubs typically open Thursday through Saturday. The main venues include Tape London, TABU, Dear Darling, Maddox, Cuckoo Club, and Funky Buddha. Some venues also open on Wednesdays. The exact lineup depends on the night of the week — message us on WhatsApp for a real-time check on what is open and available tonight.',
  },
  {
    question: 'What should I wear to go out in Mayfair?',
    answer:
      'Mayfair has the strictest dress codes in London. Smart is the minimum standard across all venues. For men: tailored trousers, smart shoes, a collared shirt or well-fitted top. No trainers, sportswear, or casual jeans. For women: heels and a dress or smart outfit. The standard is set by the crowd — think designer labels, not high street casual.',
  },
  {
    question: 'Do I need a booking for Mayfair clubs?',
    answer:
      'For most Mayfair clubs, a table booking or guestlist arrangement is strongly recommended. Walk-in entry is possible at some venues but unreliable, especially on Fridays and Saturdays. Having a promoter connection significantly increases your chances. Tables typically start from £1,000 minimum spend.',
  },
  {
    question: 'How much does a night out in Mayfair cost?',
    answer:
      'Mayfair is premium pricing. Tables start from £1,000 minimum spend. Cocktails run £16-25 each. A guestlist entry (where available) may save you a cover charge but you will still be paying premium drink prices inside. Budget at least £100-150 per person for a standard night, significantly more if you are booking a table.',
  },
];

export default function WhereToGoOutTonightInMayfairPage() {
  const mayfairClubs = getClubsByArea('Mayfair');

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            "Where to Go Out Tonight in Mayfair — Tonight's Best Options",
            "Insider guide to going out in Mayfair tonight. Which clubs are open, what to expect, and where the best nights are happening.",
            '/where-to-go-out-tonight-in-mayfair',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-widest mb-6">
            Tonight in Mayfair
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Where to Go Out Tonight in Mayfair
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Mayfair is the epicentre of London nightlife. Here is what is happening tonight, who is open, and how to make the most of the best postcode in the city.
          </p>
          <WhatsAppCTA variant="tonight" heading="Going Out in Mayfair Tonight?" />
        </div>
      </section>

      {/* Understanding Mayfair Tonight */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Understanding Mayfair Nightlife
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Going out in Mayfair tonight is not the same as going out anywhere else in London. The rules are different, the expectations are higher, and the rewards — when you get it right — are genuinely special. This is the neighbourhood where London&apos;s most exclusive clubs cluster, where the dress codes are enforced with conviction, and where a well-planned night becomes an experience that lives in memory.
            </p>
            <p>
              The first thing to understand is that Mayfair clubs are not interchangeable. Each venue has a distinct personality, a specific crowd, and a musical identity that sets it apart. Choosing the right club for your group tonight means understanding these differences — not just picking the most famous name.
            </p>
            <p>
              Tape London is the pinnacle of exclusivity. A members club on Hanover Square where the crowd genuinely includes celebrities and the sound system is among the best in the world. If you want the most exclusive experience Mayfair offers, this is it — but you will need a table booking or a very good reason to be at the door.
            </p>
            <p>
              TABU brings a completely different energy. The Japanese underground aesthetic creates an atmosphere that is both intimate and intense, with hip-hop programming that caters to genuine music lovers rather than tourists. The crowd is younger, more fashion-forward, and less concerned with VIP posturing.
            </p>
            <p>
              Dear Darling takes yet another approach — starting your evening with genuinely excellent cocktails in a gilded, opulent setting before transitioning into a late-night venue. It is the best option for groups that want the evening to build gradually rather than arriving at a club cold at midnight.
            </p>
            <p>
              Maddox is the house music stronghold of Mayfair. While most Mayfair clubs lean heavily into hip-hop and RnB, Maddox has committed to a sound that attracts a crowd who actually want to dance. The restaurant-to-club format is polished, and the transition between the two feels natural.
            </p>
            <p>
              The Cuckoo Club solves the most common group argument by offering house music on one floor and hip-hop on the other. It is perhaps the most consistently reliable night out in Mayfair — never the most fashionable, but never disappointing either.
            </p>
            <p>
              Funky Buddha remains one of the most prestigious names in Mayfair nightlife. The heritage of the venue — decades of celebrity patronage and cultural significance — gives it a weight that newer clubs cannot match. Fridays and Saturdays here have a particular energy that longtime London clubbers recognise immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Tonight's Options */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Mayfair Clubs
          </h2>
          <p className="text-[#BBB] text-center mb-12 max-w-2xl mx-auto">
            Here are the Mayfair venues. Check their opening nights against tonight and message us for real-time availability.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {mayfairClubs.map((club) => (
              <TonightClubCard key={club.slug} club={club} showGuestlistStatus showTableCTA />
            ))}
          </div>
        </div>
      </section>

      {/* How to Get In */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How to Actually Get Into Mayfair Clubs Tonight
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Mayfair door policies are the most discussed topic in London nightlife, and for good reason. Every venue here operates a selective door, and the level of selectivity varies from firm-but-fair to genuinely elite. Understanding how the system works gives you a real advantage.
            </p>
            <p>
              <strong className="text-white">Book a table.</strong> This is the most reliable approach across all Mayfair venues. A table reservation guarantees your entry, removes the stress of door assessments, and lets you focus on the night itself. Tables start from £1,000 at most venues, which splits reasonably across a group of four or more.
            </p>
            <p>
              <strong className="text-white">Use a promoter for guestlist.</strong> Where guestlist is available — TABU, Cuckoo Club, Dear Darling, and others — going through a promoter is significantly more effective than enquiring directly. Promoters have allocated spots and established relationships with door teams. Message us on WhatsApp and we handle the guestlist process for you.
            </p>
            <p>
              <strong className="text-white">Dress the part.</strong> This is not optional in Mayfair. Smart shoes, tailored clothing, and a sense of occasion are the minimum. If you are unsure about any item, upgrade it. The door team makes fast decisions based on appearance, and there is rarely a second chance.
            </p>
            <p>
              <strong className="text-white">Group composition matters.</strong> Mixed groups of men and women fare significantly better than all-male groups at every Mayfair venue. If your group is all male, a table booking moves from recommended to essential.
            </p>
            <p>
              For a deeper look at Mayfair nightlife, visit{' '}
              <a
                href="https://mayfairtonight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-white underline underline-offset-4"
              >
                mayfairtonight.com
              </a>
              , our dedicated guide to the area.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Tonight */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What to Expect From a Night Out in Mayfair
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              A typical Mayfair night follows a rhythm. Doors open between 10pm and 11pm, but the venues do not truly fill until midnight. Arriving between 11pm and midnight is the sweet spot — you avoid the empty-room awkwardness of arriving too early while securing a good position before the peak.
            </p>
            <p>
              Most Mayfair clubs close between 2:30am and 3:30am. This is significantly earlier than the clubs in South London or East London, so pace your night accordingly. The peak energy window is typically midnight to 2am — arrive too late and you have missed the best of it.
            </p>
            <p>
              The music across Mayfair is predominantly hip-hop and RnB, with house music at Maddox being the notable exception. DJs at Mayfair clubs read the room and play to the crowd — expect mainstream tracks mixed with deeper cuts, depending on the venue. Sound quality varies but Tape, TABU, and BEAT (nearby in Fitzrovia) consistently deliver the best audio experiences.
            </p>
            <p>
              Drinks are expensive by any standard. Cocktails start around £16 and premium options run significantly higher. If you have a table, your minimum spend covers bottles and mixers — Grey Goose, Belvedere, or Ciroc are the standard vodka options, with champagne and premium spirits available at higher price points.
            </p>
            <p>
              The atmosphere in Mayfair is different from other parts of London. There is a heightened sense of occasion — people dress better, present themselves more carefully, and treat the night as an event rather than a casual outing. Whether you find this exciting or exhausting is a matter of personal taste, but there is no denying that Mayfair delivers a polished, premium night out that few other areas can match.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA variant="tonight" heading="Let Us Sort Your Mayfair Night" />
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
              href="/mayfair-clubs-tonight"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Mayfair Clubs Tonight
            </Link>
            <Link
              href="/areas/mayfair"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Mayfair Area Guide
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
            <a
              href="https://mayfairtonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Mayfair Tonight Guide
            </a>
            <Link
              href="/can-you-get-into-tape-london-tonight"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Getting Into Tape Tonight
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
