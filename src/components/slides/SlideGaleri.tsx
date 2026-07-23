"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { PhotoModal } from "../PhotoModal";
import { Camera, Calendar, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const SlideGaleri: React.FC<SlideProps> = ({ isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically cycle through ALL 7 activity photos when Galeri slide is active (3.5s per photo)
  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_DATA.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isActive]);

  const currentItem = GALLERY_DATA[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % GALLERY_DATA.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#030611] select-none">
      {/* Fullscreen Expandable Photo Modal */}
      <PhotoModal
        isOpen={isModalOpen}
        imageSrc={currentItem.image}
        title={currentItem.title}
        subtitle={`${currentItem.category} • ${currentItem.date}`}
        onClose={() => setIsModalOpen(false)}
      />

      <SuperCard isActive={isActive}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-editorial border border-white/15 text-cyan-300 text-xs font-mono font-bold tracking-[0.2em] uppercase">
              <Camera className="w-4 h-4 text-cyan-300" />
              <span>GALERI REKAM JEJAK DESA KLITIH</span>
            </span>
            <span className="text-xs font-mono text-[#4F8CFF] font-bold">
              FOTO {currentIndex + 1} / {GALLERY_DATA.length}
            </span>
          </div>

          {/* Photo Frame Container (Clickable for Fullscreen!) */}
          <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-white/20 aspect-[16/9] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={() => setIsModalOpen(true)}
                className="relative w-full h-full cursor-pointer group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center animate-kenburns"
                  style={{ backgroundImage: `url(${currentItem.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-transparent to-transparent opacity-85" />

                {/* Click Expand Overlay */}
                <div className="absolute inset-0 bg-cyan-500/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full glass-editorial text-white text-xs font-mono font-bold flex items-center gap-2 border border-white/30 shadow-2xl">
                    <ZoomIn className="w-4 h-4 text-cyan-300" />
                    <span>KLIK LAYAR PENUH</span>
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-mono font-bold border border-cyan-400/40">
                      {currentItem.category}
                    </span>
                    <span className="text-[11px] text-slate-300 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {currentItem.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                    {currentItem.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed truncate max-w-2xl">
                    {currentItem.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next Manual Controls */}
            <button
              onClick={handlePrev}
              aria-label="Foto Sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-editorial text-white flex items-center justify-center hover:bg-cyan-500/30 transition-all border border-white/20 z-30 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Foto Selanjutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-editorial text-white flex items-center justify-center hover:bg-cyan-500/30 transition-all border border-white/20 z-30 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator for all 7 photos */}
          <div className="flex items-center justify-center gap-2">
            {GALLERY_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_10px_#38bdf8]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </SuperCard>
    </div>
  );
};
