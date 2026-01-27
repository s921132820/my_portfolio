import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", image: "/images/skills/react-VS4Vwy6It1uAZy63ihXuYvHqqYkY1X.webp" },
    { name: "TypeScript", image: "/images/skills/typescript-50YJFG5dzDLgPyvDvGxy6XZ6oMqjKi.webp" },
    { name: "JavaScript", image: "/images/skills/Javascript-MpKcuqKobxaQkAaZf03pqCuY5wZWia.webp" },
    { name: "Tailwind CSS", image: "/images/skills/tailwind-css-Ac4YsB1L03P1CGQqjaJlIYKcWjAxtf.webp" },
    { name: "Zustand", image: "/images/skills/zustand-DAWNPceccDt2yhiEp33BrlQTIHbuuh.webp" },
    { name: "Redux", image: "/images/skills/Redux-OPRBQPUl3kg0BnNpys48ZbhxE3zWJO.webp" },
    { name: "React Hook Form", image: "/images/skills/react-hook-form-6QJmu1xQLx5FR95rD9AeJl6pVP5ZiY.webp" },
    { name: "RTL", image: "/images/skills/RTL-8w3vO7q4N7rsOXO5eB1JN4P4BIRPdP.webp" },
    { name: "Figma", image: "/images/skills/figma-IiFO7yrdgnjBSjpxsCokIusUg6AoGO.webp" },
    { name: "Adobe XD", image: "/images/skills/XD-lcu11VNwPJRbGI06PWDyXpeGT0GNuJ.webp" },
    { name: "Illustrator", image: "/images/skills/Illustrator-uFx3RgZ59svsAz70vO4bI5IajADMw5.webp" },
    { name: "Photoshop", image: "/images/skills/Photoshop-Obia0MwpqOabokIzsqb2vErqePfFpd.webp" },
    { name: "GitHub", image: "/images/skills/github-Mxif6CX9Gaip3dXvGCrgX7casaJM3D.webp" },
    { name: "AWS Amplify", image: "/images/skills/AWS-amplify-ejKQtQNWMdytVxyhQ6WkjEnsLG3PJt.webp" },
    { name: "MySQL", image: "/images/skills/icons8-mysql-96.png" },
    { name: "PHP", image: "/images/skills/icons8-php-100.png" },
    { name: "WordPress", image: "/images/skills/icons8-wp-96.png" },
  ];

  return (
    <section id="skills" className="bg-card/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-mono text-primary text-sm mb-2">기술 스택 및 도구</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">아래의 기술을 사용할 수 있습니다</h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center gap-1.5 p-3 bg-card border border-border rounded-lg card-hover hover:border-primary/50 transition-colors w-24 h-24"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xs font-medium text-foreground text-center leading-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
