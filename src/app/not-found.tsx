import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-display">This page doesn&apos;t exist.</h1>
      <p className="mt-6 text-lg text-muted">
        <Link href="/" className="link">
          Back to the homepage
        </Link>
      </p>
    </Container>
  );
}
