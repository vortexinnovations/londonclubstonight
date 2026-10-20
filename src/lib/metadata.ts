import type { Metadata, ResolvingMetadata } from 'next';

/**
 * The site-wide Open Graph fields, set by the root layout. Only pages with no
 * metadata of their own (the 404 page) still show them: every page sets its
 * own title, description, url and image.
 *
 * There is no url here: a layout's og:url is inherited by every page that sets
 * no Open Graph fields of its own, which told crawlers those pages were the
 * home page.
 */
export const SITE_OPEN_GRAPH = {
  type: 'website',
  locale: 'en_GB',
  siteName: 'London Clubs Tonight',
  title: 'London Clubs Tonight | Where to Go Out in London Tonight',
  description: 'The definitive guide to London\'s best nightclubs. Find out what\'s open tonight, book VIP tables, and get on the guestlist.',
} satisfies Metadata['openGraph'];

/**
 * The site card (app/opengraph-image.tsx) as a page's og:image, for pages with
 * no picture of their own to share.
 *
 * Next merges metadata shallowly, so a page's `openGraph` replaces the layout's
 * whole object, including the image that app/opengraph-image.tsx attaches at
 * the layout level. The resolved parent metadata still has it, with its URL.
 */
export async function siteImage(parent: ResolvingMetadata): Promise<NonNullable<Metadata['openGraph']>['images']> {
  return (await parent).openGraph?.images;
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
