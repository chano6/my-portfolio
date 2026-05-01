interface GutterProps {
  count: number;
}

function Gutter({ count }: GutterProps) {
  const lines = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      className="relative select-none border-line border-r pr-1.5 text-right text-[10.5px] text-fg-muted md:pr-4 md:text-xs"
      aria-hidden="true"
    >
      {lines.map((n) => (
        <div key={n} className="h-4.25 tabular-nums leading-[1.65]">
          {n}
        </div>
      ))}
    </div>
  );
}

export default Gutter;
