// Deterministic "constellation" layout: circles scattered on a board without
// overlapping, the same on every load (seeded RNG), so the hero never reshuffles.

function seededRandom(seed) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ATTEMPTS = 600;

// Returns nodes with x/y as circle centres and d as diameter, all in board
// units. people[0] lands on the largest circle and the last person on the one
// farthest from it, so the two never sit side by side.
export function placeNodes({ width, height, people, dots, strip, seed = 11 }) {
  const rand = seededRandom(seed);
  const scale = strip ? 0.82 : 1;
  const specs = [
    ...people.map(() => ({ kind: "photo", d: (88 + rand() * 26) * scale })),
    ...Array.from({ length: dots }, () => ({ kind: "dot", d: (10 + rand() * 10) * Math.max(scale, 0.7) })),
  ];

  const placed = [];
  specs.forEach((spec, i) => {
    const r = spec.d / 2;
    const gap = (spec.kind === "photo" ? 28 : 22) * scale;
    let best = null;
    let bestScore = -1;
    for (let t = 0; t < ATTEMPTS; t++) {
      const x = r + 6 + rand() * Math.max(1, width - spec.d - 12);
      const y = r + 6 + rand() * Math.max(1, height - spec.d - 12);
      const score = placed.length
        ? Math.min(...placed.map((q) => Math.hypot(q.x - x, q.y - y) - q.d / 2 - r))
        : Infinity;
      if (score > gap) { best = { x, y }; break; }
      if (score > bestScore) { bestScore = score; best = { x, y }; }
    }
    placed.push({ ...spec, ...best, i });
  });

  const photos = placed.filter((n) => n.kind === "photo");
  if (photos.length === people.length && people.length > 1) {
    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    const big = photos.reduce((a, b) => (b.d > a.d ? b : a));
    const far = photos.filter((n) => n !== big).reduce((a, b) => (dist(b, big) > dist(a, big) ? b : a));
    const rest = people.slice(1, -1);
    big.person = people[0];
    far.person = people[people.length - 1];
    photos.filter((n) => n !== big && n !== far).forEach((n, k) => { n.person = rest[k]; });
  }
  return placed;
}
