import React from 'react';

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
    title: "Alignment & Architecture",
    description: "We align on your product requirements, user flows, and business goals before translating them into a clear technical architecture map.",
    details: [
      "Defining API boundaries",
      "Selecting database schema models",
      "Creating a clear modular project roadmap"
    ],
    // High-quality abstract wireframing/planning placeholder
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" 
  },
  {
    number: "02",
    title: "Design System & UI Foundations",
    description: "We set up a robust, scalable Tailwind CSS design system with reusable UI primitive components to ensure visual consistency.",
    details: [
      "Setting design token defaults",
      "Building accessible primitive UI cards",
      "Preparing structured mock layouts"
    ],
    // High-quality UI/design placeholder
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "Continuous Git Iteration",
    description: "Development takes place in transparent sprints. Pull requests are automatically deployed to staging environments for your review.",
    details: [
      "Feature-branch based workflows",
      "Vercel live preview links",
      "Incremental, non-blocking code changes"
    ],
    // High-quality coding/tech placeholder
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "04",
    title: "Optimization & Handover",
    description: "We run deep performance audits, set up analytics, and bundle strict TypeScript code for a clean, structured repository handover.",
    details: [
      "Core Web Vitals scoring review",
      "Full clean-up of codebase types",
      "Comprehensive onboarding walk-through"
    ],
    // High-quality performance/metrics placeholder
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-black text-white py-32 border-t border-zinc-900">
      <div className="max-w-[100rem] mx-auto ">
        
        {/* Section Header */}
        <div className="text-center mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white">
            A structured, collaborative process
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            No guesswork, no sudden surprises. We build modern web apps using a transparent, production-proven workflow that keeps you closely updated at every stage.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative h-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800/90 rounded-[2rem] p-4 sm:p-6 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col"
            >
              {/* Subtle Cyan Top Glow (Matches Testimonials) */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-all duration-500 rounded-t-[2rem]" />
              
              {/* Card Image Area */}
              <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden bg-zinc-800 isolate">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay to ensure text contrast if needed, optional */}
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                
                {/* Solid White Step Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-semibold tracking-wide text-black bg-white px-3 py-1.5 rounded-full shadow-sm">
                    Step {step.number}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>

                {/* Bulleted Deliverables */}
                <div className="pt-5 border-t border-zinc-800/80">
                  <ul className="space-y-2.5">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-xs text-zinc-400">
                        <span className="text-cyan-400 mt-0.5 shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}