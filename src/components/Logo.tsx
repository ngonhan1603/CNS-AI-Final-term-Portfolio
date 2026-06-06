export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div
      className="bg-accent-peach rounded-lg flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span
        className="font-serif text-white font-semibold leading-none select-none"
        style={{ fontSize: size * 0.55 }}
      >
        N
      </span>
    </div>
  );
}
