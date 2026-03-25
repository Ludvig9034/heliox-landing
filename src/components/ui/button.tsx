import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        `group relative z-0 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full
         font-medium tracking-wide cursor-pointer
         transition-all duration-500
         before:absolute before:inset-0 before:-z-10
         before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
         before:rounded-[100%] before:transition-transform before:duration-700 before:content-[""]
         hover:scale-[1.03] hover:before:translate-x-[0%] hover:before:translate-y-[0%]
         active:scale-[0.97]
         focus-visible:outline-2 focus-visible:outline-offset-2`,
        variant === "primary" &&
          `bg-gradient-to-b from-heading to-heading/85 text-white
           border border-b-2 border-white/[0.08]
           ring-1 ring-inset ring-white/15
           shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_3px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.15)]
           before:bg-white/15 focus-visible:outline-heading
           animate-[glow_3s_ease-in-out_infinite]
           hover:brightness-110 active:brightness-90`,
        variant === "secondary" &&
          `bg-gradient-to-b from-white to-white/85 text-heading
           border border-b-2 border-heading/[0.06]
           ring-1 ring-inset ring-heading/[0.04]
           shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]
           before:bg-heading/[0.04] focus-visible:outline-heading
           hover:brightness-[0.97] active:brightness-95`,
        size === "sm" && "h-8 px-4 text-[12px]",
        size === "md" && "h-11 px-6 text-[14px]",
        size === "lg" && "h-12 px-8 text-[14px]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
