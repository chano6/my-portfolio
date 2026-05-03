import { PortfolioData, Skill } from "@/types";

const SKILLS: Skill[] = [
  {
    cat: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    cat: "Frameworks",
    items: ["React", "Next.js", "Remix", "SvelteKit", "Astro"],
  },
  {
    cat: "Styling",
    items: ["Tailwind", "CSS Modules", "Vanilla Extract", "Framer Motion"],
  },
  {
    cat: "Tooling",
    items: ["Vite", "Turborepo", "pnpm", "Vitest", "Playwright"],
  },
  {
    cat: "Backend·Infra",
    items: ["Node.js", "tRPC", "PostgreSQL", "Vercel", "Cloudflare"],
  },
  {
    cat: "Practices",
    items: [
      "Accessibility",
      "Performance",
      "Design Systems",
      "Type-driven dev",
    ],
  },
];

export const PORTFOLIO_DATA: PortfolioData = {
  SKILLS,
};
