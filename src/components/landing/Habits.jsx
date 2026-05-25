"use client";
import { cobStyles, CREW } from "./styles";

const RITUALS = [
  {
    cadence: 'Every Monday',
    title: 'Show your work',
    body: 'Post what you shipped last week — a PR, a memo, a number, a screenshot. Read each other before any meeting.',
    tag: 'Async · Slack thread',
  },
  {
    cadence: 'Every Wednesday',
    title: 'Stuck thread',
    body: 'Drop the thing blocking you. Someone in the room has solved it before — Anvisa, hiring, regulators, first paying customer.',
    tag: 'Async · 24h response',
  },
  {
    cadence: 'Once a month',
    title: 'Expert drop',
    body: 'A founder or operator joins for a 90-minute working session on something specific — fundraising, GTM, a hard hire. Recorded for the room.',
    tag: 'Live · invite-only',
  },
  {
    cadence: 'Once a month',
    title: 'Crew dinner',
    body: 'A small dinner in São Paulo. No talks, no pitches. 12 builders eating and going home early.',
    tag: 'In-person · São Paulo',
  },
];

export function CobHabits() {
  return (
    <section style={{ padding: '112px 32px', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 820, marginBottom: 56 }}>
          <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 14 }}>How the room runs</div>
          <h2 style={cobStyles.h2}>
            A rhythm,<br />not a syllabus.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'rgba(10,10,10,0.65)', margin: '24px 0 0', maxWidth: 640 }}>
            Four repeating moments a month. Async by default, live when it matters. You'll know what's happening and when — no fear of missing out, no homework.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {RITUALS.map((r, i) => (
            <div key={i} style={{
              background: CREW.cream, borderRadius: 18,
              padding: 28, minHeight: 260,
              display: 'flex', flexDirection: 'column', gap: 14,
              borderTop: `3px solid ${i < 2 ? CREW.orange : CREW.ink}`,
            }}>
              <div style={{ ...cobStyles.kicker, fontSize: 10, color: CREW.orange }}>{r.cadence}</div>
              <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.025em' }}>{r.title}</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'rgba(10,10,10,0.72)' }}>{r.body}</p>
              <div style={{ marginTop: 'auto', fontSize: 11, fontWeight: 600, color: 'rgba(10,10,10,0.45)', letterSpacing: '0.04em', paddingTop: 14, borderTop: '1px solid rgba(10,10,10,0.08)' }}>{r.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
