"use client";

import { FlipNumber } from "./FlipNumber";
import { PercentPie } from "./PercentPie";

interface MetricValueProps {
  /** Raw metric string from the case study data, e.g. "46%", "4 days", "7/7". */
  value: string;
  delay?: number;
  className?: string;
}

/**
 * Routes a metric to its treatment: percentages become an animated pie,
 * plain numbers become split-flap digits, and anything non-numeric
 * ("Minutes", "24/7") renders as static text.
 */
export function MetricValue({ value, delay = 0, className }: MetricValueProps) {
  const percent = value.match(/^(\d{1,3})%$/);
  if (percent) {
    return <PercentPie value={Number(percent[1])} delay={delay} className={className} />;
  }

  const numeric = value.match(/^(\D*?)(\d+)([\s\S]*)$/);
  if (numeric) {
    const [, prefix, digits, suffix] = numeric;
    return (
      <FlipNumber
        target={Number(digits)}
        prefix={prefix}
        suffix={suffix}
        delay={delay}
        label={value}
        className={className}
      />
    );
  }

  return <span className={className}>{value}</span>;
}
