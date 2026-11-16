import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Placeholders: replaced one section at a time in stage 3. */}
      {site.nav.map((item, i) => (
        <Section key={item.id} id={item.id} index={String(i + 1).padStart(2, "0")} title={item.label}>
          <p className="text-muted">Coming in stage 3.</p>
        </Section>
      ))}
    </>
  );
}
