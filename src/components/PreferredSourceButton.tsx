"use client";

import { useCallback, useEffect, useRef } from "react";

// "Add to Preferred Sources" Google button. Users who add the site see it
// prioritised and badged in Google Top Stories, Discover, AI Overviews and AI Mode.
// Docs: https://developers.google.com/search/docs/appearance/preferred-sources
//
// The link is a plain deeplink to Google's source-preferences tool, so it works
// with no JavaScript. Google's publisher library is loaded with manual control
// only after a deliberate interaction (never on passive scroll); once loaded, a
// click opens Google's one-tap add dialog in place instead of navigating away.

// SITE_DOMAIN: this site's bare domain, no www, no path (only domain-level sites are eligible).
const SITE_DOMAIN = "londonclubstonight.com";
// "light" or "dark": the theme of Google's dialog. Match the site.
const GOOGLE_DIALOG_THEME: "light" | "dark" = "dark";

const DEEPLINK = `https://www.google.com/preferences/source?q=${SITE_DOMAIN}`;
const SCRIPT_SRC = "https://news.google.com/swg/js/v1/publisher.js";
// One shared click counter for every site: londonnightguide.com records the
// click against this site, which it takes from the request's Origin header.
const TRACK_URL = "https://londonnightguide.com/api/preferred-source/";

export type PreferredSourcePlacement = "header" | "menu" | "footer" | "article" | "thankyou";

interface PreferredSourceApi {
  init: (config: { theme?: "light" | "dark"; lang?: string }) => void;
  addPreferredSource: () => void;
}

declare global {
  interface Window {
    PREFERRED_SOURCE?: Array<(api: PreferredSourceApi) => void>;
  }
}

// Module-level dedupe so multiple buttons share a single load.
let apiPromise: Promise<PreferredSourceApi> | null = null;

function loadPreferredSourceApi(): Promise<PreferredSourceApi> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<PreferredSourceApi>((resolve) => {
    // gtag-style command queue: the library replaces push() on load and drains
    // the array, so pushing before or after the script arrives both work.
    (window.PREFERRED_SOURCE = window.PREFERRED_SOURCE || []).push((api) => {
      api.init({ theme: GOOGLE_DIALOG_THEME });
      resolve(api);
    });
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.setAttribute("preferred-sources-control", "manual");
      s.addEventListener("error", () => {
        apiPromise = null;
      });
      document.head.appendChild(s);
    }
  });
  return apiPromise;
}

// Fire-and-forget. A string body with no headers is a "simple" cross-origin
// request, so there is no preflight and the page never waits on it.
function recordClick(placement: PreferredSourcePlacement, mode: "dialog" | "deeplink") {
  fetch(TRACK_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ placement, mode, path: window.location.pathname }),
    keepalive: true,
  }).catch(() => {});
}

const SIZES: Record<PreferredSourcePlacement, { pill: string; g: string }> = {
  header: { pill: "gap-2 px-3.5 py-1.5 text-[12px]", g: "w-3.5 h-3.5" },
  menu: { pill: "gap-2.5 px-6 py-3 text-sm", g: "w-[18px] h-[18px]" },
  footer: { pill: "gap-2 px-4 py-2 text-[13px]", g: "w-4 h-4" },
  article: { pill: "gap-2.5 px-5 py-2.5 text-sm", g: "w-[18px] h-[18px]" },
  thankyou: { pill: "gap-2.5 px-5 py-2.5 text-sm", g: "w-[18px] h-[18px]" },
};

function GoogleG({ className }: { className: string }) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function PreferredSourceButton({
  placement,
  warmOnMount = false,
}: {
  placement: PreferredSourcePlacement;
  // Only for buttons that appear as the direct result of a deliberate action
  // (a form confirmation), where mounting is itself the interaction.
  warmOnMount?: boolean;
}) {
  const apiRef = useRef<PreferredSourceApi | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const warm = useCallback(() => {
    loadPreferredSourceApi().then((api) => {
      apiRef.current = api;
    });
  }, []);

  useEffect(() => {
    if (warmOnMount) warm();
  }, [warmOnMount, warm]);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;
    const container = el.closest("header, footer") || el.parentElement;
    const trigger = () => warm();
    // Hovering or focusing the button warms the library ahead of the click;
    // on touch, any earlier tap in the surrounding header/footer does.
    el.addEventListener("pointerenter", trigger, { once: true, passive: true });
    el.addEventListener("focusin", trigger, { once: true, passive: true });
    container?.addEventListener("pointerup", trigger, { once: true, passive: true });
    return () => {
      el.removeEventListener("pointerenter", trigger);
      el.removeEventListener("focusin", trigger);
      container?.removeEventListener("pointerup", trigger);
    };
  }, [warm]);

  const size = SIZES[placement];
  return (
    <a
      ref={linkRef}
      href={DEEPLINK}
      target="_blank"
      rel="noopener noreferrer"
      title="See more of us in Google Search, Discover and AI Mode"
      aria-label="Add this site as a preferred source on Google"
      onClick={(e) => {
        const api = apiRef.current;
        recordClick(placement, api ? "dialog" : "deeplink");
        if (!api) return;
        e.preventDefault();
        api.addPreferredSource();
      }}
      className={`preferred-source-btn inline-flex items-center font-medium whitespace-nowrap ${size.pill}`}
    >
      <GoogleG className={size.g} />
      <span>Add to Preferred Sources</span>
    </a>
  );
}

// End-of-article card for blog posts.
export function ArticlePreferredSourcePrompt() {
  return (
    <div className="glass-card mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6">
      <div>
        <p className="font-display font-bold tracking-tight text-white">Enjoyed this guide?</p>
        <p className="text-frost-300 text-sm mt-1.5 leading-relaxed">
          Add London Clubs Tonight as a preferred source to see our guides first in Google Search,
          Discover and AI Mode.
        </p>
      </div>
      <div className="shrink-0">
        <PreferredSourceButton placement="article" />
      </div>
    </div>
  );
}
