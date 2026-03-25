import { FadeIn } from "./fade-in";

export function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center bg-white pt-16">
      {/* Top section: split layout */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-10 md:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 items-start">
          {/* Left: headline */}
          <FadeIn>
            <h1 className="text-heading text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              Lorem ipsum dolor.
              <br />
              Sit amet elit.
            </h1>
          </FadeIn>

          {/* Right: CTAs */}
          <FadeIn className="[transition-delay:150ms]">
            <div className="flex flex-col justify-start md:pt-2">
              <p className="text-muted text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.7]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center h-11 px-6 text-[14px] font-medium tracking-wide
                             bg-heading text-white rounded-full
                             hover:bg-heading/85 hover:scale-[1.02] active:scale-[0.98]
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                             transition-all duration-200 ease-out"
                >
                  Lorem ipsum
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center h-11 px-6 text-[14px] font-medium tracking-wide
                             text-heading border border-border rounded-full
                             hover:border-heading/30 hover:bg-surface hover:scale-[1.02] active:scale-[0.98]
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                             transition-all duration-200 ease-out"
                >
                  Dolor sit amet
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Visual showcase */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 mt-14 md:mt-16 pb-0">
        <FadeIn>
          <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-surface">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted/40 text-[13px] font-medium tracking-widest uppercase">
                Video / Image
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
