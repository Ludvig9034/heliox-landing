import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Cases } from "@/components/cases";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cases />
        <Process />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
