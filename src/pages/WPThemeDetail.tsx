import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const featuredThemes = [
  {
    title: "강원연합회 홈페이지",
    image: "/images/thumb-1.png",
    description: "국내 연합회 홈페이지",
    live: "https://agwwmscog.org/",
  },
  {
    title: "경기북부 연합회 홈페이지",
    image: "/images/thumb-1.png",
    description: "하나님의교회 세계복음선교협회 경기북부연합회",
    live: "https://aggbbwmscog.org/",
  },
  {
    title: "경기남부 연합회 홈페이지",
    image: "/images/thumb-1.png",
    description: "하나님의교회 세계복음선교협회 경기남부연합회",
    live: "https://aggnbwmscog.org/",
  },
  {
    title: "국가 홈페이지",
    image: "/images/thumb-2.png",
    description: "국가별로 제작된 홈페이지 테마",
    live: "https://seawmscog.org/",
  },
];

const WPThemeDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-container pt-12 pb-16 md:pt-16 md:pb-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            프로젝트
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-sm text-cyan-500 font-medium mb-3">
              WordPress · PHP · 반응형 · 약 70개 테마
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              WP 테마 개발 (약 70개 테마)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              다양한 산업·지역을 위한 워드프레스 테마를
              <strong className="text-foreground"> 반응형 · 커스터마이징 · 성능 </strong>
              중심으로 설계하고, 70개 규모까지 확장하며 개발했습니다.
            </p>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "규모", value: "약 70개 테마" },
              { label: "형태", value: "워드프레스 커스텀 테마" },
              {
                label: "역할",
                value: "테마 설계, 템플릿·스타일 개발, 반응형·퍼포먼스",
              },
              {
                label: "기술",
                value: "PHP, WordPress, JavaScript, CSS",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="p-4 rounded-lg border border-border bg-card/50"
              >
                <p className="text-xs font-medium text-muted-foreground mb-1">
                  {row.label}
                </p>
                <p className="text-sm text-foreground">{row.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Did */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-10">
            What I Did
          </h2>

          <div className="space-y-14 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold mb-3">테마 구조·템플릿 개발</h3>
              <p className="text-muted-foreground leading-relaxed">
                공통 레이아웃, 헤더·푸터, 페이지 템플릿을 나누고, PHP 템플릿과
                훅을 활용해 클라이언트별 커스텀을 최소 비용으로 넣을 수 있는
                구조로 설계했습니다. 70개 규모에서도 유지보수가 가능하도록
                재사용과 확장을 우선했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">반응형·퍼포먼스</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                모바일·태블릿·데스크톱에 맞춘 반응형 레이아웃과, 불필요한
                스크립트·스타일 로딩을 줄여 로딩 속도와 사용성을 맞췄습니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">다수 클라이언트·도메인 대응</h3>
              <p className="text-muted-foreground leading-relaxed">
                연합회, 국가별 사이트처럼 도메인과 콘텐츠가 다른 환경에서
                같은 테마 베이스를 쓰되, 로고·색상·메뉴·블록만 바꿔 쓸 수 있게
                옵션과 커스터마이저를 설계했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 대표 사례 - 연합회 / 국가 홈페이지 */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            대표 사례
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredThemes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-lg border border-border bg-card/50 overflow-hidden hover:border-cyan-500/50 transition-colors"
              >
                <div className="aspect-video bg-muted/30 relative overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-foreground">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                  {theme.live && theme.live !== "#" && (
                    <Button asChild size="sm" className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white">
                      <a href={theme.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1.5" />
                        사이트 보기
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Problem & Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">문제</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                70개 테마를 각각 따로 관리하면 수정·버그 대응이 불가능에 가깝고,
                클라이언트마다 디자인·기능 요구가 달라 공통화와 커스텀의
                균형이 필요했습니다.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">접근</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                공통 베이스 템플릿·스타일을 두고, 옵션·커스터마이저로 차이만
                넣는 구조로 정리했습니다. 반응형·성능 규칙을 테마 단에서
                맞춰두어 품질을 일정하게 유지했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Takeaways */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Takeaways
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            다수 프로젝트를 하나의 베이스로 이어가려면 재사용 가능한 구조와
            커스터마이징 포인트를 처음부터 잡아두는 게 중요하다는 걸
            체감했습니다. WordPress 생태계 안에서 확장·유지보수 가능한
            테마를 설계하는 경험을 쌓았습니다.
          </p>
        </section>

        {/* Tech */}
        <section className="section-container py-10 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Tech
          </p>
          <div className="flex flex-wrap gap-2">
            {["PHP", "WordPress", "JavaScript", "CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-sm bg-secondary/80 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA + 마무리 */}
        <section className="section-container py-16 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-foreground font-medium text-center sm:text-left">
              반응형과 재사용을 전제로 한 워드프레스 테마 개발을 70개 규모까지
              확장하며 진행했습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WPThemeDetail;
