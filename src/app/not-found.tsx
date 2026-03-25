import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-[#999] mb-8">
        This page doesn&apos;t exist — but London&apos;s best clubs do.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-white/10 hover:bg-white/15 text-white py-3 px-6 rounded-lg font-semibold transition-colors border border-white/20"
        >
          Go to Homepage
        </Link>
        <Link
          href="/best-clubs-in-london"
          className="bg-[#C0C0C0] hover:bg-white text-black py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          Best Clubs in London
        </Link>
      </div>
    </div>
  );
}
