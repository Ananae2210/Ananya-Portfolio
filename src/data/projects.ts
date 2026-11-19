export interface Project {
  slug: string;
  index: string;
  title: string;
  /** Short line used on the Home featured stack and mobile carousel. */
  short: string;
  /** Longer line used on the Work page card. */
  summary: string;
  category: string;
  tags: string[];
  meta: { label: string; value: string }[];
  outcome: string;
  url: string; // shown in the preview window chrome
  preview: string; // /images/previews/<slug>.webp
}

export const projects: Project[] = [
  {
    slug: "ai-cohort-builder",
    index: "01",
    title: "AI Cohort Builder",
    short: "Helping healthcare teams build patient cohorts in minutes, without writing a query.",
    summary:
      "Helping healthcare teams define the right patient population in minutes, without writing a single query.",
    category: "AI product · Healthcare",
    tags: ["UI Design", "AI Product", "Healthcare"],
    meta: [
      { label: "Role", value: "UI Designer" },
      { label: "Platform", value: "Web · Embedded analytics" },
      { label: "Focus", value: "AI UX · Data-dense UI" },
    ],
    outcome: "Shipped. Healthcare officials now build cohorts by choosing, not querying.",
    url: "ananya.design/work/ai-cohort-builder",
    preview: "cohort",
  },
  {
    slug: "consoldata-website",
    index: "02",
    title: "ConSolData Website",
    short: "A product website that turns a brand-new category, policy impact intelligence, into a story health plan leaders can follow in one scroll.",
    summary:
      "Turning a brand-new category, policy impact intelligence, into a story health plan leaders can follow in one scroll.",
    category: "Website · Visual storytelling",
    tags: ["UI/UX Design", "Web", "Visual Storytelling"],
    meta: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Platform", value: "Web · Desktop & mobile" },
      { label: "Status", value: "Concept · not launched" },
    ],
    outcome: "Four pages, one argument. Less jargon. More picture.",
    url: "ananya.design/work/consoldata",
    preview: "consoldata",
  },
  {
    slug: "ai-podcast-studio",
    index: "03",
    title: "AI Podcast Studio",
    short: "A web app that turns a topic, an article link or notes into a multi-host podcast episode, free to try in under a minute.",
    summary:
      "A web app that turns a topic, an article link or notes into a multi-host podcast episode, free to try in under a minute.",
    category: "AI product · Web app",
    tags: ["UI Design", "AI Product", "Web App"],
    meta: [
      { label: "Role", value: "Product Development" },
      { label: "Platform", value: "Web · Desktop & mobile" },
      { label: "Focus", value: "Redesign · Free-tier UX" },
    ],
    outcome: "Personal project. From a sales-page promise to a working, free-to-try app in three days.",
    url: "ananya.design/work/ai-podcast-studio",
    preview: "podcast",
  },
  {
    slug: "steady",
    index: "04",
    title: "Steady",
    short: "A daily fitness tracker redesigned for speed, clarity and motivation: one Today screen, logging in seconds and privacy-first leaderboards.",
    summary:
      "A daily fitness tracker redesigned for speed, clarity and motivation: one Today screen, logging in seconds and privacy-first leaderboards.",
    category: "AI product · Web app",
    tags: ["Product Design", "Redesign", "Web App"],
    meta: [
      { label: "Role", value: "Product Development" },
      { label: "Platform", value: "Web app (PWA) · Light & dark" },
      { label: "Focus", value: "Redesign · IA · Logging UX" },
    ],
    outcome: "Personal project. Shipped in one day across five iterations, keeping the original calorie maths identical.",
    url: "ananya.design/work/steady",
    preview: "steady",
  },
  {
    slug: "patient-cohort-builder",
    index: "05",
    title: "Patient Cohort Builder",
    short: "Ask for patients in plain English and get the matching cohort, the SQL behind it, and a dashboard.",
    summary:
      "A text-to-SQL app I designed and built: plain-English clinical questions in, a checked, read-only cohort dashboard out.",
    category: "AI engineering · Healthcare",
    tags: ["LLM", "Text-to-SQL", "Streamlit"],
    meta: [
      { label: "Role", value: "Designer & developer" },
      { label: "Stack", value: "Python · SQLite · Streamlit" },
      { label: "Data", value: "800 synthetic patients" },
    ],
    outcome: "Personal project. 13 of 13 benchmark questions right, 21 of 21 safety checks pass.",
    url: "ananya.design/work/patient-cohort-builder",
    preview: "patient-cohort-builder",
  },
];

export const projectHref = (p: Project) => `/work/${p.slug}/`;
