import { FadeIn } from "./fade-in";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Dolor sit amet,\nconsectetur",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    features: [
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Quis nostrud exercitation ullamco",
    ],
  },
  {
    title: "Adipiscing elit\nsed do eiusmod",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    features: [
      "Excepteur sint occaecat cupidatat",
      "Non proident sunt in culpa",
      "Mollit anim id est laborum",
    ],
  },
  {
    title: "Tempor incididunt\nut labore",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
            Lorem ipsum
          </p>
          <h2 className="text-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] max-w-lg">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 text-muted text-[15px] leading-[1.7] max-w-lg">
            Consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </FadeIn>

        {/* Service cards grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.title} className={`[transition-delay:${i * 100}ms]`}>
              <div className="group relative flex flex-col rounded-2xl border border-border bg-white p-8 md:p-9
                              hover:border-heading/15 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                              transition-[border-color,box-shadow] duration-300 ease-out h-full">
                {/* Icon placeholder */}
                <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center mb-6
                                group-hover:border-heading/15 transition-colors duration-300">
                  <div className="w-5 h-5 rounded-md bg-heading/[0.08]" />
                </div>

                {/* Title */}
                <h3 className="text-heading text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] whitespace-pre-line">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-muted text-[14px] leading-[1.7]">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="mt-5 flex flex-col gap-2 mb-8">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-[13px] text-muted/80 leading-[1.5]"
                    >
                      <span className="mt-[5px] block w-1.5 h-1.5 flex-shrink-0 rounded-full bg-heading/20" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* More details link */}
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-heading
                             group-hover:gap-2.5 transition-[gap] duration-300"
                >
                  Lorem ipsum
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="mt-12 text-center">
            <Button href="#contact">Lorem ipsum</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
