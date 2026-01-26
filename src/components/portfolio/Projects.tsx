import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 홈페이지에서는 처음 2개만 표시
  const displayedProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-2">03.</h2>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Projects</h3>
          <Link to="/projects">
            <Button variant="outline" size="sm">
              모든 프로젝트 보기
            </Button>
          </Link>
        </div>
        
        <div className="space-y-16">
          {displayedProjects.map((project, index) => {
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
                                className="group/theme relative overflow-hidden rounded-lg border border-border bg-card/50 hover:border-teal-500/50 transition-all duration-300"
                              >
                                <div className="aspect-video relative overflow-hidden">
                                  <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover/theme:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/theme:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-3 space-y-2">
                                  <div className="space-y-1">
                                    <h5 className="text-sm font-semibold text-foreground">
                                      {theme.title}
                                    </h5>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                      {theme.description}
                                    </p>
                                  </div>
                                  {theme.live && theme.live !== "#" && (
                                    <Button
                                      asChild
                                      size="sm"
                                      className="w-full bg-teal-500 hover:bg-teal-600 text-white border-teal-500"
                                    >
                                      <a
                                        href={theme.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="w-3 h-3 mr-1.5" />
                                        바로가기
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
