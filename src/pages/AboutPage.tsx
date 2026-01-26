import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Footer from "@/components/portfolio/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
