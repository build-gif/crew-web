"use client";

const VC_LOGOS = [
  { name: "Valutia", file: "vc-valutia.png" },
  { name: "Verve Capital", file: "vc-verve.png", icon: true },
  { name: "Norte", file: "vc-norte.png" },
  { name: "Kfund", file: "vc-kfund.png" },
  { name: "Strive", file: "vc-strive.png" },
];

// Funds with investors in the Crew (profiles.investor_fund, Sep 2026). They are
// invited as members; none of them confirmed attendance, so the copy says
// "invited", never "joining".
const CREW_FUNDS = [
  "Alexia Ventures",
  "Alter Global",
  "Angels Way",
  "Astella",
  "Canary",
  "Canastra Ventures",
  "Caravela Capital",
  "Citrino Ventures",
  "Equity Rio",
  "Graphene",
  "GV Angels",
  "Linkin Capital",
  "SC Ventures",
  "Stamina Ventures",
  "WOW",
];

export function PitchDayInvestors() {
  return (
    <section className="pd-section">
      <div className="pd-wrap">
        <div className="pd-head">
          <div className="pd-kicker">In the room</div>
          <h2>Investors from the Crew, <span className="pd-o">invited to Pitch Day #2.</span></h2>
          <p className="pd-h-sub">Funds and angels who are part of the Crew, watching the pitches right alongside the builders.</p>
        </div>
        <div className="pd-logo-grid">
          {VC_LOGOS.map((vc) => (
            <div className={`pd-logo-cell${vc.icon ? " pd-logo-cell-icon" : ""}${vc.dark ? " pd-logo-cell-dark" : ""}`} key={vc.file}>
              <img src={`/assets/${vc.file}`} alt={vc.name} />
            </div>
          ))}
          <div className="pd-logo-cell pd-logo-cell-text" key="angels">
            <span className="pd-logo-text">
              <strong>25+</strong>
              angels
            </span>
          </div>
        </div>
        <div className="pd-fund-wall">
          <p className="pd-fund-label">And funds from across the Crew</p>
          <ul className="pd-fund-list">
            {CREW_FUNDS.map((name) => (
              <li className="pd-fund" key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
