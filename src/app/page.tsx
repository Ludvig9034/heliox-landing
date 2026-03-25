import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Cases } from "@/components/cases";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cases />
      </main>
    </>
  );
}
