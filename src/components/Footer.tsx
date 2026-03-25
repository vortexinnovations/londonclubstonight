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

const networkLinks = [
  { href: 'https://mayfairtonight.com', label: 'Mayfair Tonight' },
  { href: 'https://londonbottleservice.com', label: 'London Bottle Service' },
  { href: 'https://londonbirthdayclub.com', label: 'London Birthday Club' },
  { href: 'https://londonluxurynightlife.com', label: 'London Luxury Nightlife' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080808] mt-20">
      {/* Subtle gradient accent line above footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Clubs</h3>
            <ul className="space-y-3">
              {clubLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/clubs" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                  View All Clubs →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Guides</h3>
            <ul className="space-y-3">
              {guideLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Areas</h3>
            <ul className="space-y-3">
              {areaLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Blog</h3>
            <ul className="space-y-3">
              {blogLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-[#C0C0C0] hover:text-white text-sm transition-colors">
                  All Articles →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Our Network</h3>
            <ul className="space-y-3">
              {networkLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222] pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-[#666] text-sm">
            © {new Date().getFullYear()} London Clubs Tonight. The definitive guide to London&apos;s best nightclubs.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors">
              Contact
            </Link>
            <Link href="/best-clubs-in-london" className="text-[#666] hover:text-[#C0C0C0] text-sm transition-colors">
              Best Clubs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
