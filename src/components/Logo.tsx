"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { height: 24, fontSize: 14, gap: 2 },
    md: { height: 32, fontSize: 18, gap: 3 },
    lg: { height: 48, fontSize: 28, gap: 4 },
  };

  const { height, fontSize, gap } = sizes[size];

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ height }}
    >
      {/* J */}
      <span
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        J
      </span>

      {/* O with dot inside - geometric Bauhaus element */}
      <span
        className="relative inline-flex items-center justify-center"
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginLeft: gap,
        }}
      >
        O
        {/* Center dot */}
        <span
          className="absolute bg-current rounded-full"
          style={{
            width: fontSize * 0.2,
            height: fontSize * 0.2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </span>

      {/* Separator line */}
      <span
        className="bg-current mx-2"
        style={{
          width: fontSize * 0.8,
          height: 2,
        }}
      />

      {/* Full name in smaller caps */}
      <span
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: fontSize * 0.5,
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        James O'Dwyer
      </span>
    </div>
  );
}

// JO Monogram - matches CV logo style with J and superscript O
export function LogoMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <div
      className={`jo-logo-mark inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Large J with curved hook */}
        <path d="
          M25 18
          h18
          v52
          c0 8 -4 14 -14 14
          h-8
          v-10
          h6
          c4 0 6 -2 6 -6
          V18
          z
        " />

        {/* Superscript O — wrapped in <g> so the bounce transform doesn't move
            the circle's reference point. */}
        <g className="jo-logo-bounce">
          <circle cx="68" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

// Circular badge version - matches CV exactly
export function LogoBadge({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Black circle background */}
        <circle cx="50" cy="50" r="50" fill="currentColor" />

        {/* White J with curved hook */}
        <path
          d="
            M28 22
            h16
            v44
            c0 7 -3 12 -12 12
            h-7
            v-8
            h5
            c4 0 5 -2 5 -5
            V22
            z
          "
          fill="black"
          className="fill-swiss-black dark:fill-swiss-white"
          style={{ fill: 'var(--color-swiss-black, #000)' }}
        />

        {/* White superscript O with center dot */}
        <circle
          cx="62"
          cy="34"
          r="14"
          fill="none"
          stroke="black"
          className="stroke-swiss-black dark:stroke-swiss-white"
          style={{ stroke: 'var(--color-swiss-black, #000)' }}
          strokeWidth="7"
        />
        <circle
          cx="62"
          cy="34"
          r="3.5"
          fill="black"
          className="fill-swiss-black dark:fill-swiss-white"
          style={{ fill: 'var(--color-swiss-black, #000)' }}
        />
      </svg>
    </div>
  );
}

// Stacked version like the posters
export function LogoStacked({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span
        className="text-display-hero leading-none"
        style={{ letterSpacing: "-0.03em" }}
      >
        James
      </span>
      <span
        className="text-display-hero leading-none text-swiss-muted"
        style={{ letterSpacing: "-0.03em" }}
      >
        O'Dwyer
      </span>
    </div>
  );
}
