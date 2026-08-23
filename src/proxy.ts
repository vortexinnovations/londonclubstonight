import { NextRequest, NextResponse } from 'next/server';
import { negotiate } from '@/lib/content-negotiation';

/**
 * Paths that must never take part in Accept negotiation: framework internals,
 * the markdown routes themselves, and machine-readable files that already have
 * their own content type.
 */
const NEGOTIATION_EXEMPT =
  /^\/(?:_next|md(?:\/|$)|gallery|api|icon|apple-icon|opengraph-image|twitter-image|favicon\.ico|robots\.txt|sitemap\.xml|llms\.txt)/;

function isExemptFromNegotiation(pathname: string): boolean {
  // Anything that looks like a file (has an extension) is served as-is.
  return NEGOTIATION_EXEMPT.test(pathname) || /\.[a-z0-9]+$/i.test(pathname);
}

/**
 * Add `Accept` to Vary.
 *
 * Appends a second field line rather than calling `set()`: RFC 9110 §5.3
 * treats repeated field lines as one comma-joined value, and appending avoids
 * clobbering the RSC values Next.js puts there.
 *
 * Next.js overwrites Vary on App Router *page* responses regardless, which is
 * why vercel.json restates the full value at the platform layer. Route handler
 * responses (/md, /llms.txt, sitemap) keep what is set here and in the handler.
 */
function varyOnAccept(response: NextResponse): NextResponse {
  const existing = response.headers.get('Vary') ?? '';
  const alreadyVaries = existing
    .split(',')
    .some((value) => value.trim().toLowerCase() === 'accept');

  if (!alreadyVaries) {
    response.headers.append('Vary', 'Accept');
  }

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Validate image proxy requests
  if (pathname.startsWith('/gallery/images/')) {
    const imagePath = pathname.replace('/gallery/images/', '');

    // Block path traversal
    if (imagePath.includes('..') || imagePath.includes('//')) {
      return new NextResponse('Invalid path', { status: 400 });
    }

    // Only allow image file extensions
    if (!/^[a-zA-Z0-9._-]+\.(jpg|jpeg|png|webp|gif)$/i.test(imagePath)) {
      return new NextResponse('Invalid file type', { status: 400 });
    }

    return NextResponse.next();
  }

  if (isExemptFromNegotiation(pathname)) {
    return NextResponse.next();
  }

  // React Server Component payload requests negotiate their own format.
  const isRscRequest = request.headers.has('rsc') || request.headers.has('next-router-prefetch');
  if (isRscRequest || (request.method !== 'GET' && request.method !== 'HEAD')) {
    return varyOnAccept(NextResponse.next());
  }

  const { markdown, notAcceptable } = negotiate(request.headers.get('accept'));

  if (markdown) {
    // Rewritten to a distinct URL, so the HTML and Markdown variants occupy
    // separate cache entries and can never be confused for one another. The
    // /md route handler sets Content-Type and Vary on the response itself.
    const url = request.nextUrl.clone();
    url.pathname = `/md${pathname === '/' ? '' : pathname.replace(/\/+$/, '')}`;
    return NextResponse.rewrite(url);
  }

  if (notAcceptable) {
    const body = [
      '# 406 — Not Acceptable',
      '',
      'This URL can be served as `text/html` or `text/markdown`.',
      'Send `Accept: text/markdown` for the Markdown representation.',
      '',
      'See https://londonclubstonight.com/llms.txt',
      '',
    ].join('\n');

    const response = new NextResponse(body, {
      status: 406,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        Vary: 'Accept, Accept-Encoding',
      },
    });
    return response;
  }

  return varyOnAccept(NextResponse.next());
}

export const config = {
  matcher: [
    /*
     * Every request except Next.js internals and static assets. Negotiation
     * and the Vary header need to be applied on real page routes; the image
     * proxy validation above still needs /gallery/images/*.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
