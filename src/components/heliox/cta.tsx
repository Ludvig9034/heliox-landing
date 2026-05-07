"use client";

import { useEffect, useRef } from "react";

function useReveal(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.transitionDelay = `${el.dataset.delay ?? "0"}ms`;
            el.classList.add("is-revealed");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [rootRef]);
}

export function HelioxCta() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="c-cta"
      data-screen-label="05 CTA"
    >
      <div className="c-cta-inner">
        <h2 data-reveal>
          Sælg mere
          <br />
          på <em>mindre</em> tid.
        </h2>
        <div className="c-cta-actions" data-reveal data-delay="120">
          <a href="#" className="c-btn c-btn-orange c-btn-lg">
            Book demo
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" />
            </svg>
          </a>
          <a href="#produkt" className="c-link-arrow c-link-arrow-light">
            Se Heliox i jeres CRM
          </a>
        </div>
      </div>
    </section>
  );
}
