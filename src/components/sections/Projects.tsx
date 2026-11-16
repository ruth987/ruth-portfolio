import { site } from "@/content/site";
import type { Project } from "@/content/types";
import { formatRange } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SmartLink } from "@/components/ui/SmartLink";
import { TagList } from "@/components/ui/Tag";

function ProjectItem({ project }: { project: Project }) {
  const titleId = `project-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const meta = [formatRange(project.period), project.team].filter(Boolean).join(" · ");

  return (
    <article aria-labelledby={titleId} className="py-12 first:pt-0 last:pb-0">
      <p className="text-sm text-muted">{meta}</p>
      <h3 id={titleId} className="mt-3 text-h3 md:text-[1.6rem] md:leading-tight">
        {project.name}
      </h3>
      <p className="mt-4 max-w-[60ch] text-lg text-ink/85">{project.description}</p>

      <div className="mt-7 rounded-md bg-surface p-6">
        <p className="eyebrow">My part</p>
        <p className="mt-2 font-medium">{project.myPart}</p>
        <ul className="mt-3 space-y-2 text-ink/85">
          {project.bullets.map((b) => (
            <li key={b} className="relative pl-5">
              <span aria-hidden className="absolute left-0 text-muted">
                –
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <TagList tags={project.stack} label={`Technologies for ${project.name}`} />
        {project.links.length > 0 && (
          <ul className="flex flex-wrap gap-4 text-sm">
            {project.links.map((link) => (
              <li key={link.label}>
                <SmartLink link={link} className="link" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="divide-y divide-rule">
        {site.projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
