import type { MetadataRoute } from 'next';
import { clubs } from '@/lib/clubs';
import { blogPosts } from '@/lib/blog';
import { SITE_URL, staticRoutes } from '@/lib/site-routes';

export default function sitemap(): MetadataRoute.Sitemap {
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
