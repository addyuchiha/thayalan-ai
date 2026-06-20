import React from 'react';

// Replace the 'image' URLs below with your actual project screenshots
const projects = [
  {
    title: "Border",
    category: "Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Theo",
    category: "E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "SnapShot",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Glowhaus",
    category: "Brand Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function PortfolioSection() {
  return (
    <section className="bg-black text-white py-24 min-h-screen overflow-hidden">
      {/* 
        Inline styles for the infinite marquee animation. 
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

      <div className="w-full">
        
        {/* Huge Typographic Header */}
        <div className="flex flex-col items-center justify-center mb-24 text-center px-6">
          <h1 
            className="text-[18vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-zinc-400 to-black pb-4"
          >
            PORTFOLIO
          </h1>
          
          <div className="max-w-2xl mt-8 flex flex-col items-center gap-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Discover a showcase of diverse <span className="text-white font-medium">subscription-based projects</span>, where each 
              design and <span className="text-white font-medium">development solution</span> is crafted to <span className="text-white font-medium">deliver lasting impact.</span>
            </p>
            
            {/* Fully rounded button */}
            <button className="bg-white text-black px-8 py-4 text-sm font-semibold rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Infinite Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex">
          
          {/* SMOOTH LEFT FADE MASK */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

          {/* 
            The track container - Width is max-content. 
            Pauses animation on group hover.
          */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
            
            {/* First Set of Items */}
            <div className="flex gap-6 pr-6">
              {projects.map((project, index) => (
                <div key={`set1-${index}`} className="w-[300px] md:w-[450px] lg:w-[550px] flex flex-col gap-4 cursor-pointer">
                  {/* Rounded Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-[2rem] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out opacity-80 hover:opacity-100"
                    />
                  </div>

                  {/* Text Bar */}
                  <div className="flex items-center justify-between px-2 py-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500">
                      {project.category} &nbsp;•&nbsp; {project.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set of Items (Exact Duplicate for the loop illusion) */}
            <div className="flex gap-6 pr-6">
              {projects.map((project, index) => (
                <div key={`set2-${index}`} className="w-[300px] md:w-[450px] lg:w-[550px] flex flex-col gap-4 cursor-pointer">
                  {/* Rounded Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-[2rem] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out opacity-80 hover:opacity-100"
                    />
                  </div>

                  {/* Text Bar */}
                  <div className="flex items-center justify-between px-2 py-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500">
                      {project.category} &nbsp;•&nbsp; {project.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* SMOOTH RIGHT FADE MASK */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}