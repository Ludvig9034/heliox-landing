"use client";

import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function FadeIn({ children, className = "", stagger = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mark container visible
          el.classList.add("visible");

          // Mark staggered children visible
          if (stagger) {
            el.querySelectorAll(".fade-in").forEach((child) => {
              child.classList.add("visible");
            });
          }

          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`fade-in ${stagger ? "stagger" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
