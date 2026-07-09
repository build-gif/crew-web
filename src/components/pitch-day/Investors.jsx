"use client";

const VC_LOGOS = [
  { name: "Valutia", file: "vc-valutia.png" },
  { name: "Verve Capital", file: "vc-verve.png", dark: true },
  { name: "Norte", file: "vc-norte.png" },
  { name: "Kfund", file: "vc-kfund.png" },
  { name: "Strive", file: "vc-strive.png" },
];

export function PitchDayInvestors() {
  return (
    <section className="pd-section">
      <div className="pd-wrap">
        <div className="pd-head">
          <div className="pd-kicker">In the room</div>
          <h2>Investors joining our <span className="pd-o">Pitch Day.</span></h2>
          <p className="pd-h-sub">Funds and angels, watching the pitches right alongside the Crew.</p>
        </div>
        <div className="pd-logo-grid">
          {VC_LOGOS.map((vc) => (
            <div className={`pd-logo-cell${vc.dark ? " pd-logo-cell-dark" : ""}`} key={vc.file}>
              <img src={`/assets/${vc.file}`} alt={vc.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
