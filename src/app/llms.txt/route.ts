import { llmsTxt } from '@/lib/agent-markdown';

/**
 * /llms.txt — https://llmstxt.org
 *
 * Includes a "When to use this site" section so an agent can decide whether
 * this domain is the right source before crawling it.
 */

export const dynamic = 'force-static';

export function GET() {
  return new Response(llmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
