"use client";

const SLOTS = ["01", "02", "03", "04", "05"];

export function PitchDayLineup() {
  return (
    <section className="pd-section pd-lineup">
      <div className="pd-wrap">
        <div className="pd-head">
          <div className="pd-kicker">The line-up</div>
          <h2>You&apos;ll want to <span className="pd-o">meet these five.</span></h2>
          <p className="pd-h-sub">Still being handpicked by WE Heart, one by one. We announce all five on 22 July.</p>
          <div className="pd-reveal-tag">
            <span className="pd-badge">Live</span> Selection in progress
          </div>
        </div>
        <div className="pd-mystery-grid">
          {SLOTS.map((num) => (
            <div className="pd-mystery" key={num}>
              <div className="pd-num">{num}</div>
              <div className="pd-q">?</div>
              <div className="pd-status">TBA</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
