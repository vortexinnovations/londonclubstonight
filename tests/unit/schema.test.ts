import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import * as schema from '../../src/lib/schema.ts';
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  getArticleSchema,
  getClubPageSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from '../../src/lib/schema.ts';
import {
  WHATSAPP_TABLE_NUMBER,
} from '../../src/lib/clubs.ts';

describe('entity graph', () => {
  const organization = getOrganizationSchema() as Record<string, unknown>;
  const website = getWebSiteSchema() as Record<string, unknown>;

  test('each node carries a stable @id', () => {
    assert.equal(organization['@id'], ORGANIZATION_ID);
    assert.equal(website['@id'], WEBSITE_ID);
  });

  test('the website is published by the organization node', () => {
    assert.deepEqual(website.publisher, { '@id': ORGANIZATION_ID });
  });

  test('the site is an Organization with no physical address and no opening hours', () => {
    assert.equal(organization['@type'], 'Organization');
    assert.equal(organization.address, undefined);
    assert.equal(organization.openingHoursSpecification, undefined);
    assert.equal('getLocalBusinessSchema' in schema, false);
  });

  test('no FAQPage builder is left to reach a page', () => {
    assert.equal('getFAQSchema' in schema, false);
  });

  test('the organization names no individual editor', () => {
    assert.equal(organization.employee, undefined);
  });

  test('the brand declares an alternateName for entity matching', () => {
    assert.equal(organization.alternateName, 'LondonClubsTonight');
    assert.equal(website.alternateName, 'LondonClubsTonight');
  });

  test('the organization has a logo for knowledge-panel attribution', () => {
    const logo = organization.logo as Record<string, unknown>;
    assert.equal(logo['@type'], 'ImageObject');
    assert.match(String(logo.url), /^https:\/\/londonclubstonight\.com\//);
  });

  test('sameAs does not point at other sites of the owner', () => {
    const sameAs = (organization.sameAs ?? []) as string[];
    for (const url of sameAs) assert.doesNotMatch(url, /mayfairtonight|londonbottleservice|londonbirthdayclub|londonluxurynightlife/);
  });

  test('NAP phone is consistent with the configured booking number', () => {
    const contact = organization.contactPoint as Record<string, unknown>;
    assert.equal(contact.telephone, `+${WHATSAPP_TABLE_NUMBER}`);
    assert.equal(organization.telephone, `+${WHATSAPP_TABLE_NUMBER}`);
  });

  test('the site language is declared', () => {
    assert.equal(website.inLanguage, 'en-GB');
  });
});

describe('article markup', () => {
  const article = getArticleSchema('T', 'D', '/x', '2026-03-25', '2026-10-21', '/gallery/images/a.jpg') as Record<string, unknown>;

  test('credits the team by name, not a bare @id', () => {
    assert.deepEqual(article.author, { '@type': 'Organization', name: 'London Clubs Tonight', url: 'https://londonclubstonight.com/about' });
    assert.deepEqual(article.publisher, { '@id': ORGANIZATION_ID });
  });

  test('carries the dates it is given, never the current date', () => {
    assert.equal(article.datePublished, '2026-03-25');
    assert.equal(article.dateModified, '2026-10-21');
  });

  test('makes a site image absolute', () => {
    assert.equal(article.image, 'https://londonclubstonight.com/gallery/images/a.jpg');
  });
});

describe('club page markup', () => {
  const page = getClubPageSchema('Club', 'A club.', '1 Street, London W1', '/clubs/club', {
    hours: [
      { days: ['Friday', 'Saturday'], opens: '23:00', closes: '03:00' },
      { days: ['Thursday'], opens: '23:00' },
    ],
  }) as Record<string, unknown>;
  const club = page.about as Record<string, unknown>;

  test('our page is the WebPage; the club is what it is about', () => {
    assert.equal(page['@type'], 'WebPage');
    assert.equal(page.url, 'https://londonclubstonight.com/clubs/club');
    assert.equal(club['@type'], 'NightClub');
  });

  test('never gives our page as the club’s url or @id', () => {
    assert.equal(club.url, undefined);
    assert.equal(club['@id'], undefined);
  });

  test('marks up only the nights with a published closing time', () => {
    const specs = club.openingHoursSpecification as Record<string, unknown>[];
    assert.equal(specs.length, 1);
    assert.equal(specs[0].closes, '03:00');
  });

  test('leaves out opening hours entirely when no night has a closing time', () => {
    const noClose = getClubPageSchema('Club', 'A club.', '1 Street', '/clubs/club', {
      hours: [{ days: ['Friday'], opens: '22:00' }],
    }) as Record<string, unknown>;
    const node = noClose.about as Record<string, unknown>;
    assert.equal(node.openingHoursSpecification, undefined);
    assert.equal(node.openingHours, undefined);
  });
});
