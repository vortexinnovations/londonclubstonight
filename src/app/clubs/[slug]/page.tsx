import { notFound } from 'next/navigation';
import Link from 'next/link';
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

  const title = `${club.name} London | Entry Guide, Table Booking & Guestlist`;
  const description = `Everything you need to know about ${club.name} nightclub in ${club.area}, London. How to get into ${club.name}, dress code, door policy, table prices from ${club.tableMinimum}, and guestlist access.`;

  return {
    title,
    description,
    keywords: [
      `${club.name} London`,
      `${club.name} club`,
      `${club.name} nightclub`,
      `how to get into ${club.name}`,
      `${club.name} table booking`,
      `${club.name} guestlist`,
      `${club.name} dress code`,
      `${club.name} door policy`,
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
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[#666]">
          <Link href="/" className="hover:text-[#999] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/clubs" className="hover:text-[#999] transition-colors">
            Clubs
          </Link>
          <span>/</span>
          <span className="text-[#999]">{club.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-4 pt-8 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {club.name}
        </h1>
        <p className="text-lg md:text-xl text-[#999] leading-relaxed max-w-2xl">
          {club.tagline}
        </p>

        <div className="mt-8">
          <WhatsAppCTA clubName={club.name} variant="hero" />
        </div>
      </header>

      {/* Quick Info Grid */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <QuickInfoCard label="Area" value={club.area} />
          <QuickInfoCard label="Music" value={club.musicGenres.join(', ')} />
          <QuickInfoCard label="Open Nights" value={club.openingNights} />
          <QuickInfoCard label="Closing Time" value={club.closingTime} />
          <QuickInfoCard label="Entry Difficulty" value={club.entryDifficulty} />
          <QuickInfoCard label="Table Minimum" value={club.tableMinimum} />
        </div>
      </section>

      {/* Long Description */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          About {club.name}
        </h2>
        <div className="space-y-4">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-[#999] leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* How to Get In */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          How to Get Into {club.name}
        </h2>
        <div className="space-y-6">
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Door Policy
            </h3>
            <p className="text-[#999] leading-relaxed">{club.doorPolicy}</p>
          </div>

          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Dress Code
            </h3>
            <p className="text-[#999] leading-relaxed">{club.dressCode}</p>
          </div>

          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Entry Difficulty:{' '}
              <span
                className={
                  club.entryDifficulty === 'Very Hard'
                    ? 'text-red-400'
                    : club.entryDifficulty === 'Hard'
                    ? 'text-orange-400'
                    : club.entryDifficulty === 'Moderate'
                    ? 'text-yellow-400'
                    : 'text-green-400'
                }
              >
                {club.entryDifficulty}
              </span>
            </h3>
            <p className="text-[#999] leading-relaxed">
              Getting into {club.name} is rated as {club.entryDifficulty.toLowerCase()}.
              The best way to guarantee entry is to book a table or get on the
              guestlist through a promoter.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[#666] text-sm mb-4">
            Read our complete{' '}
            <Link
              href="/guides/getting-into-london-clubs"
              className="text-[#C0C0C0] hover:text-white underline transition-colors"
            >
              guide to getting into London clubs
            </Link>{' '}
            for more tips on dress code, guestlists, and door policy.
          </p>
        </div>
      </section>

      {/* The Crowd */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Crowd</h2>
        <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
          <p className="text-[#999] leading-relaxed">{club.crowd}</p>
        </div>
      </section>

      {/* Best For / Not Ideal For */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-green-400">&#10003;</span> Best For
            </h3>
            <p className="text-[#999] leading-relaxed">{club.bestFor}</p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-red-400">&#10007;</span> Not Ideal For
            </h3>
            <p className="text-[#999] leading-relaxed">{club.notIdealFor}</p>
          </div>
        </div>
      </section>

      {/* Insider Tip */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Insider Tip</h2>
        <div className="bg-[#141414] border border-[#222] rounded-xl p-6 border-l-4 border-l-[#C0C0C0]">
          <p className="text-[#999] leading-relaxed italic">
            {club.insiderTip}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-[#141414] border border-[#222] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Experience {club.name}?
          </h2>
          <p className="text-[#999] mb-6 max-w-lg mx-auto">
            Get a table booking or guestlist spot at {club.name}. Message us on
            WhatsApp and we&apos;ll sort everything for you.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA clubName={club.name} />
          </div>
        </div>
      </section>

      {/* Cross Links & Internal Links */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-white mb-6">
          More About {club.area} &amp; London Clubs
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href={`/areas/${areaSlug}`}
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              {club.area} Clubs
            </span>
            <p className="text-[#666] text-sm mt-1">
              Explore all nightclubs in the {club.area} area
            </p>
          </Link>
          <Link
            href="/clubs"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Best Clubs in London
            </span>
            <p className="text-[#666] text-sm mt-1">
              See the full ranked list of London&apos;s top nightclubs
            </p>
          </Link>
          <Link
            href="/guides/getting-into-london-clubs"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Entry Guide
            </span>
            <p className="text-[#666] text-sm mt-1">
              How to get past the door at London&apos;s best clubs
            </p>
          </Link>
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Table &amp; Bottle Pricing
            </span>
            <p className="text-[#666] text-sm mt-1">
              See full table and bottle menus at londonbottleservice.com
            </p>
          </a>
          <a
            href="https://londonbirthdayclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Birthday Bookings
            </span>
            <p className="text-[#666] text-sm mt-1">
              Plan your birthday at London&apos;s best clubs via londonbirthdayclub.com
            </p>
          </a>
          <a
            href="https://mayfairtonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <span className="text-[#C0C0C0] font-semibold">
              Tonight&apos;s Events
            </span>
            <p className="text-[#666] text-sm mt-1">
              See what&apos;s on tonight at mayfairtonight.com
            </p>
          </a>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <WhatsAppCTA clubName={club.name} variant="sticky" />
    </main>
  );
}

function QuickInfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#141414] border border-[#222] rounded-xl p-4">
      <p className="text-[#666] text-xs uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-white font-semibold text-sm">{value}</p>
    </div>
  );
}
