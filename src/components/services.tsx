"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { Button } from "./ui/button";

const categories = [
  {
    tab: "Lorem",
    title: "Dolor sit amet,\nconsectetur",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    features: [
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Quis nostrud exercitation ullamco",
    ],
    cards: [
      "Adipiscing elit sed do eiusmod",
      "Tempor incididunt ut labore",
      "Dolore magna aliqua ut enim",
      "Veniam quis nostrud exercitation",
    ],
  },
  {
    tab: "Ipsum",
    title: "Adipiscing elit\nsed do eiusmod",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    features: [
      "Excepteur sint occaecat cupidatat",
      "Non proident sunt in culpa",
      "Mollit anim id est laborum",
    ],
    cards: [
      "Consectetur adipiscing elit tempor",
      "Incididunt ut labore et dolore",
      "Magna aliqua ut enim ad minim",
      "Veniam quis nostrud exercitation",
    ],
  },
  {
    tab: "Dolor",
    title: "Tempor incididunt\nut labore",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    cards: [
      "Ut labore et dolore magna aliqua",
      "Enim ad minim veniam nostrud",
      "Exercitation ullamco laboris nisi",
      "Aliquip ex ea commodo consequat",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered header */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-heading text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-4 text-muted text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.7]">
              Consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </FadeIn>

        {/* Pill tabs */}
        <FadeIn>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat.tab}
                type="button"
                onClick={() => setActive(i)}
                className={`h-10 px-5 rounded-full text-[14px] font-medium tracking-wide
                           transition-all duration-200 ease-out
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                           ${
                             i === active
                               ? "bg-heading text-white scale-[1.02]"
                               : "border border-border text-muted hover:text-heading hover:border-heading/30 hover:scale-[1.02] active:scale-[0.98]"
                           }`}
              >
                {cat.tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content card */}
        <FadeIn>
          <div className="mt-12 rounded-2xl bg-surface border border-border p-8 md:p-12
                          transition-all duration-300 ease-out">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left: text */}
              <div>
                <h3 className="text-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] whitespace-pre-line">
                  {current.title}
                </h3>
                <p className="mt-5 text-muted text-[15px] leading-[1.7]">
                  {current.description}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {current.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-[14px] text-muted leading-[1.6]"
                    >
                      <span className="mt-1 block w-4 h-4 flex-shrink-0 rounded-full border-2 border-heading/20" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: feature cards */}
              <div className="flex flex-col gap-3">
                {current.cards.map((card) => (
                  <div
                    key={card}
                    className="group flex items-center gap-4 rounded-xl bg-white border border-border px-5 py-4
                               hover:border-heading/15 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                               transition-all duration-200 ease-out cursor-default"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-surface border border-border
                                    group-hover:border-heading/15 transition-colors duration-200" />
                    <p className="text-[14px] font-medium text-heading leading-[1.4]">
                      {card}
                    </p>
                  </div>
                ))}

                <Button href="#contact" className="mt-3 self-start">
                  Lorem ipsum →
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
