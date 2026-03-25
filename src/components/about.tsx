import { FadeIn } from "./fade-in";
import { Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const team = [
  {
    name: "Lorem Ipsum",
    role: "Dolor sit amet",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    name: "Consectetur Elit",
    role: "Sed do eiusmod",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    name: "Tempor Incididunt",
    role: "Ut labore dolore",
    bio: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
  },
  {
    name: "Adipiscing Sed",
    role: "Magna aliqua",
    bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header row */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div>
              <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
                Lorem ipsum
              </p>
              <h2 className="text-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] max-w-lg">
                Dolor sit amet consectetur
              </h2>
              <p className="mt-4 text-muted text-[15px] leading-[1.7] max-w-lg">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {team.map((person, i) => (
            <FadeIn key={person.name} className={`[transition-delay:${i * 100}ms]`}>
              <div className="group">
                {/* Portrait placeholder */}
                <div className="aspect-[3/4] rounded-xl bg-surface overflow-hidden mb-5">
                  <div className="w-full h-full flex items-center justify-center
                                  group-hover:scale-[1.03] transition-transform duration-500 ease-out">
                    <p className="text-muted/30 text-[12px] font-medium tracking-widest uppercase">
                      Photo
                    </p>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-heading text-[16px] font-semibold tracking-[-0.02em]">
                  {person.name}
                </h3>
                <p className="mt-0.5 text-muted text-[13px] font-medium">
                  {person.role}
                </p>
                <p className="mt-2 text-muted/70 text-[13px] leading-[1.6]">
                  {person.bio}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="#"
                    className="text-muted/40 hover:text-heading transition-colors duration-200"
                    aria-label={`${person.name} LinkedIn`}
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted/40 hover:text-heading transition-colors duration-200"
                    aria-label={`${person.name} Email`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
