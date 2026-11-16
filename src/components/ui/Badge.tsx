export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1 text-sm font-medium text-accent">
      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
