interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}

// The JSON-LD builders live in @/lib/schema (plain data, no JSX runtime).
// Re-exported here so existing `from '@/components/SchemaMarkup'` imports keep working.
export {
  EDITOR_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
  getArticleSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getItemListSchema,
  getLocalBusinessSchema,
  getNightClubSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/schema';
