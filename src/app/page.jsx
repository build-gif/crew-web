"use client";
import React, { useState, useEffect } from "react";
import { Wordmark, MonoAccent, Divider, Reveal, CrewIcon, CREW_TOKENS, CREW_MEMBERS } from "@/components/ui/crew-shared";

// Crew of Builders — single homepage, repositioned.
// Thesis: a community where builders show what they're building and learn from each other.
//
// Layout:
//   1. Hero — "Builders build / near builders." (side-by-side first line)
//   2. Marquee logo strip (logo as personality anchor — moderate motion)
//   3. The feed — what crew members shipped this month + what they're learning
//      (this is the protagonist; replaces the directory grid)
//   4. How the room works — 3 short habits, not features
//   5. Batch 01: Credit — secondary pillar
//   6. WE Heart honest context
//   7. Apply CTA + footer

const CREW = typeof CREW_TOKENS !== 'undefined' ? CREW_TOKENS : { ink:'#111', cream:'#F5F1E8', mint:'#B8E0C8', sand:'#F5E6A8', whisper:'#E8E4DA', ash:'#6B6B6B' };

const cobStyles = {
  page: {
    background: CREW.cream, color: CREW.ink,
    fontFamily: '"Space Grotesk","Inter",ui-sans-serif,system-ui,sans-serif',
    fontFeatureSettings: '"ss01","cv11"',
    minHeight:'100%', width:'100%', overflowX:'hidden',
    letterSpacing:'-0.01em',
  },
  h1: {
    fontSize: 'clamp(64px, 8.2vw, 132px)',
    lineHeight: 0.88, fontWeight: 700, letterSpacing: '-0.04em',
    margin: 0,
  },
  h2: {
    fontSize: 'clamp(40px, 5vw, 76px)',
    lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.035em',
    margin: 0,
  },
  kicker: {
    fontSize: 11, fontWeight: 700,
    letterSpacing: '0.18em', textTransform: 'uppercase',
  },
  applyBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: CREW.ink, color: CREW.cream,
    padding: '14px 22px', border: 'none', borderRadius: 10,
    fontSize: 14, fontWeight: 600, cursor: 'pointer',
  },
};

