import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypedLine from "../common/typed-line";

function HeroSection() {
  return (
    <section id="top" className="pt-12 pb-8 md:pt-24 md:pb-16">
      <div className="mb-4.5 inline-flex items-center gap-2 text-[13px] text-accent">
        <span className="text-fg-muted">$</span>
        <TypedLine
          text={`echo "hello, world"`}
          delay={50}
          className="ml-0.5 inline-block h-[1em] w-[0.55ch] animate-[blink_1.05s_steps(2,jump-none)_infinite] bg-accent align-[-2px]"
        />
      </div>
      <h1 className="mb-3 font-bold text-[30px] leading-[1.05] tracking-[-0.035em] md:text-[clamp(34px,5vw,52px)]">
        박찬오<span className="font-normal text-fg-muted">.</span>
      </h1>
      <h2 className="m-0 mb-7 font-medium text-[clamp(18px,5.5vw,24px)] text-fg-dim leading-[1.15] tracking-tight md:text-[clamp(22px,3.4vw,34px)]">
        제품을 만드는 프론트엔드 개발자
      </h2>
      <p className="m-0 mb-9 max-w-140 text-[13px] text-fg-dim leading-[1.75] md:text-sm">
        실제 사용자에게 닿는 인터페이스에 진심입니다. React·TypeScript를
        주력으로, 성능과 접근성을 모두 챙기면서도 디테일이 살아있는 제품을
        만듭니다. 디자이너와 가까이 일하며{" "}
        <span className="font-normal text-accent">
          코드와 디자인 사이의 간극을 좁히는 것
        </span>
        에 가장 큰 에너지를 쏟습니다.
      </p>

      <div className="flex w-full flex-wrap gap-2.5">
        <Button className="inline-flex h-auto flex-1 cursor-pointer items-center gap-2 rounded-(--radius) border border-accent bg-accent px-3.5 py-3 font-medium text-accent-fg text-xs tracking-wide transition-all duration-(--t-fast) hover:border-accent hover:brightness-95 md:flex-none md:px-4 md:py-2.75">
          프로젝트 보기
          <ArrowRight
            className="size-3 transition-transform duration-(--t-fast) group-hover/button:translate-x-0.75"
            strokeWidth={2.25}
          />
        </Button>
        <Button className="inline-flex h-auto flex-1 cursor-pointer items-center gap-2 rounded-(--radius) border border-line-strong bg-bg px-3.5 py-3 font-medium text-fg text-xs tracking-wide transition-all duration-(--t-fast) hover:border-accent hover:brightness-95 md:flex-none md:px-4 md:py-2.75">
          연락하기
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
