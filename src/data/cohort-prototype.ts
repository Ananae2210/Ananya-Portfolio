/* Clickable Cohort Builder prototype.
   Screens and hotspots mirror the Figma prototype on page "Showcse Screens" (34:699).
   Hotspot boxes are in frame pixels (frames are 1845 wide); the page converts them to %. */

export type Done = "done-standard" | "done-custom" | "done-request";
export interface Spot { to: string | Done; x: number; y: number; w: number; h: number; label: string }
export interface Screen { id: string; h: number; title: string; alt: string; spots: Spot[] }

export const FRAME_W = 1845;
export const START = "34-2587";

const BACK: Spot = { to: START, x: 249, y: 163, w: 254, h: 24, label: "Back to route selection" };

type Cat = "colorectal" | "breast" | "blood" | "maternal" | "diabetes" | "cardio";
const CATS: { key: Cat; name: string; std: string; custom: string }[] = [
  { key: "colorectal", name: "Colorectal Cancer", std: "34-5007", custom: "34-2928" },
  { key: "breast", name: "Breast Cancer", std: "34-5311", custom: "34-3051" },
  { key: "blood", name: "Blood Cancer", std: "34-4835", custom: "34-3174" },
  { key: "maternal", name: "Maternal Health", std: "34-5615", custom: "34-3298" },
  { key: "diabetes", name: "Diabetes Management", std: "34-4491", custom: "34-2803" },
  { key: "cardio", name: "Cardiovascular Disease", std: "34-4663", custom: "34-3423" },
];
const COLS = [245, 780, 1314];

/* Six category tiles in a 3 × 2 grid; `rows` are the two row tops, `th` the tile height. */
function tiles(rows: [number, number], th: number, to: (c: (typeof CATS)[number]) => string, verb: string): Spot[] {
  return CATS.map((c, i) => ({
    to: to(c),
    x: COLS[i % 3],
    y: rows[Math.floor(i / 3)],
    w: 495,
    h: th,
    label: `${verb} ${c.name}`,
  }));
}

/* Customise screens: [id, cohort name, parent available-cohorts screen, button row y] */
const CUSTOMISE: [string, string, string, number][] = [
  ["34-3645", "Uncontrolled Type 2 Diabetes", "34-4491", 996],
  ["34-3739", "Colorectal Cancer Stage I–III", "34-5007", 996],
  ["34-3833", "Colorectal Cancer Screening", "34-5007", 996],
  ["34-3927", "HER2-Positive Breast Cancer", "34-5311", 996],
  ["34-4021", "Breast Cancer Screening", "34-5311", 996],
  ["34-4115", "Standard Pregnancy Care", "34-5615", 996],
  ["34-4209", "High Risk Pregnancy", "34-5615", 996],
  ["34-4303", "Heart Failure with Reduced Ejection Fraction", "34-4663", 996],
  ["34-4397", "Patients with Active Hematologic Malignancy", "34-4835", 979],
];

/* Available-cohort screens: [id, height, select targets top to bottom] */
const AVAILABLE: [string, number, string[]][] = [
  ["34-4491", 1119, ["34-3645"]],
  ["34-4663", 1119, ["34-4303"]],
  ["34-4835", 1119, ["34-4397"]],
  ["34-5007", 1459, ["34-3739", "34-3833"]],
  ["34-5311", 1459, ["34-3927", "34-4021"]],
  ["34-5615", 1459, ["34-4115", "34-4209"]],
];

const nameOf = (id: string) => CUSTOMISE.find((c) => c[0] === id)![1];

export const screens: Screen[] = [
  {
    id: START,
    h: 1119,
    title: "Choose a route",
    alt: "Cohort Builder landing screen with three routes: Standard, Custom and Request a new cohort",
    spots: [
      { to: "34-2657", x: 277, y: 450, w: 440, h: 24, label: "Get started with the Standard Cohort Builder" },
      { to: "34-2730", x: 812, y: 450, w: 440, h: 24, label: "Get started with the Custom Cohort Builder" },
      { to: "34-3548", x: 1347, y: 450, w: 440, h: 24, label: "Request a new cohort" },
    ],
  },
  {
    id: "34-2657",
    h: 1119,
    title: "Standard · choose a clinical area",
    alt: "Standard Cohort Builder: six clinical category tiles",
    spots: [...tiles([475, 606], 111, (c) => c.std, "Choose"), BACK],
  },
  {
    id: "34-2730",
    h: 1119,
    title: "Custom · choose a clinical area",
    alt: "Custom Cohort Builder: six clinical category tiles",
    spots: [...tiles([472, 603], 111, (c) => c.custom, "Choose"), BACK],
  },
  ...CATS.map((c): Screen => {
    const cardio = c.key === "cardio";
    return {
      id: c.custom,
      h: 1577,
      title: `Custom · describe a ${c.name.toLowerCase()} cohort`,
      alt: `Custom Cohort Builder with ${c.name} selected, a plain-language description box, cohort name and dates`,
      spots: [
        ...tiles(cardio ? [471, 617] : [472, 603], cardio ? 125 : 111, (o) => (o.key === c.key ? "34-2730" : o.custom), "Switch to").map(
          (s) => (s.to === "34-2730" ? { ...s, label: "Change clinical area" } : s),
        ),
        { to: "34-2730", x: 1533, y: 1474, w: 71, h: 40, label: "Cancel" },
        { to: "done-custom", x: 1624, y: 1474, w: 181, h: 40, label: "Create custom cohort" },
        BACK,
      ],
    };
  }),
  ...AVAILABLE.map(([id, h, selects]): Screen => {
    const c = CATS.find((k) => k.std === id)!;
    return {
      id,
      h,
      title: `Standard · ${c.name.toLowerCase()} cohorts`,
      alt: `Available ${c.name} cohorts, each with its inclusion and exclusion criteria`,
      spots: [
        { to: "34-2657", x: 1646, y: 405, w: 151, h: 32, label: "Change category" },
        ...selects.map((to, i) => ({ to, x: 1646, y: i === 0 ? 539 : 928, w: 151, h: 32, label: `Select ${nameOf(to)}` })),
        BACK,
      ],
    };
  }),
  ...CUSTOMISE.map(([id, name, parent, y]): Screen => ({
    id,
    h: 1119,
    title: `Customise · ${name}`,
    alt: `Customise your cohort: ${name} selected, with name, dates and notes`,
    spots: [
      { to: parent, x: 1595, y, w: 71, h: 40, label: "Cancel" },
      { to: "done-standard", x: 1686, y, w: 123, h: 40, label: "Create cohort" },
      BACK,
    ],
  })),
  {
    id: "34-3548",
    h: 1119,
    title: "Request a new cohort",
    alt: "Request a new cohort form",
    spots: [
      { to: START, x: 1581, y: 1042, w: 71, h: 40, label: "Cancel" },
      { to: "done-request", x: 1672, y: 1042, w: 137, h: 40, label: "Submit request" },
      BACK,
    ],
  },
];

export const done: Record<Done, { title: string; body: string }> = {
  "done-standard": {
    title: "Cohort created",
    body: "That’s the Standard route: a clinical area, a cohort you can see the criteria for, then a name and dates.",
  },
  "done-custom": {
    title: "Custom cohort submitted",
    body: "In the product, the AI parses the description into structured criteria for you to review before the cohort is built.",
  },
  "done-request": {
    title: "Request sent",
    body: "That’s the third route, for cohorts that don’t exist yet. Nothing is sent from this prototype.",
  },
};
