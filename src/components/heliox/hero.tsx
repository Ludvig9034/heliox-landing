"use client";

import { useEffect, useRef, useState } from "react";

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
    const fallback = setTimeout(() => {
      root.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((t) => {
        const rect = t.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
          (t as HTMLElement).classList.add("is-revealed");
      });
    }, 1500);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [rootRef]);
}

function HeroVideoThumb({ ratio = "16/9" }: { ratio?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", ((py - 0.5) * -6).toFixed(2));
    el.style.setProperty("--ry", ((px - 0.5) * 8).toFixed(2));
    el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0");
    el.style.setProperty("--ry", "0");
    setHovered(false);
  };

  return (
    <div
      ref={wrapRef}
      className={`c-video${hovered ? " is-hovered" : ""}`}
      data-cursor="Se video"
      style={{ aspectRatio: ratio }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      <div className="c-video-frame">
        <div className="c-video-bg" />
        <div className="c-video-glow" />
        <div className="c-video-grid" />
        <div className="c-video-mock">
          <div className="c-video-mock-bar">
            <span /><span /><span />
            <em>heliox · workspace</em>
          </div>
          <div className="c-video-mock-body">
            <div className="c-video-mock-side">
              <span className="c-video-mock-row c-video-mock-row-active" />
              <span className="c-video-mock-row" />
              <span className="c-video-mock-row" />
              <span className="c-video-mock-row" />
            </div>
            <div className="c-video-mock-main">
              <div className="c-video-mock-h" />
              <div className="c-video-mock-card">
                <div className="c-video-mock-kpi">
                  <span>Pipeline</span>
                  <strong>2.4M</strong>
                </div>
                <div className="c-video-mock-bar2"><i /></div>
                <div className="c-video-mock-bar2"><i style={{ width: "62%" }} /></div>
                <div className="c-video-mock-bar2"><i style={{ width: "38%" }} /></div>
              </div>
              <div className="c-video-mock-tags">
                <span>pain · budget</span>
                <span>urgency · høj</span>
                <span>outcome · skalering</span>
              </div>
            </div>
          </div>
        </div>
        <button className="c-video-play" aria-label="Afspil video">
          <span className="c-video-play-ring" />
          <span className="c-video-play-ring c-video-play-ring-2" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" />
          </svg>
        </button>
        <div className="c-video-meta">
          <span className="c-video-dot" />
          <span>Se Heliox i 90 sek.</span>
          <span className="c-video-dur">0:90</span>
        </div>
      </div>
    </div>
  );
}

export function HelioxHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useReveal(sectionRef);

  // Mouse parallax on hero stage
  useEffect(() => {
    const hero = sectionRef.current;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      targetRef.current = {
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      };
    };
    const onLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };
    const tick = () => {
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.05;
      const stage = hero.querySelector(".c-hero-stage") as HTMLElement | null;
      if (stage) {
        stage.style.setProperty("--mx", String(mouseRef.current.x));
        stage.style.setProperty("--my", String(mouseRef.current.y));
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Custom cursor — orange dot + soft trailing ring
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = document.createElement("div");
    dot.className = "c-cursor c-cursor-dot";
    const ring = document.createElement("div");
    ring.className = "c-cursor c-cursor-ring";
    const label = document.createElement("span");
    label.className = "c-cursor-label";
    ring.appendChild(label);
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.documentElement.classList.add("has-c-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const interactiveSel = "a, button, [data-cursor]";
    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element).closest(interactiveSel);
      if (!t) return;
      ring.classList.add("is-hover");
      dot.classList.add("is-hover");
      const cursorLabel = (t as HTMLElement).dataset.cursor;
      if (cursorLabel) {
        label.textContent = cursorLabel;
        ring.classList.add("has-label");
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = (e.target as Element).closest(interactiveSel);
      if (!t) return;
      ring.classList.remove("is-hover", "has-label");
      dot.classList.remove("is-hover");
      label.textContent = "";
    };
    const onDown = () => {
      dot.classList.add("is-down");
      ring.classList.add("is-down");
    };
    const onUp = () => {
      dot.classList.remove("is-down");
      ring.classList.remove("is-down");
    };
    const onLeaveWindow = () => {
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
    };
    const onEnterWindow = () => {
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      dot.remove();
      ring.remove();
      document.documentElement.classList.remove("has-c-cursor");
    };
  }, []);

  return (
    <section ref={sectionRef} className="c-hero" data-screen-label="01 Hero">
      <div className="c-hero-meta" data-reveal>
        <span className="c-hero-meta-line" />
        <span>Heliox · Intelligens-lag til CRM</span>
      </div>

      <h1 className="c-hero-h1" data-reveal data-delay="60">
        <span className="c-hero-line">Sælg mere</span>
        <span className="c-hero-line">
          på <em>mindre</em> tid.
        </span>
      </h1>

      <p className="c-hero-sub" data-reveal data-delay="140">
        Heliox samler din hårde data og de bløde signaler i ét værktøj og gør
        dem til konkrete handlinger direkte i jeres CRM.
      </p>

      <p className="c-hero-promise" data-reveal data-delay="200">
        <span>Mindre administration.</span>
        <span>Mere salg.</span>
        <span>Fra dag 1.</span>
      </p>

      <div className="c-hero-cta" data-reveal data-delay="260">
        <a href="#kontakt" className="c-btn c-btn-primary c-btn-lg">
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
        <a href="#produkt" className="c-link-arrow">
          Se Heliox i jeres CRM
        </a>
      </div>

      <div className="c-hero-stage" data-reveal data-delay="340">
        <HeroVideoThumb ratio="16/9" />
      </div>
    </section>
  );
}
