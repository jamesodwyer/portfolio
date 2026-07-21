"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollingFrameProps {
  /** Tall page image to pan through the device screen. */
  src: string;
  variant: "macbook" | "iphone";
  className?: string;
  /** Full pan cycle duration in ms. Defaults scale with content length. */
  durationMs?: number;
  /**
   * Optional bar image pinned to the top of the screen (iPhone only). When set
   * together with stickyBottomSrc, the screen splits into a fixed top bar, a
   * scrolling middle, and a fixed bottom bar.
   */
  stickyTopSrc?: string;
  /** Optional bar image pinned to the bottom of the screen (iPhone only). */
  stickyBottomSrc?: string;
}

const MACBOOK_FRAME = "/mockup-slides/images/mockup.png";

export function ScrollingFrame({
  src,
  variant,
  className = "",
  durationMs,
  stickyTopSrc,
  stickyBottomSrc,
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

  const renderScrollWindow = (windowClassName: string) => (
    <div className={windowClassName} ref={windowRef}>
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
        <div className="mockup__screen">{renderScrollWindow("scroll-window")}</div>
        <img className="mockup__frame" src={MACBOOK_FRAME} alt="" aria-hidden="true" />
      </div>
    );
  }

  const hasStickyBars = Boolean(stickyTopSrc && stickyBottomSrc);

  return (
    <div className={`iphone ${className}`}>
      {!hasStickyBars && <div className="iphone__notch" />}
      {hasStickyBars ? (
        <div className="iphone__screen iphone__screen--stacked">
          <img className="iphone__bar" src={stickyTopSrc} alt="" aria-hidden="true" />
          {renderScrollWindow("scroll-window scroll-window--flex")}
          <img className="iphone__bar" src={stickyBottomSrc} alt="" aria-hidden="true" />
        </div>
      ) : (
        <div className="iphone__screen">{renderScrollWindow("scroll-window")}</div>
      )}
    </div>
  );
}
