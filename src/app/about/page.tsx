import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { fitTitle, siteImage } from '@/lib/metadata';
import { WHATSAPP_TABLE_NUMBER } from '@/lib/clubs';
import { CORRECTIONS, HOW_WE_WRITE, WHO_RUNS_US } from '@/lib/about';
import SchemaMarkup, { ORGANIZATION_ID, WEBSITE_ID } from '@/components/SchemaMarkup';

const SITE = 'https://londonclubstonight.com';
const PAGE_URL = `${SITE}/about`;
const TITLE = 'About London Clubs Tonight: Who We Are and How We Write';
const DESCRIPTION =
  'Who runs London Clubs Tonight, how we earn a commission on bookings, how our guides are written and checked, and how to tell us about a mistake.';

export async function generateMetadata(_props: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: fitTitle(TITLE),
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      type: 'website',
      images: await siteImage(parent),
    },
    alternates: {
      canonical: PAGE_URL,
    },
  };
}

const linkClass =
  'text-neon-300 underline underline-offset-4 decoration-glow-400/50 hover:text-white transition-colors';

const headingClass = 'font-display text-2xl font-extrabold tracking-tight text-white mb-3';

export default function AboutPage() {
  return (
    <div className="overflow-x-clip">
      <SchemaMarkup
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: TITLE,
          description: DESCRIPTION,
          inLanguage: 'en-GB',
          isPartOf: { '@id': WEBSITE_ID },
          about: {
            '@type': 'Organization',
            '@id': ORGANIZATION_ID,
            name: 'London Clubs Tonight',
            url: SITE,
          },
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24" aria-hidden />

        <nav className="flex items-center gap-2 text-sm text-frost-400 mb-8">
          <Link href="/" className="hover:text-neon-200 transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-frost-300">About</span>
        </nav>

        <p className="eyebrow mb-3">About us</p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          About London Clubs <span className="serif-accent text-gradient">Tonight</span>
        </h1>
        <p className="text-lg text-frost-300 mb-10">
          Which London clubs are open tonight, what each one is like, what a table costs and how to get
          in. Tables and guestlist places are booked with us on WhatsApp.
        </p>

        <div className="space-y-10 text-frost-300 leading-relaxed">
          <section>
            <h2 className={headingClass}>Who runs London Clubs Tonight</h2>
            <div className="space-y-4">
              {WHO_RUNS_US.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </section>

          <section id="how-we-write" className="scroll-mt-28">
            <h2 className={headingClass}>How we write</h2>
            <div className="space-y-4">
              {HOW_WE_WRITE.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className={headingClass}>Corrections</h2>
            <p className="mb-5">{CORRECTIONS}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_TABLE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3 px-7 text-sm"
              >
                WhatsApp: +{WHATSAPP_TABLE_NUMBER}
              </a>
            </div>
            <p className="mt-6 text-sm text-frost-400">
              The same number takes bookings: see the{' '}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className={headingClass}>Where to start</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/clubs-tonight-london" className={linkClass}>
                  Clubs open tonight in London
                </Link>
              </li>
              <li>
                <Link href="/clubs" className={linkClass}>
                  Every club we cover
                </Link>
              </li>
              <li>
                <Link href="/guides" className={linkClass}>
                  Guides to guestlists, tables, areas and music
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkClass}>
                  The blog
                </Link>
              </li>
            </ul>
          </section>

          <div className="glass-card p-8">
            <h2 className={headingClass}>Planning a night out?</h2>
            <p className="leading-relaxed mb-6">
              Tell us the night, the group and the kind of room you want, and we will suggest a club
              and arrange the table or guestlist place before you arrive.
            </p>
            <Link href="/contact" className="btn-gradient px-6 py-3">
              Book a table or join a guestlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
