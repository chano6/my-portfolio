import { ArrowRight } from "lucide-react";
import { Project } from "@/types";
import SectionLayout from "../common/section-layout";
import ProjectCard from "./project-card";

interface ProjectSectionProps {
  projects: Project[];
  onOpen?: (projectId: string) => void;
  onSeeAll?: () => void;
}

function ProjectSection({ projects, onOpen, onSeeAll }: ProjectSectionProps) {
  const featured = projects.slice(0, 4);

  return (
    <SectionLayout id="projects" title="03 — projects">
      <div className="mb-5.5 flex items-baseline justify-between gap-3 md:m-0 md:mb-8">
        <h3 className="m-0 font-semibold text-[22px] leading-[1.2] tracking-tight md:text-[28px]">
          최근 작업
        </h3>

        {projects.length > featured.length && (
          <button
            type="button"
            className="group inline-flex cursor-pointer items-center gap-1.5 border-0 bg-none p-0 text-fg-dim text-xs transition-colors duration-(--t-fast) hover:text-accent"
            onClick={onSeeAll}
          >
            <span>더보기</span>
            <ArrowRight
              className="size-3 transition-transform duration-(--t-fast) group-hover:translate-x-0.75"
              strokeWidth={2.25}
            />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3.5">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default ProjectSection;
