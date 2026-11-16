import type { ReactNode } from "react";
import type { Link } from "@/content/types";
import { isLive } from "@/lib/content";

type Props = {
  link: Link;
  className?: string;
  children?: ReactNode;
  download?: boolean;
};

/**
 * Renders a content link. External links open in a new tab with a hidden
 * hint for screen readers. TODO links render as a visible placeholder in
 * development and are omitted from production builds.
 */
export function SmartLink({ link, className, children, download }: Props) {
  if (!isLive(link)) {
    if (process.env.NODE_ENV === "production") {
      console.warn(`[content] Omitting TODO link "${link.label}": ${link.href}`);
      return null;
    }
    return (
      <span
        className="inline-flex items-center gap-1 rounded-sm border border-dashed border-muted px-2 py-1 text-sm text-muted"
        title={link.href}
      >
        {children ?? link.label} <span aria-hidden>· TODO</span>
      </span>
    );
  }

  const external = link.external ?? /^https?:\/\//.test(link.href);
  return (
    <a
      href={link.href}
      className={className}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children ?? link.label}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
