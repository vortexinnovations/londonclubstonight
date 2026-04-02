# Blog Post Scheduler Prompt — londonclubstonight.com

This prompt is executed by an automated scheduler. Each run creates exactly ONE new blog post. The prompt is entirely self-contained.

---

## SECTION 1: FILE SAFETY CONSTRAINT

You may ONLY modify these files:

1. `src/lib/blog.ts` — add the new blog post metadata entry to the `blogPosts` array
2. `src/app/blog/[slug]/page.tsx` — add the new blog post content as a new `case` in the `getPostContent` switch statement
3. `src/lib/used-images.json` — append the chosen image filename

**No other files may be modified under any circumstances.** The sitemap, blog listing page, and blog card components auto-generate from the `blogPosts` array. They need no manual updates.

---

## SECTION 2: SITE IDENTITY

**London Clubs Tonight** (londonclubstonight.com) is a nightclub promoter website for London's high-end nightlife scene. It covers Mayfair, Soho, Central London, and beyond. The tone is authoritative, insider, opinionated, and direct — written by promoters who work the doors, not journalists who visit once. Content is premium British English, confident without being arrogant, helpful without being generic. The audience is people aged 21-45 planning nights out in London, searching for practical advice on clubs, entry, dress codes, tables, guestlists, and what to expect.

- **Repository:** `vortexinnovations/londonclubstonight`
- **Domain:** `https://londonclubstonight.com`
- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS)
- **Branch:** `master`
- **Deploy:** Vercel (auto-deploys on push)
- **WhatsApp number:** `447880662708`
- **WhatsApp table booking URL:** `https://wa.me/447880662708?text=Hi%2C%20I%20found%20you%20on%20londonclubstonight.com%20and%20I%27d%20like%20to%20book%20a%20table.`
- **WhatsApp guestlist URL:** `https://wa.me/447880662708?text=Hi%2C%20I%20found%20you%20on%20londonclubstonight.com%20and%20I%27d%20like%20to%20get%20on%20the%20guestlist.`

---

## SECTION 3: STEP 1 — AUDIT EXISTING CONTENT

Before writing anything, read all existing blog post titles and slugs:

```bash
grep "slug:\|title:" src/lib/blog.ts | head -100
```

Then read the last 5 blog post entries to understand recent themes:

```bash
tail -200 src/lib/blog.ts
```

Identify:
- Topics already covered (do NOT duplicate)
- Themes used in the last 3 posts (do NOT repeat the same theme consecutively)
- Which clubs have been featured recently (rotate club coverage)

---

## SECTION 4: STEP 2 — CHOOSE TODAY'S TOPIC

Select a topic that:
1. Is NOT already covered by an existing blog post
2. Is genuinely useful to someone planning a London night out
3. Has real search volume (think about what people actually Google)
4. Fits the site's role as a practical insider nightlife guide
5. Alternates between the two categories: `Practical Tips` and `Going Out`

### Category rotation

The two valid categories are (case-sensitive, exact strings):
- `'Practical Tips'` — how-to guides, decision frameworks, cost breakdowns, entry advice, planning logistics
- `'Going Out'` — night-specific guides, club comparisons, occasion-based recommendations, scene coverage

### Topic ideas by theme (rotate through these):

**Entry & Door Policy:** types of ID accepted, how to improve your chances, what bouncers actually look for, getting in as a group of guys, re-entry policies
**Dress Code:** seasonal outfit guides, what NOT to wear, designer vs high street, shoes that work, accessories
**Planning & Logistics:** pre-club dinner spots, transport home at 3am, cloakroom tips, phone charging, getting cash out
**Tables & Bottle Service:** what happens when you book a table, splitting costs, best value tables, table for two, birthday table tips
**Guestlist & Entry:** how guestlists actually work, guestlist vs walk-in, guestlist for guys, guestlist deadlines
**Music & Atmosphere:** best clubs for specific genres (drill, amapiano, tech house), live DJ nights, sound system quality
**Occasions:** hen nights, stag nights, work events, date nights, leaving parties, graduation celebrations
**Comparisons:** club vs bar, Mayfair vs Shoreditch, Friday vs Saturday, early vs late arrival
**Seasonal:** summer rooftop clubs, winter nightlife, bank holiday specials, NYE planning, festive season
**First-timers:** first time at a London club, what to expect if you've never been, common mistakes

