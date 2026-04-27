"use client";

import { INTRO_DURATION_MS } from "@/constants/ui";
import { useEffect } from "react";

interface IntroSectionProps {
  onComplete?: () => void;
  durationMs?: number;
}

function IntroSection({ onComplete, durationMs = INTRO_DURATION_MS }: IntroSectionProps) {
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
