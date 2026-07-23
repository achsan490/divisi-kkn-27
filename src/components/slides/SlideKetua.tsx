"use client";

import React from "react";
import { motion } from "framer-motion";
import { KETUA_DATA } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { Crown, Quote, Code, ShieldCheck, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const SlideKetua: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-navy-950 px-6">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Leadership Statement & Credentials */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 order-2 lg:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase w-fit">
            <Crown className="w-4 h-4 text-cyan-300" />
            <span>NAKHODA KELOMPOK KKN</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-gradient">
              {KETUA_DATA.name}
            </h2>
            <p className="text-cyan-300 font-semibold text-lg mt-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>{KETUA_DATA.jabatan}</span>
            </p>
          </div>

          {/* Student Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-2xl border border-white/10">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-medium">NIM Student ID</span>
              <span className="text-lg font-bold text-white font-mono">{KETUA_DATA.nim}</span>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white/10">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-medium flex items-center gap-1">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                Program Studi
              </span>
              <span className="text-base font-bold text-white">{KETUA_DATA.prodi}</span>
            </div>
          </div>

          {/* Quote Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 w-16 h-16 text-cyan-400/10 pointer-events-none" />
            <p className="text-slate-200 text-base sm:text-lg font-light italic leading-relaxed relative z-10">
              &ldquo;{KETUA_DATA.quote}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Komitmen Kepemimpinan 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Leader Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group max-w-md w-full">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000" />

            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl aspect-[3/4] flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${KETUA_DATA.photo})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-panel-light text-cyan-300 text-xs font-bold tracking-widest uppercase border border-white/20 flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Ketua</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
