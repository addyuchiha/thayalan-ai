"use client";

import React, { useState, useEffect, useRef } from "react";

// Replace the 'image' URLs below with your actual project screenshots
const projects = [
  {
    title: "Border",
    category: "Web Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Theo",
    category: "E-Commerce",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "SnapShot",
    category: "Product Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Glowhaus",
    category: "Brand Identity",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function PortfolioSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger transition when 10% is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`bg-black text-white py-32 relative overflow-hidden ${
        isInView ? "animate-in" : ""
      }`}
    >
      {/* 
        Inline styles for transitions and infinite marquee. 
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        /* --- ENTRY ANIMATIONS (Triggered when .animate-in is active) --- */

        /* Step 1: Header Area fades/slides up first */
        .anim-header {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        .animate-in .anim-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* Step 2: Side Bezels fade in one-by-one (Front-to-Back, No Slide) */
        .anim-bezel-edge-1,
        .anim-bezel-edge-2,
        .anim-bezel-edge-3 {
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Foreground Edge (Front) starts first */
        .anim-bezel-edge-1 {
          transition-delay: 0.8s;
        }
        /* Midground Edge (Middle) starts second */
        .anim-bezel-edge-2 {
          transition-delay: 1.2s;
        }
        /* Background Edge (Back) starts third */
        .anim-bezel-edge-3 {
          transition-delay: 1.6s;
        }

        .animate-in .anim-bezel-edge-1,
        .animate-in .anim-bezel-edge-2,
        .animate-in .anim-bezel-edge-3 {
          opacity: 1;
        }

        /* Step 3: Marquee Rows fade and slide up last */
        .anim-marquee-rows {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 2.2s;
        }
        .animate-in .anim-marquee-rows {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* SMOOTH LEFT FADE MASK */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
      {/* SMOOTH RIGHT FADE MASK */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Left Bezel Stack */}
      <div className="absolute top-24 hidden md:block pointer-events-none select-none z-0 -left-[240px] lg:-left-[200px] xl:-left-[90px]">
        {/* Edge 3 (Deepest Background) */}
        <div
          className="absolute left-[120px] top-[100px] w-[320px] h-[400px] rounded-[3rem] bg-gradient-to-r from-transparent via-zinc-950 to-blue-950/50 border-r border-t border-blue-600/30 shadow-[inset_-10px_0_40px_-10px_rgba(30,64,175,0.25)] anim-bezel-edge-3"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 95%)",
          }}
        />

        {/* Edge 2 (Midground) */}
        <div
          className="absolute left-[60px] top-[50px] w-[320px] h-[440px] rounded-[3rem] bg-gradient-to-r from-transparent via-zinc-950 to-blue-900/60 border-r border-t border-blue-500/50 shadow-[inset_-12px_0_40px_-8px_rgba(37,99,235,0.35),_25px_0_50px_rgba(0,0,0,0.9)] anim-bezel-edge-2"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 95%)",
          }}
        />

        {/* Edge 1 (Foreground / Front) */}
        <div
          className="absolute left-0 top-0 w-[320px] h-[480px] rounded-[3rem] bg-gradient-to-r from-transparent via-zinc-950 to-blue-900/70 border-r border-t border-blue-400/85 shadow-[inset_-10px_0_30px_-5px_rgba(96,165,250,0.5),_35px_0_60px_rgba(0,0,0,1)] anim-bezel-edge-1"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 95%)",
          }}
        />
      </div>

      {/* Right Bezel Stack */}
      <div className="absolute top-24 hidden md:block pointer-events-none select-none z-0 -right-[240px] lg:-right-[200px] xl:-right-[90px]">
        {/* Edge 3 (Deepest Background) */}
        <div
          className="absolute right-[120px] top-[100px] w-[320px] h-[400px] rounded-[3rem] bg-gradient-to-l from-transparent via-zinc-950 to-blue-950/50 border-l border-t border-blue-600/30 shadow-[inset_10px_0_40px_-10px_rgba(30,64,175,0.25)] anim-bezel-edge-3"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 95%)",
          }}
        />

        {/* Edge 2 (Midground) */}
        <div
          className="absolute right-[60px] top-[50px] w-[320px] h-[440px] rounded-[3rem] bg-gradient-to-l from-transparent via-zinc-950 to-blue-900/60 border-l border-t border-blue-500/50 shadow-[inset_10px_0_40px_-8px_rgba(37,99,235,0.35),_-25px_0_50px_rgba(0,0,0,0.9)] anim-bezel-edge-2"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 95%)",
          }}
        />

        {/* Edge 1 (Foreground / Front) */}
        <div
          className="absolute right-0 top-0 w-[320px] h-[480px] rounded-[3rem] bg-gradient-to-l from-transparent via-zinc-950 to-blue-900/70 border-l border-t border-blue-400/85 shadow-[inset_8px_0_30px_-5px_rgba(96,165,250,0.5),_-35px_0_60px_rgba(0,0,0,1)] anim-bezel-edge-1"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 95%)",
          }}
        />
      </div>

      <div className="w-full">
        {/* Cohesive Typographic Header */}
        <div className="text-center mx-auto mb-20 flex flex-col items-center px-4 md:px-8 anim-header">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-white font-medium max-w-4xl">
            Selected projects & work
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-light mb-8">
            Discover a showcase of diverse{" "}
            <span className="text-zinc-200 font-normal">
              subscription-based projects
            </span>
            , where each design and development solution is crafted to deliver
            lasting impact.
          </p>

          <button className="bg-white text-black px-6 py-3 text-sm font-semibold rounded-full hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300">
            Contact Sales
          </button>
        </div>

        {/* Infinite Marquee Wrapper */}
        <div className="relative w-full flex anim-marquee-rows">
          {/* 
            The track container - Width is max-content.
            Runs continuously without pausing on hover.
          */}
          <div className="flex w-max animate-marquee">
            {/* First Set of Items */}
            <div className="flex gap-6 pr-6">
              {projects.map((project, index) => (
                <div key={`set1-${index}`} className="relative">
                  <div className="w-[300px] md:w-[450px] lg:w-[550px] flex flex-col gap-4 cursor-pointer bg-black rounded-[2rem]">
                    {/* Rounded Image Container */}
                    <div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-[2rem] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out opacity-80 hover:opacity-100"
                      />
                    </div>

                    {/* Text Bar */}
                    <div className="flex items-center justify-between px-2 py-2">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-zinc-500">
                        {project.category} &nbsp;•&nbsp; {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set of Items (Exact Duplicate for the loop illusion) */}
            <div className="flex gap-6 pr-6">
              {projects.map((project, index) => (
                <div
                  key={`set2-${index}`}
                  className="w-[300px] md:w-[450px] lg:w-[550px] flex flex-col gap-4 cursor-pointer"
                >
                  {/* Rounded Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-[2rem] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out opacity-80 hover:opacity-100"
                    />
                  </div>

                  {/* Text Bar */}
                  <div className="flex items-center justify-between px-2 py-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500">
                      {project.category} &nbsp;•&nbsp; {project.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}