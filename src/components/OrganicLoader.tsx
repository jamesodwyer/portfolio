"use client";

import { useId } from "react";

export type OrganicLoaderVariant = "03" | "11" | "20" | "21";

interface OrganicLoaderProps {
  variant: OrganicLoaderVariant;
  className?: string;
  ariaLabel?: string;
}

export function OrganicLoader({
  variant,
  className,
  ariaLabel = "Loading",
}: OrganicLoaderProps) {
  const rawId = useId();
  const filterId = `goo-${rawId.replace(/:/g, "")}`;
  const filterUrl = `url(#${filterId})`;

  return (
    <div
      className={`organic-loader${className ? ` ${className}` : ""}`}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <div className={`organic-loader__stage l${variant}`}>
        <svg
          width="0"
          height="0"
          style={{ position: "absolute" }}
          aria-hidden="true"
        >
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="10.5" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        {variant === "03" && (
          <svg viewBox="0 0 160 160" style={{ filter: filterUrl }} aria-hidden="true">
            <circle className="a" cx="80" cy="80" r="22" />
            <circle className="b" cx="80" cy="80" r="22" />
          </svg>
        )}

        {variant === "11" && (
          <svg viewBox="0 0 140 140" style={{ filter: filterUrl }} aria-hidden="true">
            <g className="cluster">
              <circle className="d1" cx="70" cy="70" r="14" />
              <circle className="d2" cx="70" cy="70" r="14" />
              <circle className="d3" cx="70" cy="70" r="14" />
            </g>
          </svg>
        )}

        {variant === "20" && (
          <svg viewBox="0 0 220 220" style={{ filter: filterUrl }} aria-hidden="true">
            <circle className="a" cx="110" cy="110" r="28" />
            <circle className="b" cx="110" cy="110" r="26" />
            <circle className="c" cx="110" cy="110" r="28" />
          </svg>
        )}

        {variant === "21" && (
          <svg viewBox="0 0 180 180" style={{ filter: filterUrl }} aria-hidden="true">
            <circle className="core" cx="90" cy="90" r="18" />
            <circle className="orb o1" cx="90" cy="90" r="16" />
            <circle className="orb o2" cx="90" cy="90" r="16" />
            <circle className="orb o3" cx="90" cy="90" r="16" />
          </svg>
        )}
      </div>
    </div>
  );
}
