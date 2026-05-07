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

function IconAdmin() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 6 L34 6 L34 12 C34 18, 24 22, 24 24 C24 26, 34 30, 34 36 L34 42 L14 42 L14 36 C14 30, 24 26, 24 24 C24 22, 14 18, 14 12 Z" />
      <path d="M18 9 L30 9" />
      <circle cx="24" cy="14" r="0.8" fill="currentColor" />
      <circle cx="22" cy="16.5" r="0.8" fill="currentColor" />
      <circle cx="26" cy="16.5" r="0.8" fill="currentColor" />
      <circle cx="24" cy="34" r="0.8" fill="currentColor" />
      <path d="M19 39 L29 39" stroke="var(--c-orange)" strokeWidth="1.6" />
    </svg>
  );
}

function IconKpi() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 38 L14 38 L14 30 L22 30 L22 22 L30 22 L30 14" />
      <path d="M30 14 L40 6" stroke="var(--c-orange)" strokeWidth="1.6" />
      <path d="M37 6 L40 6 L40 9" stroke="var(--c-orange)" strokeWidth="1.6" />
      <circle cx="6" cy="38" r="1.2" fill="currentColor" />
      <path d="M6 42 L42 42" strokeDasharray="1 3" opacity="0.5" />
    </svg>
  );
}

function IconSignal() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 10 L40 10 L40 30 L22 30 L14 38 L14 30 L8 30 Z" />
      <path
        d="M14 18 C 18 16, 22 22, 26 20 C 30 18, 34 22, 38 20"
        stroke="var(--c-orange)"
        strokeWidth="1.6"
      />
      <circle cx="14" cy="18" r="0.9" fill="var(--c-orange)" />
      <circle cx="38" cy="20" r="0.9" fill="var(--c-orange)" />
    </svg>
  );
}

const problems = [
  {
    Icon: IconAdmin,
    title: "Tiden forsvinder i administration.",
    desc: "Du sætter 5 timer af til salg. CRM-opdateringer og opfølgningsmails sluger 3 af dem. Resten er afbrydelser. Du er reelt fokuseret en brøkdel af tiden — og det kan dine kunder mærke.",
  },
  {
    Icon: IconKpi,
    title: "KPI'erne flytter sig hurtigere, end du kan løbe.",
    desc: "Målene er ambitiøse — som de skal være. Men jo flere opgaver der ligger mellem linjerne, jo længere væk fra dem kommer du. Resultatet: KPI'erne bliver ikke ramt, og CAC kører løbsk.",
  },
  {
    Icon: IconSignal,
    title: "Du overser det, der lukker dine deals.",
    desc: "Du måler det samme som alle andre — calls, mails, møder. Men det er ikke det, der afgør salget. Det gør kundens pain, urgency, ønskede outcome — og deres egne ord fra mødet. De signaler sidder du med hver dag, uden at se dem. Og det er der, du taber salg, du burde have lukket.",
  },
];

export function HelioxProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="c-problem"
      data-screen-label="02 Problem"
    >
      <div className="c-section-head">
        <span className="c-kicker" data-reveal>
          02 — Problemet
        </span>
        <h2 className="c-h2" data-reveal data-delay="60">
          Problemet alle sælgere kender.
        </h2>
      </div>
      <div className="c-problem-grid">
        {problems.map((p, i) => (
          <article
            key={i}
            className="c-prob-card"
            data-reveal
            data-delay={String(i * 100)}
          >
            <div className="c-prob-ico">
              <p.Icon />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
