export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="40" rx="8" fill="#D97757" />
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontFamily="'Newsreader', Georgia, serif"
        fontWeight="500"
        fontSize="26"
      >
        N
      </text>
    </svg>
  );
}
