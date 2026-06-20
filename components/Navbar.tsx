import React from 'react';

function Navbar() {
  // Using the Linear icon from the Simple Icons CDN
  const logoUrl = "https://unpkg.com/simple-icons@v13/icons/linear.svg";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950 text-zinc-200 px-16">
      <nav className="mx-auto h-16 grid grid-cols-3 items-center">
        
        {/* Left: White Logo (Using CSS invert to force pure white) */}
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

        {/* Center: Navigation Links */}
        <div className="flex items-center justify-center gap-8">
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

        {/* Right: CTA Button */}
        <div className="flex items-center justify-end">
          <a
            href="#get-started"
            className="px-5 py-2 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;