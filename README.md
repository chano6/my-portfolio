# MY PORTFOLIO

Next.js(App Router) + TypeScript + Tailwind CSS 기반 개인 포트폴리오입니다.  
섹션 단위 컴포넌트 구조로 관리하며, 작은 규모에서 빠르게 확장하기 좋은 형태를 목표로 했습니다.

## Deploy

- URL: `https://your-portfolio.vercel.app`

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Features

- 섹션 기반 단일 페이지 구성
- 타이핑 애니메이션 Hero 섹션
- 공통 Header/Footer 레이아웃
- 반응형 UI

## Project Structure

```txt
my-portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── about/
│       │   └── About.tsx
│       ├── common/
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   └── TypingEffect.tsx
│       ├── contact/
│       │   └── Contact.tsx
│       ├── intro/
│       │   └── Intro.tsx
│       ├── projects/
│       │   └── Projects.tsx
│       └── skills/
│           └── Skills.tsx
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Why This Structure

- 개인 포트폴리오에 맞게 단순한 구조를 유지
- `components/{section}` 패턴으로 탐색이 쉬움
- 규모가 커지면 `features/`, `lib/`, `types/`를 점진적으로 추가 가능

## Getting Started

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인할 수 있습니다.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Contact

- GitHub: `https://github.com/your-id`
- LinkedIn: `https://linkedin.com/in/your-id`
- Email: `your.email@example.com`
