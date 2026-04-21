"use client";

import { useEffect } from "react";

interface IntroSectionProps {
  onComplete?: () => void;
  durationMs?: number;
}

function IntroSection({ onComplete, durationMs = 4000 }: IntroSectionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  return (
    <section className="flex w-full h-screen items-center justify-center bg-background">
      <h1 className="intro-title">Hello, World</h1>
    </section>
  );
}

export default IntroSection;
