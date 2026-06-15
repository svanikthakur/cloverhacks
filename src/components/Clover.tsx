type CloverProps = {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
};

export function Clover({ className, size = 36, style }: CloverProps) {
  return (
    <svg
      viewBox="0 0 100 115"
      width={size}
      height={size * (115 / 100)}
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      <path
        d="M52 56 Q 47 78 60 108"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <g fill="currentColor">
        {[45, 135, 225, 315].map((r) => (
          <Leaf key={r} rotation={r} />
        ))}
      </g>
    </svg>
  );
}

function Leaf({ rotation }: { rotation: number }) {
  return (
    <path
      transform={`rotate(${rotation} 50 50)`}
      d="M50 50
         C 35 50, 22 40, 22 25
         C 22 12, 36 5, 48 15
         Q 50 18, 52 15
         C 64 5, 78 12, 78 25
         C 78 40, 65 50, 50 50 Z"
    />
  );
}
