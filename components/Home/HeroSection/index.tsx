import Image from "next/image";
import HeroImage from "@/public/images/HeroImage.png"; // Adjust path as necessary
import ToolsOverlay from "./ToolsOverlay";
import { ArrowUpRight } from "lucide-react";

function HeroSection() {
  return (
    <div>
      {/* Hero Graphic Container */}
      <div className="rounded-[3rem] relative overflow-hidden">
        <Image
          src="/images/HeroBackground.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <Image
          src={HeroImage}
          alt="Cyborg"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-auto h-[80%]"
        />
        <ToolsOverlay />
      </div>

      {/* Hero Content Section - Dark Mode */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
        {/* Left: Heading (Text-white for dark mode) */}
        <div className="md:pr-8 ">
          <h1 className="text-6xl md:text-5xl lg:text-8xl text-white tracking-tight leading-tight">
            Empowering your digital future.
          </h1>
        </div>

        {/* Right: Subheading & CTA (Text-zinc-400 for dark mode secondary text) */}
        <div className="flex flex-col items-end gap-6 h-full justify-center">
          <p className="text-xl text-zinc-400 leading-relaxed max-w-xl text-end">
            We build responsive, fast, and modern web applications designed to
            bring your ideas to life. Elevate your presence with our custom
            solutions.
          </p>
          <a
            href="#get-started"
            className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200"
          >
            <span>Get Started</span>
            <span className="flex items-center justify-center p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
