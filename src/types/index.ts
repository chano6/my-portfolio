type Section = "about" | "projects" | "skills" | "contact";
type ProjectCategory = "company" | "team" | "personal";

export interface NavItem {
  id: string;
  n: string;
  label: Section;
}

export interface Skill {
  cat: string;
  items: string[];
}
export interface Project {
  id: string;
  num: string;
  title: string;
  role: string;
  year: string;
  category: ProjectCategory;
  org: string;
  featured: boolean;
  stack: string[];
  summary: string;
  highlights: string[];
  role_desc: string;
  links: { live: string; repo: string };
  swatch: string;
}

export interface PortfolioData {
  SKILLS: Skill[];
  PROJECTS: Project[];
}
