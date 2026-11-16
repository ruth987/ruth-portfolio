import type { Link } from "@/content/types";
import { SmartLink } from "./SmartLink";

type Props = { link: Link; variant?: "primary" | "secondary"; download?: boolean };

const base =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-colors duration-150";
const variants = {
  primary: "bg-accent text-accent-ink hover:bg-ink hover:text-bg",
  secondary: "border border-rule text-ink hover:border-accent hover:text-accent",
};

export function ButtonLink({ link, variant = "secondary", download }: Props) {
  return (
    <SmartLink link={link} download={download} className={`${base} ${variants[variant]}`} />
  );
}
