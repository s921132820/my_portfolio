import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 relative">
      {/* Decorative corners */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-foreground" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-foreground" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-b-2 border-l-2 border-foreground" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-b-2 border-r-2 border-foreground" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-serif text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight"
        >
          Crafting Digital
          <br />
          <span className="text-primary italic">Experiences</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-0.5 bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto"
        >
          사용자 경험을 최우선으로 생각하며, 
          아름다운 인터페이스와 견고한 코드를 만들어갑니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-foreground text-background font-mono text-sm uppercase tracking-wider vintage-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
          >
            View Works
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-foreground text-foreground font-mono text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
