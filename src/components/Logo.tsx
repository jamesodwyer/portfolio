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

// Alternative minimal version - just JO monogram
export function LogoMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: size * 2,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 60 30"
        fill="currentColor"
        style={{ width: "100%", height: "100%" }}
      >
        {/* J */}
        <path d="M0 0h8v22c0 4-2 6-6 6H0v-4h2c2 0 2-1 2-2V0z" />

        {/* O with center dot */}
        <circle cx="38" cy="15" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="38" cy="15" r="3" />
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
