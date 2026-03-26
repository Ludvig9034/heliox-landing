import { FadeIn } from "./fade-in";
import { Button } from "./ui/button";

export function Process() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="rounded-2xl bg-surface border border-border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Visual placeholder */}
              <div className="aspect-[4/3] md:aspect-auto bg-heading/[0.03] flex items-center justify-center min-h-[320px] md:min-h-0">
                <p className="text-muted/25 text-[13px] font-medium tracking-widest uppercase">
                  Video / Image
                </p>
              </div>

              {/* Text content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
                  Lorem ipsum
                </p>
                <h2 className="text-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.035em]">
                  Dolor sit amet consectetur
                </h2>
                <p className="mt-4 text-muted text-[15px] leading-[1.7]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>

                <div className="mt-8">
                  <Button href="#contact">Lorem ipsum</Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
