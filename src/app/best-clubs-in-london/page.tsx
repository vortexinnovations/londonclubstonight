import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getOpenClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Best Clubs in London 2026 — The Definitive Ranked Guide',
  description:
    'The 14 best nightclubs in London for 2026, ranked by promoters who actually work the doors. From Tape London to Ministry of Sound — honest reviews, table prices, and how to get in.',
  keywords: [
    'best clubs in London',
    'best nightclubs London',
    'top clubs London',
    'best clubs London 2026',
    'best nightclubs in London 2026',
    'top nightclubs London',
    'London best clubs',
    'London nightclub ranking',
  ],
  openGraph: {
    title: 'Best Clubs in London 2026 — The Definitive Ranked Guide',
    description:
      'The 14 best nightclubs in London for 2026, ranked by promoters who work the doors every weekend. Honest, opinionated reviews you won\'t find anywhere else.',
    url: 'https://londonclubstonight.com/best-clubs-in-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Clubs in London 2026 — The Definitive Ranked Guide',
    description:
      'The 14 best nightclubs in London for 2026, ranked by promoters who actually work the doors.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/best-clubs-in-london',
  },
};

const rankedSlugs = [
  'tape-london',
  'cirque-le-soir',
  'ministry-of-sound',
  'the-london-reign',
  'the-box-london',
  'tabu-london',
  'funky-buddha',
  'scotch-of-st-james',
  'cuckoo-club',
  'maddox',
  'luna-club-london',
  'selene-london',
  'dear-darling',
  'beat-london',
];

