"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  // Row 1 Testimonials
  {
    quote:
      "Thayalan.ai transformed our web presence. The Next.js integration is blazing fast, and our core web vitals have never looked better.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "VeloFlow",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    quote:
      "The level of customization and responsiveness of the Tailwind components they built for us is unmatched. Highly recommended.",
    author: "Alex Rivera",
    role: "Lead Developer",
    company: "ApexLabs",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    quote:
      "An absolute game-changer for our SaaS startup. We migrated our entire application stack over to Next.js and Vercel with their guidance, resulting in a 40% drop in page load times. The TypeScript architecture they set up is incredibly clean and scalable.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "Synthetix",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },

  // Row 2 Testimonials
  {
    quote:
      "Clean, robust code and exceptional communication throughout. They helped us implement complex reactive states without sacrificing any performance.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "NoveLink",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
  {
    quote:
      "Incredibly clean TypeScript code. It's rare to find a team that cares so deeply about both performance, design, and developer experience.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "CloudScale",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    quote:
      "Our conversion rate went up by 25% within weeks of launching the new design. The attention to subtle micro-interactions and animations is superb.",
    author: "Sophia Martinez",
    role: "Head of Growth",
    company: "ZetaPay",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
  },
];

const row1 = [testimonials[0], testimonials[1], testimonials[2]];
const row2 = [testimonials[3], testimonials[4], testimonials[5]];

export default function TestimonialsSection() {
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
        threshold: 0.1,
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
      className={`bg-black text-white py-32 overflow-hidden relative w-full ${
        isInView ? "animate-in" : ""
      }`}
    >
      <style>{`
        /* Infinite scrolling keyframes */
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.5rem)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-100% - 1.5rem)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: scroll-left 50s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: scroll-right 50s linear infinite;
        }

        /* --- STAGGERED SEQUENCE TIMELINE --- */
        
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

        /* Step 2: Side Bezels fade in one-by-one (Front-to-Back) */
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

        /* Step 3: Testimonial marquee rows slide up last once layout is established */
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

      {/* --- BACKGROUND VIEWPORT BEZELS --- */}
      {/* Left Bezel Stack */}
      <div className="absolute top-24 hidden md:block pointer-events-none select-none z-0 -left-[240px] lg:-left-[200px] xl:-left-[90px]">
        {/* Edge 3 (Deepest Background / Back) */}
        <div
          className="absolute left-[120px] top-[100px] w-[320px] h-[400px] rounded-[3rem] bg-gradient-to-r from-transparent via-zinc-950 to-blue-950/50 border-r border-t border-blue-600/30 shadow-[inset_-10px_0_40px_-10px_rgba(30,64,175,0.25)] anim-bezel-edge-3"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 95%)",
          }}
        />

        {/* Edge 2 (Midground / Middle) */}
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
        {/* Edge 3 (Deepest Background / Back) */}
        <div
          className="absolute right-[120px] top-[100px] w-[320px] h-[400px] rounded-[3rem] bg-gradient-to-l from-transparent via-zinc-950 to-blue-950/50 border-l border-t border-blue-600/30 shadow-[inset_10px_0_40px_-10px_rgba(30,64,175,0.25)] anim-bezel-edge-3"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 95%)",
          }}
        />

        {/* Edge 2 (Midground / Middle) */}
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

      {/* --- HERO HEADER AREA --- */}
      <div className="relative max-w-7xl mx-auto mb-20 px-4 sm:px-6 md:px-8 pt-6 anim-header">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-blue-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="relative z-10 text-center mx-auto flex flex-col items-center max-w-2xl px-4">
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white font-medium">
            Trusted by innovators worldwide
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            See how we help fast-growing startups and enterprises leverage
            modern frameworks to deliver robust, lightning-fast digital
            solutions.
          </p>

          <a
            href="#get-started"
            className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200"
          >
            <span>Book a 15-Min Call</span>
            <span className="flex items-center justify-center p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>

      {/* --- INFINITE SCROLLING ROWS --- */}
      <div className="marquee-container flex flex-col gap-8 w-full relative z-10 anim-marquee-rows">
        
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden flex gap-6">
          {/* Track 1 */}
          <div className="animate-marquee-left gap-6">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[380px] sm:w-[440px] shrink-0 px-1"
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
          {/* Track 2 (Duplicate for seamless scroll) */}
          <div className="animate-marquee-left gap-6" aria-hidden="true">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={`row1-dup-${idx}`}
                className="w-[380px] sm:w-[440px] shrink-0 px-1"
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden flex gap-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Track 1 */}
          <div className="animate-marquee-right gap-6">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[380px] sm:w-[440px] shrink-0 px-1"
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
          {/* Track 2 (Duplicate for seamless scroll) */}
          <div className="animate-marquee-right gap-6" aria-hidden="true">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={`row2-dup-${idx}`}
                className="w-[380px] sm:w-[440px] shrink-0 px-1"
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative h-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800/90 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between whitespace-normal">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500 rounded-t-[2rem]" />
      <p className="text-zinc-300 text-base md:text-[15px] leading-relaxed mb-6 font-normal">
        “{testimonial.quote}”
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover filter transition-all duration-300 border border-zinc-800"
        />
        <div>
          <h4 className="text-white text-sm font-semibold">
            {testimonial.author}
          </h4>
          <p className="text-zinc-500 text-xs">
            {testimonial.role} at{" "}
            <span className="text-zinc-400 font-medium">
              {testimonial.company}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}