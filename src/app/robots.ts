import type { MetadataRoute } from "next";
import { allowIndexing, getSiteUrl } from "@/lib/site";

/**
 * Previews must not be indexed. Indexing is opt-in via
 * NEXT_PUBLIC_ALLOW_INDEXING=true on the deployment that should be public.
 */
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
