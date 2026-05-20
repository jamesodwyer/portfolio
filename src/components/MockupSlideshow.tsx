"use client";

import { useEffect, useState } from "react";

interface MockupSlideshowProps {
  slides: string[];
  mockup?: string;
  className?: string;
  /** Time each slide stays fully visible, in ms. Defaults to 5000. */
  holdMs?: number;
  /** Crossfade duration in ms. Defaults to 1200. */
  fadeMs?: number;
}

export function MockupSlideshow({
  slides,
  mockup = "/mockup-slides/images/mockup.png",
  className = "",
  holdMs = 5000,
  fadeMs = 1200,
}: MockupSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(
      () => setActiveIndex((i) => (i + 1) % slides.length),
      holdMs + fadeMs
    );
    return () => clearInterval(interval);
  }, [slides.length, holdMs, fadeMs]);

  return (
    <div className={`mockup ${className}`}>
      <div className="mockup__screen">
        <div className="mockup-slideshow">
          {slides.map((src, i) => (
            <img
              key={src}
              className="mockup-slide"
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transition: `opacity ${fadeMs}ms ease-in-out`,
              }}
            />
          ))}
        </div>
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
