"use client";
import { CREW_MEMBERS } from "@/components/ui/crew-shared";
import { cobStyles, mobStyles, CREW } from "./styles";

export function CobMembers() {
  const members = CREW_MEMBERS.slice(0, 7);

  return (
    <section style={{ padding: '112px 32px 88px', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)', overflow: 'visible' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', overflow: 'visible' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          flexWrap: 'wrap', gap: 24, marginBottom: 40,
          paddingBottom: 24, borderBottom: '1px solid rgba(10,10,10,0.12)',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 3.2vw, 44px)',
              fontWeight: 700, letterSpacing: '-0.025em', margin: 0, lineHeight: 1,
            }}>Already in.</h2>
            <span style={{ fontSize: 14, color: 'rgba(10,10,10,0.45)' }}>
              Founders who ship — and show it.
            </span>
          </div>
          <span style={{ ...cobStyles.kicker, fontSize: 11, color: 'rgba(10,10,10,0.4)' }}>↓ Batch 01 is filling.</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoColumns: '1fr',
          gap: 12,
          maxWidth: 1100,
          overflow: 'visible',
        }}>
          {members.map((m, i) => {
            const photoSrc = m.photo.startsWith('/') ? m.photo : `/${m.photo}`;
            const gridRow = i < 4 ? 1 : 2;
            const gridColumn = i < 4 ? i + 1 : i - 3;
            return (
              <article key={i} style={{
                gridRow, gridColumn,
                position: 'relative', background: '#0A0A0A', borderRadius: 16,
                aspectRatio: '3 / 4', overflow: 'hidden', cursor: 'pointer',
                transition: 'transform .25s cubic-bezier(.2,.8,.3,1), box-shadow .25s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(10,10,10,0.18)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <img src={photoSrc} alt={m.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, zIndex: 2 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF' }}>{m.name}</div>
                </div>
              </article>
            );
          })}
          <article style={{
            gridRow: 2, gridColumn: '4 / span 2',
            background: CREW.ink, borderRadius: 16,
            aspectRatio: '3 / 2',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            padding: 28, cursor: 'pointer',
            transition: 'transform .25s cubic-bezier(.2,.8,.3,1), box-shadow .25s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(10,10,10,0.18)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div>
              <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 12 }}>Next Act</div>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: CREW.cream }}>
                Born in the Crew.
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(245,239,230,0.65)', margin: '12px 0 0', maxWidth: 320 }}>
                Founded by Marco Puerari and Gabriel Ribeiro, Next Act was built, launched, and scaled entirely inside the Crew of Builders. A proven market success and the ultimate proof of our execution ecosystem.
              </p>
            </div>
            <a href="https://www.nextact.me/" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: CREW.orange, color: CREW.ink,
              padding: '11px 18px', borderRadius: 8,
              fontSize: 13, fontWeight: 700, textDecoration: 'none',
              alignSelf: 'flex-start',
            }}>
              Explore Next Act ↗
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CobMobMembers() {
  const members = CREW_MEMBERS.slice(0, 6);

  return (
    <section style={{ padding: '56px 20px', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        paddingBottom: 14, marginBottom: 14,
        borderBottom: '1px solid rgba(10,10,10,0.12)',
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>Already in.</h2>
        <span style={{ ...mobStyles.kicker, fontSize: 9, color: 'rgba(10,10,10,0.4)' }}>BATCH 01 IS FILLING.</span>
      </div>
      <p style={{ fontSize: 13, color: 'rgba(10,10,10,0.55)', margin: '0 0 20px' }}>
        Founders who ship — and show it.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {members.map((m, i) => {
          const photoSrc = m.photo.startsWith('/') ? m.photo : `/${m.photo}`;
          return (
            <article key={i} style={{
              position: 'relative', background: '#0A0A0A', borderRadius: 14,
              aspectRatio: '3/4', overflow: 'hidden',
            }}>
              <img
                src={photoSrc}
                alt={m.name}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
              />
              <div style={{
                position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, zIndex: 2 }}>
                <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 3 }}>{m.name}</div>
              </div>
            </article>
          );
        })}
        <article style={{
          gridColumn: 'span 2',
          background: CREW.ink,
          borderRadius: 14,
          aspectRatio: '3 / 2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 20,
        }}>
          <div>
            <div style={{ ...mobStyles.kicker, color: CREW.orange, marginBottom: 10 }}>Next Act</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: CREW.cream }}>
              Elite operators.<br />Ready to build.
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(245,239,230,0.65)', margin: '10px 0 0' }}>
              WE Heart's closed collective of senior talent embedded in high-impact companies.
            </p>
          </div>
          <a
            href="https://www.nextact.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: CREW.orange, color: CREW.ink,
              padding: '10px 14px', borderRadius: 8,
              fontSize: 12, fontWeight: 700, textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Explore Next Act ↗
          </a>
        </article>
      </div>
    </section>
  );
}
