"use client";

import React, { useState, useEffect, useRef } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "System Discovery",
    description:
      "We dive deep into your existing tech stack, identify operational bottlenecks, and map out the highest-leverage opportunities.",
    details: [
      "Identify structural bottlenecks",
      "Map existing technology stack",
      "30 to 60 minute strategy session",
    ],
    image: "/images/abstract/step1.png",
  },
  {
    number: "02",
    title: "Growth Strategy",
    description:
      "We outline a custom execution roadmap, matching your growth objectives with practical automation and target workflow designs.",
    details: [
      "Map custom workflow paths",
      "Define automation logic layers",
      "1 to 7 day delivery timeline",
    ],
    image: "/images/abstract/step2.png",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "We launch your custom automations, configure active marketing campaigns, integrate HeyMilo, and deploy your live workflows.",
    details: [
      "Launch custom API automations",
      "Integrate HeyMilo AI features",
      "Flexible, scope-based delivery",
    ],
    image: "/images/abstract/step3.png",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "We closely monitor performance data, gather system feedback, and fine-tune your workflows for maximum efficiency and growth.",
    details: [
      "Track system efficiency gains",
      "Fine-tune active integrations",
      "Optional ongoing support models",
    ],
    image: "/images/abstract/step4.png",
  },
];

export default function HowWeWorkSection() {
  const [isInView, setIsInView] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger once 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Detect viewport size to determine whether swipe mechanisms should activate
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Matches the original 'md' breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle automatic mobile swiping rotation
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const nextPage = (currentPage + 1) % steps.length;
      const totalWidth = scrollRef.current.scrollWidth;
      const targetScrollLeft = (nextPage / steps.length) * totalWidth;

      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, [isMobile, currentPage]);

  // Synchronize manual scrolling with state active indices
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;
    if (scrollWidth === 0) return;

    const index = Math.round((scrollLeft / scrollWidth) * steps.length);
    const clampedIndex = Math.max(0, Math.min(index, steps.length - 1));
    setCurrentPage(clampedIndex);
  };

  return (
    <section 
      ref={sectionRef}
      className={`bg-black text-white py-16 md:py-32 relative ${isInView ? "animate-in" : ""}`}
    >
      {/* Self-contained CSS for layout transitions and particles */}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(15px) scale(0.6);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-80px) scale(1);
            opacity: 0;
          }
        }
        .animate-particle {
          animation: float-particle var(--duration, 5s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        /* --- ENTRY ANIMATIONS --- */

        /* Header Slide & Fade In */
        .anim-process-header {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.1s;
        }
        .animate-in .anim-process-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card Blur & Fade In */
        .anim-process-card {
          opacity: 0;
          filter: blur(25px);
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), filter 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Staggered delay for each card (left to right) */
        .anim-process-card:nth-child(1) {
          transition-delay: 0.5s;
        }
        .anim-process-card:nth-child(2) {
          transition-delay: 0.8s;
        }
        .anim-process-card:nth-child(3) {
          transition-delay: 1.1s;
        }
        .anim-process-card:nth-child(4) {
          transition-delay: 1.4s;
        }

        /* Active triggered states */
        .animate-in .anim-process-card {
          opacity: 1;
          filter: blur(0px);
        }

        /* Hide scrollbars for cross-browser swipe consistency */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="max-w-[100rem] mx-auto relative z-10 px-4 md:px-0">
        {/* Section Header */}
        <div className="text-center mx-auto mb-20 flex flex-col items-center anim-process-header">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-white font-medium max-w-4xl">
            A structured, collaborative process
          </h2>
          <p className="text-zinc-400 md:text-lg leading-relaxed max-w-2xl font-light">
            No guesswork, no sudden surprises. We audit your systems and launch automated workflows using a transparent process built to deliver clear results at every stage.
          </p>
        </div>

        {/* Steps Grid / Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-visible md:snap-none md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-smooth"
        >
          {steps.map((step, index) => (
            <div 
              className="relative anim-process-card w-full shrink-0 snap-center md:w-auto" 
              key={index}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] h-48 bg-blue-500 blur-3xl rounded-full pointer-events-none z-0"
                aria-hidden="true"
              />
              <div className="relative h-full bg-black rounded-[2rem] p-5 flex flex-col overflow-hidden">
                {/* Card Image Area (Set to 4:3 Aspect Ratio) */}
                <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden bg-zinc-950/80 border border-zinc-900/60 isolate">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125"
                  />

                  {/* Subtle dark vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-80" />

                  {/* Floating Clean Step Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center bg-zinc-950/80 backdrop-blur-md border border-white/5 px-3.5 py-1.5 rounded-full shadow-lg">
                      <span className="text-[11px] font-medium tracking-wide text-zinc-300">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col relative z-10 px-1 mb-8">
                  <h3 className="text-xl font-medium text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 font-light">
                    {step.description}
                  </p>

                  {/* Minimalist Deliverables List */}
                  <div className="pt-5 border-t border-zinc-900">
                    <ul className="space-y-3">
                      {step.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-xs text-zinc-400"
                        >
                          {/* Soft, minimal neutral horizontal line indicator */}
                          <span className="w-1.5 h-[1px] bg-zinc-600 mt-2 shrink-0" />
                          <span className="font-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Layered bottom-up glow gradient (whitish core transitioning to deep blue) */}
                <div className="absolute bottom-0 inset-x-0 h-42 bg-gradient-to-t from-blue-600 via-blue-900/20 to-transparent pointer-events-none z-0" />
                <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-white/50 via-blue-400/20 to-transparent pointer-events-none z-0 blur-[2px]" />

                {/* Animated rising particles from the glowing bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 overflow-hidden pointer-events-none z-0">
                  {/* Particle 1 */}
                  <div
                    className="absolute bottom-0 left-[5%] w-[1px] h-[1px] bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "0s",
                        "--duration": "4s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 2 */}
                  <div
                    className="absolute bottom-0 left-[12%] w-0.5 h-0.5 bg-white/80 rounded-full animate-particle"
                    style={
                      {
                        "--delay": "1.5s",
                        "--duration": "5s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 3 */}
                  <div
                    className="absolute bottom-0 left-[20%] w-[1px] h-[1px] bg-white/90 rounded-full animate-particle"
                    style={
                      {
                        "--delay": "0.5s",
                        "--duration": "3.5s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 4 */}
                  <div
                    className="absolute bottom-0 left-[28%] w-0.5 h-0.5 bg-white/70 rounded-full animate-particle"
                    style={
                      {
                        "--delay": "2.2s",
                        "--duration": "4.5s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 5 */}
                  <div
                    className="absolute bottom-0 left-[35%] w-[1px] h-[1px] bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "1.0s",
                        "--duration": "5.5s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 6 */}
                  <div
                    className="absolute bottom-0 left-[43%] w-0.5 h-0.5 bg-white/60 rounded-full animate-particle"
                    style={
                      {
                        "--delay": "2.8s",
                        "--duration": "4s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 7 */}
                  <div
                    className="absolute bottom-0 left-[50%] w-[1px] h-[1px] bg-white/90 rounded-full animate-particle"
                    style={
                      {
                        "--delay": "0.2s",
                        "--duration": "4.8s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 8 */}
                  <div
                    className="absolute bottom-0 left-[58%] w-0.5 h-0.5 bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "1.9s",
                        "--duration": "3.8s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 9 */}
                  <div
                    className="absolute bottom-0 left-[67%] w-[1px] h-[1px] bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "3.1s",
                        "--duration": "5s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 10 */}
                  <div
                    className="absolute bottom-0 left-[75%] w-0.5 h-0.5 bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "0.8s",
                        "--duration": "4.2s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 11 */}
                  <div
                    className="absolute bottom-0 left-[83%] w-[1px] h-[1px] bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "2.5s",
                        "--duration": "4.6s",
                      } as React.CSSProperties
                    }
                  />
                  {/* Particle 12 */}
                  <div
                    className="absolute bottom-0 left-[92%] w-0.5 h-0.5 bg-white rounded-full animate-particle"
                    style={
                      {
                        "--delay": "1.2s",
                        "--duration": "3.6s",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Dot Indicators (Visible only on mobile devices below md) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === index ? "bg-white w-6" : "bg-zinc-600 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}