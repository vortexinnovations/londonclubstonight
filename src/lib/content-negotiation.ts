/**
 * HTTP content negotiation for the Accept header (RFC 9110 §12.5.1).
 *
 * Used to serve `text/markdown` representations of pages to agents while
 * continuing to serve `text/html` to browsers. See https://acceptmarkdown.com.
 */

export const MARKDOWN_TYPE = 'text/markdown';
export const HTML_TYPE = 'text/html';

export interface MediaRange {
  type: string;
  subtype: string;
  q: number;
}

/**
 * Parse an Accept header into media ranges. Malformed entries are skipped
 * rather than throwing, so a bad header degrades to "no preference".
 */
export function parseAccept(header: string | null | undefined): MediaRange[] {
  if (!header) return [];

  const ranges: MediaRange[] = [];

  for (const part of header.split(',')) {
    const segments = part.trim().split(';');
    const mediaType = segments[0]?.trim().toLowerCase();
    if (!mediaType || !mediaType.includes('/')) continue;

    const [type, subtype] = mediaType.split('/', 2);
    if (!type || !subtype) continue;

    let q = 1;
    for (const param of segments.slice(1)) {
      const [rawKey, rawValue] = param.split('=', 2);
      if (rawKey?.trim().toLowerCase() !== 'q') continue;

      const parsed = Number.parseFloat(rawValue ?? '');
      // An unparseable or out-of-range q is treated as the default (1),
      // matching how RFC 9110 recipients tolerate invalid parameters.
      if (Number.isFinite(parsed) && parsed >= 0 && parsed <= 1) q = parsed;
    }

    ranges.push({ type, subtype, q });
  }

  return ranges;
}

/**
 * Quality value the client assigned to a concrete media type.
 *
 * The most specific matching range wins (`text/markdown` beats `text/*`
 * beats `*​/*`), regardless of q, per RFC 9110's precedence rules.
 */
export function qualityFor(ranges: MediaRange[], mediaType: string): number {
  const [type, subtype] = mediaType.toLowerCase().split('/', 2);

  let bestSpecificity = -1;
  let bestQ = 0;

  for (const range of ranges) {
    let specificity: number;

    if (range.type === type && range.subtype === subtype) specificity = 2;
    else if (range.type === type && range.subtype === '*') specificity = 1;
    else if (range.type === '*' && range.subtype === '*') specificity = 0;
    else continue;

    if (specificity > bestSpecificity || (specificity === bestSpecificity && range.q > bestQ)) {
      bestSpecificity = specificity;
      bestQ = range.q;
    }
  }

  return bestSpecificity === -1 ? 0 : bestQ;
}

export interface NegotiationResult {
  /** Serve the markdown representation of the resource. */
  markdown: boolean;
  /** No representation we can produce is acceptable — respond 406. */
  notAcceptable: boolean;
}

/**
 * Decide which representation to serve.
 *
 * - Markdown wins only when the client ranks it strictly above HTML, so the
 *   `*​/*` sent by browsers and plain `curl` keeps returning HTML.
 * - A client that accepts neither HTML nor Markdown gets 406.
 */
export function negotiate(acceptHeader: string | null | undefined): NegotiationResult {
  const ranges = parseAccept(acceptHeader);

  // No Accept header at all means "anything is acceptable" (RFC 9110 §12.5.1).
  if (ranges.length === 0) return { markdown: false, notAcceptable: false };

  const markdownQ = qualityFor(ranges, MARKDOWN_TYPE);
  const htmlQ = qualityFor(ranges, HTML_TYPE);

  if (markdownQ === 0 && htmlQ === 0) {
    return { markdown: false, notAcceptable: true };
  }

  return { markdown: markdownQ > htmlQ, notAcceptable: false };
}
