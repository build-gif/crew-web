"use client";
import React, { useState } from "react";
import { CrewIcon, CREW_MEMBERS } from "@/components/ui/crew-shared";
import { cobStyles, CREW } from "./styles";

export function CobFeed() {
  const [tab, setTab] = useState('shipped');
  const [hovered, setHovered] = useState(null);
  const members = CREW_MEMBERS;

  return (
    <section style={{ padding: '112px 32px 88px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32, marginBottom: 48 }}>
          <div>
            <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 14 }}>The feed</div>
            <h2 style={cobStyles.h2}>
              See what the<br />crew is building<br />this week.
            </h2>
          </div>
          <div style={{ maxWidth: 380, fontSize: 16, lineHeight: 1.55, color: 'rgba(10,10,10,0.65)' }}>
            <p style={{ margin: '0 0 14px' }}>
              The community runs on members posting what they shipped and what they're stuck on. Once you're in, you do the same.
            </p>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(10,10,10,0.45)' }}>
              {members.length} active builders · updated weekly
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { id: 'shipped', label: 'Shipped this month' },
            { id: 'learning', label: 'Learning out loud' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: tab === t.id ? CREW.ink : 'transparent',
                color: tab === t.id ? CREW.cream : CREW.ink,
                border: tab === t.id ? '1px solid ' + CREW.ink : '1px solid ' + CREW.line,
                padding: '10px 16px', borderRadius: 999,
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: '-0.005em',
              }}
            >{t.label}</button>
          ))}
          <span style={{ fontSize: 12, color: 'rgba(10,10,10,0.4)', marginLeft: 8 }}>
            ↳ This is what membership feels like.
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {members.map((m, i) => {
            const body = tab === 'shipped' ? m.shipped : m.learning;
            const isHov = hovered === i;
            return (
              <article
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 16, padding: 20,
                  border: `1px solid ${isHov ? 'rgba(255,90,31,0.45)' : 'rgba(10,10,10,0.07)'}`,
                  transition: 'transform .25s cubic-bezier(.2,.8,.3,1), box-shadow .25s, border-color .25s',
                  transform: isHov ? 'translateY(-3px)' : 'none',
                  boxShadow: isHov ? '0 14px 32px rgba(10,10,10,0.10)' : '0 1px 0 rgba(10,10,10,0.02)',
                  display: 'flex', flexDirection: 'column', gap: 14,
                }}
              >
                <header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', background: CREW.ink, flexShrink: 0 }}>
                    <img src={m.photo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2, marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {m.name}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(10,10,10,0.55)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: CREW.orange, fontWeight: 600 }}>{m.co}</span>
                      <span>·</span>
                      <span>{m.city}</span>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                    padding: '4px 8px', borderRadius: 4,
                    background: 'rgba(10,10,10,0.06)', color: 'rgba(10,10,10,0.6)',
                    flexShrink: 0,
                  }}>{m.stage.toUpperCase()}</span>
                </header>

                <div style={{ ...cobStyles.kicker, color: tab === 'shipped' ? CREW.orange : 'rgba(10,10,10,0.5)', fontSize: 10 }}>
                  {tab === 'shipped' ? '→ Shipped' : '~ Learning'}
                </div>

                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.45, color: 'rgba(10,10,10,0.85)' }}>
                  {body}
                </p>

                <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 8, borderTop: '1px solid rgba(10,10,10,0.06)', fontSize: 12, color: 'rgba(10,10,10,0.5)' }}>
                  <span>{m.role}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 600, color: isHov ? CREW.orange : 'rgba(10,10,10,0.5)', transition: 'color .2s' }}>
                    Open <CrewIcon.Arrow s={11} />
                  </span>
                </footer>
              </article>
            );
          })}

          <div style={{
            background: 'transparent',
            border: '2px dashed rgba(10,10,10,0.18)',
            borderRadius: 16, padding: 20,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 240,
          }}>
            <div>
              <div style={{ ...cobStyles.kicker, color: 'rgba(10,10,10,0.4)', fontSize: 10, marginBottom: 12 }}>
                Empty seat
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 10 }}>
                Your post goes<br />here next.
              </div>
              <p style={{ fontSize: 13, color: 'rgba(10,10,10,0.6)', lineHeight: 1.5, margin: 0 }}>
                Apply, get reviewed, post what you shipped this week.
              </p>
            </div>
            <a href="https://app.crewofbuilders.com/login" style={{
              alignSelf: 'flex-start',
              background: CREW.ink, color: CREW.cream,
              border: 'none', padding: '12px 16px', borderRadius: 8,
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
              textDecoration: 'none',
            }}>
              Join the Crew <CrewIcon.Arrow s={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
