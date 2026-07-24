"use client";

import React from "react";

interface SlideNavigationProps {
  progressPercent: number;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({ progressPercent }) => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      {/* Top Loading Progress Bar */}
      <div className="w-full h-1 bg-white/10 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-100 shadow-[0_0_20px_#38bdf8]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
