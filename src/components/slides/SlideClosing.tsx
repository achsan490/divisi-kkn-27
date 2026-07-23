"use client";

import React from "react";
import { motion } from "framer-motion";
import { KKN_INFO } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { Award, Heart, Sparkles, MapPin, RotateCcw } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onReplay?: () => void;
}

export const SlideClosing: React.FC<SlideProps> = ({ isActive, onReplay }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-navy-950 px-6">
      {/* Background Visual: Village Sunset */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[14000ms] ease-out ${isActive ? "scale-110" : "scale-100"
            }`}
          style={{
            backgroundImage: `url(${KKN_INFO.closingBg})`,
            filter: "brightness(0.42) contrast(1.15) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/40 to-navy-950" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-8">
        {/* University Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl glass-panel p-3 flex items-center justify-center border border-white/30 shadow-2xl glow-blue"
        >
          <img src="/images/logo.png" alt="Logo KKN UNWAHA" className="w-full h-full object-contain drop-shadow-xl" />
        </motion.div>

        {/* Main Gratitude Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] bg-cyan-950/60 px-5 py-2 rounded-full border border-cyan-500/30 w-fit mx-auto">
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <span>PENGABDIAN DENGAN HATI & DEDIKASI</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight text-gradient">
            Terima Kasih
          </h2>

          <p className="text-xl sm:text-3xl font-bold text-cyan-200 tracking-wide">
            {KKN_INFO.title}
          </p>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Sampai jumpa di karya-karya pengabdian selanjutnya. Terima kasih atas hangatnya sambutan dan kenangan indah masyarakat {KKN_INFO.village}, {KKN_INFO.district}, {KKN_INFO.regency}.
          </p>
        </motion.div>

        {/* Footer info & Replay button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-6 pt-4"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Desa Klitih, Kecamatan Plandaan, Kabupaten Jombang • 2026</span>
          </div>

          {onReplay && (
            <button
              onClick={onReplay}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-button text-cyan-200 text-xs sm:text-sm font-semibold tracking-wider uppercase border border-cyan-400/40 hover:scale-105 transition-all"
            >
              <RotateCcw className="w-4 h-4 text-cyan-300 group-hover:rotate-180 transition-transform duration-700" />
              <span>Putar Ulang Presentasi</span>
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};
