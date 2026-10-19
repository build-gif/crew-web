import { ArrowIcon } from "@/components/home/ArrowIcon";
import { LINKS, PITCH_DAY, signupUrl } from "@/components/home/content";

// The bar only renders while Pitch Day is ahead (the page decides, on the server).
export function HomeHeader({ showPitchDay }) {
  return (
    <>
      {showPitchDay && (
        <div className="h-ann">
          {PITCH_DAY.label} ·<span className="h-ann-online"> Online.</span>{" "}
          <a href={LINKS.pitchDay}>
            <span className="h-ann-long">See who&apos;s pitching →</span>
            <span className="h-ann-short">See lineup →</span>
          </a>
        </div>
      )}
      <header className="h-header">
        <div className="h-wrap">
          <a href="#top" className="h-brand" aria-label="Crew of Builders, back to top">
            <span className="h-brand-name">Crew of Builders</span>
            <span className="h-brand-by">Powered by WE Heart Impact</span>
          </a>
          <a href={signupUrl("builder", "header")} className="h-btn h-btn-orange h-btn-sm" aria-label="Join the Crew">
            <span className="h-hdr-long">Join the Crew</span>
            <span className="h-hdr-short">Join</span>
            <ArrowIcon size={13} />
          </a>
        </div>
      </header>
    </>
  );
}
