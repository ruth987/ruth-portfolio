/**
 * Renders a TODO value as a visible dashed note in development.
 * Production builds render nothing and log a warning at build time.
 */
export function Placeholder({ text }: { text: string }) {
  if (process.env.NODE_ENV === "production") {
    console.warn(`[content] Omitting placeholder: ${text}`);
    return null;
  }
  return (
    <span className="inline-block rounded-sm border border-dashed border-muted px-2 py-0.5 text-sm text-muted">
      {text}
    </span>
  );
}
