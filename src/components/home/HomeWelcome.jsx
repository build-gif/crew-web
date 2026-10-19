import { VideoPlayer } from "@/components/home/VideoPlayer";
import { NUMBERS } from "@/components/home/content";

const VIDEO_TITLE = "Why we started the Crew";

export function HomeWelcome() {
  return (
    <>
      {/* The caption is its own grid row, so the text centres on the video
          itself, not on video + caption. */}
      <section className="h-section h-welcome">
        <div className="h-wrap">
          <div className="h-welcome-text">
            <div className="h-kicker">Welcome to the Crew</div>
            <h2 className="h-title">Supporting the new generation of builders.</h2>
            <p className="h-lead">Builders, experts and investors, meeting every week. Open to the community.</p>
          </div>
          <div className="h-welcome-media">
            <VideoPlayer title={VIDEO_TITLE} />
          </div>
          <div className="h-video-cap">{VIDEO_TITLE}</div>
        </div>
      </section>

      <section className="h-numbers" aria-label="The Crew in numbers">
        <div className="h-wrap">
          {NUMBERS.map((n) => (
            <div key={n.label} className="h-num">
              <div className="h-num-value">
                {n.value}<span className="h-orange">+</span>
              </div>
              <div className="h-num-label">{n.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
