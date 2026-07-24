"use client";

import React from "react";
import { motion } from "framer-motion";
import { KETUA_DATA } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { Crown, Quote, ShieldCheck, Sparkles, Code } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const SlideKetua: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#02050E] select-none">
      <SuperCard isActive={isActive}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Leader Credentials & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-mono font-bold tracking-widest uppercase w-fit">
              <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>NAKHODA KELOMPOK 27</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight text-gradient-poster">
                {KETUA_DATA.name}
              </h2>
              <p className="text-cyan-300 font-semibold text-sm sm:text-base flex items-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{KETUA_DATA.jabatan}</span>
              </p>
            </div>

            {/* Credentials Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-black/50 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">NIM Student ID</span>
                <span className="text-sm sm:text-base font-bold text-white font-mono">{KETUA_DATA.nim}</span>
              </div>

              <div className="bg-black/50 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block flex items-center gap-1">
                  <Code className="w-3 h-3 text-cyan-400" />
                  Program Studi
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">{KETUA_DATA.prodi}</span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-black/50 backdrop-blur-md p-5 rounded-2xl border border-white/15 relative overflow-hidden space-y-2">
              <Quote className="absolute top-3 right-3 w-12 h-12 text-cyan-400/10 pointer-events-none" />
              <p className="text-slate-200 text-xs sm:text-base font-light italic leading-relaxed relative z-10">
                &ldquo;{KETUA_DATA.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-cyan-300 uppercase tracking-widest pt-2 border-t border-white/10">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Komitmen Visi Kepemimpinan</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Leader Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            animate={isActive ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group max-w-sm w-full aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden glass-panel-dark border-2 border-cyan-400/40 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${KETUA_DATA.photo})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050E] via-[#02050E]/20 to-transparent opacity-90" />

              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-mono font-bold tracking-widest uppercase border border-cyan-400/40 flex items-center gap-1.5">
                <Crown className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>KETUA KELOMPOK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SuperCard>
    </div>
  );
};
