"use client";

interface DotPatternProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  className?: string;
  circular?: boolean;
}

export function DotPattern({
  rows = 10,
  cols = 10,
  dotSize = 8,
  gap = 8,
  className = "",
  circular = true,
}: DotPatternProps) {
  const dots: { row: number; col: number }[] = [];
  const centerX = (cols - 1) / 2;
  const centerY = (rows - 1) / 2;
  const radius = Math.min(centerX, centerY);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // For circular pattern, calculate distance from center
      if (circular) {
        const distanceFromCenter = Math.sqrt(
          Math.pow(col - centerX, 2) + Math.pow(row - centerY, 2)
        );
        if (distanceFromCenter <= radius) {
          dots.push({ row, col });
        }
      } else {
        dots.push({ row, col });
      }
    }
  }

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
        width: "fit-content",
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const isDot = dots.some((d) => d.row === row && d.col === col);

        return (
          <div
            key={index}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              backgroundColor: isDot ? "currentColor" : "transparent",
            }}
          />
        );
      })}
    </div>
  );
}
