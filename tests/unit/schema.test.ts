import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  EDITOR_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from '../../src/lib/schema.ts';
import {
  WHATSAPP_TABLE_NUMBER,
} from '../../src/lib/clubs.ts';

describe('entity graph', () => {
  const organization = getOrganizationSchema() as Record<string, unknown>;
  const website = getWebSiteSchema() as Record<string, unknown>;
  const business = getLocalBusinessSchema() as Record<string, unknown>;

  test('each node carries a stable @id', () => {
    assert.equal(organization['@id'], ORGANIZATION_ID);
    assert.equal(website['@id'], WEBSITE_ID);
    assert.ok(business['@id']);
  });

  test('the website is published by the organization node', () => {
    assert.deepEqual(website.publisher, { '@id': ORGANIZATION_ID });
  });

  test('the local business points at the organization node', () => {
    assert.deepEqual(business.parentOrganization, { '@id': ORGANIZATION_ID });
  });

  test('the organization links the named editor', () => {
    assert.deepEqual(organization.employee, { '@id': EDITOR_ID });
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

  test('sameAs lists the sister properties', () => {
    const sameAs = organization.sameAs as string[];
    assert.ok(sameAs.length >= 4);
    for (const url of sameAs) assert.match(url, /^https:\/\//);
  });

  test('NAP phone is consistent with the configured booking number', () => {
    const contact = organization.contactPoint as Record<string, unknown>;
    assert.equal(contact.telephone, `+${WHATSAPP_TABLE_NUMBER}`);

    const businessContact = business.contactPoint as Record<string, unknown>;
    assert.equal(businessContact.telephone, `+${WHATSAPP_TABLE_NUMBER}`);
    assert.equal(business.telephone, `+${WHATSAPP_TABLE_NUMBER}`);
  });

  test('the site language is declared', () => {
    assert.equal(website.inLanguage, 'en-GB');
  });
});