// ─────────────────────────────────────────────
// Topbar — minimal: logo mark + apply only.
// (Header used to have Why/What/For who/etc — user asked to remove.)
// ─────────────────────────────────────────────
function CobTopBar() {
  return (
    <div style={{
      position:'sticky', top:0, zIndex:50,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'16px 32px',
      background: 'rgba(245,239,230,0.86)',
      backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
      borderBottom:'1px solid rgba(10,10,10,0.08)',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <img src="assets/crew-logo-black.png" style={{height:28, width:'auto', display:'block'}}/>
        <span style={{fontSize:13, fontWeight:700, letterSpacing:'0.02em', textTransform:'uppercase'}}>
          Crew of Builders
        </span>
      </div>
      <button style={cobStyles.applyBtn}>
        Apply <CrewIcon.Arrow s={14}/>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO
// "Builders build" sits side-by-side on one line; "near builders." underneath.
// No secondary CTA per user feedback.
// ─────────────────────────────────────────────
function CobHero() {
  return (
    <section style={{padding:'88px 32px 72px', position:'relative'}}>
      <div style={{maxWidth: 1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1.15fr 1fr', gap:64, alignItems:'center'}}>
        <div>
          <h1 style={{...cobStyles.h1, fontSize:'clamp(56px, 7vw, 108px)'}}>
            Builders build <span style={{color:CREW.orange}}>near builders.</span>
          </h1>
          <p style={{fontSize:20, lineHeight:1.45, maxWidth: 540, color:'rgba(10,10,10,0.72)', margin:'32px 0 40px'}}>
            A community of founders showing what they’re building and learning from each other.
          </p>
          <div style={{display:'flex', alignItems:'center', gap:18}}>
            <button style={{...cobStyles.applyBtn, padding:'18px 26px', fontSize:15, borderRadius:12}}>
              Apply to the Crew <CrewIcon.Arrow s={15}/>
            </button>
            <span style={{fontSize:13, color:'rgba(10,10,10,0.55)'}}>Reviewed by a human within a week.</span>
          </div>
        </div>

        {/* Logo as protagonist — black slab, badges */}
        <div style={{
          background: CREW.ink, borderRadius: 28, padding: 56,
          aspectRatio:'1/1',
          position:'relative', overflow:'hidden',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <img src="assets/crew-logo-white.png" style={{width:'78%', height:'auto', display:'block'}}/>
          <div style={{position:'absolute', top:18, left:22, fontSize:11, color:'rgba(245,239,230,0.55)', fontWeight:700, letterSpacing:'0.16em'}}>EST. 2026 · SP</div>
          <div style={{position:'absolute', top:18, right:22, fontSize:11, color:CREW.orange, fontWeight:700, letterSpacing:'0.16em', display:'flex', alignItems:'center', gap:6}}>
            <span style={{width:6,height:6,borderRadius:'50%', background:CREW.orange}}/> APPLICATIONS OPEN
          </div>
          <div style={{position:'absolute', bottom:18, left:22, right:22, display:'flex', justifyContent:'space-between', fontSize:11, color:'rgba(245,239,230,0.55)', fontWeight:700, letterSpacing:'0.16em'}}>
            <span>№ 001</span>
            <span>BY WE HEART ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MEMBERS SHOWCASE — Circle-style portrait grid.
// Replaces marquee + feed (community hasn't started, so no real shipped/learning posts yet).
// Frames the founders themselves as the protagonist.
// ─────────────────────────────────────────────
function CobMembers() {
  const members =(typeof window !== 'undefined' ? window : {}).CREW_MEMBERS || [].slice(0, 8);
  // Portrait card colors — orange/cream/ink rotation, brand-locked
  const swatches = [
    { bg:'#FF5A1F', name:'#0A0A0A', role:'rgba(10,10,10,0.7)' },
    { bg:'#0A0A0A', name:'#F5EFE6', role:'rgba(245,239,230,0.7)' },
    { bg:'#F5EFE6', name:'#0A0A0A', role:'rgba(10,10,10,0.65)' },
    { bg:'#1A1A1A', name:'#FF5A1F', role:'rgba(245,239,230,0.7)' },
    { bg:'#FFE0CC', name:'#0A0A0A', role:'rgba(10,10,10,0.7)' },
    { bg:'#FF7A45', name:'#0A0A0A', role:'rgba(10,10,10,0.75)' },
  ];

  return (
    <section style={{padding:'112px 32px 88px', background:'#FFFFFF', borderTop:'1px solid rgba(10,10,10,0.08)'}}>
      <div style={{maxWidth: 1280, margin:'0 auto'}}>
        {/* Section head — left, low-key, directory-style */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'baseline',
          flexWrap:'wrap', gap: 24, marginBottom: 40,
          paddingBottom: 24, borderBottom:'1px solid rgba(10,10,10,0.12)',
        }}>
          <div style={{display:'flex', alignItems:'baseline', gap: 24, flexWrap:'wrap'}}>
            <h2 style={{
              fontSize: 'clamp(28px, 3.2vw, 44px)',
              fontWeight: 700, letterSpacing:'-0.025em', margin: 0, lineHeight: 1,
            }}>Already in.</h2>
            <span style={{fontSize:14, color:'rgba(10,10,10,0.45)'}}>
              Builders already in the community.
            </span>
          </div>
          <span style={{...cobStyles.kicker, fontSize:11, color:'rgba(10,10,10,0.4)'}}>↓ More joining</span>
        </div>

        {/* Portrait grid — denser, like a press contact-sheet */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 12,
        }}>
          {members.map((m, i) => {
            const sw = swatches[i % swatches.length];
            const initials = m.name.split(' ').map(n => n[0]).slice(0,2).join('');
            return (
              <article
                key={i}
                style={{
                  position:'relative',
                  background: sw.bg,
                  borderRadius: 16,
                  aspectRatio:'3 / 4',
                  overflow:'hidden',
                  cursor:'pointer',
                  transition:'transform .25s cubic-bezier(.2,.8,.3,1), box-shadow .25s',
                }}
                onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 18px 40px rgba(10,10,10,0.18)'; }}
                onMouseLeave={(e)=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
              >
                {/* Portrait slot — initials placeholder, swap with real photo later */}
                <div style={{
                  position:'absolute', inset:0,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'clamp(64px, 7vw, 130px)', fontWeight:700, letterSpacing:'-0.04em',
                  color: sw.name === '#0A0A0A' ? 'rgba(10,10,10,0.14)' : 'rgba(245,239,230,0.18)',
                  lineHeight:1, userSelect:'none',
                }}>{initials}</div>

                {/* Soft gradient at the bottom for legibility */}
                <div style={{
                  position:'absolute', left:0, right:0, bottom:0, height:'55%',
                  background: sw.name === '#0A0A0A'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.0) 30%, rgba(0,0,0,0.0) 100%)'
                    : 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)',
                  pointerEvents:'none',
                }}/>

                {/* Name + role overlay */}
                <div style={{
                  position:'absolute', left: 18, right: 18, bottom: 18,
                  zIndex: 2,
                }}>
                  <div style={{
                    fontSize:18, fontWeight:700, lineHeight:1.05, letterSpacing:'-0.02em',
                    color: sw.name, marginBottom: 6,
                  }}>{m.name}</div>
                  <div style={{
                    fontSize:11, fontWeight:500, lineHeight:1.35,
                    color: sw.role,
                  }}>
                    <span style={{fontWeight:600}}>{m.co}</span> · {m.line}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CobFeed() {
  const [tab, setTab] = React.useState('shipped'); // 'shipped' | 'learning'
  const [hovered, setHovered] = React.useState(null);
  const members =(typeof window !== 'undefined' ? window : {}).CREW_MEMBERS || [];

  return (
    <section style={{padding:'112px 32px 88px'}}>
      <div style={{maxWidth: 1280, margin:'0 auto'}}>
        {/* Section head */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:32, marginBottom: 48}}>
          <div>
            <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 14}}>The feed</div>
            <h2 style={cobStyles.h2}>
              See what the<br/>crew is building<br/>this week.
            </h2>
          </div>
          <div style={{maxWidth: 380, fontSize:16, lineHeight:1.55, color:'rgba(10,10,10,0.65)'}}>
            <p style={{margin:'0 0 14px'}}>
              The community runs on members posting what they shipped and what they're stuck on. Once you're in, you do the same.
            </p>
            <p style={{margin:0, fontSize:13, color:'rgba(10,10,10,0.45)'}}>
              {members.length} active builders · updated weekly
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{display:'flex', gap:8, marginBottom: 28, alignItems:'center', flexWrap:'wrap'}}>
          {[
            { id:'shipped',  label:'Shipped this month' },
            { id:'learning', label:'Learning out loud' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: tab === t.id ? CREW.ink : 'transparent',
                color: tab === t.id ? CREW.cream : CREW.ink,
                border: tab === t.id ? '1px solid '+CREW.ink : '1px solid '+CREW.line,
                padding:'10px 16px', borderRadius:999,
                fontSize:13, fontWeight:600, cursor:'pointer',
                fontFamily:'inherit', letterSpacing:'-0.005em',
              }}
            >{t.label}</button>
          ))}
          <span style={{fontSize:12, color:'rgba(10,10,10,0.4)', marginLeft: 8}}>
            ↳ This is what membership feels like.
          </span>
        </div>

        {/* Cards */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',
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
                  transition:'transform .25s cubic-bezier(.2,.8,.3,1), box-shadow .25s, border-color .25s',
                  transform: isHov ? 'translateY(-3px)' : 'none',
                  boxShadow: isHov ? '0 14px 32px rgba(10,10,10,0.10)' : '0 1px 0 rgba(10,10,10,0.02)',
                  display:'flex', flexDirection:'column', gap: 14,
                }}
              >
                {/* Header row: avatar + name + stage */}
                <header style={{display:'flex', alignItems:'center', gap:12}}>
                  <div style={{width:44,height:44,borderRadius:'50%',overflow:'hidden',background:CREW.ink, flexShrink:0}}>
                    <img src={m.photo} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                  </div>
                  <div style={{minWidth:0, flex:1}}>
                    <div style={{fontSize:14, fontWeight:600, lineHeight:1.2, marginBottom:2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                      {m.name}
                    </div>
                    <div style={{fontSize:12, color:'rgba(10,10,10,0.55)', display:'flex', alignItems:'center', gap:6}}>
                      <span style={{color:CREW.orange, fontWeight:600}}>{m.co}</span>
                      <span>·</span>
                      <span>{m.city}</span>
                    </div>
                  </div>
                  <span style={{
                    fontSize:10, fontWeight:700, letterSpacing:'0.1em',
                    padding:'4px 8px', borderRadius:4,
                    background: 'rgba(10,10,10,0.06)', color:'rgba(10,10,10,0.6)',
                    flexShrink:0,
                  }}>{m.stage.toUpperCase()}</span>
                </header>

                {/* Tag */}
                <div style={{...cobStyles.kicker, color: tab === 'shipped' ? CREW.orange : 'rgba(10,10,10,0.5)', fontSize:10}}>
                  {tab === 'shipped' ? '→ Shipped' : '~ Learning'}
                </div>

                {/* Body */}
                <p style={{margin:0, fontSize:15, lineHeight:1.45, color:'rgba(10,10,10,0.85)'}}>
                  {body}
                </p>

                {/* Footer */}
                <footer style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'auto', paddingTop:8, borderTop:'1px solid rgba(10,10,10,0.06)', fontSize:12, color:'rgba(10,10,10,0.5)'}}>
                  <span>{m.role}</span>
                  <span style={{display:'inline-flex', alignItems:'center', gap:4, fontWeight:600, color: isHov ? CREW.orange : 'rgba(10,10,10,0.5)', transition:'color .2s'}}>
                    Open <CrewIcon.Arrow s={11}/>
                  </span>
                </footer>
              </article>
            );
          })}

          {/* Trailing "could be you" tile */}
          <div style={{
            background:'transparent',
            border:'2px dashed rgba(10,10,10,0.18)',
            borderRadius:16, padding: 20,
            display:'flex', flexDirection:'column', justifyContent:'space-between',
            minHeight: 240,
          }}>
            <div>
              <div style={{...cobStyles.kicker, color:'rgba(10,10,10,0.4)', fontSize:10, marginBottom: 12}}>
                Empty seat
              </div>
              <div style={{fontSize:22, fontWeight:700, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom: 10}}>
                Your post goes<br/>here next.
              </div>
              <p style={{fontSize:13, color:'rgba(10,10,10,0.6)', lineHeight:1.5, margin:0}}>
                Apply, get reviewed, post what you shipped this week.
              </p>
            </div>
            <button style={{
              alignSelf:'flex-start',
              background: CREW.ink, color: CREW.cream,
              border:'none', padding:'12px 16px', borderRadius:8,
              fontSize:13, fontWeight:600, cursor:'pointer',
              display:'inline-flex', alignItems:'center', gap:8, marginTop: 16,
            }}>
              Apply <CrewIcon.Arrow s={12}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HOW THE ROOM RUNS — concrete weekly + monthly rituals.
// Replaces abstract "habits" with what actually happens.
// ─────────────────────────────────────────────
function CobHabits() {
  const rituals = [
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
  return (
    <section style={{padding:'112px 32px', background:'#FFFFFF', borderTop:'1px solid rgba(10,10,10,0.08)', borderBottom:'1px solid rgba(10,10,10,0.08)'}}>
      <div style={{maxWidth: 1280, margin:'0 auto'}}>
        <div style={{maxWidth: 820, marginBottom: 56}}>
          <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 14}}>How the room runs</div>
          <h2 style={cobStyles.h2}>
            A rhythm,<br/>not a syllabus.
          </h2>
          <p style={{fontSize:18, lineHeight:1.5, color:'rgba(10,10,10,0.65)', margin:'24px 0 0', maxWidth: 640}}>
            Four repeating moments a month. Async by default, live when it matters. You'll know what's happening and when — no fear of missing out, no homework.
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap: 16}}>
          {rituals.map((r, i) => (
            <div key={i} style={{
              background: CREW.cream, borderRadius: 18,
              padding: 28, minHeight: 260,
              display:'flex', flexDirection:'column', gap: 14,
              borderTop: `3px solid ${i < 2 ? CREW.orange : CREW.ink}`,
            }}>
              <div style={{...cobStyles.kicker, fontSize:10, color: CREW.orange}}>{r.cadence}</div>
              <div style={{fontSize:26, fontWeight:700, lineHeight:1.0, letterSpacing:'-0.025em'}}>{r.title}</div>
              <p style={{margin:0, fontSize:14, lineHeight:1.55, color:'rgba(10,10,10,0.72)'}}>{r.body}</p>
              <div style={{marginTop:'auto', fontSize:11, fontWeight:600, color:'rgba(10,10,10,0.45)', letterSpacing:'0.04em', paddingTop:14, borderTop:'1px solid rgba(10,10,10,0.08)'}}>{r.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// WHAT MEMBERS GET — three pillars.
// 1. Show what you're building + follow others
// 2. Exclusive expert events
// 3. First-cheque path with WE Heart
// ─────────────────────────────────────────────
function CobBatch() {
  const pillars = [
    {
      kicker: '01',
      title: 'Get your work seen.',
      body: 'Every member gets a founder profile. What you ship gets shared through our channels and inside the room.',
      bullets: ['Public founder profile', 'Amplified by the Crew', 'Read by other founders'],
    },
    {
      kicker: '02',
      title: 'Operators in the room.',
      body: 'Working sessions every month with founders who’ve built what you’re building. Recorded, members only.',
      bullets: ['Live monthly sessions', 'Members-only library', 'Dinners in São Paulo'],
    },
    {
      kicker: '03',
      title: 'A real shot at first check.',
      body: 'WE Heart writes first checks. Being in the Crew is the most natural way for that conversation to start.',
      bullets: ['Direct line to WE Heart', 'No obligation either way', 'Intros to capital and customers'],
    },
  ];
  return (
    <section style={{padding:'120px 32px', background: CREW.cream}}>
      <div style={{maxWidth: 1280, margin:'0 auto'}}>
        <div style={{maxWidth: 820, marginBottom: 64}}>
          <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 14}}>What we put in your corner</div>
          <h2 style={cobStyles.h2}>
            Three things,<br/>in your corner.
          </h2>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap: 18}}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: i === 1 ? CREW.ink : '#FFFFFF',
              color: i === 1 ? CREW.cream : CREW.ink,
              borderRadius: 22, padding: 36,
              display:'flex', flexDirection:'column', gap: 18,
              border: i === 1 ? 'none' : '1px solid rgba(10,10,10,0.08)',
            }}>
              <div style={{
                ...cobStyles.kicker, color: CREW.orange, fontSize: 13,
                display:'flex', alignItems:'center', gap: 10,
              }}>
                <span style={{
                  width:32, height:32, borderRadius:'50%',
                  background: CREW.orange, color: CREW.ink,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:13, fontWeight:700, letterSpacing:0,
                }}>{p.kicker}</span>
              </div>
              <h3 style={{fontSize:34, fontWeight:700, lineHeight:0.98, letterSpacing:'-0.03em', margin:0, whiteSpace:'pre-line'}}>{p.title}</h3>
              <p style={{margin:0, fontSize:15, lineHeight:1.55, color: i === 1 ? 'rgba(245,239,230,0.78)' : 'rgba(10,10,10,0.72)'}}>
                {p.body}
              </p>
              <ul style={{margin:'8px 0 0', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10}}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize:13, color: i === 1 ? 'rgba(245,239,230,0.85)' : 'rgba(10,10,10,0.78)',
                    paddingLeft: 18, position:'relative', lineHeight:1.45, fontWeight: 500,
                  }}>
                    <span style={{position:'absolute', left:0, top:7, width:8, height:2, background: CREW.orange}}/>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FAQ — the de-risk section. Honest answers to the questions
