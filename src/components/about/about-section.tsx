import SectionLayout from "../common/section-layout";

function AboutSection() {
  return (
    <SectionLayout id="about" title="01 — about">
      <h3 className="m-0 mb-8 font-semibold text-[22px] leading-[1.2] tracking-tight md:text-[28px]">
        code 너머의 이야기
      </h3>

      <div className="mb-6 overflow-hidden rounded-(--radius) border border-line bg-bg-elev text-[13px]">
        <div className="flex items-center gap-2 border-line border-b bg-bg-sunken px-3.5 py-2.25 text-[11px] text-fg-muted">
          <span className="mr-1.5 inline-flex gap-1.5">
            <span className="h-2.25 w-2.25 rounded-full bg-line-strong" />
            <span className="h-2.25 w-2.25 rounded-full bg-line-strong" />
            <span className="h-2.25 w-2.25 rounded-full bg-line-strong" />
          </span>
          <span>~/about.ts</span>
        </div>

        <pre
          className="m-0 overflow-x-auto whitespace-pre-wrap px-3 py-3.5 font-[inherit] text-[13px] text-fg text-xs leading-[1.7] md:px-4.5 md:py-4 md:leading-[1.75]"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static markup, no user input
          dangerouslySetInnerHTML={{
            __html: `<span class="text-fg-muted italic">// what I care about</span>
<span class="text-[oklch(0.55_0.18_290)]">const</span> <span class="text-[oklch(0.65_0.16_230)]">me</span> = {
  <span class="text-[oklch(0.6_0.13_350)]">role</span>: <span class="text-[oklch(0.55_0.13_145)]">"frontend developer"</span>,
  <span class="text-[oklch(0.6_0.13_350)]">based_in</span>: <span class="text-[oklch(0.55_0.13_145)]">"seoul, kr"</span>,
  <span class="text-[oklch(0.6_0.13_350)]">years</span>: <span class="text-[oklch(0.65_0.16_30)]">5</span>,
  <span class="text-[oklch(0.6_0.13_350)]">obsessions</span>: [
    <span class="text-[oklch(0.55_0.13_145)]">"design systems"</span>,
    <span class="text-[oklch(0.55_0.13_145)]">"motion"</span>,
    <span class="text-[oklch(0.55_0.13_145)]">"typography"</span>,
    <span class="text-[oklch(0.55_0.13_145)]">"developer-experience"</span>
  ],
  <span class="text-[oklch(0.6_0.13_350)]">recent</span>: <span class="text-[oklch(0.55_0.13_145)]">"shipping a new design system"</span>,
};`,
          }}
        />
      </div>

      <p className="m-0 text-[13px] text-fg-dim leading-[1.75]">
        외주, 사이드 프로젝트, 그리고 팀에서 함께 만든 제품까지 — 빠르고 단단한
        프론트엔드를 짓는 일을 좋아합니다. 작은 디테일과 반복되는 문제 해결,
        그리고 디자이너와의 가까운 협업에서 가장 즐겁게 일합니다.
      </p>
    </SectionLayout>
  );
}

export default AboutSection;
