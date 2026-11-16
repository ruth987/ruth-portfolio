import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" index="05" title="About">
      <div className="max-w-[60ch] space-y-5 text-lg text-ink/85 md:text-xl md:leading-relaxed">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
