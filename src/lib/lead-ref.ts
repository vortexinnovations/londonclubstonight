// Page attribution for WhatsApp enquiries. Every tap on a WhatsApp link puts a
// short ref such as "(ref PG-7K2QX)" at the end of the pre-filled message and
// records, against that ref, the page that was tapped, the page the visit
// started on and the outside site it came from. One shared log for every site:
// londonnightguide.com writes the row (lead_refs in the shared database) and
// takes the site from the request's Origin header. The chat that carries the
// ref can then be tied back to those pages, which is how the SEO strategist
// learns which pages bring enquiries. Nothing about the visitor is stored.

const SITE_DOMAIN = "londonclubstonight.com";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const WHATSAPP_HOSTS = new Set(["api.whatsapp.com", "wa.me", "web.whatsapp.com"]);
const LANDING_KEY = "lead_landing";
const TRACK_URL = "https://londonnightguide.com/api/lead-ref/";

/**
 * A WhatsApp link with "(ref PG-XXXXX)" at the end of its message. A link with
 * no message gets a short one naming the site, so the ref has something to
 * follow and the chat is still tagged with the site it came from. Any other
 * link comes back unchanged.
 */
export function withLeadRef(url: string, ref: string, siteDomain: string): string {
  try {
    const u = new URL(url);
    if (!WHATSAPP_HOSTS.has(u.hostname)) return url;
    const text = (u.searchParams.get("text") ?? "").trimEnd();
    if (/\(ref GA-/i.test(text)) return url;
    const message = text.replace(/\s*\(ref PG-[A-Z0-9]{5}\)$/i, "") || `Hi, I found you on ${siteDomain}`;
    // A message laid out on several lines (a form to fill in) gets the ref on a
    // line of its own, so it does not sit inside the last field.
    u.searchParams.set("text", `${message}${message.includes("\n") ? "\n\n" : " "}(ref ${ref})`);
    // Rebuild with %20 rather than URLSearchParams' "+" for spaces, which not
    // every WhatsApp client decodes back to a space.
    const query = Array.from(u.searchParams, ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
    return `${u.origin}${u.pathname}?${query}${u.hash}`;
  } catch {
    return url;
  }
}

function newLeadRef(): string {
  const bytes = new Uint8Array(5);
  crypto.getRandomValues(bytes);
  return "PG-" + Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
}

interface Landing {
  path: string;
  referrer: string | null;
}

let landing: Landing | null = null;

/**
 * The first page of this visit and the outside site that sent the visitor.
 * Kept for the tab's lifetime only (sessionStorage), and in memory when
 * storage is blocked. Called on every page load; only the first one counts.
 */
export function captureLanding(): Landing {
  if (landing) return landing;
  try {
    const stored = JSON.parse(sessionStorage.getItem(LANDING_KEY) ?? "null") as Landing | null;
    if (stored && typeof stored.path === "string") return (landing = stored);
  } catch {
    // Storage blocked or unreadable: fall through to this page.
  }
  let referrer: string | null = null;
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    if (host && host !== window.location.hostname.replace(/^www\./, "")) referrer = host;
  } catch {
    // No referrer.
  }
  landing = { path: window.location.pathname, referrer };
  try {
    sessionStorage.setItem(LANDING_KEY, JSON.stringify(landing));
  } catch {
    // Storage blocked: the in-memory copy lasts until a full page load.
  }
  return landing;
}

// One ref per page per visit, so repeat taps on a page share a row.
const tapRefs = new Map<string, string>();

/**
 * Adds this page's ref to a WhatsApp link and records the tap. Safe to call
 * with any URL: only WhatsApp links change. Browser only.
 */
export function tagWhatsAppUrl(url: string): string {
  if (typeof window === "undefined") return url;
  const path = window.location.pathname;
  const known = tapRefs.get(path);
  const ref = known ?? newLeadRef();
  const next = withLeadRef(url, ref, SITE_DOMAIN);
  if (next === url) return url;
  if (!known) {
    tapRefs.set(path, ref);
    const from = captureLanding();
    // A string body with no headers is a "simple" cross-origin request, so
    // there is no preflight and the page never waits on it.
    fetch(TRACK_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ ref, tap_path: path, landing_path: from.path, referrer: from.referrer }),
      keepalive: true,
    }).catch(() => {});
  }
  return next;
}
