"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowIcon } from "./ArrowIcon";

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
    frame.style.setProperty("--project-scroll-duration", `${Math.max(1, distance / 52)}s`);
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

type ProjectModalProps = {
  triggerLabel: string;
  title: string;
  goal: string;
  approach: string;
  outcome: string;
  kind: "website" | "video";
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  poster?: string;
};

function ModalWebsitePreview({ src, alt }: { src: string; alt: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const reducedRef = useRef(false);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedRef.current) return;
    let animationFrame = 0;
    const step = (time: number) => {
      if (previousTimeRef.current !== null && !pausedRef.current && frame.scrollTop < frame.scrollHeight - frame.clientHeight) {
        frame.scrollTop = Math.min(frame.scrollHeight - frame.clientHeight, frame.scrollTop + ((time - previousTimeRef.current) / 1000) * 52);
      }
      previousTimeRef.current = time;
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const restart = () => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.scrollTo({ top: 0, behavior: reducedRef.current ? "auto" : "smooth" });
    pausedRef.current = false;
  };

  return <div className="modal-browser"><div className="modal-browser-bar"><i /><i /><i /><button type="button" onClick={restart}>Return to top <ArrowIcon direction="north" /></button></div><div ref={frameRef} className="modal-website-scroll" tabIndex={0} onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }} onWheel={() => { pausedRef.current = true; }} onPointerDown={() => { pausedRef.current = true; }} aria-label="Scrollable full-page website preview"><img src={src} alt={alt} loading="lazy" decoding="async" /></div></div>;
}

function ModalVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => () => {
    const video = videoRef.current;
    if (video) { video.pause(); video.currentTime = 0; }
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { try { await video.play(); } catch { return; } } else video.pause();
  };
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const wasPlaying = !video.paused;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (wasPlaying) void video.play();
  };
  const fullscreen = async () => { try { await videoRef.current?.requestFullscreen(); } catch { /* Browser may deny fullscreen outside a user gesture. */ } };

  return <div className="modal-video-wrap"><video ref={videoRef} src={src} poster={poster} preload="metadata" muted={muted} playsInline onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} /><div className="modal-video-controls"><button type="button" onClick={togglePlay} aria-pressed={playing}>{playing ? "Pause" : "Play"}</button><button type="button" onClick={toggleSound} aria-pressed={!muted}>{muted ? "Sound off" : "Sound on"}</button><button type="button" onClick={fullscreen}>Fullscreen</button></div></div>;
}

export function ProjectModalTrigger(props: ProjectModalProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const modal = modalRef.current;
    const focusable = () => [...(modal?.querySelectorAll<HTMLElement>('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])') ?? [])].filter(element => !element.hasAttribute("disabled"));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); return; }
      if (event.key !== "Tab") return;
      const elements = focusable();
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => focusable()[0]?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const modal = open ? <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><div ref={modalRef} className={`project-modal project-modal-${props.kind}`} role="dialog" aria-modal="true" aria-labelledby={titleId}><button type="button" className="project-modal-close" onClick={() => setOpen(false)} aria-label={`Close ${props.title} project`}>Close ×</button><div className="project-modal-grid"><div className="project-modal-media">{props.kind === "website" && props.imageSrc && props.imageAlt ? <ModalWebsitePreview src={props.imageSrc} alt={props.imageAlt} /> : props.videoSrc && props.poster ? <ModalVideo src={props.videoSrc} poster={props.poster} /> : null}</div><div className="project-modal-copy"><p className="kicker">Selected Work</p><h2 id={titleId}>{props.title}</h2><dl><div><dt>Goal</dt><dd>{props.goal}</dd></div><div><dt>Approach</dt><dd>{props.approach}</dd></div><div><dt>Outcome</dt><dd>{props.outcome}</dd></div></dl></div></div></div></div> : null;

  return <><button ref={triggerRef} type="button" className="project-cta" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>{props.triggerLabel} <ArrowIcon /></button>{modal ? createPortal(modal, document.body) : null}</>;
}
