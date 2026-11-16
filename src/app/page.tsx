import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Teaching } from "@/components/sections/Teaching";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Section } from "@/components/ui/Section";

const built = new Set(["work", "experience", "projects", "teaching"]);

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Projects />
      <Teaching />
      {/* Placeholders: replaced one section at a time in stage 3. */}
      {site.nav.map((item, i) =>
        built.has(item.id) ? null : (
          <Section key={item.id} id={item.id} index={String(i + 1).padStart(2, "0")} title={item.label}>
            <p className="text-muted">Coming in stage 3.</p>
          </Section>
        ),
      )}
    </>
  );
}
