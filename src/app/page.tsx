import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tracks } from "@/components/Tracks";
import { Schedule } from "@/components/Schedule";
import { Sponsors } from "@/components/Sponsors";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Sponsors />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
