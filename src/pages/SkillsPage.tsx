import Header from "@/components/portfolio/Header";
import Skills from "@/components/portfolio/Skills";
import Footer from "@/components/portfolio/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
