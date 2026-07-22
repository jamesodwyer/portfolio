"use client";

import { useEffect, useRef, useState } from "react";

interface MockupSlideshowProps {
  slides: string[];
  mockup?: string;
  className?: string;
  /** Time each slide stays fully visible before the next crossfade starts, in ms. */
  holdMs?: number;
  /** When set, play this looping video inside the mockup screen instead of slides. */
  videoSrc?: string;
}

export function MockupSlideshow({
  slides,
  mockup = "/mockup-slides/images/mockup.png",
  className = "",
  holdMs = 6000,
  videoSrc,
}: MockupSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoSrc || slides.length <= 1) return;
    const interval = setInterval(
      () => setActiveIndex((i) => (i + 1) % slides.length),
      holdMs
    );
    return () => clearInterval(interval);
  }, [slides.length, holdMs, videoSrc]);

  const enterFullscreen = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    // Safari exposes a webkit-prefixed method on the video element itself.
    const requestFullscreen =
      videoElement.requestFullscreen ||
      (videoElement as HTMLVideoElement & {
        webkitEnterFullscreen?: () => void;
      }).webkitEnterFullscreen;
    requestFullscreen?.call(videoElement);
  };

  return (
    <div className={`mockup ${className}`}>
      <div className="mockup__screen">
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              className="mockup-video"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
            <button
              type="button"
              className="mockup-fullscreen"
              onClick={enterFullscreen}
              aria-label="Play video full screen"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        ) : (
          <div className="mockup-slideshow">
            {slides.map((src, i) => (
              <img
                key={src}
                className={
                  i === activeIndex ? "mockup-slide is-active" : "mockup-slide"
                }
                src={src}
                alt=""
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </div>
      <img
        className="mockup__frame"
        src={mockup}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
