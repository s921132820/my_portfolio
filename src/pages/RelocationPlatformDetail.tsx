import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const RelocationPlatformDetail = () => {
  const flowSteps = [
    "서비스 선택",
    "견적 요청",
    "견적 비교",
    "계약 체결",
    "결제",
    "채팅",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-container py-12 md:py-16">
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
            <p className="text-sm text-teal-500 font-medium mb-3">
              ServiceDesign · DB · UXUI · React · Zustand
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              Relocation Platform (B2B/B2C)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              서비스 기획부터 DB 구조 설계, UX/UI 디자인, 프론트엔드 구현까지 전 과정을 맡아
              리로케이션 서비스의 견적–계약–결제 흐름을 사용자 중심의 단일 플로우로 완성한 플랫폼입니다.
            </p>
          </motion.div>
        </section>

        {/* Overview - 카드형 */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "기간", value: "약 1년 (20XX.XX ~ 20XX.XX)" },
              { label: "형태", value: "실서비스 플랫폼" },
              {
                label: "역할",
                value: "기획, DB 설계, UX·UI, 프론트엔드 개발",
              },
              {
                label: "기술",
                value: "React, TypeScript, Zustand, MySQL, WordPress(Dokan)",
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

        {/* What I Did - 문단 중심 */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-10">
            What I Did
          </h2>

          <div className="space-y-14 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold mb-3">서비스 기획</h3>
              <p className="text-muted-foreground leading-relaxed">
                비자, 보험, 이사 등 리로케이션 도메인을 분석하고, 고객·기업담당자·판매자·관리자
                역할을 나눠 서비스 선택부터 다중 견적, 계약, 결제까지 플로우를 설계했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">DB 구조 설계</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                견적·계약·결제를 분리하고, 한 건당 여러 견적이 들어오는 구조와 상태 확장을
                고려한 테이블을 설계했습니다. 프론트 위주라도 데이터 모델을 같이 짜보는 경험이
                이 프로젝트에서 중요했습니다.
              </p>
              <div className="rounded-lg border border-dashed border-border bg-muted/30 h-44 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">ERD</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">UX/UI 디자인</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                전체 IA, 역할별 대시보드, 견적 비교와 결제 화면을 디자인했습니다. 와이어프레임에서
                실제 UI까지 이어가며 일관된 플로우를 맞췄습니다.
              </p>
              <div className="rounded-lg border border-dashed border-border bg-muted/30 h-44 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">와이어프레임 / 실제 화면</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">프론트엔드 개발</h3>
              <p className="text-muted-foreground leading-relaxed">
                React, TypeScript로 컴포넌트를 나누고, Zustand로 견적·계약 상태를 전역에서
                관리했습니다. 역할에 따른 화면 분기와 접근 제어, API 연동과 예외 처리를
                담당했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Key Flow - 스텝 + 이미지 2~3개만 */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            User Flow
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {flowSteps.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-md bg-secondary/80 text-sm font-medium">
                  {step}
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-muted-foreground/50">→</span>
                )}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-dashed border-border bg-muted/30 aspect-video flex items-center justify-center">
              <span className="text-sm text-muted-foreground">서비스 선택 · 견적 요청</span>
            </div>
            <div className="rounded-lg border border-dashed border-border bg-muted/30 aspect-video flex items-center justify-center">
              <span className="text-sm text-muted-foreground">견적 비교 · 계약 · 결제</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution - 짧게 */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Problem & Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">문제</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                서비스·견적·계약·결제 상태가 섞여 관리하기 어렵고, 고객/기업/판매자/관리자마다
                필요한 화면과 분기가 달랐습니다.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">접근</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                상태를 enum처럼 통일해서 관리하고, Zustand로 전역 상태를 잡은 뒤, 역할별
                UI 분기와 접근 제어를 한 구조로 설계했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Takeaways - 한두 문단 */}
        <section className="section-container py-12 md:py-16 border-t border-border">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Takeaways
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            기획, DB, UI, 프론트가 한 흐름이라는 걸 직접 경험했고, 프론트엔드가 서비스
            구조를 같이 설계할 수 있다는 걸 느꼈습니다. 실서비스를 전제로 한 확장과 예외
            처리도 이번에 많이 배웠습니다.
          </p>
        </section>

        {/* Tech - 한 줄 칩 */}
        <section className="section-container py-10 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Tech
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Zustand", "MySQL", "WordPress(Dokan)", "Toss Payments", "Stripe"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-sm bg-secondary/80 text-muted-foreground"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>

        {/* CTA + 한 줄 마무리 */}
        <section className="section-container py-16 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-foreground font-medium text-center sm:text-left">
              기획과 데이터 구조까지 같이 설계하는 프론트엔드 개발자로 이 프로젝트를
              진행했습니다.
            </p>
            <Button asChild>
              <a
                href="https://softlanders.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                실서비스 보기
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RelocationPlatformDetail;
