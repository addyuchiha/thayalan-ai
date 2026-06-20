import Footer from "@/components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import HowWeWorkSection from "@/components/Home/HowWeWorkSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import WaysToEngage from "@/components/Home/WaysToEngage";
import WhyWorkWithMe from "@/components/Home/WhyWorkWithMe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black px-16">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <WhyWorkWithMe />
      <HowWeWorkSection />
      <PortfolioSection />
      <WaysToEngage />
      <Footer />
    </div>
  );
}
