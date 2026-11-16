import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {site.location}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Elsewhere">
          {site.footer.links.map((link) => (
            <li key={link.label}>
              <SmartLink link={link} className="text-muted underline decoration-rule underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent" />
            </li>
          ))}
        </ul>
        <p>{site.footer.note}</p>
      </Container>
    </footer>
  );
}
