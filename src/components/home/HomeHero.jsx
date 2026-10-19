import { ArrowIcon } from "@/components/home/ArrowIcon";
import { Constellation } from "@/components/home/Constellation";
import { HeroRotator } from "@/components/home/HeroRotator";
import { signupUrl } from "@/components/home/content";

export function HomeHero() {
  return (
    <section className="h-hero">
      <div className="h-wrap">
        <div className="h-hero-text">
          <h1 className="h-display" aria-label="Builders build with builders, experts and investors.">
            Builders build with <HeroRotator />
          </h1>
          <div className="h-btn-row">
            <a href={signupUrl("builder", "hero")} className="h-btn h-btn-orange">
              Join the Crew <ArrowIcon />
            </a>
            <a href={signupUrl("investor", "hero_investor")} className="h-btn h-btn-ghost">
              I&apos;m an investor
            </a>
          </div>
          <div className="h-note">Free to join.</div>
        </div>
        <Constellation />
      </div>
    </section>
  );
}
