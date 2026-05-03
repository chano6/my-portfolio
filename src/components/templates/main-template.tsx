"use client";

import Gutter from "../common/gutter";
import HeroSection from "../hero/hero-section";

function MainTemplate() {
  return (
    <div className="mx-auto grid max-w-[calc(var(--maxw)+var(--gutter-w)+32px)] grid-cols-[var(--gutter-w)_1fr] gap-x-0 px-4">
      <Gutter count={120} />
      <main className="min-w-0 px-4 md:px-6">
        <HeroSection />
      </main>
    </div>
  );
}

export default MainTemplate;
