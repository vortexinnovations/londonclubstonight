import type { Metadata } from 'next';
import { clubs } from '@/lib/clubs';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Clubs Open Late in London — Your Guide to Late Night London',
  description: 'Every London club grouped by closing time. Find venues open until 3am, 3:30am, and 6am. Your guide to keeping the night going in London.',
  keywords: ['clubs open late London', 'late night clubs London', 'clubs open until 6am London', 'after hours London', 'late night London'],
  alternates: {
    canonical: 'https://londonclubstonight.com/guides/clubs-open-late',
  },
};

const closingGroups = [
  {
    time: '6:00am',
    label: 'Open Until 6am',
    description: 'The only venue in London where you can dance until sunrise.',
    slugs: ['ministry-of-sound'],
  },
  {
    time: '3:30am',
    label: 'Open Until 3:30am',
    description: 'The standard late-night option for most of London\'s best clubs. Plenty of time to have a proper night.',
    slugs: ['tape-london', 'cirque-le-soir', 'tabu-london', 'libertine', 'luxx-club', 'beat-london'],
  },
  {
    time: '3:00am',
    label: 'Open Until 3am',
    description: 'Closing half an hour earlier, but still late enough for a full night out.',
    slugs: ['the-london-reign', 'maddox', 'scotch-of-st-james', 'cuckoo-club', 'lio-london'],
  },
  {
    time: '2:30am',
    label: 'Open Until 2:30am',
    description: 'Earlier close, so plan accordingly if you want a longer night.',
    slugs: ['dear-darling'],
  },
];

export default function ClubsOpenLatePage() {
  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema(
          'Clubs Open Late in London — Your Guide to Late Night London',
          'Every London club grouped by closing time. Find venues open until 3am, 3:30am, and 6am.',
          '/guides/clubs-open-late',
          '2025-01-01'
        )}
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
            Clubs Open Late in London
          </h1>
          <p className="text-[#999] text-lg mb-6 max-w-2xl">
            It is 1am, the bar has kicked you out, and the night is still young. Here is where you can go and how late you can stay.
          </p>
          <p className="text-[#999] text-sm mb-12 max-w-2xl">
            All closing times listed are standard. Special events and bank holiday weekends may extend hours. Check with us on WhatsApp for the latest on any specific night.
          </p>

          {/* Quick Reference */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-white mb-4">Quick Reference</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {closingGroups.map((group) => (
                <div key={group.time} className="text-center">
                  <div className="text-2xl font-bold text-[#C0C0C0]">{group.time.replace(':00', '')}</div>
                  <div className="text-[#666] text-xs mt-1">{group.slugs.length} {group.slugs.length === 1 ? 'venue' : 'venues'}</div>
                </div>
              ))}
            </div>
          </div>

          {closingGroups.map((group) => (
            <div key={group.time} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl font-bold text-white">{group.label}</h2>
                <div className="h-px flex-1 bg-[#222]" />
              </div>
              <p className="text-[#999] text-sm mb-6">{group.description}</p>

              <div className="grid gap-4">
                {group.slugs.map((slug) => {
                  const club = clubs.find(c => c.slug === slug);
                  if (!club) return null;

                  const isMinistry = club.slug === 'ministry-of-sound';

                  return (
                    <div
                      key={club.slug}
                      className={`bg-[#141414] border rounded-xl p-6 ${isMinistry ? 'border-[#C0C0C0]/30' : 'border-[#222]'}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div>
                          <Link href={`/clubs/${club.slug}`} className="text-xl font-bold text-white hover:text-[#C0C0C0] transition-colors">
                            {club.name}
                          </Link>
                          <p className="text-[#666] text-sm mt-1">{club.area} &middot; {club.musicGenres.join(', ')}</p>
                        </div>
                        <span className="text-[#C0C0C0] font-mono font-bold text-lg whitespace-nowrap">
                          {club.closingTime}
                        </span>
                      </div>

                      {isMinistry && (
                        <div className="bg-[#C0C0C0]/5 border border-[#C0C0C0]/20 rounded-lg p-4 mb-4">
                          <p className="text-[#C0C0C0] text-sm font-semibold mb-1">London&apos;s latest club</p>
                          <p className="text-[#999] text-sm">
                            Ministry of Sound is the only venue on this list open until 6am. On special event nights, it can run even later. If your sole priority is staying out as late as possible, this is where you go. Buy tickets in advance online — entry is straightforward compared to the Mayfair clubs.
                          </p>
                        </div>
                      )}

                      <p className="text-[#999] text-sm leading-relaxed mb-3">{club.description}</p>

                      <div className="flex flex-wrap gap-4 text-xs text-[#666]">
                        <span>{club.openingNights}</span>
                        <span>&middot;</span>
                        <span>Entry: {club.entryDifficulty}</span>
                        <span>&middot;</span>
                        <span>Tables from {club.tableMinimum}</span>
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

          {/* Practical Advice */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Practical Advice for Late-Night London</h2>
            <div className="space-y-4 text-[#999] leading-relaxed text-sm">
              <div>
                <h3 className="text-white font-semibold mb-2">If you are already out and need somewhere</h3>
                <p>
                  Message us on WhatsApp. Seriously. Trying to walk into a club at 1am without any arrangement is the hardest way to do it. We can get you on a guestlist or arrange a last-minute table at most venues with very little notice.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Arrival time matters</h3>
                <p>
                  Most clubs hit peak capacity between midnight and 1:30am. If you are moving on from somewhere else and arrive at 2am, some venues will already be at capacity and will not let anyone new in, regardless of your booking. The later you leave it, the fewer options you have.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Transport home</h3>
                <p>
                  Night tubes run on Friday and Saturday nights on select lines. Uber surge pricing peaks between 2am and 4am. If you are staying until 6am at Ministry of Sound, the first morning tubes will be running by the time you leave, and buses run 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6 sm:p-8 mb-12 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Need somewhere tonight?
            </h2>
            <p className="text-[#999] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. Tell us what time you want to go out and we will find you the best option that is still open.
            </p>
            <WhatsAppCTA />
          </div>

          {/* Related Links */}
          <div className="border-t border-[#222] pt-8">
            <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                Hardest Clubs to Get Into &rarr;
              </Link>
              <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                How to Get Into London Clubs &rarr;
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
