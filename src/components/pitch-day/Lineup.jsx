"use client";

const SLOTS = ["01", "02", "03", "04", "05"];

export function PitchDayLineup() {
  return (
    <section className="pd-section pd-lineup">
      <div className="pd-wrap">
        <div className="pd-head">
          <div className="pd-kicker">The line-up</div>
          <h2>Top Entrepreneurs <span className="pd-o">from the Crew</span></h2>
          <p className="pd-h-sub">Handpicked by WE Heart from the applications. We announce all five after applications close on 22 October.</p>
          <div className="pd-reveal-tag">
            <span className="pd-badge">Open</span> Applications in progress
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
