import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t-2 border-foreground bg-background"
    >
      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg font-bold text-foreground">
            Portfolio
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            © 2024 — Designed & Built with Care
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
