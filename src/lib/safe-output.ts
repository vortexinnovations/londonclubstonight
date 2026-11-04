import type { MarkedExtension } from "marked";

/**
 * JSON for a <script type="application/ld+json"> tag. "<" is written as <
 * so no value can close the tag early; it parses to exactly the same JSON.
 */
export function safeJsonLd(data: unknown): string {
  return (JSON.stringify(data) ?? "").replace(/</g, "\\u003c");
}

const SAFE_SCHEMES = new Set(["http", "https", "mailto", "tel"]);
const fromCode = (n: number) => (n <= 0x10ffff ? String.fromCodePoint(n) : "");

/**
 * True for relative links and the schemes above. Browsers decode entities and
 * drop control characters before reading a scheme, so this does the same.
 */
export function isSafeHref(href: string): boolean {
  const decoded = href
    .replace(/&#x([0-9a-f]+);?/gi, (_, hex) => fromCode(parseInt(hex, 16)))
    .replace(/&#(\d+);?/g, (_, dec) => fromCode(parseInt(dec, 10)))
    .replace(/[\u0000- \u007f-\u009f]/g, "");
  const head = decoded.split(/[/?#]/, 1)[0];
  if (head.includes("&")) return false;
  const colon = head.indexOf(":");
  return colon < 0 || SAFE_SCHEMES.has(head.slice(0, colon).toLowerCase());
}

/**
 * marked extension: a link with any other scheme renders as its plain text.
 * Returning false hands every other link to marked's own renderer, unchanged.
 */
export const safeLinks: MarkedExtension = {
  renderer: {
    link(token) {
      return isSafeHref(token.href) ? false : this.parser.parseInline(token.tokens);
    },
  },
};

const escapeHtml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** marked extension: raw HTML in Markdown is shown as text, not rendered. */
export const escapedHtml: MarkedExtension = {
  renderer: { html: ({ text }) => escapeHtml(text) },
};
