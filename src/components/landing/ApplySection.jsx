"use client";
import { CrewIcon } from "@/components/ui/crew-shared";
import { cobStyles, mobStyles, CREW } from "./styles";

export function CobApply() {
  return (
    <section style={{ padding: '120px 32px 88px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 16 }}>Apply</div>
        <h2 style={{ ...cobStyles.h2, fontSize: 'clamp(56px, 7vw, 112px)' }}>
          You build.<br />We're listening.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.5, margin: '32px 0 40px', maxWidth: 600, color: 'rgba(10,10,10,0.7)' }}>
          Tell us what you're building, what you shipped last week, and what's blocking you right now. That's all we need.
          {'\n\n'}
          Instantly unlock the room, access the directory, and connect with other builders. We keep the bar high by reviewing profiles continuously.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://app.crewofbuilders.com/signup" style={{
            background: CREW.orange, color: '#fff',
            border: 'none', padding: '20px 30px', borderRadius: 12,
            fontSize: 16, fontWeight: 700, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            textDecoration: 'none',
          }}>
            Join the Crew <CrewIcon.Arrow s={16} />
          </a>
          <span style={{ fontSize: 13, color: 'rgba(10,10,10,0.5)' }}>~4 minutes · Free · Batch 01 spots are limited.</span>
        </div>
      </div>
    </section>
  );
}

export function CobMobApply() {
  return (
    <section style={{ padding: '64px 20px' }}>
      <div style={{ ...mobStyles.kicker, color: CREW.orange, marginBottom: 14 }}>Apply</div>
      <h2 style={{ fontSize: 44, lineHeight: 0.94, fontWeight: 700, letterSpacing: '-0.035em', margin: '0 0 22px' }}>
        You build.<br />We're listening.
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 28px', color: 'rgba(10,10,10,0.7)' }}>
        Tell us what you're building, what you shipped last week, and what's blocking you right now. That's all we need. Instantly unlock the room, access the directory, and connect with other builders. We keep the bar high by reviewing profiles continuously.
      </p>
      <a href="https://app.crewofbuilders.com/signup" style={{
        background: CREW.orange, color: '#fff', border: 'none',
        padding: '17px 22px', borderRadius: 12, fontSize: 15, fontWeight: 700,
        cursor: 'pointer', fontFamily: 'inherit', width: '100%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        textDecoration: 'none', boxSizing: 'border-box',
      }}>
        Join the Crew →
      </a>
      <div style={{
        marginTop: 14, textAlign: 'center', fontSize: 12,
        color: 'rgba(10,10,10,0.55)',
      }}>
        ~4 minutes · Free · Batch 01 spots are limited.
      </div>
    </section>
  );
}
