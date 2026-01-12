import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Styled-Components", "Sass", "Framer Motion"],
    },
    {
      title: "Tools",
      skills: ["Git", "Figma", "VS Code", "Webpack", "Vite"],
    },
    {
      title: "Others",
      skills: ["Node.js", "REST API", "GraphQL", "Firebase", "AWS"],
    },
  ];

  return (
    <section id="skills" className="bg-card/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">02.</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg card-hover"
              >
                <h4 className="font-mono text-primary mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
