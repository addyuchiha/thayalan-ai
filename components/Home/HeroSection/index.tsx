import Image from "next/image";
import HeroImage from "@/public/images/cyborg4.png"; // Adjust path as necessary
import { ArrowUpRight } from "lucide-react";
import ToolsOverlay from "../ToolsOverlay";
import ParticleEffect from "./ParticleEffect"; // Import the particle component

function HeroSection() {
  return (
    // Outer Container: Changed to bg-black to ensure a pure black initial state
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Pure CSS Animation Styles */}
      <style>{`
        /* Simple fade-in and blur-in with no positional/transform shifts */
        @keyframes heroFadeBlurIn {
          0% {
            opacity: 0;
            filter: blur(40px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes heroFadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* 1. Background starts blurring in after 0.5s of pure black */
        .anim-bg {
          opacity: 0;
          animation: heroFadeBlurIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
        }

        /* 2. Cyborg portrait fades/blurs in at the exact same time as background */
        /* Only opacity and blur are animated, preserving the absolute Tailwind position */
        .anim-cyborg {
          opacity: 0;
          animation: heroFadeBlurIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
        }

        /* 3. Particles fade in smoothly once the environment is visible */
        .anim-particles {
          opacity: 0;
          animation: heroFadeIn 2s ease forwards;
          animation-delay: 1.2s;
        }

        /* 4. Hero Content slides up and fades in after the visuals are established */
        .anim-content {
          opacity: 0;
          animation: heroFadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.8s;
        }
      `}</style>

      {/* Hero Graphic Container */}
      <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <Image
          src="/images/HeroBackground.png"
          alt="Background"
          fill
          className="object-cover object-center anim-bg"
          priority
          draggable={false}
        />

        {/* Particle Overlay (wrapped to apply animation class safely) */}
        <div className="absolute inset-0 anim-particles">
          <ParticleEffect />
        </div>

        {/* The Cyborg Portrait */}
        <Image
          src={HeroImage}
          alt="Cyborg"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-auto h-[60%] md:h-[80%] object-contain object-bottom anim-cyborg"
          draggable={false}
        />
      </div>

      {/* Hero Content Section - Centered on mobile, absolute bottom on desktop */}
      <div className="absolute inset-0 md:inset-auto md:bottom-0 md:left-0 md:w-full md:h-auto z-30 p-6 md:p-12 lg:p-16 flex flex-col justify-center md:block pointer-events-none anim-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end w-full mb-16 md:mb-0">
          {/* Left: Heading (Centered on mobile, left-aligned on desktop) */}
          <div className="md:pr-8 pointer-events-auto text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl text-white tracking-tight leading-tight">
              Accelerate growth with modern AI.
            </h1>
          </div>

          {/* Right: Subheading & CTA (Centered on mobile, right-aligned on desktop) */}
          <div className="flex flex-col items-center md:items-end gap-6 justify-center md:justify-end pointer-events-auto">
            
            {/* Medium length description visible only on mobile */}
            <p className="block md:hidden text-lg text-zinc-200 leading-relaxed max-w-sm text-center drop-shadow-md">
              I help businesses grow faster by streamlining operations, generating demand, and deploying practical AI workflows.
            </p>

            {/* Original description visible only on desktop */}
            <p className="hidden md:block text-lg md:text-xl text-zinc-100 leading-relaxed max-w-xl text-end drop-shadow-md">
              Generating demand, streamlining operations, and deploying
              practical AI workflows. I help businesses grow faster using modern
              go-to-market strategies and automation.
            </p>

            <a
              href="https://calendly.com/sthayalan/nicejob"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200 shadow-lg"
            >
              <span>Book a Demo</span>
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