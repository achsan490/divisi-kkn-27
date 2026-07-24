"use client";

import React from "react";
import { motion } from "framer-motion";
import { KKN_INFO } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { Heart, Sparkles, MapPin, Users } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onReplay?: () => void;
}

export const SlideClosing: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#02050E] select-none px-3 sm:px-6">
      {/* Background Ken Burns Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[18000ms] ease-out ${
            isActive ? "scale-110" : "scale-100"
          }`}
          style={{
            backgroundImage: `url(${KKN_INFO.groupPhoto})`,
            filter: "brightness(0.28) contrast(1.25) blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050E] via-[#02050E]/70 to-[#02050E]/85" />
      </div>

      <SuperCard isActive={isActive}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Official Group Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase">
                <Users className="w-3.5 h-3.5 text-cyan-300" />
                <span>KAFILAH PENGABDIAN KKN KELOMPOK 27</span>
              </span>
              <span className="text-[11px] font-mono text-amber-400 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>UNWAHA 2026</span>
              </span>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel-dark border-2 border-cyan-400/30 shadow-2xl aspect-[16/10] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${KKN_INFO.groupPhoto})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050E] via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-cyan-200">
                  DESA KLITIH • PLANDAAN • JOMBANG
                </span>
                <span className="text-[11px] text-cyan-300 font-bold bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  21 MAHASISWA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Gratitude Message & University Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl glass-panel p-2 flex items-center justify-center border border-white/20 shadow-xl shrink-0">
                <img
                  src={KKN_INFO.universityLogo}
                  alt="Logo KKN UNWAHA"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase block">
                  {KKN_INFO.universityShort}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-cyan-300">
                  {KKN_INFO.university}
                </h4>
              </div>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-cyan-300 text-[10px] font-mono font-semibold uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
                <span>PENGABDIAN DENGAN HATI</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight text-gradient-poster leading-tight">
                Terima Kasih
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Sampai jumpa di karya-karya pengabdian selanjutnya. Terima kasih atas hangatnya sambutan dan kenangan indah masyarakat {KKN_INFO.village}, {KKN_INFO.district}, {KKN_INFO.regency}.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{KKN_INFO.village}, {KKN_INFO.district}, {KKN_INFO.regency} • 2026</span>
            </div>
          </motion.div>
        </div>
      </SuperCard>
    </div>
  );
};
