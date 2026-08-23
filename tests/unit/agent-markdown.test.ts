import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  allMarkdownPaths,
  llmsTxt,
  markdownForPath,
  normalisePath,
  notFoundMarkdown,
} from '../../src/lib/agent-markdown.ts';
import { SITE_URL, staticRoutes } from '../../src/lib/site-routes.ts';
import { clubs } from '../../src/lib/clubs.ts';
import { blogPosts } from '../../src/lib/blog.ts';
import sitemap from '../../src/app/sitemap.ts';

describe('site route registry', () => {
  test('paths are unique', () => {
    const paths = staticRoutes.map((route) => route.path);
    assert.equal(new Set(paths).size, paths.length);
  });

  test('every route has a leading slash and no trailing slash', () => {
    for (const route of staticRoutes) {
      assert.ok(route.path.startsWith('/'), `${route.path} must start with /`);
      if (route.path !== '/') {
        assert.ok(!route.path.endsWith('/'), `${route.path} must not end with /`);
      }
    }
  });

  test('every route has a non-empty title and description', () => {
    for (const route of staticRoutes) {
      assert.ok(route.title.length > 0, `${route.path} needs a title`);
      assert.ok(
        route.description.length >= 40,
        `${route.path} needs a usable description`
      );
    }
  });

  test('priorities are within the sitemap range', () => {
    for (const route of staticRoutes) {
      assert.ok(route.priority > 0 && route.priority <= 1, `${route.path} priority`);
    }
  });
});

describe('sitemap', () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  // The static ordering that shipped before the route registry was extracted,
  // with /privacy added. Guards the refactor against reordering the sitemap.
  const expectedStaticOrder = [
    '',
    '/best-clubs-in-london',
    '/clubs',
    '/guides/hardest-clubs-to-get-into',
    '/guides/clubs-open-late',
    '/guides/how-to-get-into-london-clubs',
    '/guides/london-clubs-by-music-genre',
    '/guides',
    '/areas/mayfair',
    '/areas/central-london',
    '/areas/soho',
    '/areas',
    '/contact',
    '/about-the-editor',
    '/privacy',
    '/blog',
    '/clubs-tonight-london',
    '/mayfair-clubs-tonight',
    '/best-clubs-this-weekend-london',
    '/guestlist-tonight-london',
    '/last-minute-table-booking-london',
    '/can-you-get-into-tape-london-tonight',
    '/best-clubs-for-last-minute-tables-london',
    '/where-to-go-out-tonight-in-mayfair',
    '/late-night-clubs-london-tonight',
    '/clubs-open-sunday-night-london',
    '/friday-nightclubs-london',
    '/saturday-nightclubs-london',
  ].map((path) => `${SITE_URL}${path}`);

  test('preserves the previous static page order', () => {
    const staticUrls = urls.filter(
      (url) => !url.includes('/clubs/') && !url.includes('/blog/')
    );
    assert.deepEqual(staticUrls, expectedStaticOrder);
  });

  test('includes every club page', () => {
    for (const club of clubs) {
      assert.ok(
        urls.includes(`${SITE_URL}/clubs/${club.slug}`),
        `missing ${club.slug}`
      );
    }
  });

  test('includes every blog post', () => {
    for (const post of blogPosts) {
      assert.ok(
        urls.includes(`${SITE_URL}/blog/${post.slug}`),
        `missing ${post.slug}`
      );
    }
  });

  test('lists the privacy trust page', () => {
    assert.ok(urls.includes(`${SITE_URL}/privacy`));
  });

  test('has no duplicate URLs', () => {
    assert.equal(new Set(urls).size, urls.length);
  });

  test('club detail pages follow the /clubs index', () => {
    const indexAt = urls.indexOf(`${SITE_URL}/clubs`);
    assert.equal(urls[indexAt + 1], `${SITE_URL}/clubs/${clubs[0].slug}`);
  });
});

