import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { CaseStudy } from "@/content/types";
import { formatRange, isTodo } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

function Bullets({ items }: { items: string[] }) {
  if (items.length === 1) return <p>{items[0]}</p>;
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span aria-hidden className="absolute left-0 text-muted">
            –
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Row({ label, children, emphasis }: { label: string; children: ReactNode; emphasis?: boolean }) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
      <dt className="eyebrow pt-1">{label}</dt>
      <dd className={emphasis ? "border-l-2 border-accent pl-4 text-ink" : "text-ink/85"}>{children}</dd>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const titleId = `case-${study.id}`;
  const meta = [study.org, formatRange(study.period), study.context].filter(Boolean).join(" · ");
  const problemIsTodo = isTodo(study.problem);
  const showProblem = !problemIsTodo || process.env.NODE_ENV !== "production";
  if (!showProblem) console.warn(`[content] Hiding TODO problem for "${study.title}"`);

  return (
    <article aria-labelledby={titleId} className="py-12 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <p className="text-sm text-muted">{meta}</p>
        {study.highlight && <Badge>{study.highlight}</Badge>}
      </div>
      <h3 id={titleId} className="mt-3 text-h3 md:text-[1.6rem] md:leading-tight">
        {study.title}
      </h3>

      <dl className="mt-7 space-y-6">
        {showProblem && (
          <Row label="Problem">
            {problemIsTodo ? <Placeholder text={study.problem} /> : study.problem}
          </Row>
        )}
        <Row label="What I did">
          <Bullets items={study.did} />
        </Row>
        <Row label="Result" emphasis>
          <Bullets items={study.result} />
        </Row>
      </dl>

      {study.tags.length > 0 && (
        <div className="mt-7 sm:pl-[calc(7.5rem+1.5rem)]">
          <TagList tags={study.tags} label={`Technologies for ${study.title}`} />
        </div>
      )}
    </article>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" index="01" title="Selected work">
      <div className="divide-y divide-rule">
        {site.selectedWork.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </Section>
  );
}
