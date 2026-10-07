import {
  markdownForPath,
  notFoundMarkdown,
} from '@/lib/agent-markdown';
import { SITE_URL } from '@/lib/site-routes';
import { getListingPosts } from '@/lib/blog';

/**
 * Markdown representation of every page.
 *
 * Reachable two ways:
 *  - directly, at /md/<path>
 *  - transparently, when a client sends `Accept: text/markdown` to the normal
 *    URL and src/proxy.ts rewrites the request here.
 */

// Per request (edge-cached by the headers below) from the cached post list,
// so content-API posts get a markdown page without a deploy: a prerendered
// route handler is never refreshed on Vercel.
export const dynamic = 'force-dynamic';

function markdownResponse(body: string, canonicalPath: string, status: number) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // Required by acceptmarkdown.com so caches keep the HTML and Markdown
      // variants of a URL apart.
      Vary: 'Accept, Accept-Encoding',
      Link: `<${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}>; rel="canonical"`,
      'X-Robots-Tag': 'noindex, follow',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params;
  const path = slug?.length ? `/${slug.join('/')}` : '/';

  const markdown = markdownForPath(path, await getListingPosts());

  if (!markdown) {
    return markdownResponse(notFoundMarkdown(path), path, 404);
  }

  return markdownResponse(markdown, path, 200);
}
