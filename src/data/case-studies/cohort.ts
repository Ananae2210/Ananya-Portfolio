import type { CaseStudy, Img } from "./types";

const i = (src: string, alt: string, w: number, h: number): Img => ({ src: `/images/cohort/${src}`, alt, w, h });

export const landing = i("tour-1.webp", "Cohort Builder landing screen with Standard, Custom and Request routes", 1845, 1119);
export const stdCategory = i("tour-2.webp", "Standard Cohort Builder: choose a clinical category", 1845, 1119);
export const stdCohorts = i("tour-3.webp", "Standard Cohort Builder: available diabetes cohorts with criteria", 1845, 1119);
export const stdCustomize = i("tour-4.webp", "Customize your cohort: name, dates and notes", 1845, 1119);
export const stdCohortsColorectal = i("standard-cohorts.webp", "Available colorectal cancer cohorts with inclusion and exclusion criteria side by side", 1600, 1266);
export const customCategory = i("custom-category.webp", "Custom Cohort Builder: select a clinical category", 1600, 971);
export const customDescribe = i("custom-describe.webp", "Custom Cohort Builder: describe the cohort in plain English", 1400, 1197);
export const customDescribe2 = i("custom-describe-2.webp", "Custom Cohort Builder: blood cancer selected, describing the cohort", 1600, 1368);
export const customizeColorectal = i("customize.webp", "Customize your cohort after selecting a screening cohort", 1600, 971);
export const request = i("request.webp", "Request a new cohort form", 1400, 850);

