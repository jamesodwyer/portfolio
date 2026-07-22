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
  /**
   * Optional header image overlaid at the top and snapped in/out based on the
   * live scroll position. `src` must be the FULL page (with its own header
   * baked in). The overlay fades in fast the moment the page's real bar reaches
   * the top of the screen, faking a sticky header that returns cleanly.
   */
  fadeHeaderSrc?: string;
  /**
   * Natural-image Y offset (px) where the real bar sits in `src`. The overlay
   * appears once the page has scrolled this far. 0 = bar at the very top.
   */
  fadeHeaderOffsetPx?: number;
}

const MACBOOK_FRAME = "/mockup-slides/images/mockup.png";

export function ScrollingFrame({
  src,
  variant,
  className = "",
  durationMs,
  stickyTopSrc,
  stickyBottomSrc,
  fadeHeaderSrc,
  fadeHeaderOffsetPx = 0,
}: ScrollingFrameProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [panShiftPx, setPanShiftPx] = useState(0);
  const [isFadeHeaderVisible, setIsFadeHeaderVisible] = useState(false);

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

  // Track the live scroll position of the panning image and toggle the fake
  // sticky header the instant the page's real bar passes the top of the screen.
  useEffect(() => {
    if (!fadeHeaderSrc || panShiftPx >= 0) return;
    let frameId = 0;
    const tick = () => {
      const imageElement = imageRef.current;
      if (imageElement && imageElement.naturalWidth > 0) {
        const scale = imageElement.offsetWidth / imageElement.naturalWidth;
        const transform = getComputedStyle(imageElement).transform;
        const translateY =
          transform && transform !== "none"
            ? new DOMMatrixReadOnly(transform).m42
            : 0;
        const scrolledPx = -translateY;
        const thresholdPx = fadeHeaderOffsetPx * scale;
        setIsFadeHeaderVisible(scrolledPx >= thresholdPx - 1);
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [fadeHeaderSrc, fadeHeaderOffsetPx, panShiftPx]);

  // Longer pages pan for longer so the speed feels consistent.
  const resolvedDurationMs =
    durationMs ?? Math.min(60000, Math.max(16000, Math.abs(panShiftPx) * 24));

  const hasStickyBars = Boolean(stickyTopSrc || stickyBottomSrc);
  const hasScreenOverlay = hasStickyBars || Boolean(fadeHeaderSrc);

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

  // The screen contents. Three modes:
  // 1. fadeHeaderSrc — full page scrolls; a header copy overlays the top and
  //    snaps in/out based on scroll position (fake sticky header, clean return).
  // 2. stickyTopSrc/stickyBottomSrc — hard split with pinned bars.
  // 3. plain scroll window.
  const renderScreen = () => {
    if (fadeHeaderSrc) {
      return (
        <>
          {renderScrollWindow("scroll-window")}
          <img
            className="scroll-fade-header"
            src={fadeHeaderSrc}
            alt=""
            aria-hidden="true"
            style={{ opacity: isFadeHeaderVisible ? 1 : 0 }}
          />
        </>
      );
    }
    if (hasStickyBars) {
      return (
        <div className="scroll-stack">
          {stickyTopSrc && (
            <img className="scroll-bar" src={stickyTopSrc} alt="" aria-hidden="true" />
          )}
          {renderScrollWindow("scroll-window scroll-window--flex")}
          {stickyBottomSrc && (
            <img className="scroll-bar" src={stickyBottomSrc} alt="" aria-hidden="true" />
          )}
        </div>
      );
    }
    return renderScrollWindow("scroll-window");
  };

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
      {!hasScreenOverlay && <div className="iphone__notch" />}
      <div className="iphone__screen">{renderScreen()}</div>
    </div>
  );
}
