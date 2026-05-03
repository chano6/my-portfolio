type Section = "about" | "projects" | "skills" | "contact";

export interface NavItem {
  id: string;
  n: string;
  label: Section;
}

export interface Skill {
  cat: string;
  items: string[];
}

export interface PortfolioData {
  SKILLS: Skill[];
}
