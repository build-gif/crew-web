"use client";
import { useState } from "react";
import Image from "next/image";
import { LINKS } from "@/components/home/content";
import poster from "@/components/home/video-poster.jpg";

// Poster first, YouTube only after the click: no third-party embed (or its
// cookies) on page load. The static import gives a blur placeholder, so the
// frame never flashes black while the poster loads.
export function VideoPlayer({ title }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="h-video">
      {playing ? (
        <iframe
          src={LINKS.video}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="h-video-btn" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
          <Image src={poster} alt="" fill placeholder="blur" sizes="(max-width: 899px) 100vw, 700px" />
          <span className="h-video-veil" />
          <span className="h-video-play">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
