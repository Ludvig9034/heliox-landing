"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="text-heading text-[15px] font-semibold tracking-[-0.035em] uppercase"
          >
            [Company]
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-muted tracking-wide uppercase
                           hover:text-heading focus-visible:text-heading
                           transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center h-9 px-5 text-[13px] font-medium tracking-wide
                         bg-heading text-white rounded-full
                         hover:bg-heading/85 active:bg-heading/75
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading
                         transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading rounded"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-heading transition-transform duration-300 origin-center ${
                mobileOpen ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-heading transition-transform duration-300 origin-center ${
                mobileOpen ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-[14px] font-medium text-muted tracking-wide
                         hover:text-heading transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center justify-center h-10 px-5 text-[13px] font-medium tracking-wide
                       bg-heading text-white rounded-full
                       hover:bg-heading/85 active:bg-heading/75
                       transition-colors duration-200"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
