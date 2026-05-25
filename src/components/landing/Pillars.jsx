"use client";
import { cobStyles, mobStyles, CREW } from "./styles";

const PILLARS_DATA = [
  {
    kicker: '01',
    title: 'Your unfair network.',
    body: 'The builders solving what you\'re solving — one intro away. Filter by sector, see what they\'re shipping, skip the cold outreach.',
    bullets: ['Curated builder directory', 'Clear match signals', 'Direct intros'],
  },
  {
    kicker: '02',
    title: 'Insider access.',
    body: 'Live sessions with operators who\'ve built what you\'re building. Plus a library of playbooks and recordings that don\'t exist anywhere else.',
    bullets: ['Live monthly sessions', 'Members-only library', 'Async, on your schedule'],
  },
  {
    kicker: '03',
    title: 'Direct line to capital.',
    body: 'WE Heart is a venture builder. We write first checks for the right teams. Being inside the Crew is how we find them early.',
    bullets: ['Direct line to WE Heart partners', 'Honest feedback on your raise', 'Zero obligation to pitch'],
  },
];

function PillarCard({ p, i, mobile }) {
  return (
    <div style={{
      background: i === 1 ? CREW.ink : '#FFFFFF',
      color: i === 1 ? CREW.cream : CREW.ink,
      borderRadius: mobile ? 18 : 22,
      padding: mobile ? 24 : 36,
      display: 'flex', flexDirection: 'column', gap: mobile ? 14 : 18,
      border: i === 1 ? 'none' : '1px solid rgba(10,10,10,0.08)',
    }}>
      <div style={{
        ...(mobile ? {} : cobStyles.kicker),
        color: CREW.orange, fontSize: 13,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{
          width: mobile ? 30 : 32, height: mobile ? 30 : 32, borderRadius: '50%',
          background: CREW.orange, color: CREW.ink,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: mobile ? 12 : 13, fontWeight: 700, letterSpacing: 0,
        }}>{p.kicker}</span>
      </div>
      <h3 style={{
        fontSize: mobile ? 22 : 34, fontWeight: 700,
        lineHeight: mobile ? 1.1 : 0.98,
        letterSpacing: mobile ? '-0.02em' : '-0.03em',
        margin: 0, whiteSpace: 'pre-line',
      }}>{p.title}</h3>
      <p style={{
        margin: 0, fontSize: mobile ? 14 : 15, lineHeight: 1.55,
        color: i === 1 ? 'rgba(245,239,230,0.78)' : 'rgba(10,10,10,0.72)',
      }}>
        {p.body}
      </p>
      <ul style={{
        margin: mobile ? '4px 0 0' : '8px 0 0', padding: 0, listStyle: 'none',
        display: 'flex', flexDirection: 'column', gap: mobile ? 8 : 10,
        ...(mobile ? { paddingTop: 14, borderTop: i === 1 ? '1px solid rgba(245,239,230,0.14)' : '1px solid rgba(10,10,10,0.08)' } : {}),
      }}>
        {p.bullets.map((b, j) => (
          <li key={j} style={{
            fontSize: mobile ? 12.5 : 13,
            color: i === 1 ? 'rgba(245,239,230,0.85)' : 'rgba(10,10,10,0.78)',
            paddingLeft: mobile ? 16 : 18, position: 'relative', lineHeight: 1.45, fontWeight: 500,
          }}>
            <span style={{ position: 'absolute', left: 0, top: 7, width: 8, height: 2, background: CREW.orange }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CobBatch() {
  return (
    <section style={{ padding: '120px 32px', background: CREW.cream }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 820, marginBottom: 64 }}>
          <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 14 }}>WHAT YOU GET ACCESS TO</div>
          <h2 style={cobStyles.h2}>
            Three things,<br />in your corner.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          {PILLARS_DATA.map((p, i) => (
            <PillarCard key={i} p={p} i={i} mobile={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CobMobPillars() {
  return (
    <section style={{ padding: '56px 20px', background: CREW.cream }}>
      <div style={{ ...mobStyles.kicker, color: CREW.orange, marginBottom: 12 }}>What you get access to</div>
      <h2 style={{ fontSize: 36, lineHeight: 0.96, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 32px' }}>
        Three things,<br />in your corner.
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {PILLARS_DATA.map((p, i) => (
          <PillarCard key={i} p={p} i={i} mobile={true} />
        ))}
      </div>
    </section>
  );
}
