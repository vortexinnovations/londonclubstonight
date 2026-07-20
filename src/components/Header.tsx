'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/clubs-tonight-london', label: 'Tonight' },
  { href: '/best-clubs-in-london', label: 'Best Clubs' },
  { href: '/clubs', label: 'All Clubs' },
  { href: '/guides/london-clubs-by-music-genre', label: 'By Genre' },
  { href: '/areas', label: 'By Area' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-night-950/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-night-950/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="group flex items-baseline gap-1.5" aria-label="London Clubs Tonight — home">
            <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-white leading-none">
              LONDON&nbsp;CLUBS
            </span>
            <span className="font-serif italic text-[1.45rem] leading-none text-gradient">
              Tonight
            </span>
            <span className="live-dot ml-1.5 self-center" aria-hidden />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-frost-300 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-neon-400 after:to-glow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gradient text-sm px-5 py-2.5">
              Book Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 8h16M4 16h10" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-night-950/95 backdrop-blur-xl border-t border-white/[0.07] px-6 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="animate-fade-up block text-frost-300 hover:text-white hover:bg-white/[0.04] rounded-xl px-3 py-3 text-base font-medium transition-colors"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gradient w-full py-3.5 text-base"
            >
              Book Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
