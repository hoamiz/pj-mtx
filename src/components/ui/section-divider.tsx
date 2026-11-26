const STROKE = "#E53935";
const STROKE_WIDTH = 2.25;
const RADIUS = 14;
const CY = 32;
const CENTERS = [147, 169, 191, 213] as const;

export function SectionDivider() {
  return (
    <svg
      viewBox="0 0 360 64"
      className="mx-auto mt-2 h-10 w-56 max-w-full"
      aria-hidden="true"
      focusable="false"
    >
      <line
        x1="16"
        y1={CY}
        x2="124"
        y2={CY}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <line
        x1="236"
        y1={CY}
        x2="344"
        y2={CY}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      {CENTERS.map((cx) => (
        <circle
          key={cx}
          cx={cx}
          cy={CY}
          r={RADIUS}
          fill="none"
          stroke={STROKE}
          strokeWidth={STROKE_WIDTH}
        />
      ))}
    </svg>
  );
}