const clubOpinions: Record<string, string> = {
  'tape-london':
    'Tape sits at number one because no other club in London consistently delivers this calibre of night. The crowd is genuinely A-list — not influencers pretending, actual celebrities and music industry heavyweights. The sound system was built for music production before it was a club, and you can hear the difference. The room is small enough that the energy never dissipates and exclusive enough that everyone in the room has earned their spot. We send our most important clients here because it never disappoints.',
  'cirque-le-soir':
    'There is nothing else like Cirque Le Soir anywhere in the world, and we mean that literally. Fire-breathers, contortionists, acrobats — all happening around you while you drink champagne at your table. It sounds gimmicky on paper but the execution is flawless. The entertainment is genuinely world-class, the music is hard-hitting hip-hop and RnB, and the atmosphere is controlled chaos in the best possible way. Every client we have ever sent here has messaged us the next morning saying it was the best night of their life.',
  'ministry-of-sound':
    'Ministry of Sound is on this list because it has to be. This is not a Mayfair bottle-service club — it is one of the most important nightclubs ever built, and the sound system remains the best in London by a considerable margin. If you care about electronic music, house, or techno, Ministry is a pilgrimage. The Box room on a Saturday night with the right DJ is a religious experience. It earns the number three spot because its influence on global club culture is undeniable and the quality of the nights has not dropped.',
  'the-london-reign':
    'The London Reign pulls off something that sounds impossible: a fine dining restaurant, a West End-quality cabaret show, and a legitimate nightclub, all in one venue over multiple floors. Most places that try the dinner-and-show format feel like a tourist trap. Reign does not. The production values are enormous, the performers are elite, and when the club floor opens up after midnight the party is genuine. It is the best special-occasion venue in London without question.',
  'lio-london':
    'Lio brought the magic of its Ibiza original to Mayfair and somehow did not lose anything in translation. The dinner-show-club format is polished to a degree that most London venues cannot match, with Mediterranean flair and performers who would not be out of place in a Cirque du Soleil production. The international crowd gives it a different energy from the rest of Mayfair — less corporate, more glamorous. If you have been to Lio in Ibiza, you know exactly what to expect. If you have not, prepare to be impressed.',
  'tabu-london':
    'TABU is the hidden gem of this list. The Japanese-underground aesthetic is not a gimmick — every detail of the design has been considered, from the low ceilings to the moody lighting to the custom artwork. The hip-hop programming is among the best in Mayfair, with DJs who genuinely understand the genre rather than playing the same ten tracks on rotation. The room is intimate enough that a busy night feels electric rather than cramped. We rate it this highly because it has real character in a neighbourhood full of identikit clubs.',
  'libertine':
    'Libertine earns its spot by doing something different in Mayfair. While most clubs in the area lean into old-money aesthetics, Libertine went futuristic — clean lines, cutting-edge lighting, and a fashion-forward crowd that actually dresses up because they want to, not because a dress code forced them. The hip-hop and RnB programming is solid, and the venue layout creates natural flow between the bar area and the dancefloor. It is proof that upscale clubbing does not have to feel stuffy.',
  'scotch-of-st-james':
    'Scotch is the most historically significant club on this list. The Rolling Stones, Jimi Hendrix, and The Beatles all walked through these doors. That heritage is not just marketing — you can feel it in the room. The intimate basement setting, the eclectic music programming that spans soul, funk, and hip-hop, and the crowd that skews slightly older and more discerning all contribute to an atmosphere no other London club can replicate. If you want a night with genuine soul, Scotch delivers every time.',
  'cuckoo-club':
    'Cuckoo Club solves the most common argument in any group: what music do we want? With house on one floor and hip-hop on the other, everyone in your party gets what they want without anyone having to compromise. It has been running for years and the consistency is remarkable — the door is well managed, the service is professional, and the nights are reliably good without ever being pretentious. It is not the flashiest club on this list, but it might be the most dependable.',
  'maddox':
    'Maddox carved out a unique position in Mayfair by committing to house music when everyone else was playing hip-hop. The restaurant-to-club format is executed better here than almost anywhere — you have dinner downstairs and the transition to the club feels seamless rather than forced. The house music programming attracts a crowd that actually wants to dance, which gives the room a different energy from the table-service-focused competition. If house is your genre and Mayfair is your postcode, Maddox is the clear choice.',
  'luxx-club':
    'Luxx Club is the most visually spectacular venue on this list. The LED installations are genuinely impressive — not just background decoration but an immersive visual experience that transforms throughout the night. The open-format music policy means the DJ reads the room rather than sticking to one genre, which keeps the energy unpredictable in a good way. It is a strong choice for birthdays and celebrations where you want the venue itself to be part of the event.',
  'dear-darling':
    'Dear Darling occupies the most beautiful room in Mayfair nightlife. The interiors are opulent without being gaudy — think art-deco glamour with a modern edge. It functions best as a cocktail-bar-to-club transition, where you arrive early, drink well, and ease into the late-night atmosphere as the music builds. The crowd is well-dressed and the vibe is more sophisticated than rowdy. It is not the place for an all-out party, but for a glamorous evening that ends with dancing, it is hard to beat.',
  'beat-london':
    'BEAT earns its place on this list through pure musical credibility. The sound system is built for people who actually care about audio quality, and the programming spans hip-hop, house, and open format depending on the night. Located in Fitzrovia rather than Mayfair, it attracts a crowd that prioritises the music over the postcode. When the right DJ is behind the decks and the room is full, BEAT delivers one of the best pure clubbing experiences in central London. It sits at thirteen not because it is bad — every club on this list is excellent — but because the VIP experience is less polished than the venues above it.',
};

