"use client";

export function PitchDayFooter() {
  return (
    <footer className="pd-footer">
      <div className="pd-wrap">
        <div className="pd-row">
          <div>
            <img src="/assets/crew-wordmark.svg" alt="Crew of Builders" />
            <div className="pd-blurb">
              A crew of founders building in the open — sharing what we know and doing the hard parts together.
              Pitch Day is our first time doing it live, in front of the people who can help.
            </div>
          </div>
          <div className="pd-links">
            <a href="/">crewofbuilders.com</a>
            <a href="https://www.weheartimpact.com/" target="_blank" rel="noopener noreferrer">WE Heart ↗</a>
          </div>
        </div>
        <div className="pd-base">
          <span>© 2026 Crew of Builders · Powered by WE Heart Impact</span>
          <span>Made in São Paulo</span>
        </div>
      </div>
    </footer>
  );
}
