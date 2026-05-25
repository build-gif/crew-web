"use client";
import useIsMobile from "@/lib/hooks/useIsMobile";
import CobChatSection from "@/components/ui/cob-chat";
import CobNextAct from "@/components/ui/cob-next-act";
import { CobTopBar, CobMobTopBar } from "./TopBar";
import { CobHero, CobMobHero } from "./Hero";
import { CobBatch, CobMobPillars } from "./Pillars";
import { CobMembers, CobMobMembers } from "./Members";
import { CobApply, CobMobApply } from "./ApplySection";
import { CobFooter, CobMobFooter } from "./Footer";
import { cobStyles, mobStyles } from "./styles";

export default function LandingPage() {
  const mobile = useIsMobile();

  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
      {mobile ? (
        <div style={mobStyles.page}>
          <CobMobTopBar />
          <CobMobHero />
          <CobChatSection mobile />
          <CobMobPillars />
          <CobMobMembers />
          <CobNextAct mobile />
          <CobMobApply />
          <CobMobFooter />
        </div>
      ) : (
        <div style={cobStyles.page}>
          <CobTopBar />
          <CobHero />
          <CobChatSection />
          <CobBatch />
          <CobMembers />
          <CobNextAct />
          <CobApply />
          <CobFooter />
        </div>
      )}
    </>
  );
}
