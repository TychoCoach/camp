/**
 * Deployment-level configuration. Everything reads from env with safe
 * defaults, so the project builds with no `.env` file at all.
 */

function stripTrailingSlash(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

/**
 * Canonical origin.
 *
 * Priority: explicit env → Vercel-provided preview URL → localhost. On a
 * preview deployment this resolves to the generated *.vercel.app host, which
 * is exactly what we want while there is no production domain.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return stripTrailingSlash(explicit);

  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL;
  if (vercel) return stripTrailingSlash(`https://${vercel}`);

  return "http://localhost:3000";
}

/**
 * Indexing is opt-in. Previews stay out of search results until the pilot is
 * public and this is explicitly flipped to "true".
 */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "tychocoach@gmail.com";

/**
 * Waitlist endpoint. Unset = no backend connected; the form uses the mailto
 * fallback and never claims a submission was stored.
 */
export const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";
