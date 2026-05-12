import { ArrowRight, Link, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { GithubIcon } from "../icons";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const dotColors = {
  personal: "bg-[#e89478]",
  company: "bg-[#5a9fd4]",
  team: "bg-[#7ab87a]",
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dotColor = dotColors[project.category];

  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-100 grid animate-[fadeIn_180ms_ease-out] place-items-center items-stretch bg-[color-mix(in_oklab,var(--bg)_50%,#000_50%/0.55)] p-0 backdrop-blur-[6px] md:p-6" />
        <Dialog.Content className="fixed inset-x-0 top-0 bottom-0 z-100 flex max-h-screen w-full max-w-full animate-[modalIn_240ms_cubic-bezier(.2,.8,.3,1)] flex-col overflow-hidden rounded-none border border-line border-r-0 border-l-0 bg-bg-elev shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] md:inset-auto md:top-1/2 md:left-1/2 md:max-h-[calc(100vh-48px)] md:max-w-190 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[8px] md:border-r md:border-l">
          <Dialog.Title className="sr-only">{project.title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {project.summary}
          </Dialog.Description>
          <div className="flex shrink-0 items-center gap-3 border-line border-b bg-bg-sunken px-3.5 py-3">
            <span className="flex gap-1.5">
              <span className="h-2.75 w-2.75 rounded-full bg-red-400" />
              <span className="h-2.75 w-2.75 rounded-full bg-yellow-400" />
              <span className="h-2.75 w-2.75 rounded-full bg-green-400" />
            </span>
            <span className="flex-1 text-center text-[11px] text-fg-muted">
              ~/projects/{project.id}.md
            </span>
            <button
              type="button"
              className="grid h-6 w-6 cursor-pointer place-items-center rounded text-fg-muted transition-all duration-(--t-fast) hover:bg-bg hover:text-fg"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={12} />
            </button>
          </div>
          <div className="overflow-y-auto p-0">
            <div className="relative h-40 overflow-hidden border-line border-b bg-bg-sunken md:h-55">
              {/* 이미지 들어갈 예정 */}
            </div>

            <div className="px-4.5 pt-5.5 pb-7 md:px-7 md:pt-6.5 md:pb-8">
              <h2 className="m-0 mb-5 font-semibold text-[20px] tracking-tight md:text-2xl">
                {project.title}
              </h2>

              <div className="grid grid-cols-[80px_1fr] items-center gap-2.5 border-line border-t border-dashed py-2.25 text-[12.5px] md:grid-cols-[110px_1fr] md:gap-3.5 md:text-[13px]">
                <span className="text-fg-muted text-xs">year</span>
                <span>{project.year}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] items-center gap-2.5 border-line border-t border-dashed py-2.25 text-[12.5px] md:grid-cols-[110px_1fr] md:gap-3.5 md:text-[13px]">
                <span className="text-fg-muted text-xs">role</span>
                <span>{project.role}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] items-center gap-2.5 border-line border-t border-dashed py-2.25 text-[12.5px] md:grid-cols-[110px_1fr] md:gap-3.5 md:text-[13px]">
                <span className="text-fg-muted text-xs">category</span>
                <div>
                  <span className="inline-flex items-center gap-1.25 rounded-full border border-line bg-bg px-2 py-0.5 text-[10.5px] text-fg-dim tracking-wide">
                    <span
                      className={`h-1.25 w-1.25 rounded-full ${dotColor}`}
                    />
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] items-center gap-2.5 border-line border-t border-dashed py-2.25 text-[12.5px] md:grid-cols-[110px_1fr] md:gap-3.5 md:text-[13px]">
                <span className="text-fg-muted text-xs">stack</span>
                <div className="flex flex-wrap gap-1.25">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex cursor-default items-center rounded-lg border border-line bg-bg-elev px-1.75 py-0.75 text-[10.5px] text-fg-dim transition-all duration-(--t-fast) hover:border-accent hover:text-fg md:px-2.25 md:py-1 md:text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="mx-0 mt-6.5 mb-2.5 font-semibold text-[13px] text-fg">
                Overview
              </h4>
              <p className="m-0 mb-3 text-[13px] text-fg-dim leading-[1.7]">
                {/* overview content */}
              </p>

              <h4 className="mx-0 mt-6.5 mb-2.5 font-semibold text-[13px] text-fg">
                Highlights
              </h4>
              <ul className="m-0 mb-4 list-none p-0 text-[13px] text-fg-dim">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 leading-[1.7]">
                    <ArrowRight
                      size={12}
                      className="mt-[0.35em] shrink-0 text-accent"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5.5 flex flex-col gap-2 border-line border-t pt-4.5 md:flex-row">
                {project.links?.live && (
                  <Button className="inline-flex h-auto flex-1 cursor-pointer items-center gap-2 rounded-lg border border-accent bg-accent px-3.5 py-3 font-medium text-accent-fg text-xs tracking-wide transition-all duration-(--t-fast) hover:border-accent hover:brightness-95 md:flex-none md:px-4 md:py-2.75">
                    <Link className="size-3" />
                    <span>live site</span>
                    <ArrowRight
                      className="size-3 transition-transform duration-(--t-fast) group-hover/button:translate-x-0.75"
                      strokeWidth={2.25}
                    />
                  </Button>
                )}
                {project.links?.repo && (
                  <Button className="inline-flex h-auto flex-1 cursor-pointer items-center gap-2 rounded-lg border border-line-strong bg-bg px-3.5 py-3 font-medium text-fg text-xs tracking-wide transition-all duration-(--t-fast) hover:border-fg hover:brightness-95 md:flex-none md:px-4 md:py-2.75">
                    <GithubIcon size={12} strokeWidth={1.4} />
                    <span>repository</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ProjectModal;
