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
    alternates: {
      canonical: `https://londonclubstonight.com/clubs/${club.slug}`,
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
    <main className="min-h-screen">
      <SchemaMarkup schema={schema} />

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-frost-400">
          <Link href="/" className="hover:text-neon-200 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/clubs" className="hover:text-neon-200 transition-colors">
            Clubs
          </Link>
          <span>/</span>
          <span className="text-frost-300">{club.name}</span>
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
          className="object-cover animate-slow-zoom"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
        <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 text-center">
          <span className="eyebrow animate-fade-up mb-5">Club profile</span>
          <h1 className="animate-fade-up anim-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 text-center">
            {club.name}
          </h1>
          <p className="animate-fade-up anim-delay-2 text-lg md:text-xl text-frost-100/85 leading-relaxed max-w-2xl mx-auto text-center">
            {club.tagline}
          </p>

          {!isClosed && (
            <div className="animate-fade-up anim-delay-3 flex justify-center mt-10">
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
          <span className="eyebrow">The lowdown</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-3 mb-8">
            About <span className="serif-accent text-gradient">{club.name}</span>
          </h2>
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-frost-300 leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-8">
            Dress Code
          </h2>
          <div className="glass-card p-7 md:p-8">
            <p className="text-frost-300 leading-relaxed text-base md:text-lg">
              {club.dressCode}
            </p>
          </div>
        </div>
      </section>

      {/* The Crowd */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-8">
            The Crowd
          </h2>
          <div className="glass-card p-7 md:p-8">
            <p className="text-frost-300 leading-relaxed text-base md:text-lg">
              {club.crowd}
            </p>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-8">
            Best For
          </h2>
          <div className="glass-card p-7 md:p-8">
            <div className="flex items-start gap-3">
              <span className="text-neon-300 text-xl mt-0.5">&#10003;</span>
              <p className="text-frost-300 leading-relaxed text-base md:text-lg">
                {club.bestFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Tip */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow">From the door</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-3 mb-8">
            Insider Tip
          </h2>
          <div className="glass-card border-neon-400/25 p-7 md:p-8 text-center">
            <p className="font-serif text-frost-100/90 leading-relaxed text-lg md:text-xl italic max-w-2xl mx-auto">
              &ldquo;{club.insiderTip}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-glow py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {isClosed ? (
            <div className="glass-card p-7 md:p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
                Looking for a Club <span className="serif-accent text-gradient">Tonight?</span>
              </h2>
              <p className="text-frost-300 mb-8 max-w-lg mx-auto leading-relaxed">
                {club.name} is permanently closed, but there are plenty of great clubs open tonight. Browse our full list or get in touch for a personal recommendation.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/clubs"
                  className="btn-ghost px-7 py-3.5 text-sm"
                >
                  Browse Open Clubs
                </Link>
                <Link
                  href="/contact"
                  className="btn-ghost px-7 py-3.5 text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="glass-card p-7 md:p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
                Ready to Experience <span className="serif-accent text-gradient">{club.name}</span>?
              </h2>
              <p className="text-frost-300 mb-8 max-w-lg mx-auto leading-relaxed">
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
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-8">Gallery</h2>
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
          <span className="eyebrow">Keep exploring</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-3 mb-8">
            More About {club.area} &amp; London Clubs
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href={`/areas/${areaSlug}`}
              className="glass-card glass-card-hover block p-7 text-center"
            >
              <span className="text-neon-300 font-semibold text-lg">
                {club.area} Clubs
              </span>
              <p className="text-frost-500 text-sm mt-2">
                Explore all nightclubs in the {club.area} area
              </p>
            </Link>
            <Link
              href="/clubs"
              className="glass-card glass-card-hover block p-7 text-center"
            >
              <span className="text-neon-300 font-semibold text-lg">
                Best Clubs in London
              </span>
              <p className="text-frost-500 text-sm mt-2">
                See the full ranked list of London&apos;s top nightclubs
              </p>
            </Link>
            <Link
              href="/guides/how-to-get-into-london-clubs"
              className="glass-card glass-card-hover block p-7 text-center"
            >
              <span className="text-neon-300 font-semibold text-lg">
                Entry Guide
              </span>
              <p className="text-frost-500 text-sm mt-2">
                How to get past the door at London&apos;s best clubs
              </p>
            </Link>
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover block p-7 text-center"
            >
              <span className="text-neon-300 font-semibold text-lg">
                Table &amp; Bottle Pricing
              </span>
              <p className="text-frost-500 text-sm mt-2">
                See full table and bottle menus at londonbottleservice.com
              </p>
            </a>
            <a
              href="https://londonbirthdayclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover block p-7 text-center"
            >
              <span className="text-neon-300 font-semibold text-lg">
                Birthday Bookings
              </span>
              <p className="text-frost-500 text-sm mt-2">
                Plan your birthday at London&apos;s best clubs via londonbirthdayclub.com
              </p>
            </a>
            <a
              href="https://mayfairtonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover block p-7 text-center"
            >
              <span className="text-neon-300 font-semibold text-lg">
                Tonight&apos;s Events
              </span>
              <p className="text-frost-500 text-sm mt-2">
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
    <div className="glass-card p-5 text-center">
      <p className="text-frost-500 text-xs uppercase tracking-wider mb-1.5">
        {label}
      </p>
      <p className="text-white font-semibold text-sm">{value}</p>
    </div>
  );
}
