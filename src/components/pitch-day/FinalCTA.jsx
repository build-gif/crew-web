"use client";

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
          <h2>Be in the room.<br />There's <span className="pd-o">no replay.</span></h2>
          <div className="pd-commit-facts">
            <span><b>29 Jul</b> Wed</span>
            <span className="pd-dot">·</span>
            <span><b>10:00am</b> BRT</span>
            <span className="pd-dot">·</span>
            <span><b>Live</b> online</span>
          </div>
          <div className="pd-cta-row">
            <a className="pd-btn pd-btn-lg" href="/">Secure your spot →</a>
            <a className="pd-btn pd-btn-ghost pd-btn-lg" href="/apply">Apply to pitch</a>
          </div>
          <div className="pd-commit-note">Free to attend · Live only, no replay — you have to be in the room.</div>
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
