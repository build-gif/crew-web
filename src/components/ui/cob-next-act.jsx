"use client";
import React from "react";
import { CrewIcon } from "@/components/ui/crew-shared";

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
            fontSize: 'clamp(40px, 5vw, 76px)',
            lineHeight: 0.92,
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
        <div style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(245,239,230,0.88)' }}>
          <p style={{ margin: '0 0 22px' }}>
            <strong style={{ color: CREW.cream }}>Born in the Crew.</strong>
          </p>
          <p style={{ margin: 0 }}>
            Founded by Marco Puerari and Gabriel Ribeiro, Next Act was built, launched, and scaled entirely inside the Crew of Builders. A proven market success and the ultimate proof of our execution ecosystem.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 28 }}>
            <a
              href="https://www.nextact.me/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: CREW.orange, color: '#fff', border: 'none',
                padding: '15px 22px', borderRadius: 10, fontSize: 14, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
            >
              Explore Next Act <CrewIcon.ArrowUR s={13}/>
            </a>
            <span style={{ fontSize: 12, color: 'rgba(245,239,230,0.55)' }}>
              nextact.me ↗
            </span>
          </div>
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
