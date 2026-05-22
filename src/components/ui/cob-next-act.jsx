"use client";
import React from "react";

const CREW = { ink: '#111', cream: '#F5F1E8', orange: '#FF5A1F' };

const kickerStyle = (mobile) => ({
  fontSize: mobile ? 10 : 11,
  fontWeight: 700,
  letterSpacing: mobile ? '0.16em' : '0.18em',
  textTransform: 'uppercase',
});

export default function CobNextAct({ mobile }) {
  return (
    <section style={{
      padding: mobile ? '56px 20px' : '112px 32px',
      background: CREW.ink,
      color: CREW.cream,
    }}>
      <div style={{
        maxWidth: mobile ? undefined : 1100,
        margin: '0 auto',
        display: mobile ? 'block' : 'grid',
        gridTemplateColumns: mobile ? undefined : '1fr 1.45fr',
        gap: mobile ? 0 : 64,
      }}>
        {/* Left / Top */}
        <div>
          <div style={{ ...kickerStyle(mobile), color: CREW.orange, marginBottom: mobile ? 12 : 14 }}>
            Next Act
          </div>
          <h2 style={{
            fontSize: mobile ? 36 : 'clamp(40px, 5vw, 76px)',
            lineHeight: mobile ? 0.96 : 0.92,
            fontWeight: 700,
            letterSpacing: mobile ? '-0.03em' : '-0.035em',
            margin: mobile ? '0 0 24px' : 0,
            color: CREW.cream,
          }}>
            Elite operators.<br/>
            Ready to build.
          </h2>
          {!mobile && (
            <div style={{
              marginTop: 36,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 13, color: 'rgba(245,239,230,0.7)',
              fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>
              <span style={{ width: 8, height: 8, background: CREW.orange, borderRadius: '50%' }}/>
              Powered by WE Heart
            </div>
          )}
        </div>

        {/* Right / Bottom */}
        <div style={{ fontSize: mobile ? 15 : 19, lineHeight: 1.55, color: 'rgba(245,239,230,0.88)' }}>
          <p style={{ margin: '0 0 22px' }}>
            <strong style={{ color: CREW.cream }}>Next Act</strong> is WE Heart's Open Talent platform — a closed collective of senior talent and elite operators ready to embed in high-impact projects and spin-offs.
          </p>
          <p style={{ margin: '0 0 22px' }}>
            No traditional consulting. No layers of overhead. Just <strong style={{ color: CREW.orange }}>agile squads and lethal execution</strong> — plugged directly into the companies that need them most.
          </p>
          <p style={{
            margin: 0,
            color: 'rgba(245,239,230,0.6)',
            fontSize: mobile ? 13 : 15,
            paddingTop: mobile ? 20 : 24,
            borderTop: '1px solid rgba(245,239,230,0.14)',
          }}>
            If you're a senior operator looking for what's next — or a company that needs one — this is where it starts.
          </p>
        </div>

        {mobile && (
          <div style={{
            marginTop: 28,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 12, color: 'rgba(245,239,230,0.7)',
            fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 7, height: 7, background: CREW.orange, borderRadius: '50%' }}/>
            Powered by WE Heart
          </div>
        )}
      </div>
    </section>
  );
}
