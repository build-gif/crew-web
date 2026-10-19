import { ArrowIcon } from "@/components/home/ArrowIcon";
import { WAYS, signupUrl } from "@/components/home/content";

export function HomeWays() {
  return (
    <section className="h-section h-ways">
      <div className="h-wrap">
        <h2 className="h-title">3 ways to be part of the Crew</h2>
        <div className="h-ways-grid">
          {WAYS.map((w) => (
            <div key={w.title} className={`h-way${w.featured ? " is-featured" : ""}`}>
              <div className="h-way-title">{w.title}</div>
              <p className="h-way-line">{w.line}</p>
              <a
                href={signupUrl(w.track, `ways_${w.track}`)}
                className={`h-btn ${w.featured ? "h-btn-dark" : "h-btn-ghost"}`}
                aria-label={w.cta}
              >
                <span className="h-label-long">{w.cta}</span>
                <span className="h-label-short">Join</span>
                <ArrowIcon size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
