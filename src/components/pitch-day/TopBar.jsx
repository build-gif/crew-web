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
        <span className="pd-btn-label-full">Save your spot</span>
        <span className="pd-btn-label-short">Save spot</span>
        <CrewIcon.Arrow s={13} />
      </a>
    </div>
  );
}
