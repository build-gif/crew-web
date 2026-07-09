"use client";
import { CrewIcon } from "@/components/ui/crew-shared";

export function PitchDayTopBar() {
  return (
    <div className="pd-topbar">
      <div className="pd-brand">
        <span className="pd-name">Crew of Builders</span>
        <span className="pd-powered">Powered by WE Heart Impact</span>
      </div>
      <a className="pd-btn pd-btn-sm" href="/">
        Save your spot
        <CrewIcon.Arrow s={13} />
      </a>
    </div>
  );
}
