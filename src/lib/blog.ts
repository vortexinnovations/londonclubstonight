export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedDate: string;
  updatedDate: string;
  relatedClubs: string[];
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-wear-to-london-clubs',
    title: 'What to Wear to London Clubs — The Complete Dress Code Guide for Men & Women',
    metaTitle: 'What to Wear to London Clubs — Dress Code Guide 2026',
    metaDescription: 'Detailed London club dress code guide for men and women. What to wear, what gets you turned away, and exact outfit ideas for Mayfair, Soho, and every type of venue.',
    excerpt: 'The difference between getting in and getting turned away often comes down to what you\'re wearing. Here\'s exactly what to wear to London\'s best clubs.',
    category: 'Practical Tips',
    tags: ['dress code', 'what to wear', 'entry tips'],
    publishedDate: '2026-03-01',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'cirque-le-soir', 'funky-buddha', 'maddox'],
    faqs: [
      { question: 'Can you wear trainers to London clubs?', answer: 'At most upscale London clubs — particularly in Mayfair — trainers will get you turned away. The exception is some venues like TABU where clean, designer trainers can work if the rest of your outfit is sharp. For guaranteed entry, wear smart shoes.' },
      { question: 'What should women wear to London nightclubs?', answer: 'Dresses, jumpsuits, or smart separates with heels are the safest bet. The dress code at most London clubs expects women to dress up — think cocktail bar, not casual bar. Avoid flip-flops, sportswear, and overly casual outfits.' },
      { question: 'Do London clubs have strict dress codes?', answer: 'Mayfair clubs have the strictest dress codes in London. Venues like Tape London, Cirque Le Soir, and The Box enforce smart dress codes firmly. Ministry of Sound is more relaxed — comfortable clubwear is fine. Always check the specific club before you go.' },
      { question: 'Can men wear jeans to London clubs?', answer: 'Dark, well-fitted jeans are acceptable at many London clubs when paired with smart shoes, a good shirt, and a blazer or jacket. Ripped jeans, baggy jeans, or light-wash denim will get you refused at most upscale venues.' },
    ],
  },
  {
    slug: 'london-club-age-guide',
    title: 'London Club Age Guide — How Old Do You Need to Be and Which Clubs Suit Your Age',
    metaTitle: 'London Club Age Guide — Age Limits & Best Clubs by Age 2026',
    metaDescription: 'How old do you have to be to get into London clubs? Complete age guide covering ID requirements, age demographics, and the best clubs for every age group from 18 to 40+.',
    excerpt: 'Every London club is 18+ but the real question is which clubs suit your age group. Here\'s the honest breakdown.',
    category: 'Practical Tips',
    tags: ['age limit', 'ID', 'age guide'],
    publishedDate: '2026-03-03',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'ministry-of-sound', 'scotch-of-st-james', 'cuckoo-club'],
    faqs: [
      { question: 'How old do you have to be to get into London clubs?', answer: 'All London nightclubs are strictly 18+. You will need valid photo ID — a passport, driving licence, or PASS card. Some clubs operate a 21+ policy on certain nights, particularly in Mayfair.' },
      { question: 'What ID do London clubs accept?', answer: 'Passport, UK driving licence, and PASS-accredited ID cards are universally accepted. Some clubs accept EU/EEA national ID cards. Student cards, bank cards, and expired documents are never accepted.' },
      { question: 'Are there over-30s clubs in London?', answer: 'Scotch of St James, Maddox, and The London Reign naturally attract an older crowd (late 20s to 40s) without formally being "over 30s" venues. Ministry of Sound also draws a wide age range thanks to its music-first approach.' },
      { question: 'Will I feel too old at London clubs?', answer: 'It depends entirely on the venue. Clubs like TABU and Luna Club skew younger (22-30), while Scotch of St James, Maddox, and The London Reign comfortably cater to guests in their 30s and 40s. Choose the right club and age is never an issue.' },
    ],
  },
  {
    slug: 'best-clubs-for-a-birthday-in-london',
    title: 'Best Clubs for a Birthday in London — Where to Celebrate in Style',
    metaTitle: 'Best Birthday Clubs in London — Where to Celebrate 2026',
    metaDescription: 'Planning a birthday night out in London? The best clubs for birthday celebrations, how to book, what packages include, and insider tips for an unforgettable night.',
    excerpt: 'Your birthday is the one night you can\'t afford to get wrong. Here are the clubs that actually deliver on birthday celebrations.',
    category: 'Going Out',
    tags: ['birthday', 'celebrations', 'special occasions'],
    publishedDate: '2026-03-05',
    updatedDate: '2026-03-25',
    relatedClubs: ['cirque-le-soir', 'the-london-reign', 'the-box-london', 'cuckoo-club', 'luna-club-london'],
  },
  {
    slug: 'how-much-does-a-night-out-in-london-cost',
    title: 'How Much Does a Night Out in London Cost? The Realistic 2026 Breakdown',
    metaTitle: 'Cost of a Night Out in London 2026 — Realistic Price Guide',
    metaDescription: 'How much does a night out in London really cost in 2026? Honest breakdown of club entry, drinks, tables, transport, and how to budget for London nightlife.',
    excerpt: 'London nightlife isn\'t cheap, but it doesn\'t have to bankrupt you either. Here\'s what everything actually costs.',
    category: 'Practical Tips',
    tags: ['costs', 'prices', 'budget', 'table prices'],
    publishedDate: '2026-03-07',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'ministry-of-sound', 'cuckoo-club', 'beat-london'],
    faqs: [
      { question: 'How much is a table at a London club?', answer: 'Table minimum spends at London\'s top clubs start from £1,000 and can go significantly higher on peak nights and at the most exclusive venues like Tape London (from £1,500). This typically covers bottles and mixers for your group.' },
      { question: 'How much do drinks cost in London clubs?', answer: 'Expect to pay £14-20 for cocktails at Mayfair clubs and £8-14 at venues outside Mayfair. Beers and basic spirits are £8-12 in most central London clubs. Ministry of Sound is generally more affordable at £8-12 for most drinks.' },
      { question: 'Is London club entry free?', answer: 'Guestlist entry is free or reduced at many clubs, particularly for women and mixed groups. Without guestlist, walk-in entry ranges from £10-30 depending on the venue and night. Table bookings include entry as standard.' },
      { question: 'How much should I budget for a night out in London?', answer: 'For a night at a Mayfair club without a table: budget £80-150 per person (entry, drinks, transport). With a table split between a group: £150-300 per person. At Ministry of Sound or less exclusive venues: £50-100 per person.' },
    ],
  },
  {
    slug: 'best-friday-night-clubs-in-london',
    title: 'Best Friday Night Clubs in London — Where to Go This Friday',
    metaTitle: 'Best Friday Night Clubs in London 2026 — Where to Go',
    metaDescription: 'The best London clubs on a Friday night. Which venues are open, what to expect, and where the best parties happen every Friday in Mayfair, Soho, and beyond.',
    excerpt: 'Friday hits different. The weekend\'s arrived, the energy is high, and London\'s best clubs deliver their strongest nights. Here\'s where to go.',
    category: 'Going Out',
    tags: ['Friday', 'weekend', 'night out'],
    publishedDate: '2026-03-10',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'cirque-le-soir', 'funky-buddha', 'tabu-london', 'the-box-london', 'maddox', 'ministry-of-sound'],
  },
  {
    slug: 'best-saturday-night-clubs-in-london',
    title: 'Best Saturday Night Clubs in London — The Biggest Night of the Week',
    metaTitle: 'Best Saturday Night Clubs in London 2026 — Where to Go',
    metaDescription: 'Saturday night in London — the biggest night of the week. The best clubs, what\'s open, what to expect, and how to guarantee entry at London\'s top Saturday venues.',
    excerpt: 'Saturday is London\'s main event. Every club brings its A-game, every table sells out, and the energy is unmatched. Here\'s the definitive Saturday guide.',
    category: 'Going Out',
    tags: ['Saturday', 'weekend', 'night out'],
    publishedDate: '2026-03-12',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'cirque-le-soir', 'tabu-london', 'the-london-reign', 'luna-club-london', 'ministry-of-sound'],
  },
  {
    slug: 'london-clubs-for-couples',
    title: 'London Clubs for Couples — The Best Date Night Clubs and Late-Night Spots',
    metaTitle: 'Best London Clubs for Couples — Date Night Guide 2026',
    metaDescription: 'The best London clubs for couples. From cocktail bars that become clubs to intimate venues perfect for date nights. Where to go when you\'re going out as two.',
    excerpt: 'Going clubbing as a couple is a completely different experience. These are the venues that actually work for two.',
    category: 'Going Out',
    tags: ['couples', 'date night', 'romantic'],
    publishedDate: '2026-03-14',
    updatedDate: '2026-03-25',
    relatedClubs: ['dear-darling', 'maddox', 'scotch-of-st-james', 'selene-london', 'the-london-reign'],
  },
  {
    slug: 'vip-nightlife-london-guide',
    title: 'VIP Nightlife in London — What It Actually Means and Whether It\'s Worth It',
    metaTitle: 'VIP Nightlife London — Complete Guide to VIP Clubbing 2026',
    metaDescription: 'What does VIP actually mean at London clubs? Table service explained, what you get for your money, and honest advice on whether VIP nightlife in London is worth it.',
    excerpt: 'Everyone talks about VIP but few people explain what it actually involves. Here\'s the honest truth about London\'s VIP club scene.',
    category: 'Practical Tips',
    tags: ['VIP', 'table service', 'luxury'],
    publishedDate: '2026-03-16',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'cirque-le-soir', 'the-london-reign', 'the-box-london', 'funky-buddha'],
  },
  {
    slug: 'london-nightlife-guide-for-tourists',
    title: 'London Nightlife Guide for Tourists — Everything Visitors Need to Know',
    metaTitle: 'London Nightlife Guide for Tourists 2026 — First Timer Tips',
    metaDescription: 'Visiting London and want to experience the nightlife? The complete tourist guide to London clubs — areas, transport, dress codes, costs, and what makes London different.',
    excerpt: 'London\'s club scene plays by its own rules. If you\'re visiting for the first time, here\'s everything you need to know before you go out.',
    category: 'Practical Tips',
    tags: ['tourists', 'visitors', 'first time', 'guide'],
    publishedDate: '2026-03-18',
    updatedDate: '2026-03-25',
    relatedClubs: ['cirque-le-soir', 'ministry-of-sound', 'the-london-reign', 'cuckoo-club'],
  },
  {
    slug: 'pre-drinks-bars-near-london-clubs',
    title: 'Best Pre-Drinks Bars Near London\'s Top Clubs — Where to Start Your Night',
    metaTitle: 'Best Pre-Drinks Bars Near London Clubs 2026',
    metaDescription: 'The best bars for pre-drinks near London\'s top nightclubs. Where to drink in Mayfair, Soho, and Piccadilly before heading to the club.',
    excerpt: 'Starting the night at the right bar sets the tone for everything that follows. Here are the best pre-club bars near London\'s top venues.',
    category: 'Going Out',
    tags: ['bars', 'pre-drinks', 'cocktails'],
    publishedDate: '2026-03-20',
    updatedDate: '2026-03-25',
    relatedClubs: ['dear-darling', 'maddox', 'cuckoo-club', 'scotch-of-st-james'],
  },
  {
    slug: 'new-clubs-in-london',
    title: 'New Clubs in London 2026 — The Latest Openings Worth Visiting',
    metaTitle: 'New Clubs in London 2026 — Latest Openings & Reviews',
    metaDescription: 'The newest nightclubs in London for 2026. Luna Club, Selene, and every fresh opening worth knowing about. First impressions and honest reviews from the ground.',
    excerpt: 'London\'s club scene never stands still. Here are the newest openings that are actually worth your time — and which established venues they\'re competing with.',
    category: 'Going Out',
    tags: ['new clubs', '2026', 'openings'],
    publishedDate: '2026-03-22',
    updatedDate: '2026-03-25',
    relatedClubs: ['luna-club-london', 'selene-london', 'the-box-london', 'funky-buddha'],
  },
  {
    slug: 'most-unique-clubs-in-london',
    title: 'Most Unique Clubs in London — Venues That Break the Mould',
    metaTitle: 'Most Unique Clubs in London 2026 — Beyond the Ordinary',
    metaDescription: 'The most unique and unusual nightclubs in London. From theatrical performances to circus acts, these are the clubs that offer something different.',
    excerpt: 'If you\'ve done the standard Mayfair table-and-bottles routine enough times, these are the clubs that genuinely offer something you haven\'t experienced before.',
    category: 'Going Out',
    tags: ['unique', 'unusual', 'experiences'],
    publishedDate: '2026-03-23',
    updatedDate: '2026-03-25',
    relatedClubs: ['the-box-london', 'cirque-le-soir', 'the-london-reign', 'scotch-of-st-james'],
  },
  {
    slug: 'best-clubs-for-groups-in-london',
    title: 'Best Clubs for Groups in London — Where to Take a Big Night Out',
    metaTitle: 'Best London Clubs for Groups — Large Party Guide 2026',
    metaDescription: 'Planning a big group night out in London? The best clubs for large groups, how to split table costs, and which venues handle groups of 10+ best.',
    excerpt: 'Organising a group night out in London is a logistical challenge. These clubs make it easier — and actually deliver a great experience for everyone.',
    category: 'Going Out',
    tags: ['groups', 'large parties', 'table booking'],
    publishedDate: '2026-03-24',
    updatedDate: '2026-03-25',
    relatedClubs: ['cuckoo-club', 'funky-buddha', 'luna-club-london', 'beat-london', 'the-london-reign'],
  },
  {
    slug: 'london-club-promoter-guide',
    title: 'How London Club Promoters Work — And Why You Should Use One',
    metaTitle: 'London Club Promoters Explained — How They Work 2026',
    metaDescription: 'What do London club promoters actually do? How to use a promoter for guestlist and table bookings, why it\'s free, and how to avoid the bad ones.',
    excerpt: 'Most people don\'t understand what club promoters do or why their services are free. Here\'s the honest explanation — and why using one makes your night better.',
    category: 'Practical Tips',
    tags: ['promoters', 'guestlist', 'booking tips'],
    publishedDate: '2026-03-25',
    updatedDate: '2026-03-25',
    relatedClubs: ['tape-london', 'cirque-le-soir', 'tabu-london', 'selene-london', 'dear-darling'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(p => p.category))];
}
