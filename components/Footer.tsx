"use client";

import { ArrowUpRightFromSquare } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

function Footer() {
  const logoUrl = "https://unpkg.com/simple-icons@v13/icons/linear.svg";

  const textRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

      const scrollY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - windowHeight;
      const distanceToBottom = maxScrollY - scrollY;

      const start = windowHeight - 50;
      const end = windowHeight - 550; 

      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      if (distanceToBottom < 80) {
        const forceFactor = 1 - (distanceToBottom / 80);
        progress = progress + (1 - progress) * forceFactor;
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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
      { threshold: 0.15 },
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBottomInView(true);
          bottomObserver.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (midRef.current) midObserver.observe(midRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      midObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  const words =
    "Interested in working together, automating your workflows, or simply learning more?".split(
      " ",
    );

  return (
    <div className="relative">
      <style>{`
        .anim-footer-mid {
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-mid-in .anim-footer-mid {
          opacity: 1;
        }

        .anim-footer-bottom {
          opacity: 0;
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-bottom-in .anim-footer-bottom {
          opacity: 1;
        }
      `}</style>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] h-48 bg-blue-500 blur-3xl rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />
      
      <footer className="relative bg-zinc-900 text-zinc-200 overflow-hidden rounded-[2.5rem] mx-4 mb-4 sm:mb-16 p-10 md:p-16 lg:p-20 flex flex-col justify-between min-h-[700px] border border-white/5">
        <div className="relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-6">
              <span className="text-base leading-none">✦</span> Contact Us
            </div>

            <h2
              ref={textRef}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] select-none"
            >
              {words.map((word, idx) => {
                // Distribute thresholds evenly across the active scroll window (from 5% to 95% scroll progress)
                const startRange = 0.05;
                const endRange = 0.95;
                const threshold = startRange + (idx / (words.length - 1 || 1)) * (endRange - startRange);
                
                // Binary evaluation: The word is either active (true) or inactive (false) [1]
                const isRevealed = scrollProgress >= threshold;

                return (
                  <span
                    key={idx}
                    style={{
                      // Color is strictly one of two states: solid white or dim translucent white [1]
                      color: isRevealed ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.25)",
                      // A snappy CSS transition softens the binary flip so it looks polished [1]
                      transition: "color 500ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>

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
                <a
                  href="#how-we-work"
                  className="text-white text-base md:text-lg font-medium hover:text-zinc-400 transition-colors"
                >
                  How We Work
                </a>
                <a
                  href="#ecosystem"
                  className="text-white text-base md:text-lg font-medium hover:text-zinc-400 transition-colors"
                >
                  Ecosystem
                </a>
                <a
                  href="#ways-to-engage"
                  className="text-white text-base md:text-lg font-medium hover:text-zinc-400 transition-colors"
                >
                  Ways to Engage
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* mt-16 on mobile significantly reduces the top vertical spacing gap */}
        <div
          ref={bottomRef}
          className={`relative z-10 mt-16 md:mt-40 ${bottomInView ? "animate-bottom-in" : ""}`}
        >
          <div className="anim-footer-bottom">
            {/* flex-row and items-center keeps icon/text aligned; mb-8 tightens vertical gap */}
            <div className="flex flex-row items-center gap-3 md:gap-6 lg:gap-8 mb-8 md:mb-16">
              <img
                src={logoUrl}
                alt="Linear Logo"
                className="h-8 sm:h-10 md:h-[clamp(4rem,9vw,9rem)] w-auto object-contain invert brightness-0 shrink-0"
              />

              <h1 className="text-3xl sm:text-4xl md:text-[clamp(3.5rem,10.5vw,11.5rem)] leading-none font-bold tracking-tighter text-white">
                Thayalan.ai
              </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-zinc-500 pt-8 mt-8 border-t border-white/5">
              <p>
                © {new Date().getFullYear()} Thayalan.ai. All rights reserved.
              </p>

              <p className="text-zinc-500">
                Designed and Developed by{" "}
                <a
                  href="https://valyroe.in/services/web-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-0.5 group"
                >
                  Valyroe™
                  <ArrowUpRightFromSquare size={12} />
                </a>
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
                <a
                  href="#twitter"
                  className="hover:text-white transition-colors"
                >
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