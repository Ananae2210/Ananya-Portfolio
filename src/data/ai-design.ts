/* AI × Design — "Designing anything with Claude".
   Copy mirrors the Figma desktop frame 17:218 (section 193:17656). */

export const hero = {
  label: "AI × Design — how I work with Claude",
  title: "AI × Design",
  intro:
    "Every way I use Claude in my design work, on client projects and on my own. Claude drafts, sorts and checks. I make the calls that need taste, context and accountability.",
};

export const workflow = {
  label: "The workflow",
  title: "Designing anything with Claude",
  intro:
    "One six-stage process for any project, personal or corporate, built on the Double Diamond. Claude widens the options and takes the busywork at every stage. I own every gate.",
};

export type StageKey = "discover" | "define" | "ideate" | "prototype" | "validate" | "deliver";

export const stages: { key: StageKey; n: string; name: string; body: string; gate: string }[] = [
  { key: "discover", n: "01", name: "Discover", body: "Understand the ask, the people and their context", gate: "The brief is confirmed and every insight traces to a source" },
  { key: "define", n: "02", name: "Define", body: "Choose the problem worth solving and the structure that answers it", gate: "Problem, structure and scope agreed" },
  { key: "ideate", n: "03", name: "Ideate", body: "Explore many directions before committing to one", gate: "Two or three directions chosen to prototype" },
  { key: "prototype", n: "04", name: "Prototype", body: "Build the chosen direction with real content", gate: "Layout owned and every claim fact-checked" },
  { key: "validate", n: "05", name: "Validate", body: "Critique, test and fix before anyone else finds the problems", gate: "Real people can do what it is for" },
  { key: "deliver", n: "06", name: "Deliver", body: "Ship it, hand it off and tell the story", gate: "Signed off and summarised in my own words" },
];

export const fig01 = {
  kicker: "Fig. 01 — The map",
  title: "Two diamonds, six stages, one loop",
  body: "The first diamond finds the right problem. The second designs the right solution. What I learn after launch feeds the next round.",
};

export const fig02 = {
  kicker: "Fig. 02 — Claude and me",
  title: "Claude assists. I own the outcome.",
  body: "At every stage Claude takes the volume work: drafting, clustering, summarising, checking. I do the work that needs empathy, taste and accountability.",
  rows: [
    {
      stage: "discover",
      claude: ["Turn a loose request into a brief and the questions to send back", "Cluster feedback, reviews and notes into themes", "Summarise desk research and past work"],
      me: ["Confirm the goal and audience with whoever asked", "Talk to and observe the people it is for", "Check every theme against the raw quotes"],
      how: "Projects as context packs, research synthesis",
    },
    {
      stage: "define",
      claude: ["Draft many “How might we” framings", "Propose two structures or storylines with trade-offs", "Map competitor and reference patterns"],
      me: ["Pick the problem and who it is for", "Choose the structure with whoever signs off", "Decide what is out of scope"],
      how: "Brief builder, storyliner",
    },
    {
      stage: "ideate",
      claude: ["Describe distinct visual directions within the brand", "Write prompts for Figma Make and image tools", "Stress-test ideas against edge cases"],
      me: ["Sketch, combine and curate", "Judge brand fit, ethics and feasibility", "Choose two or three directions"],
      how: "Claude, Figma Make prompts",
    },
    {
      stage: "prototype",
      claude: ["Build frames, variables and prototype links in Figma", "Write real copy from my facts, with claims flagged", "Generate colour ramps and contrast checks"],
      me: ["Own layout, hierarchy and interaction detail", "Keep the design system consistent", "Make the accessibility calls and review every Claude-made element"],
      how: "Claude in Figma, UX copy",
    },
    {
      stage: "validate",
      claude: ["Critique the design and run accessibility checks", "Sweep the file against type, spacing and token rules", "Play the sceptical client, lead or recruiter"],
      me: ["Test with real people where it matters", "Work out why people struggle", "Decide what changes and when it is good enough"],
      how: "Critique, accessibility review, QA sweeps",
    },
    {
      stage: "deliver",
      claude: ["Draft specs and handoff notes", "Turn my decision log into a project summary", "Cluster feedback after launch"],
      me: ["Check the spec against the real file", "Sign off and present the work", "Read the results and choose the next loop"],
      how: "Handoff specs, Claude Docs",
    },
  ] as { stage: StageKey; claude: string[]; me: string[]; how: string }[],
};

