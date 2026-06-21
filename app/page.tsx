import Footer from "@/components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import HowWeWorkSection from "@/components/Home/HowWeWorkSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import EcosystemMap from "@/components/Home/ToolsOverlay";
import WaysToEngage from "@/components/Home/WaysToEngage";
import WhyWorkWithMe from "@/components/Home/WhyWorkWithMe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <div className="px-16">
        <TestimonialsSection />
        <WhyWorkWithMe />
        <HowWeWorkSection />
        <EcosystemMap />
        <PortfolioSection />
        <WaysToEngage />
        <Footer />
      </div>
    </div>
  );
}
