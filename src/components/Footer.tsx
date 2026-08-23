import Link from 'next/link';

const clubLinks = [
  { href: '/clubs/tape-london', label: 'Tape London' },
  { href: '/clubs/cirque-le-soir', label: 'Cirque Le Soir' },
  { href: '/clubs/the-london-reign', label: 'The London Reign' },
  { href: '/clubs/ministry-of-sound', label: 'Ministry of Sound' },
  { href: '/clubs/tabu-london', label: 'TABU London' },
  { href: '/clubs/funky-buddha', label: 'Funky Buddha' },
  { href: '/clubs/the-box-london', label: 'The Box' },
  { href: '/clubs/luna-club-london', label: 'Luna Club' },
  { href: '/clubs/selene-london', label: 'Selene' },
];

const guideLinks = [
  { href: '/best-clubs-in-london', label: 'Best Clubs in London' },
  { href: '/guides/hardest-clubs-to-get-into', label: 'Most Exclusive Clubs' },
  { href: '/guides/clubs-open-late', label: 'Clubs Open Late' },
  { href: '/guides/how-to-get-into-london-clubs', label: 'Guestlist & Bookings' },
  { href: '/guides/london-clubs-by-music-genre', label: 'Clubs by Genre' },
];

const areaLinks = [
  { href: '/areas/mayfair', label: 'Mayfair Clubs' },
  { href: '/areas/central-london', label: 'Central London Clubs' },
  { href: '/areas/soho', label: 'Soho Clubs' },
];

const blogLinks = [
  { href: '/blog/what-to-wear-to-london-clubs', label: 'What to Wear' },
  { href: '/blog/how-much-does-a-night-out-in-london-cost', label: 'Night Out Costs' },
  { href: '/blog/best-friday-night-clubs-in-london', label: 'Friday Night Clubs' },
  { href: '/blog/best-saturday-night-clubs-in-london', label: 'Saturday Night Clubs' },
  { href: '/blog/london-nightlife-guide-for-tourists', label: 'Tourist Guide' },
];

const tonightLinks = [
  { href: '/clubs-tonight-london', label: 'Clubs Tonight' },
  { href: '/mayfair-clubs-tonight', label: 'Mayfair Tonight' },
  { href: '/best-clubs-this-weekend-london', label: 'Weekend Planner' },
  { href: '/guestlist-tonight-london', label: 'Guestlist Tonight' },
  { href: '/last-minute-table-booking-london', label: 'Last Minute Tables' },
];

const networkLinks = [
  { href: 'https://mayfairtonight.com', label: 'Mayfair Tonight' },
  { href: 'https://londonbottleservice.com', label: 'London Bottle Service' },
  { href: 'https://londonbirthdayclub.com', label: 'London Birthday Club' },
  { href: 'https://londonluxurynightlife.com', label: 'London Luxury Nightlife' },
];

export default function Footer() {
  return (
    <footer className="relative bg-night-900 mt-24 overflow-hidden">
      {/* Gradient accent line above footer */}
      <hr className="hr-glow absolute top-0 left-0 right-0" />
      <div className="glow-orb w-[500px] h-[300px] bg-neon-500/15 -top-40 left-1/2 -translate-x-1/2" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Brand block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-16 border-b border-white/[0.06]">
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="font-display text-2xl font-extrabold tracking-tight text-white leading-none">
                LONDON&nbsp;CLUBS
              </span>
              <span className="font-serif italic text-[1.6rem] leading-none text-gradient">Tonight</span>
              <span className="live-dot ml-1.5 self-center" aria-hidden />
            </div>
            <p className="text-frost-300 text-sm max-w-md leading-relaxed">
              The insider guide to London&apos;s best nightclubs — written by promoters
              who are at these doors every week.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-gradient px-7 py-3 text-sm">
              Book a Table
            </Link>
            <Link href="/clubs-tonight-london" className="btn-ghost px-7 py-3 text-sm">
              What&apos;s On Tonight
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          <div>
            <h3 className="font-display text-white font-bold text-xs mb-5 uppercase tracking-[0.22em]">Tonight</h3>
            <ul className="space-y-3">
              {tonightLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-xs mb-5 uppercase tracking-[0.22em]">Clubs</h3>
            <ul className="space-y-3">
              {clubLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/clubs" className="text-neon-300 hover:text-white text-sm font-medium transition-colors">
                  View All Clubs →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-xs mb-5 uppercase tracking-[0.22em]">Guides</h3>
            <ul className="space-y-3">
              {guideLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-xs mb-5 uppercase tracking-[0.22em]">Areas</h3>
            <ul className="space-y-3">
              {areaLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-xs mb-5 uppercase tracking-[0.22em]">Blog</h3>
            <ul className="space-y-3">
              {blogLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-neon-300 hover:text-white text-sm font-medium transition-colors">
                  All Articles →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-xs mb-5 uppercase tracking-[0.22em]">Our Network</h3>
            <ul className="space-y-3">
              {networkLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-frost-400 hover:text-neon-200 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-frost-400 text-sm">
            © {new Date().getFullYear()} London Clubs Tonight. The definitive guide to London&apos;s best nightclubs.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/contact" className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
              Contact
            </Link>
            <Link href="/best-clubs-in-london" className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
              Best Clubs
            </Link>
            <Link href="/about-the-editor" className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-frost-400 hover:text-neon-200 text-sm transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
