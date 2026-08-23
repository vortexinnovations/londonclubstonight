import {
  allMarkdownPaths,
  markdownForPath,
  notFoundMarkdown,
} from '@/lib/agent-markdown';
import { SITE_URL } from '@/lib/site-routes';

/**
 * Markdown representation of every page.
 *
 * Reachable two ways:
 *  - directly, at /md/<path>
 *  - transparently, when a client sends `Accept: text/markdown` to the normal
 *    URL and src/proxy.ts rewrites the request here.
 */

export function generateStaticParams() {
  return allMarkdownPaths().map((path) => ({
    slug: path === '/' ? [] : path.slice(1).split('/'),
  }));
}

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

  const markdown = markdownForPath(path);

  if (!markdown) {
    return markdownResponse(notFoundMarkdown(path), path, 404);
  }

  return markdownResponse(markdown, path, 200);
}
