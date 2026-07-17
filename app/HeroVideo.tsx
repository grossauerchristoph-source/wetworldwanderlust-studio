"use client";

import { useState } from "react";

export function HeroVideo() {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="photo hero-photo hero-video image-reveal">
      <img
        className="hero-video-fallback"
        src="/hero/hero-fallback.webp"
        alt="Tanja and Christoph working together"
      />
      {!hasError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero/hero-fallback.webp"
          aria-label="Tanja and Christoph, together"
          onError={() => setHasError(true)}
        >
          <source src="/hero/hero-loop-web.mp4" type="video/mp4" />
        </video>
      )}
    </figure>
  );
}
