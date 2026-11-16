import { site } from "@/content/site";
import { isLive } from "./content";
import { getSiteUrl } from "./url";

/** schema.org Person. No phone number, no email (avoids scraping). */
export function personJsonLd() {
  const sameAs = [site.hero.cta.linkedin, site.hero.cta.github, ...site.footer.links]
    .filter(isLive)
    .map((l) => l.href)
    .filter((href, i, all) => /^https?:/.test(href) && all.indexOf(href) === i);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.seo.description,
    url: getSiteUrl().href,
    address: { "@type": "PostalAddress", addressCountry: "LU", addressLocality: site.location },
    worksFor: { "@type": "Organization", name: "Amazon" },
    alumniOf: site.education.map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
    sameAs,
  };
}

/** Serialize for a <script type="application/ld+json">, escaping "<" (per Next.js guidance). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
