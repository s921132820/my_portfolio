import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Star, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { workExperiences, techImageMap } from "@/data/workExperience";
import { projectDetails } from "@/data/projectDetails";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projectDetails[0] | null>(null);

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* 제목 - 가운데 정렬, 양쪽에 선 */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border"></div>
          <h2 className="text-muted-foreground font-medium text-lg whitespace-nowrap">업무 경험</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        
        <div className="w-fit mx-auto space-y-12">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-8 justify-center"
            >
              {/* 왼쪽: 날짜 + 별 아이콘 */}
              <div className="flex items-start gap-2 min-w-[120px]">
                <Star
                  className={`w-5 h-5 mt-0.5 ${
                    experience.isCurrent ? "text-blue-500 fill-blue-500" : "text-muted-foreground fill-muted-foreground"
                  }`}
                />
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {experience.date}
                </span>
              </div>

              {/* 오른쪽: 회사명, 설명, 기술 아이콘, 링크 */}
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  {experience.company}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {experience.description}
                </p>
                
                {/* 기술 아이콘들 */}
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech) => {
                    const imagePath = techImageMap[tech];
                    return imagePath ? (
                      <img
                        key={tech}
                        src={imagePath}
                        alt={tech}
                        className="w-6 h-6 object-contain"
                      />
                    ) : null;
                  })}
                </div>

                {/* 주요 업무 내용 보기 링크 */}
                {experience.detailPath && (
                  <Link
                    to={experience.detailPath}
                    className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    주요 업무 내용 보기
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 프로젝트 상세 섹션 */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-primary text-sm mb-2">프로젝트 상세</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              주요 프로젝트의 세부사항을 확인해보세요
            </h3>
            
            {/* 프로젝트 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {projectDetails.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  {/* 아이콘 */}
                  <div className="text-4xl mb-4">{project.icon}</div>
                  
                  {/* 제목 */}
                  <h4 className="text-lg font-bold text-foreground mb-3 text-left">
                    {project.title}
                  </h4>
                  
                  {/* 설명 */}
                  <p className="text-sm text-muted-foreground mb-4 text-left leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* 기술 아이콘들 */}
                  <div className="flex flex-wrap gap-2 justify-start">
                    {project.tech.map((tech) => {
                      const imagePath = techImageMap[tech];
                      return imagePath ? (
                        <img
                          key={tech}
                          src={imagePath}
                          alt={tech}
                          className="w-5 h-5 object-contain"
                        />
                      ) : null;
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 프로젝트 상세 모달 */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-8">
            <DialogHeader>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{selectedProject.icon}</div>
                <div className="flex-1">
                  <DialogTitle className="text-2xl font-bold mb-4 text-left">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 text-left">
              {/* 프로젝트 설명 */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">프로젝트 설명</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* 기술 스택 */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => {
                    const imagePath = techImageMap[tech];
                    return imagePath ? (
                      <img
                        key={tech}
                        src={imagePath}
                        alt={tech}
                        className="w-6 h-6 object-contain"
                      />
                    ) : null;
                  })}
                </div>
              </div>

              {/* 참여인원, 기간, 관련 링크 */}
              <div className="flex flex-wrap gap-6 text-sm">
                {selectedProject.participants && (
                  <div>
                    <span className="text-muted-foreground">참여인원: </span>
                    <span className="text-foreground">{selectedProject.participants}</span>
                  </div>
                )}
                {selectedProject.period && (
                  <div>
                    <span className="text-muted-foreground">기간: </span>
                    <span className="text-foreground">{selectedProject.period}</span>
                  </div>
                )}
                {selectedProject.links && (
                  <div className="flex gap-4">
                    <span className="text-muted-foreground">관련 링크: </span>
                    {selectedProject.links.site && selectedProject.links.site !== "#" && (
                      <a
                        href={selectedProject.links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        사이트
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Github
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* 상세 내용 */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4">상세 내용</h4>
                <div className="space-y-4">
                  {selectedProject.details.map((detail, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium text-foreground mb-2">
                        {index + 1}. {detail.title}
                      </p>
                      <ul className="space-y-1 ml-4">
                        {detail.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
