export interface WorkExperience {
  date: string;
  company: string;
  description: string;
  tech: string[];
  detailPath?: string;
  isCurrent?: boolean;
}

export const workExperiences: WorkExperience[] = [
  {
    date: "2025 - 현재",
    company: "소프트랜더스",
    description: "글로벌 리로케이션 플랫폼 기획 및 개발",
    tech: ["React", "TypeScript", "Zustand", "Figma", "MySQL", "AWS Amplify"],
    isCurrent: true,
  },
  {
    date: "2018 - 2025",
    company: "WMC",
    description: "워드프레스 테마 개발 및 유지보수\nDB 설계 및 관리",
    tech: ["PHP", "JavaScript", "WordPress", "Adobe XD", "MySQL"],
    isCurrent: false,
  },
  {
    date: "2014 - 2018",
    company: "세파란",
    description: "홈페이지 관리\nUI/UX 디자이너",
    tech: ["CSS", "JavaScript", "Adobe XD"],
    isCurrent: false,
  },
];

// 기술 이름을 이미지 경로로 매핑
export const techImageMap: Record<string, string> = {
  React: "/images/skills/react-VS4Vwy6It1uAZy63ihXuYvHqqYkY1X.webp",
  TypeScript: "/images/skills/typescript-50YJFG5dzDLgPyvDvGxy6XZ6oMqjKi.webp",
  JavaScript: "/images/skills/Javascript-MpKcuqKobxaQkAaZf03pqCuY5wZWia.webp",
  Zustand: "/images/skills/zustand-DAWNPceccDt2yhiEp33BrlQTIHbuuh.webp",
  Redux: "/images/skills/Redux-OPRBQPUl3kg0BnNpys48ZbhxE3zWJO.webp",
  MySQL: "/images/skills/icons8-mysql-96.png",
  WordPress: "/images/skills/icons8-wp-96.png",
  PHP: "/images/skills/icons8-php-100.png",
  "Adobe XD": "/images/skills/XD-lcu11VNwPJRbGI06PWDyXpeGT0GNuJ.webp",
  "Tailwind CSS": "/images/skills/tailwind-css-Ac4YsB1L03P1CGQqjaJlIYKcWjAxtf.webp",
  Figma: "/images/skills/figma-IiFO7yrdgnjBSjpxsCokIusUg6AoGO.webp",
  GitHub: "/images/skills/github-Mxif6CX9Gaip3dXvGCrgX7casaJM3D.webp",
};
