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
        className="text-center"
      >
        <h2 className="font-mono text-primary text-sm mb-2">소개</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">웹디자인부터 개발까지 전 과정을 경험했습니다</h3>
        
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
          <p>
            안녕하세요. 저는 사용자 문제를 중심으로 서비스 전체 흐름을 고민하며 개발해온 프론트엔드 개발자입니다. 단순한 기능 구현을 넘어, 복잡한 문제를 사용자가 이해하기 쉬운 인터페이스로 풀어내는 과정에서 가장 큰 보람을 느낍니다.
          </p>
          <p>
            사용자 경험을 최우선으로 두고 기획 의도와 실제 사용 환경을 함께 고려하며 개발하는 것을 지향하고 있으며, 새로운 기술과 도구를 적극적으로 탐색하되 서비스의 안정성과 유지보수성을 해치지 않는 방향을 중요하게 생각합니다.
          </p>
          <p>
            현재는 React 생태계를 중심으로 TypeScript와 함께 개발하고 있으며, 타입 안전한 코드 구조와 재사용 가능한 컴포넌트 설계를 통해 제품의 완성도를 높이는 데 집중하고 있습니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
