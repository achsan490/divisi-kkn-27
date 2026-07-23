"use client";

import React, { useEffect, useRef } from "react";

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle pool with energy lines
    const numParticles = Math.min(60, Math.floor(window.innerWidth / 20));
    const particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.8 + 0.8,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: -Math.random() * 0.7 - 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.4 ? "#38bdf8" : "#8b5cf6", // Cyan or Cyber Purple
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between nearby particles for a cyber mesh effect
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#38bdf8";
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw floating energy particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 opacity-70"
    />
  );
};
