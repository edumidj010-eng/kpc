
import { Project, Skill, OwnerProfile } from './types.ts';

export const OWNER: OwnerProfile = {
  name: "김제민 (Kim Gemini)",
  role: "프론트엔드 엔지니어 & UI/UX 디자이너",
  bio: "사용자 중심의 가치를 만드는 개발자입니다. 복잡한 문제를 단순하고 아름다운 코드로 해결하는 것을 즐깁니다. 최신 기술 스택을 활용하여 확장 가능하고 성능이 뛰어난 웹 애플리케이션을 구축합니다.",
  email: "hello@gemini.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI 스마트 대시보드",
    description: "Gemini API를 연동하여 실시간 데이터 분석 및 비즈니스 인사이트를 제공하는 반응형 관리자 대시보드입니다.",
    tags: ["React", "TypeScript", "Tailwind", "Gemini API"],
    imageUrl: "https://picsum.photos/seed/dashboard/800/600"
  },
  {
    id: "2",
    title: "친환경 이커머스 플랫폼",
    description: "지속 가능한 제품을 판매하는 쇼핑몰로, 사용자 경험을 극대화한 결제 시스템과 필터링 기능을 구현했습니다.",
    tags: ["Next.js", "Zustand", "Stripe"],
    imageUrl: "https://picsum.photos/seed/shop/800/600"
  },
  {
    id: "3",
    title: "모던 블로그 엔진",
    description: "마크다운 기반의 정적 사이트 생성기를 활용한 블로그로, 다크 모드와 SEO 최적화가 완벽하게 적용되었습니다.",
    tags: ["Remix", "Prisma", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/blog/800/600"
  }
];

export const SKILLS: Skill[] = [
  { name: "React & Next.js", level: 95, icon: "fa-brands fa-react" },
  { name: "TypeScript", level: 90, icon: "fa-solid fa-code" },
  { name: "Tailwind CSS", level: 95, icon: "fa-solid fa-palette" },
  { name: "Node.js", level: 85, icon: "fa-brands fa-node-js" },
  { name: "Python & AI Integration", level: 80, icon: "fa-solid fa-robot" }
];
