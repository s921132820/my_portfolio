import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Next.js", "Vue.js"],
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Styled Components", "SCSS"],
    },
    {
      title: "Tools",
      skills: ["Git", "Figma", "Webpack", "Vite"],
    },
  ];

  return (
    <section id="skills" className="section-container bg-card" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-4">
          — Skills
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          My <span className="italic">Expertise</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="p-8 border-2 border-foreground bg-background"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="font-mono text-sm text-primary">0{categoryIndex + 1}</span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
