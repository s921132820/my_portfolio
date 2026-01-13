import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "WP 테마 개발 (약 70개 테마)",
      description: "다양한 산업 분야의 워드프레스 테마를 개발했습니다. 반응형 디자인과 최적화된 성능을 갖춘 커스터마이징 가능한 테마들을 제작했습니다.",
      tech: ["php", "JavaScript", "CSS"],
      color: "from-cyan-500/20 to-blue-500/20",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      live: "#",
      featuredThemes: [
        {
          title: "비즈니스 테마",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          description: "기업형 웹사이트를 위한 전문적인 테마"
        },
        {
          title: "이커머스 테마",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
          description: "온라인 쇼핑몰을 위한 최적화된 테마"
        },
      ],
    },
    {
      title: "플랫폼 개발",
      description: "다양한 플랫폼을 개발했습니다. 실시간 데이터 시각화, 대시보드, 관리자 시스템 등 사용자 경험을 중시한 플랫폼들을 구축했습니다.",
      tech: ["React", "TypeScript"],
      color: "from-emerald-500/20 to-teal-500/20",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      live: "#",
      featuredThemes: [
        {
          title: "대시보드 플랫폼",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
          description: "실시간 데이터 시각화 대시보드"
        },
        {
          title: "관리자 시스템",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          description: "효율적인 데이터 관리 시스템"
        },
      ],
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
        
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                <div className="relative p-6 md:p-8 bg-card border border-border rounded-lg card-hover">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h4 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-primary/80 border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Featured Themes - 대표 테마 2개 표시 */}
                      {project.featuredThemes && (
                        <div className="pt-4 space-y-3">
                          <p className="text-sm font-medium text-primary/90">대표 작품</p>
                          <div className="grid grid-cols-2 gap-3">
                            {project.featuredThemes.map((theme, themeIndex) => (
                              <div
                                key={themeIndex}
                                className="group/theme relative overflow-hidden rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
                              >
                                <div className="aspect-video relative overflow-hidden">
                                  <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover/theme:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/theme:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-3 space-y-1">
                                  <h5 className="text-sm font-semibold text-foreground">
                                    {theme.title}
                                  </h5>
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {theme.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 pt-4">
                        <Button asChild size="sm">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            바로가기
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="flex-1 w-full">
                      <div className="relative overflow-hidden rounded-lg border border-border">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
