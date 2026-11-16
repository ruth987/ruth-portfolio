import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Section } from "@/components/ui/Section";

const built = new Set(["work", "experience"]);

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
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
