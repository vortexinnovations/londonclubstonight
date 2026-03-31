import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSundayClubs, getFridayClubs, getSaturdayClubs } from '@/lib/clubs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import TonightClubCard from '@/components/TonightClubCard';
import SchemaMarkup, { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/SchemaMarkup';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Clubs Open Sunday Night in London — Your Sunday Night Options',
  description:
    'Which London clubs are open on Sunday nights? An honest guide — most clubs are closed, but here are your real options, alternatives, and how to plan a better weekend instead.',
  keywords: [
    'clubs open Sunday London',
    'Sunday night clubs London',
    'London clubs Sunday',
    'Sunday nightlife London',
    'what clubs are open Sunday London',
    'Sunday night out London',
    'clubs open on Sunday night',
    'London Sunday clubbing',
  ],
  openGraph: {
    title: 'Clubs Open Sunday Night in London — Your Sunday Night Options',
    description:
      'Which London clubs are open on Sunday nights? An honest guide with real options and alternatives.',
    url: 'https://londonclubstonight.com/clubs-open-sunday-night-london',
    type: 'article',
    locale: 'en_GB',
    siteName: 'London Clubs Tonight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clubs Open Sunday Night in London — Your Sunday Night Options',
    description:
      'Which London clubs are open on Sunday nights? An honest guide with real options and alternatives.',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/clubs-open-sunday-night-london',
  },
};

const faqs = [
  {
    question: 'Are any clubs open on Sunday night in London?',
    answer:
      'Very few. The vast majority of London nightclubs — including all of the Mayfair clubs — are closed on Sundays. Ministry of Sound occasionally hosts Sunday events, particularly bank holiday weekends and special productions. Beyond that, Sunday options are extremely limited. Your best approach is to check for one-off events or redirect your plans to Friday or Saturday.',
  },
  {
    question: 'Why are London clubs closed on Sundays?',
    answer:
      'It is a combination of licensing restrictions, economics, and tradition. Most clubs operate on Thursday to Saturday schedules because those are the nights with enough demand to justify opening. Staff costs, security, licensing fees, and operational expenses mean clubs need a certain level of attendance to break even — and Sunday consistently falls short.',
  },
  {
    question: 'What can I do on a Sunday night in London instead?',
    answer:
      'London has excellent Sunday night alternatives to traditional clubbing. Late-night bars and cocktail lounges in Soho and Shoreditch are open until 1am or later. Some restaurants offer late dining with DJ sets. Rooftop bars are excellent in summer. If you want music and atmosphere without the full club experience, these are your best options.',
  },
  {
    question: 'Does Ministry of Sound open on Sundays?',
    answer:
      'Ministry of Sound does not have a regular Sunday night programme, but it does host occasional Sunday events — particularly during bank holiday weekends, over New Year, and for special one-off productions. Check their website or social media for upcoming events. When they do open on a Sunday, the night typically runs into the early hours of Monday morning.',
  },
];

