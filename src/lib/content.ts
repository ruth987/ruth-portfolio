import type { DateRange, Link, YearMonth } from "@/content/types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const isTodo = (value: string | undefined): boolean =>
  !value || value.trimStart().startsWith("TODO");

/** Links that are safe to ship. TODO links are dropped in production. */
export function isLive(link: Link): boolean {
  return !isTodo(link.href);
}

export function formatYearMonth(ym: YearMonth): string {
  const [year, month] = ym.split("-");
  const name = MONTHS[Number(month) - 1];
  return name ? `${name} ${year}` : String(year);
}

/** "Sep 2025 – Present", or "Apr 2026" when start and end match. */
export function formatRange({ start, end }: DateRange): string {
  if (start === end) return formatYearMonth(start);
  const to = end === "Present" ? "Present" : formatYearMonth(end);
  return `${formatYearMonth(start)} – ${to}`;
}
