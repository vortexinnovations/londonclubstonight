/**
 * End-to-end checks for agent readiness against a running site.
 *
 *   npm run test:e2e                        # http://localhost:3000
 *   BASE_URL=https://londonclubstonight.com npm run test:e2e
 *
 * These mirror the probes an AI-readiness audit runs, so a pass here is the
 * verification evidence for the fixes.
 */
import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';

const BASE_URL = (process.env.BASE_URL ?? 'http://localhost:3000').replace(/\/+$/, '');

const MARKDOWN = 'text/markdown';

function url(path: string): string {
  return `${BASE_URL}${path}`;
}

async function get(path: string, headers: Record<string, string> = {}) {
  return fetch(url(path), { headers, redirect: 'manual' });
}

function varyValues(response: Response): string[] {
  return (response.headers.get('vary') ?? '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

/** Visible text length, scripts and styles stripped. */
function textLength(html: string): number {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim().length;
}

function headingLevels(html: string): number[] {
  return [...html.matchAll(/<h([1-6])[\s>]/gi)].map((match) => Number(match[1]));
}

describe('agent readiness', () => {
  let homepage: string;

  before(async () => {
    const response = await get('/');
    assert.equal(response.status, 200, `${BASE_URL} must be reachable`);
    homepage = await response.text();
  });

  describe('1. agent-friendly 404s', () => {
    test('a nonexistent path returns a real 404', async () => {
      const response = await get('/some-path-that-does-not-exist');
      assert.equal(response.status, 404);
    });

    test('the HTML 404 links agents onward to sitemap and llms.txt', async () => {
      const response = await get('/some-path-that-does-not-exist');
      const body = await response.text();
      assert.match(body, /\/sitemap\.xml/);
      assert.match(body, /\/llms\.txt/);
      assert.match(body, /Where to look next/i);
    });

    test('a nonexistent path returns a markdown 404 body under negotiation', async () => {
      const response = await get('/some-path-that-does-not-exist', {
        Accept: MARKDOWN,
      });
      assert.equal(response.status, 404);
      assert.match(response.headers.get('content-type') ?? '', /text\/markdown/);

      const body = await response.text();
      assert.match(body, /^# 404/);
      assert.match(body, /\/sitemap\.xml/);
      assert.match(body, /\/llms\.txt/);
    });

    test('a nonexistent club slug also 404s', async () => {
      const response = await get('/clubs/not-a-real-club');
      assert.equal(response.status, 404);
    });
  });

  describe('2. content without JavaScript', () => {
    test('the homepage ships an H1 in raw HTML', () => {
      assert.match(homepage, /<h1[\s>]/i);
    });

    test('the homepage ships well over 500 characters of text', () => {
      assert.ok(
        textLength(homepage) > 500,
        `expected >500 chars, got ${textLength(homepage)}`
      );
    });

    test('there is exactly one H1', () => {
      const levels = headingLevels(homepage);
      assert.equal(levels.filter((level) => level === 1).length, 1);
    });

    test('the heading outline is nested, not flat', () => {
      const levels = headingLevels(homepage);
      assert.ok(levels.includes(2), 'expected H2 sections');
      assert.ok(levels.includes(3), 'expected H3 subsections');
    });

    test('no heading level is skipped', () => {
      const levels = headingLevels(homepage);
      for (let i = 1; i < levels.length; i += 1) {
        assert.ok(
          levels[i] - levels[i - 1] <= 1,
          `heading jumped from h${levels[i - 1]} to h${levels[i]}`
        );
      }
    });
  });

  describe('3. markdown content negotiation', () => {
    test('Accept: text/markdown returns markdown', async () => {
      const response = await get('/', { Accept: MARKDOWN });
      assert.equal(response.status, 200);
      assert.match(
        response.headers.get('content-type') ?? '',
        /^text\/markdown;\s*charset=utf-8/
      );

      const body = await response.text();
      assert.match(body, /^# /);
    });

    test('the markdown response sets Vary: Accept', async () => {
      const response = await get('/', { Accept: MARKDOWN });
      assert.ok(
        varyValues(response).includes('accept'),
        `Vary was "${response.headers.get('vary')}"`
      );
    });

    test('the HTML response also sets Vary: Accept', async (t) => {
      const response = await get('/');
      const servedByVercel =
        response.headers.has('x-vercel-id') ||
        /vercel/i.test(response.headers.get('server') ?? '');

      // Next.js overwrites Vary on App Router page responses with its own RSC
      // list, so `next start` cannot satisfy this. vercel.json restates the
      // full value at the platform layer, which only exists on Vercel.
      if (!servedByVercel && !varyValues(response).includes('accept')) {
        t.skip(
          'page Vary is applied by vercel.json at the CDN layer; not observable under `next start`'
        );
        return;
      }

      assert.ok(
        varyValues(response).includes('accept'),
        `Vary was "${response.headers.get('vary')}"`
      );
    });

    test('a browser Accept header still gets HTML', async () => {
      const response = await get('/', {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      });
      assert.match(response.headers.get('content-type') ?? '', /text\/html/);
    });

    test('a bare curl (no Accept) still gets HTML', async () => {
      const response = await get('/', { Accept: '*/*' });
      assert.match(response.headers.get('content-type') ?? '', /text\/html/);
    });

    test('q-values are honoured in favour of markdown', async () => {
      const response = await get('/', {
        Accept: 'text/html;q=0.8, text/markdown;q=0.9',
      });
      assert.match(response.headers.get('content-type') ?? '', /text\/markdown/);
    });

    test('q-values are honoured in favour of html', async () => {
      const response = await get('/', {
        Accept: 'text/markdown;q=0.5, text/html;q=1.0',
      });
      assert.match(response.headers.get('content-type') ?? '', /text\/html/);
    });

    test('an unsupported Accept type returns 406', async () => {
      const response = await get('/', { Accept: 'application/json' });
      assert.equal(response.status, 406);
    });

    test('deep pages negotiate too', async () => {
      const response = await get('/clubs', { Accept: MARKDOWN });
      assert.equal(response.status, 200);
      assert.match(response.headers.get('content-type') ?? '', /text\/markdown/);
      assert.match(await response.text(), /^# /);
    });

    test('the /md path serves the same markdown directly', async () => {
      const response = await get('/md/clubs');
      assert.equal(response.status, 200);
      assert.match(response.headers.get('content-type') ?? '', /text\/markdown/);
    });

    test('markdown responses declare their canonical HTML URL', async () => {
      const response = await get('/clubs', { Accept: MARKDOWN });
      assert.match(response.headers.get('link') ?? '', /rel="canonical"/);
    });

    test('sitemap.xml is unaffected by negotiation', async () => {
      const response = await get('/sitemap.xml', { Accept: 'application/xml' });
      assert.equal(response.status, 200);
      assert.match(response.headers.get('content-type') ?? '', /xml/);
    });
  });

  describe('5. agent instructions / when-to-use', () => {
    let llms: string;

    before(async () => {
      const response = await get('/llms.txt');
      assert.equal(response.status, 200);
      assert.match(response.headers.get('content-type') ?? '', /text\/plain/);
      llms = await response.text();
    });

    test('follows the llms.txt shape: H1 then blockquote summary', () => {
      const lines = llms.split('\n');
      assert.match(lines[0], /^# \S/);
      assert.match(lines[2], /^> \S/);
    });

    test('has an explicit when-to-use section', () => {
      assert.match(llms, /## When to use this site/);
    });

    test('names concrete jobs and non-jobs', () => {
      assert.match(llms, /open tonight/i);
      assert.match(llms, /guestlist/i);
      assert.match(llms, /not\*\* a good source/i);
    });

    test('tells agents how to call the site', () => {
      assert.match(llms, /Accept: text\/markdown/);
      assert.match(llms, /sitemap\.xml/);
    });

    test('links are absolute', () => {
      const relative = llms.match(/\]\((?!https?:\/\/)[^)]+\)/g) ?? [];
      assert.deepEqual(relative, []);
    });
  });

  describe('6. metadata completeness', () => {
    test('declares a canonical URL', () => {
      assert.match(homepage, /<link[^>]+rel="canonical"/i);
    });

    test('declares a document language', () => {
      assert.match(homepage, /<html[^>]+lang="[a-z-]+"/i);
    });

    test('declares og:type', () => {
      assert.match(homepage, /<meta[^>]+property="og:type"/i);
    });

    test('declares og:image', () => {
      assert.match(homepage, /<meta[^>]+property="og:image"/i);
    });

    test('the og:image URL is absolute and resolves to an image', async () => {
      const match = homepage.match(
        /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i
      ) ?? homepage.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/i);
      assert.ok(match, 'og:image meta tag not found');

      const imageUrl = match[1];
      assert.match(imageUrl, /^https?:\/\//, 'og:image must be absolute');

      // The tag always carries the canonical production origin. When testing a
      // different origin, fetch the same path from the origin under test.
      const { pathname, search } = new URL(imageUrl);
      const response = await fetch(`${BASE_URL}${pathname}${search}`);

      assert.equal(response.status, 200);
      assert.match(response.headers.get('content-type') ?? '', /^image\//);
    });
  });

  describe('7. trust anchor pages', () => {
    for (const path of ['/about-the-editor', '/contact', '/privacy']) {
      test(`${path} exists with substantive content`, async () => {
        const response = await get(path);
        assert.equal(response.status, 200);

        const length = textLength(await response.text());
        assert.ok(length >= 500, `${path} had only ${length} chars of text`);
      });
    }

    test('the privacy page is linked from the site footer', () => {
      assert.match(homepage, /href="\/privacy"/);
    });

    test('the privacy page is listed in the sitemap', async () => {
      const response = await get('/sitemap.xml');
      assert.match(await response.text(), /<loc>[^<]*\/privacy<\/loc>/);
    });
  });

  describe('regressions', () => {
    test('robots.txt still points at the sitemap', async () => {
      const response = await get('/robots.txt');
      assert.equal(response.status, 200);
      assert.match(await response.text(), /Sitemap:\s*\S+sitemap\.xml/i);
    });

    test('the image proxy still rejects path traversal', async () => {
      const response = await get('/gallery/images/..%2Fsecret.jpg');
      assert.ok(
        response.status === 400 || response.status === 404,
        `expected rejection, got ${response.status}`
      );
    });

    test('the image proxy still rejects non-image extensions', async () => {
      const response = await get('/gallery/images/evil.svg');
      assert.equal(response.status, 400);
    });

    test('a real club page still renders', async () => {
      const response = await get('/clubs/tape-london');
      assert.equal(response.status, 200);
      assert.match(await response.text(), /<h1[\s>]/i);
    });

    test('WhatsApp links still use the configured numbers', () => {
      assert.match(homepage, /wa\.me\/\d{10,}/);
    });
  });
});
