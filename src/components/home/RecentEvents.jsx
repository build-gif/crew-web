"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/home/ArrowIcon";
import { LINKS, RECENT_EVENTS } from "@/components/home/content";

const SWIPE_PX = 40;
const pad = (n) => String(n).padStart(2, "0");

export function RecentEvents() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(null);
  const total = RECENT_EVENTS.length;
  const go = (i) => setCurrent((i + total) % total);
  const event = RECENT_EVENTS[current];

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < SWIPE_PX) return;
    go(dx < 0 ? current + 1 : current - 1);
  };

  return (
    <section className="h-section" aria-roledescription="carousel" aria-label="Recent events">
      <div className="h-wrap">
        <div className="h-ev-head">
          <h2 className="h-title">Recent events</h2>
          <div className="h-ev-controls">
            <span className="h-ev-count" aria-live="polite">{pad(current + 1)} / {pad(total)}</span>
            <button type="button" className="h-icon-btn" onClick={() => go(current - 1)} aria-label="Previous event">
              <ArrowIcon size={16} direction="left" />
            </button>
            <button type="button" className="h-icon-btn" onClick={() => go(current + 1)} aria-label="Next event">
              <ArrowIcon size={16} />
            </button>
          </div>
        </div>

        <div className="h-ev-card" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="h-ev-cover">
            {RECENT_EVENTS.map((e, i) => (
              <Image
                key={e.slug}
                src={`/assets/v2/events/${e.slug}.webp`}
                alt={i === current ? `${e.format} · ${e.who}` : ""}
                fill
                sizes="(max-width: 759px) 100vw, 720px"
                className={`${e.fit === "contain" ? "is-contain " : ""}${i === current ? "is-on" : ""}`}
              />
            ))}
          </div>
          <div className="h-ev-text">
            <div>
              <div className="h-ev-meta">
                <span className="h-ev-format">{event.format}</span>
                <span className="h-ev-date">{event.date}</span>
              </div>
              <h3 className="h-ev-theme">{event.theme}</h3>
            </div>
            <a href={LINKS.events} className="h-link">See the calendar →</a>
          </div>
        </div>

        <div className="h-dashes" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
          {RECENT_EVENTS.map((e, i) => (
            <button
              key={e.slug}
              type="button"
              className={`h-dash${i === current ? " is-on" : ""}`}
              onClick={() => go(i)}
              aria-label={`Go to ${e.format}`}
              aria-current={i === current ? "true" : undefined}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
