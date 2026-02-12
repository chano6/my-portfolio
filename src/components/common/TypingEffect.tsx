"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number; // 타이핑 속도 (ms)
  onComplete?: () => void; // 타이핑 완료 콜백
  className?: string;
}

export default function TypingEffect({
  text,
  speed = 100,
  onComplete,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return <span className={className}>{displayText}</span>;
}
