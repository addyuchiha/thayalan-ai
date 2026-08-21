"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HeroImage from "@/public/images/cyborg4.png"; // Adjust path as necessary
import { ArrowUpRight } from "lucide-react";
import ToolsOverlay from "../ToolsOverlay";
import ParticleEffect from "./ParticleEffect"; // Import the particle component

// Temporary Linear logo URL
const logoUrl = "https://unpkg.com/simple-icons@v13/icons/linear.svg";

const TOOLS = [
  {
    name: "zapier",
    imgUrl: "/images/tools/zapier.svg",
  },
  { name: "n8n", imgUrl: "/images/tools/n8n.svg" },
  {
    name: "quickbooks",
    imgUrl: "/images/tools/quickbooks.svg",
  },
  {
    name: "responsibid",
    imgUrl: "/images/tools/responsibid.svg",
  },
  {
    name: "nicejob",
    imgUrl: "/images/tools/nicejob.svg",
  },
  {
    name: "datacandy",
    imgUrl: "/images/tools/datacandy.svg",
  },
  {
    name: "paystone",
    imgUrl: "/images/tools/paystone.png",
  },
];

function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Gather all image URLs that need preloading (including external logo)
    const bgUrl = "/images/HeroBackground.png";
    const cyborgUrl = typeof HeroImage === "string" ? HeroImage : HeroImage.src;
    const toolUrls = TOOLS.map((t) => t.imgUrl);

    const imageUrls = [logoUrl, bgUrl, cyborgUrl, ...toolUrls];
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    // 2. Track real-time progress as images finish loading
    imageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;

      const handleLoad = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / totalImages) * 100));

        if (loadedCount === totalImages) {
          setTimeout(() => {
            setIsLoading(false);
          }, 400); // Brief delay once 100% is reached for smooth exit
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
  }, []);

  return (
    // Outer Container: Pure black initial state
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* -------------------------------------------------------------
         Loading Screen Overlay (Logo + Glowing Blue Progress Bar)
         ------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-black transition-opacity duration-700 pointer-events-none ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Temporary Logo */}
        <div className="flex items-center gap-3 justify-start">
          <img
            src={logoUrl}
            alt="Linear Logo"
            className="w-6 h-6 object-contain invert brightness-0"
          />
          <span className="font-semibold text-2xl tracking-tight text-white">
            Thayalan.ai
          </span>
        </div>

        {/* Intense Blue Glowing Progress Bar */}
        <div className="relative w-48 sm:w-56 h-1 bg-zinc-900 rounded-full">
          <div
            className="h-full bg-blue-400 rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_#3b82f6,0_0_24px_#3b82f6,0_0_36px_#2563eb]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pure CSS Animation Styles */}
      <style>{`
        /* Fade-in & blur-in initial entrance */
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

        .anim-bg {
          opacity: 0;
          animation: heroFadeBlurIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
        }

        .anim-cyborg {
          opacity: 0;
          animation: heroFadeBlurIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
        }

        .anim-particles {
          opacity: 0;
          animation: heroFadeIn 2s ease forwards;
          animation-delay: 0.8s;
        }

        .anim-content {
          opacity: 0;
          animation: heroFadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.2s;
        }

        /* -------------------------------------------------------------
           Classic 3D Carousel Engine
           ------------------------------------------------------------- */
        
        @keyframes spin3DCarousel {
          0% {
            transform: rotateX(-12deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(-12deg) rotateY(360deg);
          }
        }

        .carousel-spinner {
          position: absolute;
          top: 38%;
          left: 50%;
          width: 0px;
          height: 0px;
          transform-style: preserve-3d;
          animation: spin3DCarousel 22s linear infinite;
        }

        @media (min-width: 768px) {
          .carousel-spinner {
            top: 18%;
          }
        }

        .carousel-panel {
          position: absolute;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(130px);
        }

        @media (min-width: 768px) {
          .carousel-panel {
            transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(230px);
          }
        }

        .white-logo-filter {
          filter: brightness(0) invert(1);
        }
      `}</style>

      {/* Hero Graphic Container */}
      <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <Image
          src="/images/HeroBackground.png"
          alt="Background"
          fill
          className={`object-cover object-center ${!isLoading ? "anim-bg" : "opacity-0"}`}
          priority
          draggable={false}
        />

        {/* Particle Overlay */}
        <div className={`absolute inset-0 ${!isLoading ? "anim-particles" : "opacity-0"}`}>
          <ParticleEffect />
        </div>

        {/* Shared 3D Scene Wrapper (perspective: 1000px) */}
        <div
          className={`absolute inset-0 [perspective:1000px] [transform-style:preserve-3d] pointer-events-none ${
            !isLoading ? "anim-cyborg" : "opacity-0"
          }`}
        >
          {/* The Cyborg Portrait (z-10) at Z-depth 0px */}
          <Image
            src={HeroImage}
            alt="Cyborg"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-auto h-[60%] md:h-[80%] object-contain object-bottom [transform:translateZ(0px)]"
            draggable={false}
          />

          {/* 3D Carousel Spinner */}
          <div className="carousel-spinner">
            {TOOLS.map((tool, index) => {
              const angle = (360 / TOOLS.length) * index;
              return (
                <div
                  key={tool.name}
                  className="carousel-panel"
                  style={{
                    "--angle": `${angle}deg`,
                  } as React.CSSProperties}
                >
                  {/* Glassmorphic Rectangular Card */}
                  <div className="flex items-center justify-center px-3.5 py-1.5 md:px-4.5 md:py-2.5 bg-zinc-950/85 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
                    <img
                      src={tool.imgUrl}
                      alt={tool.name}
                      className="h-3.5 sm:h-4 md:h-5.5 w-auto object-contain max-w-[100px] md:max-w-[140px] white-logo-filter"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Content Section */}
      <div
        className={`absolute inset-0 md:inset-auto md:bottom-0 md:left-0 md:w-full md:h-auto z-30 p-6 md:p-12 lg:p-16 flex flex-col justify-center md:block pointer-events-none ${
          !isLoading ? "anim-content" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end w-full mb-16 md:mb-0">
          {/* Left: Heading */}
          <div className="md:pr-8 pointer-events-auto text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl text-white tracking-tight leading-tight">
              Accelerate growth with modern AI.
            </h1>
          </div>

          {/* Right: Subheading & CTA */}
          <div className="flex flex-col items-center md:items-end gap-6 justify-center md:justify-end pointer-events-auto">
            <p className="block md:hidden text-lg text-zinc-300 leading-relaxed max-w-sm text-center drop-shadow-md">
              I help businesses grow faster by streamlining operations, generating demand, and deploying practical AI workflows.
            </p>

            <p className="hidden md:block text-lg md:text-xl text-zinc-100 leading-relaxed max-w-xl text-end drop-shadow-md">
              Generating demand, streamlining operations, and deploying
              practical AI workflows. I help businesses grow faster using modern
              go-to-market strategies and automation.
            </p>

            <a
              href="https://calendly.com/sthayalan/nicejob"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 md:gap-4 pl-5 pr-1.5 py-1.5 md:pl-8 md:pr-2 md:py-2 bg-white text-zinc-950 text-sm md:text-base font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200 shadow-lg"
            >
              <span>Book a Demo</span>
              <span className="flex items-center justify-center p-1.5 md:p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;