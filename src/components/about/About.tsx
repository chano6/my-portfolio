export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center px-8 pb-10 pt-32 md:h-screen md:px-16 md:pb-12 md:pt-20"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[280px_1fr] md:items-center md:gap-14">
        <div className="mx-auto w-full max-w-[280px]">
          <div className="aspect-[4/5] rounded-[2rem] border border-blue-border bg-blue-surface p-3 shadow-sm">
            <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-dashed border-blue-border bg-blue-background text-sm uppercase tracking-[0.18em] text-dark-muted">
              Profile Photo
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl font-bold uppercase tracking-[0.22em] text-blue-primary">
            About Me
          </p>
          <h2
            id="about-title"
            className="text-2xl font-semibold leading-tight text-dark-primary md:text-4xl"
          >
            Frontend developer focused on clear UI and steady user experience.
          </h2>
          <div className="space-y-3 text-sm leading-7 text-dark-muted md:text-base md:leading-8">
            <p>
              안녕하세요. 구조가 명확하고 사용하기 편한 인터페이스를 만드는
              프론트엔드 개발자를 지향하고 있습니다.
            </p>
            <p>
              Next.js와 TypeScript를 기반으로 컴포넌트를 정리하고, 작은
              인터랙션과 화면 흐름까지 자연스럽게 이어지도록 구현하는 데 관심이
              있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center md:mt-16">
        <div className="scroll-btn">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
