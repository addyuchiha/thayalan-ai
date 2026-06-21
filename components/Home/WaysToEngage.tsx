"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { RiHandHeartFill } from "react-icons/ri";

interface EngagementModel {
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
  bgImage: string;
}

const models: EngagementModel[] = [
  {
    title: "Fixed-Scope Projects",
    badge: "Milestone-Driven",
    description:
      "Launch an MVP, execute a complete design-to-code migration, or build a custom standalone marketing engine with clear parameters.",
    deliverables: [
      "Frontend UI engineering",
      "TypeScript API endpoints",
      "Deployment pipeline setup",
      "30-day post-launch support",
    ],
    ctaText: "Inquire About Projects",
    ctaLink: "#contact",
    bgImage: "/images/abstract/engagement1.png",
  },
  {
    title: "Dedicated Partner",
    badge: "Fractional Retainer",
    description:
      "Integrate specialized Next.js & React expertise into your workflow. Agile sprints to ship features and resolve technical debt continuously.",
    deliverables: [
      "Weekly sprint planning",
      "Slack & GitHub integration",
      "Performance optimization",
      "Priority bug-fixing",
    ],
    ctaText: "Secure Support",
    ctaLink: "#contact",
    bgImage: "/images/abstract/engagement1.png",
  },
  {
    title: "Technical Consult",
    badge: "Targeted Audit",
    description:
      "A deep architectural and performance diagnostic. We audit code, locate rendering bottlenecks, and construct a migration blueprint.",
    deliverables: [
      "Core Web Vitals report",
      "Bundle size analysis",
      "Next.js migration blueprint",
      "2-hour interactive handoff",
    ],
    ctaText: "Book Technical Audit",
    ctaLink: "#contact",
    bgImage: "/images/abstract/engagement1.png",
  },
];

// Negative delays ensure particles are pre-animated and active on page load
const particles = [
  {
    left: "12%",
    delay: "-0.4s",
    duration: "2.6s",
    drift: "-12px",
    size: "w-1 h-1",
  },
  {
    left: "28%",
    delay: "-1.8s",
    duration: "3.2s",
    drift: "14px",
    size: "w-1.5 h-1.5",
  },
  {
    left: "42%",
    delay: "-0.9s",
    duration: "2.2s",
    drift: "-6px",
    size: "w-0.5 h-0.5",
  },
  {
    left: "58%",
    delay: "-2.7s",
    duration: "3.6s",
    drift: "18px",
    size: "w-1 h-1",
  },
  {
    left: "74%",
    delay: "-1.2s",
    duration: "2.8s",
    drift: "-10px",
    size: "w-1.5 h-1.5",
  },
  {
    left: "88%",
    delay: "-2.1s",
    duration: "2.4s",
    drift: "8px",
    size: "w-1 h-1",
  },
];

export default function WaysToEngage() {
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

  return (
    <section 
      ref={sectionRef}
      className={`bg-black text-white py-12 mb-8 relative ${isInView ? "animate-in" : ""}`}
    >
      {/* Self-contained styling for continuous particle and layout animations */}
      <style>{`
        @keyframes floatUp {
          0% {
            /* Start deeper behind the card body, completely hidden and scaled down */
            transform: translateY(25px) translateX(0) scale(0.4);
            opacity: 0;
          }
          30% {
            /* Smoothly fade in as they rise past the top border */
            opacity: 0.7;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-80px) translateX(var(--drift, 0px)) scale(1.1);
            opacity: 0;
          }
        }
        .animate-float-particle {
          opacity: 0;
          animation: floatUp var(--duration, 3s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        /* --- ENTRY ANIMATIONS --- */

        /* Header Slide & Fade In */
        .anim-engage-header {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.1s;
        }
        .animate-in .anim-engage-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card Blur & Fade In */
        .anim-engage-card {
          opacity: 0;
          filter: blur(25px);
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), filter 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Staggered delays for the cards */
        .anim-engage-card:nth-child(1) {
          transition-delay: 0.5s;
        }
        .anim-engage-card:nth-child(2) {
          transition-delay: 0.8s;
        }
        .anim-engage-card:nth-child(3) {
          transition-delay: 1.1s;
        }

        /* Trigger active state once parent container is in viewport */
        .animate-in .anim-engage-card {
          opacity: 1;
          filter: blur(0px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Subheading */}
        <div className="text-center mx-auto mb-16 px-4 sm:px-6 md:px-8 flex flex-col items-center anim-engage-header">
          <div className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black border border-neutral-200 shadow-sm hover:bg-neutral-50 text-xs font-bold tracking-wider uppercase mb-6 transition-all duration-300 hover:scale-105 cursor-pointer select-none">
            <RiHandHeartFill className="w-3.5 h-3.5 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>Ways to Partner</span>
          </div>

          <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white font-normal">
            How we work together
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl">
            Choose the collaboration model that best fits your immediate team
            bandwidth, technical scope, and product timeline.
          </p>
        </div>

        {/* Simplified Engagement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {models.map((model, index) => (
            <div key={index} className="relative group flex flex-col isolate anim-engage-card">
              {/* Particle emitter container (layered behind the visual card via z-[5]) */}
              <div className="absolute top-0 left-6 right-6 h-0 pointer-events-none z-[5] overflow-visible">
                {particles.map((p, pIdx) => (
                  <span
                    key={pIdx}
                    className={`absolute rounded-full bg-white/95 animate-float-particle ${p.size}`}
                    style={
                      {
                        left: p.left,
                        "--duration": p.duration,
                        "--delay": p.delay,
                        "--drift": p.drift,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>

              {/* Background blur decoration (z-0) */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] h-48 bg-blue-500/80 blur-3xl rounded-full pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Card visual wrapper (layered on top via z-10) */}
              <div
                className="relative z-10 flex-1 rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden bg-cover bg-center border border-zinc-800 transition-all duration-300 min-h-[520px] bg-zinc-900"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                    {model.description}
                  </p>

                  {/* Included Checklist */}
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                      What's Included:
                    </p>
                    <ul className="space-y-3">
                      {model.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2.5 text-sm text-zinc-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Simplified CTA Button */}
                <div className="pt-4">
                  <a
                    href={model.ctaLink}
                    className="group/btn inline-flex items-center justify-between pl-6 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200 w-full z-10"
                  >
                    <span className="text-sm">{model.ctaText}</span>
                    <span className="flex items-center justify-center p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover/btn:rotate-45">
                      <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}