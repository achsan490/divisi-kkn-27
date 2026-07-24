"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "@/data/kknData";
import { PhotoModal } from "../PhotoModal";
import { Users, Sparkles, ZoomIn } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const SlideGaleri: React.FC<SlideProps> = ({ isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically cycle through ALL member cards when Galeri slide is active (1.8s per card for dynamic & fast presentation)
  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_DATA.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [isActive]);

  const currentItem = GALLERY_DATA[currentIndex];
  const isLogoImage = currentItem.image.includes("san_project") || currentItem.image.includes("logo");

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#02050E] select-none px-4">
      {/* Fullscreen Expandable Photo Modal */}
      <PhotoModal
        isOpen={isModalOpen}
        imageSrc={currentItem.image}
        title={currentItem.title}
        subtitle={`${currentItem.category} • ${currentItem.date}`}
        onClose={() => setIsModalOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30, filter: "blur(12px)" }}
        animate={
          isActive
            ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, scale: 0.92, y: 30, filter: "blur(12px)" }
        }
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center space-y-3 max-w-sm sm:max-w-md w-full mx-auto"
      >
        {/* Top Header Badge */}
        <div className="w-full flex items-center justify-between px-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-cyan-300" />
            <span>BAGIAN 3 • KKN KELOMPOK 27</span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 shadow-md backdrop-blur-md">
            PERSONEL {currentIndex + 1} / {GALLERY_DATA.length}
          </span>
        </div>

        {/* SINGLE STANDALONE VERTICAL PORTRAIT LUXURY DIGITAL POSTER */}
        <div className="super-card-poster poster-glow-edge animate-ambient-float relative w-full aspect-[3/4] rounded-[32px] overflow-hidden p-0 cursor-pointer shadow-[0_0_50px_rgba(56,189,248,0.25)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsModalOpen(true)}
              className="relative w-full h-full group flex items-center justify-center"
            >
              {/* Background Member Portrait Photo vs Centered Logo */}
              {isLogoImage ? (
                <>
                  {/* Subtle Blurred Background Glow */}
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125"
                    style={{ backgroundImage: `url(${currentItem.image})` }}
                  />
                  {/* Perfectly Centered Logo without Zooming or Cropping */}
                  <div className="relative z-10 w-full h-full p-10 sm:p-12 flex items-center justify-center">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </>
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center animate-kenburns-luxury transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${currentItem.image})` }}
                />
              )}

              {/* Shimmer Light Sweep Overlay */}
              <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-light-sweep pointer-events-none" />

              {/* Dark Vignette Overlay for Crisp Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050E] via-[#02050E]/25 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#02050E]/45 via-transparent to-transparent opacity-70" />

              {/* Click Expand Overlay */}
              <div className="absolute inset-0 bg-cyan-500/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full glass-editorial text-white text-xs font-mono font-bold flex items-center gap-2 border border-white/30 shadow-2xl">
                  <ZoomIn className="w-4 h-4 text-cyan-300" />
                  <span>KLIK LAYAR PENUH</span>
                </span>
              </div>

              {/* Top Category Badge Overlay inside Poster */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between"
              >
                <span className="px-3 py-1 rounded-full bg-cyan-950/85 backdrop-blur-md text-cyan-300 text-[11px] font-mono font-bold border border-cyan-400/40 flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentItem.category}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-slate-300 text-[11px] font-mono border border-white/15">
                  {currentItem.date}
                </span>
              </motion.div>

              {/* Bottom Profile Details Overlay inside Vertical Poster Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-4 left-4 right-4 z-20 space-y-1 bg-black/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-2xl"
              >
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight text-gradient-poster leading-tight">
                  {currentItem.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                  {currentItem.description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
