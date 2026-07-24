"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KKN_INFO } from "@/data/kknData";
import { getAudioEngine } from "@/utils/audioSynth";
import { Play, Sparkles, Flame } from "lucide-react";

interface OpeningProps {
  onOpeningComplete: () => void;
}

// Roster of member photos for Marvel Intro rapid flip sequence
const MARVEL_PHOTOS = [
  "/images/nuria.jpg",
  "/images/sita.jpg",
  "/images/laila.jpg",
  "/images/kisa.jpg",
  "/images/lina.jpg",
  "/images/nadya.jpg",
  "/images/diva.jpg",
  "/images/arinda.jpg",
  "/images/salman.jpg",
  "/images/yogi.jpg",
  "/images/alma.jpg",
  "/images/achsan.jpg",
  "/images/nadia.jpg",
  "/images/tyas.jpg",
  "/images/baihaqi.jpg",
  "/images/murni.jpg",
  "/images/hakiki.jpg",
  "/images/aklis.jpg",
  "/images/danu.jpg",
  "/images/dimas eka.jpg",
  "/images/thoil.jpg",
  "/images/ketua.jpeg",
  "/images/dpl.jpeg",
  "/images/kelompok.jpg",
];

export const OpeningExperience: React.FC<OpeningProps> = ({ onOpeningComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [phase, setPhase] = useState<"start_modal" | "marvel_flip" | "who_are_we" | "logo_reveal" | "done">("start_modal");

  const handleStartExperience = () => {
    // Play DJ Audio Track from start
    const audio = getAudioEngine();
    audio.play();

    setHasStarted(true);
    setPhase("marvel_flip");
  };

  // Extended Marvel Intro Style Rapid Photo Flip Sequence (70 flips for maximum hype!)
  useEffect(() => {
    if (phase !== "marvel_flip") return;

    let flipCount = 0;
    const maxFlips = 70; // 70 rapid photo flashes (cycles through member photos 3 times!)

    const flipInterval = setInterval(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % MARVEL_PHOTOS.length);
      flipCount++;

      if (flipCount >= maxFlips) {
        clearInterval(flipInterval);
        setPhase("who_are_we");

        setTimeout(() => {
          setPhase("logo_reveal");
        }, 1400);

        setTimeout(() => {
          setPhase("done");
          setTimeout(onOpeningComplete, 600);
        }, 3400);
      }
    }, 45); // 45ms rapid photo flash per member photo!

    return () => clearInterval(flipInterval);
  }, [phase, onOpeningComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.12, filter: "blur(20px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030611] overflow-hidden select-none"
        >
          {/* 1. Start Experience Cover Screen */}
          {phase === "start_modal" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 text-center px-6 max-w-xl mx-auto"
            >
              <div className="super-card super-card-glow p-8 md:p-12 relative overflow-hidden backdrop-blur-2xl">
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl" />

                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl glass-editorial p-3 flex items-center justify-center border border-cyan-400/40 shadow-2xl glow-blue">
                    <img
                      src="/images/logo.png"
                      alt="Logo KKN UNWAHA"
                      className="w-full h-full object-contain drop-shadow-[0_0_25px_#38bdf8] animate-pulse-slow"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4">
                  <Flame className="w-4 h-4 text-cyan-300 animate-bounce" />
                  <span>MARVEL INTRO & CONCERT EXPERIENCE</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2 text-gradient-super">
                  KKN 27 EXPERIENCE
                </h1>

                <p className="text-slate-300 text-sm md:text-base mb-8 font-mono font-light">
                  DESA KLITIH • UNWAHA JOMBANG • 2026
                </p>

                {/* Clean, High Impact Start Button */}
                <button
                  onClick={handleStartExperience}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-extrabold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:shadow-[0_0_60px_rgba(56,189,248,0.9)] hover:scale-105 active:scale-95 border border-cyan-300/50 overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <Play className="w-5 h-5 mr-3 fill-current text-white group-hover:scale-110 transition-transform" />
                  <span className="tracking-widest">START CONCERT INTRO</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* 2. Marvel Intro Rapid Photo Flip Sequence (Extended Flashes) */}
          {phase === "marvel_flip" && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black overflow-hidden">
              <motion.div
                key={currentPhotoIdx}
                initial={{ scale: 1.25, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.04 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${MARVEL_PHOTOS[currentPhotoIdx]})`,
                  filter: "contrast(1.35) brightness(0.6) saturate(1.2)",
                }}
              />

              {/* Red-Blue Marvel Film Grain Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-transparent to-red-600/30 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />

              {/* Center Watermark Text */}
              <div className="relative z-40 text-center font-mono">
                <span className="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter opacity-90 text-stroke-transparent uppercase drop-shadow-[0_0_35px_#38bdf8]">
                  KKN 27
                </span>
              </div>
            </div>
          )}

          {/* 3. "WHO ARE WE?" Question */}
          {phase === "who_are_we" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
              transition={{ duration: 0.6 }}
              className="relative z-30 text-center font-mono"
            >
              <h2 className="text-5xl sm:text-8xl font-black text-white tracking-widest text-gradient-super uppercase">
                WHO ARE WE?
              </h2>
            </motion.div>
          )}

          {/* 4. "WE ARE KKN 27 DESA KLITIH" Logo Reveal */}
          {phase === "logo_reveal" && (
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="relative z-30 text-center px-6 space-y-4"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl glass-editorial p-4 mx-auto mb-4 border border-cyan-400/40 shadow-2xl glow-blue">
                <img
                  src="/images/logo.png"
                  alt="Logo KKN UNWAHA"
                  className="w-full h-full object-contain drop-shadow-[0_0_35px_#38bdf8] animate-pulse"
                />
              </div>

              <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-[0.3em] uppercase">
                WE ARE...
              </span>

              <h1 className="text-4xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter text-gradient-super">
                KKN KELOMPOK 27
              </h1>

              <p className="text-cyan-300 text-xl sm:text-3xl font-black tracking-widest uppercase font-mono">
                DESA KLITIH • UNWAHA JOMBANG
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