// a founder is asking before hitting Apply.
// ─────────────────────────────────────────────
function CobFAQ() {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    {
      q: 'Is this a course or an accelerator?',
      a: 'Neither. There\'s no curriculum and no demo day. The Crew is a community where founders show their work to each other and learn out loud. If you want a syllabus, this isn\'t it.',
    },
    {
      q: 'How much time does it take?',
      a: 'Honestly: about 30 minutes a week if you want value, an hour if you want to give back. Most activity is async. The monthly expert session is 90 minutes; the dinner is optional.',
    },
    {
      q: 'How much does it cost?',
      a: 'Nothing. The Crew is free for accepted founders. WE Heart funds it because we\'d rather know founders early than write cold cheques.',
    },
    {
      q: 'Will WE Heart try to invest in my company?',
      a: 'Maybe — only if it fits. Joining the Crew creates zero obligation. Many members never raise from WE Heart. The point of the room is the room.',
    },
    {
      q: 'Who gets in?',
      a: 'Founders building serious companies — pre-seed to Series A — who care more about shipping than networking. Brazilian-context bias. Strong preference for people who post their work in public.',
    },
    {
      q: 'How does the application work?',
      a: 'A short form (10 minutes), reviewed by a human within a week. We\'ll either invite you in, suggest a better fit, or tell you why now isn\'t the right time.',
    },
  ];
  return (
    <section style={{padding:'120px 32px', background:'#FFFFFF'}}>
      <div style={{maxWidth: 980, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom: 56}}>
          <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 14}}>Honest questions</div>
          <h2 style={cobStyles.h2}>
            What you're<br/>actually wondering.
          </h2>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap: 0, borderTop:'1px solid rgba(10,10,10,0.1)'}}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{borderBottom:'1px solid rgba(10,10,10,0.1)'}}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width:'100%', textAlign:'left', background:'transparent', border:'none',
                    padding:'24px 0', cursor:'pointer', fontFamily:'inherit',
                    display:'flex', justifyContent:'space-between', alignItems:'center', gap: 24,
                  }}
                >
                  <span style={{fontSize:'clamp(20px, 2vw, 26px)', fontWeight:700, letterSpacing:'-0.02em', lineHeight:1.2, color: CREW.ink}}>{f.q}</span>
                  <span style={{
                    width:36, height:36, borderRadius:'50%',
                    background: isOpen ? CREW.orange : 'rgba(10,10,10,0.06)',
                    color: isOpen ? CREW.ink : CREW.ink,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:18, fontWeight:700, flexShrink:0,
                    transition:'background .25s, transform .25s',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 240 : 0,
                  overflow:'hidden',
                  transition:'max-height .3s cubic-bezier(.2,.8,.3,1), padding-bottom .3s',
                  paddingBottom: isOpen ? 24 : 0,
                }}>
                  <p style={{margin:0, fontSize:16, lineHeight:1.6, color:'rgba(10,10,10,0.7)', maxWidth: 720}}>
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

