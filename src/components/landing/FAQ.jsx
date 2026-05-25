"use client";
import React, { useState } from "react";
import { cobStyles, CREW } from "./styles";

const FAQS = [
  {
    q: 'Is this a course or an accelerator?',
    a: 'Neither. There is no curriculum and no demo day. The Crew is a curated room of founders actively building and senior operators sharing real problems, real decisions, and real progress. If you\'re looking for structured learning, there are great programs for that. If you\'re looking for a trusted circle of people who will push your thinking — this is it.',
  },
  {
    q: 'How much time does it actually take?',
    a: 'We built this for people who don\'t have time to waste. Most of the community is async. A realistic baseline is about 30 minutes a week. Once a month, there\'s a 90-minute live session. No mandatory calls. No "be active or get removed" pressure.',
  },
  {
    q: 'How much does it cost?',
    a: 'Membership is free for both founders and experts who are accepted. WE Heart Impact funds the Crew because we believe the most valuable thing we can do is be genuinely useful to builders before any investment relationship exists.',
  },
  {
    q: 'Will WE Heart try to invest in my company?',
    a: 'Only if it makes sense for both sides. Joining the Crew creates zero obligation. Many members build and grow without ever raising from WE Heart. If a funding conversation happens, it will be organic. The point of the room is the room.',
  },
  {
    q: 'Who gets in?',
    a: 'Two profiles: Founders building real companies (pre-seed to Series A) and Experts (senior executives/operators with deep domain expertise exploring their entrepreneurial path). Both need to care about substance over optics and be willing to engage with the Brazilian market context.',
  },
  {
    q: 'How does the application work?',
    a: 'A short form (about 10 minutes) reviewed by a human within a week. We don\'t auto-reject and we don\'t use filters. We\'ll reach out with an invitation, a note about timing, or a direct question to learn more before deciding.',
  },
];

export function CobFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ padding: '120px 32px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ ...cobStyles.kicker, color: CREW.orange, marginBottom: 14 }}>Honest questions</div>
          <h2 style={cobStyles.h2}>
            What you're<br />actually wondering.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid rgba(10,10,10,0.1)' }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.1)' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'transparent', border: 'none',
                    padding: '24px 0', cursor: 'pointer', fontFamily: 'inherit',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
                  }}
                >
                  <span style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: CREW.ink }}>{f.q}</span>
                  <span style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: isOpen ? CREW.orange : 'rgba(10,10,10,0.06)',
                    color: CREW.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, fontWeight: 700, flexShrink: 0,
                    transition: 'background .25s, transform .25s',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 240 : 0,
                  overflow: 'hidden',
                  transition: 'max-height .3s cubic-bezier(.2,.8,.3,1), padding-bottom .3s',
                  paddingBottom: isOpen ? 24 : 0,
                }}>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(10,10,10,0.7)', maxWidth: 720 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
