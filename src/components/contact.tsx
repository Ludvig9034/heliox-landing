import { FadeIn } from "./fade-in";
import { ArrowRight, Check } from "lucide-react";
import { LogoLoop } from "./logo";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 lg:px-10 py-16 md:py-24">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl rounded-2xl bg-heading px-8 py-20 md:px-16 md:py-24 overflow-hidden">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.6) 0%, transparent 40%), radial-gradient(circle at 50% 10%, rgba(255,255,255,0.4) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.15) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.15) 75%)",
                backgroundSize: "120px 120px",
              }}
            />
          </div>

{/* Headline with inline CTA */}
          <div className="relative text-center">
            <h2 className="text-white text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.8] tracking-[-0.035em] max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
              <a
                href="mailto:hello@example.com"
                className="group relative z-0 inline-flex items-center gap-2
                           align-middle vertical-middle h-[2.2em] ml-4 px-10 translate-y-[-0.08em]
                           text-[0.5em] font-medium tracking-wide rounded-full cursor-pointer
                           bg-gradient-to-b from-white to-white/90 text-heading overflow-hidden
                           border border-white/40
                           shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.2),0_4px_16px_rgba(255,255,255,0.08)]
                           transition-all duration-500
                           before:absolute before:inset-0 before:-z-10
                           before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
                           before:rounded-[100%] before:bg-heading/[0.05] before:transition-transform before:duration-700 before:content-['']
                           hover:scale-[1.05] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.2),0_8px_28px_rgba(255,255,255,0.15)]
                           hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                           active:scale-[0.97]
                           animate-[glowWhite_3s_ease-in-out_infinite]"
              >
                <span className="relative z-10">Lorem ipsum</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </h2>
          </div>

          {/* Trust badges */}
          <div className="relative mt-8 flex items-center justify-center gap-6 flex-wrap">
            {["Lorem ipsum dolor", "Sit amet consectetur"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white/40" />
                <span className="text-[13px] text-white/40 font-medium">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
