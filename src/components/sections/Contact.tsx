import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SmartLink } from "@/components/ui/SmartLink";

export function Contact() {
  const { blurb, email, links } = site.contact;
  return (
    <Section id="contact" index="06" title="Contact">
      <p className="max-w-[52ch] text-lg text-ink/85">{blurb}</p>
      <p className="mt-6">
        <a
          href={`mailto:${email}`}
          className="link break-all font-display text-[clamp(1.5rem,3vw+0.75rem,2.5rem)] leading-tight"
        >
          {email}
        </a>
      </p>
      {links.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <SmartLink
                link={link}
                className="link"
                download={link.href.endsWith(".pdf")}
              />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
