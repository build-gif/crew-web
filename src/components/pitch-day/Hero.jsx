"use client";
import { CrewIcon } from "@/components/ui/crew-shared";
import { PITCH_DAY_APPLY_URL, PITCH_DAY_EVENT_URL } from "@/components/pitch-day/links";

export function PitchDayHero() {
  return (
    <section className="pd-hero">
      <div className="pd-wrap">
        <div className="pd-grid">
          <div>
            <div className="pd-eyebrow">
              <span className="pd-ff">First ever</span>
              <span className="pd-dd">
                <s className="pd-old">Demo Day</s>
                <span className="pd-new">Pitch Day</span>
              </span>
            </div>
            <h1>
              <span className="pd-l1">Five startups. One stage.</span>
              <span className="pd-o">A room full of investors.</span>
            </h1>
            <div className="pd-cta-row">
              <a className="pd-btn" href={PITCH_DAY_EVENT_URL}>
                Save your spot
                <CrewIcon.Arrow s={15} />
              </a>
              <a className="pd-btn pd-btn-ghost" href={PITCH_DAY_APPLY_URL}>
                Apply to pitch
              </a>
            </div>
          </div>
          <aside className="pd-save-card">
            <div className="pd-sc-top">
              <span>Save the date</span>
              <span className="pd-sc-live">
                <span className="pd-pulse" /> Live
              </span>
            </div>
            <div className="pd-sc-day">
              <span className="pd-d">29</span>
              <span className="pd-mo">July 2026</span>
            </div>
            <div className="pd-sc-meta">
              <div>
                <div className="pd-l">Starts</div>
                <div className="pd-v">10:00 <span className="pd-tz">BRT</span></div>
              </div>
              <div>
                <div className="pd-l">Where</div>
                <div className="pd-v">Online</div>
              </div>
              <div>
                <div className="pd-l">Pitching</div>
                <div className="pd-v">5 founders</div>
              </div>
            </div>
            <div className="pd-sc-host">
              <img src="/assets/daniel-silva.png" alt="Daniel Silva" />
              <div>
                <div className="pd-l">Hosted by</div>
                <div className="pd-n">Daniel Silva</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
