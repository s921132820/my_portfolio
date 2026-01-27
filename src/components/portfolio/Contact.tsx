import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, PenLine } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/s921132820/" },
    { icon: PenLine, label: "Blog", href: "https://itconquest.tistory.com/" },
    { icon: Mail, label: "Email", href: "mailto:s92113282@gmail.com" },
  ];

  return (
    <section id="contact" className="bg-card/50" ref={ref}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">연락하기</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">새로운 기회나 협업에 대한 제안을 환영합니다</h3>
          
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            새로운 기회나 협업에 대한 제안을 환영합니다.
            <br />
            언제든지 연락 주세요!
          </p>
          
          <motion.a
            href="mailto:s92113282@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity mb-12"
          >
            이메일 보내기
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
