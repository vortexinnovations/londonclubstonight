import type { Metadata } from 'next';
import Image from 'next/image';
import { getWhatsAppTableUrl, getWhatsAppGuestlistUrl } from '@/lib/clubs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book a Table or Join Guestlist — London Clubs Tonight',
  description: 'Book a VIP table or get on the guestlist at London\'s best nightclubs. Direct WhatsApp booking with London\'s top club promoters. Instant response, no forms.',
  openGraph: {
    title: 'Book a Table or Join Guestlist — London Clubs Tonight',
    description: 'Book a VIP table or get on the guestlist at London\'s best nightclubs. Direct WhatsApp booking.',
    url: 'https://londonclubstonight.com/contact',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/contact',
  },
};

export default function ContactPage() {
  const tableUrl = getWhatsAppTableUrl();
  const guestlistUrl = getWhatsAppGuestlistUrl();

  return (
    <>
    <section className="relative min-h-[40vh] flex items-end overflow-hidden">
      <Image
        src="/gallery/images/fe4414_23971aa95d054304b70968e4b8c2aaa3.jpg"
        alt="Contact London Clubs Tonight hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/80 to-black/60" />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Book a Table or Join Guestlist
        </h1>
        <p className="text-lg text-white/80 max-w-2xl">
          Skip the forms. We use WhatsApp because it&apos;s faster, more personal, and means you get a real reply
          from a real promoter — not an automated confirmation email. Tell us what you&apos;re looking for
          and we&apos;ll sort the rest.
        </p>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Table Booking */}
        <div className="bg-[#141414] border border-[#222] rounded-xl p-8">
          <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Book a VIP Table</h2>
          <p className="text-[#BBB] mb-6 leading-relaxed">
            Guaranteed entry, your own space, and bottle service at any of London&apos;s best clubs.
            Tables start from £1,000 depending on the venue and night. We&apos;ll match you with
            the right club for your group.
          </p>
          <ul className="text-[#888] text-sm space-y-2 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-0.5">✓</span>
              Guaranteed entry — no queue, no rejection
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-0.5">✓</span>
              Reserved seating area with bottle service
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-0.5">✓</span>
              We handle the booking — you just show up
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-0.5">✓</span>
              Best available table positions
            </li>
          </ul>
          <a
            href={tableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] hover:bg-[#20BD5A] text-[#003d20] text-center py-4 px-6 rounded-lg font-semibold transition-colors"
          >
            Book a Table on WhatsApp
          </a>
        </div>

        {/* Guestlist */}
        <div className="bg-[#141414] border border-[#222] rounded-xl p-8">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Join the Guestlist</h2>
          <p className="text-[#BBB] mb-6 leading-relaxed">
            Guestlist gets you priority consideration at the door — and at many clubs, free or
            reduced entry for women. We&apos;ll put you on the list and give you all the details
            you need for the night.
          </p>
          <ul className="text-[#888] text-sm space-y-2 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-[#C0C0C0] mt-0.5">✓</span>
              Priority entry consideration
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C0C0C0] mt-0.5">✓</span>
              Free or reduced entry at many venues
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C0C0C0] mt-0.5">✓</span>
              Arrive before the deadline and you&apos;re in
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C0C0C0] mt-0.5">✓</span>
              No commitment — just turn up
            </li>
          </ul>
          <a
            href={guestlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 hover:bg-white/15 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors border border-white/20"
          >
            Join Guestlist on WhatsApp
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Common Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Why WhatsApp instead of a booking form?</h3>
            <p className="text-[#BBB] text-sm leading-relaxed">
              Because nightclub bookings aren&apos;t like restaurant reservations. Every group is different,
              every night is different, and the best table for you depends on details that a form can&apos;t capture.
              WhatsApp lets us have a real conversation, understand what you want, and make it happen properly.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How quickly will I get a response?</h3>
            <p className="text-[#BBB] text-sm leading-relaxed">
              Usually within minutes during the evening, and within a few hours during the day.
              We&apos;re most responsive from 4pm onwards when the night&apos;s plans are coming together.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I book for tonight?</h3>
            <p className="text-[#BBB] text-sm leading-relaxed">
              Yes — same-night bookings are our speciality. The sooner you message, the better the table
              options, but we regularly arrange bookings with just a few hours&apos; notice.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Not sure which club to choose?</h3>
            <p className="text-[#BBB] text-sm leading-relaxed">
              Tell us about your group, what music you like, and what kind of night you&apos;re after.
              We&apos;ll recommend the right club — it&apos;s literally what we do every day. Check out our{' '}
              <Link href="/best-clubs-in-london" className="text-[#C0C0C0] hover:text-white">
                best clubs guide
              </Link>{' '}
              for a head start.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Looking for Something Specific?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Bottle Service & Pricing</h3>
            <p className="text-[#888] text-sm">Detailed pricing, packages, and bottle menus at londonbottleservice.com</p>
          </a>
          <a
            href="https://londonbirthdayclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Birthday Celebrations</h3>
            <p className="text-[#888] text-sm">Birthday packages and planning at londonbirthdayclub.com</p>
          </a>
          <a
            href="https://mayfairtonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Tonight in Mayfair</h3>
            <p className="text-[#888] text-sm">Tonight&apos;s Mayfair events and guestlists at mayfairtonight.com</p>
          </a>
          <a
            href="https://londonluxurynightlife.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Luxury Nightlife Guide</h3>
            <p className="text-[#888] text-sm">Premium London nightlife experiences at londonluxurynightlife.com</p>
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
