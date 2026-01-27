import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { label: "소개", href: "/about", sectionId: "about" },
    { label: "기술", href: "/skills", sectionId: "skills" },
    { label: "프로젝트", href: "/projects", sectionId: "projects" },
    { label: "블로그", href: "/blog", sectionId: "blog" },
    { label: "연락하기", href: "/contact", sectionId: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    if (location.pathname === "/" && sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (location.pathname !== "/") {
      e.preventDefault();
      navigate(href);
      // 다른 페이지에서 Index로 이동한 후 섹션으로 스크롤
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border max-w-5xl mx-auto"
    >
      <nav className="px-6 py-4 flex items-center justify-center">
        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className={`nav-link ${
                  location.pathname === item.href ? "text-primary font-medium" : ""
                }`}
              >
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
