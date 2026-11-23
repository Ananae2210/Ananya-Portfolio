/*
  UI/UX wireframes that the hero dots form before they peel off into the
  signal. Each shape is a set of polylines in a box `h` = 1 tall and `w`
  wide; `sampleShape` spreads N dots evenly along all of its lines.
*/
type Pt = [number, number];
export type Shape = { name: string; w: number; paths: Pt[][] };

const TAU = Math.PI * 2;

function circle(cx: number, cy: number, r: number, n = 14): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i <= n; i++) out.push([cx + Math.cos((i / n) * TAU) * r, cy + Math.sin((i / n) * TAU) * r]);
  return out;
}

function rrect(x: number, y: number, w: number, h: number, r = 0): Pt[] {
  if (!r) return [[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]];
  const out: Pt[] = [];
  const corner = (cx: number, cy: number, a0: number) => {
    for (let i = 0; i <= 4; i++) {
      const a = a0 + (i / 4) * (Math.PI / 2);
      out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
  };
  corner(x + w - r, y + r, -Math.PI / 2);
  corner(x + w - r, y + h - r, 0);
  corner(x + r, y + h - r, Math.PI / 2);
  corner(x + r, y + r, Math.PI);
  out.push(out[0]);
  return out;
}

function bezier(p0: Pt, p1: Pt, p2: Pt, p3: Pt, n = 32): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    out.push([
      u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
      u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
    ]);
  }
  return out;
}

const square = (cx: number, cy: number, s: number) => rrect(cx - s / 2, cy - s / 2, s, s);

// A desktop page wireframe: browser chrome, hero copy and button, an image, three cards.
const browser: Shape = {
  name: "browser",
  w: 1.6,
  paths: [
    rrect(0, 0, 1.6, 1, 0.06),
    [[0, 0.16], [1.6, 0.16]],
    circle(0.08, 0.08, 0.022, 8), circle(0.15, 0.08, 0.022, 8), circle(0.22, 0.08, 0.022, 8),
    rrect(0.4, 0.05, 0.8, 0.06, 0.03),
    [[0.12, 0.3], [0.68, 0.3]],
    [[0.12, 0.38], [0.52, 0.38]],
    rrect(0.12, 0.46, 0.24, 0.08, 0.04),
    rrect(0.86, 0.26, 0.62, 0.32, 0.02),
    [[0.9, 0.54], [1.04, 0.4], [1.14, 0.49], [1.24, 0.41], [1.44, 0.54]],
    circle(1.32, 0.33, 0.03, 8),
    rrect(0.12, 0.66, 0.42, 0.26, 0.03),
    rrect(0.59, 0.66, 0.42, 0.26, 0.03),
    rrect(1.06, 0.66, 0.42, 0.26, 0.03),
  ],
};

// A mobile app screen: list rows with avatars, a card and a tab bar.
const phone: Shape = {
  name: "phone",
  w: 0.56,
  paths: [
    rrect(0, 0, 0.56, 1, 0.08),
    [[0.2, 0.05], [0.36, 0.05]],
    ...[0.18, 0.32, 0.46].flatMap((y) => [
      circle(0.11, y, 0.04, 10),
      [[0.19, y - 0.02], [0.46, y - 0.02]] as Pt[],
      [[0.19, y + 0.025], [0.36, y + 0.025]] as Pt[],
    ]),
    rrect(0.06, 0.58, 0.44, 0.22, 0.03),
    [[0, 0.88], [0.56, 0.88]],
    circle(0.14, 0.94, 0.018, 6), circle(0.28, 0.94, 0.018, 6), circle(0.42, 0.94, 0.018, 6),
  ],
};

// A selected layer in a design tool: bounding box, handles, size tag and cursor.
const select: Shape = {
  name: "select",
  w: 1.4,
  paths: [
    rrect(0.08, 0.06, 0.94, 0.62),
    ...[[0.08, 0.06], [1.02, 0.06], [0.08, 0.68], [1.02, 0.68], [0.55, 0.06], [0.55, 0.68]]
      .map(([x, y]) => square(x, y, 0.06)),
    [[0.22, 0.26], [0.88, 0.26]],
    [[0.22, 0.36], [0.88, 0.36]],
    [[0.22, 0.46], [0.62, 0.46]],
    rrect(0.4, 0.78, 0.3, 0.1, 0.05),
    // arrow cursor
    [[1.06, 0.56], [1.06, 0.98], [1.15, 0.89], [1.21, 1.0], [1.26, 0.97], [1.2, 0.86], [1.32, 0.86], [1.06, 0.56]],
  ],
};

// The pen tool: a smooth path through three anchors, the middle one selected
// with its handles showing.
const pen: Shape = {
  name: "pen",
  w: 1.6,
  paths: [
    bezier([0.08, 0.82], [0.2, 0.2], [0.5, 0.15], [0.8, 0.5], 28),
    bezier([0.8, 0.5], [1.1, 0.85], [1.4, 0.8], [1.52, 0.18], 28),
    [[0.52, 0.18], [1.08, 0.82]],
    square(0.08, 0.82, 0.06), square(1.52, 0.18, 0.06),
    rrect(0.76, 0.46, 0.08, 0.08),
    circle(0.52, 0.18, 0.03, 8), circle(1.08, 0.82, 0.03, 8),
  ],
};

export const SHAPES: Shape[] = [browser, select, phone, pen];

/** N points spread evenly by length along every line of the shape, in shape units. */
export function sampleShape(shape: Shape, n: number): Pt[] {
  const segs: { a: Pt; b: Pt; len: number }[] = [];
  let total = 0;
  for (const path of shape.paths) {
    for (let i = 1; i < path.length; i++) {
      const a = path[i - 1], b = path[i];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (len > 0) { segs.push({ a, b, len }); total += len; }
    }
  }
  const out: Pt[] = [];
  const step = total / n;
  let si = 0, acc = 0;
  for (let k = 0; k < n; k++) {
    const d = (k + 0.5) * step;
    while (si < segs.length - 1 && acc + segs[si].len < d) { acc += segs[si].len; si++; }
    const s = segs[si];
    const u = Math.min(1, Math.max(0, (d - acc) / s.len));
    out.push([s.a[0] + (s.b[0] - s.a[0]) * u, s.a[1] + (s.b[1] - s.a[1]) * u]);
  }
  return out;
}
