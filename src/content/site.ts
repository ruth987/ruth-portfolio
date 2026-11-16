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
  selectedWork: [],
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
