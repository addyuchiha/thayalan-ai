"use client";

import React, { useState, useEffect, useRef } from 'react';

interface ValuePillar {
  title: string;
  description: string;
  imageSrc?: string; // Optional image source.
}

const pillars: ValuePillar[] = [
  {
    title: "Scalable Architecture",
    description: "I don't just build pages; I architect systems. Using the latest Next.js App Router paradigm, Server Components, and optimized state management, your application is built to scale gracefully as your user base grows.",
    imageSrc: "/images/abstract/image.png" 
  },
  {
    title: "Peak Performance",
    description: "Slow loading speeds directly impact your conversion rates. Every line of code is optimized for minimal bundle sizes, intelligent caching, and fast time-to-interactive metrics to deliver exceptional performance.",
    imageSrc: "/images/abstract/abstract1.png" 
  },
  {
    title: "Clean Codebases",
    description: "Maintainability is a core priority. By enforcing strict type safety and a modular file structure, I deliver clean, documented codebases that your internal engineering team can easily take over, refactor, and build upon.",
    imageSrc: "/images/abstract/abstract3.png"
  }
];

export default function WhyWorkWithMe() {
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
        threshold: 0.1, // Trigger once 10% of the component is visible
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
    <div 
      ref={sectionRef} 
      className={`relative max-w-[100rem] mx-auto ${isInView ? "animate-in" : ""}`}
    >
      <style>{`
        /* --- ENTRY ANIMATIONS --- */

        /* Header Slide & Fade In */
        .anim-why-header {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.1s;
        }
        .animate-in .anim-why-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card Blur & Fade In */
        .anim-why-card {
          opacity: 0;
          filter: blur(25px);
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), filter 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Staggered delay for each card */
        .anim-why-card:nth-child(1) {
          transition-delay: 0.5s;
        }
        .anim-why-card:nth-child(2) {
          transition-delay: 0.8s;
        }
        .anim-why-card:nth-child(3) {
          transition-delay: 1.1s;
        }

        /* Trigger active state once parent has .animate-in */
        .animate-in .anim-why-card {
          opacity: 1;
          filter: blur(0px);
        }
      `}</style>

      {/* Blue glow element positioned at the top behind the card */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] h-48 bg-blue-500 blur-3xl rounded-full pointer-events-none z-0" 
        aria-hidden="true"
      />

      <section className="relative z-10 bg-zinc-900 border border-zinc-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl text-white">
        
        {/* Header and Subheading Inside the Card */}
        <div className="text-center mx-auto mb-16 flex flex-col items-center anim-why-header">
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white font-normal">
            Why work with me?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl">
            Building software isn't just about writing code—it's about understanding business objectives, optimizing developer velocity, and delivering an interface that users love to interact with.
          </p>
        </div>

        {/* 3 Cards in a Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative bg-black border border-black rounded-[2rem] p-6 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between overflow-hidden anim-why-card"
            >
              {/* Ambient Blue Glow at bottom left */}
              <div 
                className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500 rounded-full blur-3xl pointer-events-none z-0" 
                aria-hidden="true"
              />

              {/* Card Content wrapper ensuring text stays above glow */}
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  {/* Image Container with No Visual Styling/Filters */}
                  <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden mb-6 relative rounded-[1.5rem]">
                    {pillar.imageSrc ? (
                      <img 
                        src={pillar.imageSrc} 
                        alt={pillar.title} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-zinc-950 flex flex-col items-center justify-center p-4">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
                        <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest z-10">Image Placeholder</span>
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-zinc-100 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}