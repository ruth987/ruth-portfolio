import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Education, Role } from "@/content/types";
import { formatRange } from "@/lib/content";
import { Section } from "@/components/ui/Section";

function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative pb-12 pl-8 last:pb-0">
      <span
        aria-hidden
        className="absolute left-[-5px] top-2 size-[9px] rounded-full border-2 border-accent bg-bg"
      />
      {children}
    </li>
  );
}

function RoleItem({ role }: { role: Role }) {
  return (
    <TimelineItem>
      <p className="text-sm text-muted">
        {role.periods.map(formatRange).join(" · ")}
        <span aria-hidden> · </span>
        <span className="sr-only">, </span>
        {role.location}
      </p>
      <h3 className="mt-1.5 text-h3">
        {role.title}
        <span className="text-muted">, {role.org}</span>
      </h3>
      {role.summary && <p className="mt-2 text-ink/85">{role.summary}</p>}
      <ul className="mt-3 space-y-2 text-ink/85">
        {role.bullets.map((b) => (
          <li key={b} className="relative pl-5">
            <span aria-hidden className="absolute left-0 text-muted">
              –
            </span>
            {b}
          </li>
        ))}
      </ul>
      {role.seeAlso && (
        <a href={role.seeAlso.href} className="link mt-3 inline-block text-sm">
          {role.seeAlso.label}
        </a>
      )}
    </TimelineItem>
  );
}

function EducationItem({ item }: { item: Education }) {
  return (
    <li>
      <p className="text-sm text-muted">
        {formatRange(item.period)}
        <span aria-hidden> · </span>
        <span className="sr-only">, </span>
        {item.location}
      </p>
      <h4 className="mt-1 font-display text-lg leading-snug">
        {item.credential}
        <span className="text-muted">, {item.school}</span>
      </h4>
      {item.notes && (
        <ul className="mt-2 space-y-1.5 text-[0.95rem] text-ink/85">
          {item.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="border-l border-rule">
        {site.experience.map((role) => (
          <RoleItem key={`${role.org}-${role.title}`} role={role} />
        ))}
      </ol>

      <div className="mt-20">
        <h3 className="eyebrow">Education</h3>
        <ul className="mt-6 space-y-8">
          {site.education.map((item) => (
            <EducationItem key={item.school} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
