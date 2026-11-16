"use client";

import { useEffect, useId, useState } from "react";
import type { NavItem } from "@/content/types";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 items-center rounded-full px-3 text-sm font-medium text-ink hover:bg-surface"
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-rule bg-bg"
      >
        <ul className="mx-auto max-w-5xl px-6 py-4 sm:px-8">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-xl text-ink hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
