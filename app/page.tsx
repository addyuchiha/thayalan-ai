import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black px-16">
      <Navbar />
      <HeroSection />
    </div>
  );
}
