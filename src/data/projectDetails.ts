import { techImageMap } from "./workExperience";

export interface ProjectDetail {
  id: string;
  icon: string; // 아이콘 색상 또는 이미지 경로
  title: string;
  description: string;
  tech: string[];
  participants?: string;
  period?: string;
  links?: {
    site?: string;
    github?: string;
  };
  details: {
    title: string;
    items: string[];
  }[];
}

export const projectDetails: ProjectDetail[] = [
  {
    id: "relocation-platform",
    icon: "🔵", // 파란색 별/스타 아이콘
    title: "리로케이션 플랫폼 개발",
    description: "기획부터 DB 설계, 디자인, 프론트엔드 개발까지 전 과정을 주도한 리로케이션 플랫폼",
    tech: ["React", "TypeScript", "Zustand", "MySQL", "WordPress"],
    participants: "1명",
    period: "2024.12~",
    links: {
      site: "https://softlanders.com/",
    },
    details: [
      {
        title: "서비스 기획 및 DB 구조 설계",
        items: [
          "비자, 보험, 이사 등 리로케이션 도메인 분석",
          "견적·계약·결제를 분리한 데이터 모델 설계",
          "서비스 1건당 다수 견적이 가능한 구조 설계",
        ],
      },
      {
        title: "UX/UI 디자인",
        items: [
          "전체 IA(Information Architecture) 설계",
          "역할별 대시보드 디자인",
          "견적 비교 및 결제 UX 설계",
        ],
      },
      {
        title: "프론트엔드 개발",
        items: [
          "React + TypeScript 기반 컴포넌트 설계",
          "Zustand를 활용한 견적/계약 상태 전역 관리",
          "역할 기반 화면 분기 및 접근 제어",
        ],
      },
    ],
  },
  {
    id: "wp-theme",
    icon: "🟢", // 초록색 아이콘
    title: "WP 테마 개발 (약 70개 테마)",
    description: "다양한 산업 분야의 워드프레스 테마를 개발했습니다. 반응형 디자인과 최적화된 성능을 갖춘 커스터마이징 가능한 테마들을 제작했습니다.",
    tech: ["PHP", "WordPress", "JavaScript", "CSS"],
    participants: "1명",
    period: "2018~2025",
    links: {
      site: "https://agwwmscog.org/",
    },
    details: [
      {
        title: "테마 구조·템플릿 개발",
        items: [
          "공통 레이아웃, 헤더·푸터, 페이지 템플릿 설계",
          "PHP 템플릿과 훅을 활용한 클라이언트별 커스텀 구조",
          "70개 규모에서도 유지보수가 가능한 재사용 구조",
        ],
      },
      {
        title: "반응형·퍼포먼스",
        items: [
          "모바일·태블릿·데스크톱 반응형 레이아웃",
          "불필요한 스크립트·스타일 로딩 최소화",
        ],
      },
      {
        title: "다수 클라이언트·도메인 대응",
        items: [
          "연합회, 국가별 사이트 같은 도메인 환경 대응",
          "옵션과 커스터마이저를 통한 차별화",
        ],
      },
    ],
  },
  {
    id: "portfolio",
    icon: "🔵", // 파란색 아이콘
    title: "포트폴리오 웹사이트 개발",
    description: "Next.js App router를 활용하여 SSG 방식으로 제작한 포트폴리오 웹사이트",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    participants: "1명",
    period: "2024.12~",
    links: {
      site: "#",
      github: "https://github.com/s921132820/",
    },
    details: [
      {
        title: "Next.js App Router 활용",
        items: [
          "Server Component로 SSG 방식의 웹 제작",
          "Intercept Routes 기능 활용하여 고유한 주소를 갖는 Modal 페이지 구현",
        ],
      },
      {
        title: "디자인 및 스타일링",
        items: [
          "Tailwind CSS를 활용한 반응형 디자인",
          "Figma를 활용한 UI/UX 디자인",
        ],
      },
    ],
  },
];

export { techImageMap };