export const cohort: CaseStudy = {
  slug: "ai-cohort-builder",
  title: "AI Cohort Builder",
  titleLines: ["AI Cohort", "Builder"],
  tags: ["UI Design", "AI Product", "Healthcare"],
  mission: "Helping healthcare teams define the right patient population in minutes — without writing a single query.",
  description:
    "Case study: an AI-assisted Cohort Builder that helps healthcare teams define the right patient population in minutes, without writing a query.",
  hero: {
    kind: "tour",
    steps: [
      { image: landing, label: "Pick a route", cursor: [18, 43] },
      { image: stdCategory, label: "Choose a clinical area", cursor: [55, 61] },
      { image: stdCohorts, label: "Compare criteria, then select", cursor: [93, 50] },
      { image: stdCustomize, label: "Name it, date it, create", cursor: [95, 91.5] },
    ],
  },
  toc: true,
  sections: [
    {
      id: "context",
      toc: "Context",
      label: "Context & Premise",
      blocks: [
        {
          type: "lead",
          primary:
            "I joined as the UI designer on a healthcare analytics platform used by hospital and health-system officials to track outcomes across patient groups.",
          secondary:
            "Every analysis starts with a cohort — the exact set of patients being measured. Building one used to mean translating clinical intent into technical criteria. My brief was to design an AI-assisted Cohort Builder inside the platform’s existing analytics environment, working with product, clinical and data teams.",
        },
      ],
    },
    {
      id: "problem",
      toc: "The Problem",
      label: "The Problem",
      blocks: [
        { type: "heading", text: "Three gaps between a clinical question and a usable cohort." },
        {
          type: "numbered",
          n: "01",
          title: "One door didn’t fit everyone.",
          body: "Some officials need a standard cohort fast. Others need something precise that no preset covers — and some need a cohort that doesn’t exist yet.",
        },
        {
          type: "numbered",
          n: "02",
          title: "Nobody trusts a black box.",
          body: "In healthcare, a cohort is only useful if you can see exactly who is in it and who is left out. A name alone invites second-guessing.",
        },
        {
          type: "numbered",
          n: "03",
          title: "AI needed guardrails.",
          body: "Plain-language input is powerful, but a free-form prompt can produce a cohort that isn’t clinically valid. The interface had to make AI feel safe to use.",
        },
      ],
    },
    {
      id: "process",
      toc: "The Process",
      label: "The Process",
      blocks: [
        { type: "heading", text: "From how cohorts were built to how they should feel." },
        {
          type: "steps",
          items: [
            { kicker: "01", title: "Map the workflow", body: "Reviewed how cohorts were being defined — technical filters, hand-offs to data teams — and where people got stuck." },
            { kicker: "02", title: "Explore three directions", body: "Sketched three ways in: a guided wizard, an AI chat, and a multi-route builder. Each was tested against real clinical questions." },
            { kicker: "03", title: "Iterate and align", body: "Reviewed flows with product and clinical stakeholders, tightened the criteria layout and locked the six launch categories." },
          ],
        },
        { type: "subhead", title: "Three ways in", body: "Before committing, I explored three structures for the same job." },
        { type: "concepts" },
        {
          type: "why",
          title: "Why third route won",
          body: "Concept C matched the interface to the user’s confidence. Most officials start from a known clinical question, so validated presets come first. When they need more, AI steps in — but only inside a chosen category, so every criterion stays clinically grounded. And when nothing fits, the request route turns a dead end into input for the library.",
          accent: "Presets for speed. AI for precision. A request for everything else.",
        },
        { type: "routeMap" },
      ],
    },
    {
      id: "solution",
      toc: "The Solution",
      label: "The Solution",
      blocks: [
        { type: "heading", text: "One builder. Three ways in." },
        {
          type: "numbered",
          n: "01",
          title: "Three routes, one clear start.",
          body: "The landing screen offers Standard, Custom and Request side by side, with a nudge for anyone unsure: start with Standard, switch when you need more. One screen. Three clear choices.",
        },
        { type: "figure", figure: { kind: "framed", image: landing } },
        { type: "impact", label: "Impact:", text: "Every path starts with a single click — Standard, Custom or Request." },
        {
          type: "numbered",
          n: "02",
          title: "Criteria you can read at a glance.",
          body: "Each validated cohort shows its purpose, yearly patient volume and use case, with inclusion and exclusion criteria side by side before anything is selected. See who’s in. See who’s out.",
        },
        {
          type: "figure",
          figure: {
            kind: "framed",
            image: stdCohortsColorectal,
            note: "Tap the numbered pins to see the reasoning behind each decision",
            hotspots: [
              { x: 16.2, y: 64, side: "right", title: "Fit before detail", body: "Patient volume and intended use sit at the top of each cohort, so people know if it fits before reading the criteria." },
              { x: 42.8, y: 73.5, side: "right", title: "Who’s in, who’s out", body: "Inclusion and exclusion sit side by side with ✓ and ✕, so the whole definition reads in one glance." },
              { x: 82, y: 60.8, side: "left", title: "One clear action", body: "A single Select per cohort. Nothing is created until the user names and dates it on the next step." },
            ],
          },
        },
        { type: "impact", label: "Impact:", text: "A validated cohort goes from landing to created in four steps — without writing a query." },
        {
          type: "numbered",
          n: "03",
          title: "AI inside a guardrail.",
          body: "Custom cohorts start with a required clinical category, then a plain-English description the AI turns into structured criteria. Anything still missing flows into Request, which grows the validated library. Say it plainly. Stay clinically valid.",
        },
        { type: "figure", figure: { kind: "pair", images: [customDescribe, request], ratio: 1000 / 360 } },
        { type: "aiDemo" },
        { type: "impact", label: "Impact:", text: "Shipped to production — custom cohorts now start from a sentence, not hand-written criteria." },
      ],
    },
    {
      id: "overview",
      toc: "Overview",
      label: "Project Overview",
      blocks: [
        {
          type: "overview",
          items: [
            { label: "Role", value: "UI Designer" },
            { label: "Platform", value: "Web · Embedded analytics" },
            { label: "Focus", value: "AI UX · Data-dense UI" },
          ],
        },
      ],
    },
    {
      id: "summary",
      toc: "Summary",
      label: "Summary",
      blocks: [
        {
          type: "summary",
          body: "The Cohort Builder turned a technical step into a guided choice. Validated presets handle the everyday, AI handles the specific, and every gap becomes a request that grows the library.",
          accent: "Less guessing. More trust.",
        },
      ],
    },
  ],
  showcase: {
    title: "Build a cohort yourself.",
    body: "A clickable recreation of all three routes: pick a clinical area, compare criteria, and create a cohort in four steps. Sample data only.",
    link: { label: "Open the prototype", href: "/work/ai-cohort-builder/prototype/" },
    image: landing,
    grid: {
      caption: "The screens · click any screen to zoom",
      images: [stdCategory, stdCohorts, stdCustomize, customCategory, customDescribe2, customizeColorectal],
    },
  },
  next: { slug: "consoldata-website", title: "ConSolData Website" },
};
