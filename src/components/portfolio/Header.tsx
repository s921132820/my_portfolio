import { motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "blog", href: "#blog" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-foreground"
    >
      <nav className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold text-foreground">
          Portfolio
        </a>
        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
