import { HOME_STYLES } from "@/components/home/styles";
import { HOME_FONT_CLASSES } from "@/components/home/fonts";
import { AGENDA_DATED, AGENDA_WEEKLY, PITCH_DAY } from "@/components/home/content";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeWelcome } from "@/components/home/HomeWelcome";
import { HomeWays } from "@/components/home/HomeWays";
import { HomeInside } from "@/components/home/HomeInside";
import { RecentEvents } from "@/components/home/RecentEvents";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeClosing, HomeFooter } from "@/components/home/HomeClosing";
import { isUpcoming, todayInSaoPaulo, upcomingAgenda } from "@/lib/agenda";

// Re-rendered at most hourly, so past dates leave the agenda and the
// Pitch Day bar comes down on their own, without a deploy.
export const revalidate = 3600;

// Not indexed while it lives at /v2 next to the current home.
export const metadata = {
  title: "Crew of Builders",
  description: "The community that supports the new generation of builders. Builders, experts and investors, meeting every week. Free to join.",
  robots: { index: false, follow: false },
};

export default function HomeV2Page() {
  const today = todayInSaoPaulo();
  const agenda = upcomingAgenda(AGENDA_DATED, AGENDA_WEEKLY, 4, today);
  return (
    <div id="top" className={`home ${HOME_FONT_CLASSES}`}>
      <style>{HOME_STYLES}</style>
      <HomeHeader showPitchDay={isUpcoming(PITCH_DAY.date, today)} />
      <main>
        <HomeHero />
        <HomeWelcome />
        <HomeWays />
        <HomeInside agenda={agenda} />
        <RecentEvents />
        <Testimonials />
        <HomeClosing />
      </main>
      <HomeFooter />
    </div>
  );
}
