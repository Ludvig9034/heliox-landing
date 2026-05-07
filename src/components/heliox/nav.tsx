"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";

export function HelioxNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`c-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="c-nav-inner">
        <a href="#" className="c-logo" aria-label="Heliox">
          <Wordmark size={28} />
        </a>
        <div className="c-nav-links">
          <a href="#problem">Problemet</a>
          <a href="#produkt">Produkt</a>
          <a href="#heliox-er">Heliox er</a>
        </div>
        <div className="c-nav-right">
          <a href="#" className="c-link-soft">Log ind</a>
          <a href="#kontakt" className="c-btn c-btn-primary">Book demo</a>
        </div>
      </div>
    </nav>
  );
}
