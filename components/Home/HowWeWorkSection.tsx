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
    // Clean, neutral abstract geometric design
    image: "https://images.unsplash.com/photo-1502239608882-93b729c6af43?auto=format&fit=crop&w=800&q=80" 
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
    // Neutral abstract structural grid lines
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80"
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
    // Clean, minimalist dark waves
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
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
    // Elegant neutral abstract curves
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-black text-white py-32 relative">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-white font-medium max-w-4xl">
            A structured, collaborative process
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
            No guesswork, no sudden surprises. We build modern web apps using a transparent, production-proven workflow that keeps you closely updated at every stage.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative h-full bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-5 hover:border-zinc-800 transition-all duration-300 flex flex-col overflow-hidden"
            >
              
              {/* Card Image Area */}
              <div className="relative w-full h-44 mb-6 rounded-2xl overflow-hidden bg-zinc-950/80 border border-zinc-900/60 isolate">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125"
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
              <div className="flex-1 flex flex-col relative z-10 px-1">
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
                      <li key={dIdx} className="flex items-start gap-3 text-xs text-zinc-400 hover:text-zinc-300 transition-colors duration-200">
                        {/* Soft, minimal neutral horizontal line indicator */}
                        <span className="w-1.5 h-[1px] bg-zinc-600 mt-2 shrink-0" />
                        <span className="font-light">{detail}</span>
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