export interface Club {
  slug: string;
  name: string;
  shortName: string;
  status: 'open' | 'permanently-closed';
  /** Renamed venues only (still open and bookable; name holds "New (formerly Old)"): the old name people still search for. */
  formerName?: string;
  /** Closed or renamed venues: a plain statement shown at the top of the venue page. */
  closedMessage?: string;
  /** Closed venues: slugs of open venues on this site to suggest instead. */
  alternatives?: string[];
  tagline: string;
  description: string;
  longDescription: string;
  address: string;
  area: string;
  areas: string[];
  musicGenres: string[];
  openingNights: string;
  closingTime: string;
  dressCode: string;
  tableMinimum: string;
  crowd: string;
  bestFor: string;
  insiderTip: string;
  whyRanked: string;
  mapUrl: string;
  tonightSuitability: string;
  guestlistRealistic: boolean;
  guestlistNote: string;
  bestForGroups: 'ladies' | 'mixed' | 'high-spenders' | 'all';
  lastMinuteTableFriendly: boolean;
  lastMinuteNote: string;
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
}

// WhatsApp numbers come from Vercel env vars so they can be changed without a code change.
// Set NEXT_PUBLIC_WHATSAPP_TABLE_NUMBER and NEXT_PUBLIC_WHATSAPP_GUESTLIST_NUMBER on Vercel
// (a redeploy is needed after changing them since pages are statically generated).
export const WHATSAPP_TABLE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_TABLE_NUMBER || '447880662708';
export const WHATSAPP_GUESTLIST_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_GUESTLIST_NUMBER || '447348644054';

// Simple pre-built links for inline CTAs (e.g. blog posts)
export const WHATSAPP_TABLE_LINK = `https://wa.me/${WHATSAPP_TABLE_NUMBER}?text=${encodeURIComponent(
  "Hi, I found you on londonclubstonight.com and I'd like to book a table."
)}`;
export const WHATSAPP_GUESTLIST_LINK = `https://wa.me/${WHATSAPP_GUESTLIST_NUMBER}?text=${encodeURIComponent(
  "Hi, I found you on londonclubstonight.com and I'd like to get on the guestlist."
)}`;

export function getWhatsAppTableUrl(clubName?: string): string {
  const club = clubName ? clubName : '(or open to suggestions)';
  const message = encodeURIComponent(
    `Hi, I found you on londonclubstonight.com and I'd like to book a table. Here are my details:\n\nClub: ${club}\nDate:\nGroup size:\nAny preferences:`
  );
  return `https://wa.me/${WHATSAPP_TABLE_NUMBER}?text=${message}`;
}

export function getWhatsAppGuestlistUrl(clubName?: string): string {
  const club = clubName ? clubName : '(or open to suggestions)';
  const message = encodeURIComponent(
    `Hi, I found you on londonclubstonight.com and I'd like to get on the guestlist. Here are my details:\n\nNight/date:\nClub preference: ${club}\nNumber of girls:\nNumber of guys:\nArrival time:`
  );
  return `https://wa.me/${WHATSAPP_GUESTLIST_NUMBER}?text=${message}`;
}

