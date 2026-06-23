"use client"

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Using the Linear icon from the Simple Icons CDN
  const logoUrl = "https://unpkg.com/simple-icons@v13/icons/linear.svg";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950 text-zinc-200 px-6 md:px-16 anim-navbar">
      {/* Pure CSS Animation Styles */}
      <style>{`
        @keyframes navFadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes mobileMenuSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Matches the timing of the hero content (.anim-content) */
        .anim-navbar {
          opacity: 0;
          animation: navFadeInDown 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.8s;
        }

        .anim-mobile-menu {
          animation: mobileMenuSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <nav className="mx-auto h-16 flex justify-between items-center md:grid md:grid-cols-3">
        
        {/* Left: White Logo */}
        <div className="flex items-center gap-3 justify-start">
          <img 
            src={logoUrl} 
            alt="Linear Logo" 
            className="w-6 h-6 object-contain invert brightness-0"
          />
          <span className="font-semibold text-2xl tracking-tight text-white">
            Thayalan.ai
          </span>
        </div>

        {/* Center: Navigation Links (Hidden on mobile, flex on desktop) */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Solutions
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        {/* Right: CTA Button (Hidden on mobile, flex on desktop) */}
        <div className="hidden md:flex items-center justify-end">
          <a
            href="#get-started"
            className="px-5 py-2 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle Button (Visible only on mobile) */}
        <div className="flex md:hidden items-center justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-200 hover:text-white focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-zinc-950 border-t border-zinc-900 px-6 py-6 flex flex-col gap-6 md:hidden anim-mobile-menu">
          <div className="flex flex-col gap-4">
            <a 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2"
            >
              Features
            </a>
            <a 
              href="#solutions" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2"
            >
              Solutions
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2"
            >
              About
            </a>
          </div>
          <hr className="border-zinc-900" />
          <div className="flex justify-center">
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-5 py-3 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;