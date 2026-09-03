"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

interface PercentPieProps {
  /** Whole-number percentage, e.g. 46. */
  value: number;
  /** Seconds to wait before sweeping. */
  delay?: number;
  className?: string;
}

/**
 * A percentage rendered as a filled pie sweeping from 12 o'clock, with the
 * figure alongside it. Sized in `em` so it scales with the metric type.
 */
export function PercentPie({ value, delay = 0, className }: PercentPieProps) {
  const reduceMotion = useReducedMotion();
  const [swept, setSwept] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      setSwept(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setSwept(latest),
    });
    return () => controls.stop();
  }, [value, delay, reduceMotion]);

  // A stroked circle whose dash pattern reveals the arc; r chosen so the
  // stroke width equals the radius, filling the disc from the centre out.
  const r = 25;
  const circumference = 2 * Math.PI * r;
  const filled = (swept / 100) * circumference;

  return (
    <span className={`inline-flex items-center gap-[0.28em] ${className ?? ""}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-[0.82em] h-[0.82em] shrink-0 -rotate-90"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.28" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={r * 2}
          strokeDasharray={`${filled} ${circumference}`}
        />
      </svg>
      <span className="tabular-nums">{Math.round(swept)}%</span>
    </span>
  );
}
