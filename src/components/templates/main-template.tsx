"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { AboutSection } from "../about/about-section";
import { Footer } from "../common/footer";
import { PageLayout } from "../common/page-layout";
import { ContactSection } from "../contact/contact-section";
import { HeroSection } from "../hero/hero-section";
import { ProjectModal } from "../project/project-modal";
import { ProjectSection } from "../project/project-section";
import { SkillSection } from "../skill/skill-section";

export function MainTemplate() {
  const { SKILLS, PROJECTS } = PORTFOLIO_DATA;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find((p) => p.id === selectedId) ?? null;

  return (
    <>
      <PageLayout>
        <HeroSection />
        <AboutSection />
        <SkillSection skills={SKILLS} />
        <ProjectSection projects={PROJECTS} onOpen={setSelectedId} />
        <ContactSection />
        <Footer />
      </PageLayout>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
