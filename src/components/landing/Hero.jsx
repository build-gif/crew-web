"use client";
import { CrewIcon, useTypewriter } from "@/components/ui/crew-shared";
import { cobStyles, CREW } from "./styles";

export function CobHero() {
  const word = useTypewriter();
  return (
    <section style={{ padding: "88px 32px 72px", position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ ...cobStyles.h1, fontSize: 'clamp(62px, 7.7vw, 119px)' }}>
            Builders<br />
            build with<br />
            <span style={{ color: CREW.orange, position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
              <span style={{ visibility: 'hidden' }}>investors.</span>
              <span style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }}>
                {word}<span style={{ animation: 'pulse 1s infinite' }}>|</span>
              </span>
            </span>
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.45, maxWidth: 540, color: 'rgba(10,10,10,0.72)', margin: '32px 0 40px' }}>
            Founders building the next thing. Together.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <a href="https://app.crewofbuilders.com/login" style={{ ...cobStyles.applyBtn, padding: '18px 26px', fontSize: 15, borderRadius: 12, textDecoration: "none" }}>
              Join the Crew <CrewIcon.Arrow s={15} />
            </a>
            <span style={{ fontSize: 13, color: 'rgba(10,10,10,0.55)' }}>Instant access after onboarding.</span>
          </div>
        </div>

        <div style={{
          position: 'relative',
          borderRadius: 22,
          overflow: 'hidden',
          aspectRatio: '16 / 9',
          boxShadow: '0 30px 70px rgba(255,90,31,0.25)',
        }}>
          <iframe
            src="https://www.youtube.com/embed/ZdJgMSNp24U?autoplay=1&showinfo=0&rel=0&modestbranding=1&controls=1"
            title="Why we started the Crew"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              border: 'none', borderRadius: 22,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export function CobMobHero() {
  const word = useTypewriter();
  return (
    <section style={{ padding: '40px 20px 48px' }}>
      <div style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        aspectRatio: '16 / 9',
        boxShadow: '0 20px 40px rgba(255,90,31,0.22)',
        marginBottom: 32,
      }}>
        <iframe
          src="https://www.youtube.com/embed/ZdJgMSNp24U?autoplay=1&showinfo=0&rel=0&modestbranding=1&controls=1"
          title="Why we started the Crew"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%',
            border: 'none', borderRadius: 16,
          }}
        />
      </div>

      <h1 style={{
        fontSize: 53, lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.035em',
        margin: '0 0 16px',
      }}>
        Builders build<br />
        <span style={{ color: CREW.orange, position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
          <span style={{ visibility: 'hidden' }}>with investors.</span>
          <span style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }}>
            with {word}<span style={{ animation: 'pulse 1s infinite' }}>|</span>
          </span>
        </span>
      </h1>
      <p style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(10,10,10,0.72)', margin: '0 0 24px' }}>
        Founders building the next thing. Together.
      </p>
      <a href="https://app.crewofbuilders.com/login" style={{
        background: CREW.orange, color: '#fff', border: 'none',
        padding: '16px 22px', borderRadius: 12, fontSize: 15, fontWeight: 600,
        cursor: 'pointer', fontFamily: 'inherit', width: '100%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        marginBottom: 12, textDecoration: 'none', boxSizing: 'border-box',
      }}>
        Join the Crew →
      </a>
      <div style={{ textAlign: 'center', fontSize: 12, color: 'rgba(10,10,10,0.55)' }}>
        Instant access after onboarding
      </div>
    </section>
  );
}
