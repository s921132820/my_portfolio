import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-container py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">홈으로 돌아가기</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground text-lg">
              제작한 프로젝트들을 상세히 소개합니다.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />
                  <div className="relative p-8 md:p-12 bg-card border border-border rounded-lg card-hover">
                    <div
                      className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-start`}
                    >
                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-semibold mb-4 group-hover:text-primary transition-colors">
                            {project.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-sm px-4 py-2 rounded-full bg-secondary text-primary/80 border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Featured Themes */}
                        {project.featuredThemes && (
                          <div className="pt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                  <div className="p-4 space-y-3">
                                    <div className="space-y-1">
                                      <h4 className="text-base font-semibold text-foreground">
                                        {theme.title}
                                      </h4>
                                      <p className="text-sm text-muted-foreground">
                                        {theme.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="pt-4 flex gap-3">
                          {project.detailPath && (
                            <Link to={project.detailPath}>
                              <Button size="lg">
                                상세 보기
                              </Button>
                            </Link>
                          )}
                          {project.live && project.live !== "#" && (
                            <Button asChild size="lg" variant="outline">
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-5 h-5 mr-2" />
                                실서비스 보기
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="flex-1 w-full">
                        <div className="relative overflow-hidden rounded-lg border border-border">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
