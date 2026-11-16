import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  id: string;
  /** Two-digit index shown above the title, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
};

/**
 * Editorial section: numbered label + serif title in a left column on
 * wide screens, content on the right. Separated by a hairline rule.
 */
export function Section({ id, index, title, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-rule">
      <Container className="grid gap-10 py-20 md:grid-cols-[13rem_1fr] md:gap-12 md:py-28">
        <div>
          <div className="md:sticky md:top-24">
            <p className="eyebrow" aria-hidden>
              {index}
            </p>
            <h2 id={headingId} className="mt-3 text-h2">
              {title}
            </h2>
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </Container>
    </section>
  );
}
