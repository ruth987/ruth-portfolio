import type { Site } from "./types";

/**
 * ALL site copy and links. Edit text here; components only render it.
 * Source of truth: the resume. Unknowns start with "TODO".
 */
export const site: Site = {
  siteUrl: "TODO: set production domain",
  name: "Ruth Wossen Bekele",
  role: "Software Engineer",
  location: "Luxembourg",

  openToWork: false,
  openToWorkLabel: "Open to SWE roles in Luxembourg",

  photo: undefined,

  seo: {
    title: "Ruth Wossen Bekele — Software Engineer, Luxembourg",
    description:
      "Software engineer building reliable, event-driven systems on AWS. I modernize legacy systems without the downtime.",
  },

  nav: [
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "teaching", label: "Teaching" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    headline: "Software engineer building reliable, event-driven systems on AWS.",
    subline: "I modernize legacy systems without the downtime.",
    currently: "Currently a software engineer at Amazon in Luxembourg.",
    cta: {
      // TODO: replace the PDF with the version without a phone number.
      cv: { label: "Download CV", href: "/Ruth_Wossen_Bekele_CV.pdf" },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ruth-wossen-bekele",
        external: true,
      },
      github: { label: "GitHub", href: "https://github.com/ruth987", external: true },
      email: { label: "Email", href: "mailto:ruthwossenbekele@gmail.com" },
    },
  },

  // Filled in during stage 3, one section at a time.
  // Amazon: resume-level detail only. No internal names, capacity numbers or diagrams.
  selectedWork: [
    {
      id: "batch-to-event-driven",
      title: "Replacing a 9-year-old batch system with zero downtime",
      org: "Amazon",
      period: { start: "2026-02", end: "2026-10" },
      context: "Technical lead",
      problem:
        "A daily batch job meant up to 24 hours of delay, causing stuck orders and missed delivery promises. Midway through the redesign, the senior engineers left.",
      did: [
        "Took over technical leadership of the redesign as the most junior engineer on the team.",
        "Redesigned it as a near-real-time, event-driven Java service on AWS (ECS Fargate, Lambda, Step Functions, SQS).",
        "Added dead-letter queues so no order is silently lost, and concurrency throttling to protect a rate-limited downstream service.",
        "Authored the low-level design for an EU compliance (EUDR) pipeline.",
      ],
      result: [
        "Migrated 100% of traffic with zero downtime, using shadow testing and a staged rollout.",
        "Decommissioned the legacy system.",
      ],
      tags: ["Java", "ECS Fargate", "AWS Lambda", "Step Functions", "SQS", "Event-driven architecture"],
    },
    {
      id: "inventory-ringfencing",
      title: "Fairer inventory for emerging EU markets",
      org: "Amazon",
      period: { start: "2026-04", end: "2026-04" },
      highlight: "Hackathon · 1st place",
      problem:
        "An all-or-nothing rule let larger markets consume stock meant for smaller, emerging markets.",
      did: [
        "Partnered with business teams to design automated ringfencing that reserves a configurable share of inventory per country.",
      ],
      result: [
        "The pilot raised the 1-day delivery rate by 13.3 percentage points and cut manual effort by 80%.",
        "Won 1st place and was adopted into the team roadmap, expanding the team's scope to third-party inventory.",
      ],
      tags: ["Inventory allocation", "EU marketplaces", "Business partnership"],
    },
    {
      id: "ai-bug-analyzer",
      title: "AI Bug Analyzer",
      org: "Amazon",
      period: { start: "2026-05", end: "2026-07" },
      problem: "TODO: one sentence on the problem this solved",
      did: [
        "Built an AI agent that traces bugs to their root cause and opens code reviews with fixes and tests.",
        "Started it as a personal prototype.",
      ],
      result: ["Adopted by the team after a demo: 6 code reviews opened, 4 merged."],
      tags: ["Python", "Amazon Bedrock", "AWS Lambda", "AI agents"],
    },
  ],
  experience: [],
  education: [],
  projects: [],
  teaching: { items: [] },
  about: [],

  contact: {
    blurb: "TODO: contact blurb (stage 3f)",
    email: "ruthwossenbekele@gmail.com",
    links: [],
  },

  footer: {
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ruth-wossen-bekele", external: true },
      { label: "GitHub", href: "https://github.com/ruth987", external: true },
      { label: "LeetCode", href: "https://leetcode.com/u/akrav_ruth", external: true },
    ],
    note: "Built with Next.js and Tailwind CSS.",
  },
};
