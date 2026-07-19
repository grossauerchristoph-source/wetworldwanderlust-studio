type ArrowIconProps = { className?: string; direction?: "northeast" | "north" | "west" };

export function ArrowIcon({ className = "", direction = "northeast" }: ArrowIconProps) {
  const paths = {
    northeast: "M4 12 12 4M5 4h7v7",
    north: "M8 13V3M4 7l4-4 4 4",
    west: "M13 8H3M7 4 3 8l4 4",
  };

  return (
    <svg
      className={`interface-icon ${className}`.trim()}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
