"use client";

import { useEffect, useState } from "react";

interface TypedLineProps {
  text: string;
  delay?: number;
  className?: string;
}

function TypedLine({ text, delay = 0, className }: TypedLineProps) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (shown.length >= text.length) return;

    const timeout = setTimeout(() => {
      setShown(text.slice(0, shown.length + 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [shown, text, delay]);

  return (
    <span>
      {shown}
      <span className={className} />
    </span>
  );
}

export default TypedLine;
