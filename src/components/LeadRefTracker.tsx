"use client";

import { useEffect } from "react";
import { captureLanding, tagWhatsAppUrl } from "@/lib/lead-ref";

// Adds the page ref to WhatsApp links at click time, so every link on the site
// (server-rendered, generated content HTML, widgets) is covered without each
// one knowing about it. See lib/lead-ref.ts.
export default function LeadRefTracker() {
  useEffect(() => {
    captureLanding();

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const next = tagWhatsAppUrl(link.href);
      if (next !== link.href) link.href = next;
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("auxclick", onClick, true);
    };
  }, []);

  return null;
}
