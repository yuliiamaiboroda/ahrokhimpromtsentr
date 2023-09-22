export default function SvgLightGradient() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
      <linearGradient id="light-gradient" x2="1" y2="1">
        <stop offset="0%" stopColor="#f2e2ba" />
        <stop offset="100%" stopColor="#d5ba75" />
      </linearGradient>
    </svg>
  );
}
