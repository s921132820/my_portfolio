import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      description:
        "React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 결제 시스템과 실시간 재고 관리 기능을 구현했습니다.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
    },
    {
      number: "02",
      title: "Task Management App",
      description:
        "팀 협업을 위한 태스크 관리 애플리케이션. 드래그 앤 드롭과 실시간 동기화를 지원합니다.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      year: "2023",
    },
    {
      number: "03",
      title: "Analytics Dashboard",
      description:
        "데이터 시각화를 위한 대시보드. 복잡한 데이터를 직관적인 차트로 표현합니다.",
      tech: ["React", "D3.js", "TailwindCSS", "REST API"],
      year: "2023",
    },
  ];

  return (
    <section id="projects" className="section-container bg-card" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-4">
          — Selected Works
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Featured <span className="italic">Projects</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary" />
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group grid md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-2">
              <span className="font-serif text-6xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                {project.number}
              </span>
              <p className="font-mono text-sm text-muted-foreground mt-2">{project.year}</p>
            </div>

            <div className="md:col-span-10 border-2 border-foreground bg-background p-8 group-hover:vintage-shadow transition-all group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
