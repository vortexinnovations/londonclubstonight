export interface Club {
  slug: string;
  name: string;
  shortName: string;
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
  doorPolicy: string;
  entryDifficulty: 'Easy' | 'Moderate' | 'Hard' | 'Very Hard';
  tableMinimum: string;
  crowd: string;
  bestFor: string;
  notIdealFor: string;
  insiderTip: string;
  whyRanked: string;
  mapUrl: string;
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
    doorPolicy: 'Members and table bookings prioritised. Walk-ins are extremely rare and only considered for well-dressed mixed groups. Solo men or all-male groups without a booking will not get in.',
    entryDifficulty: 'Very Hard',
    tableMinimum: '£1,500',
    crowd: 'Celebrities, music industry, models, high-net-worth. Average age 25-40.',
    bestFor: 'A genuine VIP experience where you might party next to genuine A-listers. Hip-hop lovers who want quality sound in an intimate setting.',
    notIdealFor: 'Large groups of guys without a table booking. Budget-conscious nights out. Anyone looking for a big room with hundreds of people.',
    insiderTip: 'Book a table — it\'s the only reliable way in. Thursday nights tend to have the most celebrity sightings. Arrive before midnight to settle in before the main crowd arrives around 12:30.',
    whyRanked: 'No other club in London delivers this level of exclusivity with this quality of music. If you can get in, it\'s an unforgettable night.',
    mapUrl: 'https://maps.google.com/?q=Tape+London+Hanover+Square',
  },
  {
    slug: 'cirque-le-soir',
    name: 'Cirque Le Soir',
    shortName: 'Cirque',
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
    doorPolicy: 'Table bookings and guestlist prioritised. Walk-ins considered for well-presented mixed groups but not guaranteed. The door team assesses based on appearance, group composition, and capacity.',
    entryDifficulty: 'Hard',
    tableMinimum: '£1,000',
    crowd: 'Celebrities, influencers, international visitors, birthday groups. Average age 23-35.',
    bestFor: 'Anyone who wants a night they\'ll never forget. Birthday celebrations. Groups who want entertainment with their nightlife. Instagram-worthy experiences.',
    notIdealFor: 'Minimalists who prefer stripped-back club nights. People who want to have long conversations. Anyone easily overwhelmed by sensory experiences.',
    insiderTip: 'Saturday nights have the most performers and the biggest production. If it\'s your birthday, the performers will come to your table — just let the team know when you book.',
    whyRanked: 'Nothing else in London — or arguably the world — delivers this combination of nightclub energy and circus entertainment. It\'s a London institution for a reason.',
    mapUrl: 'https://maps.google.com/?q=Cirque+Le+Soir+London',
  },
  {
    slug: 'the-london-reign',
    name: 'The London Reign',
    shortName: 'Reign',
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
    doorPolicy: 'Table bookings strongly recommended. Guestlist available. Walk-ins assessed but not guaranteed — presentable mixed groups have the best chance.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Mixed — couples, corporate groups, birthday celebrations, international visitors. Average age 25-45.',
    bestFor: 'Special occasions where you want dinner and clubbing in one venue. Corporate entertaining. Anyone who appreciates theatrical production in their nightlife.',
    notIdealFor: 'People looking for an underground club experience. Those who just want to dance to DJ sets without the dinner/show element.',
    insiderTip: 'Book the dinner-and-club package for the full experience. Arrive early enough for the show — the aerial acts during dinner are the highlight, and you\'ll miss them if you arrive at midnight.',
    whyRanked: 'The combination of fine dining, West End-quality entertainment, and genuine late-night clubbing is unique in London. No other venue pulls off this triple-threat format so well.',
    mapUrl: 'https://maps.google.com/?q=The+London+Reign+Piccadilly',
  },
  {
    slug: 'tabu-london',
    name: 'TABU London',
    shortName: 'TABU',
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
    doorPolicy: 'Table bookings prioritised. Guestlist available but competitive. Small venue so capacity fills quickly. Mixed groups preferred.',
    entryDifficulty: 'Hard',
    tableMinimum: '£1,000',
    crowd: 'Young, fashion-forward, local regulars. Average age 22-32.',
    bestFor: 'Hip-hop purists who want quality music in an intimate setting. Couples and mixed groups looking for somewhere with genuine character.',
    notIdealFor: 'Large groups who need space. Anyone looking for a mainstream pop soundtrack.',
    insiderTip: 'Saturdays are the flagship night. The intimate size means the atmosphere builds fast — arrive by midnight to get the best table positions.',
    whyRanked: 'The Japanese underground concept is executed brilliantly and the hip-hop programming is some of the best in Mayfair. A genuine hidden gem.',
    mapUrl: 'https://maps.google.com/?q=TABU+London+Mayfair',
  },
  {
    slug: 'libertine',
    name: 'Libertine',
    shortName: 'Libertine',
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
    doorPolicy: 'Table bookings recommended. Guestlist available. Walk-ins possible for well-dressed mixed groups, particularly earlier in the evening.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Fashion-forward, creative professionals, influencers. Average age 24-35.',
    bestFor: 'Style-conscious groups who want a modern club experience. People tired of traditional Mayfair stuffiness.',
    notIdealFor: 'Those who prefer classic, traditional club environments. Anyone looking for mainstream pop music.',
    insiderTip: 'Thursday nights offer the most relaxed atmosphere and the best chance of walk-in entry. Friday and Saturday require advance booking for guaranteed entry.',
    whyRanked: 'The futuristic design and fashion-forward crowd give Libertine a distinct identity in Mayfair. It proves upscale clubbing doesn\'t have to feel old-fashioned.',
    mapUrl: 'https://maps.google.com/?q=Libertine+London+Mayfair',
  },
  {
    slug: 'luxx-club',
    name: 'Luxx Club London',
    shortName: 'Luxx',
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
    doorPolicy: 'Table bookings prioritised. Guestlist available and reasonably accessible. Walk-ins considered for well-dressed groups.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Mixed — locals, birthday groups, international visitors. Average age 23-35.',
    bestFor: 'Visual experience lovers. Birthday celebrations that want a spectacular backdrop. Groups who enjoy open format music.',
    notIdealFor: 'Purists who prefer their clubs stripped-back. Anyone who finds LED visuals distracting.',
    insiderTip: 'Request a table near the main LED wall for the most immersive visual experience. The light shows peak between 1am and 2:30am.',
    whyRanked: 'The LED light show concept is executed better here than anywhere else in London. It adds a genuinely unique dimension to the VIP club experience.',
    mapUrl: 'https://maps.google.com/?q=Luxx+Club+London+Mayfair',
  },
  {
    slug: 'maddox',
    name: 'Maddox',
    shortName: 'Maddox',
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
    doorPolicy: 'Dinner guests transition seamlessly. Club entry via table booking or guestlist. Walk-ins possible but booking recommended.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Foodies, house music enthusiasts, professionals. Average age 27-40.',
    bestFor: 'Couples and groups who want dinner and clubbing in one venue without compromising on either. House music lovers in Mayfair.',
    notIdealFor: 'Hip-hop fans. Groups looking for a high-energy party club. Anyone wanting to skip dinner and arrive at midnight.',
    insiderTip: 'Book dinner for 9pm — you\'ll have a relaxed meal and be perfectly positioned as the music transitions. The house music programming on Fridays is particularly strong.',
    whyRanked: 'The restaurant-to-club transition is the smoothest in London, and the house music policy gives Maddox a unique position in a hip-hop dominated market.',
    mapUrl: 'https://maps.google.com/?q=Maddox+Club+London+Mayfair',
  },
  {
    slug: 'scotch-of-st-james',
    name: 'Scotch of St James',
    shortName: 'Scotch',
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
    doorPolicy: 'Table bookings and guestlist recommended. Walk-ins possible but the intimate size means capacity fills fast. Mixed groups preferred.',
    entryDifficulty: 'Hard',
    tableMinimum: '£1,000',
    crowd: 'Music lovers, creative professionals, older clientele who appreciate heritage. Average age 28-45.',
    bestFor: 'Anyone who appreciates history and atmosphere. Music lovers who want more curated programming. Couples looking for intimate, sophisticated nightlife.',
    notIdealFor: 'Groups looking for high-energy mainstream clubbing. People who want a big dancefloor. Under-25s who prefer louder, newer venues.',
    insiderTip: 'Ask about the venue\'s history when you visit — the staff know the stories and the Hendrix connection is genuine. Thursday nights tend to be more intimate and musically eclectic.',
    whyRanked: 'No other club in London has this combination of genuine history, intimate atmosphere, and musical credibility. It\'s a living piece of London\'s cultural heritage.',
    mapUrl: 'https://maps.google.com/?q=Scotch+of+St+James+London',
  },
  {
    slug: 'cuckoo-club',
    name: 'Cuckoo Club',
    shortName: 'Cuckoo',
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
    doorPolicy: 'Table bookings recommended but guestlist is accessible. Walk-ins possible for well-presented groups, especially earlier in the evening.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Mixed Mayfair crowd — professionals, regular clubbers, birthday groups. Average age 24-36.',
    bestFor: 'Groups who can\'t agree on music — the two floors mean everyone gets what they want. People who want a reliable, well-run Mayfair night without extreme exclusivity.',
    notIdealFor: 'Those seeking cutting-edge or underground experiences. People who want one consistent vibe all night.',
    insiderTip: 'Wednesday and Thursday nights are the most relaxed and affordable entry points. The upstairs room on Saturdays often has the better atmosphere despite being quieter.',
    whyRanked: 'The two-floor format solves the "what music do we want" argument and the consistent quality across years of operation shows genuine professionalism.',
    mapUrl: 'https://maps.google.com/?q=Cuckoo+Club+London+Swallow+Street',
  },
  {
    slug: 'dear-darling',
    name: 'Dear Darling',
    shortName: 'Dear Darling',
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
    doorPolicy: 'Cocktail hours are accessible. Late-night entry via booking or guestlist recommended. Walk-ins possible earlier in the evening.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Glamour-conscious, cocktail enthusiasts, couples, pre-club groups. Average age 26-38.',
    bestFor: 'Couples looking for a glamorous date night. Groups who want cocktails first and dancing later. Anyone who appreciates opulent interiors.',
    notIdealFor: 'People looking for a pure nightclub experience. Groups who want high-energy from the start. Budget-conscious nights out.',
    insiderTip: 'Arrive at 9pm for cocktails when the venue is at its most atmospheric. The transition to late-night happens gradually — enjoy the evolution rather than arriving at midnight.',
    whyRanked: 'The cocktail-to-club transition in these surroundings is unmatched. It\'s the most beautiful room in Mayfair\'s nightlife.',
    mapUrl: 'https://maps.google.com/?q=Dear+Darling+Mayfair+London',
  },
  {
    slug: 'beat-london',
    name: 'BEAT London',
    shortName: 'BEAT',
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
    doorPolicy: 'Guestlist recommended. Walk-ins possible with a smart appearance. Less exclusive than Mayfair venues but still selective.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'Music lovers, younger professionals, dancefloor-focused. Average age 22-32.',
    bestFor: 'People who prioritise sound quality and music over VIP status. Groups who want to dance. Music enthusiasts who appreciate a great system.',
    notIdealFor: 'Those seeking a luxury VIP experience. People who want to sit at a table all night. Anyone who needs the Mayfair postcode.',
    insiderTip: 'Stand near the main speakers for the full audio experience — the system is calibrated so it sounds powerful without being painful. Saturday nights have the strongest DJ lineups.',
    whyRanked: 'The sound system alone justifies the inclusion. When the DJ is right and the room is full, BEAT delivers one of the best pure clubbing experiences in central London.',
    mapUrl: 'https://maps.google.com/?q=BEAT+London+Margaret+Street',
  },
  {
    slug: 'ministry-of-sound',
    name: 'Ministry of Sound',
    shortName: 'Ministry',
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
    doorPolicy: 'Advance tickets strongly recommended for big nights. Walk-ins possible but expect queues. The door policy focuses on behaviour and intoxication levels rather than appearance.',
    entryDifficulty: 'Easy',
    tableMinimum: '£1,000',
    crowd: 'Electronic music enthusiasts of all ages and backgrounds. Average age 22-45.',
    bestFor: 'Electronic music purists. Anyone who wants to experience a world-class sound system. Groups who want to dance until 6am. People who prefer music-first venues over VIP-focused clubs.',
    notIdealFor: 'Those seeking luxury VIP nightlife. Hip-hop fans. People who want to sit at a table and not dance. Anyone expecting Mayfair-style service.',
    insiderTip: 'Buy tickets in advance for headline events — they sell out. Arrive by midnight to avoid the longest queues. Spend time in the smaller rooms too — some of the best sets happen away from the main stage.',
    whyRanked: 'Ministry of Sound is a London institution and one of the most important nightclubs in the world. The sound system, the history, and the commitment to electronic music make it irreplaceable.',
    mapUrl: 'https://maps.google.com/?q=Ministry+of+Sound+London',
  },
  {
    slug: 'lio-london',
    name: 'Lio Club London',
    shortName: 'Lio',
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
    doorPolicy: 'Dinner guests transition to club. Club entry via table booking or guestlist. Walk-ins possible but reservations strongly recommended.',
    entryDifficulty: 'Moderate',
    tableMinimum: '£1,000',
    crowd: 'International, glamorous, well-travelled. Average age 28-42.',
    bestFor: 'People who know Lio from Ibiza and want the London experience. Groups celebrating special occasions. International visitors who appreciate Mediterranean nightlife culture.',
    notIdealFor: 'Those looking for underground or alternative club experiences. Budget-conscious nights out. Hip-hop purists.',
    insiderTip: 'The dinner-and-show package is the way to experience Lio properly. Arriving just for the club portion means missing the best entertainment. Wednesday nights are more intimate and relaxed.',
    whyRanked: 'Lio brings genuine international glamour to London\'s club scene. The dinner-show-club format is polished, and the Mediterranean influence distinguishes it from everything else in Mayfair.',
    mapUrl: 'https://maps.google.com/?q=Lio+Club+London+Mayfair',
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find(c => c.slug === slug);
}

export function getClubsByArea(area: string): Club[] {
  return clubs.filter(c => c.areas.includes(area));
}

export function getClubsByGenre(genre: string): Club[] {
  return clubs.filter(c => c.musicGenres.some(g => g.toLowerCase() === genre.toLowerCase()));
}
