import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "React 18의 새로운 기능들: Concurrent Features 완벽 가이드",
      excerpt: "React 18에서 도입된 Concurrent Features의 핵심 개념과 실무 적용 방법을 알아봅니다.",
      date: "2024.01.15",
      readTime: "8분",
      tags: ["React", "JavaScript"],
      link: "#",
    },
    {
      title: "TypeScript 제네릭 마스터하기",
      excerpt: "복잡한 타입 시스템을 다루기 위한 제네릭의 고급 패턴과 실전 예제를 소개합니다.",
      date: "2024.01.08",
      readTime: "12분",
      tags: ["TypeScript", "JavaScript"],
      link: "#",
    },
    {
      title: "프론트엔드 성능 최적화: Core Web Vitals 개선하기",
      excerpt: "LCP, FID, CLS를 개선하여 사용자 경험을 향상시키는 실전 테크닉을 공유합니다.",
      date: "2023.12.20",
      readTime: "10분",
      tags: ["Performance", "Web"],
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary font-mono">04.</span> 기술 블로그
          </h2>
          <p className="text-muted-foreground">
            개발하면서 배운 것들을 기록하고 공유합니다.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={post.link}
                className="block p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
          >
            모든 글 보기
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
