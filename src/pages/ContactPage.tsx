import Header from "@/components/portfolio/Header";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
