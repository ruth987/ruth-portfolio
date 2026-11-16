import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg tracking-tight text-ink hover:text-accent">
          {site.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <MobileNav items={site.nav} />
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
