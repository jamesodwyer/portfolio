"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A single split-flap digit. The card is split across a horizontal hinge;
 * on change, the top half of the outgoing digit falls forward while the
 * bottom half of the incoming digit swings up behind it.
 */
function FlipDigit({ digit, duration }: { digit: string; duration: number }) {
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState(digit);
  const [flipping, setFlipping] = useState(false);
  // Tracks the rendered digit without making the effect depend on state it
  // sets — depending on `current` would retrigger the effect and cancel the
  // timeout that ends the flip, leaving the card stuck mid-turn.
  const currentRef = useRef(digit);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (digit === currentRef.current) return;
    setPrevious(currentRef.current);
    currentRef.current = digit;
    setCurrent(digit);
    setFlipping(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setFlipping(false), duration);
  }, [digit, duration]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <span className="flip-digit" style={{ ["--flip-duration" as string]: `${duration}ms` }}>
      {/* Base layer: the incoming digit's top half, revealed as the old card
          falls away, above the outgoing digit's bottom half still in place. */}
      <span className="flip-half flip-half--top" aria-hidden="true">
        <span className="flip-glyph">{current}</span>
      </span>
      <span className="flip-half flip-half--bottom" aria-hidden="true">
        <span className="flip-glyph">{flipping ? previous : current}</span>
      </span>

      {flipping && (
        <>
          {/* Outgoing top falls forward over the face. */}
          <span className="flip-half flip-half--top flip-anim-out" aria-hidden="true">
            <span className="flip-glyph">{previous}</span>
          </span>
          {/* Incoming bottom swings up into place. */}
          <span className="flip-half flip-half--bottom flip-anim-in" aria-hidden="true">
            <span className="flip-glyph">{current}</span>
          </span>
        </>
      )}
    </span>
  );
}

interface FlipNumberProps {
  /** Final numeric target, e.g. 4 or 46. */
  target: number;
  /** Rendered before the digits, e.g. "" or "~". */
  prefix?: string;
  /** Rendered after the digits, e.g. " days" or "/7". */
  suffix?: string;
  /** Seconds to wait before counting. */
  delay?: number;
  /** Full value for assistive tech, e.g. "4 days". */
  label: string;
  /** When false, render the digits on cards without counting up to them. */
  count?: boolean;
  className?: string;
}

export function FlipNumber({
  target,
  prefix = "",
  suffix = "",
  delay = 0,
  label,
  count = true,
  className,
}: FlipNumberProps) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion || !count ? target : 0);
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduceMotion || !count) {
      setValue(target);
      return;
    }
    // Every target lands in the same window regardless of size: small numbers
    // step one at a time, larger ones jump in increments so the run never
    // outlasts totalMs (counting to 94 one-by-one would take ~4s).
    const totalMs = 900;
    const minStepMs = 45;
    const maxTicks = Math.floor(totalMs / minStepMs);
    const ticks = Math.min(Math.max(target, 1), maxTicks);
    const stepMs = totalMs / ticks;
    let tick = 0;
    let timer: ReturnType<typeof setTimeout>;

    const start = setTimeout(function step() {
      tick += 1;
      // Round so the final tick lands exactly on target.
      setValue(Math.round((target * tick) / ticks));
      if (tick < ticks) timer = setTimeout(step, stepMs);
    }, delay * 1000);

    return () => {
      clearTimeout(start);
      clearTimeout(timer);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, delay, reduceMotion, count]);

  // Pad to the width of the target so the card count never changes mid-count.
  const digits = String(value).padStart(String(target).length, "0").split("");
  const flipMs = 260;

  return (
    <span className={className}>
      <span className="inline-flex items-center" aria-hidden="true">
        {prefix && <span className="flip-affix">{prefix}</span>}
        {digits.map((d, i) => (
          <FlipDigit key={i} digit={d} duration={flipMs} />
        ))}
        {suffix && <span className="flip-affix">{suffix}</span>}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