export default function ClubsOpenSundayNightLondonPage() {
  const sundayClubs = getSundayClubs();
  const fridayClubs = getFridayClubs();
  const saturdayClubs = getSaturdayClubs();

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema(
            'Clubs Open Sunday Night in London — Your Sunday Night Options',
            'Which London clubs are open on Sunday nights? An honest guide with real options and alternatives.',
            '/clubs-open-sunday-night-london',
            '2025-06-01'
          ),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Sunday Night Clubs', url: '/clubs-open-sunday-night-london' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/gallery/images/fe4414_277db2fabaf64b3bb38e4f0b766c5841.jpg"
          alt="Sunday night clubs in London with late-night atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/60 to-black/30" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 pt-20 text-center">
          <p className="text-[#C0C0C0] text-sm uppercase tracking-widest mb-6">
            Sunday Night London
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Clubs Open Sunday Night in London
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We will be honest with you: Sunday night clubbing in London is extremely limited. Here is the full picture — what is available, what is not, and how to make the most of your weekend.
          </p>
          <WhatsAppCTA variant="tonight" heading="Planning Your Weekend?" />
        </div>
      </section>

      {/* The Honest Truth */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Honest Truth About Sunday Nights
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Most London clubs do not open on Sundays. That is not a diplomatic way of saying options are limited — it is the straightforward reality. Every Mayfair club is closed. The Soho venues are closed. The entertainment-led clubs are closed. If you are looking for a traditional London club night on a Sunday, you will struggle to find one.
            </p>
            <p>
              This is not a London-specific issue. Most major cities have a similar pattern — the economics of running a nightclub simply do not work when the majority of your potential crowd has work the next morning. Staff costs, security, licensing, and operational expenses are the same whether you have 50 guests or 500, and Sunday consistently fails to deliver the numbers that make opening worthwhile.
            </p>
            <p>
              There are exceptions, and they are worth knowing about. But we would rather give you an honest assessment than a list of venues that might theoretically be open if the right conditions align. Below is what genuinely exists for Sunday nights, followed by better alternatives that deliver a great experience.
            </p>
          </div>
        </div>
      </section>

      {/* Sunday Clubs if any */}
      {sundayClubs.length > 0 ? (
        <section className="py-20 md:py-28 border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Clubs Open on Sundays
            </h2>
            <p className="text-[#BBB] text-center mb-12 max-w-2xl mx-auto">
              These venues have Sunday listed in their opening schedule. Availability may vary — message us to confirm.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {sundayClubs.map((club) => (
                <TonightClubCard key={club.slug} club={club} showGuestlistStatus showTableCTA />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 md:py-28 border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                No Regular Sunday Clubs
              </h2>
              <p className="text-[#BBB] mb-6">
                None of the clubs in our directory currently operate a regular Sunday night programme. Keep reading for your best alternatives and how to plan a better weekend.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Ministry of Sound */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Ministry of Sound: The Sunday Exception
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Ministry of Sound is the one venue that occasionally breaks the Sunday silence. The legendary Elephant and Castle superclub does not run a regular Sunday programme, but it hosts special events on Sundays several times throughout the year — and when it does, it is worth knowing about.
            </p>
            <p>
              Bank holiday weekends are the most reliable times to find Ministry open on a Sunday. When Monday is a day off, the club extends its programming, and Sunday nights at Ministry can carry the same energy and calibre of DJ as a regular Saturday. These events typically run until 6am or later, taking full advantage of the extended weekend.
            </p>
            <p>
              Special one-off events also land on Sundays periodically. Record label showcases, artist album launches, and seasonal events like New Year and Halloween sometimes fall on a Sunday, and Ministry programmes accordingly. These tend to sell out quickly because the rarity makes them attractive.
            </p>
            <p>
              If you are specifically looking for a Sunday night out, checking Ministry of Sound&apos;s event calendar is always the first step. When they do open on a Sunday, you get the full Ministry experience — the world-class sound system, multiple rooms of music, and a crowd that treats the extended weekend as an opportunity rather than an obstacle.
            </p>
            <p>
              The key point is that these are event-based rather than regular nights. You cannot assume Ministry will be open on any given Sunday — but when it is, it is typically the only serious clubbing option in the city, and the quality reflects that exclusivity.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Sunday Night Alternatives
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              If a full club night is not available, London still offers plenty of ways to spend a Sunday evening with energy and atmosphere. Here are the alternatives that actually deliver:
            </p>
            <p>
              <strong className="text-white">Late-night cocktail bars.</strong> Soho and Shoreditch have numerous bars open until 1am or later on Sundays. These offer cocktails, music, and atmosphere without the full nightclub commitment. Many have DJ sets or live music that create a lively environment, and the dress code is typically more relaxed than clubs.
            </p>
            <p>
              <strong className="text-white">Sunday rooftop sessions.</strong> During warmer months, rooftop bars across London host Sunday sessions with DJs, cocktails, and sunset views. These are particularly popular in summer and early autumn. The atmosphere is sociable and upbeat without being a full-blown club night.
            </p>
            <p>
              <strong className="text-white">Restaurant-bar hybrids.</strong> Several London restaurants transition into late-night venues on Sundays, with DJ sets accompanying dinner and drinks. These offer food, atmosphere, and a later finish than a standard restaurant — typically midnight to 1am.
            </p>
            <p>
              <strong className="text-white">Live music venues.</strong> Jazz bars, live music pubs, and intimate concert venues operate throughout the week including Sundays. If your interest is in the musical experience rather than the clubbing format, these can be excellent Sunday night options.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Your Weekend Better */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Plan Your Weekend Right
          </h2>
          <div className="space-y-6 text-[#BBB] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              If you are reading this page, there is a good chance you are either planning ahead or realising too late that Sunday night is not the night for London clubs. Either way, the best advice we can give is to redirect your energy to Friday or Saturday — the nights when London genuinely comes alive.
            </p>
            <p>
              <strong className="text-white">Friday nights</strong> have a particular character in London. The crowd is celebratory — people have just finished their working week and the energy reflects that release. Many clubs run their best programming on Fridays, and table availability is often better than on Saturdays. If you are choosing between Friday and Sunday, there is no contest.
            </p>
            <p>
              <strong className="text-white">Saturday nights</strong> are the peak of London nightlife. Every club is open, every venue is at full capacity, and the atmosphere across the city is electric. Booking is more important on Saturdays — tables and guestlist spots fill up faster — but the experience justifies the planning.
            </p>
            <p>
              If you are visiting London and your schedule only allows for a Sunday night out, we would honestly recommend adjusting your plans to include a Friday or Saturday instead. The difference in available options and overall quality of experience is substantial. To get ahead on weekend table planning and bottle service, visit{' '}
              <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a>, and for weekend events across the Mayfair scene, see{' '}
              <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair Tonight</a>. Message us on WhatsApp and we can help you plan the strongest night for whenever your schedule allows.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Friday Nights</h3>
              <p className="text-[#BBB] text-sm mb-4">
                {fridayClubs.length} clubs open with full programming and celebratory energy.
              </p>
              <Link
                href="/friday-nightclubs-london"
                className="text-[#C0C0C0] hover:text-white text-sm underline underline-offset-4"
              >
                See Friday clubs &rarr;
              </Link>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Saturday Nights</h3>
              <p className="text-[#BBB] text-sm mb-4">
                {saturdayClubs.length} clubs open — the biggest night in London.
              </p>
              <Link
                href="/saturday-nightclubs-london"
                className="text-[#C0C0C0] hover:text-white text-sm underline underline-offset-4"
              >
                See Saturday clubs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <WhatsAppCTA variant="tonight" heading="Let Us Help Plan Your Night" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-[#BBB] text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 md:py-28 border-t border-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Plan a Better Night
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/best-clubs-this-weekend-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Best Clubs This Weekend
            </Link>
            <Link
              href="/friday-nightclubs-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Friday Nightclubs
            </Link>
            <Link
              href="/saturday-nightclubs-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Saturday Nightclubs
            </Link>
            <Link
              href="/clubs-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Clubs Open Tonight
            </Link>
            <Link
              href="/guestlist-tonight-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Guestlist Tonight
            </Link>
            <Link
              href="/last-minute-table-booking-london"
              className="bg-[#141414] border border-[#222] rounded-xl px-6 py-3 text-[#BBB] hover:text-white hover:border-[#444] transition-colors text-sm"
            >
              Last Minute Tables
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
