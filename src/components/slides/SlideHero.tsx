"use client";

import React from "react";
import { motion } from "framer-motion";
import { KKN_INFO } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { MapPin, Sparkles, Award, ShieldCheck, Compass } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const SlideHero: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out ${isActive ? "scale-110" : "scale-100"
            }`}
          style={{
            backgroundImage: `url(${KKN_INFO.heroVideoBg})`,
            filter: "brightness(0.38) contrast(1.15) saturate(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          {/* University Logo Badge */}
          <div className="flex items-center gap-3 glass-panel-light px-5 py-2 rounded-full border border-white/20">
            <img src="/images/logo.png" alt="Logo KKN UNWAHA" className="w-8 h-8 object-contain drop-shadow" />
            <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
              {KKN_INFO.university}
            </span>
          </div>

          <div className="hidden sm:block w-2 h-2 rounded-full bg-cyan-400" />

          {/* KKN Badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-semibold tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>PEMBERDAYAAN DESA TEMATIK</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-4 max-w-4xl"
        >
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase block">
            COMPANY PROFILE INTERAKTIF
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-none text-gradient">
            {KKN_INFO.title}
          </h1>

          <p className="text-slate-300 text-lg sm:text-2xl font-light tracking-wide max-w-2xl mx-auto pt-2">
            {KKN_INFO.subTitle}
          </p>
        </motion.div>

        {/* Location Grid Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          {/* Desa Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/15 hover:border-cyan-400/40 transition-all text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-cyan-300" />
            </div>
            <p className="text-xs text-cyan-300 uppercase tracking-widest font-semibold">Wilayah Utama</p>
            <h3 className="text-xl font-bold text-white mt-1">{KKN_INFO.village}</h3>
          </div>

          {/* District Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/15 hover:border-cyan-400/40 transition-all text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5 text-blue-300" />
            </div>
            <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold">Kecamatan</p>
            <h3 className="text-xl font-bold text-white mt-1">{KKN_INFO.district}</h3>
          </div>

          {/* Regency Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/15 hover:border-cyan-400/40 transition-all text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-500/20 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-indigo-300" />
            </div>
            <p className="text-xs text-indigo-300 uppercase tracking-widest font-semibold">Kabupaten</p>
            <h3 className="text-xl font-bold text-white mt-1">{KKN_INFO.regency}</h3>
          </div>
        </motion.div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center gap-2 text-slate-400 text-xs font-medium tracking-widest uppercase animate-bounce"
        >
          <span>Gunakan Tombol Panah atau Geser Layar Untuk Slide Selanjutnya</span>
        </motion.div>
      </div>
    </div>
  );
};
