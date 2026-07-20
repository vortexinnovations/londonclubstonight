import type { Metadata } from 'next';
import Image from 'next/image';
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

      <div className="min-h-screen">
        <section className="relative min-h-[40vh] flex items-end overflow-hidden">
          <Image
            src="/gallery/images/fe4414_22bea265d7434a9990ce468023444910.jpg"
            alt="Late night London clubs hero background"
            fill
            className="object-cover animate-slow-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
          <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
            <div className="animate-fade-up mb-5 flex gap-4 text-sm">
              <Link href="/" className="text-frost-400 hover:text-neon-200 transition-colors">
                Home
              </Link>
              <span className="text-frost-500">/</span>
              <Link href="/guides" className="text-frost-400 hover:text-neon-200 transition-colors">
                Guides
              </Link>
            </div>

            <span className="chip chip-accent animate-fade-up anim-delay-1 mb-5">
              <span className="live-dot scale-75" aria-hidden />
              AFTER HOURS
            </span>
            <h1 className="animate-fade-up anim-delay-2 font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Clubs Open <span className="serif-accent text-gradient">Late</span> in London
            </h1>
            <p className="animate-fade-up anim-delay-3 text-frost-100/85 max-w-2xl mb-6">
              It is 1am, the bar has kicked you out, and the night is still young. Here is where you can go and how late you can stay.
            </p>
            <p className="animate-fade-up anim-delay-4 text-frost-300 text-sm max-w-2xl">
              All closing times listed are standard. Special events and bank holiday weekends may extend hours. Check with us on WhatsApp for the latest on any specific night.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
          {/* Quick Reference */}
          <div className="glass-card p-7 mb-12">
            <h2 className="font-display text-lg font-extrabold tracking-tight text-white mb-4 text-center">Quick Reference</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {closingGroups.map((group) => (
                <div key={group.time} className="text-center">
                  <div className="font-display text-2xl font-extrabold tracking-tight text-gradient">{group.time.replace(':00', '')}</div>
                  <div className="text-frost-500 text-xs mt-1">{group.slugs.length} {group.slugs.length === 1 ? 'venue' : 'venues'}</div>
                </div>
              ))}
            </div>
          </div>

          {closingGroups.map((group) => (
            <div key={group.time} className="mb-12">
              <span className="eyebrow">{group.time}</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3 mb-4">{group.label}</h2>
              <p className="text-frost-300 max-w-2xl mb-10">{group.description}</p>

              <div className="grid gap-6">
                {group.slugs.map((slug) => {
                  const club = clubs.find(c => c.slug === slug);
                  if (!club) return null;

                  const isMinistry = club.slug === 'ministry-of-sound';

                  return (
                    <div
                      key={club.slug}
                      className={`glass-card p-7 ${isMinistry ? 'border-neon-400/35' : ''}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div>
                          <Link href={`/clubs/${club.slug}`} className="font-display text-xl font-bold tracking-tight text-white hover:text-neon-200 transition-colors">
                            {club.name}
                          </Link>
                          <p className="text-frost-500 text-sm mt-1">{club.area} &middot; {club.musicGenres.join(', ')}</p>
                        </div>
                        <span className="text-neon-300 font-mono font-bold text-lg whitespace-nowrap">
                          {club.closingTime}
                        </span>
                      </div>

                      {isMinistry && (
                        <div className="bg-neon-500/10 border border-neon-400/25 rounded-lg p-4 mb-4">
                          <p className="text-neon-200 text-sm font-semibold mb-1">London&apos;s latest club</p>
                          <p className="text-frost-300 text-sm">
                            Ministry of Sound is the only venue on this list open until 6am. On special event nights, it can run even later. If your sole priority is staying out as late as possible, this is where you go. Buy tickets in advance online.
                          </p>
                        </div>
                      )}

                      <p className="text-frost-300 text-sm leading-relaxed mb-3">{club.description}</p>

                      <div className="flex flex-wrap gap-4 text-xs text-frost-500">
                        <span>{club.openingNights}</span>
                        <span>&middot;</span>
                        <span>Tables from {club.tableMinimum}</span>
                      </div>

                      <div className="mt-4">
                        <Link href={`/clubs/${club.slug}`} className="text-neon-300 text-sm font-semibold hover:text-white transition-colors">
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
          <div className="glass-card section-glow p-7 mb-12">
            <span className="eyebrow">Insider tips</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3 mb-4">Practical Advice for Late-Night London</h2>
            <p className="text-frost-300 max-w-2xl mb-8">Tips for making the most of your late night out.</p>
            <div className="space-y-4 text-frost-300 leading-relaxed text-sm">
              <div>
                <h3 className="font-display font-bold tracking-tight text-white mb-2">If you are already out and need somewhere</h3>
                <p>
                  Message us on WhatsApp. We can get you on a guestlist or arrange a last-minute table at most venues with very little notice.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold tracking-tight text-white mb-2">Arrival time matters</h3>
                <p>
                  Most clubs hit peak capacity between midnight and 1:30am. If you are moving on from somewhere else and arrive at 2am, some venues will already be at capacity. The earlier you arrange your guestlist or table, the better.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold tracking-tight text-white mb-2">Transport home</h3>
                <p>
                  Night tubes run on Friday and Saturday nights on select lines. Uber surge pricing peaks between 2am and 4am. If you are staying until 6am at Ministry of Sound, the first morning tubes will be running by the time you leave, and buses run 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="glass-card relative overflow-hidden p-7 mb-12 text-center">
            <div className="glow-orb w-[360px] h-[260px] bg-glow-500/15 -top-24 left-1/3" aria-hidden />
            <div className="relative">
            <h2 className="font-display text-xl font-extrabold tracking-tight text-white mb-3">
              Need somewhere tonight?
            </h2>
            <p className="text-frost-300 mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. Tell us what time you want to go out and we will find you the best option that is still open.
            </p>
            <WhatsAppCTA />
            </div>
          </div>

          {/* Related Links */}
          <div className="border-t border-white/[0.06] pt-8">
            <h2 className="font-display text-lg font-extrabold tracking-tight text-white mb-4">Related Guides</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides/hardest-clubs-to-get-into" className="text-neon-300 hover:text-white text-sm transition-colors">
                London&apos;s Most Exclusive Clubs &rarr;
              </Link>
              <Link href="/guides/how-to-get-into-london-clubs" className="text-neon-300 hover:text-white text-sm transition-colors">
                Guestlists &amp; Table Bookings Guide &rarr;
              </Link>
              <Link href="/guides/london-clubs-by-music-genre" className="text-neon-300 hover:text-white text-sm transition-colors">
                London Clubs by Music Genre &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