export const clubs: Club[] = [
  {
    slug: 'tape-london',
    name: 'Tape London',
    shortName: 'Tape',
    status: 'open',
    tagline: 'The celebrity members club where London\'s elite party behind closed doors',
    description: 'Exclusive members club on Hanover Square. Celebrity favourite with a hip-hop focused soundtrack and tables starting from £1,500.',
    longDescription: `Tape London is the club you hear about but can't easily get into — and that's exactly the point. Tucked away on Hanover Square in the heart of Mayfair, this members club has earned its reputation as one of London's most exclusive nightlife destinations. The crowd is a genuine mix of celebrities, athletes, music industry figures, and high-net-worth individuals who want to party without the usual hassle.

The venue itself is intimate by design. Dark, moody interiors with plush seating and a sound system that does justice to the hip-hop and RnB playlist that dominates most nights. The intimacy is what makes Tape special — you're genuinely likely to be partying next to someone famous, and the smaller capacity means the energy stays concentrated.

Getting in without a booking is extremely difficult. This isn't a club that fills from the queue — the door team are selective about who enters, and having a table reservation or being on a member's guestlist is practically essential. If you're serious about experiencing Tape, book a table. It's the only reliable way in, and with tables starting from £1,500, you're paying for the privilege of guaranteed entry to one of London's most talked-about rooms.

The music leans heavily into hip-hop, trap, and RnB with the occasional pop crossover when the crowd demands it. The DJs read the room well and the sound system — originally designed for music production — delivers a listening experience that most clubs can't match.`,
    address: '17 Hanover Square, London W1S 1BN',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB', 'Trap'],
    openingNights: 'Thursday, Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart and stylish. Think designer — no trainers, no sportswear, no exceptions. Men should wear smart shoes and a well-fitted outfit. Women dress to impress.',
    tableMinimum: '£1,500',
    crowd: 'Celebrities, music industry, models, high-net-worth. Average age 25-40.',
    bestFor: 'A genuine VIP experience where you might party next to genuine A-listers. Hip-hop lovers who want quality sound in an intimate setting.',
    insiderTip: 'Book a table — it\'s the only reliable way in. Thursday nights tend to have the most celebrity sightings. Arrive before midnight to settle in before the main crowd arrives around 12:30.',
    whyRanked: 'No other club in London delivers this level of exclusivity with this quality of music. If you can get in, it\'s an unforgettable night.',
    mapUrl: 'https://maps.google.com/?q=Tape+London+Hanover+Square',
    tonightSuitability: 'The ultimate spontaneous VIP night — intimate, exclusive, A-list energy. Best with a table booking.',
    guestlistRealistic: false,
    guestlistNote: 'Tape operates as a members club. Table booking is the most reliable route for tonight.',
    bestForGroups: 'high-spenders',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Same-day tables are rare on Fridays and Saturdays. Thursdays have better last-minute availability.',
    heroImage: '/gallery/images/Tape-1.jpg',
    cardImage: '/gallery/images/Tape-3.jpg',
    galleryImages: ['/gallery/images/Tape-10.jpg', '/gallery/images/Tape-15.jpg', '/gallery/images/Tape-17.jpg', '/gallery/images/Tape-20.jpg', '/gallery/images/TapeFriday041024PartyNextDoor-279.jpg', '/gallery/images/TapeSaturday191024-102.jpg'],
  },
  {
    slug: 'cirque-le-soir',
    name: 'Cirque Le Soir',
    shortName: 'Cirque',
    status: 'open',
    tagline: 'London\'s wildest circus-themed nightclub where entertainment meets mayhem',
    description: 'Circus-themed celebrity hotspot on Ganton Street. Known for outrageous entertainment, fire-breathers, and performers. Hip-hop & RnB. Tables from £1,000.',
    longDescription: `Cirque Le Soir is unlike anything else in London. Located on Ganton Street in the Carnaby area between Soho and Mayfair, this circus-themed nightclub has been a celebrity magnet since it opened — and one visit will tell you why. This isn't a club that happens to have entertainment on the side. The entertainment IS the experience.

From the moment you walk in, you're surrounded by performers. Contortionists bending between the tables, fire-breathers illuminating the dark room, stilt-walkers moving through the crowd, and performers whose acts would be headline-worthy at any cabaret show. The venue is deliberately dark, deliberately chaotic, and deliberately over-the-top. It's sensory overload in the best possible way.

The music is predominantly hip-hop and RnB, played loud and unapologetic. The DJs know their crowd — this is a party venue, not a listening room — and the energy stays high from doors to close. The celebrity sightings are frequent and genuine; Cirque has hosted everyone from Drake to Rihanna to practically every Premier League footballer.

Entry is challenging without a booking. The club has a strict door policy and a capacity that fills quickly. Table bookings start from £1,000 and are the most reliable route in. Guestlist is available but competitive — expect to queue and to be assessed by the door team. Mixed groups fare better than all-male parties.

What makes Cirque Le Soir special is the commitment to spectacle. Every night feels like an event. It's not a place for a quiet drink — it's a place where you'll see things you've never seen in a nightclub before and leave with stories you'll be telling for years.`,
    address: '15-21 Ganton Street, London W1F 9BN',
    area: 'Soho',
    areas: ['Soho', 'Central London', 'Mayfair'],
    musicGenres: ['Hip-Hop', 'RnB'],
    openingNights: 'Wednesday, Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart glamorous. Stand out — this isn\'t a club for blending in. Heels and dresses for women, smart tailored looks for men. No casual wear.',
    tableMinimum: '£1,000',
    crowd: 'Celebrities, influencers, international visitors, birthday groups. Average age 23-35.',
    bestFor: 'Anyone who wants a night they\'ll never forget. Birthday celebrations. Groups who want entertainment with their nightlife. Instagram-worthy experiences.',
    insiderTip: 'Saturday nights have the most performers and the biggest production. If it\'s your birthday, the performers will come to your table — just let the team know when you book.',
    whyRanked: 'Nothing else in London — or arguably the world — delivers this combination of nightclub energy and circus entertainment. It\'s a London institution for a reason.',
    mapUrl: 'https://maps.google.com/?q=Cirque+Le+Soir+London',
    tonightSuitability: 'Perfect for a spontaneous night of spectacle — fire-breathers, performers, and hip-hop. Always an event.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist works well for mixed groups. Message us early in the day for tonight.',
    bestForGroups: 'mixed',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Same-day tables often available, especially on Wednesdays and Fridays. Saturdays book out faster.',
    heroImage: '/gallery/images/fe4414_e922024731294a3ea658c81cc1c1c77f.jpg',
    cardImage: '/gallery/images/fe4414_7fd0b80992234fc6be62b06ab7d8ccac.jpg',
    galleryImages: ['/gallery/images/fe4414_e8d36bbc2efc4a019f285b39fa00b28f.jpg', '/gallery/images/fe4414_5dd524d974ed4435b62b0b022ff2d04a.jpg', '/gallery/images/fe4414_abfb3ef6a9794a8ab2e27779ebfab3f5.jpg', '/gallery/images/fe4414_423495393edf437d9425d453f03729f1.jpg', '/gallery/images/fe4414_54a8200c73ae49e7a5ee7170777de8bf.jpg', '/gallery/images/fe4414_cb890a122c024a4ab9ebfd0340633155.jpg'],
  },
  {
    slug: 'the-london-reign',
    name: 'The London Reign',
    shortName: 'Reign',
    status: 'open',
    tagline: 'Piccadilly\'s theatrical showclub where dinner meets performance meets late-night revelry',
    description: 'Extravagant showclub on Piccadilly in St James\'s. Aerial acts, performances, and a full dining experience. Tables from £1,000.',
    longDescription: `The London Reign sits on Piccadilly and brings something genuinely different to London's nightlife. This is a showclub in the truest sense — a venue where world-class entertainment, fine dining, and late-night clubbing converge into a single spectacular evening.

The experience typically starts with dinner. The restaurant serves a polished menu while performers work the room — aerial artists spinning above your table, live vocalists, dancers, and acts that blur the line between nightclub and West End show. As the evening progresses, the dining tables transition and the space transforms into a full nightclub environment with a high-energy DJ taking over.

The venue itself is grand. High ceilings that accommodate the aerial rigging, opulent décor, and a scale that makes other London clubs feel small. The production values are genuinely impressive — lighting, sound, and the quality of performers are all top-tier.

Entry is managed primarily through table bookings and guestlist. Walk-ins are possible but not reliable, particularly on weekends. The door policy is smart and selective. Tables start from £1,000 and the dinner-plus-club packages offer the best overall experience.

Reign appeals to a broad crowd — from couples celebrating special occasions to corporate groups entertaining clients to birthday parties that want something more memorable than a standard club night. The music shifts from sophisticated dinner accompaniment to mainstream party tracks as the night evolves.`,
    address: '12 Piccadilly, London W1J 0DD',
    area: 'St James\'s',
    areas: ['St James\'s', 'Central London'],
    musicGenres: ['Open Format', 'Pop', 'RnB'],
    openingNights: 'Thursday, Friday, Saturday',
    closingTime: '3:00am',
    dressCode: 'Smart elegant. This is a venue where people dress up. Suits, cocktail dresses, and heels are the norm. No casual or streetwear.',
    tableMinimum: '£1,000',
    crowd: 'Mixed — couples, corporate groups, birthday celebrations, international visitors. Average age 25-45.',
    bestFor: 'Special occasions where you want dinner and clubbing in one venue. Corporate entertaining. Anyone who appreciates theatrical production in their nightlife.',
    insiderTip: 'Book the dinner-and-club package for the full experience. Arrive early enough for the show — the aerial acts during dinner are the highlight, and you\'ll miss them if you arrive at midnight.',
    whyRanked: 'The combination of fine dining, West End-quality entertainment, and genuine late-night clubbing is unique in London. No other venue pulls off this triple-threat format so well.',
    mapUrl: 'https://maps.google.com/?q=The+London+Reign+Piccadilly',
    tonightSuitability: 'Dinner, show, and club in one venue — ideal for a complete spontaneous evening with built-in entertainment.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist available for the club portion. Dinner-show packages need advance booking.',
    bestForGroups: 'mixed',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Club-only tables often available same-day. Dinner-show packages usually need 24 hours notice.',
    heroImage: '/gallery/images/DSC_6868.jpg',
    cardImage: '/gallery/images/DSC_6882.jpg',
    galleryImages: ['/gallery/images/DSC_6890.jpg', '/gallery/images/DSC_6895.jpg', '/gallery/images/DSC_6903.jpg', '/gallery/images/DSC_6920.jpg', '/gallery/images/DSC_6932.jpg', '/gallery/images/DSC_6946.jpg'],
  },
  {
    slug: 'tabu-london',
    name: 'Rumour (formerly TABU)',
    shortName: 'Rumour',
    status: 'open',
    formerName: 'TABU London',
    closedMessage: 'TABU London is now Rumour, at 1 Dover Street in Mayfair. Rumour opens Wednesday to Saturday from 11pm, and tables at Rumour are booked on WhatsApp like every other club on this site.',
    tagline: 'TABU is now Rumour: 1 Dover Street, Mayfair, Wednesday to Saturday from 11pm',
    description: 'TABU London is now Rumour, at 1 Dover Street in Mayfair, open Wednesday to Saturday from 11pm. Book a table at Rumour on WhatsApp.',
    longDescription: `TABU is now Rumour. The club at 1 Dover Street in Mayfair trades under its new name, and people still search for it as TABU, Tabu club or Tabu Mayfair, so this page covers the change and how to book a table at Rumour.

Rumour opens Wednesday to Saturday from 11pm, according to its public listings. Dover Street runs between Piccadilly and Hay Hill, close to Green Park station, in the busiest part of Mayfair for late nights.

Music, dress code and table minimums at Rumour are the new venue's own, and none of TABU's old terms carry over. Message us on WhatsApp with your date and group size for current table prices and availability.

History: under the TABU name, the room was a below-street-level Mayfair club with a Japanese underground theme. That was TABU, not Rumour.`,
    address: '1 Dover Street, Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: [],
    openingNights: 'Wednesday, Thursday, Friday, Saturday',
    closingTime: 'To be confirmed',
    dressCode: 'Not confirmed for Rumour yet: ask us when you book.',
    tableMinimum: 'On request',
    crowd: 'Not confirmed for Rumour yet.',
    bestFor: 'Groups who want a table on Dover Street in Mayfair, Wednesday to Saturday from 11pm.',
    insiderTip: 'TABU is now Rumour, at 1 Dover Street. Doors open from 11pm, Wednesday to Saturday.',
    whyRanked: 'TABU is now Rumour: a bookable Mayfair club at 1 Dover Street, open Wednesday to Saturday from 11pm.',
    mapUrl: 'https://maps.google.com/?q=Rumour+1+Dover+Street+Mayfair+London',
    tonightSuitability: 'TABU is now Rumour: 1 Dover Street, Mayfair, from 11pm Wednesday to Saturday. Message us for a table.',
    guestlistRealistic: false,
    guestlistNote: 'Guestlist terms at Rumour are not confirmed here; a table booked through us is the reliable route.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Message us on WhatsApp to check same-day tables at Rumour.',
    heroImage: '/gallery/images/fe4414_4c672667e7a5457b9224ad73e3c5dda7.jpg',
    cardImage: '/gallery/images/fe4414_e949276097ce47268f86b1b06b938c57.jpg',
    galleryImages: ['/gallery/images/fe4414_48ae7b23f1e04f0a94a53da7e6a08ea9.jpg', '/gallery/images/fe4414_d03ed6fb1e754a34a815beebf6a14835.jpg', '/gallery/images/fe4414_ff953c00db3a4af5b4b7a6575ab8abae.jpg', '/gallery/images/fe4414_4cdad8e2e343466889cfb9614f83379f.jpg', '/gallery/images/fe4414_c6667a69785e4fac823c8041211beae8.jpg', '/gallery/images/fe4414_458bf79db0954e1ea5f6d28ea1917064.jpg'],
  },
  {
    slug: 'libertine',
    name: 'Libertine',
    shortName: 'Libertine',
    status: 'permanently-closed',
    closedMessage: 'Libertine has closed, and Selene now operates in its place. Libertine no longer takes table bookings or guestlist names; for a table at Selene, or at Tape London or Dear Darling nearby, message us on WhatsApp.',
    alternatives: ['selene-london', 'tape-london', 'dear-darling', 'maddox'],
    tagline: 'The futuristic Mayfair club, now closed: Selene operates in its place',
    description: 'Libertine in Mayfair has closed, and Selene now operates in its place. What Libertine was, and the open clubs to book instead: Selene, Tape London and Dear Darling.',
    longDescription: `Libertine has closed, and Selene now operates in its place. People still search for Libertine by name, so this page explains what it was and where to go instead.

History: when it was open, Libertine was a Mayfair club with a futuristic look, clean lines and modern lighting, and it played hip-hop and RnB to a fashion-forward crowd. Tables started from £1,000 at the time.

For a table in the same spot today, Selene is the venue that now operates there. Tape London on Hanover Square suits the same hip-hop and RnB crowd, and Dear Darling suits groups who want cocktails before the dancing.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB'],
    openingNights: 'Closed',
    closingTime: 'Closed',
    dressCode: 'When it was open, Libertine asked for smart, fashion-forward outfits and turned away casual or athletic wear.',
    tableMinimum: 'Closed',
    crowd: 'When it was open: fashion-forward creatives, professionals and influencers, mostly in their mid twenties to mid thirties.',
    bestFor: 'Libertine has closed. Selene now operates in its place, and Tape London and Dear Darling suit the same crowd.',
    insiderTip: 'Libertine has closed. Selene now operates in its place.',
    whyRanked: 'Libertine has closed.',
    mapUrl: 'https://maps.google.com/?q=Libertine+London+Mayfair',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/fe4414_8742ffee41884142b564cb9eb73dbd2e.jpg',
    cardImage: '/gallery/images/fe4414_8c53c9c02f2f4173aa840081ff97993c.jpg',
    galleryImages: ['/gallery/images/fe4414_a356370fa60d48ee9b6b3469c2b7ca3b.jpg', '/gallery/images/fe4414_9d461c43831448e09e1bdac31fb73748.jpg'],
  },
  {
    slug: 'luxx-club',
    name: 'Luxx Club London',
    shortName: 'Luxx',
    status: 'permanently-closed',
    closedMessage: 'Luxx Club London has closed, and its successor is Itzel, which now operates at its Berkeley Street address. Luxx no longer takes table bookings or guestlist names. For an open-format night with a show, try Cirque Le Soir, The London Reign or Tape London.',
    alternatives: ['cirque-le-soir', 'the-london-reign', 'tape-london', 'dear-darling'],
    tagline: 'The Mayfair light-show club, now closed: its successor is Itzel',
    description: 'Luxx Club London in Mayfair has closed; its successor is Itzel. What Luxx was, and the open clubs to book instead: Cirque Le Soir, The London Reign and Tape London.',
    longDescription: `Luxx Club London has closed, and its successor is Itzel, which now operates at its Berkeley Street address. People still search for Luxx by name, so this page explains what it was and where to go instead.

History: when it was open, Luxx was known for its LED light shows, with walls and ceilings that changed through the night in time with the music. It played open format with a lean towards hip-hop, and it drew birthday groups, regulars and international visitors. Tables started from £1,000 at the time.

For a night where the room is part of the show today, Cirque Le Soir has performers around the tables, The London Reign pairs dinner with a cabaret and a club, and Tape London is the hip-hop choice with a harder door.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Open Format', 'Hip-Hop'],
    openingNights: 'Closed',
    closingTime: 'Closed',
    dressCode: 'When it was open, Luxx followed the smart Mayfair standard: smart shoes for men and no sportswear.',
    tableMinimum: 'Closed',
    crowd: 'When it was open: locals, birthday groups and international visitors, mostly in their twenties and early thirties.',
    bestFor: 'Luxx Club London has closed; its successor is Itzel. Cirque Le Soir, The London Reign and Tape London suit the same celebration crowd.',
    insiderTip: 'Luxx Club London has closed. Its successor is Itzel.',
    whyRanked: 'Luxx Club London has closed.',
    mapUrl: 'https://maps.google.com/?q=Luxx+Club+London+Mayfair',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/fe4414_a3ed16e550ee4a7cb8fd937b2d1cbb52.jpg',
    cardImage: '/gallery/images/fe4414_73a4e6bb3bd84387ad1f114751e321a5.jpg',
    galleryImages: ['/gallery/images/fe4414_17b5d83792d8412abf2893e2cdd81941.jpg', '/gallery/images/fe4414_4ebd9c3941ed440f997e51cb8fc2c279.jpg'],
  },
  {
    slug: 'maddox',
    name: 'Maddox',
    shortName: 'Maddox',
    status: 'open',
    tagline: 'Where Mayfair\'s finest Italian dining transitions seamlessly into house music until late',
    description: 'Restaurant and nightclub hybrid in Mayfair. Italian cuisine followed by house music clubbing. Tables from £1,000.',
    longDescription: `Maddox is one of those Mayfair venues that genuinely does two things well — and that's rare. By early evening, it's a refined Italian restaurant serving dishes that would stand up in any serious dining review. By midnight, it's a house music club with one of the best sound systems in W1. The transition between the two happens seamlessly, and it's this dual identity that makes Maddox special.

The restaurant side is no afterthought. The Italian menu is authentically prepared, the wine list is carefully curated, and the dining room has the kind of warm, sophisticated atmosphere that makes you want to stay longer than you planned. Many guests arrive for dinner with no intention of staying for the club — and end up staying until close.

When the music takes over, Maddox becomes a house music destination. This is notable because most Mayfair clubs lean heavily into hip-hop — Maddox's house music policy gives it a distinct sonic identity. The DJs are quality, the system is tuned for the genre, and the crowd that stays for the music genuinely appreciates it.

The dual format means the crowd is interesting. Early evening brings food enthusiasts and couples. Late night brings house music devotees and club regulars. The crossover period — when diners decide to stay — creates a unique energy that pure nightclubs can't replicate.

Tables start from £1,000 for the club portion of the evening. Dinner reservations are separate and more accessible. The smartest move is booking dinner and letting the evening evolve naturally into the club.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['House'],
    openingNights: 'Wednesday, Thursday, Friday, Saturday',
    closingTime: '3:00am',
    dressCode: 'Smart elegant. The dining room sets the standard — this is a venue where people dress well for dinner and maintain that standard into the evening.',
    tableMinimum: '£1,000',
    crowd: 'Foodies, house music enthusiasts, professionals. Average age 27-40.',
    bestFor: 'Couples and groups who want dinner and clubbing in one venue without compromising on either. House music lovers in Mayfair.',
    insiderTip: 'Book dinner for 9pm — you\'ll have a relaxed meal and be perfectly positioned as the music transitions. The house music programming on Fridays is particularly strong.',
    whyRanked: 'The restaurant-to-club transition is the smoothest in London, and the house music policy gives Maddox a unique position in a hip-hop dominated market.',
    mapUrl: 'https://maps.google.com/?q=Maddox+Club+London+Mayfair',
    tonightSuitability: 'Sophisticated dinner-to-club transition. House music, cocktails, and a grown-up crowd. Great for date nights.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist available and realistic for most groups. Couples especially welcome.',
    bestForGroups: 'mixed',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Dinner reservations and club tables often available same-day, especially midweek.',
    heroImage: '/gallery/images/fe4414_8b5a36eadc454e18b89e9d4093858634.jpg',
    cardImage: '/gallery/images/fe4414_4f8ffd1c85424160acecfb2179b112e5.jpg',
    galleryImages: ['/gallery/images/fe4414_abbed8cf1a734478b4e50ac19c0815cb.jpg', '/gallery/images/fe4414_b8610046edd041589056cde77a7c0816.jpg', '/gallery/images/fe4414_ded9cc7fa1384e0dbcea15e23b3c711a.jpg', '/gallery/images/fe4414_b73c59d02559433baf6bdaff91a1bff3.jpg', '/gallery/images/fe4414_ab79d0b759bf40809b9f375b219a4b87.jpg', '/gallery/images/fe4414_281a5650e67a47fca8d2610ee3b66d1e.jpg'],
  },
  {
    slug: 'scotch-of-st-james',
    name: 'Scotch of St James',
    shortName: 'Scotch',
    status: 'open',
    tagline: 'The historic Mayfair club where Jimi Hendrix played and London\'s elite still parties',
    description: 'Exclusive historic club in Mayfair with a legendary past dating back to the 1960s. Elegant parties in an intimate setting. Tables from £1,000.',
    longDescription: `Scotch of St James carries more history than any other nightclub in London. This is the venue where Jimi Hendrix played impromptu sets in the 1960s, where The Beatles hung out, and where London's cultural elite have gathered for over half a century. That history isn't just a marketing angle — you feel it the moment you walk through the door.

The venue has been updated over the decades but retains an atmosphere that connects to its heritage. It's intimate, darkly elegant, and has the kind of character that modern clubs struggle to manufacture. The interiors blend the venue's historic bones with contemporary luxury — leather booths, warm lighting, and a layout that creates distinct areas within a compact space.

The music varies by night but the overall programming leans towards curated, elegant party sets. This isn't a venue where the DJ plays the latest chart hits on repeat — the musical selection has more depth and variety, reflecting the venue's roots in music culture. Expect everything from classic soul and funk to contemporary hip-hop, handled with taste.

The crowd at Scotch tends to be slightly older and more discerning than at some of the flashier Mayfair clubs. These are people who appreciate history and atmosphere over spectacle and Instagram moments. The regulars are loyal and the venue benefits from a genuine community feel.

Tables start from £1,000 and the intimate scale means every table feels premium. Guestlist is available but the space fills quickly. The door policy is selective — presentation and booking status matter.`,
    address: 'Mason\'s Yard, London SW1Y 6BU',
    area: 'Mayfair',
    areas: ['Mayfair', 'St James\'s', 'Central London'],
    musicGenres: ['Mixed', 'Soul', 'Funk', 'Hip-Hop'],
    openingNights: 'Thursday, Friday, Saturday',
    closingTime: '3:00am',
    dressCode: 'Smart and refined. Think classic rather than trendy. Well-dressed without trying too hard — the Scotch crowd values understated style.',
    tableMinimum: '£1,000',
    crowd: 'Music lovers, creative professionals, older clientele who appreciate heritage. Average age 28-45.',
    bestFor: 'Anyone who appreciates history and atmosphere. Music lovers who want more curated programming. Couples looking for intimate, sophisticated nightlife.',
    insiderTip: 'Ask about the venue\'s history when you visit — the staff know the stories and the Hendrix connection is genuine. Thursday nights tend to be more intimate and musically eclectic.',
    whyRanked: 'No other club in London has this combination of genuine history, intimate atmosphere, and musical credibility. It\'s a living piece of London\'s cultural heritage.',
    mapUrl: 'https://maps.google.com/?q=Scotch+of+St+James+London',
    tonightSuitability: 'Historic Mayfair atmosphere with an eclectic crowd. More relaxed than the big-name venues — genuine character.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist works well. The door is welcoming to well-dressed groups of all compositions.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'One of the easier Mayfair venues for same-day table bookings. Good availability most nights.',
    heroImage: '/gallery/images/fe4414_58f05bf5164c42dc994932151da108be.jpg',
    cardImage: '/gallery/images/fe4414_c5d71df402634f1bb95e48817e645371.jpg',
    galleryImages: ['/gallery/images/fe4414_de7fc0b8b7b04a1e956a7161623452b6.jpg', '/gallery/images/fe4414_5a886c260d914f009b5e498b98c5dfe4.jpg', '/gallery/images/fe4414_6f2589c074724205998ccd4113a4a94b.jpg', '/gallery/images/fe4414_4a9e8d6a5af24e05a5817d8d20c43909.jpg', '/gallery/images/fe4414_d9c7d11ba4494929b40a6173e605018a.jpg', '/gallery/images/fe4414_c1cdde8590474c1fa5509122636f79d1.jpg'],
  },
  {
    slug: 'cuckoo-club',
    name: '99 Regent Street (formerly Cuckoo Club)',
    shortName: '99 Regent Street',
    status: 'open',
    formerName: 'Cuckoo Club',
    closedMessage: 'Cuckoo Club is now 99 Regent Street, on Swallow Street by Piccadilly Circus. 99 Regent Street opens Wednesday to Saturday for over 19s, with tables from £600, booked on WhatsApp like every other club on this site.',
    tagline: 'Cuckoo Club is now 99 Regent Street: Swallow Street by Piccadilly Circus, tables from £600',
    description: 'Cuckoo Club is now 99 Regent Street, on Swallow Street by Piccadilly Circus. Open Wednesday to Saturday, over 19s, tables from £600. Book a table on WhatsApp.',
    longDescription: `Cuckoo Club is now 99 Regent Street. The venue on Swallow Street, by Piccadilly Circus, trades under its new name, and people still search for Cuckoo Club, so this page covers the change and how to book a table at 99 Regent Street.

99 Regent Street opens Wednesday to Saturday. Entry is for over 19s, and tables start from £600 minimum spend.

Music and dress code at 99 Regent Street are the new venue's own, and none of Cuckoo Club's old terms carry over. Message us on WhatsApp with your date and group size for availability.

History: under the Cuckoo Club name, the venue was a long-running Swallow Street club. That was Cuckoo Club, not 99 Regent Street.`,
    address: 'Swallow Street, London W1B 4EZ',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: [],
    openingNights: 'Wednesday, Thursday, Friday, Saturday',
    closingTime: 'To be confirmed',
    dressCode: 'Not confirmed for 99 Regent Street yet: ask us when you book. Entry is for over 19s.',
    tableMinimum: '£600',
    crowd: 'Over 19s only.',
    bestFor: 'Groups who want a table by Piccadilly Circus from £600, Wednesday to Saturday.',
    insiderTip: 'Cuckoo Club is now 99 Regent Street. Entry is for over 19s, so bring photo ID.',
    whyRanked: 'Cuckoo Club is now 99 Regent Street: a bookable club on Swallow Street, open Wednesday to Saturday, with tables from £600.',
    mapUrl: 'https://maps.google.com/?q=99+Regent+Street+Swallow+Street+London',
    tonightSuitability: 'Cuckoo Club is now 99 Regent Street: Swallow Street by Piccadilly Circus, over 19s, tables from £600. Message us for a table.',
    guestlistRealistic: false,
    guestlistNote: 'Guestlist terms at 99 Regent Street are not confirmed here; a table booked through us is the reliable route.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Message us on WhatsApp to check same-day tables at 99 Regent Street.',
    heroImage: '/gallery/images/fe4414_52d6295c80bc46b3b8b13d5eb0c385f5.jpg',
    cardImage: '/gallery/images/fe4414_dd9694e452204ef99a0b6c2dc693faf9.jpg',
    galleryImages: ['/gallery/images/fe4414_affd1145589143f7a655ebcb34a0a7c8.jpg', '/gallery/images/fe4414_344fbd63598246e7aa317196b7721a0c.jpg', '/gallery/images/fe4414_950de24e4f2b429ba47a022f13479db5.jpg', '/gallery/images/fe4414_aa163b7210fe4225a069d699f9400858.jpg', '/gallery/images/fe4414_b4633e7c60fa491e8c26bea776d3e98c.jpg', '/gallery/images/fe4414_f1f26d54e1e14b6384eb337005445fbf.jpg'],
  },
  {
    slug: 'dear-darling',
    name: 'Dear Darling',
    shortName: 'Dear Darling',
    status: 'open',
    tagline: 'Mayfair\'s most opulent cocktail bar with a late-night secret',
    description: 'Opulent Mayfair cocktail bar with chandeliers and velvet booths. Premium cocktails with late-night clubbing. Tables from £1,000.',
    longDescription: `Dear Darling is Mayfair at its most decadent. Walking in feels like stepping into a gilded private salon — chandeliers hang from ornate ceilings, velvet booths line the walls, and every surface seems designed to catch the warm, amber lighting. It's unapologetically opulent, and it works.

This venue starts the evening as a premium cocktail bar. The drinks list is extensive and genuinely excellent — the bartenders are skilled, the ingredients are top-tier, and the presentation matches the surroundings. This isn't a bar that serves cocktails as an afterthought to the clubbing — the cocktail experience is a genuine draw in itself.

As the night progresses, Dear Darling transitions into a late-night venue with DJs and dancing. The transition is gentler than at pure nightclubs — the music builds gradually, the lighting shifts, and the cocktail bar atmosphere evolves into something more energetic without losing its elegance. It's an approach that suits people who want a stylish evening that becomes a night out organically.

The crowd is well-dressed and appreciative of the venue's aesthetic. This is a place where people come to feel glamorous, and the surroundings deliver on that promise. Couples, small groups, and pre-club gatherings are common — though many guests who arrive for "just a drink" end up staying until close.

Tables start from £1,000 for the late-night experience. Earlier evening bookings for cocktails are more flexible. The door policy is smart but welcoming — this venue wants you to enjoy yourself, not intimidate you.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Mixed', 'Deep House', 'RnB'],
    openingNights: 'Thursday, Friday, Saturday',
    closingTime: '2:30am',
    dressCode: 'Smart glamorous. The venue\'s opulence sets the standard. Dress to match your surroundings.',
    tableMinimum: '£1,000',
    crowd: 'Glamour-conscious, cocktail enthusiasts, couples, pre-club groups. Average age 26-38.',
    bestFor: 'Couples looking for a glamorous date night. Groups who want cocktails first and dancing later. Anyone who appreciates opulent interiors.',
    insiderTip: 'Arrive at 9pm for cocktails when the venue is at its most atmospheric. The transition to late-night happens gradually — enjoy the evolution rather than arriving at midnight.',
    whyRanked: 'The cocktail-to-club transition in these surroundings is unmatched. It\'s the most beautiful room in Mayfair\'s nightlife.',
    mapUrl: 'https://maps.google.com/?q=Dear+Darling+Mayfair+London',
    tonightSuitability: 'Glamorous cocktail bar that becomes a late-night venue. Best for an elegant, low-key start to the evening.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist available. The cocktail bar format means entry is generally straightforward.',
    bestForGroups: 'ladies',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Very flexible for same-day bookings. The cocktail-focused format means less pressure on table minimums.',
    heroImage: '/gallery/images/fe4414_b3ddf2c48c9d49dfbd53bd0710bcf757.jpg',
    cardImage: '/gallery/images/fe4414_9584be9cd3af42b28799afa2a52a64ec.jpg',
    galleryImages: ['/gallery/images/fe4414_e139c9c3f58a470ba008a1ac6ddbd730.jpg', '/gallery/images/fe4414_d06e7bf2872e4c60853096d8aa8afe24.jpg', '/gallery/images/fe4414_af41f902101148d3866c12c28816d0d0.jpg', '/gallery/images/fe4414_49fe694c3d33461193c27d16f731a5df.jpg', '/gallery/images/fe4414_6e2adddf70f24f388d49faeba85db960.jpg', '/gallery/images/fe4414_491c64bede334c11aad784d7517742a7.jpg'],
  },
  {
    slug: 'beat-london',
    name: 'BEAT London',
    shortName: 'BEAT',
    status: 'open',
    tagline: 'High-energy clubbing with one of London\'s most powerful sound systems',
    description: 'Margaret Street nightclub with a powerful sound system and high-energy atmosphere. Tables from £1,000.',
    longDescription: `BEAT London is built around one thing above all else: the sound system. Located on Margaret Street, this club has invested in audio equipment that rivals dedicated music venues, and you hear the difference the moment you walk in. The bass is physical, the highs are crisp, and the overall sound quality makes a genuine difference to the clubbing experience.

The venue itself is designed to complement the audio. The room acoustics have been considered, the layout channels the sound effectively, and the dancefloor is positioned for maximum impact. This is a club for people who actually care about the music — not just as background to their table service experience, but as the main event.

The programming varies by night but the consistent thread is energy. Whether it's hip-hop, house, or a guest DJ bringing their own flavour, the nights at BEAT are designed to keep the dancefloor moving. The compact size means the energy concentrates effectively — even on quieter nights, the room feels alive.

The crowd tends to be younger and more music-focused than at some of the flashier Mayfair venues. People come to BEAT because they want to dance and they want to hear music played properly. The atmosphere is enthusiastic without being aggressive, and the lack of VIP pretension is refreshing.

Tables start from £1,000 and offer good views of the dancefloor and DJ booth. The guestlist is accessible and the door policy, while smart, isn't designed to exclude — it's designed to maintain the quality of the crowd.`,
    address: 'Margaret Street, London W1',
    area: 'Fitzrovia',
    areas: ['Central London'],
    musicGenres: ['Hip-Hop', 'House', 'Open Format'],
    openingNights: 'Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart casual. Smarter than a bar but less formal than traditional Mayfair. Clean, well-put-together outfits work.',
    tableMinimum: '£1,000',
    crowd: 'Music lovers, younger professionals, dancefloor-focused. Average age 22-32.',
    bestFor: 'People who prioritise sound quality and music over VIP status. Groups who want to dance. Music enthusiasts who appreciate a great system.',
    insiderTip: 'Stand near the main speakers for the full audio experience — the system is calibrated so it sounds powerful without being painful. Saturday nights have the strongest DJ lineups.',
    whyRanked: 'The sound system alone justifies the inclusion. When the DJ is right and the room is full, BEAT delivers one of the best pure clubbing experiences in central London.',
    mapUrl: 'https://maps.google.com/?q=BEAT+London+Margaret+Street',
    tonightSuitability: 'Music-first venue with one of London\'s best sound systems. High energy, less pretension than Mayfair.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist is straightforward here. Less strict than Mayfair venues on group composition.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Good same-day availability. More accessible than Mayfair for last-minute plans.',
    heroImage: '/gallery/images/fe4414_c0f53cc6cfe84299987ece034fa64e25.jpg',
    cardImage: '/gallery/images/fe4414_d98580822591406082db347183f9192a.jpg',
    galleryImages: ['/gallery/images/fe4414_2b0b9405f5084a1bb087854db63c68ab.jpg', '/gallery/images/fe4414_9bca79c7758d42a48f33bfe38f57e6d0.jpg', '/gallery/images/fe4414_8d1b76fde5204b9d845400d8d6d40739.jpg', '/gallery/images/fe4414_f00637f3a2a740078b492ed93e5ec5e5.jpg', '/gallery/images/fe4414_938458d67f614f5cb736ac0e2e4fe1f9.jpg', '/gallery/images/fe4414_f06a962e34d74d8d88f62e3607c5dab0.jpg'],
  },
  {
    slug: 'ministry-of-sound',
    name: 'Ministry of Sound',
    shortName: 'Ministry',
    status: 'open',
    tagline: 'London\'s legendary superclub — the cathedral of electronic music since 1991',
    description: 'Iconic South London superclub in Elephant & Castle. Multiple rooms, world-class sound, house and techno. Tables from £1,000.',
    longDescription: `Ministry of Sound needs no introduction — but it deserves one anyway. Since 1991, this Elephant & Castle institution has been the benchmark against which every other dance music venue in London is measured. The building might not look like much from the outside, but step through the doors and you're entering hallowed ground for anyone who cares about electronic music.

The main room — The Box — is legendary. The custom-built sound system is one of the finest in the world, and the room has been acoustically engineered to deliver sound that you feel in your chest. The bass is precise rather than overwhelming, and the clarity at every frequency is remarkable. DJs regularly cite Ministry's system as the best they've played on.

Multiple rooms offer different sonic experiences throughout the night. The main room handles the headline acts and biggest energy, while the secondary rooms explore different genres and tempos. This multi-room format means the venue caters to diverse tastes within a single visit — you might hear techno in one room, house in another, and something completely unexpected in a third.

The crowd is genuinely diverse — in age, background, and music taste. Ministry attracts everyone from seasoned ravers who've been coming since the 90s to new converts experiencing their first proper sound system. The common thread is respect for the music and the venue's legacy.

Unlike the Mayfair clubs, Ministry operates on a larger scale. Capacity runs into the thousands, queues can be significant, and the atmosphere is different — more egalitarian, more music-focused, less concerned with VIP status. Tables are available from £1,000 for those who want them, but Ministry is fundamentally about the dancefloor experience.`,
    address: '103 Gaunt Street, London SE1 6DP',
    area: 'Elephant & Castle',
    areas: ['South London'],
    musicGenres: ['House', 'Techno', 'Electronic'],
    openingNights: 'Friday, Saturday (and select special events)',
    closingTime: '6:00am (sometimes later for special events)',
    dressCode: 'Relaxed but no effort at all will be noticed. Comfortable clubbing wear is fine — trainers are acceptable. No football shirts or overly casual sportswear.',
    tableMinimum: '£1,000',
    crowd: 'Electronic music enthusiasts of all ages and backgrounds. Average age 22-45.',
    bestFor: 'Electronic music purists. Anyone who wants to experience a world-class sound system. Groups who want to dance until 6am. People who prefer music-first venues over VIP-focused clubs.',
    insiderTip: 'Buy tickets in advance for headline events — they sell out. Arrive by midnight to avoid the longest queues. Spend time in the smaller rooms too — some of the best sets happen away from the main stage.',
    whyRanked: 'Ministry of Sound is a London institution and one of the most important nightclubs in the world. The sound system, the history, and the commitment to electronic music make it irreplaceable.',
    mapUrl: 'https://maps.google.com/?q=Ministry+of+Sound+London',
    tonightSuitability: 'The legendary club with the best sound system in London. Ticket-based entry — no guestlist politics, just music.',
    guestlistRealistic: false,
    guestlistNote: 'Ministry is ticket-based. Buy tickets online in advance or on the door if not sold out.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Tables available but Ministry is primarily a ticket venue. Check the lineup and buy tickets online.',
    heroImage: '/gallery/images/fe4414_689a9421d94a4eea995ef11e2cacc696.jpg',
    cardImage: '/gallery/images/fe4414_a674720f37584280b76863c91b91ae54.jpg',
    galleryImages: ['/gallery/images/fe4414_16a4f9f6906b41aa8f20b18ac3899475.jpg', '/gallery/images/fe4414_a96c1c8ad3b04bc38b80332d307f8724.jpg', '/gallery/images/fe4414_4d46bfda41374b7b9f1779d9757bc871.jpg', '/gallery/images/fe4414_d0f23381f8094125a6bf2ee0f93def16.jpg', '/gallery/images/fe4414_872ac846290a4666b58be8ddf31d25bf.jpg', '/gallery/images/fe4414_2927b7810b9c4b14a8358df996c0408e.jpg'],
  },
  {
    slug: 'lio-london',
    name: 'Lio Club London',
    shortName: 'Lio',
    status: 'permanently-closed',
    closedMessage: 'Lio Club London has closed. The Mayfair dinner, show and club venue no longer takes table bookings or guestlist names. For dinner, a show and a club in one night, try The London Reign, Cirque Le Soir or Maddox.',
    alternatives: ['the-london-reign', 'cirque-le-soir', 'maddox', 'the-box-london'],
    tagline: 'The Ibiza dinner-club concept in Mayfair, now closed',
    description: 'Lio Club London in Mayfair has closed. What it was, and the open clubs to book instead for dinner, a show and a club: The London Reign, Cirque Le Soir and Maddox.',
    longDescription: `Lio Club London has closed. People still search for Lio by name, so this page explains what it was and where to go instead.

History: when it was open, Lio brought the dinner, show and club format of its Ibiza original to Mayfair. Mediterranean dining led into live performers and dancers, and the night ended as a club with upbeat open-format music and an international crowd. Tables started from £1,000 for the club part of the night at the time.

For the same dinner-show-club night today, The London Reign on Piccadilly is the closest match, Cirque Le Soir adds performers around the tables, and Maddox moves from an Italian dinner into a house music club.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Open Format', 'House', 'Pop'],
    openingNights: 'Closed',
    closingTime: 'Closed',
    dressCode: 'When it was open, Lio asked for a glamorous, Ibiza-meets-Mayfair look and enforced its dress code.',
    tableMinimum: 'Closed',
    crowd: 'When it was open: an international, well-travelled crowd, mostly in their late twenties to early forties.',
    bestFor: 'Lio Club London has closed. The London Reign, Cirque Le Soir and Maddox suit the same dinner-and-show crowd.',
    insiderTip: 'Lio Club London has closed.',
    whyRanked: 'Lio Club London has closed.',
    mapUrl: 'https://maps.google.com/?q=Lio+Club+London+Mayfair',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/fe4414_0023ee263fca4fe9806bc09d74113eaa.jpg',
    cardImage: '/gallery/images/fe4414_002538ddacfe4ce1a4fe89fa0e8305ae.jpg',
    galleryImages: ['/gallery/images/fe4414_00edcb5adc4c4c4cb5dd97d80ea2f4c4.jpg'],
  },
  {
    slug: 'funky-buddha',
    name: 'Funky Buddha London',
    shortName: 'Funky Buddha',
    status: 'permanently-closed',
    closedMessage: 'Funky Buddha has closed, and Itzel now operates at its Berkeley Street address. Funky Buddha no longer takes table bookings or guestlist names. For the same RnB and hip-hop with a celebration crowd, try Tape London, The London Reign or Dear Darling.',
    alternatives: ['tape-london', 'the-london-reign', 'dear-darling', 'scotch-of-st-james'],
    tagline: 'The long-running Mayfair club on Berkeley Street, now closed',
    description: 'Funky Buddha London on Berkeley Street, Mayfair, has closed; Itzel now operates at its Berkeley Street address. Open alternatives for a similar RnB and hip-hop night: Tape London, The London Reign and Dear Darling.',
    longDescription: `Funky Buddha London has closed, and Itzel now operates at its Berkeley Street address. Funky Buddha was one of the longest-running clubs in Mayfair, and people still search for it by name, so this page explains what it was and where to go instead.

When it was open, Funky Buddha on Berkeley Street played RnB, hip-hop and funky house to a crowd of loyal regulars, birthday groups and the occasional famous face, and it was known as one of the friendlier doors in Mayfair.

For the same sound and crowd today, Tape London on Hanover Square is the closest match on music, with a much harder door. The London Reign suits birthday groups who want a show, Dear Darling suits groups who want cocktails before the dancing, and Scotch of St James is the heritage choice.`,
    address: 'Berkeley Street, London W1J 8DY',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['RnB', 'Hip-Hop', 'Funky House'],
    openingNights: 'Closed',
    closingTime: 'Closed',
    dressCode: 'When it was open, Funky Buddha followed the smart Mayfair standard: smart shoes and no sportswear.',
    tableMinimum: 'Closed',
    crowd: 'When it was open: loyal regulars, birthday groups and professionals, mostly in their mid twenties to forties.',
    bestFor: 'Funky Buddha has closed. Tape London, The London Reign and Dear Darling suit the same crowd.',
    insiderTip: 'Funky Buddha London has closed. Itzel now operates at its Berkeley Street address.',
    whyRanked: 'Funky Buddha London has closed.',
    mapUrl: 'https://maps.google.com/?q=Funky+Buddha+London+Berkeley+Street',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/fe4414_0152b4f29a9540be8eef055230e66221.jpg',
    cardImage: '/gallery/images/fe4414_016460dc35074665a9f15d051da0d9de.jpg',
    galleryImages: ['/gallery/images/fe4414_0165fb3b91da4e7993307b522fb58de4.jpg', '/gallery/images/fe4414_01702fa34a044f768289fe742cd80053.jpg', '/gallery/images/fe4414_03d0d58e1fb54eb885d6b4ae0986f483.jpg', '/gallery/images/fe4414_03db13b7a1d845d2887fe95e547b1369.jpg', '/gallery/images/fe4414_03e57f432c7d4f689fa9a2d9906ef9d0.jpg', '/gallery/images/fe4414_0528f444f562494791e99146e727f269.jpg'],
  },
  {
    slug: 'the-box-london',
    name: 'The Box London',
    shortName: 'The Box',
    status: 'open',
    tagline: 'London\'s most provocative theatrical nightclub — not for the faint-hearted',
    description: 'Theatrical nightclub in Soho known for boundary-pushing performances and an anything-goes atmosphere. Tables from £1,000.',
    longDescription: `The Box is London's most deliberately provocative nightclub. Originally a New York concept, the London venue on Walker's Court in Soho has built a reputation for performances that push boundaries further than anywhere else in the city. If Cirque Le Soir is circus entertainment, The Box is the uncensored, adults-only version that nobody warns you about.

The venue is designed like a theatre — tiered seating surrounds a central stage, and the performances are the undeniable centrepiece of the experience. The acts range from burlesque to acrobatics to shows that defy easy categorisation. Nothing is accidental — every performance is choreographed, rehearsed, and designed to provoke a reaction. Some guests love it. Some are shocked. Nobody is bored.

Beyond the performances, The Box functions as a genuinely good nightclub. The music shifts between hip-hop, RnB, and house depending on the night, and the DJs maintain energy between shows. The intimate theatre layout means every seat feels close to the action, and the VIP tables bordering the stage offer an experience you genuinely cannot get anywhere else.

The door policy is one of London's most selective. The Box curates its crowd deliberately — the team are looking for people who will contribute to the energy rather than just observe. Attitude matters as much as appearance. Table bookings are the most reliable route in, starting from £1,000, and the competition for tables on weekends is fierce.

This is not a club for everyone, and it doesn't pretend to be. The content can be explicit, the atmosphere is intentionally intense, and the whole experience demands an open mind. But for those who embrace it, The Box delivers nights that no other venue in London can match.`,
    address: 'Walker\'s Court, London W1F 0BZ',
    area: 'Soho',
    areas: ['Soho', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB', 'House'],
    openingNights: 'Wednesday, Thursday, Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Creative and stylish. The Box rewards individuality — dress to express rather than to conform. Smart is expected but personality is valued above formality.',
    tableMinimum: '£1,000',
    crowd: 'Creative industry, performers, fashion-forward, open-minded. Average age 25-40.',
    bestFor: 'Anyone who wants a genuinely unique and provocative night out. Creative types who appreciate theatrical performance. Groups looking for an experience they can\'t get anywhere else.',
    insiderTip: 'Book a table bordering the stage for the full experience — the proximity to the performances makes all the difference. Wednesday and Thursday nights are slightly easier to get into and often have the most experimental shows.',
    whyRanked: 'Nothing else in London comes close to this level of theatrical provocation combined with genuine nightclub energy. It\'s divisive by design, but those who love it are obsessed.',
    mapUrl: 'https://maps.google.com/?q=The+Box+Soho+London',
    tonightSuitability: 'Provocative cabaret meets nightclub. Boundary-pushing performances in an exclusive Soho setting.',
    guestlistRealistic: false,
    guestlistNote: 'The Box is highly selective. A table booking is strongly recommended for tonight.',
    bestForGroups: 'high-spenders',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Same-day tables are rare. The Box requires advance planning for the best experience.',
    heroImage: '/gallery/images/fe4414_059f2162e2de4e39a12f8c67843cc717.jpg',
    cardImage: '/gallery/images/fe4414_0628cad52eb04160b0e05f31c8ab7adf.jpg',
    galleryImages: ['/gallery/images/fe4414_0671e2a8f6974449a73307a48ce1b12e.jpg', '/gallery/images/fe4414_0676bc05b33b43d1b091746138a35a8a.jpg', '/gallery/images/fe4414_06c4956241eb411b8774897492ccdb20.jpg', '/gallery/images/fe4414_072d223d158244a6815f1ed7b01e900b.jpg', '/gallery/images/fe4414_079171b00717438b8594796362b0247d.jpg', '/gallery/images/fe4414_07bc468fe5a042e0a11c182c21dc63ad.jpg'],
  },
  {
    slug: 'luna-club-london',
    name: 'Luna Club London',
    shortName: 'Luna',
    status: 'permanently-closed',
    closedMessage: 'Luna Club London has closed. The Mayfair club, also known as Luna Mayfair or Club Luna, no longer takes table bookings or guestlist names. For the same hip-hop and RnB with a young, well-dressed crowd, try Tape London, Cirque Le Soir or BEAT London.',
    alternatives: ['tape-london', 'cirque-le-soir', 'beat-london', 'the-london-reign'],
    tagline: 'The Mayfair nightclub with a celestial edge, now closed',
    description: 'Luna Club London in Mayfair has closed. Open alternatives with a similar hip-hop and RnB crowd: Tape London, Cirque Le Soir and BEAT London.',
    longDescription: `Luna Club London was one of the newer Mayfair nightclubs, and it has now closed. People still search for it as Luna club, Luna Mayfair or Club Luna, so this page explains what it was and where to go instead.

When it was open, a celestial theme ran through the design, with subtle lunar touches in the lighting and decor. The music leaned into hip-hop and RnB with Afrobeats, amapiano and occasional house crossovers, and the crowd skewed young and fashionable.

For the same sound and crowd today, Tape London on Hanover Square is the closest match on music, with a much harder door. Cirque Le Soir adds performers and a show to hip-hop and RnB, and BEAT London is the most relaxed door with the strongest sound system.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB', 'House'],
    openingNights: 'Closed',
    closingTime: 'Closed',
    dressCode: 'When it was open, Luna followed the smart Mayfair standard: smart shoes and no sportswear.',
    tableMinimum: 'Closed',
    crowd: 'When it was open: young professionals and a fashion-forward crowd, mostly in their twenties and early thirties.',
    bestFor: 'Luna Club London has closed. Tape London, Cirque Le Soir and BEAT London suit the same crowd.',
    insiderTip: 'Luna Club London has closed.',
    whyRanked: 'Luna Club London has closed.',
    mapUrl: 'https://maps.google.com/?q=Luna+Club+London+Mayfair',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/fe4414_07f1808f9ba84bdd8fe93d124ef624ae.jpg',
    cardImage: '/gallery/images/fe4414_08ffe6ecd7e64958b22d4b1ab42d1722.jpg',
    galleryImages: ['/gallery/images/fe4414_0901bc84893644f297dce6bab32eedf0.jpg', '/gallery/images/fe4414_0908e40d5430400dbcd1bde279384671.jpg', '/gallery/images/fe4414_091285b805994cfc8a1f60f2da0dcb9c.jpg', '/gallery/images/fe4414_093630378f1e499889ffc7920902d7f6.jpg', '/gallery/images/fe4414_0a9241c0940740cba4cdbc9ec6705847.jpg', '/gallery/images/fe4414_0b0ef282cb324fc59641002ddeb34465.jpg'],
  },
  {
    slug: 'selene-london',
    name: 'Selene London',
    shortName: 'Selene',
    status: 'open',
    tagline: 'Elegant Mayfair newcomer blending refined cocktails with late-night sophistication',
    description: 'Sophisticated Mayfair venue offering premium cocktails and late-night clubbing in an elegant setting. Tables from £1,000.',
    longDescription: `Selene London brings a refined elegance to Mayfair's late-night scene. The venue positions itself at the intersection of cocktail bar sophistication and nightclub energy — a space where the evening builds gradually from intimate drinks to a full dancefloor experience.

The design is understated luxury. Clean lines, warm materials, and lighting that shifts seamlessly as the venue transitions from its early-evening cocktail bar mode to its late-night club format. The aesthetic is feminine without being exclusive to women — it's a venue that appeals to anyone who appreciates design and atmosphere over volume and spectacle.

The cocktail programme is a genuine draw. Unlike clubs where drinks are an afterthought between bottle service and shots, Selene takes its cocktails seriously. The bartenders are skilled, the ingredients are premium, and the menu changes seasonally. This attracts a crowd that appreciates quality and is willing to pay for it.

As the night progresses, the music builds. The genre leans into sophisticated house and RnB — tracks chosen for taste rather than chart position. The DJs programme the evening as a journey rather than an assault, and the result is a late-night atmosphere that feels grown-up without being boring.

Tables start from £1,000 and the service is polished. The crowd is well-dressed, predominantly in their late twenties to late thirties, and appreciates the venue's more refined approach. Guestlist is available and the door policy is selective but welcoming to the right crowd.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['House', 'RnB', 'Deep House'],
    openingNights: 'Thursday, Friday, Saturday, Sunday',
    closingTime: '3:00am',
    dressCode: 'Smart elegant. Selene\'s refined atmosphere demands equally refined attire. Think polished and sophisticated.',
    tableMinimum: '£1,000',
    crowd: 'Sophisticated, cocktail-appreciating, design-conscious. Average age 27-38.',
    bestFor: 'Couples seeking a sophisticated night out. Groups who appreciate cocktails as much as clubbing. Anyone who wants elegance without stuffiness.',
    insiderTip: 'Arrive early enough to experience the cocktail bar phase — the drinks are excellent and the atmosphere during the transition to club mode is Selene at its best. Thursday is the most intimate night.',
    whyRanked: 'Selene fills a gap in Mayfair for people who want sophistication and quality across every element of their evening. The cocktail-to-club concept is executed with real finesse.',
    mapUrl: 'https://maps.google.com/?q=Selene+London+Mayfair',
    tonightSuitability: 'Sophisticated cocktail lounge transitioning to late-night house music. The grown-up Mayfair option.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist available. The refined cocktail-bar format makes entry generally straightforward.',
    bestForGroups: 'ladies',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Flexible for same-day bookings. The cocktail focus means a more relaxed approach to table reservations.',
    heroImage: '/gallery/images/fe4414_0b515258f9b045329589a7de8017c4ee.jpg',
    cardImage: '/gallery/images/fe4414_0b56407f8e7340daab04b2f48da1b04a.jpg',
    galleryImages: ['/gallery/images/fe4414_0cba03ea5abe4657beb2d4e9b87a2f35.jpg', '/gallery/images/fe4414_0da5b1d362b845eda0fd7208e737c37f.jpg', '/gallery/images/fe4414_0da8a7994beb4cf9a8cbc05f1e3b133a.jpg', '/gallery/images/fe4414_0de6edc0e91842caa94cd80d20c6a200.jpg', '/gallery/images/fe4414_0e5e4e6b5fa641e9a0b8b9fe23d7669f.jpg', '/gallery/images/fe4414_0e78eec042ae483cb581ada1fad923a5.jpg'],
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find(c => c.slug === slug);
}

/** Short status label for lists and markdown. */
export function clubStatusLabel(club: Club): string {
  if (club.status === 'permanently-closed') return 'Permanently closed';
  return 'Open';
}

/** Music for lists: renamed venues have no confirmed music yet. */
export function musicLabel(club: Club): string {
  return club.musicGenres.length > 0 ? club.musicGenres.join(', ') : 'Music to be confirmed';
}

/** "Tables from £600", or a price-on-request line when no minimum is confirmed. */
export function tablesFromLabel(club: Club): string {
  return club.tableMinimum.startsWith('£') ? `Tables from ${club.tableMinimum}` : 'Table prices on request';
}

/** "Closes at 3:00am", or a to-be-confirmed line when no closing time is confirmed. */
export function closesLabel(club: Club): string {
  return /\d/.test(club.closingTime) ? `Closes at ${club.closingTime}` : 'Closing time to be confirmed';
}

export function getOpenClubs(): Club[] {
  return clubs.filter(c => c.status === 'open');
}

export function getClosedClubs(): Club[] {
  return clubs.filter(c => c.status === 'permanently-closed');
}

export function getClubsByArea(area: string): Club[] {
  return clubs.filter(c => c.status === 'open' && c.areas.includes(area));
}

export function getClubsByGenre(genre: string): Club[] {
  return clubs.filter(c => c.status === 'open' && c.musicGenres.some(g => g.toLowerCase() === genre.toLowerCase()));
}

export function getClubsByDay(day: string): Club[] {
  return clubs.filter(c =>
    c.status === 'open' &&
    c.openingNights.toLowerCase().includes(day.toLowerCase())
  );
}

export function getCurrentDayName(): string {
  return new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    timeZone: 'Europe/London',
  });
}

