import { site } from "@/content/site";
import { isTodo } from "./content";

/**
 * Absolute base URL for metadata, sitemap, robots and JSON-LD.
 * Order: site.siteUrl (once set) → Vercel production URL → localhost.
 */
export function getSiteUrl(): URL {
  if (!isTodo(site.siteUrl)) return new URL(site.siteUrl);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);
  return new URL("http://localhost:3000");
}
