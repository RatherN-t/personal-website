import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { RoadDividerScene } from "@/components/sections/road-divider-scene";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProofStrip />
        <Experience />
        <Projects />
        <RoadDividerScene />
      </main>
      <Footer />
    </>
  );
}
