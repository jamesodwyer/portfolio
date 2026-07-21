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
   * Optional bar image pinned to the top of the screen while the middle scrolls.
   * Works on both variants; use with a matching sliced-off top of `src`.
   */
  stickyTopSrc?: string;
  /** Optional bar image pinned to the bottom of the screen while the middle scrolls. */
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

  const hasStickyBars = Boolean(stickyTopSrc || stickyBottomSrc);

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

  // The screen contents: either a plain scroll window, or a stacked layout
  // with pinned top/bottom bars around a flexing scroll window.
  const renderScreen = () =>
    hasStickyBars ? (
      <div className="scroll-stack">
        {stickyTopSrc && (
          <img className="scroll-bar" src={stickyTopSrc} alt="" aria-hidden="true" />
        )}
        {renderScrollWindow("scroll-window scroll-window--flex")}
        {stickyBottomSrc && (
          <img className="scroll-bar" src={stickyBottomSrc} alt="" aria-hidden="true" />
        )}
      </div>
    ) : (
      renderScrollWindow("scroll-window")
    );

  if (variant === "macbook") {
    return (
      <div className={`mockup ${className}`}>
        <div className="mockup__screen">{renderScreen()}</div>
        <img className="mockup__frame" src={MACBOOK_FRAME} alt="" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`iphone ${className}`}>
      {!hasStickyBars && <div className="iphone__notch" />}
      <div className="iphone__screen">{renderScreen()}</div>
    </div>
  );
}
