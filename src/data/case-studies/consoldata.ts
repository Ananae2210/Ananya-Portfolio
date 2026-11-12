import type { CaseStudy, Img } from "./types";

const i = (src: string, alt: string, w: number, h: number): Img => ({ src: `/images/consoldata/${src}`, alt, w, h });

const landing = i("landing-desktop.webp", "ConSolData Landing page, desktop", 1440, 5772);
const platform = i("platform-desktop.webp", "ConSolData Platform page, desktop", 1440, 6741);
const solution = i("solution-desktop.webp", "ConSolData Solution page, desktop", 1440, 7766);
const who = i("who-desktop.webp", "ConSolData Who it’s for page, desktop", 1440, 6487);
const landingPhone = i("landing-phone.webp", "ConSolData Landing page, phone", 375, 7773);
const platformPhone = i("platform-phone.webp", "ConSolData Platform page, phone", 375, 8238);
const solutionPhone = i("solution-phone.webp", "ConSolData Solution page, phone", 375, 9991);
const whoPhone = i("who-phone.webp", "ConSolData Who it’s for page, phone", 375, 8587);

export const consoldata: CaseStudy = {
  slug: "consoldata-website",
  title: "ConSolData Website",
  titleLines: ["ConSolData", "Website"],
  tags: ["UI/UX Design", "Web", "Visual Storytelling"],
  mission:
    "Turning a brand-new category, policy impact intelligence, into a story health plan leaders can follow in one scroll.",
  description:
    "Case study: the ConSolData website, turning a brand-new category, policy impact intelligence, into a story health plan leaders can follow in one scroll.",
  hero: {
    kind: "site",
    hint: "Scroll inside the laptop and the phone ↕",
    pages: [
      { label: "Landing", desktop: landing, phone: landingPhone },
      { label: "Platform", desktop: platform, phone: platformPhone },
      { label: "Solution", desktop: solution, phone: solutionPhone },
      { label: "Who it’s for", desktop: who, phone: whoPhone },
    ],
  },
  toc: false,
  sections: [
    {
      id: "context",
      toc: "Context",
      label: "Context & Premise",
      blocks: [
        {
          type: "lead",
          primary: "ConSolData helps health plans predict, measure and improve the outcomes of their utilization policies.",
          secondary:
            "As the UI/UX designer, I structured the site, created its visual theme and turned an abstract message into something visitors could see and follow. These four pages carry the heart of that message: Landing, Platform, Solution and Who it’s for.",
        },
      ],
    },
    {
      id: "challenge",
      toc: "The Challenge",
      label: "The Challenge",
      blocks: [
        { type: "heading", text: "Sell a category nobody had seen before." },
        {
          type: "numbered",
          n: "01",
          title: "A category with no name yet.",
          body: "“Policy impact intelligence” isn’t something buyers search for. The site had to explain what it is before it could explain why it matters.",
        },
        {
          type: "numbered",
          n: "02",
          title: "Busy, sceptical readers.",
          body: "Health plan leaders skim. Every section needed one clear idea they could take away in seconds.",
        },
        {
          type: "numbered",
          n: "03",
          title: "Proof that lives in numbers.",
          body: "The value is financial and statistical. It had to be shown visually, not buried in paragraphs.",
        },
      ],
    },
    {
      id: "structure",
      toc: "The Structure",
      label: "The Structure",
      blocks: [
        { type: "heading", text: "One story, four pages." },
        {
          type: "intro",
          text: "Each page answers the next question a visitor would ask. The dark and light sections set the pace: dark for the big claims, light for the explanation.",
        },
        {
          type: "storyMap",
          caption: "Right of each page: the whole page at a glance. Dark sections carry the claims, light sections explain them.",
          pages: [
            { kicker: "01 · The problem", title: "Landing", quote: "“Most health plans don’t know whether their policies actually worked.”", desktop: landing },
            { kicker: "02 · The capability", title: "Platform", quote: "“Predict what will happen. Understand what did. Decide what comes next.”", desktop: platform },
            { kicker: "03 · The proof", title: "Solution", quote: "“Better decisions begin with better visibility.”", desktop: solution },
            { kicker: "04 · The audience", title: "Who it’s for", quote: "“Built for teams that own the consequences of policy decisions.”", desktop: who },
          ],
        },
      ],
    },
    {
      id: "visual-story",
      toc: "The Visual Story",
      label: "The Visual Story",
      blocks: [
        { type: "heading", text: "Making the abstract visible." },
        { type: "intro", text: "Three moments where the site turns an idea into a picture. Tap the pins to see the thinking behind each one." },
        {
          type: "visual",
          n: "01",
          title: "The gap you can see",
          body: "One real-world style example, followed from expected savings to observed impact, before any claim is made.",
          figure: {
            kind: "crop",
            image: landing,
            top: 875.56 / 1280,
            height: 859.56 / 1280,
            hotspots: [
              { x: 8.98, y: 27.46, side: "right", title: "An example before a claim", body: "The section follows one imaging prior-authorization policy, so visitors meet the problem through a story, not a sales line." },
              { x: 62.5, y: 59.45, side: "left", title: "The missing million", body: "Expected and observed savings stand side by side as columns, so the $1M gap is visible before it is read." },
            ],
          },
        },
        {
          type: "visual",
          n: "02",
          title: "One chain, four steps",
          body: "Policy, behaviour, utilization and financial outcomes drawn as linked blocks, read left to right in a single glance.",
          figure: {
            kind: "crop",
            image: landing,
            top: 1735.11 / 1280,
            height: 723.56 / 1280,
            hotspots: [
              { x: 22.89, y: 74.63, side: "right", title: "Cause and effect, drawn", body: "Isometric blocks connected by lines show that a policy only reaches the balance sheet through behaviour and utilization." },
            ],
          },
        },
        {
          type: "visual",
          n: "03",
          title: "Inputs, engine, outcomes",
          body: "The Platform page explains simulation by mirroring how it works: change the inputs, run the engine, compare outcomes.",
          figure: {
            kind: "crop",
            image: platform,
            top: 3271.11 / 1280,
            height: 830 / 1280,
            hotspots: [
              { x: 38.9, y: 32.57, side: "right", title: "Mirror the product", body: "Three columns follow the real flow of a simulation, so the layout itself teaches how the platform works." },
              { x: 69.45, y: 74.43, side: "left", title: "Honest about uncertainty", body: "Predicted outcomes show ranges and confidence, not single numbers, to earn trust with finance teams." },
            ],
          },
        },
      ],
    },
    {
      id: "theme",
      toc: "The Theme",
      label: "The Theme",
      blocks: [
        { type: "heading", text: "One system, four pages, two breakpoints." },
        {
          type: "intro",
          text: "Deep navy for authority, violet and blue for the product, teal for outcomes. Isometric illustrations make abstract ideas feel tangible.",
        },
        {
          type: "swatches",
          gradient: "Signature gradient · violet → blue → teal",
          colours: [
            { name: "Navy", hex: "#111E33", use: "Backgrounds" },
            { name: "Slate", hex: "#2E4A72", use: "Surfaces" },
            { name: "Violet", hex: "#8B5CF6", use: "Product, links" },
            { name: "Blue", hex: "#3B6EF5", use: "Highlights" },
            { name: "Teal", hex: "#00D4B4", use: "Outcomes" },
            { name: "Amber", hex: "#FBBF24", use: "Alerts" },
            { name: "Ice", hex: "#E8F1FF", use: "Light sections" },
          ],
        },
        {
          type: "specimens",
          items: [
            { sample: "Policies that work.", font: "Manrope", role: "Headlines", family: "'Manrope', sans-serif", size: 40, weight: 700 },
            { sample: "Prior authorization. Site-of-care programs. Coverage policies. Billions of dollars move on these decisions.", font: "Inter", role: "Body", family: "'Inter', sans-serif", size: 16 },
            { sample: "EXPECTED  $4.0M\nOBSERVED  $3.0M", font: "JetBrains Mono", role: "Data & labels", family: "'JetBrains Mono', monospace", size: 16, weight: 500 },
          ],
        },
        { type: "components", title: "Components · hover them" },
      ],
    },
    {
      id: "interactions",
      toc: "The Interactions",
      label: "The Interactions",
      blocks: [
        { type: "heading", text: "Small motion, big clarity." },
        {
          type: "intro",
          text: "Each of these moves on the live site. Hover, click or wait, and it plays exactly as designed. Here are the moments where they happen.",
        },
        { type: "interaction", title: "Navigation", hint: "Hover the menu · click search", figure: { kind: "crop", image: landing, top: 0, height: 0.06 } },
        { type: "interaction", title: "Rotating questions", hint: "Wait · it cycles on its own", figure: { kind: "crop", image: landing, top: 0.445, height: 0.085 } },
        { type: "interaction", title: "Policy-to-outcome chain", hint: "Hover the blocks", figure: { kind: "crop", image: landing, top: 1.36, height: 0.52 } },
        { type: "interaction", title: "Team cards", hint: "Hover a card", figure: { kind: "crop", image: landing, top: 3.0, height: 0.35 } },
        { type: "interaction", title: "Observe, step by step", hint: "Wait · steps advance", figure: { kind: "crop", image: platform, top: 1.16, height: 0.82 } },
      ],
    },
    {
      id: "responsive",
      toc: "Responsive",
      label: "Responsive",
      blocks: [
        { type: "heading", text: "Same story, one thumb." },
        {
          type: "intro",
          text: "On mobile each section keeps its one idea. Diagrams stack, columns become sequences, and the key number stays above the fold.",
        },
        {
          type: "responsive",
          pairs: [
            {
              desktop: { label: "Desktop · Hero", figure: { kind: "crop", image: landing, top: 0, height: 537.5 / 860 } },
              phone: { label: "Mobile", figure: { kind: "crop", image: landingPhone, top: 51.2 / 300, height: 896 / 300 } },
            },
            {
              phoneFirst: true,
              desktop: { label: "Desktop · One policy, one decision", figure: { kind: "crop", image: landing, top: 588.26 / 860, height: 556 / 860 } },
              phone: { label: "Mobile", figure: { kind: "crop", image: landingPhone, top: 947.2 / 300, height: 1040 / 300 } },
            },
            {
              desktop: { label: "Desktop · Built for teams", figure: { kind: "crop", image: landing, top: 2577.61 / 860, height: 303.39 / 860 } },
              phone: { label: "Mobile", figure: { kind: "crop", image: landingPhone, top: 4256 / 300, height: 962 / 300 } },
            },
          ],
        },
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
            { label: "Role", value: "UI/UX Designer" },
            { label: "Scope", value: "Site structure · Visual theme · Visual storytelling" },
            { label: "Platform", value: "Web · Desktop & mobile" },
            { label: "Status", value: "Concept · not launched" },
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
          body: "Four pages, one argument: health plans can know whether their policies worked. Structure gave the argument an order, the theme gave it authority, and the visuals made an abstract product feel concrete.",
          accent: "Less jargon. More picture.",
        },
      ],
    },
  ],
  next: { slug: "ai-podcast-studio", title: "AI Podcast Studio" },
};
