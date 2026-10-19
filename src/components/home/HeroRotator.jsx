"use client";
import { useEffect, useState } from "react";
import { ROTATING_WORDS } from "@/components/home/content";

const INTERVAL_MS = 2800;

// Crossfade instead of a vertical slide: no clipping needed, so nothing can
// bleed into the line above. The sizer reserves the longest word's width.
// Screen readers get the full sentence from the h1's aria-label instead.
export function HeroRotator() {
  const [state, setState] = useState({ on: 0, out: -1 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setState((s) => ({ out: s.on, on: (s.on + 1) % ROTATING_WORDS.length }));
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const longest = ROTATING_WORDS.reduce((a, b) => (b.length > a.length ? b : a));
  return (
    <span className="h-rot" aria-hidden="true">
      <span className="h-rot-sizer">{longest}</span>
      {ROTATING_WORDS.map((word, i) => {
        const cls = i === state.on ? " is-on" : i === state.out ? " is-out" : "";
        return (
          <span key={word} className={`h-rot-word${cls}`}>
            {word}
          </span>
        );
      })}
    </span>
  );
}
