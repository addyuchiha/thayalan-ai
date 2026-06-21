"use client";

import React, { useState, useEffect, useRef } from "react";

function Footer() {
  // Using the Linear icon from your Navbar
  const logoUrl = "https://unpkg.com/simple-icons@v13/icons/linear.svg";

  // State for Scroll Progress on Header Text
  const textRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // States & Refs for independent section entry animations
  const midRef = useRef<HTMLDivElement>(null);
  const [midInView, setMidInView] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const [bottomInView, setBottomInView] = useState(false);

  // 1. Text scroll-progress handler
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The transition starts immediately as the text enters the bottom of the viewport
      // and completes gradually across 500px of upward scroll
      const start = windowHeight;
      const end = windowHeight - 500;

      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial execution

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Individual intersection observers for mid and bottom sections
  useEffect(() => {
    const midObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMidInView(true);
          midObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBottomInView(true);
          bottomObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (midRef.current) midObserver.observe(midRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      midObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  // Heading text split into words
  const words = "Interested in working together, trying our platform or simply learning more?".split(" ");

  return (
    <div className="relative">
      <style>{`
        /* Contact/Nav Entrance Animation (Opacity only) */
        .anim-footer-mid {
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-mid-in .anim-footer-mid {
          opacity: 1;
        }

        /* Bottom Logo & Copy Entrance Animation (Opacity only) */
        .anim-footer-bottom {
          opacity: 0;
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-bottom-in .anim-footer-bottom {
          opacity: 1;
        }
      `}</style>

      {/* Ambient Blue glow positioned at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] h-48 bg-blue-500 blur-3xl rounded-full pointer-events-none z-0" 
        aria-hidden="true"
      />
      <footer className="relative bg-zinc-900 text-zinc-200 overflow-hidden rounded-[2.5rem] mx-4 mb-16 p-10 md:p-16 lg:p-20 flex flex-col justify-between min-h-[700px] border border-white/5">
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute -bottom-[10%] right-[10%] w-[40%] h-[50%] bg-sky-900/20 blur-[120px] rounded-full mix-blend-screen" />
        </div>

        <div className="relative z-10">
          {/* Top Section - Always Visible & Bound to Scroll Reveal */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#9BA8FF] text-sm font-medium mb-6">
              <span className="text-base leading-none">✦</span> Contact Us
            </div>
            
            <h2 
              ref={textRef} 
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] select-none"
            >
              {words.map((word, idx) => {
                // Determine step and activation window for word-by-word fade
                const overlap = 0.15; 
                const wordStart = (idx / words.length) * (1 - overlap);
                const wordEnd = wordStart + overlap;
                const wordProgress = Math.max(0, Math.min(1, (scrollProgress - wordStart) / (wordEnd - wordStart)));

                // Interpolating from zinc-500 (113, 113, 122) to White (255, 255, 255)
                const r = Math.round(113 + (255 - 113) * wordProgress);
                const g = Math.round(113 + (255 - 113) * wordProgress);
                const b = Math.round(122 + (255 - 122) * wordProgress);

                return (
                  <span
                    key={idx}
                    style={{
                      color: `rgb(${r}, ${g}, ${b})`,
                      transition: "color 0.1s linear"
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>

          {/* Middle Section: Contact & Navigation (Animated Individually via Opacity) */}
          <div 
            ref={midRef} 
            className={`relative z-10 ${midInView ? "animate-mid-in" : ""}`}
          >
            <div className="anim-footer-mid mt-20 md:mt-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
              <div>
                <p className="text-sm text-zinc-400 mb-2 font-medium">
                  Contact us at:
                </p>
                <a
                  href="mailto:hello@thayalan.ai"
                  className="group flex items-center gap-2 text-xl md:text-2xl font-medium text-white hover:text-zinc-300 transition-colors"
                >
                  hello@thayalan.ai
                  <span className="text-zinc-500 group-hover:text-white transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300">
                    ↗
                  </span>
                </a>
              </div>

              <nav className="flex flex-wrap items-center gap-6 md:gap-10">
                {/* Links matching Navbar */}
                {["Features", "Solutions", "Pricing", "About"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-white text-base md:text-lg font-medium hover:text-zinc-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section: Huge Logo & Footer Bar (Animated Individually via Opacity) */}
        <div 
          ref={bottomRef} 
          className={`relative z-10 mt-32 md:mt-40 ${bottomInView ? "animate-bottom-in" : ""}`}
        >
          <div className="anim-footer-bottom">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 mb-16">
              {/* Scaled-up Linear Logo (using invert to keep it white like your navbar) */}
              <img
                src={logoUrl}
                alt="Linear Logo"
                className="h-[clamp(4rem,9vw,9rem)] w-auto object-contain invert brightness-0 shrink-0"
              />

              {/* Massive Typography */}
              <h1 className="text-[clamp(3.5rem,10.5vw,11.5rem)] leading-none font-bold tracking-tighter text-white">
                Thayalan.ai
              </h1>
            </div>

            {/* Very Bottom Info Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-zinc-500 pt-8 mt-8 border-t border-white/5">
              <p>
                © {new Date().getFullYear()} Thayalan.ai. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#linkedin"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#facebook"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a href="#twitter" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;