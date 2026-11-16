import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Teaching } from "@/components/sections/Teaching";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Projects />
      <Teaching />
      <About />
      <Contact />
    </>
  );
}
