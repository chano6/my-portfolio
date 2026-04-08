// src/types/content.ts

import { LucideIcon } from "lucide-react";

export type SectionId = "about" | "projects" | "skills" | "contact";

export interface NavItem {
  label: string;
  href: `#${SectionId}`;
  sectionId: SectionId;
  icon?: LucideIcon;
}

export interface ProfileSummary {
  title: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  href?: string;
  githubHref?: string;
  imageSrc?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tool" | "design" | "other";
  level?: "beginner" | "intermediate" | "advanced";
}

export interface ContactLink {
  label: string;
  href: string;
  type: "email" | "github" | "linkedin" | "blog" | "other";
}
