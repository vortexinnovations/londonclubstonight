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
  { href: '/guides/hardest-clubs-to-get-into', label: 'Hardest to Get Into' },
  { href: '/guides/clubs-open-late', label: 'Clubs Open Late' },
  { href: '/guides/how-to-get-into-london-clubs', label: 'How to Get In' },
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
    <footer className="bg-[#080808] border-t border-[#222] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Clubs</h3>
            <ul className="space-y-2">
              {clubLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-white text-sm transition-colors">
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
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Guides</h3>
            <ul className="space-y-2">
              {guideLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Areas</h3>
            <ul className="space-y-2">
              {areaLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Blog</h3>
            <ul className="space-y-2">
              {blogLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-white text-sm transition-colors">
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
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Our Network</h3>
            <ul className="space-y-2">
              {networkLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#666] text-sm">
            © {new Date().getFullYear()} London Clubs Tonight. The definitive guide to London&apos;s best nightclubs.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-[#666] hover:text-white text-sm transition-colors">
              Contact
            </Link>
            <Link href="/best-clubs-in-london" className="text-[#666] hover:text-white text-sm transition-colors">
              Best Clubs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
