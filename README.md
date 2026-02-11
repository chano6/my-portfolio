# 👋 안녕하세요, [이름]입니다!

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2F[GitHub아이디]%2Fmy-portfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

> [한 줄 소개를 적어주세요. 예: 사용자 경험을 중시하는 프론트엔드 개발자입니다.]

🔗 **배포 링크**: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## 📌 About Me

- 🎓 [학력 또는 경력을 적어주세요]
- 💼 [현재 직무/직장 또는 구직 중임을 적어주세요]
- 🌱 현재 [관심 있는 기술/공부 중인 것]을 학습하고 있습니다
- 📫 연락처: [cocosh6@naver.com](mailto:your.email@example.com)

---

## 🛠 Tech Stack

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

<!-- 사용하는 백엔드 기술이 있다면 추가하세요 -->

### Tools

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

---

## 🚀 Features

- ✨ 반응형 디자인
- 🌙 다크모드 지원 (예정)
- 📱 모바일 친화적 UI
- ⚡ Next.js App Router 사용
- 🎨 Tailwind CSS로 스타일링

---

## 📂 프로젝트 구조

```
my-portfolio/
├── content/                        # 📝 프로젝트 글(.mdx) 저장소 (Local DB 역할)
│   └── projects/
│       └── project-name.mdx
│
├── public/                         # 🖼️ 이미지 등 정적 에셋
│   └── images/
│       └── projects/
│
├── src/
│   ├── app/                        # ⚡ 페이지 라우팅 (App Router)
│   │   ├── @modal/                 # 🪟 [Parallel] 모달 렌더링 슬롯
│   │   │   ├── (.)project/[slug]/  # [Intercepting] 프로젝트 상세 경로 가로채기
│   │   │   │   └── page.tsx        # 모달 내에서 보여질 상세 UI
│   │   │   └── default.tsx         # 모달이 없을 때 빈 컴포넌트 (null)
│   │   ├── project/[slug]/         # 📂 프로젝트 상세 페이지 (직접 접근 시)
│   │   │   └── page.tsx
│   │   ├── layout.tsx              # 🌍 글로벌 레이아웃 (Header, Footer)
│   │   ├── page.tsx                # 🏠 메인 페이지 (Hero + About + Projects + Contact)
│   │   └── globals.css
│   │
│   ├── components/                 # 🧩 컴포넌트
│   │   ├── hero/                   # 🎬 히어로 섹션
│   │   │   └── Hero.tsx
│   │   ├── about/                  # 👤 소개 섹션
│   │   │   └── About.tsx
│   │   ├── projects/               # 💼 프로젝트 섹션
│   │   │   ├── Projects.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── skills/                 # 🛠️ 스킬 섹션
│   │   │   └── Skills.tsx
│   │   ├── contact/                # 📞 연락처 섹션
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Modal.tsx
│   │
│   └── lib/                        # 🛠️ 유틸리티 (마크다운 파싱, 날짜 변환 등)
│
├── tailwind.config.ts              # 🎨 스타일 설정
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🏃‍♂️ 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

---

## 📞 Contact

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/[GitHub아이디])
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/[LinkedIn아이디])
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

---

<p align="center">
  Made with ❤️ by [이름]
</p>
