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
    return () => io.disconnect();
  }, [rootRef]);
}

function TabGlyph({ n }: { n: 1 | 2 | 3 }) {
  const paths: Record<number, React.ReactNode> = {
    1: <path d="M14 8 L20 6 L20 32" />,
    2: <path d="M10 12 C 10 6, 22 4, 24 12 C 24 18, 10 24, 10 32 L24 32" />,
    3: <path d="M10 8 C 22 4, 26 14, 18 18 C 28 20, 24 34, 10 30" />,
  };
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[n]}
      <circle cx="28" cy="32" r="1.4" fill="var(--c-orange)" stroke="none" />
    </svg>
  );
}

function TabVisual1({ active }: { active: boolean }) {
  return (
    <div className={`c-tab-visual tv tv-1${active ? " is-active" : ""}`}>
      <div className="tv-pane tv-pane-hard">
        <div className="tv-pane-h">
          <span className="c-ph-dot" /> Hård data
        </div>
        <div className="tv-row">
          <span>Calls</span>
          <span className="tv-num">142</span>
        </div>
        <div className="tv-row">
          <span>Mails</span>
          <span className="tv-num">309</span>
        </div>
        <div className="tv-row">
          <span>Pipeline</span>
          <span className="tv-num">2.4M</span>
        </div>
        <div className="tv-bar">
          <span style={{ width: "64%" }} />
        </div>
        <div className="tv-bar">
          <span style={{ width: "82%" }} />
        </div>
      </div>
      <div className="tv-pane tv-pane-soft">
        <div className="tv-pane-h">
          <span className="c-ph-dot" /> Bløde signaler
        </div>
        <div className="tv-quote">&ldquo;Vi mangler kapacitet i Q3.&rdquo;</div>
        <div className="tv-tag">pain · budget</div>
        <div className="tv-tag">urgency · høj</div>
        <div className="tv-tag">outcome · skalering</div>
      </div>
      <div className="tv-bridge" aria-hidden="true" />
    </div>
  );
}

function TabVisual2({ active }: { active: boolean }) {
  return (
    <div className={`c-tab-visual tv tv-2${active ? " is-active" : ""}`}>
      <div className="tv-crm">
        <div className="tv-crm-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="tv-crm-row">
          <span className="tv-avatar" />
          Mette Holm — Nordlys
        </div>
        <div className="tv-crm-row tv-crm-row-mute">
          <span className="tv-avatar" />
          Jonas Kraft — Fjord/Lab
        </div>
        <div className="tv-crm-row tv-crm-row-mute">
          <span className="tv-avatar" />
          Liv Sand — Strøm
        </div>
      </div>
      <div className="tv-prompt">
        <div className="tv-prompt-h">Heliox · næste handling</div>
        <div className="tv-prompt-t">Ring Mette i dag · pain er budget</div>
        <div className="tv-prompt-cta">Åbn deal →</div>
      </div>
    </div>
  );
}

function TabVisual3({ active }: { active: boolean }) {
  return (
    <div className={`c-tab-visual tv tv-3${active ? " is-active" : ""}`}>
      <div className="tv-axis">
        <span>Uge 1</span>
        <span>Uge 6</span>
        <span>Uge 12</span>
        <span>Uge 24</span>
      </div>
      <svg
        className="tv-curve"
        viewBox="0 0 300 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,140 C40,138 80,130 120,110 S200,40 300,20"
          fill="none"
          stroke="var(--c-orange)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="100"
          className="tv-curve-line"
        />
        <path
          d="M0,140 C40,138 80,130 120,110 S200,40 300,20 L300,160 L0,160 Z"
          fill="var(--c-orange)"
          opacity="0.08"
        />
        <circle cx="120" cy="110" r="3" fill="var(--c-orange)" />
        <circle cx="220" cy="55" r="3" fill="var(--c-orange)" />
        <circle cx="300" cy="20" r="4" fill="var(--c-orange)" />
      </svg>
      <div className="tv-chips">
        <span className="tv-chip">+ vunden deal</span>
        <span className="tv-chip">+ tabt deal</span>
        <span className="tv-chip tv-chip-on">model · v1.4</span>
      </div>
    </div>
  );
}

const tabs = [
  {
    title: "Hård data og bløde signaler — endelig samlet.",
    desc: "Heliox fanger både dine hårde KPI'er — calls, mails, pipeline — og det andre overser: kundens pain, urgency, ønskede outcome, og deres egne ord direkte fra mødet. For første gang ser du det, der reelt afgør et salg, ét sted.",
  },
  {
    title: "Direkte i jeres nuværende CRM. Ikke endnu et system.",
    desc: "Heliox kobler sig på jeres eksisterende CRM. Ingen migrering, ingen ny platform at lære. Sælgerne ser anbefalingerne lige der, hvor de allerede arbejder — næste handling, næste prioritet, næste deal at lukke.",
  },
  {
    title: "Bliver skarpere for hver deal, du lukker.",
    desc: "Heliox lærer af hvert opkald, hver vunden deal, hver tabt mulighed. Systemet bliver bedre for hver dag — og bliver til sidst en model, der forstår jeres salg specifikt. Ikke en generisk AI.",
  },
];

export function HelioxTabs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="produkt"
      className="c-tabs-sec"
      data-screen-label="03 Produkt"
    >
      <div className="c-section-head">
        <span className="c-kicker" data-reveal>
          03 — Sælg mere
        </span>
        <h2 className="c-h2" data-reveal data-delay="60">
          Sælg mere. Bedre. Smartere.
        </h2>
      </div>

      <div className="c-tabs">
        <div className="c-tabs-left">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`c-tab${activeTab === i ? " is-active" : ""}`}
              onClick={() => setActiveTab(i)}
              aria-pressed={activeTab === i}
            >
              <span className="c-tab-glyph">
                <TabGlyph n={(i + 1) as 1 | 2 | 3} />
              </span>
              <div className="c-tab-body">
                <h3>{tab.title}</h3>
                <div className="c-tab-desc">
                  <p>{tab.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="c-tabs-right">
          <div className="c-tab-stage">
            <TabVisual1 active={activeTab === 0} />
            <TabVisual2 active={activeTab === 1} />
            <TabVisual3 active={activeTab === 2} />
          </div>
        </div>
      </div>
    </section>
  );
}
