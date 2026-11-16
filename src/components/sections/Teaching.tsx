import { site } from "@/content/site";
import { formatRange } from "@/lib/content";
import { Section } from "@/components/ui/Section";

export function Teaching() {
  const { intro, items, closing } = site.teaching;
  const [featured, ...rest] = items;

  return (
    <Section id="teaching" index="04" title="Teaching & community">
      {intro && <p className="mb-10 max-w-[60ch] text-lg text-ink/85">{intro}</p>}

      {featured && (
        <article className="max-w-[66ch]">
          <p className="text-sm text-muted">
            {[featured.org, featured.period && formatRange(featured.period)].filter(Boolean).join(" · ")}
          </p>
          <h3 className="mt-1.5 text-h3 md:text-[1.6rem] md:leading-tight">{featured.title}</h3>
          <p className="mt-4 text-lg text-ink/85">{featured.body}</p>
        </article>
      )}

      {rest.length > 0 && (
        <ul className="mt-12 grid gap-x-10 gap-y-10 border-t border-rule pt-10 sm:grid-cols-2">
          {rest.map((item) => (
            <li key={item.title}>
              <p className="text-sm text-muted">
                {[item.org, item.period && formatRange(item.period)].filter(Boolean).join(" · ")}
              </p>
              <h3 className="mt-1.5 font-display text-lg leading-snug">{item.title}</h3>
              <p className="mt-2 text-ink/85">{item.body}</p>
            </li>
          ))}
        </ul>
      )}

      {closing && (
        <p className="mt-14 max-w-[52ch] border-l-2 border-accent pl-6 font-display text-xl leading-relaxed md:text-2xl md:leading-snug">
          {closing}
        </p>
      )}
    </Section>
  );
}
