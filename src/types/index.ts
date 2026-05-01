export type Section = "about" | "projects" | "skills" | "contact";

export interface NavItem {
  id: string;
  n: string;
  label: Section;
}

export interface PortfolioContent {
  navItems: NavItem[];
}
