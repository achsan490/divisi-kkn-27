"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, SkipForward, Sliders } from "lucide-react";
import { getAudioEngine, PLAYLIST_TRACKS, AudioTrack } from "@/utils/audioSynth";

interface AudioPlayerProps {
  hasStarted: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ hasStarted }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(PLAYLIST_TRACKS[0]);
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      const audio = getAudioEngine();
      audio.setVolume(volume);
      audio.setMute(isMuted);
      audio.play();
      setIsPlaying(true);
      setCurrentTrack(audio.getCurrentTrack());
    }
  }, [hasStarted]);

  const handleTogglePlay = () => {
    const audio = getAudioEngine();
    const playingState = audio.togglePlay();
    setIsPlaying(playingState);
  };

  const handleToggleMute = () => {
    const audio = getAudioEngine();
    const mutedState = audio.setMute(!isMuted);
    setIsMuted(mutedState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    const audio = getAudioEngine();
    audio.setVolume(val);
    if (val > 0 && isMuted) {
      audio.setMute(false);
      setIsMuted(false);
    }
  };

  const handleNextTrack = () => {
    const audio = getAudioEngine();
    audio.nextTrack();
    setCurrentTrack(audio.getCurrentTrack());
    setIsPlaying(true);
  };

  if (!hasStarted) return null;

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center pointer-events-auto">
      {/* Sleek Glass Floating Audio Container */}
      <div className="flex items-center gap-1.5 sm:gap-3 glass-editorial rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-2xl border border-white/20 backdrop-blur-2xl transition-all duration-300">
        
        {/* Animated Equalizer Bars */}
        <div
          onClick={() => setIsExpandedMobile(!isExpandedMobile)}
          className="flex items-center gap-0.5 h-4 px-1 cursor-pointer"
          title="Klik untuk tampilkan/sembunyikan kontrol volume"
        >
          {[0, 1, 2, 3].map((idx) => (
            <span
              key={idx}
              className={`w-0.5 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
                isPlaying && !isMuted ? "animate-pulse" : "h-1.5 opacity-40"
              }`}
              style={{
                height: isPlaying && !isMuted ? `${12 + (idx % 2 ? 6 : -4)}px` : "6px",
                animationDelay: `${idx * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-200 flex items-center justify-center transition-all hover:scale-105 border border-cyan-400/40 cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />}
        </button>

        {/* Next Track Button (Ganti Lagu) */}
        <button
          onClick={handleNextTrack}
          aria-label="Lagu Selanjutnya"
          title="Ganti Musik DJ (Next Track)"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-200 flex items-center justify-center transition-all hover:scale-105 border border-white/10 cursor-pointer"
        >
          <SkipForward className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300" />
        </button>

        {/* Mute Toggle Button */}
        <button
          onClick={handleToggleMute}
          aria-label={isMuted ? "Aktifkan Suara" : "Bisukan Suara"}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
        >
          {isMuted || volume === 0 ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300" />}
        </button>

        {/* Volume Slider & Track Details (Always visible on desktop, expandable on mobile) */}
        <div className={`${isExpandedMobile ? "flex" : "hidden sm:flex"} items-center gap-1.5 pl-1 border-l border-white/10`}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            aria-label="Pengaturan Volume Suara"
            title="Geser Untuk Atur Volume Musik"
            className="w-16 sm:w-24 h-1.5 bg-slate-800 accent-cyan-400 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-[9px] sm:text-[10px] font-mono text-cyan-300 font-bold min-w-[24px]">
            {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
          </span>
        </div>

        {/* Mobile Expand Toggle Button */}
        <button
          onClick={() => setIsExpandedMobile(!isExpandedMobile)}
          aria-label="Toggle Volume Slider"
          className="sm:hidden w-7 h-7 rounded-full bg-white/5 text-cyan-300 flex items-center justify-center border border-white/10"
        >
          <Sliders className="w-3 h-3" />
        </button>

        {/* Current Track Name Label (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-slate-300 pl-1 max-w-[140px] truncate border-l border-white/10">
          <Music className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow shrink-0" />
          <span className="truncate text-[11px] font-semibold text-cyan-200" title={currentTrack.name}>
            {currentTrack.name}
          </span>
        </div>

      </div>
    </div>
  );
};
