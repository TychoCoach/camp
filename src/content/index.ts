import { nl } from "./nl";
import type { PageContent } from "./types";

export type Locale = "nl";

const dictionaries: Record<Locale, PageContent> = {
  nl,
};

export const defaultLocale: Locale = "nl";

/**
 * Single entry point for page copy.
 *
 * To add English: create `src/content/en.ts` exporting a `PageContent`, widen
 * `Locale` to `"nl" | "en"`, register it above, and route on the locale (e.g.
 * `/en` via a route group). Components already read every string from here.
 */
export function getContent(locale: Locale = defaultLocale): PageContent {
  return dictionaries[locale];
}

export type { PageContent } from "./types";
