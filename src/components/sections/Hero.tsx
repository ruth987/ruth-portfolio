import Image from "next/image";
import { site } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const { hero, photo } = site;
  return (
    <Container className="pb-20 pt-16 md:pb-28 md:pt-28">
      <div className={photo ? "grid items-center gap-12 md:grid-cols-[1fr_auto]" : undefined}>
        <div>
          {site.openToWork && (
            <div className="animate-rise mb-8">
              <Badge>{site.openToWorkLabel}</Badge>
            </div>
          )}

          <h1>
            <span className="animate-rise block font-sans text-base font-medium tracking-normal text-muted">
              {site.name}
              <span aria-hidden> · </span>
              <span className="sr-only">, </span>
              {site.role}, {site.location}
            </span>
            <span className="animate-rise mt-5 block max-w-[17ch] text-display [animation-delay:80ms]">
              {hero.headline}
            </span>
          </h1>

          <p className="animate-rise mt-7 max-w-[42ch] text-xl text-ink/80 [animation-delay:160ms] md:text-2xl md:leading-snug">
            {hero.subline}
          </p>

          {hero.currently && (
            <p className="animate-rise mt-4 text-muted [animation-delay:200ms]">{hero.currently}</p>
          )}

          <ul
            className="animate-rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:260ms]"
            aria-label="Links"
          >
            <li>
              <ButtonLink link={hero.cta.cv} variant="primary" download />
            </li>
            <li>
              <ButtonLink link={hero.cta.linkedin} />
            </li>
            <li>
              <ButtonLink link={hero.cta.github} />
            </li>
            <li>
              <ButtonLink link={hero.cta.email} />
            </li>
          </ul>
        </div>

        {photo && (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={280}
            height={350}
            priority
            className="animate-rise aspect-[4/5] w-56 rounded-md object-cover [animation-delay:120ms] md:w-[280px]"
          />
        )}
      </div>
    </Container>
  );
}
