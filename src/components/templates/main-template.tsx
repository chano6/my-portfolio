"use client";

import { portfolioContent } from "@/data/portfolio";
import { useCallback, useState } from "react";
import Header from "../common/header";
import IntroSection from "../intro/intro-section";

function MainTemplate() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  const handleIntroComplete = useCallback(() => setIsIntroDone(true), []);

  if (!isIntroDone) {
    return <IntroSection onComplete={handleIntroComplete} />;
  }

  return (
    <div className="relative w-full h-full p-4 md:px-5">
      <Header navItems={portfolioContent.navItems} />
    </div>
  );
}

export default MainTemplate;