// ─────────────────────────────────────────────
// WE HEART honest context — explicit, mid-page.
// ─────────────────────────────────────────────
function CobWeHeart() {
  return (
    <section style={{padding:'112px 32px', background: CREW.ink, color: CREW.cream}}>
      <div style={{maxWidth: 1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.45fr', gap: 64}}>
        <div>
          <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 14}}>Run by WE Heart</div>
          <h2 style={{...cobStyles.h2, color: CREW.cream}}>
            Saying it<br/>out loud.
          </h2>
          <div style={{
            marginTop: 36,
            display:'inline-flex', alignItems:'center', gap:10,
            fontSize:13, color:'rgba(245,239,230,0.7)',
            fontWeight:600, letterSpacing:'0.04em', textTransform:'uppercase',
          }}>
            <span style={{width:8,height:8,background:CREW.orange,borderRadius:'50%'}}/>
            weheart.vc ↗
          </div>
        </div>
        <div style={{fontSize:19, lineHeight:1.55, color:'rgba(245,239,230,0.88)'}}>
          <p style={{margin:'0 0 22px'}}>
            The Crew is run by <strong style={{color:CREW.cream}}>WE Heart</strong>, a venture builder. Their thesis: <strong style={{color:CREW.orange}}>be the first cheque</strong> — which means knowing founders before they have a CNPJ.
          </p>
          <p style={{margin:'0 0 22px'}}>
            The Crew is how that happens. It's where we meet you while you're still figuring it out, watch what you ship, and learn alongside you.
          </p>
          <p style={{margin: 0, color:'rgba(245,239,230,0.6)', fontSize:15, paddingTop: 24, borderTop:'1px solid rgba(245,239,230,0.14)'}}>
            We're saying this here because senior operators detect funnel-disguised-as-community. Joining doesn't mean we'll invest. Not joining doesn't mean we won't. The Crew is its own thing — useful on its own, with or without WE Heart.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// APPLY CTA + FOOTER
// ─────────────────────────────────────────────
function CobApply() {
  return (
    <section style={{padding:'120px 32px 88px'}}>
      <div style={{maxWidth: 1100, margin:'0 auto', textAlign:'left'}}>
        <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 16}}>Apply</div>
        <h2 style={{...cobStyles.h2, fontSize:'clamp(56px, 7vw, 112px)'}}>
          You build.<br/>We're listening.
        </h2>
        <p style={{fontSize:19, lineHeight:1.5, margin:'32px 0 40px', maxWidth: 600, color:'rgba(10,10,10,0.7)'}}>
          Tell us what you're building, what you've shipped lately, and what you're stuck on. A human reads every application within a week.
        </p>
        <div style={{display:'flex', gap:14, alignItems:'center', flexWrap:'wrap'}}>
          <button style={{
            background: CREW.ink, color: CREW.cream,
            border:'none', padding:'20px 30px', borderRadius:12,
            fontSize:16, fontWeight:700, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:10,
          }}>
            Apply to the Crew <CrewIcon.Arrow s={16}/>
          </button>
          <span style={{fontSize:13, color:'rgba(10,10,10,0.5)'}}>~4 minutes · Free</span>
        </div>
      </div>
    </section>
  );
}

