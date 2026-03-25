import { FadeIn } from "./fade-in";

const steps = [
  {
    number: "01",
    title: "Lorem ipsum",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    number: "02",
    title: "Dolor sit amet",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    number: "03",
    title: "Consectetur elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
            Lorem ipsum
          </p>
          <h2 className="text-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] max-w-md">
            Dolor sit amet consectetur
          </h2>
        </FadeIn>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <FadeIn key={step.number} className={`[transition-delay:${i * 120}ms]`}>
              <div className="relative pl-8 md:pl-0">
                {/* Vertical line on mobile */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border md:hidden" />
                )}

                {/* Horizontal line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[11px] left-[24px] right-0 h-px bg-border" />
                )}

                <div className="relative pb-14 md:pb-0 md:pr-12">
                  {/* Number dot */}
                  <div className="absolute left-[-20px] md:static flex items-center gap-4 mb-5">
                    <div className="w-6 h-6 rounded-full bg-heading flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-semibold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-heading text-[18px] font-semibold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
