import { div } from "motion/react-client";
import React from "react";

function Footer() {
  // Using the Linear icon from your Navbar
  const logoUrl = "https://unpkg.com/simple-icons@v13/icons/linear.svg";

  return (
    <div className="relative">
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
          {/* Top Section */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#9BA8FF] text-sm font-medium mb-6">
              <span className="text-base leading-none">✦</span> Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15]">
              <span className="text-white">
                Interested in working together,{" "}
              </span>
              <span className="text-zinc-400">
                trying our platform or simply learning more?
              </span>
            </h2>
          </div>

          {/* Middle Section: Contact & Navigation */}
          <div className="mt-20 md:mt-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
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
              {/* Links updated to match your Navbar component */}
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

        {/* Bottom Section: Huge Logo & Footer Bar */}
        <div className="relative z-10 mt-32 md:mt-40">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 mb-16">
            {/* Scaled-up Linear Logo (using invert to keep it white like your navbar) */}
            <img
              src={logoUrl}
              alt="Linear Logo"
              className="h-[clamp(4rem,9vw,9rem)] w-auto object-contain invert brightness-0 shrink-0"
            />

            {/* Massive Typography - clamp tweaked slightly to fit the longer "Thayalan.ai" text seamlessly */}
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
      </footer>
    </div>
  );
}

export default Footer;
