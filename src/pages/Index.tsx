
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Courses />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
