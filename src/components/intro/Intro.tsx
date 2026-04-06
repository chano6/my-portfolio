"use client";

import { useEffect } from "react";

interface IntroProps {
  onComplete?: () => void;
  durationMs?: number;
}

export default function Intro({ onComplete, durationMs = 4000 }: IntroProps) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete?.();
    }, durationMs);

    return () => window.clearTimeout(timer);
  }, [durationMs, onComplete]);

  return (
    <section className="flex w-full h-screen items-center justify-center bg-white-background">
      <h1 className="intro-title ">Hello, World</h1>
    </section>
  );
}
