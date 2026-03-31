import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { clubs, getClubBySlug } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getNightClubSchema } from '@/components/SchemaMarkup';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return clubs.map((club) => ({
    slug: club.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);

  if (!club) {
    return { title: 'Club Not Found' };
  }

  const title = `${club.name} London | Table Booking & Guestlist`;
  const description = `Everything you need to know about ${club.name} nightclub in ${club.area}, London. Table prices from ${club.tableMinimum}, dress code, music, and guestlist access.`;

  return {
    title,
    description,
    keywords: [
      `${club.name} London`,
      `${club.name} club`,
      `${club.name} nightclub`,
      `${club.name} table booking`,
      `${club.name} guestlist`,
      `${club.name} dress code`,
      `${club.name} ${club.area}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://londonclubstonight.com/clubs/${club.slug}`,
      type: 'website',
    },
  };
}

export default async function ClubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = getClubBySlug(slug);

  if (!club) {
    notFound();
  }

  const isClosed = club.status === 'permanently-closed';
  const areaSlug = club.area.toLowerCase().replace(/\s+/g, '-');
  const paragraphs = club.longDescription.split('\n\n').filter(Boolean);

  const schema = getNightClubSchema(
    club.name,
    club.description,
    club.address,
    `/clubs/${club.slug}`
  );

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <SchemaMarkup schema={schema} />

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center justify-center gap-2 text-sm text-[#888]">
          <Link href="/" className="hover:text-[#BBB] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/clubs" className="hover:text-[#BBB] transition-colors">
            Clubs
          </Link>
          <span>/</span>
          <span className="text-[#BBB]">{club.name}</span>
        </nav>
      </div>

      {/* Permanently Closed Banner */}
      {isClosed && (
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-6">
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl p-6 text-center">
            <p className="font-semibold text-lg mb-2">Permanently Closed</p>
            <p className="text-sm leading-relaxed max-w-xl mx-auto">
              {club.name} is permanently closed. This page is maintained for reference. Looking for clubs open tonight? Check our{' '}
              <Link href="/clubs" className="underline hover:text-red-300 transition-colors">
                best clubs guide
              </Link>.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src={club.heroImage}
          alt={`${club.name} nightclub London`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/80 to-black/60" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-center">
            {club.name}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto text-center">
            {club.tagline}
          </p>

          {!isClosed && (
            <div className="flex justify-center mt-10">
              <WhatsAppCTA clubName={club.name} variant="hero" />
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <QuickInfoCard label="Area" value={club.area} />
          <QuickInfoCard label="Music" value={club.musicGenres.join(', ')} />
          <QuickInfoCard label="Open Nights" value={club.openingNights} />
          <QuickInfoCard label="Closing Time" value={club.closingTime} />
          <QuickInfoCard label="Table Minimum" value={club.tableMinimum} />
        </div>
      </section>

      {/* About */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            About {club.name}
          </h2>
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-[#BBB] leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Dress Code
          </h2>
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 md:p-8">
            <p className="text-[#BBB] leading-relaxed text-base md:text-lg">
              {club.dressCode}
            </p>
          </div>
        </div>
      </section>

      {/* The Crowd */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            The Crowd
          </h2>
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 md:p-8">
            <p className="text-[#BBB] leading-relaxed text-base md:text-lg">
              {club.crowd}
            </p>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Best For
          </h2>
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 md:p-8">
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl mt-0.5">&#10003;</span>
              <p className="text-[#BBB] leading-relaxed text-base md:text-lg">
                {club.bestFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Tip */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Insider Tip
          </h2>
          <div className="bg-[#141414] border-2 border-[#C0C0C0]/30 rounded-2xl p-7 md:p-8 text-center">
            <p className="text-[#ccc] leading-relaxed text-base md:text-lg italic max-w-2xl mx-auto">
              &ldquo;{club.insiderTip}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {isClosed ? (
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Looking for a Club Tonight?
              </h2>
              <p className="text-[#BBB] mb-8 max-w-lg mx-auto leading-relaxed">
                {club.name} is permanently closed, but there are plenty of great clubs open tonight. Browse our full list or get in touch for a personal recommendation.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/clubs"
                  className="inline-block bg-[#1A1A1A] hover:bg-[#222] border border-[#333] hover:border-[#444] text-[#C0C0C0] px-7 py-3.5 rounded-xl text-sm font-medium transition-all"
                >
                  Browse Open Clubs
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-[#1A1A1A] hover:bg-[#222] border border-[#333] hover:border-[#444] text-[#C0C0C0] px-7 py-3.5 rounded-xl text-sm font-medium transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-7 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Experience {club.name}?
              </h2>
              <p className="text-[#BBB] mb-8 max-w-lg mx-auto leading-relaxed">
                Get a table booking or guestlist spot at {club.name}. Message us on
                WhatsApp and we&apos;ll sort everything for you.
              </p>
              <div className="flex justify-center">
                <WhatsAppCTA clubName={club.name} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {club.galleryImages.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {club.galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={`${club.name} London nightclub photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cross Links & Internal Links */}
      <section className="py-12 md:py-16 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            More About {club.area} &amp; London Clubs
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href={`/areas/${areaSlug}`}
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold text-lg">
                {club.area} Clubs
              </span>
              <p className="text-[#888] text-sm mt-2">
                Explore all nightclubs in the {club.area} area
              </p>
            </Link>
            <Link
              href="/clubs"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold text-lg">
                Best Clubs in London
              </span>
              <p className="text-[#888] text-sm mt-2">
                See the full ranked list of London&apos;s top nightclubs
              </p>
            </Link>
            <Link
              href="/guides/how-to-get-into-london-clubs"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold text-lg">
                Entry Guide
              </span>
              <p className="text-[#888] text-sm mt-2">
                How to get past the door at London&apos;s best clubs
              </p>
            </Link>
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold text-lg">
                Table &amp; Bottle Pricing
              </span>
              <p className="text-[#888] text-sm mt-2">
                See full table and bottle menus at londonbottleservice.com
              </p>
            </a>
            <a
              href="https://londonbirthdayclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold text-lg">
                Birthday Bookings
              </span>
              <p className="text-[#888] text-sm mt-2">
                Plan your birthday at London&apos;s best clubs via londonbirthdayclub.com
              </p>
            </a>
            <a
              href="https://mayfairtonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-2xl p-7 text-center transition-colors"
            >
              <span className="text-[#C0C0C0] font-semibold text-lg">
                Tonight&apos;s Events
              </span>
              <p className="text-[#888] text-sm mt-2">
                See what&apos;s on tonight at mayfairtonight.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      {!isClosed && <WhatsAppCTA clubName={club.name} variant="sticky" />}
    </main>
  );
}

function QuickInfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#141414] border border-[#222] rounded-2xl p-5 text-center">
      <p className="text-[#888] text-xs uppercase tracking-wider mb-1.5">
        {label}
      </p>
      <p className="text-white font-semibold text-sm">{value}</p>
    </div>
  );
}