---

## SECTION 5: STEP 3 — SELECT AN IMAGE FROM SUPABASE

### Fetch available images

```bash
```
Fetch the list of available images from the tracker repo (all sites share the same image pool):

Read `images.json` from the `vortexinnovations/blog-scheduler-tracker` repo. It contains a JSON array of all available image filenames from the shared Supabase gallery bucket (917+ images).

If you cannot read it, try:
```bash
gh api repos/vortexinnovations/blog-scheduler-tracker/contents/images.json --jq '.content' | base64 -d
```

This file is gitignored and never committed.

### Check used images

Read `src/lib/used-images.json` to see which images are already assigned to blog posts.

### Select an unused image

1. Filter the full image list to remove any filenames present in `used-images.json`
2. If all images are used, clear `used-images.json` to `[]` and start over
3. Pick an image using this deterministic method: `index = (day_of_year * 7 + post_count) % unused_images.length`
4. Prefer images with the `fe4414_` prefix (these are venue/atmosphere shots, best for blog thumbnails)

### Record the selection

Add the chosen filename to the `src/lib/used-images.json` array.

### Image path format

In `blog.ts`, the `featuredImage` field uses this exact format:
```
'/gallery/images/FILENAME.jpg'
```
Example: `'/gallery/images/fe4414_153a500be2f04c34a8e909c741511d23.jpg'`

The filename is CASE-SENSITIVE. Copy it exactly from the Supabase listing.

---

## SECTION 6: STEP 4 — GATHER VALID INTERNAL LINKS

### Static pages (always valid)

```
/
/clubs
/blog
/contact
/best-clubs-in-london
/guides
/guides/hardest-clubs-to-get-into
/guides/clubs-open-late
/guides/how-to-get-into-london-clubs
/guides/london-clubs-by-music-genre
/areas
/areas/mayfair
/areas/central-london
/areas/soho
/clubs-tonight-london
/mayfair-clubs-tonight
/best-clubs-this-weekend-london
/guestlist-tonight-london
/last-minute-table-booking-london
/friday-nightclubs-london
/saturday-nightclubs-london
/clubs-open-sunday-night-london
/can-you-get-into-tape-london-tonight
/late-night-clubs-london-tonight
```

### Club pages (always valid)

```
/clubs/tape-london
/clubs/cirque-le-soir
/clubs/the-london-reign
/clubs/tabu-london
/clubs/maddox
/clubs/scotch-of-st-james
/clubs/cuckoo-club
/clubs/dear-darling
/clubs/beat-london
/clubs/ministry-of-sound
/clubs/funky-buddha
/clubs/the-box-london
/clubs/luna-club-london
/clubs/selene-london
```

Closed clubs (pages exist but do not link to from new content):
```
/clubs/libertine
/clubs/luxx-club
/clubs/lio-london
```

### Blog post URLs

To get all existing blog post URLs, run:
```bash
grep "slug:" src/lib/blog.ts
```

Blog post URLs follow the pattern: `/blog/SLUG`

### Cross-site links (external, use sparingly)

```
https://mayfairtonight.com
https://londonbottleservice.com
https://londonbirthdayclub.com
https://londonluxurynightlife.com
```

**CRITICAL: Never link to a URL that does not exist. Only use URLs listed above or existing blog post slugs.**

---

## SECTION 7: STEP 5 — WRITE THE POST

### FILE 1: `src/lib/blog.ts`

Add a new entry to the `blogPosts` array. Insert it at the END of the array, just before the closing `];`.

Find the last entry in the array (the one ending with `},`) and add the new entry after it.

#### Template (exact format):

```typescript
  {
    slug: 'your-slug-here',
    title: 'Your Full Title Here — With a Compelling Subtitle',
    metaTitle: 'Your SEO Title Here — Shorter Version 2026',
    metaDescription: 'A compelling 150-160 character meta description that includes the primary keyword and encourages clicks.',
    excerpt: 'A 1-2 sentence excerpt that appears on blog listing cards. Direct, enticing, makes readers want to click.',
    featuredImage: '/gallery/images/CHOSEN_IMAGE.jpg',
    category: 'Practical Tips',
    tags: ['tag1', 'tag2', 'tag3'],
    publishedDate: 'YYYY-MM-DD',
    updatedDate: 'YYYY-MM-DD',
    relatedClubs: ['club-slug-1', 'club-slug-2', 'club-slug-3'],
    faqs: [
      { question: 'FAQ question here?', answer: 'Answer here.' },
      { question: 'Another FAQ?', answer: 'Another answer.' },
    ],
  },
```