export const fig03 = {
  kicker: "Fig. 03 — My Claude toolkit",
  title: "Twelve ways Claude shows up in my work",
  body: "Each one is tied to the stages where it earns its place and to work you can see. Claude does the drafting, sorting and checking; the decisions stay mine.",
  /* `stages` drives the filter chips; "all" matches every chip. */
  tools: [
    { tag: "All stages", stages: ["all"], title: "Projects as context packs", body: "Brand, audience and brief live in one place, so I never re-explain a project.", seen: "Every project I run" },
    { tag: "01 Discover", stages: ["discover"], title: "Brief builder", body: "Turns a loose request into a clear brief and the questions to send back the same day.", seen: "Day-to-day requests" },
    { tag: "01 · 05", stages: ["discover", "validate"], title: "Research synthesis", body: "Clusters feedback and notes into themes, each traced back to its quotes.", seen: "Discovery and testing" },
    { tag: "02 Define", stages: ["define"], title: "Structure and storyline", body: "Drafts information architecture or deck storylines as two options to choose from.", seen: "Dashboards, decks, case studies" },
    { tag: "03 · 04", stages: ["ideate", "prototype"], title: "Prompts for other AI tools", body: "Writes Figma Make and image prompts for the direction I picked.", seen: "Cohort Builder case study" },
    { tag: "04 Prototype", stages: ["prototype"], title: "Colour and type systems", body: "Builds ramps and contrast checks from one brand colour. I make the calls.", seen: "Teal Signal palette" },
    { tag: "04 · 06", stages: ["prototype", "deliver"], title: "Claude in Figma", body: "Builds frames, variables, components and prototype links directly in the file.", seen: "This portfolio" },
    { tag: "04 Prototype", stages: ["prototype"], title: "Real copy, not lorem", body: "Writes copy from my facts and flags every claim that needs a source.", seen: "Websites, brochures, this site" },
    { tag: "05 Validate", stages: ["validate"], title: "Critique and accessibility", body: "Severity-ranked issues with fixes, WCAG checks included.", seen: "Every review" },
    { tag: "05 Validate", stages: ["validate"], title: "Design QA sweeps", body: "Checks a whole file against rules for type sizes, spacing and tokens.", seen: "This portfolio’s type rules" },
    { tag: "05 Validate", stages: ["validate"], title: "Stakeholder rehearsal", body: "Plays the sceptical client, lead or recruiter so I walk in prepared.", seen: "Reviews and pitches" },
    { tag: "06 Deliver", stages: ["deliver"], title: "Specs, docs and summaries", body: "Handoff notes, decision summaries and plans written from my log.", seen: "My design playbook" },
  ],
};

