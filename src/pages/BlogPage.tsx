import Header from "@/components/portfolio/Header";
import Blog from "@/components/portfolio/Blog";
import Footer from "@/components/portfolio/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
