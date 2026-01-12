import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-2">01.</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">About Me</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              안녕하세요! 저는 4년차 프론트엔드 개발자입니다. 
              복잡한 문제를 단순하고 아름다운 인터페이스로 해결하는 것을 좋아합니다.
            </p>
            <p>
              사용자 중심의 개발을 지향하며, 최신 웹 기술 트렌드를 따라가면서도 
              안정적이고 유지보수하기 쉬운 코드를 작성하기 위해 노력합니다.
            </p>
            <p>
              현재는 React 생태계를 중심으로 개발하고 있으며, 
              TypeScript와 함께 타입 안전한 코드 작성에 관심이 많습니다.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-secondary border border-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-6xl text-primary/30">{'{ }'}</span>
              </div>
            </div>
            <div className="absolute -inset-1 border border-primary/30 rounded-lg -z-10 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
