"use client";

import { FadeIn } from "./fade-in";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 lg:px-10 py-24 md:py-36">
      <FadeIn>
        {/* Outer wrapper — sets the vertical space for the overlap */}
        <div className="relative mx-auto max-w-7xl md:py-20">
          {/* Dark band — horizontally full, vertically shorter than the form */}
          <div className="rounded-2xl bg-heading p-10 md:p-16 lg:p-20 md:min-h-[360px] flex items-center">
            <div className="md:max-w-[42%]">
              <h2 className="text-white text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.035em]">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="mt-6 text-white/50 text-[16px] leading-[1.7]">
                Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>

          {/* White form card — centered vertically on the dark band, right-aligned */}
          <div
            className="relative md:absolute md:top-0 md:bottom-0 md:right-6 lg:right-10 md:w-[48%]
                        md:flex md:items-center
                        -mt-8 mx-4 md:mx-0 md:mt-0"
          >
            <div
              className="w-full rounded-2xl bg-white p-8 md:p-12
                          border border-border/30
                          shadow-[0_8px_40px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.05)]"
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  placeholder="Lorem ipsum"
                  className="w-full h-13 px-5 rounded-lg border border-border text-heading text-[15px]
                             placeholder:text-muted/40
                             focus:outline-none focus:border-heading/25 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.03)]
                             transition-[border-color,box-shadow] duration-200"
                />
                <input
                  type="text"
                  placeholder="Dolor sit amet"
                  className="w-full h-13 px-5 rounded-lg border border-border text-heading text-[15px]
                             placeholder:text-muted/40
                             focus:outline-none focus:border-heading/25 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.03)]
                             transition-[border-color,box-shadow] duration-200"
                />
                <input
                  type="tel"
                  placeholder="Consectetur"
                  className="w-full h-13 px-5 rounded-lg border border-border text-heading text-[15px]
                             placeholder:text-muted/40
                             focus:outline-none focus:border-heading/25 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.03)]
                             transition-[border-color,box-shadow] duration-200"
                />
                <input
                  type="text"
                  placeholder="Adipiscing elit"
                  className="w-full h-13 px-5 rounded-lg border border-border text-heading text-[15px]
                             placeholder:text-muted/40
                             focus:outline-none focus:border-heading/25 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.03)]
                             transition-[border-color,box-shadow] duration-200"
                />
                <input
                  type="email"
                  placeholder="dolor@sitamet.com"
                  className="w-full h-13 px-5 rounded-lg border border-border text-heading text-[15px]
                             placeholder:text-muted/40
                             focus:outline-none focus:border-heading/25 focus:shadow-[0_0_0_3px_rgba(10,10,10,0.03)]
                             transition-[border-color,box-shadow] duration-200"
                />

                <div className="mt-2">
                  <button
                    type="submit"
                    className="group relative z-0 self-start inline-flex items-center justify-center gap-2
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
