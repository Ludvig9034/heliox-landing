import { cn } from "@/lib/utils";

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
        `relative z-0 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full
         font-medium tracking-wide cursor-pointer
         transition-all duration-500
         before:absolute before:inset-0 before:-z-10
         before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
         before:rounded-[100%] before:transition-transform before:duration-700 before:content-[""]
         hover:scale-[1.03] hover:before:translate-x-[0%] hover:before:translate-y-[0%]
         active:scale-[0.97]
         focus-visible:outline-2 focus-visible:outline-offset-2`,
        variant === "primary" &&
          "bg-heading text-white before:bg-white/20 focus-visible:outline-heading",
        variant === "secondary" &&
          "border border-border text-heading before:bg-heading/[0.06] focus-visible:outline-heading",
        size === "sm" && "h-8 px-4 text-[12px]",
        size === "md" && "h-11 px-6 text-[14px]",
        size === "lg" && "h-12 px-8 text-[14px]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
