"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type WebsitePreviewProps = { src: string; alt: string; label: string };

export function WebsitePreview({ src, alt, label }: WebsitePreviewProps) {
  const frameRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const measureScroll = useCallback(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image) return;
    const distance = Math.max(0, image.getBoundingClientRect().height - frame.clientHeight);
    frame.style.setProperty("--project-scroll-distance", `${-distance}px`);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(measureScroll);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [measureScroll]);

  return (
    <figure ref={frameRef} className="project-media website-media image-reveal" tabIndex={0} aria-label={`${label}: full-page website preview. Focus to reveal more of the page.`}>
      <img ref={imageRef} src={src} alt={alt} loading="lazy" decoding="async" onLoad={measureScroll} />
    </figure>
  );
}

type UgcVideoProps = { src: string; poster: string; captionsSrc?: string; id?: string };

export function UgcVideo({ src, poster, captionsSrc, id = "ugc-showcase-video" }: UgcVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  const play = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const pause = (reset = false) => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    if (reset) video.currentTime = 0;
    setPlaying(false);
  };

  const resetPreview = () => {
    pause(true);
    const video = videoRef.current;
    if (video) video.muted = true;
    setMuted(true);
  };

  const togglePlayback = () => playing ? pause() : void play();
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <div
      className="ugc-media image-reveal"
      onMouseEnter={() => { if (!reduceMotion) void play(); }}
      onMouseLeave={resetPreview}
    >
      <video
        id={id}
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        muted={muted}
        loop
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onPointerUp={(event) => { if (event.pointerType !== "mouse") togglePlayback(); }}
        aria-label="WetWorldWanderlust UGC showcase video"
      >
        {captionsSrc ? <track kind="captions" src={captionsSrc} srcLang="en" label="English" /> : null}
      </video>
      <div className="ugc-controls">
        <button type="button" onClick={togglePlayback} aria-label={playing ? "Pause UGC showcase" : "Play UGC showcase"} aria-pressed={playing}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span><span>{playing ? "Pause" : "Play"}</span>
        </button>
        <button type="button" onClick={toggleSound} aria-label={muted ? "Enable sound" : "Mute sound"} aria-pressed={!muted}>
          <span aria-hidden="true">{muted ? "Sound off" : "Sound on"}</span>
        </button>
      </div>
    </div>
  );
}

export function VideoPlayCta({ videoId = "ugc-showcase-video" }: { videoId?: string }) {
  const playVideo = async () => {
    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!video) return;
    video.muted = true;
    video.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    try { await video.play(); } catch { video.focus(); }
  };

  return <button type="button" className="project-cta" onClick={playVideo} aria-controls={videoId}>Watch the video <span aria-hidden="true">↗</span></button>;
}
