import { PortfolioData, Project, Skill } from "@/types";

const PROJECTS: Project[] = [
  {
    id: "morphic",
    num: "01",
    title: "Morphic — 실시간 협업 화이트보드",
    role: "Lead Frontend",
    year: "2025",
    category: "company",
    org: "Acme Studio",
    featured: true,
    stack: ["Next.js", "TypeScript", "WebSocket", "Yjs", "Tailwind"],
    summary:
      "CRDT 기반 실시간 협업이 가능한 디자인 화이트보드. 100명 동시 접속에서도 60fps를 유지하도록 렌더 파이프라인을 최적화했습니다.",
    highlights: [
      "Canvas 가상화로 10,000+ 오브젝트도 부드럽게 렌더",
      "Yjs CRDT를 사용해 충돌 없는 동시 편집 구현",
      "커스텀 hooks 시스템으로 도구 추가 시간 70% 단축",
      "Lighthouse 성능 점수 96 / 접근성 100 달성",
    ],
    role_desc:
      "에디터 코어, 멀티플레이어 동기화 레이어, 디자인 시스템을 처음부터 설계하고 구현했습니다.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.78 0.14 70)",
  },
  {
    id: "lumen",
    num: "02",
    title: "Lumen — AI 코드 리뷰 대시보드",
    role: "Frontend Engineer",
    year: "2025",
    category: "team",
    org: "Devtool 사내 동아리",
    featured: true,
    stack: ["React 19", "Remix", "tRPC", "PostgreSQL", "Radix UI"],
    summary:
      "PR을 자동으로 분석해 잠재적 이슈와 개선점을 시각화하는 대시보드. 키보드 우선 UX로 개발자 워크플로에 자연스럽게 녹아들도록 설계했습니다.",
    highlights: [
      "Diff viewer를 처음부터 구현 — 1만 줄 PR도 즉시 렌더",
      "명령 팔레트로 모든 액션 키보드 접근 가능",
      "Suspense + streaming으로 초기 로드 1.2s → 0.4s",
      "주간 활성 사용자 12k 운영, 99.95% 가동률",
    ],
    role_desc:
      "PR 디테일 페이지와 명령 팔레트, 디자인 토큰 시스템을 담당했습니다.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.7 0.15 240)",
  },
  {
    id: "echo",
    num: "03",
    title: "Echo — 팟캐스트 검색 엔진",
    role: "Solo Project",
    year: "2024",
    category: "personal",
    org: "Side project",
    featured: true,
    stack: ["Next.js", "OpenAI", "pgvector", "Vercel AI SDK"],
    summary:
      '에피소드 전사를 임베딩해 의미 기반 검색을 제공하는 사이드 프로젝트. "이 주제에 대해 얘기한 에피소드 찾아줘"가 자연스럽게 동작합니다.',
    highlights: [
      "15만 에피소드 인덱싱, 평균 응답 220ms",
      "Streaming UI로 검색 결과 즉시 표시",
      "오디오 플레이어를 검색 결과와 인라인 통합",
      "Product Hunt #3 of the day",
    ],
    role_desc:
      "디자인부터 인프라까지 혼자 진행. 임베딩 파이프라인과 프론트엔드 모두 담당.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.72 0.14 320)",
  },
  {
    id: "pacer",
    num: "04",
    title: "Pacer — 러닝 트래커 PWA",
    role: "Frontend Engineer",
    year: "2024",
    category: "company",
    org: "Northwind Inc.",
    featured: false,
    stack: ["React", "Vite", "IndexedDB", "Service Worker", "Web Bluetooth"],
    summary:
      "오프라인 우선으로 동작하는 러닝 트래커. 심박 모니터를 BLE로 연결하고 GPS 트랙을 로컬에 저장합니다.",
    highlights: [
      "완전 오프라인 동작 — 동기화는 백그라운드에서",
      "Web Bluetooth로 심박 모니터 직접 연결",
      "Canvas 기반 트랙 시각화 컴포넌트 자체 제작",
      "iOS/Android 홈스크린 설치율 38%",
    ],
    role_desc:
      "오프라인 데이터 레이어와 시각화 컴포넌트, BLE 통합 작업을 담당했습니다.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.74 0.14 145)",
  },
  {
    id: "kanban",
    num: "05",
    title: "Tide — 미니멀 칸반 보드",
    role: "Solo Project",
    year: "2023",
    category: "personal",
    org: "Side project",
    featured: true,
    stack: ["SvelteKit", "Drizzle ORM", "Turso", "Auth.js"],
    summary:
      "단축키 위주의 가벼운 칸반 도구. 한 페이지에서 모든 작업이 끝나도록 흐름을 다듬었습니다.",
    highlights: [
      "드래그 없이 키보드만으로 모든 조작 가능",
      "Edge SQLite(Turso)로 어디서나 100ms 미만 응답",
      "Optimistic UI로 모든 액션이 즉시 반영",
      "오픈소스 — GitHub 1.2k stars",
    ],
    role_desc: "디자인, 개발, 배포 전부 단독 진행. 6주짜리 사이드 프로젝트.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.74 0.14 30)",
  },
  {
    id: "atlas",
    num: "06",
    title: "Atlas — B2B 분석 콘솔",
    role: "Frontend Engineer",
    year: "2023",
    category: "company",
    org: "Northwind Inc.",
    featured: false,
    stack: ["React", "Recharts", "GraphQL", "Storybook"],
    summary:
      "복잡한 데이터 쿼리를 빌더 형태로 추상화한 분석 도구. 비개발 직군도 1분 안에 리포트를 만들 수 있도록 설계.",
    highlights: [
      "쿼리 빌더 컴포넌트 처음부터 설계",
      "차트 라이브러리 추상화 레이어 구축",
      "온보딩 시간 평균 22분 → 4분 단축",
    ],
    role_desc: "쿼리 빌더와 차트 시각화 모듈 담당.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.72 0.13 200)",
  },
  {
    id: "kbd",
    num: "07",
    title: "kbd.dev — 키보드 빌드 로그",
    role: "Solo Project",
    year: "2023",
    category: "personal",
    org: "Side project",
    featured: false,
    stack: ["Astro", "MDX", "Cloudflare Pages"],
    summary:
      "커스텀 키보드 빌드 과정을 기록하는 정적 사이트. MDX로 블로그와 갤러리를 같이 운영합니다.",
    highlights: [
      "View Transitions로 부드러운 페이지 전환",
      "이미지 자동 최적화 파이프라인",
    ],
    role_desc: "전부 혼자.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.74 0.14 100)",
  },
  {
    id: "orbit",
    num: "08",
    title: "Orbit — 스터디 그룹 매칭",
    role: "Frontend Lead",
    year: "2022",
    category: "team",
    org: "대학 동아리",
    featured: false,
    stack: ["Vue 3", "Pinia", "Firebase"],
    summary:
      "관심사 기반으로 스터디 그룹을 매칭해주는 학생용 앱. 4인 팀에서 프론트엔드 리딩.",
    highlights: ["실시간 매칭 알고리즘 시각화", "교내 사용자 1,200명 도달"],
    role_desc: "프론트엔드 아키텍처 + 매칭 UI.",
    links: { live: "#", repo: "#" },
    swatch: "oklch(0.72 0.13 280)",
  },
];

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
  PROJECTS,
};
