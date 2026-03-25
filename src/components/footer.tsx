import { LogoLoop } from "./logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <LogoLoop size={20} className="text-heading" />
          <span className="text-heading text-[14px] font-semibold tracking-[-0.02em]">
            company
          </span>
        </div>
        <p className="text-muted text-[13px]">
          © {new Date().getFullYear()} Lorem ipsum. Dolor sit amet.
        </p>
      </div>
    </footer>
  );
}
