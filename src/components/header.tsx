"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogoLoop } from "./logo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
];

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="header-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03 0.03"
            numOctaves="1"
            seed="2"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="3" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="6" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative w-full">
        {/* Glass distortion layer */}
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden -z-10"
          style={{ backdropFilter: 'url("#header-glass")' }}
        />

        {/* Glass shadow overlay */}
        <div
          className="absolute top-0 left-0 z-0 h-full w-full
                     shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_8px_rgba(0,0,0,0.06),inset_0_-1px_1px_-0.5px_rgba(0,0,0,0.3),inset_0_0_8px_6px_rgba(0,0,0,0.06)]"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <LogoLoop size={24} className="text-heading" />
              <span className="text-heading text-[14px] font-semibold tracking-[-0.02em]">
                company
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-heading/60 tracking-wide
                             hover:text-heading hover:bg-white/30
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                             transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Button href="#contact" size="sm">
                Get in touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[4px] rounded-lg
                         hover:bg-white/30 transition-colors duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-[1.5px] w-4 bg-heading transition-transform duration-300 origin-center ${
                  mobileOpen ? "translate-y-[2.75px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-heading transition-transform duration-300 origin-center ${
                  mobileOpen ? "-translate-y-[2.75px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`relative z-10 md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            mobileOpen ? "max-h-72" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/20 mx-4" />
          <nav className="flex flex-col px-4 pb-4 pt-2 gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded-lg text-[14px] font-medium text-heading/60
                           hover:text-heading hover:bg-white/30 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 w-full justify-center"
              size="sm"
            >
              Get in touch
            </Button>
          </nav>
        </div>

        <GlassFilter />
      </div>
    </header>
  );
}
