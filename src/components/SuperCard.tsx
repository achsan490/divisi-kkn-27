"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface SuperCardProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export const SuperCard: React.FC<SuperCardProps> = ({ children, className = "", isActive = true }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.005, 1.005, 1.005)`);
    setSpotlightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30, filter: "blur(10px)" }}
      animate={
        isActive
          ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.94, y: 30, filter: "blur(10px)" }
      }
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 max-h-[85vh] md:max-h-none overflow-y-auto no-scrollbar"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        className={`super-card super-card-glow relative overflow-hidden p-5 sm:p-8 md:p-12 animate-float-levitate ${className}`}
      >
        {/* Spotlight Follow Glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[30px] sm:rounded-[40px]"
          style={{
            opacity: spotlightPos.opacity,
            background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(56, 189, 248, 0.35), transparent 40%)`,
          }}
        />

        {/* Ambient Top Glow Beam */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-3xl" />

        {/* Card Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};