export default function BestClubsInLondonPage() {
  const openClubs = getOpenClubs();
  const rankedClubs = rankedSlugs
    .map((slug) => openClubs.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  const articleSchema = getArticleSchema(
    'Best Clubs in London 2026 — The Definitive Ranked Guide',
    'The 13 best nightclubs in London for 2026, ranked by promoters who actually work the doors.',
    '/best-clubs-in-london',
    '2025-01-15'
  );

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <SchemaMarkup schema={articleSchema} />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/gallery/images/fe4414_235143ea0a9946248d902020898bb8cb.jpg"
          alt="Best clubs in London hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/60 to-black/30" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-[0.2em] mb-6">
            Updated for 2026
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            Best Clubs in London
          </h1>
          <p className="text-lg md:text-xl text-[#AAAAAA] leading-relaxed max-w-3xl mx-auto">
            This is not another recycled list from a lifestyle magazine that sends
            a freelancer to one club once a year. We are promoters. We work these
            doors every weekend. We know which clubs are actually worth your time
            and money in 2026 — and which ones are coasting on reputation. Every
            club on this list has been ranked based on hundreds of nights, thousands
            of client bookings, and honest conversations with the people who run
            them.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-[#888]">
            <span>{rankedClubs.length} clubs ranked</span>
            <span className="text-[#333]">|</span>
            <span>Honest reviews from promoters</span>
            <span className="text-[#333]">|</span>
            <span>Updated quarterly</span>
          </div>
        </div>
      </section>

      {/* Ranked List */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-20 md:pb-28">
        <div className="space-y-8 md:space-y-10">
          {rankedClubs.map((club, index) => {
            const rank = index + 1;
            return (
              <article
                key={club.slug}
                id={club.slug}
                className="bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 hover:border-[#333] transition-colors"
              >
                {/* Rank Label */}
                <p className="text-sm font-bold text-[#C0C0C0] tracking-widest uppercase mb-3">
                  #{rank}
                </p>

                {/* Club Name */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-white hover:text-[#C0C0C0] transition-colors"
                  >
                    {club.name}
                  </Link>
                </h2>

                {/* Why It Made the List */}
                <div className="mb-8 text-center max-w-3xl mx-auto">
                  <h3 className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-widest mb-3">
                    Why It Made the List
                  </h3>
                  <p className="text-[#BBB] leading-relaxed">
                    {clubOpinions[club.slug]}
                  </p>
                </div>

                {/* Best For */}
                <div className="max-w-xl mx-auto mb-8">
                  <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-5 text-center">
                    <h4 className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2">
                      Best For
                    </h4>
                    <p className="text-[#BBB] text-sm leading-relaxed">
                      {club.bestFor}
                    </p>
                  </div>
                </div>

                {/* Details Row */}
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-[#BBB] mb-6">
                  <span>{club.musicGenres.join(', ')}</span>
                  <span className="text-[#333]">/</span>
                  <Link
                    href={`/areas/${club.area.toLowerCase().replace(/['\s]+/g, '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {club.area}
                  </Link>
                  <span className="text-[#333]">/</span>
                  <span>Tables from {club.tableMinimum}</span>
                </div>

                {/* Full Review Link */}
                <div className="text-center">
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="inline-block text-sm text-[#C0C0C0] hover:text-white transition-colors"
                  >
                    Full review &rarr;
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Book a Table CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Ready to Book?
          </h2>
          <p className="text-[#BBB] mb-10 max-w-2xl mx-auto leading-relaxed">
            Skip the research. Tell us what kind of night you want — the music,
            the vibe, the budget — and we will put you in the right club with a
            table or guestlist spot sorted. One WhatsApp message is all it takes.
          </p>
          <WhatsAppCTA variant="hero" />
        </div>
      </section>

      {/* How We Ranked These Clubs */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            How We Ranked These Clubs
          </h2>
          <p className="text-[#BBB] leading-relaxed max-w-3xl mx-auto">
            Every ranking is subjective, and we are not pretending otherwise. But
            ours is informed by years of working inside London nightlife, not a
            single visit on a press night. Here are the criteria we used:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Music Quality',
              desc: 'Does the club have a genuine music identity, or does it play the same generic playlist every week? We reward venues that invest in DJs and sound systems.',
            },
            {
              title: 'Atmosphere & Energy',
              desc: 'The intangible factor. Some rooms just feel right when they are full. We prioritise clubs where the energy builds naturally and peaks at the right moment.',
            },
            {
              title: 'Crowd Quality',
              desc: 'Not about wealth or status — about attitude. The best clubs attract people who are there to have a great time, not to be seen or cause problems.',
            },
            {
              title: 'Venue Design',
              desc: 'Interiors, lighting, layout, sound — the physical space matters enormously. A well-designed room elevates every other aspect of the experience.',
            },
            {
              title: 'Service & Experience',
              desc: 'From the moment you arrive to the moment you leave — how well does the venue look after you? Table service, bar speed, and staff attitude all count.',
            },
            {
              title: 'Consistency',
              desc: 'Anyone can have one great night. The clubs at the top of this list deliver excellent nights week after week, month after month. That takes real operational skill.',
            },
          ].map((criterion) => (
            <div
              key={criterion.title}
              className="bg-[#141414] border border-[#222] rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold text-white mb-2">
                {criterion.title}
              </h3>
              <p className="text-[#BBB] text-sm leading-relaxed">
                {criterion.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Book */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            How to Book Any Club on This List
          </h2>
          <p className="text-[#BBB] leading-relaxed max-w-3xl mx-auto">
            We handle bookings for every club ranked above. Whether you want a VIP
            table, a guestlist spot, or just advice on which club suits your group,
            we are one message away. No fees, no mark-ups — we are paid by the
            clubs, so our service is free to you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <div className="text-center">
            <span className="inline-block text-[#C0C0C0] font-bold text-lg mb-1">1.</span>
            <p className="text-[#BBB]">
              <strong className="text-white">Message us on WhatsApp</strong> with
              your preferred club, date, group size, and any preferences.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block text-[#C0C0C0] font-bold text-lg mb-1">2.</span>
            <p className="text-[#BBB]">
              <strong className="text-white">We confirm your booking</strong>{' '}
              directly with the club and send you all the details.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block text-[#C0C0C0] font-bold text-lg mb-1">3.</span>
            <p className="text-[#BBB]">
              <strong className="text-white">Turn up and enjoy</strong> — your
              name is on the list, your table is ready, and we are available all
              night if you need anything.
            </p>
          </div>
        </div>
        <div className="text-center">
          <WhatsAppCTA variant="inline" />
        </div>
      </section>

      {/* Explore More */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28 border-t border-[#222]">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Explore More
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="font-semibold text-white mb-4">By Area</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/areas/mayfair"
                  className="text-[#BBB] hover:text-white transition-colors text-sm"
                >
                  Best clubs in Mayfair &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/soho"
                  className="text-[#BBB] hover:text-white transition-colors text-sm"
                >
                  Best clubs in Soho &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/fitzrovia"
                  className="text-[#BBB] hover:text-white transition-colors text-sm"
                >
                  Best clubs in Fitzrovia &rarr;
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-white mb-4">Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guides/music-genres"
                  className="text-[#BBB] hover:text-white transition-colors text-sm"
                >
                  London clubs by music genre &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/how-to-get-into-london-clubs"
                  className="text-[#BBB] hover:text-white transition-colors text-sm"
                >
                  How to get into London clubs &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#BBB] hover:text-white transition-colors text-sm"
                >
                  Contact us for bookings &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Cross-links to Network */}
        <div className="mt-16 pt-10 border-t border-[#1A1A1A]">
          <h3 className="font-semibold text-white mb-6 text-center">
            From Our Network
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="https://mayfairtonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors block text-center"
            >
              <p className="font-semibold text-white text-sm mb-1">
                Mayfair Tonight
              </p>
              <p className="text-[#888] text-xs">
                Mayfair-specific club events and bookings
              </p>
            </a>
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors block text-center"
            >
              <p className="font-semibold text-white text-sm mb-1">
                London Bottle Service
              </p>
              <p className="text-[#888] text-xs">
                Detailed VIP table pricing and packages
              </p>
            </a>
            <a
              href="https://londonbirthdayclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors block text-center"
            >
              <p className="font-semibold text-white text-sm mb-1">
                London Birthday Club
              </p>
              <p className="text-[#888] text-xs">
                Birthday party planning and club bookings
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center">
          <p className="text-[#888] text-sm mb-5">
            Still not sure which club is right for you?
          </p>
          <WhatsAppCTA variant="inline" />
        </div>
      </section>
    </main>
  );
}
