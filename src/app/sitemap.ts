import type { MetadataRoute } from 'next';
import { clubs } from '@/lib/clubs';
import { getListingPosts } from '@/lib/blog';
import { SITE_URL, staticRoutes } from '@/lib/site-routes';

// Rendered per request from the cached post list in lib/blog.ts, which
// /api/revalidate marks stale on every publish. Not prerendered: on Vercel a
// prerendered sitemap is never refreshed, so new posts would wait for a deploy.
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getListingPosts();
  const baseUrl = SITE_URL;

  const clubPages = clubs.map(club => ({
    url: `${baseUrl}/clubs/${club.slug}`,
    lastModified: new Date(),
    changeFrequency: club.status === 'open' ? 'weekly' as const : 'monthly' as const,
    priority: club.status === 'open' ? 0.8 : 0.4,
  }));

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    entries.push({
      url: route.path === '/' ? baseUrl : `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });

    // Detail pages follow their index page, preserving the previous ordering.
    if (route.path === '/clubs') entries.push(...clubPages);
    if (route.path === '/blog') entries.push(...blogPages);
  }

  return entries;
}
