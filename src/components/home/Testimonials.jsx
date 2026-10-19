"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/components/home/content";

// A grid on desktop and tablet; under 768px the same list becomes a
// swipeable rail (CSS), and these dashes follow the scroll.
export function Testimonials() {
  const railRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = railRef.current;
    if (!el || el.children.length < 2) return;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    let i = Math.round(el.scrollLeft / step);
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) i = el.children.length - 1;
    if (i !== active) setActive(i);
  };

  const goTo = (i) => {
    const el = railRef.current;
    const card = el && el.children[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.children[0].offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="h-section h-quotes">
      <div className="h-wrap">
        <h2 className="h-title">From the Crew</h2>
        <div ref={railRef} className="h-quote-grid" onScroll={onScroll}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.slug} className="h-quote">
              <figcaption>
                <Image src={`/assets/v2/testimonials/${t.slug}.webp`} alt={t.name} width={48} height={48} className="h-quote-photo" />
                <div>
                  <div className="h-quote-name">{t.name}</div>
                  <div className="h-quote-by">{t.byline}</div>
                </div>
              </figcaption>
              <h3 className="h-quote-head">{t.headline}</h3>
              <blockquote>{t.quote}</blockquote>
            </figure>
          ))}
        </div>
        <div className="h-dashes h-quote-dashes">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              className={`h-dash${i === active ? " is-on" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${t.name}'s testimonial`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