#### Field rules:

| Field | Rules |
|-------|-------|
| `slug` | Kebab-case, 3-8 words, no trailing hyphens. Must be unique. |
| `title` | 50-80 chars. Include primary keyword. Use em dash (—) for subtitle. |
| `metaTitle` | 50-60 chars. Include primary keyword + year (2026). |
| `metaDescription` | 150-160 chars. Include primary keyword. End with a compelling hook. |
| `excerpt` | 1-2 sentences. Direct, insider tone. Appears on blog cards. |
| `featuredImage` | Must start with `/gallery/images/`. Must be a real image from Supabase. |
| `category` | EXACTLY `'Practical Tips'` or `'Going Out'`. Case-sensitive. |
| `tags` | 2-4 lowercase tags relevant to the topic. |
| `publishedDate` | Today's date in `YYYY-MM-DD` format. |
| `updatedDate` | Same as publishedDate for new posts. |
| `relatedClubs` | 3-5 club slugs from the valid list. Choose clubs relevant to the topic. |
| `faqs` | 3-5 FAQ objects. Questions people actually search. Answers 2-4 sentences. Optional but strongly recommended. |

#### String escaping rules:

- Use `\'` for apostrophes inside single-quoted strings: `'Here\'s the thing'`
- Use `\n` for newlines (rarely needed)
- Use `&` not `&amp;` (it's TypeScript, not HTML)
- Do NOT use backticks or template literals
- Do NOT use double quotes for string values — use single quotes

---

### FILE 2: `src/app/blog/[slug]/page.tsx`

Add a new `case` to the `getPostContent` function's `switch` statement. Find the last `case` block and add the new one before the `default:` case.

#### Template (exact format):

```tsx
    // ─────────────────────────────────────────────
    // POST N: Title Here
    // ─────────────────────────────────────────────
    case 'your-slug-here':
      return (
        <>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">First Section Heading</h2>
          <p className="text-[#BBB] leading-relaxed mb-4">
            Paragraph content here. Use &apos; for apostrophes, &quot; for quotes.
          </p>
          <p className="text-[#BBB] leading-relaxed mb-4">
            Another paragraph with a <Link href="/clubs/tape-london" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Tape London</Link> internal link.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Second Section Heading</h2>
          <p className="text-[#BBB] leading-relaxed mb-4">
            More content here.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Subsection</h3>
          <p className="text-[#BBB] leading-relaxed mb-4">
            Subsection content.
          </p>

          <ul className="list-disc list-inside text-[#BBB] space-y-2 mb-6 ml-4">
            <li>List item one</li>
            <li>List item two</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Final Thoughts</h2>
          <p className="text-[#BBB] leading-relaxed mb-4">
            Closing paragraph. Link to <Link href="/guides/how-to-get-into-london-clubs" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">our entry guide</Link> or another relevant page.
          </p>
          <p className="text-[#BBB] leading-relaxed mb-4">
            Ready to book? <a href="https://wa.me/447880662708?text=Hi%2C%20I%20found%20you%20on%20londonclubstonight.com%20and%20I%27d%20like%20to%20book%20a%20table." target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">Message us on WhatsApp</a> and we&apos;ll sort everything for you.
          </p>
        </>
      );
```

#### Content rules:

| Rule | Detail |
|------|--------|
| **Word count** | 800-1,200 words |
| **Headings** | 3-5 H2s, 1-3 H3s. Include keywords naturally. |
| **Internal links** | 4-8 internal links to club pages, guide pages, or other blog posts. |
| **WhatsApp CTA** | Include at least one WhatsApp link near the end. |
| **Tone** | Insider, authoritative, direct. Written by promoters, not journalists. |
| **Lists** | Use `<ul>` lists for practical advice sections. |
| **No fluff** | Every sentence must add value. No filler paragraphs. |
| **Escaping** | Use `&apos;` for apostrophes, `&quot;` for quotes in JSX. |
| **No curly quotes** | Use straight quotes/apostrophes only. |
| **Link format** | `<Link href="/path" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">text</Link>` |
| **External link format** | `<a href="URL" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] underline underline-offset-2 hover:text-white">text</a>` |

#### HTML elements to use:

- `<h2 className="text-2xl font-bold text-white mt-10 mb-4">` — section headings
- `<h3 className="text-xl font-bold text-white mt-8 mb-3">` — subsection headings
- `<p className="text-[#BBB] leading-relaxed mb-4">` — paragraphs
- `<strong className="text-white">` — bold/emphasis within paragraphs
- `<ul className="list-disc list-inside text-[#BBB] space-y-2 mb-6 ml-4">` — unordered lists
- `<ol className="list-decimal list-inside text-[#BBB] space-y-2 mb-6 ml-4">` — ordered lists
- `<li>` — list items
- `<Link>` (imported from next/link) — internal links
- `<a>` — external links (WhatsApp, cross-site)

**CRITICAL:** The `Link` component is already imported at the top of the file. Do NOT add an import statement.

---

## SECTION 8: STEP 6 — COMMIT AND PUSH

```bash
git add src/lib/blog.ts src/app/blog/\\[slug\\]/page.tsx src/lib/used-images.json
git commit -m "Add blog post: TITLE_HERE

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
git push origin master
```

---

## SECTION 9: STEP 7 — VERIFY

Before committing, confirm:

- [ ] The slug is unique (not already in `blogPosts`)
- [ ] The `case` string in `getPostContent` matches the slug exactly
- [ ] The category is exactly `'Practical Tips'` or `'Going Out'`
- [ ] The `featuredImage` path starts with `/gallery/images/`
- [ ] The image filename exists in the Supabase bucket
- [ ] The image filename has been added to `used-images.json`
- [ ] All internal links point to valid pages (listed in Section 6)
- [ ] No links to closed clubs (libertine, luxx-club, lio-london)
- [ ] `relatedClubs` slugs are from the valid open club list
- [ ] `publishedDate` and `updatedDate` are today's date
- [ ] The content uses `&apos;` not `'` inside JSX text
- [ ] The content uses `&quot;` not `"` inside JSX text
- [ ] All `<Link>` elements use `href` not `to`
- [ ] The blog entry ends with `},` (trailing comma)
- [ ] The case block ends with the closing `);` for the return

Run a build check:
```bash
npm run build 2>&1 | tail -5
```

If the build fails, fix the error before pushing.

---

## SECTION 10: ABSOLUTE RULES

### A) FILE SAFETY
- ONLY modify the 3 files listed in Section 1
- NEVER modify `next.config.ts`, `layout.tsx`, `globals.css`, `clubs.ts`, or any component files
- NEVER delete or modify existing blog posts
- NEVER modify existing `case` blocks in `getPostContent`
- NEVER change imports at the top of any file

### B) CONTENT RULES
- NEVER invent facts about specific clubs (capacity numbers, exact prices beyond "from X") that cannot be verified
- NEVER make guaranteed-entry claims ("you WILL get in")
- NEVER use phrases like "in conclusion", "to summarise", "without further ado", "let's dive in"
- NEVER use emojis
- NEVER duplicate a topic already covered by an existing blog post
- NEVER link to a page that does not exist
- NEVER reference closed clubs (Libertine, Luxx Club, Lio London) as currently open venues
- ALWAYS use British English spelling (favour, colour, centre, organisation)
- ALWAYS include at least one WhatsApp CTA link
- ALWAYS include 4-8 internal links to other pages on the site
- ALWAYS write in first-person plural ("we", "our") when speaking as the promoter team

### C) SEO BEST PRACTICES
- Title tag: 50-60 characters, primary keyword near the start
- Meta description: 150-160 characters, includes primary keyword, ends with a hook
- H1 (title): matches the search intent, includes the primary keyword
- H2s: include secondary keywords naturally
- Excerpt: compelling, click-worthy, under 200 characters
- FAQ questions: use the exact phrasing people would type into Google
- FAQ answers: 2-4 sentences, directly answer the question, include relevant keywords
- Internal link anchor text: descriptive (not "click here"), keyword-relevant
- Tags: 2-4 lowercase, specific tags (not generic like "nightlife")
- Slug: 3-8 words, includes primary keyword, kebab-case
