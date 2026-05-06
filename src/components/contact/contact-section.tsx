import { Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import SectionLayout from "../common/section-layout";

function ContactSection() {
  return (
    <SectionLayout id="skills" title="04 — contact">
      <h3 className="m-0 mb-8 font-semibold text-[22px] leading-[1.2] tracking-tight md:text-[28px]">
        함께 일해요
      </h3>

      <div className="order rounded-(--radius) border-line bg-bg-elev px-4.5 py-5.5 pb-6.5 md:px-7 md:pt-7">
        <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-2.5 py-1.25 text-[11px] text-fg-dim">
          <div className="relative inline-flex h-1.75 w-1.75 shrink-0">
            <span className="absolute -inset-0.75 animate-[ping_1.8s_ease-out_infinite] rounded-full bg-green-400/35" />
            <span className="absolute inset-0 rounded-full bg-green-500" />
          </div>
          <span>available for new projects · Q2 2026</span>
        </div>

        <h3 className="m-0 mb-1.5 font-semibold text-[18px] tracking-tight md:text-[22px]">
          좋은 제품을 같이 만들 분을 찾고 있어요.
        </h3>

        <p className="m-0 mb-5 text-[13px] text-fg-dim leading-relaxed">
          프로덕트 단위 기여, 디자인 시스템 구축, 까다로운 인터랙션 등. 어떤
          이야기든 편하게 메일 주세요.
        </p>

        <div className="flex flex-wrap gap-2">
          <Link
            className="inline-flex items-center gap-2 rounded-(--radius) border border-line bg-bg px-2.5 py-2 text-[11.5px] text-fg-dim transition-all duration-(--t-fast) hover:-translate-y-px hover:border-fg hover:text-fg md:px-3 md:py-2.25 md:text-xs"
            href="mailto:hello@example.com"
          >
            <Mail size={13} strokeWidth={1.4} />
            <span>
              <span className="text-accent">email</span> · hello@example.com
            </span>
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-(--radius) border border-line bg-bg px-2.5 py-2 text-[11.5px] text-fg-dim transition-all duration-(--t-fast) hover:-translate-y-px hover:border-fg hover:text-fg md:px-3 md:py-2.25 md:text-xs"
            href="mailto:hello@example.com"
          >
            <GithubIcon size={13} strokeWidth={1.4} />
            <span>
              <span className="text-accent">github</span> · @yourname
            </span>
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContactSection;
