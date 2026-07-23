"use client";

import React from "react";
import { motion } from "framer-motion";
import { DPL_DATA } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { Quote, UserCheck, GraduationCap, Award } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const SlideDPL: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-navy-950 px-6">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Slide Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Big Styled Photo Frame */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group max-w-md w-full">
            {/* Halo Aura Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000" />

            {/* Photo Card */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl aspect-[3/4] flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${DPL_DATA.photo})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

              {/* Bottom Card Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel-light backdrop-blur-md border-t border-white/10">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>Pengarah Akademik</span>
                </div>
                <h4 className="text-xl font-bold text-white">{DPL_DATA.name}</h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Info & Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase w-fit">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>DOSEN PEMBIMBING LAPANGAN</span>
          </div>

          {/* Name & Academic Title */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-gradient">
              {DPL_DATA.name}
            </h2>
            <p className="text-cyan-300 font-semibold text-base sm:text-lg mt-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>{DPL_DATA.jabatan}</span>
            </p>
            <p className="text-slate-400 text-sm mt-1">{DPL_DATA.fakultas}</p>
          </div>

          {/* Motivational Quote Glass Box */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 w-16 h-16 text-cyan-400/10 pointer-events-none" />
            <p className="text-slate-200 text-base sm:text-xl font-light italic leading-relaxed relative z-10">
              &ldquo;{DPL_DATA.quote}&rdquo;
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>UNWAHA Jombang</span>
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-mono">
                Kontak WA: {DPL_DATA.contact}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