describe('markdownForPath', () => {
  test('produces markdown for every advertised path', () => {
    for (const path of allMarkdownPaths()) {
      const markdown = markdownForPath(path);
      assert.ok(markdown, `no markdown for ${path}`);
      assert.ok(markdown.startsWith('# '), `${path} must open with an H1`);
      assert.ok(
        markdown.includes('/llms.txt'),
        `${path} should link agents onward`
      );
    }
  });

  test('covers every club and blog post', () => {
    const paths = allMarkdownPaths();
    assert.equal(
      paths.length,
      staticRoutes.length + clubs.length + blogPosts.length
    );
  });

  test('a club document carries the venue facts an agent needs', () => {
    const club = clubs[0];
    const markdown = markdownForPath(`/clubs/${club.slug}`);
    assert.ok(markdown);
    assert.ok(markdown.includes(club.name));
    assert.ok(markdown.includes(club.dressCode));
    assert.ok(markdown.includes(club.tableMinimum));
    assert.ok(markdown.includes(club.closingTime));
    assert.ok(markdown.includes('## How to book'));
  });

  test('a blog document carries its FAQ answers', () => {
    const post = blogPosts.find((entry) => entry.faqs?.length);
    assert.ok(post);
    const markdown = markdownForPath(`/blog/${post.slug}`);
    assert.ok(markdown);
    assert.ok(markdown.includes(post.faqs![0].question));
    assert.ok(markdown.includes(post.faqs![0].answer));
  });

  test('returns null for unknown paths', () => {
    assert.equal(markdownForPath('/nope'), null);
    assert.equal(markdownForPath('/clubs/not-a-club'), null);
    assert.equal(markdownForPath('/blog/not-a-post'), null);
  });

  test('tolerates a trailing slash', () => {
    assert.ok(markdownForPath('/clubs/'));
    assert.equal(normalisePath('/clubs/'), '/clubs');
    assert.equal(normalisePath('/'), '/');
    assert.equal(normalisePath(''), '/');
  });
});

describe('notFoundMarkdown', () => {
  const body = notFoundMarkdown('/does-not-exist');

  test('is markdown with an H1', () => {
    assert.ok(body.startsWith('# 404'));
  });

  test('names the path that was missed', () => {
    assert.ok(body.includes('/does-not-exist'));
  });

  test('points at the recovery entry points', () => {
    for (const target of ['/sitemap.xml', '/llms.txt', '/clubs', '/contact']) {
      assert.ok(body.includes(target), `404 body should link ${target}`);
    }
  });

  test('works without a path', () => {
    assert.ok(notFoundMarkdown().startsWith('# 404'));
  });
});

describe('llms.txt', () => {
  const body = llmsTxt();
  const lines = body.split('\n');

  test('starts with a single H1 title', () => {
    assert.equal(lines[0], '# London Clubs Tonight');
    assert.equal(lines.filter((line) => line.startsWith('# ')).length, 1);
  });

  test('has a blockquote summary directly after the title', () => {
    assert.ok(lines[2].startsWith('> '));
    assert.ok(lines[2].length > 80, 'summary should be substantive');
  });

  test('includes the when-to-use guidance section', () => {
    assert.ok(body.includes('## When to use this site'));
    assert.ok(body.includes('## How an agent should call this site'));
  });

  test('when-to-use names concrete jobs rather than marketing copy', () => {
    const section = body
      .split('## When to use this site')[1]
      .split('## How an agent')[0];
    assert.ok(section.includes('open tonight'));
    assert.ok(section.includes('guestlist'));
    assert.ok(section.includes('table'));
    // States what it is NOT for, which is what makes the guidance actionable.
    assert.ok(section.includes('not** a good source'));
  });

  test('documents the markdown negotiation contract', () => {
    assert.ok(body.includes('Accept: text/markdown'));
    assert.ok(body.includes('Vary: Accept'));
  });

  test('links every club and article with absolute URLs', () => {
    for (const club of clubs) {
      assert.ok(
        body.includes(`${SITE_URL}/clubs/${club.slug}`),
        `llms.txt missing ${club.slug}`
      );
    }
    for (const post of blogPosts) {
      assert.ok(
        body.includes(`${SITE_URL}/blog/${post.slug}`),
        `llms.txt missing ${post.slug}`
      );
    }
  });

  test('uses H2 sections with markdown link lists', () => {
    const sections = lines.filter((line) => line.startsWith('## '));
    assert.ok(sections.length >= 6, 'expected several H2 sections');
    assert.ok(sections.includes('## Optional'));
  });

  test('contains no relative links', () => {
    const relative = body.match(/\]\((?!https?:\/\/)[^)]+\)/g) ?? [];
    assert.deepEqual(relative, []);
  });
});
