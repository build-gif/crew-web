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

// The whole home, server-rendered. The route (src/app/page.tsx) owns
// revalidate and metadata.
export function HomePage() {
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
