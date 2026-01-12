import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:your@email.com" },
  ];

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-4">
          — Contact
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's Work <span className="italic">Together</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />

        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          새로운 프로젝트나 협업에 관심이 있으시다면
          <br />
          언제든지 연락해 주세요.
        </p>

        <motion.a
          href="mailto:your@email.com"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-wider vintage-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform mb-16"
        >
          <Mail className="w-5 h-5" />
          Send a Message
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Or find me on
          </p>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-mono text-sm uppercase tracking-wider">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
