import { LogoFlow, LogoConnect, LogoConverge, LogoLoop } from "@/components/logo";

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="grid grid-cols-2 gap-20">
        {[
          { name: "Flow", Logo: LogoFlow },
          { name: "Connect", Logo: LogoConnect },
          { name: "Converge", Logo: LogoConverge },
          { name: "Loop", Logo: LogoLoop },
        ].map(({ name, Logo }) => (
          <div key={name} className="flex flex-col items-center gap-6">
            {/* Dark background */}
            <div className="w-40 h-40 rounded-2xl bg-heading flex items-center justify-center">
              <Logo size={64} className="text-white" />
            </div>
            {/* Light background */}
            <div className="w-40 h-40 rounded-2xl bg-surface border border-border flex items-center justify-center">
              <Logo size={64} className="text-heading" />
            </div>
            <p className="text-[14px] font-medium text-muted">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
