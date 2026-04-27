export type SectionId = "about" | "projects" | "skills" | "contact";

export interface NavItem {
  label: string;
  href: `#${SectionId}`;
  sectionId: SectionId;
}

export interface PortfolioContent {
  navItems: NavItem[];
}
