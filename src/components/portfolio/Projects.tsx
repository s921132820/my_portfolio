import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "React와 TypeScript로 구축한 현대적인 이커머스 플랫폼. 사용자 경험 최적화와 성능 개선에 집중했습니다.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Dashboard Analytics",
      description: "실시간 데이터 시각화 대시보드. 복잡한 데이터를 직관적으로 표현하는 인터랙티브 차트를 구현했습니다.",
      tech: ["Next.js", "D3.js", "Framer Motion", "PostgreSQL"],
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Social Media App",
      description: "실시간 메시징과 피드 기능이 포함된 소셜 미디어 애플리케이션. WebSocket을 활용한 실시간 통신 구현.",
      tech: ["React", "Firebase", "Socket.io", "Redux"],
      color: "from-violet-500/20 to-purple-500/20",
    },
  ];

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-2">03.</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Projects</h3>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              <div className="relative p-6 md:p-8 bg-card border border-border rounded-lg card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-primary/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
