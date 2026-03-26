"use client";

import { useState, useEffect } from "react";
import { X, Phone, MessageCircle } from "lucide-react";

export function VideoPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-[280px]
                  transition-[opacity,transform] duration-500 ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="relative rounded-2xl overflow-hidden bg-heading shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
        {/* Dismiss button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm
                     flex items-center justify-center cursor-pointer
                     hover:bg-black/60 transition-colors duration-200
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Luk"
        >
          <X className="w-3.5 h-3.5 text-white" />
        </button>

        {/* Portrait video placeholder */}
        <div className="aspect-[3/4] bg-heading/90 flex items-center justify-center">
          <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
            Video
          </p>
        </div>

        {/* Action buttons */}
        <div className="p-3 flex flex-col gap-2">
          <a
            href="tel:+4512345678"
            className="group relative z-0 inline-flex items-center justify-center gap-2 h-10 rounded-lg
                       text-[13px] font-medium tracking-wide cursor-pointer overflow-hidden
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
            onClick={() => setDismissed(true)}
            className="group relative z-0 inline-flex items-center justify-center gap-2 h-10 rounded-lg
                       text-[13px] font-medium tracking-wide cursor-pointer overflow-hidden
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
  );
}
