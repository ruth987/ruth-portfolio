/**
 * Content model for the whole site. All copy lives in `site.ts`.
 *
 * Placeholders: any string starting with "TODO" marks something unknown.
 * Find them with `grep -rn "TODO" src/content`. Links whose href is a TODO
 * are shown as a marked placeholder in dev and hidden in production.
 */

export type Todo = `TODO${string}`;

export type Link = {
  label: string;
  href: string | Todo;
  /** Opens in a new tab; adds rel="noopener noreferrer" and a hidden hint. */
  external?: boolean;
};

/** Year-month, e.g. "2025-09". */
export type YearMonth = `${number}-${number}`;

export type DateRange = {
  start: YearMonth;
  end: YearMonth | "Present";
};

export type NavItem = {
  /** Matches the section's element id. */
  id: SectionId;
  label: string;
};

export type SectionId =
  | "work"
  | "experience"
  | "projects"
  | "teaching"
  | "about"
  | "contact";

export type CaseStudy = {
  id: string;
  title: string;
  org: string;
  period: DateRange;
  /** One line under the title, e.g. "Amazon · Feb–Oct 2026". */
  context: string;
  problem: string | Todo;
  did: string[];
  result: string[];
  tags: string[];
};

export type Role = {
  org: string;
  title: string;
  location: string;
  periods: DateRange[];
  summary?: string;
  bullets: string[];
};

export type Education = {
  school: string;
  credential: string;
  location: string;
  period: DateRange;
  notes?: string[];
};

export type Project = {
  name: string;
  period: DateRange;
  stack: string[];
  team?: string;
  /** What I personally built — shown first. */
  myPart: string;
  description: string;
  bullets: string[];
  links: Link[];
};

export type TeachingItem = {
  title: string;
  org: string;
  period?: DateRange;
  body: string;
};

export type Site = {
  /** Absolute base URL once the domain is known. */
  siteUrl: string | Todo;
  name: string;
  role: string;
  location: string;
  /** Shows the "Open to SWE roles in Luxembourg" badge in the hero. */
  openToWork: boolean;
  openToWorkLabel: string;
  /** Optional portrait; leave undefined to hide. */
  photo?: { src: string; alt: string };
  seo: { title: string; description: string };
  nav: NavItem[];
  hero: {
    headline: string;
    subline: string;
    cta: { cv: Link; linkedin: Link; github: Link; email: Link };
  };
  selectedWork: CaseStudy[];
  experience: Role[];
  education: Education[];
  projects: Project[];
  teaching: { intro?: string; items: TeachingItem[]; closing?: string };
  about: string[];
  contact: { blurb: string; email: string; links: Link[] };
  footer: { links: Link[]; note: string };
};
