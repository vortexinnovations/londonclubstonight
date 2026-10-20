import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { fitTitle } from '../../src/lib/metadata.ts';

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

