import Image from "next/image";
import HeroImage from "@/public/images/cyborg4.png"; // Adjust path as necessary
import { ArrowUpRight } from "lucide-react";
import ToolsOverlay from "./ToolsOverlay";

function HeroSection() {
  return (
    // Outer Container: Set to full screen height (h-screen)
    <div className="relative w-full h-screen overflow-hidden bg-zinc-950">
      {/* Hero Graphic Container - Now Absolute to cover the entire screen */}
      <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden">
        <Image
          src="/images/HeroBackground.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <Image
          src={HeroImage}
          alt="Cyborg"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-auto h-[80%] "
        />
        {/* <ToolsOverlay /> */}
      </div>

      {/* Hero Content Section - Overlay pinned to the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 lg:p-16 pointer-events-none">
        {/* Changed items-start to items-end to push everything to the very bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full">
          {/* Left: Heading (Bottom Left) */}
          <div className="md:pr-8 pointer-events-auto">
            <h1 className="text-6xl md:text-5xl lg:text-8xl text-white tracking-tight leading-tight">
              Empowering your digital future.
            </h1>
          </div>

          {/* Right: Subheading & CTA (Bottom Right) */}
          <div className="flex flex-col items-end gap-6 justify-end pointer-events-auto">
            <p className="text-xl text-zinc-300 leading-relaxed max-w-xl text-end drop-shadow-md">
              We build responsive, fast, and modern web applications designed to
              bring your ideas to life. Elevate your presence with our custom
              solutions.
            </p>
            <a
              href="#get-started"
              className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200 shadow-lg"
            >
              <span>Get Started</span>
              <span className="flex items-center justify-center p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
