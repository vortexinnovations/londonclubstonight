import type { Metadata, ResolvingMetadata } from 'next';

/**
 * The site-wide Open Graph fields, set by the root layout.
 *
 * There is no url here: a layout's og:url is inherited by every page that sets
 * no Open Graph fields of its own, which told crawlers those pages were the
 * home page. Each page sets `openGraph.url` to its own URL.
 */
export const SITE_OPEN_GRAPH = {
  type: 'website',
  locale: 'en_GB',
  siteName: 'London Clubs Tonight',
  title: 'London Clubs Tonight | Where to Go Out in London Tonight',
  description: 'The definitive guide to London\'s best nightclubs. Find out what\'s open tonight, book VIP tables, and get on the guestlist.',
} satisfies Metadata['openGraph'];

/**
 * Open Graph for a page with no Open Graph fields of its own: the layout's,
 * plus the page's own og:url.
 *
 * Next merges metadata shallowly, so a page's `openGraph` replaces the layout's
 * whole object, including the og:image that app/opengraph-image.tsx gives it.
 * The resolved parent metadata still has that image, so it is carried over.
 */
export async function siteOpenGraph(parent: ResolvingMetadata, url: string): Promise<Metadata['openGraph']> {
  const { openGraph } = await parent;
  return { ...SITE_OPEN_GRAPH, images: openGraph?.images, url };
}

export const SITE_NAME = 'London Clubs Tonight';

/** What the root layout's title.template appends to every page title. */
const TITLE_SUFFIX = ` | ${SITE_NAME}`;

/** Longest full title Google shows without cutting it off. */
const MAX_TITLE = 60;

/**
 * A page's title: "body | London Clubs Tonight" when that fits in 60
 * characters, otherwise the body alone, so search results show the words that
 * matter instead of cutting them off. Use it for every page's `title`.
 */
export function fitTitle(body: string): string | { absolute: string } {
  return body.length + TITLE_SUFFIX.length <= MAX_TITLE ? body : { absolute: body };
}
