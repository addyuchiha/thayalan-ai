"use client";
import React from "react";

interface ToolsOverlayProps {
  className?: string;
}

export default function ToolsOverlay({ className = "" }: ToolsOverlayProps) {
  const CARD_WIDTH = 130;
  const CARD_HEIGHT = 38;

  // 3 Tools on the Left
  const leftTools = [
    { name: "React", slug: "react", x: 150, y: 125 },
    { name: "TypeScript", slug: "typescript", x: 150, y: 250 },
    { name: "Tailwind CSS", slug: "tailwindcss", x: 150, y: 375 },
  ];

  // 3 Tools on the Right
  const rightTools = [
    { name: "Next.js", slug: "nextdotjs", x: 850, y: 125 },
    { name: "Vercel", slug: "vercel", x: 850, y: 250 },
    { name: "GitHub", slug: "github", x: 850, y: 375 },
  ];

  // Paths adjusted for the 1000x500 system, converging at y: 250
  const strings = [
    // Top Line (React -> merges to center at y:250 -> Next.js)
    "M 150,125 L 230,125 C 310,125 310,250 400,250 L 600,250 C 690,250 690,125 770,125 L 850,125",
    
    // Middle Line (TypeScript -> runs straight through y:250 -> Vercel)
    "M 150,250 L 850,250",
    
    // Bottom Line (Tailwind CSS -> merges to center at y:250 -> GitHub)
    "M 150,375 L 230,375 C 310,375 310,250 400,250 L 600,250 C 690,250 690,375 770,375 L 850,375",
  ];

  const allTools = [...leftTools, ...rightTools];

  return (
    <div className={`relative w-full flex justify-center ${className} -my-16`}>
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-7xl select-none"
      >
        {/* Render Strings with dual stroke */}
        {strings.map((d, index) => (
          <g key={index}>
            {/* Soft background glow */}
            <path
              d={d}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Crisp main wire */}
            <path
              d={d}
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ))}

        {/* Render Tool Boxes */}
        {allTools.map((tool) => (
          <foreignObject
            key={tool.slug}
            x={tool.x - CARD_WIDTH / 2}
            y={tool.y - CARD_HEIGHT / 2}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            className="overflow-visible"
          >
            <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-white rounded-2xl shadow-[0_6px_20px_rgba(255,255,255,0.06)] border border-neutral-200 text-black font-semibold text-xs h-full w-full hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={`https://unpkg.com/simple-icons@v13/icons/${tool.slug}.svg`}
                alt={tool.name}
                className="w-4 h-4 brightness-0 object-contain"
                loading="lazy"
              />
              <span className="font-sans tracking-wide select-none">
                {tool.name}
              </span>
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}