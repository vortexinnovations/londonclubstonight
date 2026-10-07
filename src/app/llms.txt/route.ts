import { llmsTxt } from '@/lib/agent-markdown';
import { getListingPosts } from '@/lib/blog';

/**
 * /llms.txt — https://llmstxt.org
 *
 * Includes a "When to use this site" section so an agent can decide whether
 * this domain is the right source before crawling it.
 */

// Per request (edge-cached by the header below) from the cached post list,
// so content-API posts appear without a deploy: a prerendered route handler is
// never refreshed on Vercel.
export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(llmsTxt(await getListingPosts()), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
