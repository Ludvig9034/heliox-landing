"use client";

import { FadeIn } from "./fade-in";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 lg:px-10 py-16 md:py-24">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl rounded-2xl bg-heading overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: visual */}
            <div className="relative min-h-[300px] md:min-h-0">
              {/* Layered gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-heading via-heading to-heading/80" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.9) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.6) 0%, transparent 40%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.2) 75%)",
                  backgroundSize: "80px 80px",
                }}
              />

              {/* Content over gradient */}
              <div className="relative h-full flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/40 mb-4">
                  Lorem ipsum
                </p>
                <h2 className="text-white text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.035em]">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="mt-4 text-white/50 text-[15px] leading-[1.7] max-w-sm">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    <span className="text-white/50 text-[14px]">
                      hello@example.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    <span className="text-white/50 text-[14px]">
                      +45 12 34 56 78
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 md:p-12 lg:p-16 bg-surface">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-muted mb-2">
                      Lorem ipsum
                    </label>
                    <input
                      type="text"
                      placeholder="Dolor sit amet"
                      className="w-full h-12 px-4 rounded-lg bg-white border border-border text-heading text-[14px]
                                 placeholder:text-muted/40
                                 focus:outline-none focus:border-heading/30 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.04)]
                                 transition-[border-color,box-shadow] duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-muted mb-2">
                      Lorem ipsum
                    </label>
                    <input
                      type="email"
                      placeholder="dolor@sitamet.com"
                      className="w-full h-12 px-4 rounded-lg bg-white border border-border text-heading text-[14px]
                                 placeholder:text-muted/40
                                 focus:outline-none focus:border-heading/30 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.04)]
                                 transition-[border-color,box-shadow] duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-muted mb-2">
                    Lorem ipsum
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Consectetur adipiscing elit..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-heading text-[14px]
                               placeholder:text-muted/40 resize-none
                               focus:outline-none focus:border-heading/30 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.04)]
                               transition-[border-color,box-shadow] duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative z-0 self-start mt-2 inline-flex items-center justify-center gap-2
                             h-11 px-6 rounded-full text-[14px] font-medium tracking-wide cursor-pointer overflow-hidden
                             bg-gradient-to-b from-heading to-heading/85 text-white
                             border border-b-2 border-white/[0.08]
                             ring-1 ring-inset ring-white/15
                             shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_3px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.15)]
                             transition-all duration-500
                             before:absolute before:inset-0 before:-z-10
                             before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
                             before:rounded-[100%] before:bg-white/15 before:transition-transform before:duration-700 before:content-['']
                             hover:scale-[1.03] hover:brightness-110 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                             active:scale-[0.97] active:brightness-90
                             animate-[glow_3s_ease-in-out_infinite]
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading"
                >
                  <span className="relative z-10">Lorem ipsum</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