export const fig04 = {
  kicker: "Fig. 04 — The loop inside every stage",
  title: "Frame, generate, review, decide, log",
  body: "The same five-step loop runs inside every stage. Nothing Claude makes reaches a client, a user or a recruiter without me checking it first.",
  steps: [
    { n: "1", name: "Frame", owner: "Me", body: "Set the task: the goal, constraints, sources and brand rules" },
    { n: "2", name: "Generate", owner: "Claude", body: "Produce options, drafts or summaries, many more than you need" },
    { n: "3", name: "Review", owner: "Me", body: "Check against the evidence, the brand, accessibility and ethics" },
    { n: "4", name: "Decide", owner: "Me", body: "Accept, edit or reject. A named person signs it off" },
    { n: "5", name: "Log", owner: "Claude + Me", body: "Log the decision and why. Save prompts that worked as skills" },
  ],
  back: "Rejected at step 4? Go back to step 1, sharpen the brief and run the loop again.",
  guardrailsLabel: "Guardrails — always on",
  guardrails: [
    { title: "No private data in", body: "Personal, client and confidential data stays out unless the setup is approved for it." },
    { title: "Show the source", body: "Every insight and number links back to the quote, file or data point behind it." },
    { title: "Real people decide", body: "Claude can rehearse a test or a meeting. Only real people validate a design." },
    { title: "Label AI content", body: "The team always knows what Claude made. Users are told when it affects them." },
    { title: "A person signs off", body: "Every gate has a named owner. Claude never ships anything on its own." },
  ],
};

export const fig05 = {
  kicker: "Fig. 05 — Tune it to the project",
  title: "Five dials that reshape the workflow",
  body: "No two projects need the same process. Before kick-off, I set each dial for the project. Where it lands decides how long each stage runs, how much Claude does and how many gates I add.",
  dials: [
    { n: "01", name: "Risk", q: "How much harm a wrong call can do", low: "Low · side projects", high: "High · health, finance, kids", up: "Add expert and compliance reviews, keep private data out of Claude, make accessibility audits mandatory and test with more people." },
    { n: "02", name: "Evidence", q: "How much you already know about the people it is for", low: "Low · new idea", high: "High · live product with data", up: "Start from analytics and clustered feedback, shorten Discover and test instead of guessing." },
    { n: "03", name: "Speed", q: "How soon you need an answer", low: "Low · multi-month programme", high: "High · same-day request", up: "Merge Define and Ideate and let Claude draft structure and copy in one pass. Keep every gate, just make it shorter." },
    { n: "04", name: "Novelty", q: "How new the idea is to the people using it", low: "Low · template refresh", high: "High · new to the world", up: "Spend longer in Discover, push ideation wider and test the concept before designing any UI." },
    { n: "05", name: "Brand weight", q: "How much the look and voice carry the work", low: "Low · internal tool", high: "High · brand launch, print", up: "Claude makes variations only. I art-direct and craft every final asset." },
  ],
};

export type Weight = "full" | "light" | "skip";

export const fig06 = {
  kicker: "Fig. 06 — Presets",
  title: "Seven common projects, seven settings",
  body: "Starting points for the work I do most, personal and corporate. Each row shows how much time a stage gets and the one change that matters most.",
  presets: [
    { name: "New product or side project", sub: "A new app, venture or personal build", w: ["light", "full", "full", "full", "full", "light"], key: "Short discovery. Claude speeds up prototypes and real people test them early." },
    { name: "Feature on a live product", sub: "Improving something people already use", w: ["full", "light", "light", "full", "full", "full"], key: "Start from analytics and clustered feedback. Ship behind a test." },
    { name: "Data dashboard", sub: "Analytics for people who make decisions", w: ["full", "full", "light", "full", "full", "full"], key: "Metric hierarchy first, plus empty, loading, error and outlier states." },
    { name: "Website or landing page", sub: "Company, product or personal site", w: ["light", "full", "full", "full", "light", "full"], key: "Claude drafts structure and copy together, then I do a brand voice pass." },
    { name: "Case study or brochure", sub: "Turning project notes into a story", w: ["light", "full", "light", "full", "light", "full"], key: "Claude turns notes into a story. The client approves every result." },
    { name: "Pitch deck or presentation", sub: "Convincing a room", w: ["light", "full", "light", "full", "full", "skip"], key: "Headlines first, then Claude rehearses the objections with me." },
    { name: "Design system upkeep", sub: "Keeping components and tokens healthy", w: ["full", "full", "light", "full", "light", "full"], key: "Claude sweeps for token and type drift and drafts the docs. I own the component API." },
  ] as { name: string; sub: string; w: Weight[]; key: string }[],
};
