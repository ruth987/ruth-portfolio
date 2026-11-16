import { site } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SmartLink } from "@/components/ui/SmartLink";
import { TagList } from "@/components/ui/Tag";

/*
 * TEMPORARY design-system specimen (stage 2). Replaced section by section
 * in stage 3.
 */
const swatches = [
  { name: "bg", className: "bg-bg" },
  { name: "surface", className: "bg-surface" },
  { name: "rule", className: "bg-rule" },
  { name: "muted", className: "bg-muted" },
  { name: "ink", className: "bg-ink" },
  { name: "accent", className: "bg-accent" },
];

export default function Home() {
  const { cta } = site.hero;
  return (
    <>
      <Container className="py-24 md:py-36">
        <p className="eyebrow animate-rise">
          {site.role} · {site.location}
        </p>
        <h1 className="animate-rise mt-6 max-w-[18ch] text-display [animation-delay:80ms]">
          {site.hero.headline}
        </h1>
        <p className="animate-rise mt-6 max-w-[48ch] text-xl text-muted [animation-delay:160ms]">
          {site.hero.subline}
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
          <ButtonLink link={cta.cv} variant="primary" download />
          <ButtonLink link={cta.linkedin} />
          <ButtonLink link={cta.github} />
          <ButtonLink link={cta.email} />
        </div>
        <div className="mt-8">
          <Badge>{site.openToWorkLabel}</Badge>
          <span className="ml-3 text-sm text-muted">(badge preview; hidden while openToWork is false)</span>
        </div>
      </Container>

      <Section id="work" index="01" title="Typography">
        <div className="space-y-8">
          <div>
            <p className="eyebrow">Display · Fraunces</p>
            <p className="mt-2 font-display text-display">Reliable systems</p>
          </div>
          <div>
            <p className="eyebrow">Heading 3 · Fraunces</p>
            <h3 className="mt-2 text-h3">Replacing a 9-year-old batch system with zero downtime</h3>
          </div>
          <div className="max-w-[66ch]">
            <p className="eyebrow">Body · Inter</p>
            <p className="mt-2">
              Body copy is set in Inter at 17px with generous leading and a 66-character measure, so
              longer paragraphs stay comfortable to read. Links look{" "}
              <a href="#work" className="link">
                like this
              </a>
              , and every interactive element shows a teal focus ring when you tab to it.
            </p>
            <p className="mt-4 text-muted">Muted text is used for context lines, dates and captions.</p>
          </div>
          <div>
            <p className="eyebrow">Tags</p>
            <div className="mt-3">
              <TagList label="Example tags" tags={["Java", "AWS Lambda", "Step Functions", "SQS"]} />
            </div>
          </div>
          <div>
            <p className="eyebrow">TODO link (dev only; hidden in production)</p>
            <div className="mt-3">
              <SmartLink link={{ label: "Project repo", href: "TODO: repo URL" }} />
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" index="02" title="Colour">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {swatches.map((s) => (
            <li key={s.name}>
              <div className={`h-16 rounded-md border border-rule ${s.className}`} />
              <p className="mt-2 text-sm text-muted">{s.name}</p>
            </li>
          ))}
        </ul>
      </Section>

      {(["projects", "teaching", "about", "contact"] as const).map((id, i) => (
        <Section key={id} id={id} index={`0${i + 3}`} title={site.nav.find((n) => n.id === id)?.label ?? id}>
          <p className="text-muted">Placeholder: built in stage 3.</p>
        </Section>
      ))}
    </>
  );
}
