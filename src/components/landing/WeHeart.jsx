"use client";
import { cobStyles, CREW } from "./styles";

export function CobWeHeart() {
  return (
    <section style={{ padding: '112px 32px', background: CREW.ink, color: CREW.cream }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: "1fr 1.45fr", gap: 64 }}>
        <div>
          <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 14 }}>Run by WE Heart</div>
          <h2 style={{ ...cobStyles.h2, color: CREW.cream }}>
            Saying it<br />out loud.
          </h2>
          <div style={{
            marginTop: 36,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 13, color: 'rgba(245,239,230,0.7)',
            fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 8, height: 8, background: CREW.orange, borderRadius: '50%' }} />
            weheart.vc ↗
          </div>
        </div>
        <div style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(245,239,230,0.88)' }}>
          <p style={{ margin: '0 0 22px' }}>
            The Crew is run by <strong style={{ color: CREW.cream }}>WE Heart</strong>, a venture builder. Their thesis: <strong style={{ color: CREW.orange }}>be the first cheque</strong> — which means knowing founders before they have a CNPJ.
          </p>
          <p style={{ margin: '0 0 22px' }}>
            The Crew is how that happens. It's where we meet you while you're still figuring it out, watch what you ship, and learn alongside you.
          </p>
          <p style={{ margin: 0, color: 'rgba(245,239,230,0.6)', fontSize: 15, paddingTop: 24, borderTop: '1px solid rgba(245,239,230,0.14)' }}>
            We're saying this here because senior operators detect funnel-disguised-as-community. Joining doesn't mean we'll invest. Not joining doesn't mean we won't. The Crew is its own thing — useful on its own, with or without WE Heart.
          </p>
        </div>
      </div>
    </section>
  );
}
