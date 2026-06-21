"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    // Adjust this number to control density of the particles
    const numParticles = 50; 

    // Handle high-DPI (Retina) screens for sharp, crisp rendering
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x!: number;
      y!: number;
      size!: number;
      speedY!: number;
      speedX!: number;
      baseAlpha!: number;
      fadeThreshold!: number;
      alpha!: number;

      constructor() {
        this.reset(true);
      }

      reset(initial: boolean = false): void {
        // Get parent dimension to map particles correctly
        const parentWidth = canvas!.parentElement?.clientWidth || window.innerWidth;
        const parentHeight = canvas!.parentElement?.clientHeight || window.innerHeight;

        this.x = Math.random() * parentWidth;
        // Distribute randomly across height on initial load; otherwise start at the bottom
        this.y = initial ? Math.random() * parentHeight : parentHeight + Math.random() * 30;
        
        this.size = Math.random() * 2 + 0.5; // Size ranging from 0.5px to 2.5px
        this.speedY = Math.random() * 1.0 + 0.3; // Floating speed
        this.speedX = (Math.random() - 0.5) * 0.4; // Soft horizontal drift
        this.baseAlpha = Math.random() * 0.6 + 0.4; // Base opacity
        this.fadeThreshold = parentHeight * (Math.random() * 0.4 + 0.1); // Dynamic height to start fading
        this.alpha = 0; // Initialize alpha to avoid potential undefined issues before update()
      }

      update(parentHeight: number): void {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Progressively fade out as it reaches the upper areas of the container
        const heightProgress = this.y / parentHeight; // 1 at bottom, 0 at top
        this.alpha = this.baseAlpha * heightProgress;

        // Reset particle if it drifts off-screen or goes past the fade threshold
        if (
          this.y < this.fadeThreshold || 
          this.alpha <= 0.02 || 
          this.x < 0 || 
          this.x > (canvas!.parentElement?.clientWidth || window.innerWidth)
        ) {
          this.reset(false);
        }
      }

      draw(): void {
        if (this.alpha <= 0) return;

        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Soft, shining bluish-white radial light glow
        ctx!.shadowBlur = this.size * 3;
        ctx!.shadowColor = "rgba(120, 190, 255, 0.8)";
        
        ctx!.fillStyle = `rgba(230, 245, 255, ${this.alpha})`;
        ctx!.fill();

        // Reset shadows to ensure drawing speed is optimized
        ctx!.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      const parentWidth = canvas.parentElement?.clientWidth || window.innerWidth;
      const parentHeight = canvas.parentElement?.clientHeight || window.innerHeight;

      ctx.clearRect(0, 0, parentWidth, parentHeight);

      particles.forEach((particle) => {
        particle.update(parentHeight);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}