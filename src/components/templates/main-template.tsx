"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import AboutSection from "../about/about-section";
import Gutter from "../common/gutter";
import ContactSection from "../contact/contact-section";
import HeroSection from "../hero/hero-section";
import ProjectSection from "../project/project-section";
import SkillSection from "../skill/skill-section";

function MainTemplate() {
  const { SKILLS, PROJECTS } = PORTFOLIO_DATA;

  return (
    <div className="mx-auto grid max-w-[calc(var(--maxw)+var(--gutter-w)+32px)] grid-cols-[var(--gutter-w)_1fr] gap-x-0 px-4">
      <Gutter count={200} />
      <main className="min-w-0 px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <SkillSection skills={SKILLS} />
        <ProjectSection projects={PROJECTS} />
        <ContactSection />
      </main>
    </div>
  );
}

export default MainTemplate;
