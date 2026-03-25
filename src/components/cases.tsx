export function Cases() {
  const cases = [
    {
      tag: "Lorem ipsum",
      title: "Dolor sit amet consectetur",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      tag: "Adipiscing elit",
      title: "Sed do eiusmod tempor incididunt",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section id="cases" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
          Lorem ipsum
        </p>
        <h2 className="text-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] max-w-lg">
          Dolor sit amet consectetur
        </h2>

        {/* Cases */}
        <div className="mt-14 md:mt-20 flex flex-col gap-20 md:gap-28">
          {cases.map((item, index) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted/30 text-[13px] font-medium tracking-widest uppercase">
                      Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted mb-3">
                  {item.tag}
                </p>
                <h3 className="text-heading text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-muted text-[15px] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
