import type { Metadata } from 'next';
import { clubs } from '@/lib/clubs';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'London Clubs by Music Genre — Hip-Hop, House, RnB & More',
  description: 'Find the right London club for your music taste. Hip-hop, house, RnB, techno, and open format — every venue categorised by what they actually play.',
  keywords: ['hip hop clubs London', 'house music clubs London', 'RnB clubs London', 'open format clubs London', 'techno clubs London'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides/london-clubs-by-music-genre',
  },
};

const genreSections = [
  {
    id: 'hip-hop-rnb',
    title: 'Hip-Hop & RnB',
    description: 'The dominant sound across most of London\'s Mayfair clubs. If you want hip-hop, you have the most options — the question is which venue suits your style and budget.',
    slugs: ['tape-london', 'cirque-le-soir', 'tabu-london', 'funky-buddha', 'luna-club-london', 'beat-london', 'cuckoo-club'],
    notes: [
      { slug: 'tape-london', note: 'The gold standard for hip-hop in an intimate, exclusive setting. The sound system was originally designed for music production and the difference is audible.' },
      { slug: 'cirque-le-soir', note: 'Hip-hop and RnB played loud over circus entertainment. The music is the backdrop to the spectacle — expect current hits and crowd-pleasers rather than deep cuts.' },
      { slug: 'tabu-london', note: 'Arguably the purest hip-hop experience in Mayfair. The Japanese underground theme combined with focused hip-hop programming makes this feel different from the rest.' },
      { slug: 'funky-buddha', note: 'The legendary name carries a fun, accessible hip-hop and RnB soundtrack. DJs play crowd-pleasers and classics alongside current hits — the kind of music that gets everyone moving.' },
      { slug: 'luna-club-london', note: 'A newer addition with a global edge — hip-hop and RnB blended with Afrobeats and amapiano. The production setup and lighting add a theatrical dimension to the music.' },
      { slug: 'beat-london', note: 'The sound system makes the hip-hop hit harder here than almost anywhere else. This is a venue for people who care about audio quality.' },
      { slug: 'cuckoo-club', note: 'The downstairs room at Cuckoo is dedicated hip-hop and RnB — louder, more energetic, and younger. The upstairs room is house music if you want a break.' },
    ],
    bestFor: 'Tape London for exclusivity and sound quality, TABU for a focused hip-hop experience, BEAT for the best sound system, Cuckoo Club downstairs for a high-energy party.',
  },
  {
    id: 'house',
    title: 'House Music',
    description: 'Fewer options than hip-hop in central London, but the venues that do house music tend to do it very well. If house is your thing, these are your spots.',
    slugs: ['maddox', 'cuckoo-club', 'ministry-of-sound'],
    notes: [
      { slug: 'maddox', note: 'The strongest house music identity in Mayfair. The restaurant-to-club transition means the house music crowd arrives late and committed. Friday nights are particularly strong for house programming.' },
      { slug: 'cuckoo-club', note: 'The upstairs room at Cuckoo runs house and more sophisticated electronic music. More refined atmosphere than the hip-hop room downstairs.' },
      { slug: 'ministry-of-sound', note: 'The best house music in London, full stop. The sound system is world-class, the DJ bookings are headline-calibre, and the crowd is there specifically for the music. Multiple rooms mean you can explore different subgenres in one night.' },
    ],
    bestFor: 'Ministry of Sound for a dedicated, world-class house music experience. Maddox for house music in a Mayfair setting with the dinner-to-club transition.',
  },
  {
    id: 'electronic-techno',
    title: 'Electronic & Techno',
    description: 'London has a rich techno scene, but it is largely concentrated outside the Mayfair club circuit. For proper techno, one venue stands above the rest.',
    slugs: ['ministry-of-sound'],
    notes: [
      { slug: 'ministry-of-sound', note: 'The home of electronic music in London since 1991. The main room handles the biggest techno and electronic acts, while secondary rooms explore different subgenres. The custom-built sound system is one of the best in the world for electronic music. Special event nights bring international headliners. This is where London\'s electronic music scene lives and breathes.' },
    ],
    bestFor: 'Ministry of Sound is the only serious option for techno and electronic music on this list. If this is your genre, nowhere else comes close.',
  },
  {
    id: 'open-format',
    title: 'Open Format',
    description: 'Open format means the DJ plays across genres — hip-hop, house, pop, RnB, dance — reading the room and adjusting. These clubs prioritise energy over genre purity.',
    slugs: ['luna-club-london', 'the-london-reign', 'selene-london', 'beat-london'],
    notes: [
      { slug: 'luna-club-london', note: 'The production setup pairs well with the open format approach. DJs move fluidly between hip-hop, RnB, Afrobeats, and amapiano, creating a global sound that keeps the energy high all night.' },
      { slug: 'the-london-reign', note: 'The showclub format means the music shifts throughout the evening — from sophisticated dinner accompaniment to full party energy. Expect mainstream hits, pop, RnB, and crowd-pleasers.' },
      { slug: 'selene-london', note: 'Elegant cocktail-bar-to-club concept with a sophisticated house soundtrack. The refined setting means the music enhances the atmosphere rather than dominating it — perfect for the grown-up crowd.' },
      { slug: 'beat-london', note: 'Open format delivered through one of London\'s best sound systems. The DJs vary by night but the consistent thread is energy and quality audio.' },
    ],
    bestFor: 'Luna Club for energy and visuals, Reign for the theatrical dinner-to-club experience, Selene for sophisticated house-leaning nights, BEAT for pure audio quality.',
  },
];

