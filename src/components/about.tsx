import { FadeIn } from "./fade-in";

export function About() {
  const team = [
    { name: "Lorem Ipsum", role: "Dolor sit amet" },
    { name: "Consectetur Elit", role: "Sed do eiusmod" },
    { name: "Tempor Incididunt", role: "Ut labore dolore" },
    { name: "Adipiscing Sed", role: "Magna aliqua" },
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
          {/* Left: about text */}
          <FadeIn>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
              Lorem ipsum
            </p>
            <h2 className="text-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              Dolor sit amet elit
            </h2>
            <p className="mt-6 text-muted text-[15px] leading-[1.7]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
          </FadeIn>

          {/* Right: team */}
          <FadeIn stagger>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="fade-in group flex items-center gap-4 cursor-default"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-surface border border-border
                                  group-hover:border-heading/20 group-hover:scale-105
                                  transition-all duration-300 ease-out" />
                  <div>
                    <p className="text-[15px] font-semibold text-heading">
                      {person.name}
                    </p>
                    <p className="text-[13px] text-muted group-hover:text-heading/60 transition-colors duration-200">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
