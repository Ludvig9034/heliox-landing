"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle, Pause, Play, Volume2, VolumeOff } from "lucide-react";

const DISMISS_KEY = "video-popup-dismissed";

export function VideoPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showTapIcon, setShowTapIcon] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;
    setDismissed(false);
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    localStorage.setItem(DISMISS_KEY, "1");
    videoRef.current?.pause();
  }, []);

  const togglePause = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPaused(false); }
    else { v.pause(); setPaused(true); }
    setShowTapIcon(true);
    setTimeout(() => setShowTapIcon(false), 600);
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-[200px] md:w-[280px] md:bottom-6 md:right-6
                  transition-[opacity,transform] duration-500 ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="relative rounded-2xl overflow-hidden
                      shadow-[0_8px_40px_rgba(0,0,0,0.2),0_0_6px_rgba(0,0,0,0.03),0_2px_8px_rgba(0,0,0,0.06),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.15),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.12),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.1),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.1),inset_0_0_8px_6px_rgba(255,255,255,0.03)]">
        {/* Dismiss button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-2 right-2 md:top-3 md:right-3 z-10 w-6 h-6 md:w-7 md:h-7 rounded-full bg-black/40 backdrop-blur-sm
                     flex items-center justify-center cursor-pointer
                     hover:bg-black/60 transition-colors duration-200
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Luk"
        >
          <X className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
        </button>

        {/* Full-bleed video */}
        <div className="aspect-[7/12] relative overflow-hidden group/video">
          <Image
            src="/images/pop-up.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 280px"
            priority
          />

          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            poster="/images/pop-up.jpeg"
          >
            <source src="/images/9x16_Motii_VSL Feb 2026_Loud Colors.mp4" type="video/mp4" />
          </video>

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* Progress bar */}
          <div className="absolute inset-x-0 top-0 z-20 h-[3px] md:h-[4px] bg-black/20">
            <div
              className="h-full bg-white transition-[width] duration-200 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Tap-to-pause overlay (mobile) */}
          <button
            type="button"
            onClick={togglePause}
            className="absolute inset-0 z-[15] md:hidden cursor-pointer"
            aria-label={paused ? "Afspil" : "Pause"}
          />
          {/* Tap feedback icon (mobile) */}
          <div className={`absolute inset-0 z-[16] md:hidden flex items-center justify-center pointer-events-none
                           transition-opacity duration-300 ${showTapIcon ? "opacity-100" : "opacity-0"}`}>
            <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
              {paused
                ? <Pause className="w-5 h-5 text-white" />
                : <Play className="w-5 h-5 text-white ml-0.5" />}
            </div>
          </div>

          {/* Video controls (desktop only) */}
          <div className="absolute bottom-[116px] left-3 z-20 hidden md:flex items-center gap-1.5
                          opacity-0 group-hover/video:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              onClick={togglePause}
              className="group/btn relative z-0 w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer
                         bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md
                         border border-white/[0.12]
                         ring-1 ring-inset ring-white/10
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_3px_rgba(0,0,0,0.2)]
                         flex items-center justify-center
                         transition-transform duration-300
                         before:absolute before:inset-0 before:-z-10
                         before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
                         before:rounded-[100%] before:bg-white/15 before:transition-transform before:duration-500 before:content-['']
                         hover:scale-110 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                         active:scale-95
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={paused ? "Afspil" : "Pause"}
            >
              {paused
                ? <Play className="relative z-10 w-3 h-3 text-white ml-0.5" />
                : <Pause className="relative z-10 w-3 h-3 text-white" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="group/btn relative z-0 w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer
                         bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md
                         border border-white/[0.12]
                         ring-1 ring-inset ring-white/10
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_3px_rgba(0,0,0,0.2)]
                         flex items-center justify-center
                         transition-transform duration-300
                         before:absolute before:inset-0 before:-z-10
                         before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
                         before:rounded-[100%] before:bg-white/15 before:transition-transform before:duration-500 before:content-['']
                         hover:scale-110 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                         active:scale-95
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={muted ? "Slå lyd til" : "Slå lyd fra"}
            >
              {muted
                ? <VolumeOff className="relative z-10 w-3 h-3 text-white" />
                : <Volume2 className="relative z-10 w-3 h-3 text-white" />}
            </button>
          </div>

          {/* Action buttons */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-2.5 md:p-3 flex flex-col gap-1.5 md:gap-2">
            <a
              href="tel:+4512345678"
              className="group relative z-0 inline-flex items-center justify-center gap-2 h-9 md:h-10 rounded-lg
                         text-[12px] md:text-[13px] font-medium tracking-wide cursor-pointer overflow-hidden
                         bg-gradient-to-b from-white to-white/85 text-heading
                         border border-b-2 border-heading/[0.06]
                         ring-1 ring-inset ring-heading/[0.04]
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]
                         transition-all duration-500
                         before:absolute before:inset-0 before:-z-10
                         before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
                         before:rounded-[100%] before:bg-heading/[0.04] before:transition-transform before:duration-700 before:content-['']
                         hover:scale-[1.03] hover:brightness-[0.97] hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                         active:scale-[0.97] active:brightness-95
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="relative z-10 w-3.5 h-3.5" />
              <span className="relative z-10">Lorem ipsum</span>
            </a>
            <a
              href="#contact"
              onClick={handleDismiss}
              className="group relative z-0 inline-flex items-center justify-center gap-2 h-9 md:h-10 rounded-lg
                         text-[12px] md:text-[13px] font-medium tracking-wide cursor-pointer overflow-hidden
                         bg-gradient-to-b from-white/15 to-white/5 text-white
                         border border-b-2 border-white/[0.08]
                         ring-1 ring-inset ring-white/10
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_3px_rgba(0,0,0,0.2)]
                         transition-all duration-500
                         before:absolute before:inset-0 before:-z-10
                         before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
                         before:rounded-[100%] before:bg-white/10 before:transition-transform before:duration-700 before:content-['']
                         hover:scale-[1.03] hover:brightness-110 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                         active:scale-[0.97] active:brightness-90
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="relative z-10 w-3.5 h-3.5" />
              <span className="relative z-10">Lorem ipsum</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
