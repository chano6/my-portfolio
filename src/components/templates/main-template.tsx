"use client";

import { useCallback, useState } from "react";
import IntroSection from "../intro/intro-section";

function MainTemplate() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  const handleIntroComplete = useCallback(() => setIsIntroDone(true), []);

  if (!isIntroDone) {
    return <IntroSection onComplete={handleIntroComplete} />;
  }

  return (
    <div>
      <h1>Main Content</h1>
    </div>
  );
}

export default MainTemplate;
