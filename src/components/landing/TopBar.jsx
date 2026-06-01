"use client";
import { CrewIcon } from "@/components/ui/crew-shared";
import { cobStyles, CREW } from "./styles";

export function CobTopBar() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 32px',
      background: 'rgba(245,239,230,0.86)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: '0.02em', textTransform: 'uppercase', lineHeight: 1 }}>
          Crew of Builders
        </span>
        <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 10, opacity: 0.4, letterSpacing: '0.1em' }}>
          Powered by WE Heart Impact
        </span>
      </div>
      <a href="https://app.crewofbuilders.com/login" style={{ ...cobStyles.applyBtn, textDecoration: "none" }}>
        Join the Crew <CrewIcon.Arrow s={14} />
      </a>
    </div>
  );
}

export function CobMobTopBar() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 20px',
      background: 'rgba(245,239,230,0.92)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 1 }}>
          Crew of Builders
        </span>
        <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 9, opacity: 0.4, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
          Powered by WE Heart Impact
        </span>
      </div>
      <a href="https://app.crewofbuilders.com/login" style={{
        background: CREW.ink, color: CREW.orange, border: 'none',
        padding: '9px 16px', borderRadius: 8, fontSize: 12, fontWeight: 600,
        cursor: 'pointer', fontFamily: 'inherit',
        display: 'inline-flex', alignItems: 'center', gap: 6,
        textDecoration: 'none',
      }}>
        Join the Crew <span>→</span>
      </a>
    </div>
  );
}
