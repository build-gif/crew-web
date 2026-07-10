"use client";

import { PITCH_DAY_APPLY_URL, PITCH_DAY_EVENT_URL } from "@/components/pitch-day/links";

const PROOF_PHOTOS = [
  "/assets/daniel-silva.png",
  "/assets/builders/gabriel-ribeiro.png",
  "/assets/builders/marco-puerari.png",
  "/assets/builders/nathan-nobrega.png",
  "/assets/builders/pedro-nagamine.png",
];

export function PitchDayFinalCTA() {
  return (
    <section className="pd-final">
      <div className="pd-wrap">
        <div className="pd-commit">
          <div className="pd-commit-eyebrow">Pitch Day · 29 July 2026</div>
          <h2>Sign up for <span className="pd-o">Pitch Day.</span></h2>
          <div className="pd-commit-facts">
            <span><b>29 Jul</b> Wed</span>
            <span className="pd-dot">·</span>
            <span><b>10:00am</b> BRT</span>
            <span className="pd-dot">·</span>
            <span><b>Live</b> online</span>
          </div>
          <div className="pd-cta-row">
            <a className="pd-btn pd-btn-lg" href={PITCH_DAY_EVENT_URL}>Join as investor →</a>
            <a className="pd-btn pd-btn-ghost pd-btn-lg" href={PITCH_DAY_APPLY_URL}>Apply to pitch</a>
          </div>
          <div className="pd-commit-note">Free · Online · No recording</div>
          <div className="pd-commit-proof">
            <div className="pd-stack">
              {PROOF_PHOTOS.map((src) => (
                <img src={src} alt="" key={src} />
              ))}
            </div>
            <span><b>200+ Crew members</b> already invited.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
