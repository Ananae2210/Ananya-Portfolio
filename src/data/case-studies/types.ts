/* Case study content model. Each case study page is a hero, a list of
   sections (each with a sidebar "On this page" entry) and a showcase.
   Text comes from the Figma case study frames. */

export interface Img {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export interface Hotspot {
  /** position of the pin centre, as % of the figure box */
  x: number;
  y: number;
  /** which side the note opens to */
  side: "right" | "left";
  title: string;
  body: string;
}

export type HeroVisual =
  | {
      kind: "tour";
      steps: { image: Img; label: string; cursor: [number, number] }[];
    }
  | { kind: "scroll"; image: Img; hint?: string }
  | {
      kind: "site";
      pages: { label: string; desktop: Img; phone: Img }[];
      hint: string;
    };

export type Figure =
  /** one screen inside a dark rounded box, cropped at the bottom */
  | { kind: "framed"; image: Img; ratio?: number; hotspots?: Hotspot[]; note?: string }
  /** two screens side by side inside one dark box */
  | { kind: "pair"; images: Img[]; ratio?: number }
  /** toggle between a before and an after screen */
  | { kind: "beforeAfter"; before: Img & { label: string }; after: Img & { label: string }; ratio?: number }
  /** two phone screens side by side with labels */
  | { kind: "phones"; images: (Img & { label: string })[] }
  /** a window into a long page image: offset and height in page-width units (0-1) */
  | { kind: "crop"; image: Img; top: number; height: number; hotspots?: Hotspot[]; note?: string };

export type Block =
  | { type: "lead"; primary: string; secondary?: string }
  | { type: "heading"; text: string }
  | { type: "intro"; text: string }
  | { type: "numbered"; n: string; title: string; body: string }
  | { type: "steps"; items: { kicker: string; title: string; body: string }[] }
  | { type: "subhead"; title: string; body?: string }
  | { type: "concepts" }
  | { type: "why"; title: string; body: string; accent: string }
  | { type: "routeMap" }
  | { type: "aiDemo" }
  | { type: "figure"; figure: Figure }
  | { type: "impact"; label: string; text: string }
  | { type: "audience"; title: string; cards: { tier: string; title: string; body: string }[] }
  | { type: "rows"; title: string; items: string[] }
  | { type: "note"; title: string; body: string }
  | { type: "table"; title: string; columns: string[]; rows: string[][] }
  | { type: "overview"; items: { label: string; value: string }[] }
  | { type: "summary"; body: string; accent: string }
  | { type: "learnings"; learned: string[]; note?: { title: string; body: string }; next?: string }
  | { type: "storyMap"; pages: { kicker: string; title: string; quote: string; desktop: Img }[]; caption: string }
  | { type: "visual"; n: string; title: string; body: string; figure: Figure }
  | { type: "swatches"; colours: { name: string; hex: string; use: string }[]; gradient: string }
  | { type: "specimens"; items: { sample: string; font: string; role: string; family: string; size: number; weight?: number }[] }
  | { type: "components"; title: string }
  | { type: "interaction"; title: string; hint: string; figure: Figure }
  | { type: "responsive"; pairs: { desktop: { label: string; figure: Figure }; phone: { label: string; figure: Figure }; phoneFirst?: boolean }[]; note?: string };

export interface Section {
  id: string;
  /** label in the "On this page" list */
  toc: string;
  /** small mono label above the section */
  label: string;
  blocks: Block[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** title split into lines for the display heading */
  titleLines: string[];
  tags: string[];
  mission: string;
  description: string;
  hero: HeroVisual;
  /** show the sticky "On this page" sidebar */
  toc: boolean;
  sections: Section[];
  showcase?: {
    title: string;
    body: string;
    link?: { label: string; href: string };
    image: Img;
    phone?: boolean;
    grid?: { caption: string; images: Img[] };
  };
  next: { slug: string; title: string };
}
