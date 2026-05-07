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

export function HelioxStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="heliox-er"
      className="c-statement"
      data-screen-label="04 Heliox er"
    >
      <span className="c-kicker" data-reveal>
        04 — Heliox er…
      </span>
      <h2 className="c-statement-h" data-reveal data-delay="80">
        Et intelligens-lag,
        <br />
        der får jeres CRM
        <br />
        til <em>endelig</em> at sælge.
      </h2>
      <ul className="c-strike-list" data-reveal data-delay="200">
        <li>Et CRM-system</li>
        <li>En AI-assistent</li>
        <li>Et Hubspot-partnerprogram</li>
      </ul>
    </section>
  );
}
