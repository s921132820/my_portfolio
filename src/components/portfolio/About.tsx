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
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-4">
            — About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Passionate about
            <br />
            <span className="italic">timeless design</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mb-8" />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              안녕하세요, 저는 3년차 프론트엔드 개발자입니다. 
              사용자 중심의 인터페이스를 설계하고, 
              세련된 웹 경험을 만드는 것에 열정을 가지고 있습니다.
            </p>
            <p>
              클래식한 디자인 원칙과 현대적인 기술을 조화롭게 
              결합하여, 시간이 지나도 가치있는 작품을 만들어갑니다.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-card border-2 border-foreground vintage-shadow p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-4xl font-bold text-primary">3+</span>
                <span className="text-muted-foreground">Years of Experience</span>
              </div>
              <div className="w-full h-px bg-border" />
              <div className="flex items-center gap-4">
                <span className="font-mono text-4xl font-bold text-primary">20+</span>
                <span className="text-muted-foreground">Projects Completed</span>
              </div>
              <div className="w-full h-px bg-border" />
              <div className="flex items-center gap-4">
                <span className="font-mono text-4xl font-bold text-primary">∞</span>
                <span className="text-muted-foreground">Cups of Coffee</span>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
