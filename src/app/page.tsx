import { HelioxNav } from "@/components/heliox/nav";
import { HelioxHero } from "@/components/heliox/hero";
import { HelioxProblem } from "@/components/heliox/problem";
import { HelioxTabs } from "@/components/heliox/tabs";
import { HelioxStatement } from "@/components/heliox/statement";
import { HelioxCta } from "@/components/heliox/cta";
import { HelioxFooter } from "@/components/heliox/footer";

export default function Home() {
  return (
    <div className="heliox">
      <HelioxNav />
      <main>
        <HelioxHero />
        <HelioxProblem />
        <HelioxTabs />
        <HelioxStatement />
        <HelioxCta />
      </main>
      <HelioxFooter />
    </div>
  );
}
