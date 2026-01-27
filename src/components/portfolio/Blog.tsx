import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "프론트엔드 개발자가 알아야 할 회원가입 시 이메일 대소문자 처리 기준",
      excerpt: "회원가입 시 이메일 대소문자 처리 기준을 알아봅니다.",
      date: "2025.12.24",
      readTime: "5분",
      tags: ["React", "JavaScript"],
      link: "https://itconquest.tistory.com/entry/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%8B%9C-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90-%EC%B2%98%EB%A6%AC-%EA%B8%B0%EC%A4%80",
    },
    {
      title: "React Server Components(RSC) 보안 취약점 발견 및 공식 패치 발표 정리",
      excerpt: "React Server Components(RSC) 보안 취약점 발견 및 공식 패치 발표 정리를 알아봅니다.",
      date: "2025.12.09",
      readTime: "5분",
      tags: ["TypeScript", "React"],
      link: "https://itconquest.tistory.com/entry/React-Server-Components-RSC-%EB%B3%B4%EC%95%88-%EC%B7%A8%EC%95%BD%EC%A0%90-%EB%B0%9C%EA%B2%AC-%EB%B0%8F-%EA%B3%B5%EC%8B%9D-%ED%8C%A8%EC%B9%98-%EB%B0%9C%ED%91%9C-%EC%A0%95%EB%A6%AC-2025",
    },
    {
      title: "TypeScript 초보를 위한 CFA 설명: null 체크부터 Discriminated Union까지",
      excerpt: "TypeScript 초보를 위한 CFA 설명: null 체크부터 Discriminated Union까지를 알아봅니다.",
      date: "2025.09.05",
      readTime: "5분",
      tags: ["TypeScript"],
      link: "https://itconquest.tistory.com/entry/TypeScript-%EC%B4%88%EB%B3%B4%EB%A5%BC-%EC%9C%84%ED%95%9C-CFA-%EC%84%A4%EB%AA%85-null-%EC%B2%B4%ED%81%AC%EB%B6%80%ED%84%B0-Discriminated-Union%EA%B9%8C%EC%A7%80",
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
          className="text-center mb-12"
        >
          <h2 className="font-mono text-primary text-sm mb-2">기술 블로그</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              개발하면서 배운 것들을 기록하고 공유합니다
            </h3>
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
                target="_blank"
                rel="noopener noreferrer"
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
            href="https://itconquest.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
          >
            블로그 바로가기
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
