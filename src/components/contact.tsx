import { FadeIn } from "./fade-in";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 lg:px-10 py-16 md:py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl rounded-2xl bg-heading px-8 py-20 md:px-16 md:py-28 text-center">
          <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
            Lorem ipsum
          </p>
          <h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em] max-w-2xl mx-auto">
            Dolor sit amet consectetur adipiscing
          </h2>
          <p className="mt-5 text-white/50 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.7] max-w-lg mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <a
            href="mailto:hello@example.com"
            className={cn(
              `relative z-0 mt-10 inline-flex items-center justify-center h-12 px-8
               text-[14px] font-medium tracking-wide rounded-full cursor-pointer
               bg-white text-heading overflow-hidden
               transition-all duration-500
               before:absolute before:inset-0 before:-z-10
               before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
               before:rounded-[100%] before:bg-heading/10 before:transition-transform before:duration-700 before:content-[""]
               hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]
               hover:before:translate-x-[0%] hover:before:translate-y-[0%]
               active:scale-[0.97]
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`
            )}
          >
            <span className="relative z-10">Lorem ipsum →</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
