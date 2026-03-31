export interface Club {
  slug: string;
  name: string;
  shortName: string;
  status: 'open' | 'permanently-closed';
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

export const WHATSAPP_NUMBER = '447880662708';

export function getWhatsAppTableUrl(clubName?: string): string {
  const club = clubName ? clubName : '(or open to suggestions)';
  const message = encodeURIComponent(
    `Hi, I found you on londonclubstonight.com and I'd like to book a table. Here are my details:\n\nClub: ${club}\nDate:\nGroup size:\nAny preferences:`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppGuestlistUrl(clubName?: string): string {
  const club = clubName ? clubName : '(or open to suggestions)';
  const message = encodeURIComponent(
    `Hi, I found you on londonclubstonight.com and I'd like to get on the guestlist. Here are my details:\n\nNight/date:\nClub preference: ${club}\nNumber of girls:\nNumber of guys:\nArrival time:`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
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
    heroImage: '/gallery/images/DSC_6749.jpg',
    cardImage: '/gallery/images/DSC_6757.jpg',
    galleryImages: ['/gallery/images/DSC_6773.jpg', '/gallery/images/DSC_6780.jpg', '/gallery/images/DSC_6797.jpg', '/gallery/images/DSC_6810.jpg', '/gallery/images/DSC_6830.jpg', '/gallery/images/DSC_6852.jpg'],
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
    name: 'TABU London',
    shortName: 'TABU',
    status: 'open',
    tagline: 'Mayfair\'s Japanese underground hideaway with the best hip-hop in W1',
    description: 'Japanese underground-themed club in Mayfair. Unique décor, hip-hop & RnB focused. Tables from £1,000.',
    longDescription: `TABU brings something genuinely original to Mayfair's club scene. The Japanese underground theme isn't just a surface-level aesthetic — it runs through the entire experience, from the entrance that feels like stepping into a hidden Tokyo bar to the décor that blends traditional Japanese elements with modern nightclub design.

The venue sits below street level in Mayfair, and the subterranean setting adds to the atmosphere. Low ceilings, intimate corners, and lighting that shifts throughout the night create a space that feels secretive and exclusive without being pretentious. It's the kind of club that rewards regular visits because you notice new details in the design each time.

Musically, TABU is firmly hip-hop and RnB territory. The DJs who play here understand the genre deeply — expect a mix of current chart hits, classic hip-hop, and the occasional afrobeats crossover. The sound system is powerful for the room size, and the intimate scale means the music hits differently than in larger venues.

The crowd is young, fashionable, and predominantly local. This isn't a tourist club — the regulars know each other and the vibe reflects that community feel. Tables start from £1,000 and book up quickly, particularly on Saturdays. Guestlist is available but the space is limited enough that bookings are strongly recommended.

TABU works best when you embrace the unique atmosphere. It's not trying to be the biggest or the most famous — it's carved out a specific niche and serves it exceptionally well.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB'],
    openingNights: 'Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart stylish. Fashionable but not overly formal. Clean trainers can work if the rest of the outfit is sharp. No sportswear.',
    tableMinimum: '£1,000',
    crowd: 'Young, fashion-forward, local regulars. Average age 22-32.',
    bestFor: 'Hip-hop purists who want quality music in an intimate setting. Couples and mixed groups looking for somewhere with genuine character.',
    insiderTip: 'Saturdays are the flagship night. The intimate size means the atmosphere builds fast — arrive by midnight to get the best table positions.',
    whyRanked: 'The Japanese underground concept is executed brilliantly and the hip-hop programming is some of the best in Mayfair. A genuine hidden gem.',
    mapUrl: 'https://maps.google.com/?q=TABU+London+Mayfair',
    tonightSuitability: 'The best last-minute hip-hop night in Mayfair. Underground vibe, focused music, lively crowd.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist works well here. Mixed groups get priority but all groups are considered.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'One of the more flexible Mayfair venues for same-day bookings. Message us and we will check availability.',
    heroImage: '/gallery/images/DSC_6981.jpg',
    cardImage: '/gallery/images/DSC_6989.jpg',
    galleryImages: ['/gallery/images/DSC_6997.jpg', '/gallery/images/DSC_7013.jpg', '/gallery/images/DSC_7034.jpg', '/gallery/images/DSC_7047.jpg', '/gallery/images/DSC_7056.jpg', '/gallery/images/DSC_7072.jpg'],
  },
  {
    slug: 'libertine',
    name: 'Libertine',
    shortName: 'Libertine',
    status: 'permanently-closed',
    tagline: 'Mayfair\'s futuristic playground for the fashion-forward crowd',
    description: 'Sophisticated and futuristic Mayfair venue with cutting-edge design. Hip-hop & RnB. Tables from £1,000.',
    longDescription: `Libertine occupies a unique space in Mayfair's club landscape — a venue that feels genuinely futuristic without crossing into gimmick territory. The design is sleek, modern, and deliberately different from the traditional Mayfair club aesthetic. Think clean lines, innovative lighting, and a spatial design that makes the venue feel larger and more dynamic than its physical footprint.

The music policy centres on hip-hop and RnB, delivered through a sound system that matches the venue's modern design philosophy. The DJs who rotate through Libertine tend to be skilled at reading the crowd and shifting between current hip-hop, classic tracks, and the occasional curveball that keeps the energy unpredictable.

What sets Libertine apart from its Mayfair neighbours is the crowd it attracts. This is a club for people who consider themselves fashion-forward and culturally switched on. The dress code is smart but encourages personal style — you'll see more creative outfits here than at more traditional venues. The atmosphere is confident without being aggressive, glamorous without being stuffy.

Tables start from £1,000 and the table service experience is polished. The staff know the regulars, the bottles arrive with appropriate fanfare, and the table positions offer genuine views of both the dancefloor and the DJ. Guestlist is available and more accessible than some of the harder-to-enter Mayfair clubs, though booking remains the most reliable route.

Libertine works particularly well for groups who are tired of the same Mayfair formula and want something with more edge. It delivers the upscale experience without the stuffiness.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB'],
    openingNights: 'Thursday, Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart and fashion-forward. Creativity is encouraged but maintain the smart standard. No casual or athletic wear.',
    tableMinimum: '£1,000',
    crowd: 'Fashion-forward, creative professionals, influencers. Average age 24-35.',
    bestFor: 'Style-conscious groups who want a modern club experience. People tired of traditional Mayfair stuffiness.',
    insiderTip: 'Thursday nights offer the most relaxed atmosphere and the best chance of walk-in entry. Friday and Saturday require advance booking for guaranteed entry.',
    whyRanked: 'The futuristic design and fashion-forward crowd give Libertine a distinct identity in Mayfair. It proves upscale clubbing doesn\'t have to feel old-fashioned.',
    mapUrl: 'https://maps.google.com/?q=Libertine+London+Mayfair',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/DSC_7086.jpg',
    cardImage: '/gallery/images/DSC_7089.jpg',
    galleryImages: ['/gallery/images/DSC_7092.jpg', '/gallery/images/DSC_7136.jpg'],
  },
  {
    slug: 'luxx-club',
    name: 'Luxx Club London',
    shortName: 'Luxx',
    status: 'permanently-closed',
    tagline: 'Mayfair\'s electric light show venue where visuals meet VIP nightlife',
    description: 'Premium Mayfair venue with spectacular LED light shows and electric atmosphere. Open format and hip-hop. Tables from £1,000.',
    longDescription: `Luxx Club London has established itself as one of Mayfair's most visually spectacular nightclubs. The venue's signature feature is its LED light show — a custom-designed visual experience that transforms the space throughout the night. Walls, ceilings, and surfaces come alive with synchronised imagery that responds to the music, creating an immersive environment that genuinely enhances the clubbing experience.

The technology isn't just decoration — it's integral to the atmosphere. The visual programming changes weekly, and the production team puts genuine effort into creating sequences that complement the DJ's set. On the best nights, the combination of sound and visuals creates moments that feel more like a concert than a club.

Musically, Luxx runs an open format policy with a lean towards hip-hop. This means the DJs move fluidly between genres — hip-hop, RnB, house, pop — depending on what the crowd wants. It's a pragmatic approach that ensures the energy stays high regardless of the audience's specific tastes.

The crowd is a genuine mix. You'll find regulars who come for the visual experience, birthday groups attracted by the Instagram-worthy setting, and international visitors who've been recommended the club. The atmosphere is energetic and celebratory without being exclusive to the point of unfriendliness.

Tables start from £1,000 and are well-positioned to enjoy both the light show and the dancefloor views. The table service team is professional and attentive. Guestlist entry is available and more accessible than at some of the stricter Mayfair venues.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Open Format', 'Hip-Hop'],
    openingNights: 'Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart. Standard Mayfair dress code applies — smart shoes for men, no sportswear, dress to impress.',
    tableMinimum: '£1,000',
    crowd: 'Mixed — locals, birthday groups, international visitors. Average age 23-35.',
    bestFor: 'Visual experience lovers. Birthday celebrations that want a spectacular backdrop. Groups who enjoy open format music.',
    insiderTip: 'Request a table near the main LED wall for the most immersive visual experience. The light shows peak between 1am and 2:30am.',
    whyRanked: 'The LED light show concept is executed better here than anywhere else in London. It adds a genuinely unique dimension to the VIP club experience.',
    mapUrl: 'https://maps.google.com/?q=Luxx+Club+London+Mayfair',
    tonightSuitability: 'Permanently closed.',
    guestlistRealistic: false,
    guestlistNote: 'Permanently closed.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: false,
    lastMinuteNote: 'Permanently closed.',
    heroImage: '/gallery/images/DSC_7150.jpg',
    cardImage: '/gallery/images/DSC_7155.jpg',
    galleryImages: ['/gallery/images/DSC_7164.jpg', '/gallery/images/DSC_7170.jpg'],
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
    heroImage: '/gallery/images/DSC_7176.jpg',
    cardImage: '/gallery/images/DSC_7183.jpg',
    galleryImages: ['/gallery/images/DSC_7219.jpg', '/gallery/images/DSC_7230.jpg', '/gallery/images/DSC_7257.jpg', '/gallery/images/DSC_7276.jpg', '/gallery/images/DSC_7331.jpg', '/gallery/images/DSC_7350.jpg'],
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
    heroImage: '/gallery/images/DSC_7358.jpg',
    cardImage: '/gallery/images/DSC_7371.jpg',
    galleryImages: ['/gallery/images/DSC_7399.jpg', '/gallery/images/DSC_7404.jpg', '/gallery/images/DSC_7420.jpg', '/gallery/images/DSC_7435.jpg', '/gallery/images/DSC_7453.jpg', '/gallery/images/DSC_7496.jpg'],
  },
  {
    slug: 'cuckoo-club',
    name: 'Cuckoo Club',
    shortName: 'Cuckoo',
    status: 'open',
    tagline: 'The two-floor Mayfair stalwart that balances house music refinement with hip-hop energy',
    description: 'Stylish two-floor Mayfair club on Swallow Street. House and hip-hop across two distinct rooms. Tables from £1,000.',
    longDescription: `Cuckoo Club has been a fixture on Mayfair's Swallow Street for years, and its longevity tells you something about what it gets right. The two-floor format is the key — it gives you two genuinely different experiences under one roof, which is surprisingly rare in London's club scene.

The ground floor leans into house and more sophisticated electronic music. The atmosphere is refined, the lighting is measured, and the crowd here tends to be slightly older and more settled. It's a space where you can hold a conversation between songs and appreciate the DJ's craft. The downstairs room switches energy to hip-hop and RnB — louder, more energetic, and with a younger crowd that's there to party.

This dual personality is Cuckoo's greatest strength. You can move between floors depending on your mood, and the contrast keeps the evening interesting. Start upstairs with cocktails and house music, then descend to the hip-hop room when you're ready to turn up. Or stay on one floor all night if you know what you want.

The venue design is stylish without being over-designed. The Mayfair location means the decor is smart and well-maintained, but it doesn't try to wow you with spectacle. It's confident in what it is — a well-run, dual-room nightclub that consistently delivers good nights.

Tables start from £1,000 and are available on both floors. The guestlist is relatively accessible by Mayfair standards, making Cuckoo one of the more approachable upscale venues. The door policy is smart but not aggressively exclusive.`,
    address: 'Swallow Street, London W1B 4EZ',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['House', 'Hip-Hop', 'RnB'],
    openingNights: 'Wednesday, Thursday, Friday, Saturday',
    closingTime: '3:00am',
    dressCode: 'Smart Mayfair standard. Well-dressed but not overly formal. Smart shoes for men essential.',
    tableMinimum: '£1,000',
    crowd: 'Mixed Mayfair crowd — professionals, regular clubbers, birthday groups. Average age 24-36.',
    bestFor: 'Groups who can\'t agree on music — the two floors mean everyone gets what they want. People who want a reliable, well-run Mayfair night without extreme exclusivity.',
    insiderTip: 'Wednesday and Thursday nights are the most relaxed and affordable entry points. The upstairs room on Saturdays often has the better atmosphere despite being quieter.',
    whyRanked: 'The two-floor format solves the "what music do we want" argument and the consistent quality across years of operation shows genuine professionalism.',
    mapUrl: 'https://maps.google.com/?q=Cuckoo+Club+London+Swallow+Street',
    tonightSuitability: 'Two floors, two vibes — house upstairs, hip-hop downstairs. Reliable Mayfair night with guaranteed variety.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist works well for mixed groups. One of the more accessible Mayfair guestlists.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Good same-day availability. Tables are reasonably priced and the team is accommodating.',
    heroImage: '/gallery/images/DSC_7507.jpg',
    cardImage: '/gallery/images/DSC_7537.jpg',
    galleryImages: ['/gallery/images/DSC_7610.jpg', '/gallery/images/DSC_7613.jpg', '/gallery/images/DSC_7617.jpg', '/gallery/images/DSC_7638.jpg', '/gallery/images/DSC_7672.jpg', '/gallery/images/DSC_7705.jpg'],
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
    heroImage: '/gallery/images/DSC_7715.jpg',
    cardImage: '/gallery/images/DSC_7737.jpg',
    galleryImages: ['/gallery/images/DSC_7741.jpg', '/gallery/images/DSC_7767.jpg', '/gallery/images/DSC_7812.jpg', '/gallery/images/DSC_7828.jpg', '/gallery/images/DSC_7854.jpg', '/gallery/images/DSC_7877.jpg'],
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
    heroImage: '/gallery/images/DSC_7884.jpg',
    cardImage: '/gallery/images/DSC_7900.jpg',
    galleryImages: ['/gallery/images/DSC_7916.jpg', '/gallery/images/DSC_7931.jpg', '/gallery/images/DSC_7943.jpg', '/gallery/images/DSC_7952.jpg', '/gallery/images/DSC_7988.jpg', '/gallery/images/DSC_7995.jpg'],
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
    heroImage: '/gallery/images/DSC_8000.jpg',
    cardImage: '/gallery/images/DSC_8017.jpg',
    galleryImages: ['/gallery/images/DSC_8026.jpg', '/gallery/images/DSC_8129.jpg', '/gallery/images/DSC_8155.jpg', '/gallery/images/DSC_8163.jpg', '/gallery/images/DSC_8179.jpg', '/gallery/images/DSC_8282.jpg'],
  },
  {
    slug: 'lio-london',
    name: 'Lio Club London',
    shortName: 'Lio',
    status: 'permanently-closed',
    tagline: 'Ibiza\'s iconic dinner-club concept brings Mediterranean glamour to Mayfair',
    description: 'Elegant Mayfair venue combining gourmet dining with live entertainment and nightlife. Tables from £1,000.',
    longDescription: `Lio Club London brings the spirit of its legendary Ibiza original to Mayfair, and the translation works beautifully. This is a venue that understands how to merge gourmet dining, live entertainment, and late-night clubbing into a single evening — and does each element with enough quality that none feels like an afterthought.

The dining experience anchors the early evening. Mediterranean-influenced cuisine, presented with flair, served in a room that's been designed for both gastronomy and spectacle. The menu is ambitious and largely delivers — this isn't club food, it's restaurant food in a club setting.

As dinner winds down, the entertainment takes centre stage. Live performers, dancers, and acts that draw on the Mediterranean cabaret tradition create a bridge between the dining and clubbing portions of the evening. The production values are high and the performers are genuinely talented — this isn't a ten-minute interlude, it's an integral part of the Lio experience.

The late-night clubbing phase brings a glamorous crowd onto the dancefloor. The music is upbeat and accessible — mainstream enough to keep the dancefloor full, sophisticated enough to match the venue's elegance. The atmosphere is celebratory and glamorous, with a predominantly international crowd who understand the Lio brand from its Mediterranean reputation.

Tables start from £1,000 for the club portion, with dinner packages offering the full experience. The crowd is well-dressed, well-travelled, and expect a premium experience. Lio delivers exactly that.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Open Format', 'House', 'Pop'],
    openingNights: 'Wednesday, Thursday, Friday, Saturday',
    closingTime: '3:00am',
    dressCode: 'Glamorous. Lio has an Ibiza-meets-Mayfair aesthetic — think elegant resort wear elevated for London. Dress codes are enforced.',
    tableMinimum: '£1,000',
    crowd: 'International, glamorous, well-travelled. Average age 28-42.',
    bestFor: 'People who know Lio from Ibiza and want the London experience. Groups celebrating special occasions. International visitors who appreciate Mediterranean nightlife culture.',
    insiderTip: 'The dinner-and-show package is the way to experience Lio properly. Arriving just for the club portion means missing the best entertainment. Wednesday nights are more intimate and relaxed.',
    whyRanked: 'Lio brings genuine international glamour to London\'s club scene. The dinner-show-club format is polished, and the Mediterranean influence distinguishes it from everything else in Mayfair.',
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
    status: 'open',
    tagline: 'The legendary Mayfair institution that has outlasted every trend since 1999',
    description: 'One of Mayfair\'s longest-running nightclubs with a loyal celebrity following. RnB, hip-hop, and funky house. Tables from £1,000.',
    longDescription: `Funky Buddha is London nightlife royalty. Operating in Mayfair since 1999, this club has outlasted countless venues that opened with bigger budgets and louder fanfare. That longevity tells you everything — the fundamentals here are right, and the loyal crowd keeps coming back because nobody else delivers quite the same atmosphere.

The venue occupies a sweet spot between intimate and spacious. It's large enough to generate real energy on the dancefloor but small enough that the atmosphere stays concentrated. The interiors have been refreshed over the years but retain a warmth and character that newer clubs struggle to manufacture. There's a lived-in quality that comes from decades of legendary nights.

Musically, Funky Buddha lives up to its name. The playlist moves between RnB, hip-hop, and funky house — a combination that's become the club's signature sound. The DJs who play here understand the room's history and programme accordingly. You'll hear classics alongside current hits, and the transitions between genres feel natural rather than jarring.

The celebrity connection is genuine and long-standing. Funky Buddha has been a favourite of footballers, musicians, and actors for over two decades. The door team know the regulars, the staff remember your drink, and the whole operation runs with the confidence of a venue that has nothing to prove.

Tables start from £1,000 and the table service experience benefits from years of refinement. The staff are experienced and professional without being stuffy. Guestlist is available and more accessible than at some of the newer, more aggressively exclusive Mayfair clubs.`,
    address: 'Berkeley Street, London W1J 8DY',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['RnB', 'Hip-Hop', 'Funky House'],
    openingNights: 'Thursday, Friday, Saturday',
    closingTime: '3:00am',
    dressCode: 'Smart and stylish. The usual Mayfair rules apply — smart shoes for men, no sportswear, dress to impress. The crowd here tends toward classic rather than cutting-edge fashion.',
    tableMinimum: '£1,000',
    crowd: 'Loyal regulars, celebrities, professionals who\'ve been coming for years. Average age 25-40.',
    bestFor: 'Anyone who appreciates a venue with genuine history and atmosphere. RnB and funky house lovers. Groups who want a reliable Mayfair night without pretension.',
    insiderTip: 'Thursday nights have the most relaxed atmosphere and the best chance of walk-in entry. The regular DJs on Saturdays know the room inside out — the music is consistently excellent.',
    whyRanked: 'Longevity in London\'s nightlife is the ultimate quality signal. Funky Buddha has been delivering great nights for over 25 years — that track record is unmatched.',
    mapUrl: 'https://maps.google.com/?q=Funky+Buddha+London+Berkeley+Street',
    tonightSuitability: 'Legendary Mayfair energy with accessible hip-hop and RnB. Fun crowd, celebration-friendly, always a party.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist works well for all group types. One of the friendliest doors in Mayfair.',
    bestForGroups: 'all',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'Good same-day table availability. The team is flexible and accommodating for last-minute plans.',
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
    status: 'open',
    tagline: 'Mayfair\'s newest late-night destination with a celestial edge',
    description: 'New Mayfair nightclub with a modern celestial theme, strong DJ lineup, and polished table service. Tables from £1,000.',
    longDescription: `Luna Club London represents the newer generation of Mayfair nightclubs — venues that have learned from their predecessors and arrive fully formed with polished production, strong DJ bookings, and a clear identity from night one.

The celestial theme runs through the venue's design without overwhelming it. Subtle lunar references in the lighting, décor, and spatial design create an atmosphere that feels distinctive without being gimmicky. The overall effect is modern and sophisticated — a club that knows exactly what it wants to be.

The music programming is well-curated, leaning into contemporary hip-hop and RnB with occasional house music crossovers. Luna has invested in its sound system and the audio quality reflects that — the bass hits clean, the mids are present, and conversation is possible in the right spots without competing with the music.

The crowd skews young and fashionable. Luna has attracted a loyal following quickly by offering what the Mayfair market wants — good music, strong aesthetics, and table service that delivers without the pretension that can plague this postcode. The staff are attentive and the bottle service operation runs smoothly.

Tables start from £1,000 and book up quickly, particularly on Saturdays. Guestlist is available and the door policy is selective but not prohibitively exclusive. Well-presented mixed groups have a reasonable chance without a booking, though reservations remain the safest route.`,
    address: 'Mayfair, London W1',
    area: 'Mayfair',
    areas: ['Mayfair', 'Central London'],
    musicGenres: ['Hip-Hop', 'RnB', 'House'],
    openingNights: 'Friday, Saturday',
    closingTime: '3:30am',
    dressCode: 'Smart Mayfair standard. Well-dressed and fashion-conscious — smart shoes, no sportswear, contemporary style encouraged.',
    tableMinimum: '£1,000',
    crowd: 'Young professionals, fashion-forward, influencer-adjacent. Average age 22-32.',
    bestFor: 'Groups looking for a fresh Mayfair experience without the legacy venue stuffiness. Instagram-friendly aesthetics with genuine substance.',
    insiderTip: 'Saturday nights are the flagship — the DJ lineup is strongest and the atmosphere peaks between 1am and 3am. Book early in the week as tables sell out fast.',
    whyRanked: 'Luna has established itself quickly by getting the fundamentals right — great sound, smart design, and genuine energy. A strong addition to Mayfair\'s roster.',
    mapUrl: 'https://maps.google.com/?q=Luna+Club+London+Mayfair',
    tonightSuitability: 'High-energy newcomer with spectacular production. Hip-hop, RnB, and Afrobeats in a striking Mayfair space.',
    guestlistRealistic: true,
    guestlistNote: 'Guestlist available and the door is fair. Mixed groups have the best experience.',
    bestForGroups: 'mixed',
    lastMinuteTableFriendly: true,
    lastMinuteNote: 'As a newer venue, same-day tables are often available. Good option for spontaneous plans.',
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
    openingNights: 'Thursday, Friday, Saturday',
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
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppGuestlistTonightUrl(clubName?: string): string {
  const club = clubName ? clubName : '(open to suggestions)';
  const message = encodeURIComponent(
    `Hi, can I get on a guestlist TONIGHT? Found you on londonclubstonight.com.\n\nClub: ${club}\nNumber of girls:\nNumber of guys:\nArrival time:`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
