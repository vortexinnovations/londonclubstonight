import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { fitTitle } from '../../src/lib/metadata.ts';
import { clubs } from '../../src/lib/clubs.ts';

describe('fitTitle', () => {
  test('keeps the site name when the full title fits in 60 characters', () => {
    // 38 + " | London Clubs Tonight" (23) = 61; 37 + 23 = 60.
    assert.equal(fitTitle('a'.repeat(37)), 'a'.repeat(37));
    assert.deepEqual(fitTitle('a'.repeat(38)), { absolute: 'a'.repeat(38) });
  });

  test('drops the site name rather than letting Google cut the title off', () => {
    const body = 'Best Clubs in Central London 2026: Mayfair, Soho, St James\'s';
    assert.deepEqual(fitTitle(body), { absolute: body });
  });
});

describe('club search snippets', () => {
  test('override titles fit in 60 characters and descriptions in 120 to 155', () => {
    for (const club of clubs) {
      if (club.metaTitle) assert.ok(club.metaTitle.length <= 60, `${club.slug} metaTitle`);
      if (club.metaDescription) {
        const n = club.metaDescription.length;
        assert.ok(n >= 120 && n <= 155, `${club.slug} metaDescription is ${n}`);
      }
    }
  });
});
