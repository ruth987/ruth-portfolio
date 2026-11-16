export function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-sm bg-surface px-2 py-0.5 text-[0.8rem] text-muted">{children}</li>
  );
}

export function TagList({ tags, label }: { tags: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}
