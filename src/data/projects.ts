export interface FeaturedTheme {
  title: string;
  image: string;
  description: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  image: string;
  live: string;
  featuredThemes?: FeaturedTheme[];
  detailPath?: string;
}

export const projects: Project[] = [
  {
    title: "Relocation Platform (B2B/B2C)",
    description: "기획부터 DB 설계, 디자인, 프론트엔드 개발까지 전 과정을 주도한 리로케이션 플랫폼",
    tech: ["React", "TypeScript", "Zustand", "MySQL", "WordPress"],
    color: "from-emerald-500/20 to-teal-500/20",
    image: "/images/thumb-4.png",
    live: "https://softlanders.com/",
    detailPath: "/projects/relocation-platform",
    featuredThemes: [
      {
        title: "역할별 대시보드",
        image: "/images/thumb-6.png",
        description: "실시간 데이터 시각화 대시보드"
      },
      {
        title: "관리자 시스템",
        image: "/images/thumb-5.png",
        description: "효율적인 데이터 관리 시스템"
      },
    ],
  },
  {
    title: "WP 테마 개발 (약 70개 테마)",
    description: "다양한 산업 분야의 워드프레스 테마를 개발했습니다. 반응형 디자인과 최적화된 성능을 갖춘 커스터마이징 가능한 테마들을 제작했습니다.",
    tech: ["php", "wordpress", "JavaScript", "CSS"],
    color: "from-cyan-500/20 to-blue-500/20",
    image: "/images/thumb-3.png",
    live: "https://agwwmscog.org/",
    detailPath: "/projects/wp-theme",
    featuredThemes: [
      {
        title: "연합회 홈페이지",
        image: "/images/thumb-1.png",
        description: "국내 연합회 홈페이지",
        live: "https://seawmscog.org/"
      },
      {
        title: "국가 홈페이지",
        image: "/images/thumb-2.png",
        description: "국가별로 제작된 홈페이지 테마",
        live: "#"
      },
    ],
  },
];
