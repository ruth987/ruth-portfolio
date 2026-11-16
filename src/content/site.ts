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
  experience: [
    {
      org: "Amazon",
      title: "Software Engineer",
      location: "Luxembourg",
      periods: [{ start: "2025-09", end: "Present" }],
      summary: "Building event-driven services on AWS.",
      bullets: [
        "Led the redesign of a 9-year-old batch system into a near-real-time, event-driven service, migrated with zero downtime.",
        "Won 1st place in a hackathon with automated inventory ringfencing for emerging EU markets.",
        "Built an AI agent for bug analysis that the team adopted.",
      ],
      seeAlso: { label: "Details in Selected work", href: "#work" },
    },
    {
      org: "Eskalate",
      title: "Software Engineering Intern",
      location: "Remote",
      periods: [
        { start: "2023-07", end: "2023-10" },
        { start: "2024-07", end: "2024-10" },
      ],
      bullets: [
        "Developed a job application tracking platform used by 250+ students and 400+ members (Next.js, MUI, Zustand); application success rates rose by 20%.",
        "Contributed features to the company's web app in a team of 8 (React, Redux, TypeScript) and wrote Cypress and Jest tests.",
      ],
    },
    {
      org: "A2SV (Africa to Silicon Valley)",
      title: "Head of Education, DSA & Software Engineering Trainer",
      location: "Addis Ababa, Ethiopia",
      periods: [{ start: "2023-10", end: "2024-10" }],
      bullets: [
        "Led data structures and algorithms training for 33 students preparing for big-tech interviews: curriculum, coding challenges and mock interviews.",
        "Taught 30 students Flutter/Dart with a focus on clean architecture and testing.",
        "Automated student progress tracking with Google Apps Script, cutting a weekly 5+ hour task to minutes.",
      ],
      seeAlso: { label: "More in Teaching & community", href: "#teaching" },
    },
  ],

  education: [
    {
      school: "Addis Ababa Science and Technology University",
      credential: "B.Sc. Software Engineering",
      location: "Addis Ababa, Ethiopia",
      period: { start: "2021-06", end: "2025-06" },
      notes: ["GPA 3.68 / 4.0"],
    },
    {
      school: "A2SV (Africa to Silicon Valley, backed by Google)",
      credential: "Coding Academy",
      location: "Addis Ababa, Ethiopia",
      period: { start: "2022-11", end: "2023-11" },
      notes: [
        "Intensive 30+ hours/week program in advanced data structures and algorithms; solved 900+ problems on Codeforces and LeetCode.",
        "Competed in the 2023 ICPC Ethiopian Collegiate Programming Contest.",
        "Ranked in the top 10% of the cohort and selected as Head of Education.",
      ],
    },
  ],
  // Add a project by adding an object to this array.
  projects: [
    {
      name: "Semantic File Explorer",
      period: { start: "2024-12", end: "2025-05" },
      stack: ["Rust", "Tauri", "React", "TypeScript", "LanceDB", "ONNX", "Tantivy"],
      team: "Team of 5",
      description:
        "A local-first desktop app that finds files by meaning from natural-language queries across PDFs, text files and 5 image formats, fully offline.",
      myPart: "I built the Rust indexing pipeline.",
      bullets: [
        "Watches folders in real time, chunks documents and generates multilingual text and image embeddings in LanceDB, alongside a Tantivy index for fuzzy filename search.",
        "Kept indexing and search fast on ordinary laptops with async batching and INT8-quantized ONNX models (~4× smaller).",
        "Covered the backend with 50 unit and integration tests.",
      ],
      links: [{ label: "Source on GitHub", href: "TODO: Semantic File Explorer repo URL", external: true }],
    },
  ],
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
