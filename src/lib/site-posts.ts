import https from "https";
import { unstable_cache } from "next/cache";
import { cache } from "react";

// Posts published through the dashboard's content API live in the shared
// Supabase table `site_posts`. This module reads them; lib/blog merges them
// with the site's own (file/code) posts, a database row superseding the file
// post with the same slug at the same URL.
//
// Design (each alternative was tested on another site and failed):
// - node:https, NOT fetch(): Next's fetch data cache served metadata and body
//   from different snapshots (a post got the homepage canonical).
// - Pages read getDbPosts() at build and ISR regeneration only, never on a
//   visitor's request; /api/revalidate marks them stale-while-revalidate.
// - Route handlers (sitemap, llms.txt, markdown routes) are never refreshed on
//   Vercel when prerendered, so they render per request from the cached reads
//   below (tag "site-posts", marked stale by /api/revalidate on every publish).
// - Errors are thrown, never swallowed: a failed regeneration keeps the last
//   good page; a failed build keeps the previous deployment.

const SITE_KEY = "vortexinnovations/londonclubstonight";
const DB_TIMEOUT_MS = 10_000;
export const SITE_POSTS_TAG = "site-posts";

export type DbFaq = { question: string; answer: string };

export type DbPost = {
  slug: string;
  title: string;
  excerpt: string;
  bodyMd: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  category: string;
  faqs: DbFaq[];
  publishDate: string;
  dateModified: string;
};

type Row = {
  slug: string;
  title: string;
  excerpt: string | null;
  body_md?: string;
  meta_title: string | null;
  meta_description: string | null;
  image: string | null;
  image_alt: string | null;
  category: string | null;
  faqs: DbFaq[] | null;
  publish_date: string;
  date_modified: string;
};

const LIST_COLUMNS = "slug,title,excerpt,meta_title,meta_description,image,image_alt,category,faqs,publish_date,date_modified";

function getJson<T>(url: string, headers: Record<string, string>): Promise<T> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers, timeout: DB_TIMEOUT_MS }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`site_posts read failed: HTTP ${res.statusCode}`));
          return;
        }
        try {
          resolve(JSON.parse(body) as T);
        } catch (err) {
          reject(err);
        }
      });
    });
    req.on("timeout", () => req.destroy(new Error("site_posts read timed out")));
    req.on("error", reject);
  });
}

async function readRows(columns: string, slug?: string): Promise<Row[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("site_posts: NEXT_PUBLIC_SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY not set");
  const filter = slug ? `&slug=eq.${encodeURIComponent(slug)}` : "";
  return getJson<Row[]>(
    `${url}/rest/v1/site_posts?site=eq.${encodeURIComponent(SITE_KEY)}&status=eq.published${filter}&select=${columns}&order=publish_date.desc`,
    { apikey: key, Authorization: `Bearer ${key}` }
  );
}

function toPost(r: Row): DbPost {
  return {
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt || "",
    bodyMd: r.body_md ?? "",
    metaTitle: r.meta_title || r.title,
    metaDescription: r.meta_description || r.excerpt || "",
    image: r.image || "",
    imageAlt: r.image_alt || r.title,
    category: r.category || "",
    faqs: Array.isArray(r.faqs) ? r.faqs : [],
    publishDate: r.publish_date,
    dateModified: r.date_modified,
  };
}

/** Every published database post with its body. Per request (pages: build and ISR only). */
export const getDbPosts = cache(async (): Promise<DbPost[]> => (await readRows(`${LIST_COLUMNS},body_md`)).map(toPost));

/** Database posts without bodies, cached across requests, for route handlers. */
export const getDbListing = unstable_cache(
  async (): Promise<DbPost[]> => (await readRows(LIST_COLUMNS)).map(toPost),
  ["londonclubstonight-db-listing"],
  { tags: [SITE_POSTS_TAG], revalidate: 300 }
);

/** One database post with its body, cached across requests, for route handlers. */
export const getDbPostCached = unstable_cache(
  async (slug: string): Promise<DbPost | null> => {
    const rows = await readRows(`${LIST_COLUMNS},body_md`, slug);
    return rows[0] ? toPost(rows[0]) : null;
  },
  ["londonclubstonight-db-post"],
  { tags: [SITE_POSTS_TAG], revalidate: 300 }
);
