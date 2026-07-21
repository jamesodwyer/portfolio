"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollingFrameProps {
  /** Tall page image to pan through the device screen. */
  src: string;
  variant: "macbook" | "iphone";
  className?: string;
  /** Full pan cycle duration in ms. Defaults scale with content length. */
  durationMs?: number;
}

const MACBOOK_FRAME = "/mockup-slides/images/mockup.png";

export function ScrollingFrame({
  src,
  variant,
  className = "",
  durationMs,
}: ScrollingFrameProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [panShiftPx, setPanShiftPx] = useState(0);

  useEffect(() => {
    const recomputePanShift = () => {
      const windowElement = windowRef.current;
      const imageElement = imageRef.current;
      if (!windowElement || !imageElement) return;
      const overflow = imageElement.offsetHeight - windowElement.offsetHeight;
      setPanShiftPx(overflow > 0 ? -overflow : 0);
    };

    const imageElement = imageRef.current;
    if (imageElement && imageElement.complete) {
      recomputePanShift();
    }
    imageElement?.addEventListener("load", recomputePanShift);
    window.addEventListener("resize", recomputePanShift);
    return () => {
      imageElement?.removeEventListener("load", recomputePanShift);
      window.removeEventListener("resize", recomputePanShift);
    };
  }, [src]);

  // Longer pages pan for longer so the speed feels consistent.
  const resolvedDurationMs =
    durationMs ?? Math.min(60000, Math.max(16000, Math.abs(panShiftPx) * 24));

  const screenContent = (
    <div className="scroll-window" ref={windowRef}>
      <img
        ref={imageRef}
        className={panShiftPx < 0 ? "scroll-track is-animated" : "scroll-track"}
        src={src}
        alt=""
        aria-hidden="true"
        style={
          {
            "--pan-shift": `${panShiftPx}px`,
            "--pan-duration": `${resolvedDurationMs}ms`,
          } as React.CSSProperties
        }
      />
    </div>
  );

  if (variant === "macbook") {
    return (
      <div className={`mockup ${className}`}>
        <div className="mockup__screen">{screenContent}</div>
        <img className="mockup__frame" src={MACBOOK_FRAME} alt="" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`iphone ${className}`}>
      <div className="iphone__notch" />
      <div className="iphone__screen">{screenContent}</div>
    </div>
  );
}