export default function MusicGenrePage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'London Clubs by Music Genre — Hip-Hop, House, RnB & More',
          'Find the right London club for your music taste. Every venue categorised by what they actually play.',
          '/guides/london-clubs-by-music-genre',
          '2025-01-01'
        )}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="mb-4 flex gap-4 text-sm">
            <Link href="/" className="text-[#999] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#666]">/</span>
            <Link href="/guides" className="text-[#999] hover:text-white transition-colors">
              Guides
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            London Clubs by Music Genre
          </h1>
          <p className="text-center text-[#999] max-w-2xl mx-auto mb-12">
            Finding the right club is as much about the music as the venue. Here is every club categorised by what they actually play, with honest assessments of which is best for each genre.
          </p>

          {/* Quick Jump */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mb-12">
            <h2 className="text-sm font-semibold text-[#C0C0C0] mb-3 text-center">Jump to genre</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {genreSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[#999] hover:text-white text-sm px-3 py-1 border border-[#222] rounded-full hover:border-[#C0C0C0]/30 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {genreSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">{section.title}</h2>
              <p className="text-center text-[#999] max-w-2xl mx-auto mb-12">{section.description}</p>

              <div className="grid gap-6 mb-6">
                {section.notes.map(({ slug, note }) => {
                  const club = clubs.find(c => c.slug === slug);
                  if (!club) return null;
                  return (
                    <div key={slug} className="bg-[#141414] border border-[#222] rounded-2xl p-7">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div>
                          <Link href={`/clubs/${club.slug}`} className="text-lg font-bold text-white hover:text-[#C0C0C0] transition-colors">
                            {club.name}
                          </Link>
                          <p className="text-[#666] text-sm mt-1">
                            {club.area} &middot; {club.musicGenres.join(', ')} &middot; Closes {club.closingTime}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#999] text-sm leading-relaxed">{note}</p>
                      <div className="mt-3">
                        <Link href={`/clubs/${club.slug}`} className="text-[#C0C0C0] text-sm hover:text-white transition-colors">
                          Full club profile &rarr;
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#0A0A0A] border border-[#222] rounded-2xl p-7">
                <p className="text-sm">
                  <span className="text-[#C0C0C0] font-semibold">Best for {section.title.toLowerCase()}: </span>
                  <span className="text-[#999]">{section.bestFor}</span>
                </p>
              </div>
            </section>
          ))}

          {/* Summary */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">The Bottom Line</h2>
            <p className="text-center text-[#999] max-w-2xl mx-auto mb-8">A quick summary to help you choose.</p>
            <div className="space-y-4 text-[#999] text-sm leading-relaxed">
              <p>
                If hip-hop is your thing, you have the most choice — nearly every Mayfair club leans that direction. The differences come down to exclusivity (Tape), atmosphere (TABU, Cirque), and sound quality (BEAT).
              </p>
              <p>
                If house music is what you want, Maddox is your best Mayfair option, but Ministry of Sound is where the serious house heads go. The gap in sound quality and DJ calibre between Ministry and everywhere else is significant.
              </p>
              <p>
                If you are a group with mixed music tastes, open format venues like Luna Club, Reign, and BEAT will keep everyone happy. Cuckoo Club also works because the two floors cover both house and hip-hop.
              </p>
              <p>
                If electronic and techno is your genre, Ministry of Sound is the only serious option on this list. London has other techno venues beyond our coverage, but within this selection, Ministry is unmatched.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 mb-12 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Not sure which club suits your taste?
            </h2>
            <p className="text-[#999] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. Tell us what music you like and we will recommend the right venue and sort your guestlist or table booking.
            </p>
            <WhatsAppCTA />
          </div>

          {/* Related Links */}
          <div className="border-t border-[#222] pt-8">
            <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                London&apos;s Most Exclusive Clubs &rarr;
              </Link>
              <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                Guestlists &amp; Table Bookings Guide &rarr;
              </Link>
              <Link href="/guides/clubs-open-late" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                Clubs Open Late in London &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
