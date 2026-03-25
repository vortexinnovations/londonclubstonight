import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { clubs } from '@/lib/clubs';
import ClubCard from '@/components/ClubCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema, getFAQSchema } from '@/components/SchemaMarkup';

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://londonclubstonight.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
    alternates: {
      canonical: `https://londonclubstonight.com/blog/${post.slug}`,
    },
  };
}

function getPostContent(slug: string): React.ReactNode {
  switch (slug) {
    // ─────────────────────────────────────────────
    // POST 1: What to Wear to London Clubs
    // ─────────────────────────────────────────────
    case 'what-to-wear-to-london-clubs':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Golden Rule: Dress for the Club You Want to Get Into</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            London&apos;s club scene is not one-size-fits-all when it comes to dress codes. A look that gets you into <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> without a second glance will get you turned away at <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link> before you reach the door. The trick is knowing the tier of venue you are heading to and dressing accordingly.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair clubs</Link> sit at the top of the dress code ladder. We are talking about venues like <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape</Link>, <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>, and <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link> where the door team will assess your outfit before anything else. If you look the part, the conversation starts. If you do not, it ends before it begins.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Mid-tier venues in <Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link> and around <Link href="/areas/central-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Central London</Link> are more forgiving but still expect effort. Clubs like <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link> and <Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link> want smart-casual at a minimum. You can push the boundaries a bit, but rocking up in sportswear is still going to be a problem.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Men Should Wear to London Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Let us be blunt: the dress code hits men harder than women at London clubs. Door staff scrutinise men&apos;s outfits more closely, and the margin for error is smaller. Here is what works and what does not.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">The safe bet for Mayfair:</strong> Smart shoes (leather, suede, or polished boots), well-fitted dark trousers or dark jeans, a quality shirt or roll-neck, and a blazer or tailored jacket. This look works at every club in London, no exceptions. You do not need to be wearing Gucci, but the fit needs to be clean and the overall impression needs to say you made an effort.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">What gets you turned away:</strong> Trainers at Mayfair clubs are the number one reason men get refused. Even expensive trainers. Even designer trainers. The door team at <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape</Link> and <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link> will not care that your shoes cost more than their rent. Sportswear, shorts, flip-flops, and ripped jeans are also automatic refusals.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">The exception:</strong> <Link href="/clubs/tabu-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">TABU</Link> and <Link href="/clubs/luxx-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Luxx</Link> are slightly more relaxed. Clean designer trainers can work if the rest of the outfit is sharp. But &quot;smart trainers&quot; is not an excuse to wear running shoes.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For a full breakdown of what each club expects, check our <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to getting into London clubs</Link>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Women Should Wear to London Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Women have more flexibility than men, but the expectation at London&apos;s top clubs is still firmly &quot;dressed up&quot;. Think cocktail bar, not casual Friday. The venues want glamour, and the crowd delivers it.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">What works everywhere:</strong> A dress or jumpsuit with heels is the most reliable combination. Smart separates &mdash; a going-out top with tailored trousers and heels &mdash; also work well at most venues. The key is looking like you are going somewhere, not coming from somewhere casual.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">What to avoid:</strong> Flat shoes are fine at music-focused venues like <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> but can be an issue at Mayfair spots. Flip-flops, sportswear, and overly casual outfits are a no everywhere. Fancy trainers can work at some venues but heels are the safer choice for Mayfair.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">The Cirque Le Soir wildcard:</strong> <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link> rewards bold, statement looks more than most clubs. Their whole brand is theatrical, so a standout outfit can actually help you get noticed positively by the door team.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Dress Code by Area: Mayfair vs Soho vs South London</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link>:</strong> The strictest dress codes in London. Smart is not a suggestion, it is a requirement. Every club in this area &mdash; <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape</Link>, <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque</Link>, <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link>, <Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link> &mdash; enforces a smart dress code. Men need smart shoes and a put-together outfit. Women need to be dressed up.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link>:</strong> A step down from Mayfair but still smarter than most cities. Venues like <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link> and <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch of St James</Link> want smart-casual. Clean, well-fitted clothing with effort showing. Trainers can sometimes slide if the rest of the outfit is strong.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">South London / Superclubs:</strong> <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> is the most relaxed major venue in London. Comfortable clubwear is fine &mdash; trainers, jeans, t-shirts all work. The focus is on the music, not your outfit. If you want to dance for six hours, dress for comfort.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Insider Tips That Actually Help</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            First, check the specific club&apos;s dress code before you leave the house. Our individual <Link href="/best-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">club pages</Link> list the exact dress code for every venue. Second, when in doubt, overdress. It is far better to be slightly overdressed than to get turned away and lose your evening. Third, if you are visiting from outside London and are not sure what Mayfair-smart means, look at the club&apos;s social media to see what the regular crowd wears. That will give you a far better sense than any generic dress code description.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For table bookings &mdash; which guarantee entry regardless of the queue &mdash; check out <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a> for pricing and packages. Even with a table, the dress code still applies. The table gets you through the door, but looking the part is still expected.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Finally, read our <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to the hardest clubs to get into in London</Link> so you know exactly what you are up against before you arrive.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 2: London Club Age Guide
    // ─────────────────────────────────────────────
    case 'london-club-age-guide':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Basics: Age Limits and ID Requirements</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Every nightclub in London is 18+. No exceptions. Some venues, particularly in <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link>, operate a 21+ policy on certain nights or enforce it selectively at the door. If you look young, you will be asked for ID. If you do not have valid ID, you will not get in regardless of how well you are dressed or who you know.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Accepted ID:</strong> Passport, UK driving licence, and PASS-accredited ID cards. These are universally accepted at every venue. Some clubs also accept EU and EEA national identity cards. What is never accepted: student cards, bank cards, expired documents, provisional driving licences (at some venues), and photocopies of any document.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Bring your ID even if you think you look older. Door staff at London clubs are trained to check and they will not take your word for it. If you are visiting from abroad, bring your passport. Our <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to getting into London clubs</Link> covers ID requirements in detail.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Best Clubs for 18&ndash;22 Year Olds</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            If you have just turned 18 or are in the university-age bracket, you want clubs where the crowd matches your energy and age. Walking into a venue full of 35-year-olds when you are 19 is awkward for everyone. Here is where you will feel at home.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/luxx-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Luxx</Link> is one of the best options for the younger crowd. The energy is high, the music is commercial, and the typical age range is 20&ndash;28. It is accessible without being basic, and the door policy is friendly to younger groups as long as you are well-dressed. <Link href="/clubs/tabu-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">TABU</Link> also attracts a younger demographic, typically 22&ndash;30, with a hip-hop and RnB focus and a lively atmosphere.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> deserves a mention here because it draws a genuinely wide age range. The music is the focus, and whether you are 18 or 45, if you are there for the DJs, you belong. The Friday sessions tend to skew slightly younger, while Saturday events attract a broader mix.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link> also works well for the early-twenties crowd, especially on their busier nights when the room fills with a younger Soho set.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Best Clubs for Your Mid-to-Late 20s</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            This is the sweet spot for London nightlife. You are old enough to afford decent nights out, young enough to stay out past 2am, and most clubs cater heavily to this demographic. The 25&ndash;32 range has the most options in London.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link> hits the sweet spot with a core crowd of 25&ndash;35. The theatrical performances, the hip-hop soundtrack, and the celebrity sightings all attract this age group. <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link> is similar &mdash; late 20s to early 30s is the primary demographic, with a slightly more fashion-conscious crowd.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link> skews slightly older, 27&ndash;40, but if you are in your late 20s and can get in, you will fit right in. The exclusivity factor means the crowd is generally successful professionals and industry types who take their nights out seriously.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For VIP and table service options that suit this age group, check <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a> for pricing at every major venue.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Best Clubs if You Are 30+</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            The idea that you are &quot;too old&quot; for London clubs after 30 is nonsense. You just need to pick the right venues. There is nothing worse than being 35 in a room full of 21-year-olds, but there are plenty of clubs where you will find your crowd.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch of St James</Link> is the go-to for the 30+ crowd. The atmosphere is sophisticated without being stuffy, the music ranges from funk to hip-hop, and the age range comfortably extends into the 40s. It feels like a club for adults, which is exactly what it is.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link> also caters well to an older crowd. The cocktail lounge atmosphere transitions into a proper club later in the night, and the clientele tend to be 28&ndash;45. <Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link> is another strong choice &mdash; the cabaret and entertainment format attracts a more mature audience who want more than just a DJ and a dance floor.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/lio-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">LIO London</Link> is newer to the scene but already attracting an affluent, slightly older crowd. The dinner-to-party concept works perfectly for the 30+ demographic who want to start the evening with a meal and transition into clubbing without switching venues.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Honest Truth About Age and London Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            London&apos;s club scene is more about attitude and presentation than a number on your driving licence. A well-dressed, confident 40-year-old with a table booking at <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch</Link> is going to have a better night than a nervous 22-year-old trying to bluff their way into <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape</Link>. The key is matching the venue to your vibe, not your birth year.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            If you are unsure which club suits your group, message us. We know the scene inside out and can point you to exactly the right venue for your age group, music taste, and budget. Check out our <Link href="/guides/london-clubs-by-music-genre" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">clubs by music genre guide</Link> for another way to narrow down your options.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 3: Best Clubs for a Birthday in London
    // ─────────────────────────────────────────────
    case 'best-clubs-for-a-birthday-in-london':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Your Birthday Venue Choice Matters More Than Anything Else</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            A birthday in London is a logistical challenge disguised as a celebration. You are coordinating a group of people with different budgets, tastes, and arrival times, trying to get everyone into the same place at the same time, and hoping the venue delivers an experience worth the effort. Get the venue wrong and the whole night falls apart. Get it right and it is the best night of the year.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The clubs that do birthdays well understand that you need more than a table and some sparklers. You need a dedicated host, a section that feels like your own space, and a venue that actually acknowledges the occasion rather than treating you as just another booking. For specialist birthday planning, <a href="https://londonbirthdayclub.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Birthday Club</a> handles everything from venue selection to cake and decorations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Best Birthday Club: Cirque Le Soir</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link> is the number one birthday venue in London and it is not even close. The circus theme gives you a built-in spectacle &mdash; fire-breathers, acrobats, contortionists, and performers that create an atmosphere no other club can match. When the performers come to your table with a birthday cake and the whole room turns to look, that is a moment your group will remember.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Tables start from around &pound;1,000, which for a birthday with a group of eight to ten is actually reasonable per head. The entertainment is included &mdash; you are not paying extra for the performers. The club&apos;s location on Ganton Street near <Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link> makes pre-drinks easy, and the venue itself is compact enough that your group stays together rather than getting scattered across a massive room.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The London Reign: Dinner and Show Combined</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            If your group wants a full evening experience rather than just clubbing, <Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link> is hard to beat. The format is dinner, cabaret show, and then the room transforms into a full nightclub. For a birthday, this structure is perfect because it solves the &quot;where do we eat before?&quot; problem and gives everyone a shared experience before the dancing starts.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The entertainment at The London Reign is properly produced. We are talking burlesque performers, live singers, and a show that feels like a West End production. For a milestone birthday &mdash; 21st, 30th, 40th &mdash; this venue delivers the &quot;special occasion&quot; feeling that a standard club cannot.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">More Top Birthday Venues</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/luxx-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Luxx</Link>:</strong> Great for birthdays where the group is mostly in their early-to-mid 20s. The energy is high, the music is commercial hip-hop, and the table service team know how to make a birthday group feel special. Lower minimum spend than Mayfair venues makes this a strong choice for younger groups.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link>:</strong> Intimate enough that your birthday group feels like they own the room, but lively enough that the atmosphere carries through the night. The cocktail menu is excellent, and their birthday packages include nice touches like personalised setups.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/lio-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">LIO London</Link>:</strong> The premium option. Dinner transitions into a spectacular show and then into a full club night. If budget is not the primary concern and you want the most impressive birthday experience in London, LIO delivers on every level. Check <a href="https://londonluxurynightlife.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Luxury Nightlife</a> for details on their premium packages.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Book a Birthday at a London Club</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Book early. Birthday tables at popular clubs sell out weeks in advance, especially on Saturdays. If your birthday falls on a Friday or Saturday, start the booking process at least two to three weeks ahead. For peak dates around bank holidays or New Year, book even earlier.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            When you book, tell the venue it is a birthday. Clubs want to make birthdays special because happy birthday groups spend more, tip better, and come back. Most venues will arrange a cake, sparklers, and sometimes a dedicated host for your group at no extra cost.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For table pricing at every major London club, check <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a>. And for a completely hands-free birthday planning experience, <a href="https://londonbirthdayclub.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Birthday Club</a> will handle everything from venue selection and booking to cake, decorations, and guestlist coordination.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Birthday Night Logistics</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            The biggest mistake birthday groups make is arriving too late. Your table booking has a window &mdash; arrive within it. If the club says arrive by midnight, arrive by midnight. After that, your table can be given away and you have lost your booking and your deposit.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Get your guestlist sorted in advance. Most clubs need names submitted 24&ndash;48 hours before the night. This means chasing your friends for their full names, which is harder than it sounds. Our <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">entry guide</Link> covers guestlist etiquette in detail.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For pre-drinks before hitting the club, check our <Link href="/blog/pre-drinks-bars-near-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to the best pre-drinks bars near London clubs</Link> to find somewhere convenient and with the right atmosphere.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 4: How Much Does a Night Out in London Cost
    // ─────────────────────────────────────────────
    case 'how-much-does-a-night-out-in-london-cost':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Short Answer: It Depends on What Kind of Night You Want</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            A night out in London can cost &pound;50 or &pound;5,000, and both of those figures are entirely normal. The range is extreme because London offers everything from world-class superclubs where the music is the main attraction to ultra-exclusive Mayfair members clubs where the table minimum alone exceeds most people&apos;s monthly rent. Where you fall on that spectrum depends on the type of night you are after.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            We are going to break down every cost category honestly, without trying to upsell you on anything. If a budget night out is what you want, we will show you how to do it properly. If you want the full VIP experience, we will tell you exactly what it costs. No surprises at the end of the night.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Entry Costs: Free to &pound;30</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Guestlist entry (free to &pound;10):</strong> This is the move for budget-conscious nights. Most London clubs offer free guestlist entry or significantly reduced entry for people who sign up in advance. The catch: guestlist usually requires arrival before a certain time (typically midnight to 12:30am) and often favours mixed groups and groups with women. Message us on WhatsApp and we can get you on the guestlist at most major venues for free.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Walk-in entry (&pound;10 to &pound;30):</strong> If you have not arranged guestlist, expect to pay at the door. <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> tickets range from &pound;15 to &pound;30 depending on the event and whether you buy in advance. Mayfair clubs rarely charge a fixed door price because entry is more about who you know and whether you have a booking.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Table bookings (entry included):</strong> When you book a table, entry is included for you and your group. This is the most reliable way to guarantee entry at <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London&apos;s hardest clubs to get into</Link>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Drinks Prices: What to Expect at the Bar</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Mayfair clubs:</strong> Cocktails run &pound;16 to &pound;22. A vodka and mixer is &pound;14 to &pound;18. A beer is &pound;10 to &pound;14. These prices apply at <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>, <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>, <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link>, and other top-tier venues. Yes, it is expensive. No, there is no way around it if you want to drink at these clubs.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Mid-tier clubs:</strong> Venues like <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link>, <Link href="/clubs/luxx-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Luxx</Link>, and <Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link> charge &pound;12 to &pound;18 for cocktails and &pound;10 to &pound;14 for spirits. Still not cheap but more manageable.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Ministry of Sound and similar:</strong> The most affordable of the major clubs. Expect &pound;8 to &pound;12 for most drinks. <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry</Link> is where you go if you want to dance all night without watching your wallet with every round.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Table Service: The Real Numbers</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Table service is where London nightlife gets serious in terms of cost. A &quot;table&quot; at a London club is not just a place to sit. It is a minimum spend commitment &mdash; you are agreeing to spend a certain amount on bottles, and in return you get a reserved area, a dedicated host, mixers, and priority entry for your group.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Starting prices:</strong> <Link href="/clubs/beat-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Beat London</Link> and <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link> offer tables from around &pound;500 to &pound;800. <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link> starts around &pound;1,000. <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link> starts from &pound;1,500 and goes significantly higher for the best tables on peak nights.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For the most up-to-date table pricing and bottle menus at every London club, <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a> has the definitive guide. Split between a group, a table can work out to &pound;100 to &pound;200 per person, which is genuinely good value when you factor in entry, a guaranteed area, and drinks.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Transport: Getting There and Getting Home</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Getting there:</strong> The Tube runs late on Fridays and Saturdays (Night Tube) on some lines, making it easy to get into <Link href="/areas/central-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">central London</Link> cheaply. An Uber into Mayfair from most London zones is &pound;15 to &pound;30.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Getting home:</strong> This is where it gets painful. Post-club Uber surge pricing between 2am and 4am is brutal. Expect to pay two to three times the normal fare. A ride that costs &pound;15 at 8pm will cost &pound;40 to &pound;60 at 3am. The Night Tube is your best friend if you are on a Central, Victoria, Jubilee, Northern, or Piccadilly line route. Night buses are also an option but obviously slower.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Realistic Budget Scenarios</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Budget night (&pound;50 to &pound;80 per person):</strong> Guestlist entry (free), pre-drinks at a nearby bar (see our <Link href="/blog/pre-drinks-bars-near-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">pre-drinks guide</Link>), three to four drinks at the club, Night Tube home. This works best at <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> or mid-tier venues.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Standard Mayfair night (&pound;100 to &pound;180 per person):</strong> Guestlist or reduced entry, cocktails at a pre-drinks bar, five to six drinks at the club, Uber home. This is the realistic cost of a proper night at <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link> or <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link> without a table.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">VIP table night (&pound;150 to &pound;300 per person):</strong> Table booking split between six to ten people at a top club. Includes entry, bottles, mixers, and a reserved area. Read our <Link href="/blog/vip-nightlife-london-guide" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">VIP nightlife guide</Link> for a full breakdown of what you get.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The best way to get the most from your budget is to plan ahead. Guestlist saves you entry fees, pre-drinks save you from paying full club prices all night, and the Night Tube saves you from surge-priced Ubers. Message us and we will help you plan a night that fits your budget.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 5: Best Friday Night Clubs in London
    // ─────────────────────────────────────────────
    case 'best-friday-night-clubs-in-london':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Friday Night in London: A Different Energy</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Friday night in London has a specific energy that Saturday does not replicate. It is the release valve after a working week. People come out with their colleagues, their friends, their dates, and the mood is lighter and more spontaneous than Saturday&apos;s more planned affairs. The clubs know this and programme accordingly &mdash; Fridays tend to be slightly more accessible, guestlist spots are easier to come by, and the door policies at some of London&apos;s toughest venues relax just a fraction.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            That said, Friday is not the poor cousin of Saturday. Some clubs actually peak on Fridays. The crowds can be better, the queues shorter, and the atmosphere more authentic because you are surrounded by people who genuinely wanted to be there, not people who felt obligated to go out because it is Saturday.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Best Mayfair Clubs on a Friday</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>:</strong> Open Thursday through Saturday, and Friday is arguably their best night. The crowd is the after-work Mayfair set mixing with industry regulars, and the atmosphere is more approachable than Saturday when it becomes more exclusive. If you have been wanting to try Tape, Friday is your best shot. Book a table through <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a> to guarantee entry.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>:</strong> The performances are just as spectacular on Fridays, but the room often has a slightly different mix of people. More international visitors, more birthday groups, and a bit more spontaneity. The guestlist is more accessible on Fridays, making this the best night to experience Cirque without a table booking.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link>:</strong> Consistently delivers on Fridays with strong DJs and a well-dressed crowd. The <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link> location means the dress code is still firmly smart, but the door is slightly more forgiving than Saturday.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Beyond Mayfair: Friday Night Options</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/tabu-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">TABU</Link>:</strong> One of the liveliest Friday spots for a younger crowd. The hip-hop soundtrack, the energy on the dance floor, and the more relaxed vibe compared to Mayfair make this a solid choice for groups who want a big night without the Mayfair price tag.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/luxx-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Luxx</Link>:</strong> Great energy on Fridays, with a younger, social crowd. The commercial music and lively atmosphere make it an easy recommendation for groups who want a fun, uncomplicated night out. Tables here are more affordable than Mayfair, making it a strong birthday or celebration option.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link>:</strong> The cocktail lounge atmosphere early in the evening transitions into a proper club by midnight. Friday nights here attract a slightly older, more sophisticated crowd who appreciate good drinks and good music without the intensity of a Mayfair megaclub.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link>:</strong> For dance music lovers, Friday at Ministry is an institution. The programming varies &mdash; check the specific event before you go &mdash; but the sound system alone makes any Friday session worth attending. See our <Link href="/guides/london-clubs-by-music-genre" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to clubs by music genre</Link> for more music-focused recommendations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Friday Night Strategy: How to Do It Right</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Arrive earlier on Fridays than you would on Saturdays. The after-work crowd starts filtering into clubs from 10:30pm onwards, and by midnight the queues build quickly. If you are on the guestlist, the arrival window is typically before 12:30am. Miss it and you may lose your spot.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Pre-drinks are essential for budget and momentum. Check our <Link href="/blog/pre-drinks-bars-near-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to the best pre-drinks bars near London clubs</Link>. Starting at a bar within walking distance of your club means you can time your arrival perfectly without relying on taxis.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For Mayfair clubs, check out <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair Tonight</a> for the latest event listings and what is happening this Friday specifically. Events change weekly at many venues, so always check what is on before you commit.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Check our guide on <Link href="/guides/clubs-open-late" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">which London clubs stay open latest</Link> if you are planning to make it a long one. Most Mayfair clubs close at 3:30am, but some venues and after-parties run later.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 6: Best Saturday Night Clubs in London
    // ─────────────────────────────────────────────
    case 'best-saturday-night-clubs-in-london':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Saturday Night: London&apos;s Main Event</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Saturday night in London is the big one. Every club runs its flagship night, every table is booked, every guestlist fills up faster, and the competition for entry at the top venues is at its most intense. If you are going to do one night out in London, Saturday is the night that delivers the full experience &mdash; but it also demands more planning than any other night of the week.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The key difference between Friday and Saturday is that Saturday is more planned. People have specific destinations, groups are larger, dress codes are enforced more strictly, and the door policies at <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London&apos;s toughest clubs</Link> are at their peak. Walking up to <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link> on a Saturday without a booking is essentially a waste of a taxi fare.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Best Saturday Night Clubs in Mayfair</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>:</strong> Saturday at Tape is as exclusive as London nightlife gets. The crowd is elite &mdash; celebrities, athletes, music industry heavyweights &mdash; and the energy inside is matched by the difficulty of getting through the door. A table booking is essentially mandatory. The hip-hop and RnB soundtrack hits harder on Saturdays because the room is full and the sound system is pushed to its best. For pricing, check <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a>.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>:</strong> Saturday at Cirque is the night you go for the full spectacle. The performers bring their A-game, the room is packed, and the energy is electric. It is the most theatrical nightclub experience in London and Saturday is when they deliver their best production. Guestlist is harder to secure on Saturdays, so a table booking is the safest route in.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/tabu-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">TABU</Link>:</strong> If you want the energy of a Mayfair Saturday without the extreme exclusivity, TABU delivers. The crowd is young, fashionable, and up for it. The music is hip-hop heavy and the dance floor gets properly busy by 1am. It is one of the more accessible Mayfair-adjacent options on a Saturday.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Saturday Beyond Mayfair</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link>:</strong> Saturday is the Reign&apos;s biggest night. The dinner-and-show format means the evening builds from a seated meal through a cabaret production and into a full club. For groups who want structure to their Saturday, this is the venue. The show quality on Saturdays is consistently excellent.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/luxx-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Luxx</Link>:</strong> High energy, young crowd, commercial music. Luxx on a Saturday is a party in the truest sense. Less pretension, more dancing, and a room full of people who are just there to have fun. Tables sell out fast here on Saturdays, especially for birthday groups.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link>:</strong> Saturday at Ministry is legendary. The programming on Saturdays features the biggest DJs, the most anticipated events, and a crowd that comes for the music above everything else. If you are into house, techno, or electronic music, Saturday at Ministry is non-negotiable. The multiple rooms mean you can switch between genres throughout the night. Check our <Link href="/guides/london-clubs-by-music-genre" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">music genre guide</Link> for more on what different venues play.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Saturday Night Survival Guide</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Book everything in advance.</strong> Tables, guestlist, even your restaurant if you are doing dinner beforehand. Saturday in London is not a night for spontaneity at the top venues. The good tables go early in the week, and guestlist spots fill up by Friday evening.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Dress code enforcement peaks on Saturdays.</strong> Whatever the dress code says on the club&apos;s website, interpret it one level smarter for Saturday. Read our <Link href="/blog/what-to-wear-to-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">dress code guide</Link> for specifics on every venue.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Transport home is going to cost you.</strong> Budget &pound;30 to &pound;60 for an Uber between 2am and 4am. The Night Tube on Central and Victoria lines is the cheaper option if it serves your route. Plan this before you go out &mdash; figuring out transport at 3am when every app is surging is the worst way to end a good night.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For the latest Saturday events across London, check <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair Tonight</a> for <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link> listings and our <Link href="/guides/clubs-open-late" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">late-night clubs guide</Link> if you want to keep going past standard closing time.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 7: London Clubs for Couples
    // ─────────────────────────────────────────────
    case 'london-clubs-for-couples':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Most Clubs Do Not Work for Couples (And Which Ones Do)</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            Going clubbing as a couple is a completely different proposition to going out with a group of mates. The dynamics are different, the priorities are different, and what makes a good night is different. You want somewhere intimate enough to feel connected to each other but lively enough that you are actually having a proper night out, not just sitting in a quiet bar.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Most of London&apos;s biggest clubs are designed for large groups. If you turn up as two at a megaclub, you can end up feeling like spectators rather than participants. The venues on this list work because they have the right balance of intimacy and energy &mdash; they are clubs where couples naturally fit in.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Top Pick: Dear Darling</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/dear-darling" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Dear Darling</Link> is arguably the best club in London for a date night that becomes a proper night out. The venue starts as a cocktail bar with genuinely excellent drinks and transitions into a club as the night progresses. The atmosphere is sophisticated and the crowd tends to be well-dressed couples and small groups in their late 20s to 30s.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            What makes Dear Darling work for couples is the pacing. You arrive early, get cocktails at the bar, settle into the atmosphere, and by the time the music picks up and the dance floor fills, you are already in the right mood. There is no awkward transition from dinner to club &mdash; it happens naturally in the same venue. The music leans into house and disco, which is inherently more couple-friendly than bass-heavy hip-hop.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Scotch of St James: The Sophisticated Option</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch of St James</Link> has an atmosphere that works brilliantly for couples. The crowd skews slightly older (late 20s to 40s), the venue is intimate without being cramped, and the music spans funk, soul, and hip-hop with enough variety to keep everyone happy. The dim lighting and lounge-style seating make it easy to have a conversation before hitting the dance floor.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The location near Piccadilly also makes it easy to build a date night around. Dinner in <Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link> or <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link> followed by Scotch is a formula that works every time.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">More Date-Friendly Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link>:</strong> The lounge-to-club transition at Maddox makes it ideal for couples. Start with cocktails in the lounge area, then move to the dance floor when the energy picks up. The crowd is mature and the atmosphere is relaxed enough that you can actually enjoy each other&apos;s company. The music is a crowd-pleasing mix that works for date night.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/lio-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">LIO London</Link>:</strong> If you want to impress, LIO is the premium date night. Dinner, a spectacular show, and then a club night &mdash; all in one venue. It is an experience rather than just a night out, and the production quality is genuinely impressive. This is the option when you want to create a memorable evening. For luxury date nights, <a href="https://londonluxurynightlife.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Luxury Nightlife</a> covers the best high-end options.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link>:</strong> Similar to LIO in concept but with a different flavour. The cabaret show gives you something to experience together before the club takes over. For an anniversary or special date, the dinner-and-show format is hard to beat.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Couples at the Door: Entry Tips</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            The good news: couples are the most welcome demographic at London clubs. A well-dressed man and woman together are exactly the type of guest that door staff want to let in. You are unlikely to face the same scrutiny that a group of five men would receive.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            That said, do not assume it is automatic. Dress well, arrive at a reasonable time, and ideally get on the guestlist in advance. Our <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to getting into London clubs</Link> has the full breakdown.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For a couples&apos; table booking, the smaller tables at venues like <Link href="/clubs/dear-darling" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Dear Darling</Link> and <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch</Link> have lower minimum spends than the large group tables at Mayfair megaclubs. A table for two at the right venue can be surprisingly affordable. Message us and we will find the right option for your budget and music taste.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Building the Perfect Date Night</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            The best couples&apos; nights out in London follow a simple structure: dinner, drinks, club. Start with a restaurant in the same area as your club &mdash; see our <Link href="/blog/pre-drinks-bars-near-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">pre-drinks bar guide</Link> for cocktail bars near every major venue. Then transition to the club when you are ready. Avoid the mistake of going to a bar on one side of London and then taking a 30-minute taxi to a club on the other. Keep everything within walking distance and the night flows naturally.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 8: VIP Nightlife London Guide
    // ─────────────────────────────────────────────
    case 'vip-nightlife-london-guide':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What VIP Actually Means at London Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            The word &quot;VIP&quot; gets thrown around so much in London nightlife that it has almost lost its meaning. Every club promises a VIP experience, every promoter offers VIP access, and every booking is &quot;VIP&quot;. So let us cut through the noise and explain what you are actually paying for when you book VIP at a London club.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            At its core, VIP at a London club means table service. You are booking a table with a minimum spend, and in return you get a reserved area (usually a booth or section near the dance floor or DJ), bottles of your choice, mixers, a dedicated host for the evening, and guaranteed entry for your group. That is the product. Everything else &mdash; the &quot;VIP experience&quot;, the prestige, the proximity to other high-spending guests &mdash; is the atmosphere that comes with it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Table Service Explained: What You Get</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">The minimum spend:</strong> This is the amount you commit to spending on bottles and drinks. It is not a fee &mdash; it is your drinks budget for the night, just prepaid. At <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>, minimums start from &pound;1,500. At <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>, from around &pound;1,000. At venues like <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link>, you can find tables from &pound;500 to &pound;800 on the right night. For the full, up-to-date pricing at every club, <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Bottle Service</a> is the definitive resource.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">What is included:</strong> Your table, a selection of bottles (typically spirits like vodka, whisky, tequila, or champagne), mixers and soft drinks, ice, and glassware. A dedicated host will look after your table, bring bottles, clear glasses, and generally make sure you have what you need. Entry is included for you and your group &mdash; no queuing, no guestlist restrictions.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">What is not included:</strong> Food (usually), additional drinks beyond your minimum spend, tips for your host (strongly encouraged &mdash; 15 to 20 percent is standard), and bottles are priced at club menu rates, which are significantly higher than retail. A bottle of Grey Goose that costs &pound;30 in a shop will be &pound;300 to &pound;500 at a Mayfair club. That is the business model.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Best VIP Clubs in London</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>:</strong> The pinnacle of VIP in London. The intimate venue means every table feels like the best table, and the celebrity-heavy crowd means you are partying in genuinely exclusive company. The sound system is exceptional and the hip-hop/RnB soundtrack is curated rather than generic. If budget is not a concern, Tape delivers the most authentic VIP experience in the city.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>:</strong> VIP at Cirque is unique because your table service comes with world-class entertainment at no extra cost. Fire-breathers, acrobats, and performers interact with table guests throughout the night. It is the most entertaining VIP experience in London and works brilliantly for celebrations.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link>:</strong> The dinner-show-club format means your VIP evening starts at 7pm and runs until 3am. The premium tables include a multi-course dinner, front-row seats for the cabaret, and then a prime position for the club. It is the best &quot;full evening&quot; VIP option.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/lio-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">LIO London</Link>:</strong> The newest premium VIP option and already one of the most sought-after. The production quality of the show is exceptional, and the transition from dinner to club is seamless. For the luxury VIP experience, <a href="https://londonluxurynightlife.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Luxury Nightlife</a> covers LIO and similar high-end options in detail.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link>:</strong> Consistently solid VIP experience with a fashion-forward crowd. The <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link> location and strong music programming make it a reliable choice for a quality night. Tables here are popular with the fashion and creative industries.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Is VIP Worth It? The Honest Answer</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            For a group of six to ten people splitting the cost, VIP table service can be surprisingly good value. Consider this: a table at <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque</Link> for &pound;1,000, split between eight people, is &pound;125 each. That covers entry (normally &pound;20 to &pound;30), drinks for the evening, a reserved area, and the full Cirque entertainment experience. Compare that to &pound;25 entry plus &pound;80 to &pound;100 on drinks at the bar, and the table starts to look like a smarter financial decision.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Where VIP becomes questionable is when you are a small group trying to hit a high minimum spend, or when you are booking a table purely for status rather than because you actually want bottles. Two people at a &pound;1,500 table is a very different proposition to ten people at the same table.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The practical benefits are real: guaranteed entry, no queue, a home base for the night, and drinks at your table rather than fighting at the bar. At <Link href="/guides/hardest-clubs-to-get-into" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London&apos;s hardest clubs to get into</Link>, a table booking is often the only realistic way through the door.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            Read our <Link href="/blog/how-much-does-a-night-out-in-london-cost" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">cost breakdown guide</Link> for a full comparison of VIP versus general admission costs at every price level.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 9: London Nightlife Guide for Tourists
    // ─────────────────────────────────────────────
    case 'london-nightlife-guide-for-tourists':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">London Nightlife Is Different from What You Are Used To</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            If you are visiting London from abroad, the nightlife scene operates differently from most other major cities. The rules, the timing, the costs, and the culture are distinctly London, and understanding them before you go out will save you from the frustration of getting things wrong. We work with tourists every week, and the same mistakes come up again and again. This guide exists so you do not make them.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The most important thing to understand: London clubs are selective. Unlike many cities where anyone who pays the entry fee gets in, London&apos;s best clubs actively choose who enters. Dress code, group composition, booking status, and even your attitude at the door all matter. This is not about being unwelcoming &mdash; it is about maintaining the atmosphere that makes these venues special. Our <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">guide to getting into London clubs</Link> covers the door policy in detail.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Understanding London&apos;s Club Areas</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            London&apos;s nightlife is spread across several distinct areas, each with its own character. Knowing which area suits what you are looking for is half the battle.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link>:</strong> The most exclusive and expensive area. Home to <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>, <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link>, and <Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link>. Smart dress code is non-negotiable. Expect to spend more but experience the highest level of London clubbing. This is where you go for the glamour and the celebrity sightings. For the latest Mayfair events, check <a href="https://mayfairtonight.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair Tonight</a>.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link>:</strong> More diverse and slightly more accessible. Venues like <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>, <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link>, and <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch of St James</Link> are here. The area is also packed with bars and restaurants, making it the easiest place to build a full evening out.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/areas/central-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Central London (broader)</Link>:</strong> Venues like <Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link> near Piccadilly Circus are in prime tourist-friendly locations. <Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link> is in Elephant and Castle, south of the river, and draws a global crowd that makes tourists feel right at home.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Essential Checklist for Tourist Clubbers</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Bring your passport.</strong> Every club requires photo ID and your passport is the most universally accepted document. UK driving licences and PASS cards work, but as a tourist your passport is the safest bet. Do not bring a photocopy &mdash; it must be the original. Read our <Link href="/blog/london-club-age-guide" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">age and ID guide</Link> for full details.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Dress smart.</strong> London&apos;s top clubs have strict dress codes. Men need smart shoes, no trainers, no sportswear. Women should dress up &mdash; think cocktail attire. Our <Link href="/blog/what-to-wear-to-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">dress code guide</Link> has specific advice for every type of venue.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Get on a guestlist or book a table.</strong> Do not just turn up and hope for the best. Guestlists are free and guarantee you entry (before a certain time). Tables guarantee entry at any time and give you a base for the night. Message us on WhatsApp and we will sort your guestlist for free &mdash; we work with tourists every week and know exactly how to set you up.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Arrive at the right time.</strong> London clubs do not get going until midnight. Arriving at 10pm means you will be in a near-empty room. For guestlist, aim to arrive between 11:30pm and 12:30am. For tables, 12am to 1am is the sweet spot. The peak energy at most clubs is between 1am and 2:30am.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Best Clubs for Tourists</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>:</strong> The most tourist-friendly of London&apos;s top clubs. The circus entertainment is universally appealing regardless of where you are from, the staff are accustomed to international guests, and the spectacle alone makes it worth the visit. It is the one London club that delivers an experience you genuinely cannot get in most other cities.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/ministry-of-sound" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Ministry of Sound</Link>:</strong> A globally recognised brand that lives up to its reputation. If you are into electronic music, Ministry is a pilgrimage. The sound system is legendary, the programming features world-class DJs, and the atmosphere on a Saturday night is electric. The crowd is naturally international, so you will not feel out of place.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link>:</strong> The dinner-and-show format is perfect for tourists because it structures your entire evening. You do not need to figure out where to eat, where to go for drinks, and where to club &mdash; it is all in one venue with world-class entertainment.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white"><Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link>:</strong> Accessible, fun, and in the heart of Soho. If you want a more relaxed, less exclusive experience without sacrificing quality, Cuckoo is a great shout.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Transport Tips for Visitors</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            The London Underground runs a Night Tube service on Fridays and Saturdays on certain lines (Central, Victoria, Jubilee, Northern, Piccadilly). This is the cheapest way to get home after a night out. Use a contactless card or Oyster card. Uber and Bolt are widely used but expect surge pricing between 2am and 4am &mdash; budget &pound;30 to &pound;60 for a post-club ride. Black cabs are an alternative but typically more expensive than apps.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For a full breakdown of what a night out costs, including transport, drinks, and entry, read our <Link href="/blog/how-much-does-a-night-out-in-london-cost" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London nightlife cost guide</Link>.
          </p>
        </>
      );

    // ─────────────────────────────────────────────
    // POST 10: Pre-Drinks Bars Near London Clubs
    // ─────────────────────────────────────────────
    case 'pre-drinks-bars-near-london-clubs':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Pre-Drinks Are Non-Negotiable in London</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            With drinks at London clubs costing &pound;14 to &pound;22 each, pre-drinks are not just a nice idea &mdash; they are a financial necessity. A couple of cocktails at a good bar before the club will save you a significant amount of money and, more importantly, get the evening started with the right energy. There is nothing worse than arriving at a club stone-cold sober while everyone else is already in full flow.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The key to great pre-drinks is location. You want a bar that is walking distance from your club so you do not waste time or money on taxis between venues. The atmosphere should build excitement for the night ahead, and the timing needs to work &mdash; you want to be leaving the bar and heading to the club at exactly the right time for guestlist or your table booking.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Pre-Drinks Near Mayfair Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            If you are heading to <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link>, <Link href="/clubs/libertine" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Libertine</Link>, or <Link href="/clubs/maddox" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Maddox</Link>, you want bars in or around <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link>. The area is packed with upscale cocktail bars, and the trick is finding ones where you can actually get in without a reservation and where the drinks are excellent without being absurdly priced.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The bars along Heddon Street and around Regent Street are perfectly positioned for Mayfair clubs. Start your evening between 9pm and 10pm, have two or three drinks, and you are within a ten-minute walk of most major Mayfair venues. Cocktail bars in this area serve well-crafted drinks in atmospheric settings that get you in the right mindset for the club.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <Link href="/clubs/dear-darling" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Dear Darling</Link> deserves special mention here because it functions brilliantly as both a pre-drinks bar and a destination in its own right. If your plans for the club fall through, you can easily stay at Dear Darling for the whole night and still have an excellent evening.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Pre-Drinks Near Soho and Piccadilly Clubs</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            For <Link href="/clubs/cirque-le-soir" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Cirque Le Soir</Link>, <Link href="/clubs/cuckoo-club" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The Cuckoo Club</Link>, and <Link href="/clubs/scotch-of-st-james" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Scotch of St James</Link>, <Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link> is your pre-drinks playground. The density of bars in Soho is unmatched in London &mdash; within a five-minute walk of any club, you will find dozens of options ranging from dive bars to premium cocktail lounges.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The streets around Carnaby, Beak Street, and Old Compton Street are the sweet spots. Cocktail bars here tend to be more creative and less formally dressed-up than Mayfair, which can be a nice contrast before heading to a smarter venue. The atmosphere is buzzy, especially on Friday and Saturday evenings when the whole area is alive with people starting their nights out.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            If you are heading to <Link href="/clubs/the-london-reign" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">The London Reign</Link> or anywhere near Piccadilly Circus, the bars along Haymarket and around Leicester Square are convenient. Be selective though &mdash; this area has a lot of tourist traps alongside genuinely good spots. Look for venues with a clear cocktail menu and an atmosphere that feels intentional rather than generic.
          </p>

          <div className="my-8">
            <WhatsAppCTA variant="inline" />
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Pre-Drinks Strategy: Timing and Budget</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Timing:</strong> Arrive at your pre-drinks bar between 9pm and 10pm. Two to three rounds of drinks takes roughly 90 minutes to two hours, which means you are heading to the club between 11pm and midnight &mdash; exactly the right window for guestlist entry. If you have a table booking, you can afford to start slightly later and arrive at the club between midnight and 1am.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">Budget:</strong> Cocktails at a decent London bar run &pound;12 to &pound;16. Wine and beer are &pound;7 to &pound;12. Three drinks at a bar before the club costs roughly &pound;35 to &pound;50 per person, versus &pound;55 to &pound;70 for the same three drinks inside a Mayfair club. The savings are real, and the bar experience adds to your night rather than subtracting from it.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            <strong className="text-white">The key rule:</strong> Do not overdo pre-drinks. Arriving at a club visibly drunk is the fastest way to get turned away, especially at venues with strict door policies. The goal is a pleasant buzz, not full-blown inebriation. London door staff are experts at spotting people who have had too many, and they will not let you in regardless of your booking or guestlist status. See our <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">entry guide</Link> for more on what door staff look for.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Best Pre-Drinks Move for Groups</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            For larger groups, especially birthday parties, having a structured pre-drinks plan is essential. Choose a bar that can accommodate your group without a reservation (or book ahead if it is more than eight people), pick somewhere with enough space that your group can sit or stand together, and make sure everyone knows the departure time.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            The biggest pre-drinks mistake groups make is staying too long at the bar and missing their guestlist window. Set an alarm, designate someone as the timekeeper, and actually leave when you planned to. A perfect night at the bar means nothing if you cannot get into the club afterwards.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For birthday celebrations, <a href="https://londonbirthdayclub.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">London Birthday Club</a> can organise both pre-drinks and the club in one seamless package. If you are planning a special occasion, take a look at our <Link href="/blog/best-clubs-for-a-birthday-in-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">birthday clubs guide</Link> for venue recommendations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">A Note on Hotel Bars</h2>
          <p className="text-[#999] leading-relaxed mb-4">
            If you are staying in a central London hotel, your hotel bar might be a perfectly good pre-drinks option. Many of London&apos;s hotels, particularly in <Link href="/areas/mayfair" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Mayfair</Link> and <Link href="/areas/soho" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Soho</Link>, have excellent bars that attract a local crowd as well as guests. The convenience factor is unbeatable &mdash; you can get ready, have drinks, and head to the club all within walking distance.
          </p>
          <p className="text-[#999] leading-relaxed mb-4">
            For a full guide to how much to budget for your evening including pre-drinks, read our <Link href="/blog/how-much-does-a-night-out-in-london-cost" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">night out cost breakdown</Link>.
          </p>
        </>
      );

    default:
      return (
        <p className="text-[#999] leading-relaxed">
          Content for this post is coming soon. Check back shortly.
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedClubs = clubs.filter((club) =>
    post.relatedClubs.includes(club.slug)
  );
  const morePosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = getArticleSchema(
    post.metaTitle,
    post.metaDescription,
    `/blog/${post.slug}`,
    post.publishedDate
  );

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <SchemaMarkup schema={articleSchema} />
      {post.faqs && <SchemaMarkup schema={getFAQSchema(post.faqs)} />}

      <article className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#666] mb-8 flex-wrap">
            <Link href="/" className="hover:text-[#999] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#999] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#999] line-clamp-1">{post.title}</span>
          </nav>

          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-medium text-[#C0C0C0] bg-white/5 px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-[#666]">
              Updated{' '}
              {new Date(post.updatedDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-[#999] leading-relaxed mb-8 border-l-2 border-[#333] pl-5">
            {post.excerpt}
          </p>

          {/* Main Content */}
          <div className="prose-custom">{getPostContent(slug)}</div>

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-[#141414] border border-[#222] rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-[#1A1A1A] transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-[#666] shrink-0 group-open:rotate-45 transition-transform text-xl">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#999] leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Related Clubs */}
      {relatedClubs.length > 0 && (
        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedClubs.map((club) => (
                <ClubCard key={club.slug} club={club} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp CTA */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#141414] border border-[#222] rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Need Help With Your Night Out?
            </h2>
            <p className="text-[#999] mb-6 max-w-lg mx-auto text-sm">
              Message us on WhatsApp for free guestlist, table bookings, and
              personalised recommendations.
            </p>
            <div className="flex justify-center">
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </section>

      {/* More from the Blog */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">
            More from the Blog
          </h2>
          <div className="space-y-4">
            {morePosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#C0C0C0] bg-white/5 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-xs text-[#666]">
                    {new Date(p.publishedDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-[#666] text-sm line-clamp-2">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
