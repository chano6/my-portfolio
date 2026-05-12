import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

const dotColors = {
  personal: "bg-[#e89478]",
  company: "bg-[#5a9fd4]",
  team: "bg-[#7ab87a]",
};

interface ProjectCardProps {
  project: Project;
  onOpen?: (projectId: string) => void;
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const dotColor = dotColors[project.category];

  return (
    <div
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-line bg-bg-elev text-left transition-all duration-(--t-fast) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_8px_24px_-16px_rgba(0,0,0,0.18)]"
      onClick={() => onOpen?.(project.id)}
    >
      <div className="relative h-24 overflow-hidden border-line border-b md:h-30"></div>
      <div className="flex flex-1 flex-col px-3.5 pt-3.5 pb-4 md:px-4.5 md:pt-4 md:pb-4.5">
        <div className="mb-2 flex items-center gap-2 text-[10.5px] text-fg-muted md:text-[11px]">
          <span>{project.year}</span>
          <span className="h-0.75 w-0.75 rounded-full bg-current opacity-60" />
          <span>{project.role}</span>
        </div>

        <h4 className="m-0 mb-2 flex items-start justify-between gap-2.5 font-semibold text-[15px] leading-[1.35] tracking-tight transition-colors duration-(--t-fast) md:text-base">
          <span className="group-hover:text-accent">{project.title}</span>
          <ArrowUpRight
            className="mt-0.5 shrink-0 text-fg-muted opacity-50 transition-all duration-(--t-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            size={12}
            strokeWidth={2.25}
          />
        </h4>

        <p className="m-0 mb-3.5 line-clamp-3 flex-1 text-[12.5px] text-fg-dim leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.25">
          <span className="inline-flex items-center gap-1.25 rounded-full border border-line bg-bg px-2 py-0.5 text-[10.5px] text-fg-dim tracking-wide">
            <span className={`h-1.25 w-1.25 rounded-full ${dotColor}`} />
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