export function getClubsOpenTonight(): Club[] {
  return getClubsByDay(getCurrentDayName());
}

export function getFridayClubs(): Club[] {
  return getClubsByDay('Friday');
}

export function getSaturdayClubs(): Club[] {
  return getClubsByDay('Saturday');
}

export function getSundayClubs(): Club[] {
  return getClubsByDay('Sunday');
}

export function getGuestlistFriendlyClubs(): Club[] {
  return getOpenClubs().filter(c => c.guestlistRealistic);
}

export function getLastMinuteTableClubs(): Club[] {
  return getOpenClubs().filter(c => c.lastMinuteTableFriendly);
}

export function getWhatsAppTonightUrl(clubName?: string): string {
  const club = clubName ? clubName : '(open to suggestions)';
  const message = encodeURIComponent(
    `Hi, I need a table TONIGHT. Found you on londonclubstonight.com.\n\nClub: ${club}\nGroup size:\nArrival time:`
  );
  return `https://wa.me/${WHATSAPP_TABLE_NUMBER}?text=${message}`;
}

export function getWhatsAppGuestlistTonightUrl(clubName?: string): string {
  const club = clubName ? clubName : '(open to suggestions)';
  const message = encodeURIComponent(
    `Hi, can I get on a guestlist TONIGHT? Found you on londonclubstonight.com.\n\nClub: ${club}\nNumber of girls:\nNumber of guys:\nArrival time:`
  );
  return `https://wa.me/${WHATSAPP_GUESTLIST_NUMBER}?text=${message}`;
}
