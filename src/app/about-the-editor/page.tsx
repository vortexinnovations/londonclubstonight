import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About the Editor — Daniel Whitaker | London Clubs Tonight',
  description:
    'Meet Daniel Whitaker, Nightlife Scout and editor of London Clubs Tonight. He tracks 50+ venues weekly, covering what is open, what is good, and what you can get into tonight.',
  openGraph: {
    title: 'About the Editor — Daniel Whitaker | London Clubs Tonight',
    description:
      'Daniel Whitaker covers tonight-focused London nightlife: event listings, DJ schedules, and last-minute availability across 50+ venues.',
    url: 'https://londonclubstonight.com/about-the-editor',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/about-the-editor',
  },
};

export default function AboutTheEditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Person',
              '@id': 'https://londonclubstonight.com/about-the-editor/#author-daniel',
              name: 'Daniel Whitaker',
              jobTitle: 'Nightlife Scout',
              url: 'https://londonclubstonight.com/about-the-editor/',
              description:
                'Daniel covers tonight-focused nightlife - what is open, what is good, and what you can actually get into right now in London. He tracks event listings, DJ schedules, and last-minute availability.',
              worksFor: {
                '@type': 'Organization',
                name: 'London Clubs Tonight',
                url: 'https://londonclubstonight.com',
              },
              knowsAbout: [
                'London nightlife',
                'Nightclub event listings',
                'Guestlists and last-minute bookings',
                'DJ schedules and club programming',
              ],
            },
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[#888] text-sm uppercase tracking-widest mb-3">About the Editor</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Daniel Whitaker</h1>
        <p className="text-lg text-[#BBB] mb-10">Nightlife Scout, London Clubs Tonight</p>

        <div className="space-y-5 text-[#BBB] leading-relaxed mb-12">
          <p>
            Daniel covers tonight-focused nightlife: what&apos;s open, what&apos;s good, and what
            you can actually get into right now in London. While most nightlife writing looks back
            at where a venue has been, Daniel&apos;s work points at the night ahead, tracking event
            listings, DJ schedules, and last-minute availability so readers can make a decision and
            get out the door.
          </p>
          <p>
            That means a working week spent across the city&apos;s venues and their calendars,
            checking which nights are running, which rooms are filling, and which doors are worth
            your time on any given evening. Every guide on this site is written from that same
            day-of, same-night perspective, and each one carries the date it was last updated.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">What Daniel Covers</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <p className="text-white font-semibold mb-1">Event listings and last-minute bookings</p>
            <p className="text-[#888] text-sm leading-relaxed">
              Specialist coverage of what is on tonight and how to get in late in the day.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <p className="text-white font-semibold mb-1">50+ venues tracked weekly</p>
            <p className="text-[#888] text-sm leading-relaxed">
              A standing watch on London&apos;s club calendars, from Mayfair rooms to the big
              music-led venues.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <p className="text-white font-semibold mb-1">DJ scene and live events</p>
            <p className="text-[#888] text-sm leading-relaxed">
              Programming, residencies, and the one-off bookings that decide where a night is worth
              spending.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <p className="text-white font-semibold mb-1">Day-of and same-night focus</p>
            <p className="text-[#888] text-sm leading-relaxed">
              Guides built for the question people actually ask: where should we go tonight?
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Recent Guides by Daniel</h2>
        <ul className="space-y-3 mb-12">
          <li>
            <Link
              href="/blog/uk-garage-nights-london"
              className="text-[#C0C0C0] underline underline-offset-2 hover:text-white"
            >
              UK Garage Nights in London: Where the Sound Still Lives
            </Link>
          </li>
          <li>
            <Link
              href="/blog/day-parties-in-london"
              className="text-[#C0C0C0] underline underline-offset-2 hover:text-white"
            >
              Day Parties in London: Where to Go When the Sun Is Out
            </Link>
          </li>
          <li>
            <Link
              href="/blog/late-night-food-after-london-clubs"
              className="text-[#C0C0C0] underline underline-offset-2 hover:text-white"
            >
              Late-Night Food in London After Clubs
            </Link>
          </li>
          <li>
            <Link
              href="/blog/getting-home-from-london-clubs"
              className="text-[#C0C0C0] underline underline-offset-2 hover:text-white"
            >
              Getting Home from London Clubs: Transport Options That Work After 3am
            </Link>
          </li>
        </ul>
        <p className="text-[#BBB] leading-relaxed mb-12">
          Browse all of Daniel&apos;s guides on{' '}
          <Link href="/blog" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">
            the blog
          </Link>
          , or see{' '}
          <Link
            href="/best-clubs-this-weekend-london"
            className="text-[#C0C0C0] underline underline-offset-2 hover:text-white"
          >
            what is on this weekend
          </Link>
          .
        </p>

        <div className="bg-[#141414] border border-[#222] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Planning a night out?</h2>
          <p className="text-[#BBB] leading-relaxed mb-6">
            The fastest way to use Daniel&apos;s legwork is to tell us your night and let the team
            point you to the right room, with the guestlist or table sorted before you arrive.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-[#DDD] transition-colors"
          >
            Book a table or join a guestlist
          </Link>
        </div>
      </div>
    </>
  );
}
