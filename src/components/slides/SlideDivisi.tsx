"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DivisionData } from "@/data/kknData";
import { SuperCard } from "../SuperCard";
import { PhotoModal } from "../PhotoModal";
import { Users, ZoomIn } from "lucide-react";

interface SlideDivisiProps {
  isActive: boolean;
  data: DivisionData;
}

export const SlideDivisi: React.FC<SlideDivisiProps> = ({ isActive, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#030611] select-none">
      {/* Fullscreen Expandable Photo Modal */}
      <PhotoModal
        isOpen={isModalOpen}
        imageSrc={data.groupImage}
        title={data.title}
        subtitle={`${data.subtitle} • Kelompok 27 UNWAHA`}
        onClose={() => setIsModalOpen(false)}
      />

      <SuperCard isActive={isActive}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Team Photo (Clickable to open Fullscreen Modal!) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4"
          >
            <div
              onClick={() => setIsModalOpen(true)}
              title="Klik untuk melihat foto dalam mode Layar Penuh"
              className="relative group rounded-2xl sm:rounded-3xl overflow-hidden glass-panel-dark border border-white/20 shadow-2xl aspect-[16/10] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${data.groupImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-transparent to-transparent opacity-80" />

              {/* Click to expand overlay hint */}
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3.5 py-1.5 rounded-full glass-editorial text-white text-[11px] sm:text-xs font-mono font-bold flex items-center gap-2 border border-white/30 shadow-2xl">
                  <ZoomIn className="w-3.5 h-3.5 text-cyan-300" />
                  <span>KLIK LAYAR PENUH</span>
                </span>
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-300 font-mono">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{data.title}</span>
                </span>
                <span className="text-[11px] text-cyan-300 font-bold">
                  {data.members.length} Anggota
                </span>
              </div>
            </div>

            {/* Description & Work Programs */}
            <div className="space-y-2">
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {data.workPrograms.map((prog, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg glass-editorial text-[10px] sm:text-[11px] font-mono text-slate-200 border border-white/10"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title & Animated Member Roster */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full glass-editorial border border-white/15 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase mb-1">
                {data.subtitle}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter text-gradient-super">
                {data.title}
              </h2>
            </div>

            {/* Member Roster Items (Scrollable on small mobile screens) */}
            <div className="space-y-2 sm:space-y-2.5 max-h-[200px] sm:max-h-[260px] lg:max-h-none overflow-y-auto no-scrollbar pr-0.5">
              {data.members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05 + index * 0.04,
                    ease: "easeOut",
                  }}
                  className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl glass-panel-dark border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {/* Avatar Circle */}
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-cyan-400/50 bg-[#030611] shrink-0">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                        {member.prodi}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] sm:text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30">
                      NIM: {member.nim}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SuperCard>
    </div>
  );
};
