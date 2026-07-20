import Link from 'next/link';

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
      </div>
    </section>
  );
}
