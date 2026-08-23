import Link from 'next/link';

const recoveryLinks = [
  { href: '/clubs', label: 'All clubs' },
  { href: '/clubs-tonight-london', label: 'Open tonight' },
  { href: '/guides', label: 'Guides' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Book a table' },
  { href: '/sitemap.xml', label: 'Sitemap', external: true },
  { href: '/llms.txt', label: 'llms.txt (for agents)', external: true },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden">
      <div
        className="glow-orb w-[520px] h-[420px] bg-neon-500/25 -top-32 -left-32"
        aria-hidden
      />
      <div
        className="glow-orb w-[460px] h-[380px] bg-glow-500/20 bottom-0 -right-24"
        aria-hidden
        style={{ animationDelay: '-7s' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="eyebrow animate-fade-up mb-6">Wrong door</span>
        <h1 className="animate-fade-up anim-delay-1 font-display text-[26vw] sm:text-9xl md:text-[11rem] font-extrabold tracking-tight leading-none text-gradient mb-4">
          404
        </h1>
        <p className="animate-fade-up anim-delay-2 text-xl text-frost-300 mb-10 max-w-xl mx-auto">
          This page doesn&apos;t exist — but London&apos;s best clubs do.
        </p>
        <div className="animate-fade-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gradient py-3 px-6 font-semibold">
            Go to Homepage
          </Link>
          <Link
            href="/best-clubs-in-london"
            className="btn-ghost py-3 px-6 font-semibold"
          >
            Best Clubs in London
          </Link>
        </div>

        {/* Recovery links. Kept in the HTML so crawlers and agents that land on
            a dead URL can find their way without a second request. */}
        <div className="animate-fade-up anim-delay-4 mt-14 pt-8 border-t border-white/[0.06]">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-frost-300 mb-5">
            Where to look next
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {recoveryLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    className="text-neon-300 underline underline-offset-4 decoration-glow-400/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-neon-300 underline underline-offset-4 decoration-glow-400/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
