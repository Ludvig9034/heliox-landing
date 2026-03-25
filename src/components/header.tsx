"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:px-6">
      <div
        className="w-full max-w-5xl rounded-2xl
                    bg-white/40 backdrop-blur-2xl backdrop-saturate-150
                    border border-white/50
                    shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]"
      >
        <div className="px-5 md:px-6">
          <div className="flex h-12 items-center justify-between">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-heading flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">A</span>
              </div>
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
                  className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-heading/45 tracking-wide
                             hover:text-heading hover:bg-white/50
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                             transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center h-8 px-4 text-[12px] font-medium tracking-wide
                           bg-heading/90 text-white rounded-full
                           hover:bg-heading hover:scale-[1.03] active:scale-[0.97]
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                           transition-all duration-200 ease-out"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[4px] rounded-lg
                         hover:bg-white/50 transition-colors duration-200
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
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            mobileOpen ? "max-h-72" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/30 mx-4" />
          <nav className="flex flex-col px-4 pb-4 pt-2 gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded-lg text-[14px] font-medium text-heading/45
                           hover:text-heading hover:bg-white/40 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-9 px-5 text-[13px] font-medium tracking-wide
                         bg-heading/90 text-white rounded-full
                         hover:bg-heading transition-colors duration-200"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
