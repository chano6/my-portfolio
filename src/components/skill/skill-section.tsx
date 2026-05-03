import { Skill } from "@/types";
import SectionLayout from "../common/section-layout";

interface SkillSectionProps {
  skills: Skill[];
}

function SkillSection({ skills }: SkillSectionProps) {
  return (
    <SectionLayout id="skills" title="02 — skills">
      <h3 className="m-0 mb-8 font-semibold text-[22px] leading-[1.2] tracking-tight md:text-[28px]">
        도구와 언어
      </h3>

      <div className="group/row grid grid-cols-1 gap-0 border-line border-t pt-4.5 md:grid-cols-[200px_1fr] md:gap-x-5 md:gap-y-3">
        {skills.map(({ cat, items }) => (
          <div key={cat} className="contents">
            <div className="pt-3.5 pb-1.5 text-fg-muted text-xs md:pt-1 md:pb-0">
              {cat}
            </div>
            <div className="flex flex-wrap gap-1.5 border-line border-b border-dashed pb-3.5 group-last/row:border-b-0">
              {items.map((item) => (
                <span
                  key={item}
                  className="inline-flex cursor-default items-center rounded-(--radius) border border-line bg-bg-elev px-2.25 py-1 text-[11px] text-fg-dim transition-all duration-(--t-fast) hover:border-accent hover:text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default SkillSection;
