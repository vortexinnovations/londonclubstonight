import { timingSafeEqual } from "crypto";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by the dashboard's content API after it writes to site_posts. Marks
// every page that shows posts as stale, so a new or edited post goes live with
// no redeploy. Same design as the other content-API sites, where each
// alternative was tested and failed:
// - revalidatePath() / revalidateTag(tag, { expire: 0 }) HARD-expire pages; if
//   Supabase is unreachable at that moment every listing page and post 500s.
// - "max" on a fetch() data tag made the DATA stale-while-revalidate, so
//   metadata and body could disagree (a post was cached with the homepage
//   canonical).
// So post data is read outside fetch() (lib/site-posts.ts) and the PAGES are
// made stale-while-revalidate here, via Next's implicit route tags (the tags
// revalidatePath() itself emits, visible in each prerendered page's .meta
// file). Route handlers (sitemap and the like) render per request from a
// cached post list, marked stale here through its data tag.
const IMPLICIT_TAG_PREFIX = "_N_T_";
const ROUTE_TAGS = [
  "/blog/[slug]/page",
  "/blog/page",
].map((route) => IMPLICIT_TAG_PREFIX + route);
const DATA_TAGS = ["site-posts"]; // lib/site-posts.ts

function authorised(request: NextRequest): boolean {
  const expected = process.env.CONTENT_REVALIDATE_SECRET;
  const given = request.headers.get("x-revalidate-secret");
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }
  const tags = [...ROUTE_TAGS, ...DATA_TAGS];
  for (const tag of tags) revalidateTag(tag, "max");
  return NextResponse.json({ ok: true, profile: "max", tags });
}
