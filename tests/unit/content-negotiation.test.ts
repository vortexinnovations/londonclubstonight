import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  negotiate,
  parseAccept,
  qualityFor,
} from '../../src/lib/content-negotiation.ts';

describe('parseAccept', () => {
  test('parses media ranges with default quality', () => {
    assert.deepEqual(parseAccept('text/html'), [
      { type: 'text', subtype: 'html', q: 1 },
    ]);
  });

  test('parses explicit q-values', () => {
    assert.deepEqual(parseAccept('text/markdown;q=0.9, text/html;q=0.8'), [
      { type: 'text', subtype: 'markdown', q: 0.9 },
      { type: 'text', subtype: 'html', q: 0.8 },
    ]);
  });

  test('ignores non-q parameters and is case-insensitive', () => {
    assert.deepEqual(parseAccept('TEXT/Markdown;variant=GFM;q=0.5'), [
      { type: 'text', subtype: 'markdown', q: 0.5 },
    ]);
  });

  test('skips malformed entries instead of throwing', () => {
    assert.deepEqual(parseAccept('garbage, text/html'), [
      { type: 'text', subtype: 'html', q: 1 },
    ]);
  });

  test('treats an out-of-range q as the default', () => {
    assert.deepEqual(parseAccept('text/html;q=9'), [
      { type: 'text', subtype: 'html', q: 1 },
    ]);
  });

  test('returns an empty list for a missing header', () => {
    assert.deepEqual(parseAccept(null), []);
    assert.deepEqual(parseAccept(''), []);
  });
});

describe('qualityFor', () => {
  test('prefers the most specific matching range over a higher-q wildcard', () => {
    const ranges = parseAccept('*/*;q=1.0, text/markdown;q=0.2');
    assert.equal(qualityFor(ranges, 'text/markdown'), 0.2);
  });

  test('falls back to a subtype wildcard', () => {
    const ranges = parseAccept('text/*;q=0.6');
    assert.equal(qualityFor(ranges, 'text/markdown'), 0.6);
  });

  test('returns 0 when nothing matches', () => {
    const ranges = parseAccept('application/json');
    assert.equal(qualityFor(ranges, 'text/markdown'), 0);
  });
});

describe('negotiate', () => {
  test('serves markdown for an explicit markdown request', () => {
    assert.deepEqual(negotiate('text/markdown'), {
      markdown: true,
      notAcceptable: false,
    });
  });

  test('serves HTML to a browser', () => {
    const browser =
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8';
    assert.deepEqual(negotiate(browser), {
      markdown: false,
      notAcceptable: false,
    });
  });

  test('serves HTML for bare */* so curl and crawlers are unaffected', () => {
    assert.deepEqual(negotiate('*/*'), { markdown: false, notAcceptable: false });
  });

  test('serves HTML when no Accept header is sent', () => {
    assert.deepEqual(negotiate(null), { markdown: false, notAcceptable: false });
  });

  test('honours q-values when markdown outranks html', () => {
    assert.equal(negotiate('text/html;q=0.8, text/markdown;q=0.9').markdown, true);
  });

  test('honours q-values when html outranks markdown', () => {
    assert.equal(negotiate('text/markdown;q=0.5, text/html;q=1.0').markdown, false);
  });

  test('breaks an exact tie in favour of html', () => {
    assert.equal(negotiate('text/html;q=0.9, text/markdown;q=0.9').markdown, false);
  });

  test('markdown via a text/* wildcard does not beat explicit html', () => {
    assert.equal(negotiate('text/*, text/html').markdown, false);
  });

  test('returns 406 when neither representation is acceptable', () => {
    assert.deepEqual(negotiate('application/json'), {
      markdown: false,
      notAcceptable: true,
    });
  });

  test('does not 406 when a wildcard is present', () => {
    assert.equal(negotiate('application/json, */*;q=0.1').notAcceptable, false);
  });

  test('treats an explicitly rejected type as unacceptable', () => {
    assert.deepEqual(negotiate('text/html;q=0, text/markdown;q=0'), {
      markdown: false,
      notAcceptable: true,
    });
  });
});
