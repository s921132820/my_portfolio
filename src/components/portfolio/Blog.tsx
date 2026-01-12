import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: "React 18의 새로운 기능들 살펴보기",
      excerpt: "Concurrent Features, Suspense, 그리고 새로운 훅들에 대해 알아봅니다.",
      date: "2024.01.15",
      category: "React",
      readTime: "8 min",
    },
    {
      title: "TypeScript 제네릭 완벽 가이드",
      excerpt: "실무에서 자주 사용되는 제네릭 패턴과 활용법을 정리했습니다.",
      date: "2024.01.08",
      category: "TypeScript",
      readTime: "12 min",
    },
    {
      title: "CSS Grid vs Flexbox: 언제 무엇을 사용할까",
      excerpt: "두 레이아웃 시스템의 차이점과 적절한 사용 시나리오를 비교합니다.",
      date: "2024.01.02",
      category: "CSS",
      readTime: "6 min",
    },
  ];

  return (
    <section id="blog" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-4">
          — Blog
        </p>
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Latest <span className="italic">Articles</span>
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="w-16 h-0.5 bg-primary mt-6" />
      </motion.div>

      <div className="space-y-0">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border-b-2 border-border last:border-b-0 py-8 cursor-pointer hover:bg-card/50 transition-colors -mx-4 px-4"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm">
                <span className="text-primary">0{index + 1}</span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="px-2 py-0.5 border border-border text-xs uppercase">
                  {post.category}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                <span className="font-mono text-sm">{post.readTime}</span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 md:hidden"
      >
        <a
          href="#"
          className="flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          View All Articles
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Blog;
