"use client";

import { PITCH_DAY_STYLES } from "@/components/pitch-day/styles";
import { PitchDayTopBar } from "@/components/pitch-day/TopBar";
import { PitchDayHero } from "@/components/pitch-day/Hero";
import { PitchDayStakes } from "@/components/pitch-day/Stakes";
import { PitchDayLineup } from "@/components/pitch-day/Lineup";
import { PitchDayPastLineup } from "@/components/pitch-day/PastLineup";
import { PitchDayInvestors } from "@/components/pitch-day/Investors";
import { PitchDayFinalCTA } from "@/components/pitch-day/FinalCTA";
import { PitchDayFooter } from "@/components/pitch-day/Footer";

export default function PitchDayPage() {
  return (
    <div className="pitch-day">
      <style>{PITCH_DAY_STYLES}</style>
      <PitchDayTopBar />
      <PitchDayHero />
      <PitchDayStakes />
      <PitchDayLineup />
      <PitchDayPastLineup />
      <PitchDayInvestors />
      <PitchDayFinalCTA />
      <PitchDayFooter />
    </div>
  );
}
