"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { EffectFade, EffectCreative, Parallax } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

import { DIVISIONS_DATA } from "@/data/kknData";
import { getAudioEngine } from "@/utils/audioSynth";
import { OpeningExperience } from "./OpeningExperience";
import { AudioPlayer } from "./AudioPlayer";
import { SlideNavigation } from "./SlideNavigation";
import { ParticleCanvas } from "./ParticleCanvas";

// Individual Slides
import { SlideHero } from "./slides/SlideHero";
import { SlideDPL } from "./slides/SlideDPL";
import { SlideKetua } from "./slides/SlideKetua";
import { SlideDivisi } from "./slides/SlideDivisi";
import { SlideGaleri } from "./slides/SlideGaleri";
import { SlideClosing } from "./slides/SlideClosing";

// Dynamic slide duration calculation to guarantee 100% completion of every section:
// Slide 11 (Galeri Anggota, index 10): 30s to showcase member photo cards cleanly
// Slide 12 (Closing, index 11): 10s for complete "Terima Kasih" & Logo reveal
// Regular division cards: 6.5s per slide
const getSlideDurationMs = (index: number) => {
  if (index === 10) return 40000; // Slide 11 Galeri Anggota: 40 seconds to complete all 22 member cards (1.8s per card)
  if (index === 11) return 10000; // Slide 12 Closing: 10 seconds
  return 6500; // Regular division cards: 6.5 seconds
};

export const CinematicPresentation: React.FC = () => {
  const [openingFinished, setOpeningFinished] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Automatic slide timer: plays ALL 12 slides completely to the very last card (including all 7 gallery photos & closing), then returns to Start Opening Intro Screen!
  useEffect(() => {
    if (!openingFinished) {
      setProgressPercent(0);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now();
    const duration = getSlideDurationMs(currentSlideIndex);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgressPercent(pct);

      if (elapsed >= duration) {
        if (swiperRef.current) {
          const isAtLastSlide = swiperRef.current.activeIndex >= 11;
          if (isAtLastSlide) {
            // Reset audio back to track 0 & start time, then return to Start Opening Intro Screen!
            getAudioEngine().resetAudio();
            setOpeningFinished(false);
            setCurrentSlideIndex(0);
          } else {
            swiperRef.current.slideNext();
          }
        }
        startTimeRef.current = Date.now();
      }
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [openingFinished, currentSlideIndex]);

  const handleOpeningComplete = () => {
    setOpeningFinished(true);
  };

  const handleReplay = () => {
    setOpeningFinished(false);
    setCurrentSlideIndex(0);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#030611]">
      {/* Cyberpunk Energy Mesh & Particle Canvas Background */}
      <ParticleCanvas />

      {/* 1. Opening Experience (Initializing Sequence + Marvel Intro + Sound FX Trigger) */}
      {!openingFinished && (
        <OpeningExperience onOpeningComplete={handleOpeningComplete} />
      )}

      {/* 2. Floating Audio Controls (Music Track & Volume controls) */}
      <AudioPlayer hasStarted={openingFinished} />

      {/* 3. Main Fullscreen Presentation (Swiper) */}
      {openingFinished && (
        <div className="w-full h-full pointer-events-auto">
          <Swiper
            modules={[EffectFade, EffectCreative, Parallax]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            loop={false}
            allowTouchMove={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlideIndex(swiper.activeIndex);
              setProgressPercent(0);
              startTimeRef.current = Date.now();
            }}
            className="w-full h-full"
          >
            {/* Slide 1: Hero */}
            <SwiperSlide>
              <SlideHero isActive={currentSlideIndex === 0} />
            </SwiperSlide>

            {/* Slide 2: DPL */}
            <SwiperSlide>
              <SlideDPL isActive={currentSlideIndex === 1} />
            </SwiperSlide>

            {/* Slide 3: Ketua */}
            <SwiperSlide>
              <SlideKetua isActive={currentSlideIndex === 2} />
            </SwiperSlide>

            {/* Slide 4: Divisi Acara */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 3} data={DIVISIONS_DATA[0]} />
            </SwiperSlide>

            {/* Slide 5: Divisi Sekretaris */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 4} data={DIVISIONS_DATA[1]} />
            </SwiperSlide>

            {/* Slide 6: Divisi Bendahara */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 5} data={DIVISIONS_DATA[2]} />
            </SwiperSlide>

            {/* Slide 7: Divisi PDD */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 6} data={DIVISIONS_DATA[3]} />
            </SwiperSlide>

            {/* Slide 8: Divisi Perlengkapan */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 7} data={DIVISIONS_DATA[4]} />
            </SwiperSlide>

            {/* Slide 9: Divisi Humas */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 8} data={DIVISIONS_DATA[5]} />
            </SwiperSlide>

            {/* Slide 10: Divisi Konsumsi */}
            <SwiperSlide>
              <SlideDivisi isActive={currentSlideIndex === 9} data={DIVISIONS_DATA[6]} />
            </SwiperSlide>

            {/* Slide 11: Galeri Kegiatan (Displays all 7 photos completely over 24.5s!) */}
            <SwiperSlide>
              <SlideGaleri isActive={currentSlideIndex === 10} />
            </SwiperSlide>

            {/* Slide 12: Mission Complete / Closing (The Very Last Card! Displays over 10s, then returns to Opening Screen) */}
            <SwiperSlide>
              <SlideClosing isActive={currentSlideIndex === 11} onReplay={handleReplay} />
            </SwiperSlide>
          </Swiper>

          {/* Minimal Top Progress Bar */}
          <SlideNavigation progressPercent={progressPercent} />
        </div>
      )}
    </main>
  );
};
