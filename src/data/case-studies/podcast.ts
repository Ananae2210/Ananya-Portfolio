import type { CaseStudy, Img } from "./types";

const i = (src: string, alt: string, w: number, h: number): Img => ({ src: `/images/podcast/${src}`, alt, w, h });

const homeFull = i("home-full.webp", "AI Podcast Studio home page with a sample episode loaded", 1440, 2314);
const oldHero = i("old-hero-desktop.webp", "First version: serif headline with purple and orange glows", 1840, 1150);
const newHero = i("new-hero-desktop.webp", "Redesign: Barlow headline, near-black palette and one orange accent", 1840, 1150);
const keys = i("new-keys-desktop.webp", "API keys panel with a free Gemini key option", 1840, 1150);
const studio = i("new-studio-desktop.webp", "Studio with Episode setup and Script & audio panels and a sample episode", 1840, 1744);
const oldMobile = i("old-mobile-script.webp", "First version on a phone: script lines cut off mid-sentence", 640, 1385);
const newMobile = i("new-mobile-script.webp", "Redesign on a phone: script lines wrap and controls stack", 640, 1385);
const mobileHome = i("new-mobile.webp", "AI Podcast Studio home on a phone", 640, 1385);

export const podcast: CaseStudy = {
  slug: "ai-podcast-studio",
  title: "AI Podcast Studio",
  titleLines: ["AI Podcast", "Studio"],
  tags: ["Product Design", "AI Product", "Web App"],
  mission: "Turning a topic, an article link or a page of notes into a multi-host podcast episode, free to try in under a minute.",
  description:
    "Case study: AI Podcast Studio turns a topic, an article link or a page of notes into a multi-host podcast episode, free to try in under a minute.",
  hero: { kind: "scroll", image: homeFull },
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
            "It started with a sales page for an “AIPodcasts” product: text to podcast, 100+ voices, voice cloning, avatar video and one-click Spotify and Apple publishing. It was marketing only, with no working product behind it.",
          secondary:
            "A feasibility review showed several of those claims were overstated. So I set out to build an honest, working version scoped to what one person can ship, and to make the AI skills behind it visible in my portfolio.",
        },
      ],
    },
    {
      id: "problem",
      toc: "The Problem",
      label: "The Problem",
      blocks: [
        { type: "heading", text: "A big promise, no product, and a first version that looked like a demo." },
        {
          type: "numbered",
          n: "01",
          title: "The pitch promised what can’t be built.",
          body: "Spotify and Apple can’t take direct uploads (they read RSS feeds), avatar video is the costliest piece, and “pay once forever” pricing loses money on per-episode AI costs. Invented testimonials were a legal risk.",
        },
        {
          type: "numbered",
          n: "02",
          title: "Paid keys locked visitors out.",
          body: "The first working version needed paid Anthropic and OpenAI keys. A recruiter opening the link had none, so they could only hear the sample.",
        },
        {
          type: "numbered",
          n: "03",
          title: "It looked like every other AI demo.",
          body: "A serif headline, purple and orange glows and a gradient button. It worked, but it didn’t read as a credible, professional tool.",
        },
      ],
    },
    {
      id: "process",
      toc: "The Process",
      label: "The Process",
      blocks: [
        { type: "heading", text: "Three days from a sales page to a product I’d show a recruiter." },
        {
          type: "steps",
          items: [
            { kicker: "31 Oct · Feasibility", title: "Audit the promise", body: "Analysed the reference landing page and wrote a build plan. Cut avatar video and direct publishing from v1." },
            { kicker: "1 Nov · Build", title: "Ship a working v1", body: "Next.js app with AI-written scripts, AI voices and a demo mode. Tested in a real browser." },
            { kicker: "1 Nov · Access", title: "Remove the paywall", body: "Paid keys blocked visitors, so I researched free tiers and added Google Gemini for scripts and voices (PR #1)." },
            { kicker: "2 Nov · Redesign", title: "Make it look real", body: "Asked for Barlow and a more professional look. Full visual redesign, checked at desktop and phone sizes (PR #2)." },
          ],
        },
        {
          type: "audience",
          title: "Who it’s for",
          cards: [
            { tier: "Primary", title: "Recruiters and hiring managers", body: "Arrive from a portfolio link with under a minute and no API keys. They need to get it instantly and hear something." },
            { tier: "Secondary", title: "Creators", body: "Bloggers, educators and newsletter writers who want to turn existing writing into an episode without recording." },
            { tier: "Tertiary", title: "Developers", body: "Reviewing the code. They look for the “AI engineering skills” table in the README." },
          ],
        },
        {
          type: "rows",
          title: "Goals",
          items: [
            "A visitor hears a full episode within seconds, with zero setup and zero cost (demo mode).",
            "Writing a real episode is free to try, with no credit card.",
            "The interface looks professional and restrained, closer to a real product than a hackathon demo.",
            "It works on desktop and mobile.",
            "The AI skills behind it are visible, to support the portfolio story.",
          ],
        },
      ],
    },
    {
      id: "solution",
      toc: "The Solution",
      label: "The Solution",
      blocks: [
        { type: "heading", text: "Calm, free to try, and readable anywhere." },
        {
          type: "numbered",
          n: "01",
          title: "A product, not a promo page.",
          body: "I replaced the serif headline, glows and gradient button with Barlow, a near-black scale and one orange accent. Orange now means one thing: the primary action. Restrained look. Clearer hierarchy.",
        },
        {
          type: "figure",
          figure: { kind: "beforeAfter", before: { ...oldHero, label: "Before · v1" }, after: { ...newHero, label: "After · redesign" } },
        },
        { type: "impact", label: "Outcome:", text: "The generic AI-demo look became a restrained, product-grade dark UI with one accent." },
        {
          type: "table",
          title: "Design decisions · PR #2",
          columns: ["Decision", "Before", "After", "Why"],
          rows: [
            ["Typography", "Fraunces serif headline + Inter", "Barlow for body, Barlow Semi Condensed for headings", "A grotesk with a technical, broadcast feel. The condensed cut gives strong, compact headings without a decorative serif."],
            ["Colour", "Purple and orange glows, gradient CTA", "Near-black scale (#0a0b0d, #111316, #171a1e) with one orange accent (#ff5c35)", "One accent gives a clear hierarchy. A calmer palette reads as a tool. The glow shrank to a faint wash behind the hero."],
            ["Hosts", "Coloured dots", "Orange, blue and green plus initial avatars", "Speakers are recognisable at a glance in the script and the host setup."],
            ["Header", "Logo + Settings button", "Studio, How it works, GitHub, “API keys”", "Familiar product navigation. “API keys” says what is inside."],
            ["Hero", "Headline, long paragraph, demo warning", "Eyebrow tag, headline, Open the studio + Hear a sample", "A one-click path for recruiters to hear output immediately."],
            ["Controls", "Rounded pill chips everywhere", "Segmented toggles, chips for tone, radio cards for the writer", "Each control matches its type of choice, and the free option is easy to find."],
            ["How it works", "Small 4-card strip", "Full section: Source → Script → Voices → Episode, plus the tech used", "Explains the pipeline and supports the portfolio story."],
            ["Accessibility", "—", "Reduced motion turns off the equaliser and cursor animations; visible focus rings", "Muted grey #8a9099 on #111316 measures 5.79:1, which passes AA. White on the orange button is 3.07:1, large text only."],
          ],
        },
        {
          type: "numbered",
          n: "02",
          title: "Free to try, end to end.",
          body: "Google Gemini became the default writer and voice provider. One free key covers both, with no card needed. Claude and OpenAI stay as paid options. Keys a visitor pastes stay in their browser only. No card. No catch.",
        },
        { type: "figure", figure: { kind: "framed", image: keys, ratio: 1000 / 655 } },
        { type: "impact", label: "Outcome:", text: "A real episode is free to write with a free Gemini key, and the sample plays with no key at all." },
        {
          type: "numbered",
          n: "03",
          title: "Two steps: set up, then edit and listen.",
          body: "Titled panels split the studio into Episode setup and Script & audio. Segmented toggles handle single choices, chips handle tone, and radio cards show each script writer with a FREE TIER badge. The script streams in line by line, then every line can be edited, reassigned or played from that point.",
        },
        { type: "figure", figure: { kind: "framed", image: studio } },
        { type: "impact", label: "Outcome:", text: "One clear two-step model, with live stats for lines, words and minutes." },
        {
          type: "numbered",
          n: "04",
          title: "Readable on a phone.",
          body: "At phone width the first version clipped script lines mid-sentence. The redesign fixes the overflow so every line wraps, and the controls stack into one column. Same studio. Smaller screen.",
        },
        {
          type: "figure",
          figure: { kind: "phones", images: [{ ...oldMobile, label: "Before · v1" }, { ...newMobile, label: "After · redesign" }] },
        },
        { type: "impact", label: "Outcome:", text: "Script lines wrap instead of being cut off at phone width." },
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
            { label: "Role", value: "Product Developer" },
            { label: "Timeline", value: "31 Oct – 8 Nov 2026" },
            { label: "Platform", value: "Web · Desktop & mobile" },
            { label: "Stack", value: "Next.js · Gemini · Claude" },
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
          body: "AI Podcast Studio turned a marketing promise into an honest, working product. Feasibility came first, cost shaped the UX, and a restrained redesign made it read as a real tool to the people it was built for.",
          accent: "Less hype. More product.",
        },
        {
          type: "learnings",
          learned: [
            "Feasibility first. Auditing the reference page’s claims saved building things that can’t work, like direct Spotify upload.",
            "Cost shapes UX. The free tier and demo mode exist because the audience has no keys.",
          ],
          next: "ElevenLabs voices, background music mixing, an RSS feed per show, and audiogram video with captions.",
        },
      ],
    },
  ],
  showcase: {
    title: "Hear an episode yourself.",
    body: "Open the live preview and press “Hear a sample”. No keys, no sign-up. To write your own episode, add a free Gemini key under API keys.",
    link: { label: "Open live preview", href: "https://ai-podcast-studio-git-ui-redesign-ace-9faa.vercel.app" },
    image: mobileHome,
    phone: true,
  },
  next: { slug: "steady", title: "Steady" },
};
