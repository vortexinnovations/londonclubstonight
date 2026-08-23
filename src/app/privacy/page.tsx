import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_GUESTLIST_NUMBER, WHATSAPP_TABLE_NUMBER } from '@/lib/clubs';

export const metadata: Metadata = {
  title: 'Privacy Policy — London Clubs Tonight',
  description:
    'How London Clubs Tonight handles your data: what we collect, what we do not collect, how WhatsApp booking enquiries are used, and how to request deletion.',
  openGraph: {
    title: 'Privacy Policy — London Clubs Tonight',
    description:
      'What data London Clubs Tonight collects, how WhatsApp booking enquiries are handled, and how to request deletion.',
    url: 'https://londonclubstonight.com/privacy',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/privacy',
  },
};

const LAST_UPDATED = '23 August 2026';

export default function PrivacyPage() {
  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="glow-orb w-[480px] h-[380px] bg-neon-500/25 -top-32 -right-24"
        aria-hidden
      />

      <nav className="flex items-center gap-2 text-sm text-frost-400 mb-8">
        <Link href="/" className="hover:text-neon-200 transition-colors">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-frost-300">Privacy</span>
      </nav>

      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        Privacy <span className="serif-accent text-gradient">Policy</span>
      </h1>
      <p className="text-lg text-frost-300 mb-10">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-10 text-frost-300 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            Who we are
          </h2>
          <p>
            London Clubs Tonight is an independent London nightlife guide and booking
            concierge. We publish editorial guides to London nightclubs and arrange VIP
            table bookings and guestlist places on behalf of guests. This policy explains
            what happens to your information when you read the site or contact us about a
            booking. It applies to londonclubstonight.com and to the WhatsApp conversations
            that start from it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            What we collect when you browse
          </h2>
          <p>
            Reading this site does not require an account, and we do not ask you to enter
            personal details anywhere on the page. There are no contact forms, no newsletter
            signup, and no login. Our hosting provider records standard server logs — IP
            address, browser user agent, requested URL and timestamp — which exist to keep
            the site online and to spot abuse. We do not use those logs to build a profile
            of you, and we do not sell or share them.
          </p>
          <p className="mt-4">
            We do not set advertising cookies and we do not run third-party ad trackers. If
            analytics are enabled, they are limited to aggregate page-level counts used to
            understand which guides are useful. Images are served through our own domain, so
            browsing club pages does not hand your IP address to an image host.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            What happens when you message us on WhatsApp
          </h2>
          <p>
            Every booking on this site starts as a WhatsApp message to a real person. When
            you message us, we receive the phone number attached to your WhatsApp account,
            your display name, and whatever you choose to tell us — typically the date, the
            size of your group, the venue you want, and your budget. We use that information
            for one purpose: arranging your table or guestlist place and answering your
            questions about the night.
          </p>
          <p className="mt-4">
            To confirm a booking we pass the minimum necessary details to the venue or its
            promoter team — usually a name, a group size, and an arrival time. We do not
            pass on the rest of your conversation. WhatsApp itself is operated by Meta and
            your messages are subject to WhatsApp&apos;s own privacy terms; we have no
            control over how Meta processes data on its platform.
          </p>
          <p className="mt-4">
            We do not add your number to a marketing list, we do not send promotional
            broadcasts, and we do not sell contact details to anyone. Booking conversations
            are kept only as long as they are useful for servicing repeat guests, and are
            deleted on request.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            Links to other sites
          </h2>
          <p>
            This site links to venue websites and to our sister guides, including Mayfair
            Tonight, London Bottle Service, London Birthday Club, and London Luxury
            Nightlife. Once you follow an outbound link you are on someone else&apos;s site
            and their privacy policy applies, not ours.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            Your rights
          </h2>
          <p>
            If you are in the UK or EU, you have the right to ask what personal data we hold
            about you, to have it corrected, and to have it erased. Because we hold very
            little — in most cases nothing beyond a WhatsApp thread — these requests are
            usually resolved the same day. Message us on WhatsApp and ask us to delete your
            conversation and we will confirm once it is done.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            Age
          </h2>
          <p>
            London nightclubs are strictly over-18 venues, and this site is intended for
            adults. We do not knowingly collect information from anyone under 18. If you
            believe a minor has contacted us, tell us and we will delete the conversation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            Contact
          </h2>
          <p className="mb-5">
            Questions about this policy, or a deletion request, go to the same place as
            bookings:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_TABLE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3 px-7 text-sm"
            >
              Tables: +{WHATSAPP_TABLE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_GUESTLIST_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost py-3 px-7 text-sm"
            >
              Guestlist: +{WHATSAPP_GUESTLIST_NUMBER}
            </a>
          </div>
          <p className="mt-6 text-sm text-frost-400">
            You can also reach us through the{' '}
            <Link
              href="/contact"
              className="text-neon-300 underline underline-offset-4 decoration-glow-400/50 hover:text-white transition-colors"
            >
              contact page
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-3">
            Changes to this policy
          </h2>
          <p>
            If how we handle data changes, we update this page and move the date at the top.
            There is no mailing list to notify, so the date is the record.
          </p>
        </section>
      </div>
    </div>
  );
}
