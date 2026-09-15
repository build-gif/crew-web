"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { CrewIcon } from "@/components/ui/crew-shared";

// Snapshot of the public part of the Pitch Day #1 briefs (investor room).
// Traction, clients and asks stay in the room: founders shared those with
// investors, not with the open web.
const STARTUPS = [
  {
    name: "Nomos",
    logo: "/assets/pitch-day-1/nomos-logo.png",
    sector: "AI / Data",
    stage: "Seed",
    line: "Harvey for compliance: Nomos does the regulatory and compliance work, at software margins.",
    founder: "Marcelo Bissuh",
    role: "CEO & Founder",
    photo: "/assets/pitch-day-1/nomos-lead.jpg",
  },
  {
    name: "Sirius Signals",
    logo: "/assets/pitch-day-1/sirius-logo.png",
    sector: "FinTech",
    stage: "Pre-seed",
    line: "Strava for investing: a social layer on top of brokerages, with real trades, verified returns and leaderboards with friends.",
    founder: "Diego Arantes",
    role: "Co-founder & CPO",
    photo: "/assets/pitch-day-1/sirius-lead.jpg",
  },
  {
    name: "Bido",
    logo: "/assets/pitch-day-1/bido-logo.jpg",
    sector: "AI / Data",
    stage: "Pre-seed",
    line: "Turning the whole internet into one big marketplace.",
    founder: "Pedro Nagamine",
    role: "CEO",
    photo: "/assets/pitch-day-1/bido-lead.jpg",
  },
  {
    name: "Lummen AI",
    logo: "/assets/pitch-day-1/lummen-logo.webp",
    sector: "AI / Data",
    stage: "Pre-seed",
    line: "AI agents built on real work data.",
    founder: "Daniel Soria",
    role: "Founder",
    photo: "/assets/pitch-day-1/lummen-lead.jpg",
  },
  {
    name: "Raras Health",
    logo: "/assets/pitch-day-1/raras-logo.jpg",
    sector: "HealthTech",
    stage: "Pre-seed",
    line: "The AI infrastructure for rare disease. Free for every doctor and patient; pharma, health systems and government pay.",
    founder: "Dimas Timmers",
    role: "Founder",
    photo: "/assets/pitch-day-1/raras-lead.jpg",
  },
];

const AUTOPLAY_MS = 6500;

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PitchDayPastLineup() {
  const total = STARTUPS.length;
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const touchX = useRef(null);

  const go = useCallback((delta) => setIndex((i) => (i + delta + total) % total), [total]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [total]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="pd-section pd-past">
      <div className="pd-wrap">
        <div className="pd-past-top">
          <div className="pd-head">
            <div className="pd-kicker">Pitch Day #1 · July 2026</div>
            <h2>
              The line-up from <span className="pd-o">Pitch Day #1.</span>
            </h2>
            <p className="pd-h-sub">Five founders from the Crew, ten minutes each, in front of 30+ investors.</p>
          </div>
          <div className="pd-car-ctrls">
            <button type="button" className="pd-car-btn" onClick={() => go(-1)} aria-label="Previous startup">
              <span className="pd-car-prev"><CrewIcon.Arrow s={16} /></span>
            </button>
            <span className="pd-car-count" aria-live="polite">
              {pad(index + 1)} / {pad(total)}
            </span>
            <button type="button" className="pd-car-btn" onClick={() => go(1)} aria-label="Next startup">
              <CrewIcon.Arrow s={16} />
            </button>
          </div>
        </div>

        <div
          className="pd-carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
          onFocus={() => { paused.current = true; }}
          onBlur={() => { paused.current = false; }}
          onTouchStart={(e) => { paused.current = true; touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current !== null) {
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            }
            touchX.current = null;
          }}
        >
          <div className="pd-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {STARTUPS.map((s, i) => (
              <article
                className="pd-slide"
                key={s.name}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${s.name}`}
                aria-hidden={i !== index}
              >
                <div className="pd-slide-main">
                  <div className="pd-slide-brand">
                    <span className={`pd-slide-logo${s.logo ? "" : " pd-slide-logo-text"}`}>
                      {s.logo ? <img src={s.logo} alt="" /> : initials(s.name)}
                    </span>
                    <span className="pd-slide-num">{pad(i + 1)}</span>
                  </div>
                  <h3>{s.name}</h3>
                  <div className="pd-slide-tags">
                    <span>{s.sector}</span>
                    <span>{s.stage}</span>
                  </div>
                  <p className="pd-slide-line">{s.line}</p>
                </div>
                <div className="pd-slide-founder">
                  <img src={s.photo} alt={s.founder} />
                  <div className="pd-slide-who">
                    <div className="pd-slide-fname">{s.founder}</div>
                    <div className="pd-slide-frole">{s.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pd-dots">
          {STARTUPS.map((s, i) => (
            <button
              type="button"
              key={s.name}
              className={`pd-dot-btn${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.name}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
