"use client";

import React from "react";

interface SlideNavigationProps {
  progressPercent: number;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({ progressPercent }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4 pointer-events-none flex flex-col items-center justify-end">
      {/* Sleek Minimal Auto-Presentation Progress Bar */}
      <div className="w-full max-w-xl mx-auto h-1.5 bg-slate-900/80 rounded-full overflow-hidden backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-100 shadow-[0_0_15px_#38bdf8]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
