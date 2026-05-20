"use client";

import { useEffect, useState } from "react";

interface MockupSlideshowProps {
  slides: string[];
  mockup?: string;
  className?: string;
  /** Time each slide stays fully visible before the next crossfade starts, in ms. */
  holdMs?: number;
}

export function MockupSlideshow({
  slides,
  mockup = "/mockup-slides/images/mockup.png",
  className = "",
  holdMs = 6000,
}: MockupSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(
      () => setActiveIndex((i) => (i + 1) % slides.length),
      holdMs
    );
    return () => clearInterval(interval);
  }, [slides.length, holdMs]);

  return (
    <div className={`mockup ${className}`}>
      <div className="mockup__screen">
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
