import { Wordmark } from "./wordmark";

export function HelioxFooter() {
  return (
    <footer className="c-foot">
      <div className="c-foot-inner">
        <Wordmark size={20} />
        <span className="c-foot-meta">© 2026 · Heliox</span>
      </div>
    </footer>
  );
}