function CobFooter() {
  return (
    <footer style={{background: CREW.ink, color: CREW.cream, padding:'56px 32px 28px'}}>
      <div style={{maxWidth: 1280, margin:'0 auto'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr', gap:32,
          paddingBottom: 36, borderBottom:'1px solid rgba(245,239,230,0.14)',
          alignItems:'flex-start',
        }}>
          <div>
            <img src="assets/crew-logo-white.png" style={{width: 130, marginBottom: 18}}/>
            <div style={{fontSize:14, color:'rgba(245,239,230,0.65)', maxWidth: 360, lineHeight:1.5}}>
              A community of founders showing what they're building and learning from each other.
            </div>
          </div>
          <div>
            <div style={{...cobStyles.kicker, color:'rgba(245,239,230,0.4)', marginBottom: 14}}>Join</div>
            <div style={{display:'flex', flexDirection:'column', gap:10, fontSize:14}}>
              <span>Apply to the Crew</span>
              <span>Apply to Batch 01</span>
            </div>
          </div>
          <div>
            <div style={{...cobStyles.kicker, color:'rgba(245,239,230,0.4)', marginBottom: 14}}>Run by</div>
            <div style={{display:'flex', flexDirection:'column', gap:10, fontSize:14}}>
              <span>WE Heart ↗</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', paddingTop: 24, fontSize:12, color:'rgba(245,239,230,0.45)', flexWrap:'wrap', gap: 10}}>
          <span>© 2026 Crew of Builders</span>
          <span>Made in São Paulo</span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// COMPOSE
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// WHAT IS THE CREW — Dani video block, cream/orange brand.
// Sits right after the hero. Mirrors Circle's "What is Circle?" pattern.
// ─────────────────────────────────────────────
function CobWhatIs() {
  return (
    <section style={{padding:'88px 32px 56px'}}>
      <div style={{maxWidth: 1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1.05fr 1fr', gap: 64, alignItems:'center'}}>
        {/* Video card — orange block with portrait slot, type, play button */}
        <div style={{
          position:'relative',
          background: CREW.orange,
          borderRadius: 22, padding: 36, aspectRatio:'4 / 3',
          overflow:'hidden', cursor:'pointer',
          boxShadow:'0 30px 70px rgba(255,90,31,0.25)',
          display:'grid', gridTemplateColumns:'1.15fr 0.85fr', gap: 28,
        }}>
          {/* Left: kicker + title + name */}
          <div style={{position:'relative', display:'flex', flexDirection:'column', justifyContent:'space-between', zIndex:2}}>
            <div>
              <div style={{...cobStyles.kicker, color: CREW.ink, marginBottom:14}}>WATCH · 2:14</div>
              <h3 style={{
                fontSize:'clamp(34px, 3vw, 44px)', lineHeight:0.92, fontWeight:700, letterSpacing:'-0.025em',
                margin:0, color: CREW.ink,
              }}>
                Why we<br/>started the<br/>Crew.
              </h3>
            </div>
            <div style={{fontSize:14, color:'rgba(10,10,10,0.85)', fontWeight:500, lineHeight:1.4}}>
              <strong style={{fontSize:15}}>Daniel Muniz</strong><br/>
              <span style={{color:'rgba(10,10,10,0.65)'}}>Founder, WE Heart</span>
            </div>
          </div>

          {/* Right: portrait slot — placeholder block w/ initials, swap with real photo */}
          <div style={{
            position:'relative', borderRadius: 14, overflow:'hidden',
            background:'linear-gradient(155deg, #FF7A45 0%, #E54810 100%)',
            border:'1px solid rgba(10,10,10,0.12)',
            display:'flex', alignItems:'flex-end', justifyContent:'center',
            padding: 18,
          }}>
            {/* monogram glyph */}
            <div style={{
              position:'absolute', inset:0,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'clamp(80px, 9vw, 130px)', fontWeight:700, letterSpacing:'-0.04em',
              color:'rgba(10,10,10,0.18)', lineHeight:1,
            }}>DM</div>
            {/* hint label */}
            <div style={{
              position:'relative',
              fontSize:10, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase',
              color:'rgba(10,10,10,0.55)',
            }}>Daniel Muniz</div>
          </div>

          {/* play button — overlays bottom-left */}
          <button style={{
            position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)',
            display:'inline-flex', alignItems:'center', gap:10,
            background: CREW.ink, color: CREW.cream, border:'none',
            padding:'12px 22px 12px 14px', borderRadius:999,
            fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:'inherit',
            zIndex: 3, boxShadow:'0 10px 24px rgba(10,10,10,0.25)',
          }}>
            <span style={{
              width:22, height:22, borderRadius:'50%', background: CREW.cream, color: CREW.ink,
              display:'flex', alignItems:'center', justifyContent:'center', fontSize:9,
            }}>▶</span>
            Play
          </button>

          {/* duration chip */}
          <div style={{
            position:'absolute', top:20, right:20,
            background:'rgba(10,10,10,0.75)', color: CREW.cream,
            padding:'4px 10px', borderRadius:999, fontSize:11, fontWeight:600,
            zIndex: 3,
          }}>● 2:14</div>
        </div>

        {/* Right copy */}
        <div>
          <div style={{...cobStyles.kicker, color: CREW.orange, marginBottom: 14}}>What is the Crew?</div>
          <h2 style={{...cobStyles.h2, fontSize:'clamp(40px, 4.6vw, 68px)'}}>
            A community of<br/>founders building<br/><span style={{color: CREW.orange}}>in the open.</span>
          </h2>
          <p style={{fontSize:18, lineHeight:1.55, color:'rgba(10,10,10,0.78)', margin:'24px 0 32px', maxWidth: 540}}>
            The Crew is the community of builders powered by <strong style={{color: CREW.ink}}>WE Heart Impact</strong> — bringing founders, experts, content, and opportunities together.
          </p>
          <button style={{...cobStyles.applyBtn, padding:'16px 24px', fontSize:14, borderRadius:12}}>
            Apply to the Crew <CrewIcon.Arrow s={14}/>
          </button>
        </div>
      </div>
    </section>
  );
}

function CobPage() {
  return (
    <div style={cobStyles.page}>
      <CobTopBar/>
      <CobHero/>
      <CobWhatIs/>
      <CobBatch/>
      <CobMembers/>
      <CobApply/>
      <CobFAQ/>
      <CobFooter/>
    </div>
  );
}




export default CobPage;
