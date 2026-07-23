"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface PhotoModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  subtitle?: string;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  imageSrc,
  title,
  subtitle,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-2xl p-4 md:p-8 cursor-zoom-out"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-6xl w-full rounded-3xl overflow-hidden glass-editorial border border-white/20 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Tutup Foto"
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full glass-editorial text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Full Image Display */}
          <div className="relative aspect-[16/9] w-full bg-[#030611] flex items-center justify-center overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-400/40 mb-2">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>FULLSCREEN PHOTO VIEW</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-slate-300 text-sm md:text-base font-light mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
