"use client";
import { CrewIcon } from "@/components/ui/crew-shared";
import { PITCH_DAY_APPLY_URL } from "@/components/pitch-day/links";

export function PitchDayStakes() {
  return (
    <section className="pd-stakes">
      <div className="pd-wrap">
        <div className="pd-inner">
          <div className="pd-head">
            <div className="pd-kicker">The format</div>
            <h2>Five startups. Ten minutes each.</h2>
            <p className="pd-h-sub">Amazing founders showcasing their thesis to the Crew.</p>
          </div>
          <div className="pd-cols">
            <div className="pd-col">
              <div className="pd-num"><span className="pd-o">5</span></div>
              <div className="pd-d"><b>Startups pitch live.</b> Handpicked from across the Crew.</div>
            </div>
            <div className="pd-col">
              <div className="pd-num"><span className="pd-o">10</span><span className="pd-u">min</span></div>
              <div className="pd-d"><b>Each.</b> Ten focused minutes to pitch, live on stage.</div>
            </div>
            <div className="pd-col">
              <div className="pd-num"><span className="pd-o">1:1</span></div>
              <div className="pd-d"><b>Warm intros.</b> Every investor in the room, one intro away.</div>
            </div>
          </div>
          <div className="pd-stakes-cta">
            <span>Building something? <b>Applications are open until 20 July.</b></span>
            <a className="pd-btn" href={PITCH_DAY_APPLY_URL}>
              Apply to pitch
              <CrewIcon.Arrow s={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
