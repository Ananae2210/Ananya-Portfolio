import type { CaseStudy, Img } from "./types";

const i = (src: string, alt: string, w: number, h: number): Img => ({ src: `/images/steady/${src}`, alt, w, h });

const todayFull = i("05-today-desktop-full.webp", "Steady Today screen on desktop: calorie ring, four bars, daily score and insights", 1840, 1443);
const today = i("05-today-desktop.webp", "Steady Today screen showing 700 kcal left", 1840, 1150);
const toast = i("05-today-toast-undo-desktop.webp", "Log again chips and an Undo toast after logging", 1840, 1150);
const progress = i("06-progress-desktop.webp", "Progress screen with consistency, streak and goal cards and a forecast", 1840, 1601);
const join = i("08-compete-join-mobile.webp", "Join a board with a live privacy preview, on a phone", 640, 1385);
const boards = i("08-compete-boards-mobile.webp", "A board ranked by consistency, on a phone", 640, 1385);
const mobileDark = i("05-today-mobile-dark.webp", "Steady Today screen on a phone in dark mode", 640, 1385);

export const steady: CaseStudy = {
  slug: "steady",
  title: "Steady",
  titleLines: ["Steady"],
  tags: ["Product Design", "Redesign", "Web App"],
  mission:
    "Redesigning a daily fitness tracker for speed, clarity and motivation. The original had the right features in the wrong structure, so I rebuilt it around one question: how am I doing today, and what's left?",
  description:
    "Case study: Steady, a daily fitness tracker redesigned for speed, clarity and motivation around one question: how am I doing today, and what's left?",
  hero: { kind: "scroll", image: todayFull },
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
            "The original tracker was a free, single-page app for people trying to lose or gain weight. It logged meals, water, caffeine, sleep, weight and lifts, worked out personal calorie targets, and had a cloud leaderboard.",
          secondary:
            "Its features were strong, but daily logging, long-term charts, settings and social features all sat on one long page. I had one day to audit it, restructure it and ship a redesign, keeping the calorie maths identical so existing users' numbers would not change.",
        },
      ],
    },
    {
      id: "problem",
      toc: "The Problem",
      label: "The Problem",
      blocks: [
        { type: "heading", text: "The right features, in the wrong structure." },
        {
          type: "numbered",
          n: "01",
          title: "Everything lived on one long page.",
          body: "Logging, charts, lifts, goals, settings and the leaderboard all competed for attention. The most frequent task, logging something and checking what's left, carried the same weight as tasks done once a month.",
        },
        {
          type: "numbered",
          n: "02",
          title: "Logging felt like admin.",
          body: "Separate, repetitive forms for each data type, no way to re-log a meal eaten before, mistakes that were hard to reverse, and only today could be logged. So people log less.",
        },
        {
          type: "numbered",
          n: "03",
          title: "Numbers without meaning, social without trust.",
          body: "Targets appeared with no explanation, there was no first-run guidance, and the leaderboard relied on keys without saying what was shared.",
        },
      ],
    },
    {
      id: "process",
      toc: "The Process",
      label: "The Process",
      blocks: [
        { type: "heading", text: "One day, five shipped iterations, each answering a review." },
        {
          type: "steps",
          items: [
            { kicker: "2 Nov · 09:27 · Audit", title: "Audit the original", body: "Feature inventory, a heuristic review against Nielsen's 10 heuristics, and the calorie maths reverse-engineered so the redesign gives identical numbers." },
            { kicker: "09:37 · v1", title: "Restructure around Today", body: "Tabbed IA, a Today screen with one logger, then Progress, Training, History, Plan and Settings, in light and dark themes." },
            { kicker: "10:15 · v2", title: "Rebuild leaderboards", body: "Feedback was “keep leaderboards”, so I rebuilt them privacy-first: private boards, invite links, a public board and four ranking metrics." },
            { kicker: "11:10–11:18 · v3 to v5", title: "First run, brand and colour", body: "A splash, 2-step setup and 14-card spotlight tour; a continuous-path “S” logo; and coral for effort and wins, with error red shifted to rose." },
          ],
        },
        {
          type: "audience",
          title: "Who it’s for",
          cards: [
            { tier: "Primary", title: "Maya, 29 (proto-persona)", body: "Trying to lose 6 kg while lifting three times a week. Logs on her phone between meetings and quits any app that feels like a chore." },
            { tier: "Secondary", title: "Existing users", body: "People already tracking in the original. Their calorie targets had to stay exactly the same." },
            { tier: "Tertiary", title: "Friends who train together", body: "Want friendly competition without exposing their weight or meals." },
          ],
        },
        {
          type: "rows",
          title: "Principles",
          items: [
            "Today first: the app opens on today's status; everything else is one tap away.",
            "Log in seconds: one logger, presets, one-tap repeats, undo instead of confirm.",
            "Explain every number: every target has a plain-language explanation.",
            "Motivate, don't punish: streaks, a daily score and PR celebrations.",
            "Private by default: data stays on the device, and what's shared is spelled out first.",
          ],
        },
        {
          type: "note",
          title: "Research",
          body: "An audit, not interviews: feature inventory, heuristic evaluation, reverse-engineering the calorie logic, and a scan of popular calorie and habit trackers. Maya is an assumption-based proto-persona.",
        },
      ],
    },
    {
      id: "solution",
      toc: "The Solution",
      label: "The Solution",
      blocks: [
        { type: "heading", text: "Today first. Everything else one tap away." },
        {
          type: "numbered",
          n: "01",
          title: "A home screen that shows what's left.",
          body: "Steady opens on Today: a calorie ring with one big number, “700 kcal left”, four labelled bars for calories, protein, water and caffeine, a daily score and plain-language insights. What's left is what you decide with, so that's what it shows.",
        },
        { type: "figure", figure: { kind: "framed", image: today } },
        { type: "impact", label: "Outcome:", text: "What's left today is visible without scrolling, on desktop and mobile." },
        {
          type: "table",
          title: "Before → After",
          columns: ["Area", "Before", "After", "Why"],
          rows: [
            ["Structure", "One long page", "6 tabs + Settings, grouped by how often they're used; sidebar on desktop, bottom bar on mobile", "Daily tasks no longer compete with monthly ones (F1)"],
            ["Home", "Everything at once", "Today: ring with what's left, 4 bars, daily score, insights", "Answers “what's left today?” at a glance"],
            ["Logging", "Separate forms per data type", "One tabbed logger, presets, “Log again” chips, morning check-in", "Logging stops feeling like admin (F2, F3)"],
            ["Mistakes", "Hard to reverse", "Undo toast on every change; delete from the day log", "Fast logging without fear of errors (F4)"],
            ["Past days", "Today only", "Day arrows and History, tap a day to edit", "One missed evening no longer breaks the record (F5)"],
            ["Numbers", "Unexplained", "Plan explains each formula in plain language; safety floors called out", "People trust targets they understand (F6)"],
            ["Motivation", "Charts", "Streak, daily score, consistency %, forecast date, PR celebration", "Shows that small days add up"],
            ["Social", "Leaderboard and key-based sharing", "Private boards with invite links, public board, privacy preview, read-only share link", "Says exactly what is shared (F8)"],
            ["First use", "None", "Splash, 2-step setup, 14-card spotlight tour", "Feature-rich becomes easy to learn (F7)"],
            ["Brand", "Generic", "Continuous-path “S” logo, teal + coral system, PWA icons", "A modern, unique identity (stakeholder request)"],
            ["Themes", "Light", "Light, dark and auto", "Dark is its own palette, not an inversion"],
          ],
        },
        {
          type: "numbered",
          n: "02",
          title: "Log in seconds, undo anything.",
          body: "One logger with four tabs replaces four forms. Water and caffeine use presets matched to real drinks, “Log again” chips re-log a recent meal in one tap, and every change shows a toast with Undo instead of an “Are you sure?” dialog.",
        },
        { type: "figure", figure: { kind: "framed", image: toast, ratio: 1000 / 655 } },
        { type: "impact", label: "Outcome:", text: "Water or a repeat meal takes one tap, and a mistake takes one more to undo." },
        {
          type: "numbered",
          n: "03",
          title: "Progress proves it's working.",
          body: "Consistency, streak and goal cards with coloured stripes, a calories chart where each day has its own target line, and a forecast in plain language: at this pace you reach your goal around 5 January 2027.",
        },
        { type: "figure", figure: { kind: "framed", image: progress } },
        { type: "impact", label: "Outcome:", text: "Data becomes an answer, and every estimate is honest about its limits." },
        {
          type: "numbered",
          n: "04",
          title: "Competition without exposure.",
          body: "The join form sits next to a live preview of what others will see. Meals, calories, weight, sleep and caffeine are never shared. Boards rank by consistency, not weight lost, so people losing and gaining compete fairly.",
        },
        {
          type: "figure",
          figure: { kind: "phones", images: [{ ...join, label: "Join · privacy preview" }, { ...boards, label: "Board · ranked by consistency" }] },
        },
        { type: "impact", label: "Outcome:", text: "A risky social feature became one people can trust." },
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
            { label: "Timeline", value: "22 Oct – 2 Nov 2026" },
            { label: "Platform", value: "Web app (PWA) · Light & dark" },
            { label: "Stack", value: "React · TypeScript · Vite" },
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
          body: "Steady turned a feature-rich but crowded tracker into an app organised around one daily question. The calorie maths stayed identical; what changed was structure, logging speed, explanation and trust.",
          accent: "Structure first. Features second.",
        },
        {
          type: "learnings",
          learned: [
            "Structure beats features. The original had almost every feature; the biggest gain came from moving things around. Show what's left, not what's done: “650 left” helps you decide, “1,000 eaten” is only a record.",
            "Undo is faster than confirm, and privacy is a UX feature: showing exactly what is shared, next to the join button, turned a risky feature into a trusted one.",
          ],
          note: {
            title: "Outcomes · not yet measured",
            body: "No usability testing or analytics yet. Planned: a 5-person moderated test (log lunch, fix yesterday's water, join a friend's board) measuring task success, time on task and SUS. Built with AI assistance (Claude) under my direction.",
          },
          next: "Usability testing, a food database or barcode scan, a weekly summary, optional cloud sync and a board activity feed.",
        },
      ],
    },
  ],
  showcase: {
    title: "See how Steady is built.",
    body: "Read the code on GitHub to see how the redesign is built.",
    link: { label: "View the code", href: "https://github.com/Ananae2210/Daily-Fitness-Tracker" },
    image: mobileDark,
    phone: true,
  },
  next: { slug: "ai-cohort-builder", title: "AI Cohort Builder" },
};
